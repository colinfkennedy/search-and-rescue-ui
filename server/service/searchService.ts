import * as rp from  'request-promise';
import * as Promise from 'bluebird';

export class SearchService {

  makeSearchRequest(searchQuery): Promise<any> {
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
        return parsedBody
      })
      .catch(
        function (err) {
          console.error("Error making search request: ", err);
        }
      );
  }
}
