import Home from "./Home";

function UnassignedJobCard({job, deleteJob}) {

    return (
      <div className="job-card">
        <p>{job.home.address}</p>
        <p>{job.description}</p>
        <button onClick={(e) => {
            e.stopPropagation();
            deleteJob(job.id)
        }}>Delete Job</button>
        </div>
    );
  }
  
  export default UnassignedJobCard;