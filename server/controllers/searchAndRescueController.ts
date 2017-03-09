import { Request, Response } from 'express';
import { SearchService } from '../service/searchService'
import * as rp from  'request-promise';

export class SearchAndRescueController {
  searchService: SearchService = new SearchService();

  search(req: Request, res: Response): void {
    console.log("Received Search Request: ", req.body);
    // console.log("Search service", this.searchService);

    var options = {
      method: 'POST',
      uri: 'http://bearshark.advertising.aol.com:8081/nlp-backend/search',
      body: req.body,
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
      .catch(
        function (err) {
          console.error("Error making search request: ", err);
          res.status(500).send('Something went wrong');
        }
      );


    // this.searchService.makeSearchRequest(req.body).then(response => {
    //   res.send({
    //     results: "From Server",
    //     data: response
    //   });
    //   console.log("Response sent");
    // });
  };
}
