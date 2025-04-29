import React from 'react';
import './FounderChancellor.css';
import Founder from './Founder.jpg';

const FounderChancellor = () => {
  return (
    <div className="founder-container">
      <img
        src={Founder}
        alt="RGV Profile"
        className="founder-image"
      />
      <h2 className="founder-name">Ram Gopal Varma (RGV)</h2>
      <p className="founder-description">
        Ram Gopal Varma, also known as RGV, is a renowned Indian film director, screenwriter, and producer
        known for his work in Telugu and Hindi cinema. He is widely regarded for his innovative storytelling,
        technical excellence, and bold filmmaking style. RGV made his directorial debut with the Telugu blockbuster
        <i> Shiva </i> in 1989, which revolutionized Indian cinema with its raw depiction of college politics and violence.
      </p>
      <p className="founder-description">
        Over the years, he has directed iconic films like <i> Satya, Company, Rangeela, </i> and <i> Sarkar </i>,
        influencing generations of filmmakers. Known for breaking cinematic norms and pushing creative boundaries,
        RGV has carved a niche for himself as a fearless storyteller. In addition to films, he is also an outspoken personality
        and author, often engaging audiences with his unfiltered views on cinema and society.
      </p>
    </div>
  );
};

export default FounderChancellor;
