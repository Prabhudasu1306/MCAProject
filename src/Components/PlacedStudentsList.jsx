import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PlacedStudentsList.css';

const PlacedStudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch placed students data from your API
    axios.get('http://localhost:8080/api/placed-students/all')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching placed students:', error);
        // Optionally, set an error message in state to display to the user
      });
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div className="students-container">
      <h2>Placed Students List</h2>
      {students.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Branch</th>
              <th>Company</th>
              <th>CTC</th>
              <th>Placed Year</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                {/* Added data-label attributes for responsive table styling */}
                <td data-label="Name">{student.name}</td>
                <td data-label="Branch">{student.branch}</td>
                <td data-label="Company">{student.company}</td>
                <td data-label="CTC">{student.ctc}</td>
                <td data-label="Placed Year">{student.placedYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-students-message">No placed students data available.</p>
      )}
    </div>
  );
};

export default PlacedStudentsList;