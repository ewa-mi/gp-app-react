import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const now = new Date();
  let timecheck = now.getHours() > 8 && now.getHours() < 17 ? "open" : "closed";

  return (
    <div>
      <h1>Welcome to AMS GPs</h1>
      <br></br>
      <p>
        We are: <span className="timecheck">{timecheck}</span>
      </p>
      <p>To make an appointment </p>
      <p> call: 020 555 5555</p>
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
