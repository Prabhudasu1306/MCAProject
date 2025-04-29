import React from 'react';
import Founder from './Founder.jpg'; 
const Chancellor = () => {
  return (
    <div style={{ backgroundColor: '#f4f4f4', padding: '2rem', borderRadius: '12px', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
      <img
        src={Founder}
        alt="RGV Profile"
        style={{ width: '200px', borderRadius: '12px', marginBottom: '1rem' }}
      />
      <h2>Ram Gopal Varma (RGV)</h2>
      <p style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'justify' }}>
        Ram Gopal Varma, also known as RGV, is a renowned Indian film director, screenwriter, and producer
        known for his work in Telugu and Hindi cinema. He is widely regarded for his innovative storytelling,
        technical excellence, and bold filmmaking style. RGV made his directorial debut with the Telugu blockbuster
        <i> Shiva </i> in 1989, which revolutionized Indian cinema with its raw depiction of college politics and violence.
      </p>
      <p style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'justify' }}>
        Over the years, he has directed iconic films like <i> Satya, Company, Rangeela, </i> and <i> Sarkar </i>,
        influencing generations of filmmakers. Known for breaking cinematic norms and pushing creative boundaries,
        RGV has carved a niche for himself as a fearless storyteller. In addition to films, he is also an outspoken personality
        and author, often engaging audiences with his unfiltered views on cinema and society.
      </p>
    </div>
  );
};

export default Chancellor;
