import JobCard from "./JobCard";
import UnassignedJobCard from "./UnassignedJobCard";
import React, {useState, useEffect} from "react";

function UnassignedJobs({unassignedJobs, deleteJob, user, technicians, updateJob}) {

  const [yourJobTasks, setYourJobTasks] = useState([])


   useEffect(() => {
    fetch(`/companies/${user.id}`)
    .then(res => res.json())
    .then(data => setYourJobTasks(data.jobs))
  }, [])

  const yourUnassignedJobTasks = yourJobTasks.filter(task => task.status === "Not Assigned")

  {console.log(yourUnassignedJobTasks)}

    return (
      <div>
        <p className="text-center">Unassigned Jobs</p>
        {yourUnassignedJobTasks.map(job => <UnassignedJobCard updateJob={updateJob} technicians={technicians} user={user} deleteJob={deleteJob} key={job.id} job={job}/>)}
      </div>
    );
  }
  
  export default UnassignedJobs;