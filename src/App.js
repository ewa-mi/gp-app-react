import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import DoctorSchedule from "./views/DoctorSchedule.js";
import PatientSignup from "./views/PatientSignup.js";
import PatientDatabase from "./views/PatientDatabase.js";
import Home from "./views/Home.js";
import NavBar from "./NavBar.js";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <NavBar />
      <div className="loading">{loading && "LOADING DATA..."}</div>

      <Switch>
        <Route path="/doctor-schedule">
          <DoctorSchedule setLoading={setLoading} />
        </Route>
        <Route path="/patient-signup" component={PatientSignup} />
        <Route path="/patient-database" component={PatientDatabase} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
