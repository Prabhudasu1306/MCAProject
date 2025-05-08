import React, { useState } from 'react';
import axios from 'axios';

const RegisterHostel = () => {
  const [hostel, setHostel] = useState({
    firstName: '',
    lastName: '',
    branch: '',
    roomNo: '',
    address: ''
  });

  const handleChange = (e) => {
    setHostel({
      ...hostel,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/hostels/add', hostel);
      alert('Hostel entry registered successfully!');
      console.log(response.data);
      setHostel({
        firstName: '',
        lastName: '',
        branch: '',
        roomNo: '',
        address: ''
      });
    } catch (error) {
      console.error('Error registering hostel entry:', error);
      alert('Failed to register hostel entry.');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Register Hostel Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              value={hostel.firstName}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter first name"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={hostel.lastName}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter last name"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Branch</label>
            <input
              type="text"
              name="branch"
              value={hostel.branch}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter branch"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Room No</label>
            <input
              type="text"
              name="roomNo"
              value={hostel.roomNo}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter room number"
              required
            />
          </div>
          <div className="col-12 mb-3">
            <label className="form-label">Address</label>
            <textarea
              name="address"
              value={hostel.address}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter address"
              rows="3"
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default RegisterHostel;
