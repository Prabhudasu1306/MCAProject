// src/components/Signup.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import './Singup.css'
const Signup = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", role: "STUDENT" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const handleClear = () => {
    setFormData({ firstName: "", lastName: "", email: "", password: "", role: "CUSTOMER" });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please provide a valid email address.");
      return;
    }
    try {
      await axios.post("http://localhost:8080/users/create", formData);
      handleClear();
      alert("Successfully signed up!");
      navigate("/login");
    } catch (error) {
      console.error("Error creating user:", error);
      setError(error.response?.data?.message || "Signup error. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <h5>Signup Here</h5>
      <form onSubmit={handleSubmit} className="signup-form">
        {['firstName', 'lastName', 'email', 'password'].map((field) => (
          <div className="form-group" key={field}>
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input type={field === 'email' ? 'email' : field === 'password' ? 'password' : 'text'} id={field} name={field} value={formData[field]} onChange={handleInputChange} required className="input-field" />
          </div>
        ))}
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select id="role" name="role" value={formData.role} onChange={handleInputChange} required className="input-field">
            <option value="CUSTOMER">Student</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default Signup;

