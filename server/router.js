"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const searchAndRescueController_1 = require("./controllers/searchAndRescueController");
class AppRouter {
    constructor() {
        this.router = express.Router();
        this.searchAndRescueController = new searchAndRescueController_1.SearchAndRescueController();
        this.configure();
    }
    configure() {
        this.router.post('/search', this.searchAndRescueController.search);
    }
    getRouter() {
        return this.router;
    }
}
exports.AppRouter = AppRouter;
