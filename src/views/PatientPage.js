import React from "react";
import "./PatientPage.css";

export default function PatientPage(props) {
  return (
    <div className="dataPatient">
      <h1>
        {props.firstName} {props.lastName}
      </h1>

      <p>Id: {props.id}</p>
      <p>Date of birth:{props.dateOfBirth}</p>
      <p>Gender: {props.gender}</p>
      <h3>Contact details:</h3>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phoneNumber}</p>
      <h3>Prescriptions:</h3>

      <ul>
        {props.prescriptions.map((medicine) => (
          <li>{medicine}</li>
        ))}
      </ul>
    </div>
  );
}
