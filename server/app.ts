import * as express from 'express';
import { AppRouter } from './router';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

let app: express.Express = express();

class SearchAndRescueApp {
  run(): void {
    app.use(bodyParser.json());
    app.use('/', express.static('ui'));
    app.use('/vendor/', express.static('node_modules'));
    app.use('/api/', new AppRouter().getRouter());
    app.use(morgan('dev'));

    console.log('Starting application on port 8080.');
    app.listen(8080);
  };
}

export { SearchAndRescueApp }
