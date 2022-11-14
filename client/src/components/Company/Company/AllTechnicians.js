import React, {useState} from "react";
import Technician from "./Technician";
import NewTechnicianForm from "./NewTechnicianForm";

function AllTechnicians({technicians, newTechnician, allCompanies, setTechnicians, user}) {

  const yourTechnicians = technicians.filter(tech => tech.company.id === user.id)
  const [showForm, setShowForm] = useState(false)
  
  function formControl(e) {
    e.preventDefault();
    setShowForm(!showForm);
  }


    return (
      <div className="content-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={formControl}>New Technician</button>

        {showForm ? <NewTechnicianForm user={user} allCompanies={allCompanies} newTechnician={newTechnician} /> : null}

      

      {yourTechnicians.map(tech => <Technician technicians={technicians} setTechnicians={setTechnicians} key={tech.id} tech={tech}/>)}

      

          
      </div>
    );
  }
  
  export default AllTechnicians;