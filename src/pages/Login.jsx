import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      axios
        .post(`http://localhost:8080/user`, {
          username: username,
          password: password,
        })
        .then((response) => {
          console.log("Login response:", response.data);

          // Simpan token atau data pengguna jika diperlukan
          // localStorage.setItem("token", response.data.token);

          onLogin(response.data.username, response.data.token);

          // Navigasi ke halaman beranda setelah login berhasil
          navigate("/");
        })
        .catch((error) => {
          console.error("Error during login:", error.response);

          // Tampilkan pesan error dari server jika tersedia
          if (error.response && error.response.data) {
            alert(`Login failed: ${error.response.data.message}`);
          } else {
            alert("Login failed. Please try again.");
          }
        });
    } else {
      alert("Login failed. Please enter a valid username and password.");
    }
  };

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <div>
      <div className={`login-container ${isActive ? "active" : ""}`}>
        <div className="login-box">
          <h2>Login</h2>
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/">
            <button onClick={handleLogin}>Login</button>
          </Link>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <span>
                <Link to="/register">Register</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
