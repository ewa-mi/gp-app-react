import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PatientPage.css";

export default function PatientPage(props) {
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const fetchPatient = async () => {
      props.setLoading(true);
      const response = await axios.get(
        `http://localhost:4000/patients/${props.patientId}`
      );
      props.setLoading(false);
      setPatient(response.data);
    };
    fetchPatient();
  }, []);

  if (!Object.keys(patient).length) {
    return null;
  }

  return (
    <div className="dataPatient">
      <h1>
        {patient.firstName} {patient.lastName}
      </h1>

      <p>Id: {patient.id}</p>
      <p>Date of birth:{patient.dateOfBirth}</p>
      <p>Gender: {patient.gender}</p>
      <h3>Contact details:</h3>
      <p>Email: {patient.email}</p>
      <p>Phone: {patient.phoneNumber}</p>
      <h3>Prescriptions:</h3>

      <ul>
        {patient.prescriptions.map((medicine, index) => (
          <li key={index}>{medicine}</li>
        ))}
      </ul>
    </div>
  );
}
