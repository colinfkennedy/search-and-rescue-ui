let gulp = require('gulp');
const less = require('gulp-less');
const ts = require('gulp-typescript');
const mocha = require('gulp-spawn-mocha');
const tsconfig = require('./tsconfig.json');
const _ = require('lodash');

gulp = require('gulp-help')(gulp);

const DEBUG = process.env.NODE_ENV === 'debug';
const CI = process.env.CI === 'true';

/* Typescript */

gulp.task('ts:server', function() {
    return typescript('server', 'server');
});

gulp.task('ts:unit:server', function() {
    return typescript('test/unit/server', 'test/unit/server');
});

gulp.task('ts', ['ts:server', 'ts:unit:server']);

/* Less */

gulp.task('less', () => {
    gulp.src('ui/main.less')
    .pipe(less())
    .pipe(gulp.dest('ui/'));
});

gulp.task('watch:less', () => {
    gulp.watch('ui/main.less', ['less']);
});

/* Main build files */

gulp.task('build', ['ts', 'less']);

/* Tests */

gulp.task('test:unit:server', ['ts:unit:server', 'ts:server'], function() {
    return gulp.src(['dist/test/unit/server/**/*.test.js'], { read: false })
        .pipe(mocha({
            debugBrk: DEBUG,
            //r: 'test/setup.js',
            R: CI ? 'spec' : 'nyan',
            istanbul: !DEBUG
        }, false));
});

gulp.task('watch:test:unit:server', ['test'], function() {
    gulp.watch('dist/*', ['test:unit:server']);
});

gulp.task('test', ['test:unit:server']);

// Helper functions
function typescript(source, destination) {
    return gulp.src(`${source}/**/*.ts`)
        .pipe(ts(_.extend(tsconfig.compilerOptions, {
            outDir: `dist/${destination}`,
        })))
        .js.pipe(gulp.dest(`dist/${destination}/`));
}
