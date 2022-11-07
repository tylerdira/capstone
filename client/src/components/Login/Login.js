import React, {useState} from "react";
import NewCompanyForm from "../Company/Company/NewCompanyForm";

function Login({updateUser, newCompany}) {

    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const {email, password} = formData

    function handleSubmit(e) {
        e.preventDefault();
        const company = {
            email,
            password
        }
        fetch('/login',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(company)
          })
          .then(res => {
              if(res.ok){
                  res.json().then(company => {
                      updateUser(company)
                  })
              }else {
                  res.json().then(json => setErrors(json.errors))
                  {console.log(errors)}
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
      <div>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
                <input name='email' value={email} onChange={handleChange}></input>
            <label>Password</label>
                <input name='password' value={password} onChange={handleChange}></input>
            <button type='submit'>Login</button>
        </form>
        <button onClick={formToggle}>Sign Up</button>
        {showForm ? <NewCompanyForm newCompany={newCompany}/> : null}
        {errors ? <div>{errors}</div>:null}
      </div>
    );
  }
  
  export default Login;