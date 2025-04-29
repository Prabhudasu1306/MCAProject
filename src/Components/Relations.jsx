import React from 'react';
import './Relations.css';

const Relations = () => {
  return (
    <div className="relations-container">
      <div className="relations-card">
        <h2 className="relations-title">INDUSTRY RELATIONS</h2>
        <p>
          The Industry-Institute Interaction Cell (IIIC), established in 2012, strengthens collaboration by providing a platform for students and faculty to understand industry expectations. It showcases best practices and latest technologies to align academic learning with real-world needs.
        </p>
        <p>
          Industry interaction enhances placements and curriculum relevance. IIIC invites experts to shape career development programs and improve teaching-learning processes.
        </p>
        <p>
          Students participate in national and international hackathons and coding contests, earning many accolades.
        </p>
      </div>

      <div className="relations-card">
        <h3 className="relations-subtitle">Objectives</h3>
        <ul className="relations-list">
          <li>Explore common areas of industry interaction.</li>
          <li>Establish Centres of Excellence for hands-on exposure.</li>
          <li>Encourage research activities by faculty and students.</li>
          <li>Establish MOUs with industries for strategic partnerships.</li>
        </ul>
      </div>

      <div className="relations-card">
        <h3 className="relations-subtitle">Cell Members</h3>
        <ul className="relations-list">
          <li>Dr. E. John Bruce – Dean-Placements (Coordinator)</li>
          <li>Dr. A Veeramuthu – Professor</li>
          <li>Mr. S. Dhamodharan – Asst. Professor (CSE)</li>
          <li>Ms. J. Daphne Medona – Placement Coordinator</li>
          <li>Dr. Nivin Joy – Assoc. Professor (Mech)</li>
          <li>Dr. P. Prakash – Assoc. Professor (Bio-Tech)</li>
          <li>Dr. Vanitha – Asst. Professor (Civil)</li>
          <li>Dr. Joyce – Asst. Professor (MBA)</li>
        </ul>
      </div>

      <div className="relations-card">
        <h3 className="relations-subtitle">Roles</h3>
        <ul className="relations-list">
          <li>Expose faculty and students to industry culture.</li>
          <li>Host workshops and conferences jointly with industries.</li>
          <li>Invite industry engineers for lectures.</li>
          <li>Coordinate with companies for training, placements, and visits.</li>
          <li>Sign MOUs for collaboration and research.</li>
        </ul>
      </div>

      <div className="relations-card">
        <h3 className="relations-subtitle">Clubs</h3>

        <h4 className="relations-club-heading">1. Cognizant Student Club</h4>
        <p>
          Members work on real-time projects and interact with Cognizant mentors. Activities include idea discussions, project building, and skill development.
        </p>
        <ul className="relations-list">
          <li>Leadership & team management</li>
          <li>Time management & communication</li>
          <li>Real-world application building</li>
        </ul>

        <h4 className="relations-club-heading">2. Sathyabama Coding Club</h4>
        <p>
          Started in 2018 to enhance students’ Hackathon skills. Students explore domains like AI/ML, IoT, Big Data, Web/Android Dev, and more.
        </p>
        <ul className="relations-list">
          <li>Workshops on trending tech</li>
          <li>Real-world collaborative projects</li>
          <li>Webinars every two weeks</li>
        </ul>
      </div>

      <div className="relations-card">
        <h3 className="relations-subtitle">Industry Collaborations</h3>

        <h4 className="relations-club-heading">1. Centres of Excellence</h4>
        <ul className="relations-list">
          <li>Virtusa – Mobility Lab, RIA Lab</li>
          <li>IBM, HCL, Capgemini, CDAC</li>
          <li>ServiceNow, ICT Academy, Qmax</li>
        </ul>

        <h4 className="relations-club-heading">2. MoUs with Industries</h4>
        <ul className="relations-list">
          <li>Infosys, Cognizant, Accenture, Wipro</li>
          <li>HCL, Biozone, Capgemini, QMax</li>
          <li>Virtusa, ServiceNow, Control Techniques</li>
        </ul>

        <h4 className="relations-club-heading">3. Expert Talks</h4>
        <ul className="relations-list">
          <li>Cloud Computing – Accenture</li>
          <li>Power Talks – Gadget World, Capgemini</li>
          <li>Bio Medical Students – Bio Con</li>
          <li>Motivational Talks – MBA Students</li>
          <li>Campus to Corporate – Cognizant</li>
          <li>Electric Vehicle – Mr. Pratik Somani</li>
          <li>Stock Market for Beginners – Mr. Dibagkar Dey</li>
        </ul>
      </div>
    </div>
  );
};

export default Relations;
