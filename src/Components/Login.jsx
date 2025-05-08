import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/users/all");
      const users = response.data;
      const matchedUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        setMessage("");
        localStorage.setItem("user", JSON.stringify(matchedUser));

        if (onLoginSuccess) {
          onLoginSuccess(matchedUser.firstName, matchedUser.email, matchedUser.role);
        }

        if (matchedUser.role === "STUDENT") navigate("/about");
        else if (matchedUser.role === "ADMIN") navigate("/admin");
      } else {
        setMessage("Incorrect email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Error occurred. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setEmail("");
    setPassword("");
    setMessage("");
  };

  return (
    <div className="page-container">
      {/* Left side with scrolling text */}
      <div className="left-container">
        <div className="scrolling-text-container">
          <div className="scrolling-text">
            {/* <p>
              Welcome to THE THOP UNIVERSITY! <br />
              - Excellence in Education <br />
              - World-Class Faculty <br />
              - Modern Infrastructure <br />
              - 100% Placement Assistance <br />
              - Research Opportunities <br />
              - Global Exposure Programs <br />
              - Top Ranked in Innovation <br />
              - Strong Alumni Network <br />
              Join us and shape your future today!
            </p> */}
          </div>
        </div>
      </div>

      {/* Center login form */}
      <div className="center-container">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="login-input-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div className="login-input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            {message && <p className="login-error-message">{message}</p>}
            <div className="login-button-group">
              <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Log In"}
              </button>
              <button type="button" onClick={handleClear}>Clear</button>
            </div>
            <p>New member? <Link to="/signup">Sign up</Link></p>
          </form>
        </div>
      </div>

      
      <div className="right-container">
        <div className="scrolling-images">
          {/* <div className="image-container-inner">
            <img src="your-image1.jpg" alt="img1" />
            <img src="your-image2.jpg" alt="img2" />
            <img src="your-image3.jpg" alt="img3" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
