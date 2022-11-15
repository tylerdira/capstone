import React, {useState} from "react";

function NewTechnicianForm({newTechnician, allCompanies, user}) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profession, setProfession] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")
  const [errors, setErrors] = useState(false)


  function handleSubmit(e) {
    e.preventDefault();
    fetch('/technicians' , {
      method: 'POST',
      headers: { "Content-type": "application/json"},
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        phone_number: phoneNumber, 
        password_digest: password,
        profession,
        role: "Technician",
        company_id: user.id
    }),
  })
  .then(r => {
    if(r.ok) {
      r.json().then(aNewTechnician => {
    newTechnician(aNewTechnician);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setProfession("");
  })
  } else {
    r.json().then(json => setErrors(json.errors))
  }
  })
}
  
console.log(errors)
    return (
      <div className="h-screen bg-blue-400">
        <h3 className="text-center ">New Technician Form</h3>
        <form className='px-4 my-32 max-w-xl mx-auto space-y-3' onSubmit={handleSubmit}>
          <label>First Name</label>
            <input className="block py-2 px-4 rounded focus:border-teal-500" onChange={e => setFirstName(e.target.value)} value={firstName}/>
          <label>Last Name</label>
            <input className="block py-2 px-4 rounded focus:border-teal-500" onChange={e => setLastName(e.target.value)} value={lastName}/>
          <label>Email</label>
            <input className="block py-2 px-4 rounded focus:border-teal-500" onChange={e => setEmail(e.target.value)} value={email}/>
          <label>Phone Number</label>
            <input className="block py-2 px-4 rounded focus:border-teal-500" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}/>
          <label>Password</label>
            <input className="block py-2 px-4 rounded focus:border-teal-500" onChange={e => setPassword(e.target.value)} value={password}/>
          <label>Profession</label>
            <input className="block py-2 px-4 rounded focus:border-teal-500" onChange={e => setProfession(e.target.value)} value={profession}/>
          <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"  type='submit'>Create Technician</button>
        </form>
        {errors ? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center">
                    {errors}
                  </div> : null}
      </div>
    );
  }
  
  export default NewTechnicianForm;