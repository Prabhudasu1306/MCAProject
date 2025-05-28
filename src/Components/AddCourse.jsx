import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';
import './AddCourse.css'; // We'll create this CSS file

const AddCourse = () => {
  const [course, setCourse] = useState({
    name: '',
    duration: '',
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'danger'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({
      ...course,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    // Basic client-side validation
    if (!course.name.trim() || !course.duration.trim()) {
      setMessage('Please fill in all fields.');
      setMessageType('danger');
      return;
    }
    if (isNaN(course.duration) || parseInt(course.duration) <= 0) {
      setMessage('Duration must be a positive number.');
      setMessageType('danger');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/courses/add', course);
      setMessage('Course added successfully!');
      setMessageType('success');
      console.log('Course added:', response.data);
      setCourse({ name: '', duration: '' }); // Clear form on success
    } catch (error) {
      console.error('Error adding course:', error);
      setMessage('Failed to add course. Please try again.');
      setMessageType('danger');
      // More specific error message from backend if available
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(`Failed to add course: ${error.response.data.message}`);
      }
    }
  };

  const handleClear = () => {
    setCourse({ name: '', duration: '' });
    setMessage(''); // Clear message on clear
    setMessageType('');
  };

  return (
    <Container className="my-5 add-course-container">
      <Card className="shadow p-4 add-course-card">
        <Card.Body>
          <h2 className="card-title text-center mb-4">Add New Course</h2>

          {message && (
            <Alert variant={messageType} className="mb-4">
              {message}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="courseName">
                  <Form.Label>Course Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={course.name}
                    onChange={handleChange}
                    placeholder="e.g., Computer Science, Electrical Engineering"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="courseDuration">
                  <Form.Label>Duration (in Years)</Form.Label>
                  <Form.Control
                    type="number"
                    name="duration"
                    value={course.duration}
                    onChange={handleChange}
                    placeholder="e.g., 4"
                    required
                    min="1" // Ensure positive duration
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <Button variant="primary" type="submit" className="modern-button submit-button">
                Add Course
              </Button>
              <Button variant="outline-secondary" type="button" onClick={handleClear} className="modern-button clear-button">
                Clear
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddCourse;