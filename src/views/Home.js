import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Timecheck from "./Timecheck.js";

export default function Home() {
  return (
    <div className="all">
      <h1>Welcome to AMS GPs</h1>
      <br></br>
      <Timecheck />
      <br></br>
      <div className="button1">
        <Link className="click" to={`/doctor-schedule`}>
          Who is on duty?
        </Link>
      </div>
      <div>
        <Link className="click" to={`/patient-signup`}>
          I am a new patient
        </Link>
      </div>
    </div>
  );
}
