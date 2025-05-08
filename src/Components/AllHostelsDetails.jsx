import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllHostelsDetails = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/hostels/all'); // adjust if your endpoint is different
      console.log('Fetched hostel student data:', response.data);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching student details:', error);
      setError('Failed to fetch student details. Please check the backend API.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>All Hostel Students</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {students.length === 0 && !error ? (
        <p>No student data found.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}
        >
          {students.map((student) => (
            <div
              key={student.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '15px',
                backgroundColor: '#f9f9f9',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
              }}
            >
              <h3>{student.firstName} {student.lastName}</h3>
              <p><strong>Branch:</strong> {student.branch}</p>
              <p><strong>Room No:</strong> {student.roomNo}</p>
              <p><strong>Address:</strong> {student.address}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllHostelsDetails;
