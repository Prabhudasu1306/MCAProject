import React from 'react';
import './Vision.css'; // Import the dedicated CSS file

const Vision = () => {
  return (
    <div className="vision-container">
      <div className="vision-section vision-vision-section">
        <h2 className="vision-heading">Vision of the Institution</h2>
        <p className="vision-text">
          To be a **leading multidisciplinary University**, producing world-class talents to address global challenges.
        </p>
      </div>

      <div className="vision-section vision-mission-section">
        <h2 className="vision-heading">Mission of the Institution</h2>
        <ul className="mission-list">
          <li className="mission-list-item">
            To attain excellence in Education and Research through effective collaboration with Industries and other International/National organisations.
          </li>
          <li className="mission-list-item">
            To consistently remain an attractive ecosystem for students and employees, a hub of innovation for researchers and an incubating platform for entrepreneurs.
          </li>
          <li className="mission-list-item">
            To create an inclusive environment that caters to all forms of diversity.
          </li>
          <li className="mission-list-item">
            To engage in outreach and community development activities, creating an impact on society.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Vision;