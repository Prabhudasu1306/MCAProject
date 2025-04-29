import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllStaff.css';
import { useNavigate } from 'react-router-dom';

const AllStaff = () => {
  // eslint-disable-next-line
  const [staffData, setStaffData] = useState([]);
  const [filteredStaff, setFilteredStaff] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [newStaff, setNewStaff] = useState({
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

  const navigate = useNavigate();

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = () => {
    axios.get('http://localhost:8080/api/teaching-staff/all')
      .then(response => {
        setStaffData(response.data);
        setFilteredStaff(response.data);
      })
      .catch(error => {
        console.error("Error fetching staff:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStaff({ ...newStaff, [name]: value });
  };

  const handleAddStaff = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/teaching-staff/add', newStaff);
      alert('Staff added successfully!');
      setShowForm(false);
      setNewStaff({
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
      fetchStaff();
    } catch (error) {
      console.error('Error adding staff:', error);
      alert('Failed to add staff.');
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/teaching-staff/${id}`)
      .then(() => {
        setFilteredStaff(filteredStaff.filter(staff => staff.id !== id));
        alert('Staff deleted successfully');
      })
      .catch(error => {
        console.error("Error deleting staff:", error);
        alert('Error deleting staff');
      });
  };

  const handleEdit = (id) => {
    navigate(`/edit-staff/${id}`);
  };

  return (
    <div className="staff-management-container">
      <h2>Staff Directory</h2>
      <div className="top-actions">
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Staff'}
        </button>
      </div>

      {showForm && (
        <form className="staff-form" onSubmit={handleAddStaff}>
          <div className="form-grid">
            <input type="text" name="firstName" value={newStaff.firstName} onChange={handleInputChange} placeholder="First Name" required />
            <input type="text" name="lastName" value={newStaff.lastName} onChange={handleInputChange} placeholder="Last Name" required />
            <input type="email" name="email" value={newStaff.email} onChange={handleInputChange} placeholder="Email" required />
            <input type="text" name="phoneNumber" value={newStaff.phoneNumber} onChange={handleInputChange} placeholder="Phone Number" required />
            <input type="text" name="department" value={newStaff.department} onChange={handleInputChange} placeholder="Department" required />
            <input type="text" name="specialization" value={newStaff.specialization} onChange={handleInputChange} placeholder="Specialization" required />
            <input type="text" name="designation" value={newStaff.designation} onChange={handleInputChange} placeholder="Designation" required />
            <input type="date" name="dateOfJoining" value={newStaff.dateOfJoining} onChange={handleInputChange} required />
            <input type="text" name="highestQualification" value={newStaff.highestQualification} onChange={handleInputChange} placeholder="Qualification" required />
            <input type="number" name="experience" value={newStaff.experience} onChange={handleInputChange} placeholder="Experience" required />
            <input type="number" name="salary" value={newStaff.salary} onChange={handleInputChange} placeholder="Salary" required />
            <input type="text" name="status" value={newStaff.status} onChange={handleInputChange} placeholder="Status" required />
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-button">Submit</button>
            <button type="button" className="cancel-button" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      )}

      <table className="staff-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Dept</th>
            <th>Specification</th>
            <th>Desig</th>
            <th>Join Date</th>
            <th>Qualification</th>
            <th>Exp</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaff.map((staff, index) => (
            <tr key={staff.id}>
              <td>{index + 1}</td>
              <td>{staff.firstName}</td>
              <td>{staff.lastName}</td>
              <td>{staff.email}</td>
              <td>{staff.phoneNumber}</td>
              <td>{staff.department}</td>
              <td>{staff.specialization}</td>
              <td>{staff.designation}</td>
              <td>{staff.dateOfJoining}</td>
              <td>{staff.highestQualification}</td>
              <td>{staff.experience}</td>
              <td>{staff.salary}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(staff.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(staff.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllStaff;
