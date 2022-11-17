import JobCard from "./JobCard";
import React, {useState, useEffect} from "react";


function AssignedJobs({allJobs, deleteJob, technicians, user, sendEmail}) {

  const [yourJobTasks, setYourJobTasks] = useState([])


   useEffect(() => {
    fetch(`/companies/${user.id}`)
    .then(res => res.json())
    .then(data => setYourJobTasks(data.jobs))
  }, [])



  const yourAssignedJobTasks = yourJobTasks.filter(task => task.status !== "Not Assigned")

    return (
      <div className="h-fit bg-blue-400">
        <h2 className="text-center">Assigned Jobs</h2>
        <div>
          {yourAssignedJobTasks.map((job) => <JobCard key=
          {job.id} sendEmail={sendEmail} deleteJob={deleteJob} job={job}/>) }
        </div>
      </div>
    );
  }
  
  export default AssignedJobs;