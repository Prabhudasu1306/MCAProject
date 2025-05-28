import React, { useState } from 'react';
import axios from 'axios';
import './Placement.css'; // Import the new CSS file

const Placement = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    offeredCTC: '',
    eligible: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // To dynamically change message color

  const handleChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage(''); // Clear previous messages
    setIsSuccess(false);

    try {
      const response = await axios.post('http://localhost:8080/api/placement-drives/add', formData);
      setResponseMessage(`Placement drive added successfully for ${response.data.companyName}!`);
      setIsSuccess(true); // Set success state
      setFormData({ // Clear form fields on success
        companyName: '',
        offeredCTC: '',
        eligible: ''
      });
    } catch (error) {
      setResponseMessage('Error adding placement drive. Please try again.');
      setIsSuccess(false); // Set error state
      console.error('Submission error:', error);
    }
  };

  // Function to handle the Cancel button click
  const handleCancel = () => {
    setFormData({ // Reset form fields
      companyName: '',
      offeredCTC: '',
      eligible: ''
    });
    setResponseMessage(''); // Clear any response message
    setIsSuccess(false); // Reset success state
  };

  return (
    <div className="placement-container">
      <h2 className="placement-heading">Add New Placement Drive</h2>
      <form onSubmit={handleSubmit} className="placement-form">
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="offeredCTC">Offered CTC:</label>
          <input
            type="text"
            id="offeredCTC"
            name="offeredCTC"
            value={formData.offeredCTC}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="eligible">Eligible Branch/Year:</label>
          <input
            type="text"
            id="eligible"
            name="eligible"
            value={formData.eligible}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Add Drive
          </button>
          <button type="button" onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      </form>

      {responseMessage && (
        <div className={`response-message ${isSuccess ? 'success' : 'error'}`}>
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default Placement;