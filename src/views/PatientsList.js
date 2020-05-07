import React from "react";
import "./PatientsList.css";

export default function PatientsList(props) {
  return (
    <div className="singlePatient all">
      <p>Id: {props.id}</p>
      <p>
        Name: {props.firstName} {props.lastName}
      </p>
      <p>Birth date: {props.dateOfBirth}</p>
      <button>show details</button>
    </div>
  );
}
