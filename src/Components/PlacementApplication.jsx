import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PlacementApplication.css'; // Import the CSS

const PlacementApplication = () => {
  const { companyName } = useParams();

  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    branch: '',
    year: '',
    company: companyName || ''
  });

  const [availableYears, setAvailableYears] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setFormData(prev => ({ ...prev, company: companyName }));
  }, [companyName]);

  useEffect(() => {
    switch (formData.branch) {
      case 'BTech':
        setAvailableYears(['1st Year', '2nd Year', '3rd Year', '4th Year']);
        break;
      case 'MTech':
      case 'MCA':
      case 'MBA':
        setAvailableYears(['1st Year', '2nd Year']);
        break;
      default:
        setAvailableYears([]);
    }
    setFormData(prev => ({ ...prev, year: '' }));
  }, [formData.branch]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClear = () => {
    setFormData({
      studentName: '',
      email: '',
      branch: '',
      year: '',
      company: companyName || ''
    });
    setMessage('');
    setAvailableYears([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/placements/add', formData);
      setMessage('Application submitted successfully!');
      handleClear();
    } catch (error) {
      console.error(error);
      setMessage('Failed to submit application.');
    }
  };

  return (
    <div className="placement-form-container">
      <h2>Placement Application Form</h2>
      {message && <p className="placement-form-message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="placement-form-grid">
          <div>
            <label>Student Name:</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email ID:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Course:</label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>
              <option value="BTech">BTech</option>
              <option value="MTech">MTech</option>
              <option value="MCA">MCA</option>
              <option value="MBA">MBA</option>
            </select>
          </div>
          <div>
            <label>Year:</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="">Select Year</option>
              {availableYears.map((yearOption, idx) => (
                <option key={idx} value={yearOption}>{yearOption}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Company:</label>
            <input type="text" name="company" value={formData.company} readOnly />
          </div>
        </div>
        <div className="placement-form-actions">
          <button type="submit">Apply</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default PlacementApplication;
