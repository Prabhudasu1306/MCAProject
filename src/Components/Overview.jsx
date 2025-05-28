import React from 'react';
import './Overview.css';
import View from './View.jpg';

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-image-wrapper">
        <img 
          src={View} 
          alt="University Overview" 
          className="overview-image"
        />
      </div>

      <h3 className="overview-title">THE THOP UNIVERSITY 🚀🔥</h3>

      <div className="overview-text">
        <h2 className="overview-heading">Overview</h2>

        <p>
          THE THOP UNIVERSITY is a premier institution with a legacy of over 30 years in Engineering, Science, and Technology. It offers a wide range of interdisciplinary programs across Engineering, Law, Pharmacy, Management, Health Sciences, and more.
        </p>

        <p>
          Accredited with an ‘A++’ Grade by NAAC and recognized as a Category I University by UGC, the institution is known for its academic excellence, global partnerships, and innovation in pedagogy.
        </p>

        <p>
          Led by visionary leadership, the University boasts highly qualified faculty, advanced infrastructure, and state-of-the-art research centers, continually adapting to global educational trends.
        </p>

        <p>
          The University holds impressive rankings, including 51st in NIRF 2023 and consistent top-100 recognition for eight consecutive years. It is also ranked among the top 5 institutions in India for Innovation (ARIIA).
        </p>

        <p>
          With collaborations across top global universities and a history-making satellite launch “THOPSAT” with ISRO, the University demonstrates a strong commitment to research and societal impact.
        </p>

        <p>
          THE THOP UNIVERSITY continues to shape future leaders through world-class education, cutting-edge research, and a passion for innovation.
        </p>
      </div>
    </div>
  );
};

export default Overview;
