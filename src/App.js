import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import DoctorSchedule from "./views/DoctorSchedule.js";
import PatientSignup from "./views/PatientSignup.js";
import PatientDatabase from "./views/PatientDatabase.js";
import Home from "./views/Home.js";
import NavBar from "./NavBar.js";
import axios from "axios";
import PatientPage from "./views/PatientPage.js";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`
      );
      setLoading(false);
      setPatients(response.data);
    };
    fetchPatients();
  }, []);

  const renderPatientPage = (routerProps) => {
    let specificPatient = parseInt(routerProps.match.params.id);
    let foundPatient = patients.find(
      (patient) => parseInt(patient.id) === specificPatient
    );

    return (
      <PatientPage
        firstName={foundPatient.firstName}
        lastName={foundPatient.lastName}
        id={foundPatient.id}
        dateOfBirth={foundPatient.dateOfBirth}
        gender={foundPatient.gender}
        email={foundPatient.email}
        phoneNumber={foundPatient.phoneNumber}
        prescriptions={foundPatient.prescriptions}
      />
    );
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
          <PatientDatabase setLoading={setLoading} patients={patients} />
        </Route>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
