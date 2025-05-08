import React, { useState } from 'react';
import axios from 'axios';

const Placement = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    offeredCTC: '',
    eligible: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/placement-drives/add', formData);
      setResponseMessage(`Placement drive added successfully for ${response.data.companyName}`);
      setFormData({
        companyName: '',
        offeredCTC: '',
        eligible: ''
      });
    } catch (error) {
      setResponseMessage('Error adding placement drive. Please try again.');
      console.error('Submission error:', error);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center' }}>Add Placement Drive</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Offered CTC:</label>
          <input
            type="text"
            name="offeredCTC"
            value={formData.offeredCTC}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Eligible Branch/Year:</label>
          <input
            type="text"
            name="eligible"
            value={formData.eligible}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          Submit
        </button>
      </form>

      {responseMessage && (
        <div style={{ marginTop: '20px', color: 'green', textAlign: 'center' }}>
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default Placement;
