import JobCard from "./JobCard";
import UnassignedJobCard from "./UnassignedJobCard";

function UnassignedJobs({unassignedJobs, deleteJob}) {

    return (
      <div>
        Unassigned Jobs
        {unassignedJobs.map(job => <UnassignedJobCard deleteJob={deleteJob} key={job.id} job={job}/>)}
      </div>
    );
  }
  
  export default UnassignedJobs;