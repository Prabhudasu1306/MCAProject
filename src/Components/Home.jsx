import React from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import { FaGraduationCap, FaFlask, FaBuilding, FaGlobe, FaChalkboardTeacher, FaLightbulb } from 'react-icons/fa';
import './Home.css'; // Make sure this CSS file is created/updated
import The_Thop from './The_Thop.png';


const heroImage = 'https://images.unsplash.com/photo-1541339907198-e087566f97a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'; // A generic university building
const campusLifeImage = 'https://images.unsplash.com/photo-1523050854028-a2491a095cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'; // Students interacting
const researchImage = 'https://images.unsplash.com/photo-1579547621415-3882f05d5e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'; // Lab/research focus
// eslint-disable-next-line
const globalReachImage = 'https://images.unsplash.com/photo-1517245388837-a16223403a5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'; // Diverse group of students
// You can keep your The_Thop.png if it's relevant for the 'About Us' section



const Home = () => {
  return (
    <div className="home-page-container">
    
      <div className="hero-section text-white d-flex align-items-center justify-content-center text-center"
           style={{ backgroundImage: `url(${heroImage})` }}>
        <Container>
          <h1 className="display-3 fw-bold animate__animated animate__fadeInDown">
            Welcome to <span className="highlight-text">The Thop University</span>
          </h1>
          <p className="lead fs-4 mt-3 animate__animated animate__fadeInUp">
            Cultivating Leaders, Fostering Innovation, Shaping Futures.
          </p>
          <Button variant="light" size="lg" className="mt-4 hero-btn animate__animated animate__zoomIn" href="#admission-info">
            Explore Programs
          </Button>
        </Container>
      </div>

      <Container className="my-5 py-5 about-section">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <Image src={The_Thop} fluid rounded className="about-image shadow-lg" alt="The Thop University campus" />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h2 className="section-title">About Our University</h2>
            <p className="text-muted">
              The Thop University stands as a beacon of academic excellence and holistic development.
              For decades, we've been dedicated to providing a transformative educational experience
              that equips students with the knowledge, skills, and values needed to excel in a rapidly
              evolving global landscape.
            </p>
            <p className="text-muted">
              Our commitment extends beyond the classroom, fostering an environment of critical thinking,
              innovation, and social responsibility. We invite you to be part of our legacy of success.
            </p>
            <Button variant="primary" className="mt-3 action-button" href="/about">
              Learn More About Us
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Why Choose Us Section */}
      <div className="why-choose-us-section py-5">
        <Container>
          <h2 className="section-title text-center text-white mb-5">Why Choose The Thop?</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="choice-card h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaGraduationCap size={50} className="icon-blue mb-3" />
                  <Card.Title>Academic Excellence</Card.Title>
                  <Card.Text className="text-muted">
                    Renowned faculty, rigorous curriculum, and a commitment to intellectual growth.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="choice-card h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaFlask size={50} className="icon-blue mb-3" />
                  <Card.Title>Cutting-Edge Research</Card.Title>
                  <Card.Text className="text-muted">
                    Opportunities to engage in groundbreaking research across various disciplines.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="choice-card h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaBuilding size={50} className="icon-blue mb-3" />
                  <Card.Title>Modern Infrastructure</Card.Title>
                  <Card.Text className="text-muted">
                    State-of-the-art labs, smart classrooms, and a vibrant campus environment.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="choice-card h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaGlobe size={50} className="icon-blue mb-3" />
                  <Card.Title>Global Opportunities</Card.Title>
                  <Card.Text className="text-muted">
                    International collaborations, exchange programs, and a diverse student body.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="choice-card h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaChalkboardTeacher size={50} className="icon-blue mb-3" />
                  <Card.Title>Experienced Faculty</Card.Title>
                  <Card.Text className="text-muted">
                    Learn from industry experts and passionate educators committed to your success.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="choice-card h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaLightbulb size={50} className="icon-blue mb-3" />
                  <Card.Title>Innovation & Entrepreneurship</Card.Title>
                  <Card.Text className="text-muted">
                    Programs and support to foster your entrepreneurial spirit and innovative ideas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Campus Life Section */}
      <Container className="my-5 py-5 campus-life-section">
        <h2 className="section-title text-center mb-5">Life at The Thop University</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <Image src={campusLifeImage} fluid rounded className="campus-image shadow-lg" alt="Students on campus" />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3 className="sub-section-title">Vibrant Campus Culture</h3>
            <p className="text-muted">
              Beyond academics, The Thop University offers a thriving campus life. Engage in a myriad of clubs,
              societies, sports activities, and cultural festivals. Our diverse community ensures
              every student finds their niche and creates lifelong memories.
            </p>
            <Button variant="outline-primary" className="mt-3 action-button" href="/student-life">
              Discover Student Life
            </Button>
          </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col md={6} className="order-md-2">
            <Image src={researchImage} fluid rounded className="campus-image shadow-lg" alt="Research lab" />
          </Col>
          <Col md={6} className="order-md-1 mt-4 mt-md-0">
            <h3 className="sub-section-title">Driving Research & Innovation</h3>
            <p className="text-muted">
              We are at the forefront of groundbreaking research, empowering students and faculty
              to explore new frontiers in science, technology, humanities, and arts. Our research centers
              are incubators for ideas that shape the future.
            </p>
            <Button variant="outline-primary" className="mt-3 action-button" href="/research">
              Explore Research
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Admissions Call to Action Section */}
      <div id="admission-info" className="admission-cta-section py-5 text-white text-center">
        <Container>
          <h2 className="display-4 fw-bold mb-4 animate__animated animate__fadeIn">Your Future Starts Here</h2>
          <p className="lead fs-5 mb-5 animate__animated animate__fadeInUp">
            Take the first step towards a rewarding academic journey. Explore our diverse programs and apply today.
          </p>
          <Button variant="success" size="lg" className="cta-button animate__animated animate__zoomIn" href="/admission">
            Apply for Admission
          </Button>
          <Button variant="outline-light" size="lg" className="ms-3 cta-button animate__animated animate__zoomIn" href="/contactus">
            Contact Admissions
          </Button>
        </Container>
      </div>

      {/* Testimonials or Quick Stats (Optional but good for modern feel) */}
      <Container className="my-5 py-4 quick-stats-section">
        <h2 className="section-title text-center mb-5">Our Impact at a Glance</h2>
        <Row className="text-center">
          <Col sm={6} md={3} className="mb-4">
            <div className="stat-item p-3">
              <h3 className="stat-number">25,000+</h3>
              <p className="stat-text">Students Enrolled</p>
            </div>
          </Col>
          <Col sm={6} md={3} className="mb-4">
            <div className="stat-item p-3">
              <h3 className="stat-number">100+</h3>
              <p className="stat-text">Academic Programs</p>
            </div>
          </Col>
          <Col sm={6} md={3} className="mb-4">
            <div className="stat-item p-3">
              <h3 className="stat-number">95%</h3>
              <p className="stat-text">Placement Rate</p>
            </div>
          </Col>
          <Col sm={6} md={3} className="mb-4">
            <div className="stat-item p-3">
              <h3 className="stat-number">Top 10</h3>
              <p className="stat-text">National Ranking</p>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Home;