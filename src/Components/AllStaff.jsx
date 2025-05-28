import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllStaff.css'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

const AllStaff = () => {
  // eslint-disable-next-line
  const [staffData, setStaffData] = useState([]);
  const [filteredStaff, setFilteredStaff] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

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
    setLoading(true); // Set loading to true before fetch
    setError(null); // Clear previous errors
    axios.get('http://localhost:8080/api/teaching-staff/all')
      .then(response => {
        setStaffData(response.data);
        setFilteredStaff(response.data);
        setLoading(false); // Set loading to false on success
      })
      .catch(error => {
        console.error("Error fetching staff:", error);
        setError('Failed to fetch staff data. Please try again later.'); // Set error message
        setLoading(false); // Set loading to false on error
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
        firstName: '', lastName: '', email: '', phoneNumber: '',
        department: '', specialization: '', designation: '', dateOfJoining: '',
        highestQualification: '', experience: '', salary: '', status: '',
      });
      fetchStaff(); // Refresh staff list
    } catch (error) {
      console.error('Error adding staff:', error);
      alert('Failed to add staff. Please check the form and try again.');
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this staff member?")) { // Confirmation dialog
      axios.delete(`http://localhost:8080/api/teaching-staff/${id}`)
        .then(() => {
          setFilteredStaff(filteredStaff.filter(staff => staff.id !== id));
          alert('Staff deleted successfully!');
        })
        .catch(error => {
          console.error("Error deleting staff:", error);
          alert('Error deleting staff. Please try again.');
        });
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-staff/${id}`);
  };

  if (loading) {
    return <div className="staff-management-container"><h3>Loading staff data...</h3></div>;
  }

  if (error) {
    return <div className="staff-management-container"><h3 style={{color: 'var(--button-danger)'}}>{error}</h3></div>;
  }

  return (
    <div className="staff-management-container">
      <h2>Staff Directory</h2>
      <div className="top-actions">
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel Add' : 'Add New Staff'} {/* Changed button text */}
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
            <label>Date of Joining:
                <input type="date" name="dateOfJoining" value={newStaff.dateOfJoining} onChange={handleInputChange} required />
            </label>
            <input type="text" name="highestQualification" value={newStaff.highestQualification} onChange={handleInputChange} placeholder="Highest Qualification" required />
            <input type="number" name="experience" value={newStaff.experience} onChange={handleInputChange} placeholder="Experience (Years)" required />
            <input type="number" name="salary" value={newStaff.salary} onChange={handleInputChange} placeholder="Salary" required />
            <input type="text" name="status" value={newStaff.status} onChange={handleInputChange} placeholder="Status (e.g., Active, On Leave)" required />
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-button">Submit</button>
            <button type="button" className="cancel-button" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      )}

      {filteredStaff.length === 0 && !loading && !error ? (
        <p style={{ textAlign: 'center', fontSize: '1.1em', color: 'var(--light-text-color)' }}>No staff members found.</p>
      ) : (
        <table className="staff-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>First Name</th> {/* Updated column name for clarity */}
              <th>Last Name</th> {/* Updated column name for clarity */}
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th> {/* Shortened from "Dept" */}
              <th>Specialization</th> {/* Corrected "Specification" to "Specialization" */}
              <th>Designation</th> {/* Shortened from "Desig" */}
              <th>Join Date</th>
              <th>Qualification</th>
              <th>Experience</th> {/* Shortened from "Exp" */}
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStaff.map((staff, index) => (
              <tr key={staff.id}>
                <td data-label="S.No">{index + 1}</td>
                <td data-label="First Name">{staff.firstName}</td>
                <td data-label="Last Name">{staff.lastName}</td>
                <td data-label="Email">{staff.email}</td>
                <td data-label="Phone">{staff.phoneNumber}</td>
                <td data-label="Department">{staff.department}</td>
                <td data-label="Specialization">{staff.specialization}</td>
                <td data-label="Designation">{staff.designation}</td>
                <td data-label="Join Date">{staff.dateOfJoining}</td>
                <td data-label="Qualification">{staff.highestQualification}</td>
                <td data-label="Experience">{staff.experience}</td>
                <td data-label="Salary">{staff.salary}</td>
                <td data-label="Actions">
                  <button className="edit-button" onClick={() => handleEdit(staff.id)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(staff.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllStaff;