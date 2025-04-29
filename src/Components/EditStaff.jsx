import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EditStaff.css';

const EditStaff = () => {
  const [staff, setStaff] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    department: '',
    designation: '',
    dateOfJoining: '',
    highestQualification: '',
    experience: '',
    salary: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/teaching-staff/${id}`)
      .then(response => {
        setStaff(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching staff data!", error);
        setError("Error fetching staff data.");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaff({ ...staff, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/teaching-staff/${id}`, staff)
      .then(response => {
        alert('Staff updated successfully');
        navigate('/allstaff');
      })
      .catch(error => {
        console.error("Error updating staff data!", error);
        alert('Error updating staff');
      });
  };

  const handleCancel = () => {
    navigate('/allstaff');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="edit-staff-container">
      <h2>Edit Teaching Staff</h2>
      <form onSubmit={handleSubmit}>
        <div className="edit-staff-grid">
          <div className="edit-staff-form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={staff.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="edit-staff-form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={staff.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="edit-staff-form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={staff.email}
              onChange={handleChange}
            />
          </div>
          <div className="edit-staff-form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={staff.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="edit-staff-form-group">
            <label>Department:</label>
            <input
              type="text"
              name="department"
              value={staff.department}
              onChange={handleChange}
            />
          </div>
          <div className="edit-staff-form-group">
            <label>Designation:</label>
            <input
              type="text"
              name="designation"
              value={staff.designation}
              onChange={handleChange}
            />
          </div>
          <div className="edit-staff-form-group">
            <label>Date of Joining:</label>
            <input
              type="date"
              name="dateOfJoining"
              value={staff.dateOfJoining}
              onChange={handleChange}
            />
          </div>
          <div className="edit-staff-form-group">
            <label>Highest Qualification:</label>
            <input
              type="text"
              name="highestQualification"
              value={staff.highestQualification}
              onChange={handleChange}
            />
          </div>
          <div className="edit-staff-form-group">
            <label>Experience:</label>
            <input
              type="text"
              name="experience"
              value={staff.experience}
              onChange={handleChange}
            />
          </div>
          <div className="edit-staff-form-group">
            <label>Salary:</label>
            <input
              type="text"
              name="salary"
              value={staff.salary}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="edit-staff-buttons">
          <button type="submit" className="edit-staff-button">Save Changes</button>
          <button type="button" className="edit-staff-clear-button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditStaff;
