import React, {useState} from "react";
import TechnicianCard from "./TechnicianCard";

function Technician({tech, setTechnicians, technicians}) {

  const [moreInfo, setMoreInfo] = useState(false)

  function toggleMoreInfo() {
    setMoreInfo(!moreInfo);

  }

    return (
      <div>
        <h3>{tech.first_name}</h3>
        <h5>{tech.profession}</h5>
        <button>Assign to Job</button>
        <button onClick={toggleMoreInfo}>More info</button>
        {moreInfo ? <TechnicianCard setTechnicians={setTechnicians} technicians={technicians} tech={tech}/> : null}
      </div>
    );
  }
  
  export default Technician;