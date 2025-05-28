import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';
import './AddStaff.css';

const AddStaff = () => {
  const [staffData, setStaffData] = useState({
    firstName: '',
    lastName: '',
    qualification: '',
    experience: '',
    subject: ''
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    setMessage('');
    setMessageType('');
    setStaffData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    const { firstName, lastName, qualification, experience, subject } = staffData;
    if (!firstName.trim() || !lastName.trim() || !qualification.trim() || !experience.trim() || !subject.trim()) {
      setMessage('All fields are required.');
      setMessageType('danger');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/staff/add', staffData);
      if (response.status === 200 || response.status === 201) {
        setMessage('Staff added successfully!');
        setMessageType('success');
        setStaffData({
          firstName: '',
          lastName: '',
          qualification: '',
          experience: '',
          subject: ''
        });
      }
    } catch (error) {
      console.error('Error adding staff:', error);
      setMessage('Error adding staff. Please try again.');
      setMessageType('danger');
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(`Error adding staff: ${error.response.data.message}`);
      }
    }
  };

  const handleClear = () => {
    setStaffData({
      firstName: '',
      lastName: '',
      qualification: '',
      experience: '',
      subject: ''
    });
    setMessage('');
    setMessageType('');
  };

  return (
    <Container className="my-5 add-staff-container">
      <Card className="shadow p-4 add-staff-card">
        <Card.Body>
          <h2 className="card-title text-center mb-4">Add New Staff</h2>

          {message && (
            <Alert variant={messageType} className="mb-4">
              {message}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={staffData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={staffData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="qualification">
                  <Form.Label>Qualification</Form.Label>
                  <Form.Control
                    type="text"
                    name="qualification"
                    value={staffData.qualification}
                    onChange={handleChange}
                    placeholder="e.g., Ph.D. in CS"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="experience">
                  <Form.Label>Experience (Years)</Form.Label>
                  <Form.Control
                    type="text"
                    name="experience"
                    value={staffData.experience}
                    onChange={handleChange}
                    placeholder="e.g., 5 years, Fresh Grad"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="subject">
              <Form.Label>Subject Taught</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={staffData.subject}
                onChange={handleChange}
                placeholder="e.g., Data Structures, Thermodynamics"
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <Button variant="primary" type="submit" className="modern-button submit-button">
                Add Staff
              </Button>
              <Button variant="outline-secondary" type="button" onClick={handleClear} className="modern-button clear-button">
                Clear Form
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddStaff;