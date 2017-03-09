"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
class SearchAndRescueController {
  search(req, res) {
    console.log("Recieved Search Request");
    res.send({
      results: "From Server"
      data: "Search Results"
    });
    console.log("Response sent");
  };
}
exports.SearchAndRescueController = SearchAndRescueController;
