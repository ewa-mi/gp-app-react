import Timecheck from "./Timecheck.js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DoctorSchedule.css";

export default function DoctorSchedule(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      props.setLoading(true);
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      );

      props.setLoading(false);
      setData(response.data);
    };
    fetchData();
  }, []);

  const doctorsTable = data.map((doc) => {
    return (
      <tr key={doc.id}>
        <td>{doc.doctor}</td>
        <td>{doc.onDuty === true ? "available" : "unavailable"}</td>
      </tr>
    );
  });

  return (
    <div className="all">
      <h1>Who is on duty?</h1>
      <div className="tableArea">
        <table>
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>{doctorsTable}</tbody>
        </table>
      </div>
      <Timecheck />
    </div>
  );
}
