import React, {useState} from "react";

function UnassignedJobCard({job, deleteJob, technicians, user, updateJob}) {

  const [status, setStatus] = useState("");
  const [technician, setTechnician] = useState("");
  const [showForm, setShowForm] = useState(false)
  
  function handleClick() {
    setShowForm(!showForm)
  }

  function handleStatusChange(e) {
    e.preventDefault();
    setStatus(e.target.value)
  }

  function handleTechnicianChange(e) {
    e.preventDefault();
    setTechnician(e.target.value)
  }

  const yourTechnicians = technicians.filter(tech => tech.company.id === user.id)

  const handleSubmit = () => {
    fetch(`/job_tasks/${job.id}`, {
      method: 'PATCH',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
        status,
        technician_id: technician
      })
    })
  }
 

    return (
      <div className="p-4 m-4 w-[300px] border border-black bg-blue-500">
        {/* <p>Home Address: {job.home.address}</p> */}
        <p>Description: {job.description}</p>
        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={(e) => {
            e.stopPropagation();
            deleteJob(job.id)
        }}>Delete Job</button>
        <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleClick}>Assign</button>
        {showForm ? 
          <form onSubmit={handleSubmit} className="block">
            <label className="block">Technician</label>
            <select onChange={(e) => handleTechnicianChange(e)}>
                  <option selected></option>
                  {yourTechnicians.map(tech => <option key={tech.id} value={tech.id}>{tech.first_name} {tech.last_name}</option>)}
            </select>
            <label className="block">Status</label>
              <select onChange={handleStatusChange}>
              <option selected></option>
                  <option>Not Assigned</option>
                  <option>Assigned, Not Started</option>
                  <option>En route</option>
                  <option>In Progress</option>
                  <option>Complete</option>
              </select>
            <button className="block focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"  type="submit"> Update </button>

          </form>
           : null}
      </div>
    );
  }
  
  export default UnassignedJobCard;