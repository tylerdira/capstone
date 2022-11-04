import React, {useState, useEffect} from "react";
import Technician from "./Technician";

function AllTechnicians() {

  const [technicians, setTechnicians] = useState([])


  useEffect(() => {
    fetch('/technicians')
    .then(r => r.json())
    .then(data => setTechnicians(data))
  }, [])
  
  


    return (
      <div>
        {technicians.map(tech => <Technician key={tech.id}/>)}
      </div>
    );
  }
  
  export default AllTechnicians;