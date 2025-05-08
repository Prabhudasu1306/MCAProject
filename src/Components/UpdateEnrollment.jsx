import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateEnrollment.css';

const UpdateEnrollment = ({ onUpdateSuccess }) => {
  const { enrollmentId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [fee, setFee] = useState('');
  const [course, setCourse] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8080/api/enrollments/${enrollmentId}`)
      .then(response => {
        setName(response.data.name);
        setFee(response.data.fee);
        setCourse(response.data.course);
        setDuration(response.data.duration);
      })
      .catch(error => {
        console.error("Error fetching enrollment data!", error);
      });
  }, [enrollmentId]);

  const handleUpdate = async () => {
    if (!name || !fee || !course || !duration) {
      return alert('Please fill all fields');
    }

    try {
      const updatedEnrollment = {
        name,
        fee,
        course,
        duration
      };

      await axios.put(`http://localhost:8080/api/enrollments/${enrollmentId}`, updatedEnrollment);
      alert('Enrollment updated successfully!');
      navigate('/allenrollements');

      if (onUpdateSuccess) onUpdateSuccess();
    } catch (error) {
      console.error('Error updating enrollment:', error);
      alert('There was an error updating the enrollment!');
    }
  };

  return (
    <div className="update-container">
      <h2>Update Enrollment</h2>
      <div className="form-grid">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Fee:</label>
          <input type="text" value={fee} onChange={e => setFee(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Course:</label>
          <input type="text" value={course} onChange={e => setCourse(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Duration:</label>
          <input type="text" value={duration} onChange={e => setDuration(e.target.value)} />
        </div>
      </div>
      <button className="update-button" onClick={handleUpdate}>Update Enrollment</button>
    </div>
  );
};

export default UpdateEnrollment;
