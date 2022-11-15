import JobCard from "./JobCard";
import React, {useState, useEffect} from "react";


function AssignedJobs({allJobs, deleteJob, technicians, user, sendEmail}) {

  const [yourJobTasks, setYourJobTasks] = useState([])


   useEffect(() => {
    fetch(`/companies/${user.id}`)
    .then(res => res.json())
    .then(data => setYourJobTasks(data.jobs))
  }, [])


    return (
      <div className="h-screen bg-blue-400">
        <h2 className="text-center">Assigned Jobs</h2>
        <div>
          {yourJobTasks.map((job) => <JobCard sendEmail={sendEmail} deleteJob={deleteJob} job={job}/>) }
        </div>
      </div>
    );
  }
  
  export default AssignedJobs;