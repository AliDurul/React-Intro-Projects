import React, { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    PhoneNumber: "",
    adress: "",
    email: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { firstName, lastName, PhoneNumber, adress, email } = values;

  const handleValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setValues({
      firstName: "",
      lastName: "",
      PhoneNumber: "",
      adress: "",
      email: ""
    })
  };

  useEffect(() => {
    let timeout;

    if (isSubmitted) {
      timeout = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000); // 5 seconds
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isSubmitted]);

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {isSubmitted && (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        )}

        <input
          onChange={handleValues}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          required
          value={firstName}
        />
        <input
          onChange={handleValues}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          required
          value={lastName}
        />
        <input
          onChange={handleValues}
          id="phone-number"
          className="form-field"
          type="text"
          placeholder="Phone Number"
          name="PhoneNumber"
          required
          value={PhoneNumber}
        />
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          onChange={handleValues}
          id="adress"
          className="form-field"
          type="text"
          placeholder="Adress"
          name="adress"
          required
          value={adress}
        />
     
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          onChange={handleValues}
          id="email"
          className="form-field"
          type="email"
          placeholder="Email"
          name="email"
          required
          value={email}
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
