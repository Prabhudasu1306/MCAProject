import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import { FaEye, FaBullseye, FaHandshake, FaBookOpen, FaLightbulb, FaHeart } from 'react-icons/fa';
import './About.css'; // Make sure this CSS file is created/updated
import PlacementAbout from './PlacementAbout.png';

// Placeholder Images (Replace with your actual images)
const mainAboutImage = 'https://images.unsplash.com/photo-1596700676450-705a6efc196f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'; // Students in a modern building
const facilitiesImage = 'https://images.unsplash.com/photo-1541339907198-e087566f97a4?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'; // University campus aerial view
// eslint-disable-next-line
const innovationImage = 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'; // Group of students collaborating

// You can keep your PlacementAbout.png if it's relevant for the placements section

const About = () => {
  return (
    <div className="about-page-container">
      {/* Hero Section for About Us */}
      <div className="about-hero-section text-white d-flex align-items-center justify-content-center text-center"
           style={{ backgroundImage: `url(${mainAboutImage})` }}>
        <Container>
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">
            About The Thop University
          </h1>
          <p className="lead fs-5 mt-3 animate__animated animate__fadeInUp">
            A legacy of excellence in education, research, and community engagement.
          </p>
        </Container>
      </div>

      {/* Overview Section */}
      <Container className="my-5 py-5 overview-section">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="section-title">Our Story and Vision</h2>
            <p className="text-muted">
              Since its inception in [Year of Establishment], The Thop University has been committed
              to fostering intellectual curiosity, critical thinking, and a passion for lifelong learning.
              We believe in nurturing well-rounded individuals who are not only academically strong but also
              socially responsible and ethically sound.
            </p>
            <p className="text-muted">
              Our journey began with a vision to create a center of educational excellence that would
              contribute significantly to society through knowledge creation and dissemination. Today,
              we proudly stand as a testament to that enduring vision, continually adapting to the
              demands of the 21st century while upholding our core values.
            </p>
            <Button variant="primary" className="mt-3 modern-button" href="/history">
              Our History
            </Button>
          </Col>
          <Col md={6} className="mt-4 mt-md-0 text-center">
            <Image src={facilitiesImage} fluid rounded className="about-image shadow-lg" alt="University Facilities" />
          </Col>
        </Row>
      </Container>

      {/* Mission, Vision, Values Section */}
      <div className="mva-section py-5">
        <Container>
          <h2 className="section-title text-center text-white mb-5">Our Guiding Principles</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="mva-card h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaEye size={50} className="icon-white mb-3" />
                  <Card.Title className="text-white">Our Vision</Card.Title>
                  <Card.Text className="text-light-muted">
                    To be a globally recognized institution of higher learning, pioneering
                    innovation, fostering research, and nurturing leaders who contribute
                    positively to a sustainable global society.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mva-card h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaBullseye size={50} className="icon-white mb-3" />
                  <Card.Title className="text-white">Our Mission</Card.Title>
                  <Card.Text className="text-light-muted">
                    To provide a dynamic, student-centric learning environment, conduct
                    impactful research, and engage with communities to address complex
                    global challenges and promote socio-economic development.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mva-card h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaHandshake size={50} className="icon-white mb-3" />
                  <Card.Title className="text-white">Our Core Values</Card.Title>
                  <Card.Text className="text-light-muted">
                    <ul className="list-unstyled text-small">
                      <li><FaBookOpen /> Academic Excellence</li>
                      <li><FaLightbulb /> Innovation</li>
                      <li><FaHeart /> Integrity & Respect</li>
                      {/* <li><FaGlobe /> Global Citizenship</li> */}
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Placements Section (Retained and Enhanced) */}
      <Container className="my-5 py-5 placement-about-section">
        <h2 className="section-title text-center mb-5">Empowering Careers: Our Placement Cell</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <Image src={PlacementAbout} fluid rounded className="placement-about-image shadow-lg" alt="Placement Group" />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3 className="sub-section-title">Bridging Talent with Opportunity</h3>
            <p className="text-muted">
              Our dedicated **Placement Cell** plays a pivotal role in shaping the career trajectories of our students.
              It serves as the vital link between our talented graduates and leading organizations across various industries.
              We proactively identify and monitor employment opportunities, inviting top-tier recruiters for exclusive
              campus recruitment drives for our final-year students.
            </p>
            <p className="text-muted">
              The On-Campus Recruitment Program is a continuous process, extending throughout the final academic year.
              Beyond on-campus efforts, we provide extensive support for Off-Campus Recruitment, ensuring our students
              have every advantage in securing their desired career paths.
            </p>
            <h3 className="sub-section-title mt-4">Our Objectives</h3>
            <ul className="list-unstyled objectives-list">
              <li><i className="fas fa-check-circle me-2 icon-green"></i>Inspire students and impart cutting-edge skills to meet dynamic business and corporate demands.</li>
              <li><i className="fas fa-check-circle me-2 icon-green"></i>Assist students in meticulously selecting the right career path aligned with their aspirations and strengths.</li>
              <li><i className="fas fa-check-circle me-2 icon-green"></i>Maximize student placements through unparalleled placement support, mentorship, and industry connections.</li>
            </ul>
            <Button variant="outline-primary" className="mt-3 modern-button" href="/placement">
              Explore Placements
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Call to Action for Further Info */}
      <div className="cta-about-section py-5 text-center">
        <Container>
          <h2 className="text-white mb-4">Ready to Learn More?</h2>
          <p className="lead text-white-75 mb-5">
            Dive deeper into our academic programs, faculty profiles, and campus facilities.
          </p>
          <Button variant="light" size="lg" className="modern-button" href="/contactus">
            Contact Us
          </Button>
          <Button variant="outline-light" size="lg" className="ms-3 modern-button" href="/schools">
            View Colleges
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default About;