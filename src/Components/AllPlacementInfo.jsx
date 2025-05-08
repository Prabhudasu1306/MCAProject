import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AllPlacementInfo = () => {
  const [placements, setPlacements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlacements();
  }, []);

  const fetchPlacements = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/placement-drives/all');
      setPlacements(response.data);
    } catch (error) {
      console.error('Error fetching placement data:', error);
    }
  };

  const handleApply = (companyName) => {
    navigate(`/apply/${companyName}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>All Placement Drives</h2>
      {placements.length === 0 ? (
        <p>No placement drives available.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}
        >
          {placements.map((drive) => (
            <div
              key={drive.id}
              style={{
                border: '1px solid #ddd',
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              <h3>{drive.companyName}</h3>
              <p><strong>CTC:</strong> {drive.offeredCTC}</p>
              <p><strong>Eligible:</strong> {drive.eligible}</p>
              <button
                onClick={() => handleApply(drive.companyName)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPlacementInfo;
