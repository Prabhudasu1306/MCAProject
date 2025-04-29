import React from 'react';
import Training3 from './Training3.jpg'; 
import Training1 from './Training1.jpg'; 
import Training2 from './Training2.jpg';  
import Carrer from './Carrer.jpg';  
import './Training.css';

const Training = () => {
  return (
    <div className="training-container">
      
      <section className="training-section">
        <h2>Training Overview</h2>
        <p>
          Placement training is offered to students at different stages of their academics. Industrial training requirements are identified, training programs are designed and facilitated to students effectively. The training modules are regularly upgraded based on the current industry expectations and interactions with the recruiters.
        </p>
        <img src={Training3} alt="Training Profile" />
        <p>
          Placement training is provided at various academic stages to ensure students are career-ready when they graduate.
        </p>
      </section>

      <section className="training-section">
        <h2>Training Process</h2>
        <img src={Training1} alt="Training Modules" />
        <p>
          The training focuses on equipping students with the necessary skills through various modules, workshops, and real-world practice sessions. These sessions are updated regularly to align with industry demands.
        </p>
      </section>

      <section className="training-section">
        <h2>Training Outcomes</h2>
        <img src={Training2} alt="Training Outcomes" />
        <p>The training outcomes help students:</p>
        <ul className="training-outcome-list">
          <li><strong>Determine:</strong> Examine their interests, strengths, and skills. Explore various career fields.</li>
          <li><strong>Develop:</strong> Gain experience through internships, contests, and industry exposure. Build a professional network.</li>
          <li><strong>Depict:</strong> Project themselves to employers through tests, resumes, and interviews. Plan for professional credentials.</li>
        </ul>
      </section>

      <section className="training-section">
        <h2>Skill Development Programme</h2>
        <p>
          Skill Development Programs enhance academic, technical, and soft skills to meet corporate expectations. These are conducted by industry experts and faculty throughout the year.
        </p>
      </section>

      <section className="training-section">
        <h2>Online Practice and Assessments</h2>
        <p>
          Students use an interactive online platform offering varied difficulty-level tests, instant results, and detailed explanations to improve aptitude skills.
        </p>
      </section>

      <section className="training-section">
        <h2>Career Development Programme</h2>
        <img src={Carrer} alt="Career Development" />
        <p>
          Career Development Programs introduce students to potential employers, based on their aspirations. Training is tailored to different companies' skill requirements and conducted by reputed institutes.
        </p>
      </section>

      <section className="training-section">
        <h2>Value-Added Skill Development</h2>
        <p>
          Students are offered:
          <br /><br />
          <strong>BEC – Business English Certificate:</strong> Enhances English communication skills.<br />
          <strong>Seminars:</strong> By international experts, alumni, and foreign university faculty.<br />
          <strong>Networking Courses:</strong> CCNA, MCP, MCSE.<br />
          <strong>Software Courses:</strong> Java, Visual Programming, C/C++, HTML/XML/ASP, Oracle, J2EE.
        </p>
      </section>

      <section className="training-section">
        <h2>Career Guidance & Remedial Coaching</h2>
        <p>
          Students receive comprehensive guidance to make informed career decisions. Remedial coaching is also provided to help students overcome academic challenges and build essential skills.
        </p>
      </section>

      <section className="training-section">
        <h2>Personal Counselling & Foreign Language Training</h2>
        <p>
          Alumni provide mentorship and career counseling. Additionally, foreign language coaching such as Japanese is offered to enhance students’ employability globally.
        </p>
      </section>

    </div>
  );
};

export default Training;
