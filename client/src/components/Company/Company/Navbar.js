import React from "react";
import {NavLink } from "react-router-dom";

function Navbar({handleLogout}) {


    return (
      <div className=''>
        <div className='border-4 border-indigo-200 border-b-indigo-500'>
          <div className='flex justify-between'>
            <NavLink to="/" exact > 
              <p className="py-5 px-10 border ">Home</p>
            </NavLink>
            <NavLink to="/technicians" exact >
              <p className="py-5 px-10 border ">Technicians </p>
            </NavLink>
            <NavLink to="/assignedjobs" exact > 
              <p className="py-5 px-10 border ">Assigned Jobs </p>
            </NavLink>
            <NavLink to="/unassignedjobs" exact > 
              <p className="py-5 px-10 border "> Unassigned Jobs</p>
            </NavLink>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleLogout}> Log out</button>
            </div>
            
          </div>
        </div>
      </div>

        
    );
  }
  
  export default Navbar;