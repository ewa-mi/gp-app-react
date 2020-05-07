import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import DoctorSchedule from "./views/DoctorSchedule.js";
import PatientSignup from "./views/PatientSignup.js";
import PatientDatabase from "./views/PatientDatabase.js";
import Home from "./views/Home.js";
import NavBar from "./NavBar.js";
import PatientPage from "./views/PatientPage.js";

export default function App() {
  const [loading, setLoading] = useState(false);

  const renderPatientPage = (routerProps) => {
    let patientId = parseInt(routerProps.match.params.id);

    return <PatientPage patientId={patientId} setLoading={setLoading} />;
  };

  return (
    <div className="App">
      <NavBar />
      {loading && <div className="loading">LOADING DATA...</div>}
      <Switch>
        <Route
          path="/patient-database/:id"
          render={(routerProps) => renderPatientPage(routerProps)}
        />
        <Route path="/doctor-schedule">
          <DoctorSchedule setLoading={setLoading} />
        </Route>
        <Route path="/patient-signup" component={PatientSignup} />
        <Route path="/patient-database">
          <PatientDatabase setLoading={setLoading} />
        </Route>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
