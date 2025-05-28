import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AllPlacementInfo.css'; // Import the new CSS file

const AllPlacementInfo = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlacements();
  }, []);

  const fetchPlacements = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/placement-drives/all');
      setPlacements(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching placement data:', err);
      setError('Failed to load placement drives. Please try again later.');
      setLoading(false);
    }
  };

  const handleApply = (companyName) => {
    // Navigates to the PlacementApplication component, passing companyName as a URL parameter
    navigate(`/apply/${companyName}`);
  };

  if (loading) {
    return (
      <div className="placement-info-container">
        <p className="loading-message">Loading placement drives...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="placement-info-container">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="placement-info-container">
      <h2>All Placement Drives</h2>
      <p className="intro-text">
        Explore the latest placement opportunities offered by top companies collaborating with our university.
        Each drive offers unique roles and attractive compensation packages.
      </p>
      {placements.length === 0 ? (
        <p className="no-placements-message">No placement drives available at the moment. Please check back later!</p>
      ) : (
        <div className="placement-cards-grid">
          {placements.map((drive) => (
            <div key={drive.id} className="placement-card">
              <h3>{drive.companyName}</h3>
              <p><strong>CTC:</strong> {drive.offeredCTC}</p>
              <p><strong>Eligible:</strong> {drive.eligible}</p>
              <button
                className="apply-button"
                onClick={() => handleApply(drive.companyName)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPlacementInfo;