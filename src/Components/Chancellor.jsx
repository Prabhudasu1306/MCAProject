import React from 'react';
import './Chancellor.css';
import Founder from './Founder.jpg';
import Founder1 from './Founder1.jpg';
import Founder2 from './Founder2.jpeg';

const Chancellor = () => {
  return (
    <div className="founder-container">
      <h2 className="founder-title">Founder & Chancellor</h2>

      {/* First Profile Block */}
      <div className="founder-profile">
        <img src={Founder} alt="Ram Gopal Varma" className="founder-image" />
        <div className="founder-text">
          <h3 className="founder-name">Ram Gopal Varma (RGV)</h3>
          <p>
            Ram Gopal Varma, also known as RGV, is a celebrated Indian film director, screenwriter, and producer who
            has left an indelible mark on both Telugu and Hindi cinema. He gained fame with his groundbreaking debut
            film <i>Shiva</i> (1989), which redefined Indian filmmaking with its gritty portrayal of student politics.
          </p>
        </div>
      </div>

      {/* Second Profile Block (Film Career) */}
      <div className="founder-profile">
        <img src={Founder1} alt="RGV Filmmaking" className="founder-image" />
        <div className="founder-text">
          <h3 className="founder-subheading">Film Career</h3>
          <p>
            RGV has directed iconic films like <i>Satya</i>, <i>Company</i>, <i>Rangeela</i>, and <i>Sarkar</i>,
            earning a reputation as a bold, experimental filmmaker. His style blends realism with raw emotion and
            has influenced a generation of directors across India. He is known for challenging traditional narrative structures and exploring dark, unconventional themes.
          </p>
        </div>
      </div>

      {/* Third Profile Block (Founder of THOP University) */}
      <div className="founder-profile">
        <img src={Founder2} alt="Thop University" className="founder-image" />
        <div className="founder-text">
          <h3 className="founder-subheading">Founder of THE THOP UNIVERSITY</h3>
          <p>
            Ram Gopal Varma is the visionary founder of <strong>THE THOP UNIVERSITY</strong>, an institution rooted in
            creativity, innovation, and excellence. Inspired by his journey through storytelling and breaking barriers,
            the university aims to shape future leaders in arts, technology, and entrepreneurship. His leadership
            reflects a deep commitment to reimagining education in India and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chancellor;
