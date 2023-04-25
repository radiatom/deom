import React from "react";
import { NavLink } from "react-router-dom";
//@ts-ignore
import logo from "./../../img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="navbarlogo" to="/home">
        <img src={logo} alt="logo" />
      </NavLink>
      <NavLink className="navlink" to="/home">
        Home
      </NavLink>
      <NavLink className="navlink" to="/home">
        Product
      </NavLink>
      <NavLink className="navlink" to="/home">
        Calculator
      </NavLink>
      <NavLink className="navlink" to="/home">
        Portfolio
      </NavLink>
      <NavLink className="navlink" to="/home">
        Services
      </NavLink>
      <NavLink className="navlink" to="/home">
        Support
      </NavLink>
      <NavLink className="navlink" to="/home">
        Contacts
      </NavLink>
      <div className="navbarContacts">
        <span>+38 (000) 00-00-000</span>
        <span>Kyiv, str. Linenaya 0, FIM Center</span>
        <span>EN</span> 
      </div>
    </div>
  );
};
export default Navbar;
