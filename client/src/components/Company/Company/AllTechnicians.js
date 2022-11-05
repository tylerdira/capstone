import React, {useState} from "react";
import Technician from "./Technician";
import NewTechnicianForm from "./NewTechnicianForm";

function AllTechnicians({technicians, newTechnician, allCompanies}) {

  const [showForm, setShowForm] = useState(false)
  
  function formControl(e) {
    e.preventDefault();
    setShowForm(!showForm);
  }

    return (
      <div>
        <button onClick={formControl}>New Technician</button>
        {showForm ? <NewTechnicianForm allCompanies={allCompanies} newTechnician={newTechnician} /> : null}
        {technicians.map(tech => <Technician key={tech.id} tech={tech}/>)}
      </div>
    );
  }
  
  export default AllTechnicians;