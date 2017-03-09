"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchAndRescueController {
    search(req, res) {
        console.log("Request: ", req);
        return {
            "key": "From Server"
            "value": "Search Results"
        }
    };
}
exports.SearchAndRescueController = SearchAndRescueController;
