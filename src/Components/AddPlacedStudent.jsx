import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';
import './AddPlacedStudent.css'; // Make sure this CSS file is created/updated

const AddPlacedStudent = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    ctc: '',
    placedYear: '',
    branch: ''
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'danger'

  const handleChange = (e) => {
    setMessage(''); // Clear previous messages on input change
    setMessageType('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear any old messages

    // Basic client-side validation
    const { name, company, ctc, placedYear, branch } = formData;
    if (!name.trim() || !company.trim() || !ctc.trim() || !placedYear.trim() || !branch.trim()) {
      setMessage('All fields are required.');
      setMessageType('danger');
      return;
    }
    if (isNaN(ctc) || parseFloat(ctc) <= 0) {
      setMessage('CTC must be a positive number.');
      setMessageType('danger');
      return;
    }
    if (isNaN(placedYear) || parseInt(placedYear) <= 1900 || parseInt(placedYear) > new Date().getFullYear() + 5) { // Assuming a reasonable year range
      setMessage('Please enter a valid placed year (e.g., 2023).');
      setMessageType('danger');
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/placed-students/add", formData);
      setMessage("Student added successfully!");
      setMessageType('success');
      handleClear(); // Clear form on successful submission
    } catch (error) {
      console.error("Error adding student:", error);
      setMessage("Failed to add student. Please try again.");
      setMessageType('danger');
      if (error.response && error.response.data && error.response.data.message) {
        // If your backend sends a specific error message
        setMessage(`Failed to add student: ${error.response.data.message}`);
      }
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      company: '',
      ctc: '',
      placedYear: '',
      branch: ''
    });
    // Do not clear message here if it's a success/failure message from previous submit
  };

  return (
    <Container className="my-5 add-placed-student-container">
      <Card className="shadow p-4 add-placed-student-card">
        <Card.Body>
          <h2 className="card-title text-center mb-4">Add Placed Student</h2>

          {/* Alert for messages */}
          {message && (
            <Alert variant={messageType} className="mb-4">
              {message}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="studentName">
                  <Form.Label>Student Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter student's full name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="companyName">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g., Google, TCS"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="ctc">
                  <Form.Label>CTC (in LPA)</Form.Label>
                  <Form.Control
                    type="number" // Use number type for CTC
                    name="ctc"
                    value={formData.ctc}
                    onChange={handleChange}
                    placeholder="e.g., 12.5 (in Lakhs Per Annum)"
                    required
                    step="0.1" // Allow decimal values for CTC
                    min="0"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="placedYear">
                  <Form.Label>Placed Year</Form.Label>
                  <Form.Control
                    type="number" // Use number type for year
                    name="placedYear"
                    value={formData.placedYear}
                    onChange={handleChange}
                    placeholder="e.g., 2023"
                    required
                    min="1900" // Set a reasonable minimum year
                    max={new Date().getFullYear() + 5} // Limit to current year + a few
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="branch">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                placeholder="e.g., Computer Science, Electrical Engineering"
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <Button variant="primary" type="submit" className="modern-button submit-button">
                Add Student
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

export default AddPlacedStudent;