import React from 'react';
import PlacementAbout from './PlacementAbout.png';  
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>

      <section>
        <h3>Placements</h3>
        <p>
          Our Placement Cell acts as a bridge between students and recruiters. It monitors employment opportunities in various domains and invites recruiters for campus recruitment of final-year students at our institute.
        </p>
        <p>
          The On-Campus Recruitment Program continues till the end of the final semester. We also support our students with Off-Campus Recruitment.
        </p>

        {/* Use the locally stored image */}
        <img
          src={PlacementAbout}  // Display the imported image
          alt="Placement Group"
          className="about-img"
        />
      </section>

      <section>
        <h3>Objectives</h3>
        <ul>
          <li>Inspire students and impart skills to meet business and corporate demands.</li>
          <li>Assist students in selecting the right career path.</li>
          <li>Maximize student placements through excellent placement support.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
