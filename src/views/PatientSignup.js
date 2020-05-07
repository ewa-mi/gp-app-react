import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./PatientSignup.css";

export default function PatientSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState(new Date());
  const [success, setSuccess] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const patientObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      gender: gender,
      birth: birth,
    };
    console.log(patientObject);

    setSuccess(true);
  };

  return (
    <div className="formBoard">
      <h1>Patient signup</h1>

      <form onSubmit={(event) => onFormSubmit(event)}>
        <label>
          first name
          <input
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
          />
        </label>
        <label>
          last name
          <input
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
          />
        </label>
        <label>
          email
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </label>
        <label>
          phone
          <input
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
          />
        </label>
        <label>
          gender
          <select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option defaultValue hidden>
              select
            </option>
            <option value="female">female</option>
            <option value="male">male</option>
          </select>
        </label>
        <label>
          date of birth
          <DatePicker selected={birth} onChange={(date) => setBirth(date)} />
        </label>
        <input className="subButton" type="submit" value="Submit" />
      </form>
      {success && <p className="success">Success! You submitted your form!</p>}
    </div>
  );
}
