import JobsService from "../service/jobs.service";

class JobsController {
  public getJobs = new JobsService();
  public jobs = async () => {
    const totalJobs = this.getJobs.getJobs();
    console.log(totalJobs);
  };
}

export default JobsController;
