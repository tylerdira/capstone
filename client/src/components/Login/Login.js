import React, {useState} from "react";
import NewCompanyForm from "../Company/Company/NewCompanyForm";
import {useHistory} from 'react-router-dom'

function Login({updateUser, newCompany, newTechnician}) {

    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {email, password} = formData

    function handleSubmit(e) {
        e.preventDefault();
        const company = {
            email,
            password
        }
        fetch('/login', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(company)
          })
          .then(res => {
              if(res.ok){
                  res.json().then(company => {
                      updateUser(company)
                      history.push(`/`)
                  })
              }else {
                  res.json().then(json => setErrors(json.errors))
                //   {console.log(errors)}
              }
          })
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }

    function formToggle() {
        setShowForm(!showForm)
    }

    return (
      <div className="block p-6 h-screen bg-blue-400">
        <h2 className="text-center">Welcome to Technician Communicator!</h2>
        <form className='px-4 my-32 max-w-3xl mx-auto space-y-3' onSubmit={handleSubmit}>
            <label className="">Email</label>
                <input className="block py-2 px-4 rounded focus:border-teal-500" name='email' value={email} onChange={handleChange}></input>
            <label className="">Password</label>
                <input className="block py-2 px-4 rounded focus:border-teal-500" type='password' name='password' value={password} onChange={handleChange}></input>
            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' type='submit'>Login</button>
        </form>
        <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={formToggle}>Sign Up</button>
        {errors ? <div>{errors}</div>:null}
        {showForm ? <NewCompanyForm newTechnician={newTechnician} newCompany={newCompany}/> : null}
        
      </div>
    );
  }
  
  export default Login;