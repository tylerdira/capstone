import React, {useState} from "react";

function NewTechnicianForm({newTechnician, allCompanies}) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profession, setProfession] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    fetch('/technicians' , {
      method: 'POST',
      headers: { "Content-type": "application/json"},
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password_digest: password,
        profession,
        role: "Technician",
//Configure compnay_id to be the ID of the logged in compnay
        company_id: 1
    }),
  })
  .then(r => r.json())
  .then(aNewTechnician => {
    newTechnician(aNewTechnician);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setProfession("");
  })
  }
  

    return (
      <div>
        New Technician Form
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
            <input onChange={e => setFirstName(e.target.value)} value={firstName}/>
          <label>Last Name</label>
            <input onChange={e => setLastName(e.target.value)} value={lastName}/>
          <label>Email</label>
            <input onChange={e => setEmail(e.target.value)} value={email}/>
          <label>Password</label>
            <input onChange={e => setPassword(e.target.value)} value={password}/>
          <label>Profession</label>
            <input onChange={e => setProfession(e.target.value)} value={profession}/>
          <button type='submit'>Create Technician</button>
        </form>
      </div>
    );
  }
  
  export default NewTechnicianForm;