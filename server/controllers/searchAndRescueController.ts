import { Request, Response } from 'express';
import { SearchService } from '../service/searchService'
import { Config } from '../config';
import * as rp from  'request-promise';

export class SearchAndRescueController {
  searchService: SearchService = new SearchService();

  search(req: Request, res: Response): void {
    console.log("Received Search Request: ", req.body);

    var searchApiEndpoint = Config.get('searchAndRescueApi');
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
      .catch(
        function (err) {
          console.error("Error making search request: ", err);
          res.status(500).send('Something went wrong');
        }
      );
  };
}
