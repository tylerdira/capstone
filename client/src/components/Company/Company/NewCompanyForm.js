import React, {useState} from "react";
import NewTechnicianForm from "./NewTechnicianForm";

function NewCompanyForm({newCompany, newTechnician}) {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        fetch('/companies' , {
          method: 'POST',
          headers: { "Content-type": "application/json"},
          body: JSON.stringify({
            name,
            email,
            password,
            phone_number: phoneNumber,
            role: "Company"
        }),
      })
      .then(r => r.json())
      .then(aNewCompany => {
        newCompany(aNewCompany);
        setName("");
        setPhoneNumber("");
        setEmail("");
        setPassword("");
      })
  
      }

    return (
        <div>
            <form className='px-4 my-32 max-w-3xl mx-auto space-y-3' onSubmit={handleSubmit}>
                <label>Company Name</label>
                    <input className="block py-2 px-4 rounded focus:border-teal-500" onChange={(e) => setName(e.target.value)} value={name}></input>
                <label>Company Phone Number</label>
                    <input className="block py-2 px-4 rounded focus:border-teal-500" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}></input>
                <label>Email</label>
                    <input className="block py-2 px-4 rounded focus:border-teal-500" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <label>Password</label>
                    <input className="block py-2 px-4 rounded focus:border-teal-500" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                <button className="text-white bg-gradient-to-br from-blue-400 to-green-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type='submit'>Sign Up!</button>
            </form>
        </div>
    );
  }
  
  export default NewCompanyForm;