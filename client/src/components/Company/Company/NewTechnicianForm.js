import React, {useState} from "react";

function NewTechnicianForm({newTechnician, allCompanies, user}) {

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
        company_id: user.id
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
        <h3 className="text-center ">New Technician Form</h3>
        <form className='px-4 my-32 max-w-xl mx-auto space-y-3' onSubmit={handleSubmit}>
          <label>First Name</label>
            <input className="block py-2 px-4 rounded focus:border-teal-500" onChange={e => setFirstName(e.target.value)} value={firstName}/>
          <label>Last Name</label>
            <input className="block py-2 px-4 rounded focus:border-teal-500" onChange={e => setLastName(e.target.value)} value={lastName}/>
          <label>Email</label>
            <input className="block py-2 px-4 rounded focus:border-teal-500" onChange={e => setEmail(e.target.value)} value={email}/>
          <label>Password</label>
            <input className="block py-2 px-4 rounded focus:border-teal-500" onChange={e => setPassword(e.target.value)} value={password}/>
          <label>Profession</label>
            <input className="block py-2 px-4 rounded focus:border-teal-500" onChange={e => setProfession(e.target.value)} value={profession}/>
          <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"  type='submit'>Create Technician</button>
        </form>
      </div>
    );
  }
  
  export default NewTechnicianForm;