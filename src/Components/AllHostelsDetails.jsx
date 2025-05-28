import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllHostelsDetails.css'; // Import the new CSS file

const AllHostelsDetails = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true); // Set loading to true before fetching
      const response = await axios.get('http://localhost:8080/api/hostels/all'); // adjust if your endpoint is different
      console.log('Fetched hostel student data:', response.data);
      setStudents(response.data);
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching student details:', error);
      setError('Failed to fetch student details. Please check the backend API.');
      setStudents([]); // Clear students on error
    } finally {
      setLoading(false); // Set loading to false after fetch completes (success or error)
    }
  };

  return (
    <div className="hostels-container">
      <h2 className="hostels-title">All Hostel Students</h2>

      {loading && <p className="loading-message">Loading hostel details...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && students.length === 0 && !error ? (
        <p className="no-data-message">No student data found.</p>
      ) : (
        !loading && (
          <div className="hostels-grid">
            {students.map((student) => (
              <div key={student.id} className="hostel-card">
                <h3>{student.firstName} {student.lastName}</h3>
                <p><strong>Branch:</strong> {student.branch}</p>
                <p><strong>Room No:</strong> {student.roomNo}</p>
                <p><strong>Address:</strong> {student.address}</p>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default AllHostelsDetails;