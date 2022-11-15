function JobCard({job, deleteJob}) {

    return (
      <div className="p-4 m-4 w-[300px] border border-black bg-blue-500">
        {/* <p>{job.technician.first_name} {job.technician.last_name}</p> */}
        {/* <p>{job.home.address}</p> */}
        <p>Status: {job.status}</p>
        <p>Description: {job.description}</p>
        <p>Tech ID: {job.technician_id}</p>
        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={(e) => {
            e.stopPropagation();
            deleteJob(job.id)
            }}>Delete Job</button>
        </div>
    );
  }
  
  export default JobCard;