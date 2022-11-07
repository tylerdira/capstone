function JobCard({job}) {

    return (
      <div>
        {console.log(job)}
        <p>{job.technician.first_name} {job.technician.last_name}</p>
        <p>{job.home.address}</p>
        <p>{job.status}</p>
        <p>{job.description}</p>
        <p>{job.completed}</p>
        </div>
    );
  }
  
  export default JobCard;