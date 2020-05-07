import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientBoard from "./PatientBoard.js";
import "./PatientDatabase.css";

export default function PatientDatabase(props) {
  const [doctors, setDoctors] = useState([]);
  const [byDoctor, setByDoctor] = useState("all");
  const [filteredPatients, setFilteredPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      props.setLoading(true);
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      );

      props.setLoading(false);
      setDoctors(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filteredDoctors = doctors.filter(
      (doctor) => doctor.doctor === byDoctor
    );

    let filteredPatients = props.patients.sort(function (a, b) {
      return a.lastName.localeCompare(b.lastName);
    });
    if (filteredDoctors.length) {
      filteredPatients = props.patients.filter(
        (patient) => patient.doctorId === filteredDoctors[0]?.id
      );
    }

    setFilteredPatients(filteredPatients);
  }, [byDoctor]);

  const doctorsNames = doctors.map((doc) => {
    return (
      <option key={doc.id} value={doc.doctor}>
        {doc.doctor}
      </option>
    );
  });

  return (
    <div className="all">
      <h1>Patient database</h1>
      <label>
        Doctor
        <select
          className="doctorSelect"
          value={byDoctor}
          onChange={(event) => {
            setByDoctor(event.target.value);
          }}
        >
          <option defaultValue="all">all</option>
          <>{doctorsNames}</>
        </select>
        {filteredPatients?.map((patient) => (
          <PatientBoard
            key={patient.id}
            id={patient.id}
            firstName={patient.firstName}
            lastName={patient.lastName}
            dateOfBirth={patient.dateOfBirth}
          />
        ))}
      </label>
    </div>
  );
}
