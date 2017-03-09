import * as express from  'express';
import { Router } from 'express';
import { SearchAndRescueController } from './controllers/searchAndRescueController';

export class AppRouter {
  router: Router;
  searchAndRescueController: SearchAndRescueController;

  constructor() {
    this.router = express.Router();
    this.searchAndRescueController = new SearchAndRescueController();
    this.configure();
  }

  configure(): void {
    this.router.get('/search', this.searchAndRescueController.search);
  }

  getRouter(): Router {
    return this.router;
  }
}
