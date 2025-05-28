import React from 'react';
import './Internships.css'; // Make sure your CSS file is correctly linked

const Internships = () => {
  return (
    <div className="internships-container">
      <h2 className="internship-heading">Empowering Futures: Comprehensive Internship Programs at THOP University</h2>

      <p className="internship-intro-text">
        At THOP University, we recognize that practical experience is paramount to a successful career. Our robust internship programs are thoughtfully designed to immerse students in real-world industry environments, bridging the gap between theoretical knowledge gained in classrooms and the practical application demanded by leading companies. These invaluable opportunities are primarily offered to our pre-final year and final year students, enabling them to explore various facets of both core engineering disciplines and cutting-edge IT fields.
      </p>

      <p className="internship-benefits-text">
        An internship at THOP University is more than just work experience; it's a transformative journey. Students gain direct exposure to industry best practices, innovative technologies, and professional work ethics. This hands-on involvement allows them to apply their academic learning, develop crucial problem-solving skills, enhance their communication abilities, and build a professional network that can be instrumental for their future careers. Many of our students have even received pre-placement offers based on their outstanding internship performance.
      </p>

      <p className="internship-facilitation-text">
        Our commitment to student success is reflected in how we facilitate these opportunities. Internship placements are meticulously coordinated through strong collaborations between academic departments and our dedicated Placement Cell. We actively engage with a wide array of industry partners, ensuring a diverse range of opportunities from multinational corporations to innovative startups, covering various domains. This strategic approach ensures that our students are exposed to the dynamic demands of the global workforce, preparing them to excel in their chosen fields.
      </p>

      <h3 className="companies-list-title">Our Esteemed Internship Partners</h3>
      <div className="company-grid">
        {/* Your existing list of companies */}
        <div className="company-item">Accenture</div>
        <div className="company-item">Renault Nissan</div>
        <div className="company-item">Cognizant</div>
        <div className="company-item">Planys Technologies</div>
        <div className="company-item">Saint Gobain</div>
        <div className="company-item">BnP Paribas</div>
        <div className="company-item">Bosch Global Software</div>
        <div className="company-item">Capgemini</div>
        <div className="company-item">Danfoss</div>
        <div className="company-item">Orcaso</div>
        <div className="company-item">Bonfiglioli</div>
        <div className="company-item">Coditas</div>
        <div className="company-item">Oracle</div>
        <div className="company-item">Uno Minda</div>
        <div className="company-item">Nokia</div>
        <div className="company-item">Xome</div>
        <div className="company-item">Siemens</div>
        <div className="company-item">Valeo</div>
        <div className="company-item">Mr. Cooper</div>
        <div className="company-item">Schneider Electric</div>
        <div className="company-item">Infosys</div>
        <div className="company-item">Zoho</div>
        <div className="company-item">Dyeus</div>
        <div className="company-item">ABInBev GCC India</div>
        <div className="company-item">Cango Networks</div>
        <div className="company-item">Ensemble Tech</div>
        <div className="company-item">Celestica R&D India</div>
        <div className="company-item">Data Insights</div>
        <div className="company-item">Kickdrum</div>
        <div className="company-item">Microchip Technology</div>
        <div className="company-item">Linde</div>
      </div>
    </div>
  );
};

export default Internships;