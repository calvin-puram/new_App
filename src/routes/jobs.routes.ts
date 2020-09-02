import { Router } from "express";
import Route from "../interface/routes.interface";
import JobsController from "../controllers/jobs.controller";

class JobsRoute {
  public JobsRouter = new JobsController();
  public path = "/jobs";
  public router = Router();

  constructor() {
    this.initializedRoute();
  }

  private initializedRoute() {
    this.router.get(`${this.path}`, this.JobsRouter.jobs);
  }
}

export default JobsRoute;
