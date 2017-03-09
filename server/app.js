"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = require("./router");
const bodyParser = require("body-parser");
const morgan = require("morgan");
let app = express();
class SearchAndRescueApp {
    run() {
        app.use(bodyParser.json());
        app.use('/', express.static('ui'));
        app.use('/vendor/', express.static('node_modules'));
        app.use('/app/', express.static('app'));
        app.use('/api/', new router_1.AppRouter().getRouter());
        app.use(morgan('dev'));
        console.log('Starting application on port 8080.');
        app.listen(8080);
    }
    ;
}
exports.SearchAndRescueApp = SearchAndRescueApp;
