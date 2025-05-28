import React from 'react';
import './CoreValues.css';
import Coreview from './Coreview.jpg'; // Ensure this image path is correct

const CoreValues = () => {
  return (
    <div className="core-values-container">
      <h2 className="core-values-title">Our Core Values</h2>

      <p className="core-values-intro">
        At Thop University, our foundation is built upon a set of core values that guide our actions,
        shape our culture, and define our commitment to our students, faculty, staff, and the global community.
        These principles are woven into the fabric of our academic and administrative endeavors, fostering an environment
        where excellence, integrity, and innovation thrive.
      </p>

      <img
        src={Coreview}
        alt="University Vision"
        className="core-values-image"
      />

      <div className="core-values-content">
        <div className="core-value-item">
          <h3>Integrity</h3>
          <p>We uphold honesty, transparency, and strong moral principles in everything we do, ensuring trust and ethical conduct.</p>
        </div>

        <div className="core-value-item">
          <h3>Empathy</h3>
          <p>We foster a compassionate environment that respects every individual's experience and identity, promoting understanding and support.</p>
        </div>

        <div className="core-value-item">
          <h3>Innovation</h3>
          <p>We embrace creativity and forward-thinking to drive impactful academic and research outcomes, pushing the boundaries of knowledge.</p>
        </div>

        <div className="core-value-item">
          <h3>Collaboration</h3>
          <p>We build strong partnerships to share knowledge and expand opportunities globally, fostering a spirit of collective growth.</p>
        </div>

        <div className="core-value-item">
          <h3>Diversity</h3>
          <p>We value a rich blend of cultures, ideas, and perspectives that enhance our learning community, celebrating uniqueness.</p>
        </div>

        <div className="core-value-item">
          <h3>Social Responsibility</h3>
          <p>We are committed to contributing positively to society through education, inclusion, and impactful community outreach.</p>
        </div>

        <div className="core-value-item">
          <h3>Excellence</h3>
          <p>We strive for the highest standards in teaching, learning, and institutional development, continuously pursuing mastery.</p>
        </div>
      </div>

      <p className="core-values-outro">
        These core values are not just statements; they are living principles that define who we are and inspire what we aspire to be.
        They empower our community to make a meaningful difference and contribute to a better world.
      </p>
    </div>
  );
};

export default CoreValues;