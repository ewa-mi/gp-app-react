import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PatientDatabase(props) {
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

  const selectBetween = data.map((doc) => {
    return (
      <div>
        key={doc.id}
        <div>{doc.doctor}</div>
      </div>
    );
  });

  return (
    <div>
      <h1>Patient database</h1>
      {selectBetween}
    </div>
  );
}
