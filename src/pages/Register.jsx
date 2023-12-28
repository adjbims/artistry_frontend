// Register.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = ({ onRegister, darkMode }) => {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (email && password && nama) {
      axios
        .post("http://localhost:8080/user", {
          nama: nama,
          email: email,
          password: password,
        })
        .then((response) => {
          console.log("Registration response:", response.data);
          onRegister(response.data.email, response.data.nama);
          navigate("/login");
        })
        .catch((error) => {
          console.error("Error during registration:", error.response);
          alert("Registration failed. Please try again.");
        });
    } else {
      alert("Registration failed. Please enter a valid email, password, and name.");
    }
  };

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <div>
      <div className={`register-container ${isActive ? "active" : ""}`}>
        <div className={`register-box ${darkMode ? "dark" : ""}`}>
          <h2>Register</h2>
          <div className={`input-group ${darkMode ? "dark" : ""}`}>
            <label>Nama:</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className={`input-group ${darkMode ? "dark" : ""}`}>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={`input-group ${darkMode ? "dark" : ""}`}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleRegister}
            className={darkMode ? "dark" : ""}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
