import React, { useState } from 'react';
import axios from 'axios';

const ResultsFetcher = () => {
  const [hallTicketNumber, setHallTicketNumber] = useState('');
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchResults = async () => {
    setResults(null);
    setError('');
    setIsLoading(true);
    if (!hallTicketNumber || !year) {
      setError('Please enter both Hall Ticket Number and Year.');
      setIsLoading(false);
      return;
    }

    try {
      // Encode URI components to handle special characters like spaces in URLs
      let url = `http://localhost:8080/api/results/${encodeURIComponent(hallTicketNumber)}/${encodeURIComponent(year)}`;
      if (semester) {
        url += `?semester=${encodeURIComponent(semester)}`;
      }
      console.log('Fetching from URL:', url); // Log the URL being fetched

      const response = await axios.get(url);
      setResults(response.data);
    } catch (err) {
      if (err.response) {
        // The server responded with a status code outside of 2xx
        console.error('Error response from server:', err.response.data);
        console.error('Status code:', err.response.status);
        if (err.response.status === 404) {
          setError(err.response.data);
        } else if (err.response.status === 500) {
          setError(`Server error: ${err.response.data || 'Something went wrong on the server.'}`);
        } else {
          setError(`Error: ${err.response.status} - ${err.response.data}`);
        }
      } else if (err.request) {
        // The request was made but no response was received
        console.error('No response received:', err.request);
        setError('No response from server. Is the backend running?');
      } else {
        // Something happened in setting up the request
        console.error('Error setting up request:', err.message);
        setError('Error fetching results. Please try again.');
      }
    } finally {
      setIsLoading(false); // Ensure loading is false regardless of success or failure
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: 8 }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: 25 }}>Fetch Student Results</h2>

      <div style={{ marginBottom: 15 }}>
        <label style={{ display: 'block', marginBottom: 5, fontWeight: 'bold', color: '#555' }}>Hall Ticket Number:</label>
        <input
          type="text"
          value={hallTicketNumber}
          onChange={e => setHallTicketNumber(e.target.value)}
          style={{ width: '100%', padding: 10, border: '1px solid #ccc', borderRadius: 4, boxSizing: 'border-box', fontSize: 16 }}
          placeholder="e.g., HTN12345"
        />
      </div>

      <div style={{ marginBottom: 15 }}>
        <label style={{ display: 'block', marginBottom: 5, fontWeight: 'bold', color: '#555' }}>Year:</label>
        <input
          type="text"
          value={year}
          onChange={e => setYear(e.target.value)}
          style={{ width: '100%', padding: 10, border: '1px solid #ccc', borderRadius: 4, boxSizing: 'border-box', fontSize: 16 }}
          placeholder="e.g., 1st Year, 2nd Year"
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', marginBottom: 5, fontWeight: 'bold', color: '#555' }}>Semester (Optional):</label>
        <input
          type="text"
          value={semester}
          onChange={e => setSemester(e.target.value)}
          style={{ width: '100%', padding: 10, border: '1px solid #ccc', borderRadius: 4, boxSizing: 'border-box', fontSize: 16 }}
          placeholder="e.g., 1-1, 1-2, 2-1 (leave blank for all semesters)"
        />
      </div>

      <button
        onClick={handleFetchResults}
        disabled={isLoading}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          fontSize: 16,
          fontWeight: 'bold',
          opacity: isLoading ? 0.7 : 1,
          transition: 'background-color 0.3s ease',
          display: 'block',
          width: '100%'
        }}
      >
        {isLoading ? 'Fetching...' : 'Get Results'}
      </button>

      <div style={{ marginTop: 25, borderTop: '1px solid #eee', paddingTop: 20 }}>
        {error && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>{error}</p>}

        {isLoading && <p style={{ textAlign: 'center', color: '#555' }}>Loading results...</p>}

        {results && (
          <div style={{ backgroundColor: '#f9f9f9', padding: 15, borderRadius: 5, border: '1px solid #ddd' }}>
            <h3 style={{ color: '#0056b3', marginBottom: 15, borderBottom: '2px solid #0056b3', paddingBottom: 10 }}>
              Results for {results.name} ({results.hallTicketNumber}) - {results.year}
            </h3>
            {results.semesterResults && results.semesterResults.length > 0 ? (
              results.semesterResults.map((sem, idx) => (
                <div key={idx} style={{ marginBottom: 20, paddingBottom: 15, borderBottom: '1px dashed #ccc' }}>
                  <h4 style={{ color: '#007bff', marginBottom: 10 }}>Semester: {sem.semester}</h4>
                  {sem.subjectResults && sem.subjectResults.length > 0 ? (
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#e9ecef' }}>
                          <th style={{ border: '1px solid #ddd', padding: 8, textAlign: 'left' }}>Subject</th>
                          <th style={{ border: '1px solid #ddd', padding: 8, textAlign: 'left' }}>Marks/Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sem.subjectResults.map((subj, i) => (
                          <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f2f2f2' }}>
                            <td style={{ border: '1px solid #ddd', padding: 8 }}>{subj.subjectName}</td>
                            <td style={{ border: '1px solid #ddd', padding: 8 }}>{subj.marksOrGrade}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p style={{ color: '#666', fontStyle: 'italic' }}>No subjects found for this semester.</p>
                  )}
                </div>
              ))
            ) : (
              <p style={{ color: '#666', fontStyle: 'italic' }}>No semester results found for the given criteria.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsFetcher;