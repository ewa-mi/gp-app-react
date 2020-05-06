import React from "react";
import "./Timecheck.css";

export default function Timecheck() {
  const now = new Date();
  let timecheck = now.getHours() > 8 && now.getHours() < 17 ? "open" : "closed";

  return (
    <div>
      <p>
        We are: <span className="timecheck">{timecheck}</span>
      </p>
      <p>To make an appointment </p>
      <p> call: 020 555 5555</p>
    </div>
  );
}
