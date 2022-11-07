import { Switch, Route } from "react-router-dom";
import Home from "./components/Company/Company/Home";
import AllTechnicians from "./components/Company/Company/AllTechnicians";
import AssignedJobs from "./components/Company/Company/AssignedJobs";
import UnassignedJobs from "./components/Company/Company/UnassignedJobs";
import Navbar from "./components/Company/Company/Navbar";
import Login from "./components/Login/Login";
import React, {useState, useEffect} from "react";

function App() {

  const [allJobs, setAllJobs] = useState([])
  const [allHomes, setAllHomes] = useState([])
  const [technicians, setTechnicians] = useState([])
  const [allCompanies, setAllCompanies] = useState([])
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([])


  //Auto Login
  useEffect(() => {
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setUser(user))
      } else {
        res.json().then(json => setErrors(json.error))
      }
    })
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
    .then(data => setAllJobs(data))
  }, [])
  useEffect(() => {
    fetch('/companies')
    .then(res => res.json())
    .then(data => setAllCompanies(data))
  }, [])



  const newJob = (newJob) => {
    setAllJobs(allJobs => [...allJobs, newJob])
  }

  const newTechnician = (newTechnician) => {
    setTechnicians(allTechnician => [...allTechnician, newTechnician])
  }

  const updateUser = (user) => setUser(user)
  
  function newCompany(company) {
    setAllCompanies([...allCompanies, company])
  }


  if(!user) return <Login newCompany={newCompany} updateUser={updateUser}/>

  return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/technicians">
            <AllTechnicians setTechnicians={setTechnicians} allCompanies={allCompanies} newTechnician={newTechnician} technicians={technicians}/>
          </Route>
          <Route exact path="/assignedjbos">
            <AssignedJobs allJobs={allJobs}/>
          </Route>
          <Route exact path="/unassignedjobs">
            <UnassignedJobs />
          </Route>
          <Route exact path="/">
            <Home newJob={newJob} technicians={technicians} allHomes={allHomes}/>
          </Route>
        </Switch>
      </div>
    
  );
}

export default App;
