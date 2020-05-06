import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="menu">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/doctor-schedule">Doctor Schedule</NavLink>
      <NavLink to="/patient-signup">Patient Signup</NavLink>
      <NavLink to="/patient-database">Patient Database</NavLink>
    </div>
  );
}
