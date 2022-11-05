import React, {useState} from "react";


function NewJobForm({allHomes, technicians, newJob}) {

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
      headers: {
        "Content-Type": "application/json"
      },
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


    return (
      <div>
        <h1>NewJobForm</h1>
        <form onSubmit={handleSubmit}>
            <label>Address</label>
                <select onChange={handleAddressChange}>
                  <option selected></option>
                  {allHomes.map(home => <option key={home.id} value={home.id}>{home.address}</option>)}
                </select>
            <label>Status</label>
              <select onChange={handleStatusChange}>
              <option selected></option>
                  <option>Not Started</option>
                  <option>En route</option>
                  <option>In Progress</option>
                  <option>Complete</option>
              </select>
            <label>Description</label>
                <input onChange={e => setDescription(e.target.value)} value={description}/>
            <label>Technician</label>
                <select onChange={handleTechnicianChange}>
                  <option selected></option>
                  {technicians.map(tech => <option key={tech.id} value={tech.id}>{tech.first_name} {tech.last_name}</option>)}
                </select>
            <button type="submit">Create Job</button>
            
        </form>
        
      </div>
    );
  }
  
  export default NewJobForm;