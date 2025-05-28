import React from 'react';
import './Certifications.css';

const Certifications = () => {
  return (
    <div className="certifications-page">
      <h2 className="certifications-heading">Certification Programs</h2>

      <p className="intro-text">
        In today's rapidly evolving job market, theoretical knowledge alone is often not enough.
        Our comprehensive certification programs are meticulously designed to bridge the gap between academic learning and industry demands,
        making our students exceptionally industry-ready. These specialized programs play a pivotal role in enhancing practical skills,
        deepening understanding of niche subjects, and significantly boosting the average placement packages offered to our graduates.
        We are committed to providing our students with a competitive edge through exposure to a diverse range of cutting-edge technologies and methodologies.
      </p>

      <p className="intro-text">
        Explore our wide array of certification programs, each crafted to empower you with in-demand skills and open doors to exciting career opportunities:
      </p>

      <div className="certifications-list">
        <div className="certification-item">Cloud Computing</div>
        <div className="certification-item">Machine Learning A-Z: Hands-on Python and R</div>
        <div className="certification-item">CMOS VLSI Design</div>
        <div className="certification-item">Programming and Data Structure in Python</div>
        <div className="certification-item">IOT Using Raspberry Pi</div>
        <div className="certification-item">Data Science with R</div>
        <div className="certification-item">Full Stack Web Developer</div>
        <div className="certification-item">Ethical Hacking</div>
        <div className="certification-item">Android App Development</div>
        <div className="certification-item">Web Development - Complete Fast Track</div>
        <div className="certification-item">Embedded System in Robotics and IOT</div>
        <div className="certification-item">Front End Web Developer</div>
        <div className="certification-item">PIC Microcontroller Programming</div>
        <div className="certification-item">CADD</div>
        <div className="certification-item">Cyber Security and Forensics</div>
        <div className="certification-item">Linux Administration</div>
        <div className="certification-item">Basic Arduino Programming</div>
        <div className="certification-item">Amazon Web Services</div>
        <div className="certification-item">Allen Bradley PLC Programming and Maintenance</div>
        <div className="certification-item">MATLAB</div>
        <div className="certification-item">Aircraft and Ground Maintenance</div>
      </div>

      <p className="closing-text">
        Our commitment is to equip you with the specialized skills and recognized credentials that employers seek.
        These programs are continuously updated to reflect the latest industry trends, ensuring that our students
        remain at the forefront of innovation and expertise in their chosen fields.
      </p>
    </div>
  );
}

export default Certifications;