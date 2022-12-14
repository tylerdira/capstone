import React, {useState} from "react";


function NewJobForm({allHomes, technicians, newJob, user}) {

  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [technician, setTechnician] = useState("");
  const [completed, setCompleted] = useState(false);



  function handleAddressChange(e) {
    e.preventDefault();
    setAddress(e.target.value)
  }
  function handleStatusChange(e) {
    e.preventDefault();
    setStatus(e.target.value)
  }
  function handleTechnicianChange(e) {
    e.preventDefault();
    setTechnician(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/job_tasks', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        status,
        description,
        completed,
        technician_id: technician,
        home_id: address
      }),
    })
    .then(r => r.json())
    .then(aNewJob => {
      newJob(aNewJob);
      setAddress("");
      setStatus("");
      setDescription("");
      setCompleted(false);
      setTechnician("")
    })
  }

  const yourTechnicians = technicians.filter(tech => tech.company.id === user.id)

    return (
      <div  className="bg-blue-400 block">
        <h1 className="py-10 text-center">New Job Form</h1>
        <form className='content-center px-20 my-32 max-w-3xl mx-auto space-y-10' onSubmit={handleSubmit}>
            <label className="block">Address</label>
              <select className="py-2 px-4 rounded focus:border-teal-500" onChange={handleAddressChange}>
                <option selected></option>
                {allHomes.map(home => <option key={home.id} value={home.id}>{home.address}</option>)}
              </select>
            <label className="block">Status</label>
              <select className="block py-2 px-4 rounded focus:border-teal-500" onChange={handleStatusChange}>
              <option selected></option>
                  <option>Not Assigned</option>
                  <option>Assigned, Not Started</option>
                  <option>En route</option>
                  <option>In Progress</option>
                  <option>Complete</option>
              </select>
            <label className="block">Description</label>
                <input className="form-control
                      block w-full px-3 py-1.5 text-base
                      bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={e => setDescription(e.target.value)} value={description}/>
            <label className="block">Technician</label>
                <select className="block py-2 px-4 rounded focus:border-teal-500" onChange={handleTechnicianChange}>
                  <option selected></option>
                  {yourTechnicians.map(tech => <option key={tech.id} value={tech.id}>{tech.first_name} {tech.last_name}</option>)}
                </select>
            <button className="text-white bg-gradient-to-br from-green-400 to-purple-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">Create Job</button>
            
        </form>
        
      </div>
    );
  }
  
  export default NewJobForm;