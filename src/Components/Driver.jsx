import React, { useState } from "react";
import axios from "axios";
import "./Driver.css"; // Import the new CSS file

const Driver = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    salary: "",
    experience: "",
    busNumber: "",
    fromAddress: "",
    toAddress: "",
  });
  const [message, setMessage] = useState({ type: '', text: '' }); // State for feedback messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' }); // Clear previous messages

    try {
      const response = await axios.post("http://localhost:8080/api/drives/add", formData);

      console.log("Response from server:", response.data);
      setMessage({ type: 'success', text: 'Driver details added successfully!' });

      // Clear form after successful submission
      setFormData({
        name: "",
        mobileNumber: "",
        salary: "",
        experience: "",
        busNumber: "",
        fromAddress: "",
        toAddress: "",
      });
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      setMessage({ type: 'error', text: 'Failed to add driver details. Please try again.' });
    }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      mobileNumber: "",
      salary: "",
      experience: "",
      busNumber: "",
      fromAddress: "",
      toAddress: "",
    });
    setMessage({ type: '', text: '' }); // Clear message on clear
  };

  return (
    <div className="driver-form-container"> {/* Updated main container class */}
      <h2>Driver Details Form</h2> {/* Keep the heading simple */}
      <form onSubmit={handleSubmit} className="driver-form"> {/* Apply form class */}
        <div className="driver-form-grid"> {/* Apply grid class */}
          <div className="driver-form-group">
            <label htmlFor="name" className="driver-form-label">Name</label> {/* Added htmlFor for accessibility */}
            <input
              id="name" // Added id
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="driver-form-input" // Updated input class
              placeholder="Driver's Full Name" // More descriptive placeholder
              required
            />
          </div>
          <div className="driver-form-group">
            <label htmlFor="mobileNumber" className="driver-form-label">Mobile Number</label>
            <input
              id="mobileNumber"
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="driver-form-input"
              placeholder="e.g., 9876543210"
              required
            />
          </div>
          <div className="driver-form-group">
            <label htmlFor="salary" className="driver-form-label">Salary</label>
            <input
              id="salary"
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="driver-form-input"
              placeholder="e.g., 35000"
              required
            />
          </div>
        </div>

        <div className="driver-form-grid">
          <div className="driver-form-group">
            <label htmlFor="experience" className="driver-form-label">Experience (Years)</label>
            <input
              id="experience"
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="driver-form-input"
              placeholder="e.g., 5"
              required
            />
          </div>
          <div className="driver-form-group">
            <label htmlFor="busNumber" className="driver-form-label">Bus Number</label>
            <input
              id="busNumber"
              type="text"
              name="busNumber"
              value={formData.busNumber}
              onChange={handleChange}
              className="driver-form-input"
              placeholder="e.g., AP09AA1234"
              required
            />
          </div>
          <div className="driver-form-group">
            <label htmlFor="fromAddress" className="driver-form-label">Route From Address</label>
            <input
              id="fromAddress"
              type="text"
              name="fromAddress"
              value={formData.fromAddress}
              onChange={handleChange}
              className="driver-form-input"
              placeholder="Starting point of the route"
              required
            />
          </div>
        </div>

        <div className="driver-form-grid"> {/* Can be a single form-group if only one field */}
          <div className="driver-form-group">
            <label htmlFor="toAddress" className="driver-form-label">Route To Address</label>
            <input
              id="toAddress"
              type="text"
              name="toAddress"
              value={formData.toAddress}
              onChange={handleChange}
              className="driver-form-input"
              placeholder="Destination of the route"
              required
            />
          </div>
        </div>

        {/* Feedback Message Display */}
        {message.text && (
          <div className={`form-message ${message.type}`}>
            {message.text}
          </div>
        )}

        <div className="driver-form-buttons"> {/* Apply buttons class */}
          <button type="submit" className="driver-submit-button"> {/* Updated button class */}
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="driver-clear-button" // Updated clear button class
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Driver;