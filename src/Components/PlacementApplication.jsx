import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div style={{ maxWidth: '700px', margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Placement Application Form</h2>
      {message && <p style={{ textAlign: 'center', color: 'green' }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '20px'
          }}
        >
          <div>
            <label>Student Name:</label>
            <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required />
          </div>
          <div>
            <label>Email ID:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Course:</label>
            <select name="branch" value={formData.branch} onChange={handleChange} required>
              <option value="">Select Course</option>
              <option value="BTech">BTech</option>
              <option value="MTech">MTech</option>
              <option value="MCA">MCA</option>
              <option value="MBA">MBA</option>
            </select>
          </div>
          <div>
            <label>Year:</label>
            <select name="year" value={formData.year} onChange={handleChange} required>
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
        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={{ marginRight: '10px' }}>Apply</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default PlacementApplication;
