import { Request, Response } from 'express';

export class SearchAndRescueController {
  search(req: Request, res: Response): void {
    console.log("Recieved Search Request");
    res.send({
      results: "From Server",
      data: "Search Results"
    });
    console.log("Response sent");
  };
}
