import JobCard from "./JobCard";

function AssignedJobs({allJobs}) {

    return (
      <div>
        <h2>Assigned Jobs</h2>
        <div>
          {allJobs.map((job) => <JobCard job={job}/>) }
        </div>
      </div>
    );
  }
  
  export default AssignedJobs;