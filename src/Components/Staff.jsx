import React, { useState } from 'react';
import axios from 'axios';
import './Staff.css';

const Staff = () => {
  const [staffData, setStaffData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    department: '',
    specialization: '',
    designation: '',
    dateOfJoining: '',
    highestQualification: '',
    experience: '',
    salary: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffData({ ...staffData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/teaching-staff/add', staffData);
      alert('Staff added successfully!');
      handleClear();
    } catch (error) {
      console.error('Error adding staff:', error);
      alert('Error adding staff. Please try again.');
    }
  };

  const handleClear = () => {
    setStaffData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      department: '',
      specialization: '',
      designation: '',
      dateOfJoining: '',
      highestQualification: '',
      experience: '',
      salary: '',
      status: '',
    });
  };

  return (
    <div className="staff-container">
      <h2 className="staff-title">Add Teaching Staff</h2>
      <form onSubmit={handleSubmit} className="staff-form">
        <div className="staff-row">
          <div className="staff-field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={staffData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="staff-field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={staffData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="staff-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={staffData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="staff-row">
          <div className="staff-field">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={staffData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="staff-field">
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={staffData.department}
              onChange={handleChange}
              required
            />
          </div>
          <div className="staff-field">
            <label>Specialization</label>
            <input
              type="text"
              name="specialization"
              value={staffData.specialization}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="staff-row">
          <div className="staff-field">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={staffData.designation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="staff-field">
            <label>Date of Joining</label>
            <input
              type="date"
              name="dateOfJoining"
              value={staffData.dateOfJoining}
              onChange={handleChange}
              required
            />
          </div>
          <div className="staff-field">
            <label>Highest Qualification</label>
            <input
              type="text"
              name="highestQualification"
              value={staffData.highestQualification}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="staff-row">
          <div className="staff-field">
            <label>Experience (Years)</label>
            <input
              type="number"
              name="experience"
              value={staffData.experience}
              onChange={handleChange}
              required
            />
          </div>
          <div className="staff-field">
            <label>Salary</label>
            <input
              type="number"
              name="salary"
              value={staffData.salary}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="staff-buttons">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="button" onClick={handleClear} className="clear-button">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Staff;
