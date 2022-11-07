import React, {useState} from "react";

function NewCompanyForm({newCompany}) {

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
            <form onSubmit={handleSubmit}>
                <label>Company Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name}></input>
                <label>Company Phone Number</label>
                    <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}></input>
                <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password}></input>
                <button type='submit'>Sign Up!</button>
            </form>
        </div>
    );
  }
  
  export default NewCompanyForm;