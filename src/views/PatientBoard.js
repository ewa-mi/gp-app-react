import React from "react";
import "./PatientsList.css";
import { Link } from "react-router-dom";

export default function PatientBoard(props) {
  return (
    <div className="singlePatient all">
      <p>Id: {props.id}</p>
      <p>
        Name: {props.firstName} {props.lastName}
      </p>
      <p>Birth date: {props.dateOfBirth}</p>
      <Link to={`/patient-database/${props.id}`}>show details</Link>
    </div>
  );
}
