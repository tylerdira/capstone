function JobCard({job, deleteJob}) {

    return (
      <div className="job-card">
        {/* <p>{job.technician.first_name} {job.technician.last_name}</p> */}
        {/* <p>{job.home.address}</p> */}
        <p>{job.status}</p>
        <p>{job.description}</p>
        <p>{job.technician_id}</p>
        <button onClick={(e) => {
            e.stopPropagation();
            deleteJob(job.id)
            }}>Delete Job</button>
        </div>
    );
  }
  
  export default JobCard;