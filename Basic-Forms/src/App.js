import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isvalid, setIsvalid] = useState(false);

  const { firstName, lastName, phoneNumber, address, email } = values;

  const handleValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && phoneNumber && address && email){
      setIsvalid(true)
    }
      setSubmitted(true);
  };

  console.log(submitted);
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && isvalid && (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        )}
        <input
          onChange={handleValues}
          value={firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !firstName && (
          <span id="first-name-error">Please enter a first name</span>
        )}

        <input
          onChange={handleValues}
          value={lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <input
          onChange={handleValues}
          value={phoneNumber}
          id="phone-number"
          className="form-field"
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
        />
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          onChange={handleValues}
          value={address}
          id="adress"
          className="form-field"
          type="text"
          placeholder="Adress"
          name="address"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          onChange={handleValues}
          value={email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
