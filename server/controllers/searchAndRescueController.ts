import { Request, Response } from 'express';

export class SearchAndRescueController {
  search(req: Request, res: Response): void {
    console.log("Request: ", req)
  };
}
