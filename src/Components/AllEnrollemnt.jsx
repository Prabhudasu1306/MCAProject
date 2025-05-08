import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AllEnrollment.css'; // CSS file

const AllEnrollemnt = () => {
  const [enrollments, setEnrollments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/enrollments')
      .then(response => {
        setEnrollments(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the enrollments!", error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/enrollments/${id}`);
      alert('Enrollment deleted successfully!');

      const response = await axios.get('http://localhost:8080/api/enrollments');
      setEnrollments(response.data);
    } catch (error) {
      console.error('Error deleting enrollment:', error);
      alert('There was an error deleting the enrollment!');
    }
  };

  const handleEdit = (id) => {
    navigate(`/update-enrollment/${id}`);
  };

  return (
    <div className="enrollment-container">
      <h3>Existing Enrollments</h3>
      <table className="enrollment-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Fee</th>
            <th>Course</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map(enrollment => (
            <tr key={enrollment.id}>
              <td>{enrollment.name}</td>
              <td>{enrollment.fee}</td>
              <td>{enrollment.course}</td>
              <td>{enrollment.duration}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(enrollment.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(enrollment.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEnrollemnt;
