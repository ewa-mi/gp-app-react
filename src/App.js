import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import DoctorSchedule from "./views/DoctorSchedule.js";
import PatientSignup from "./views/PatientSignup.js";
import PatientDatabase from "./views/PatientDatabase.js";
import Home from "./views/Home.js";
import NavBar from "./NavBar.js";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/doctor-schedule" component={DoctorSchedule} />
        <Route path="/patient-signup" component={PatientSignup} />
        <Route path="/patient-database" component={PatientDatabase} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
