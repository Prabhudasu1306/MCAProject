import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext ';
import './Feedback.css';

const Feedback = () => {
  const { user } = useAuth(); // Access the logged-in user's data from context
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    if (!user.email || !text) {
      return alert('Please fill in all fields');
    }

    try {
      await axios.post('http://localhost:8080/api/feedback', { email: user.email, text });
      alert('Feedback submitted successfully');
      setText('');
    } catch (err) {
      console.error('Error submitting feedback:', err);
      alert('Failed to submit feedback');
    }
  };

  return (
    <div className="feedback-container">
      <h2>Feedback Form</h2>
      <div className="feedback-form">
        <textarea
          placeholder="Your feedback"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Feedback;
