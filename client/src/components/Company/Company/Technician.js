import React, {useState} from "react";
import TechnicianCard from "./TechnicianCard";

function Technician({tech, setTechnicians, technicians}) {

  const [moreInfo, setMoreInfo] = useState(false)

  function toggleMoreInfo() {
    setMoreInfo(!moreInfo);

  }

    return (
      <div className="border p-4 m-4 w-[300px] border-black bg-blue-500">
        <h3 className="">{tech.first_name} {tech.last_name}</h3>
        <h5>{tech.profession}</h5>
        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full">Assign to Job</button>
        <button className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full' onClick={toggleMoreInfo}>More info</button>
        {moreInfo ? <TechnicianCard setTechnicians={setTechnicians} technicians={technicians} tech={tech}/> : null}
      </div>
    );
  }
  
  export default Technician;