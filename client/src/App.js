import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Company/Company/Home";
import AllTechnicians from "./components/Company/Company/AllTechnicians";
import AssignedJobs from "./components/Company/Company/AssignedJobs";
import UnassignedJobs from "./components/Company/Company/UnassignedJobs";
import Navbar from "./components/Company/Company/Navbar";
import Login from "./components/Login/Login";
import React, {useState, useEffect} from "react";
import emailjs from '@emailjs/browser';






function App() {

  const [allJobs, setAllJobs] = useState([])
  const [allHomes, setAllHomes] = useState([])
  const [technicians, setTechnicians] = useState([])
  const [allCompanies, setAllCompanies] = useState([])
  const [user, setUser] = useState(null)





  useEffect(() => {
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          updateUser(user)
        })
      }
    })
  }, [])

  useEffect(() => {
    fetch('/companies')
    .then(res => res.json())
    .then(data => setAllCompanies(data))
  }, [])

  useEffect(() => {
    fetch('/technicians')
    .then(r => r.json())
    .then(data => setTechnicians(data))
  }, [])
  useEffect(() => {
    fetch('/homes')
    .then(res => res.json())
    .then(data => setAllHomes(data))
  }, [])
  useEffect(() => {
    fetch('/job_tasks')
    .then(res => res.json())
    .then((data) => setAllJobs(data))
  }, [])

  function handleLogout(){
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(setUser(false))
  }

  const newJob = (newJob) => {
    setAllJobs([...allJobs, newJob])
  }

  const deleteJob = (jobid) =>  {
    var confirm = window.confirm("Are you sure you want to delete this?");
    if (confirm) {
      fetch(`/job_tasks/${jobid}`, {method: 'DELETE'})
      .then(setAllJobs(allJobs.filter(eachJob => eachJob.id !== jobid)))
      // .then(window.location.href = '/assignedjobs')
    }
  }

  const newTechnician = (newTechnician) => {
    setTechnicians(allTechnician => [...allTechnician, newTechnician])
  }

  const updateUser = (user) => setUser(user)
  
  const newCompany = (newCompany) => {
    setAllCompanies([...allCompanies, newCompany])
  }

  const unassignedJobs = allJobs.filter(job => job.technician.first_name === 'NOT')

  console.log(user)

  const publicKey = 'XFRJeFRsbvg8_hWJe'

  const sendEmail = (e) => {
    e.preventDefault();
    var templateParams = {
      from_name: user.name,
      message: 'See you soon!'
    };

    emailjs.send('service_pn0fxum', 'template_tgom40b', templateParams, publicKey)
      .then(function(response) {
        window.alert('Message sent', response.status, response.text);
      }, function(error) {
        window.alert('FAILED',error);
      });

  
  }


  if(!user) {return <Login newTechnician={newTechnician} newCompany={newCompany} updateUser={updateUser}/>} 



  return (
      <div className="h-screen bg-blue-400">
        <Navbar handleLogout={handleLogout}/>
        <Switch>
          <Route exact path="/technicians">
            <AllTechnicians user={user} setTechnicians={setTechnicians} allCompanies={allCompanies} newTechnician={newTechnician} technicians={technicians}/>
          </Route>
          <Route exact path="/assignedjobs">
            <AssignedJobs sendEmail={sendEmail} user={user} technicians={technicians} deleteJob={deleteJob} allJobs={allJobs}/>
          </Route>
          <Route exact path="/unassignedjobs">
            <UnassignedJobs deleteJob={deleteJob} unassignedJobs={unassignedJobs}/>
          </Route>
          <Route exact path="/">
            <Home user={user} newJob={newJob} technicians={technicians} allHomes={allHomes}/>
          </Route>
        </Switch>
      </div>
      
  );


}

export default App;
