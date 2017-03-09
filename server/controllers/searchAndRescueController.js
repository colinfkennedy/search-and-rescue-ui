"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searchService_1 = require("../service/searchService");
const rp = require("request-promise");
class SearchAndRescueController {
    constructor() {
        this.searchService = new searchService_1.SearchService();
    }
    search(req, res) {
        console.log("Received Search Request: ", req.body);
        // console.log("Search service", this.searchService);
        var options = {
            method: 'POST',
            uri: 'http://10.182.114.26:8081/nlp-backend/search',
            body: {
                searchQuery: JSON.stringify(req.body)
            },
            headers: {
                'Content-Type': 'application/json'
            },
            json: true // Automatically stringifies the body to JSON
        };
        console.log("Making request to: ", options.uri);
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
        });
        // this.searchService.makeSearchRequest(req.body).then(response => {
        //   res.send({
        //     results: "From Server",
        //     data: response
        //   });
        //   console.log("Response sent");
        // });
    }
    ;
}
exports.SearchAndRescueController = SearchAndRescueController;
