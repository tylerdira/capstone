import React from "react";
import {NavLink } from "react-router-dom";

function Navbar({handleLogout}) {


    return (
      <div>
        <NavLink to="/" exact > Home </NavLink>
        <NavLink to="/technicians" exact > Technicians </NavLink>
        <NavLink to="/assignedjobs" exact > Assigned Jobs </NavLink>
        <NavLink to="/unassignedjobs" exact > Unassigned Jobs </NavLink>
        {/* <NavLink to='/login' exact> <p>Log In</p> </NavLink> */}
        <button onClick={handleLogout}> Log out</button>
      </div>
    );
  }
  
  export default Navbar;