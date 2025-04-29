import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <h4>Email:</h4>
          <p>contact@thopuniversity.edu</p>
        </div>
        <div className="contact-item">
          <h4>Phone Number:</h4>
          <p>+1 234 567 890</p>
        </div>
        <div className="contact-item">
          <h4>Address:</h4>
          <p>THE Thop University, 123 Main Street, Cityville, Country</p>
        </div>
      </div>
      <div className="map">
        <h4>Find Us on the Map:</h4>
        <p>Location: [Map Placeholder]</p>
      </div>
    </div>
  );
};

export default ContactUs;
