"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise");
class SearchService {
    makeSearchRequest(searchQuery) {
        var options = {
            method: 'POST',
            uri: 'http://10.182.114.26:8081/nlp-backend/search',
            body: {
                searchQuery: searchQuery
            },
            json: true // Automatically stringifies the body to JSON
        };
        console.log("Making request to: ", options.uri);
        return rp(options)
            .then(parsedBody => {
            return parsedBody;
        })
            .catch(function (err) {
            console.error("Error making search request: ", err);
        });
    }
}
exports.SearchService = SearchService;
