import React, { useState } from "react";
import axios from "axios"; // Import axios for HTTP requests
import "./Driver.css"; // Ensure this CSS file contains the styles you provided

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const response = await axios.post("http://localhost:8080/api/drives/add", formData);
      
     
      console.log("Response from server:", response.data);
      
    
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
  };

  return (
    <div className="edits-staff-container">
      <h2 className="edits-staff-heading">Driver Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="edits-staff-grid">
          <div className="edits-staff-form-group">
            <label className="edits-staff-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="edits-staff-input"
              placeholder="Name"
              required
            />
          </div>
          <div className="edits-staff-form-group">
            <label className="edits-staff-label">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="edits-staff-input"
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="edits-staff-form-group">
            <label className="edits-staff-label">Salary</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="edits-staff-input"
              placeholder="Salary"
              required
            />
          </div>
        </div>

        <div className="edits-staff-grid">
          <div className="edits-staff-form-group">
            <label className="edits-staff-label">Experience (Years)</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="edits-staff-input"
              placeholder="Experience (Years)"
              required
            />
          </div>
          <div className="edits-staff-form-group">
            <label className="edits-staff-label">Bus Number</label>
            <input
              type="text"
              name="busNumber"
              value={formData.busNumber}
              onChange={handleChange}
              className="edits-staff-input"
              placeholder="Bus Number"
              required
            />
          </div>
          <div className="edits-staff-form-group">
            <label className="edits-staff-label">From Address</label>
            <input
              type="text"
              name="fromAddress"
              value={formData.fromAddress}
              onChange={handleChange}
              className="edits-staff-input"
              placeholder="From Address"
              required
            />
          </div>
        </div>

        <div className="edits-staff-grid">
          <div className="edits-staff-form-group">
            <label className="edits-staff-label">To Address</label>
            <input
              type="text"
              name="toAddress"
              value={formData.toAddress}
              onChange={handleChange}
              className="edits-staff-input"
              placeholder="To Address"
              required
            />
          </div>
        </div>

        <div className="edits-staff-buttons">
          <button type="submit" className="edits-staff-button">
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="edits-staff-clear-button"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Driver;
