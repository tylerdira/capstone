import React, {useState} from "react";
import TechnicianCard from "./TechnicianCard";

function Technician({tech}) {

  const [moreInfo, setMoreInfo] = useState(false)

  function toggleMoreInfo(e) {
    e.preventDefault();
    setMoreInfo(!moreInfo);

  }

    return (
      <div>
        <h3>{tech.first_name}</h3>
        <h5>{tech.profession}</h5>
        <button>Assign to Job</button>
        <button onClick={toggleMoreInfo}>More info</button>
        {moreInfo ? <TechnicianCard /> : null}
      </div>
    );
  }
  
  export default Technician;