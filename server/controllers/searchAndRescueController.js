"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searchService_1 = require("../service/searchService");
const config_1 = require("../config");
const rp = require("request-promise");
class SearchAndRescueController {
    constructor() {
        this.searchService = new searchService_1.SearchService();
    }
    search(req, res) {
        console.log("Received Search Request: ", req.body);
        var searchApiEndpoint = config_1.Config.get('searchAndRescueApi');
        console.log("Using Search and Rescue endpoint: ", searchApiEndpoint);
        var options = {
            method: 'POST',
            uri: searchApiEndpoint,
            body: req.body,
            headers: {
                'Content-Type': 'application/json'
            },
            json: true // Automatically stringifies the body to JSON
        };
        rp(options)
            .then(parsedBody => {
            res.send({
                results: "From Server",
                data: parsedBody
            });
            console.log("Response sent");
        })
            .catch(function (err) {
            console.error("Error making search request: ", err);
            res.status(500).send('Something went wrong');
        });
    }
    ;
}
exports.SearchAndRescueController = SearchAndRescueController;
