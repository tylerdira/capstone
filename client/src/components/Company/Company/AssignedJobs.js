import JobCard from "./JobCard";
import React, {useState, useEffect} from "react";


function AssignedJobs({allJobs, deleteJob, technicians, user}) {

  const [yourJobTasks, setYourJobTasks] = useState([])


   useEffect(() => {
    fetch(`/companies/${user.id}`)
    .then(res => res.json())
    .then(data => setYourJobTasks(data.jobs))
  }, [])


    return (
      <div>
        <h2 className="text-center">Assigned Jobs</h2>
        <div>
          {yourJobTasks.map((job) => <JobCard deleteJob={deleteJob} job={job}/>) }
        </div>
      </div>
    );
  }
  
  export default AssignedJobs;