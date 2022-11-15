import JobCard from "./JobCard";
import UnassignedJobCard from "./UnassignedJobCard";

function UnassignedJobs({unassignedJobs, deleteJob}) {

    return (
      <div>
        <p className="text-center">Unassigned Jobs</p>
        {unassignedJobs.map(job => <UnassignedJobCard deleteJob={deleteJob} key={job.id} job={job}/>)}
      </div>
    );
  }
  
  export default UnassignedJobs;