import React, { useState } from 'react';
import axios from 'axios';
import './UniversityHostelForm.css'; // Import CSS

const UniversityHostelForm = () => {
  const [hostelData, setHostelData] = useState({
    floor: '',
    roomNo: '',
    bedNo: ''
  });

  const handleChange = (e) => {
    setHostelData({
      ...hostelData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/universityHostels', hostelData);
      alert('Hostel entry added successfully!');
      console.log(response.data);
      setHostelData({ floor: '', roomNo: '', bedNo: '' });
    } catch (error) {
      console.error('Error adding hostel:', error);
      alert('Failed to add hostel');
    }
  };

  const handleCancel = () => {
    setHostelData({ floor: '', roomNo: '', bedNo: '' });
  };

  return (
    <div className="hostel-form-container">
      <h2 className="form-heading">Add Hostel Entry</h2>
      <form onSubmit={handleSubmit} className="hostel-form">
        <div className="form-group">
          <label htmlFor="floor">Floor</label>
          <input
            type="text"
            id="floor"
            name="floor"
            value={hostelData.floor}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="roomNo">Room Number</label>
          <input
            type="text"
            id="roomNo"
            name="roomNo"
            value={hostelData.roomNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bedNo">Bed Number</label>
          <input
            type="text"
            id="bedNo"
            name="bedNo"
            value={hostelData.bedNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="button-group">
          <button type="submit" className="btn-submit">Submit</button>
          <button type="button" className="btn-cancel" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UniversityHostelForm;
