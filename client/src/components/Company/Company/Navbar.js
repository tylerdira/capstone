import React from "react";
import {NavLink } from "react-router-dom";

function Navbar({handleLogout}) {


    return (
      <div className=''>
        <div className='border'>
          <div className='flex gap-10'>
            <NavLink to="/" exact > 
          Home
        </NavLink>
        <NavLink to="/technicians" exact >
           Technicians 
        </NavLink>
        <NavLink to="/assignedjobs" exact > 
          Assigned Jobs 
        </NavLink>
        <NavLink to="/unassignedjobs" exact > 
          Unassigned Jobs
        </NavLink>
        {/* <NavLink to='/login' exact> <p>Log In</p> </NavLink> */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleLogout}> Log out</button>
          </div>
        </div>
      </div>

        
    );
  }
  
  export default Navbar;