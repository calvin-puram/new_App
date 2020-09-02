const baseUrl: string = "https://jobs.github.com/positions.json?page=1";
import axios from "axios";

class JobService {
  public getJobs = async () => {
    let totalPage = 1;
    let page = 0;
    const jobs = [];
    while (totalPage > 0) {
      const res = await axios.get(`${baseUrl}?page=${page}`);
      const data = jobs.push(...res.data);
      totalPage = res.data.length;
      page++;
    }
    return jobs;
  };
}

export default JobService;
