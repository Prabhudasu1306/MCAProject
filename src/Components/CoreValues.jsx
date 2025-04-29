import React from 'react';
import './CoreValues.css';
import Coreview from './Coreview.jpg';

const CoreValues = () => {
  return (
    <div className="core-values-container">
      <h2 className="core-values-title">Core Values</h2>
      <img
        src={Coreview}
        alt="University Profile"
        className="core-values-image"
      />

      <div className="core-values-content">
        <h3 className="core-values-subtitle">Integrity</h3>
        <p className="core-values-paragraph">
          We emphasise on high ethical standards in our actions and are committed to being transparent, responsible, and accountable.
        </p>

        <h3 className="core-values-subtitle">Nobility</h3>
        <p className="core-values-paragraph">
          We inculcate ethical values parallel to the curriculum enrichment to the student community, so that they outstand amongst their peers irrespective of the environment in which they are placed.
        </p>

        <h3 className="core-values-subtitle">Sustainability</h3>
        <p className="core-values-paragraph">
          We develop, practise, and emphasize protocols in academics and research enabling ourselves to be competitive, ensuring environmental and social sustainability.
        </p>

        <h3 className="core-values-subtitle">Partnership and Collaboration</h3>
        <p className="core-values-paragraph">
          We encourage academic and research partnerships with organisations and universities at National and International levels. We value and applaud the relationships we have with our partners.
        </p>

        <h3 className="core-values-subtitle">Inclusion and Diversity</h3>
        <p className="core-values-paragraph">
          We are committed to facilitating diverse student and faculty culture and encourage multi-cultural learning in the University. We provide opportunities to work, learn, and embrace the diversity of every individual irrespective of race, gender, religion, nationality, age, social background, physical ability, and mental competence.
        </p>

        <h3 className="core-values-subtitle">Responsibility</h3>
        <p className="core-values-paragraph">
          We believe in education for all. We take pride in owning responsibility and commitment towards society by supporting the education of students from rural, economically backward communities, differently abled individuals, and acid attack victims with full financial assistance.
        </p>

        <h3 className="core-values-subtitle">Excellence</h3>
        <p className="core-values-paragraph">
          We focus on excelling in all our academic and research activities, ensure the best academic quality in our programmes, encourage innovations, and remain receptive to the ever-changing needs of our stakeholders.
        </p>
      </div>
    </div>
  );
};

export default CoreValues;
