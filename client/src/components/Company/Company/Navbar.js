import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

function Navbar() {

    return (
      <div>
        <NavLink to="/" exact > Home </NavLink>
        <NavLink to="/technicians" exact > Technicians </NavLink>
        <NavLink to="/assignedjbos" exact > Assigned Jobs </NavLink>
        <NavLink to="/unassignedjobs" exact > Unassigned Jobs </NavLink>
      </div>
    );
  }
  
  export default Navbar;