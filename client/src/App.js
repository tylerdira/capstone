import { Switch, Route } from "react-router-dom";
import Home from "./components/Company/Company/Home";
import AllTechnicians from "./components/Company/Company/AllTechnicians";
import AssignedJobs from "./components/Company/Company/AssignedJobs";
import UnassignedJobs from "./components/Company/Company/UnassignedJobs";
import Navbar from "./components/Company/Company/Navbar";

function App() {



  return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/technicians">
            <AllTechnicians />
          </Route>
          <Route exact path="/assignedjbos">
            <AssignedJobs />
          </Route>
          <Route exact path="/unassignedjobs">
            <UnassignedJobs />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    
  );
}

export default App;
