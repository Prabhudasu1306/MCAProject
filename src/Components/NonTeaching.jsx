import React, { useState } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import "./NonTeaching.css"

const NonTeaching = () => {
  const [nonTeaching, setNonTeaching] = useState({
    name: '',
    designation: '',
    department: '',
    salary: '',
    contactNumber: '',
    experience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNonTeaching({ ...nonTeaching, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/api/NonTeaching/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nonTeaching),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setNonTeaching({
          name: '',
          designation: '',
          department: '',
          salary: '',
          contactNumber: '',
          experience: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleClear = () => {
    setNonTeaching({
      name: '',
      designation: '',
      department: '',
      salary: '',
      contactNumber: '',
      experience: ''
    });
  };

  return (
    <Container className="non-teaching-container">
    <h2 className="non-teaching-heading">Add Non-Teaching Staff</h2>
    <Form onSubmit={handleSubmit}>
      <Row className="non-teaching-grid">
        <Col>
          <Form.Group controlId="formName" className="non-teaching-form-group">
            <Form.Label className="non-teaching-label">Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={nonTeaching.name}
              onChange={handleChange}
              required
              className="non-teaching-input"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formDesignation" className="non-teaching-form-group">
            <Form.Label className="non-teaching-label">Designation</Form.Label>
            <Form.Control
              type="text"
              name="designation"
              value={nonTeaching.designation}
              onChange={handleChange}
              required
              className="non-teaching-input"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formDepartment" className="non-teaching-form-group">
            <Form.Label className="non-teaching-label">Department</Form.Label>
            <Form.Control
              type="text"
              name="department"
              value={nonTeaching.department}
              onChange={handleChange}
              required
              className="non-teaching-input"
            />
          </Form.Group>
        </Col>
      </Row>
  
      <Row className="non-teaching-grid">
        <Col>
          <Form.Group controlId="formSalary" className="non-teaching-form-group">
            <Form.Label className="non-teaching-label">Salary</Form.Label>
            <Form.Control
              type="number"
              name="salary"
              value={nonTeaching.salary}
              onChange={handleChange}
              required
              className="non-teaching-input"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formContactNumber" className="non-teaching-form-group">
            <Form.Label className="non-teaching-label">Contact Number</Form.Label>
            <Form.Control
              type="text"
              name="contactNumber"
              value={nonTeaching.contactNumber}
              onChange={handleChange}
              required
              className="non-teaching-input"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formExperience" className="non-teaching-form-group">
            <Form.Label className="non-teaching-label">Experience (years)</Form.Label>
            <Form.Control
              type="number"
              name="experience"
              value={nonTeaching.experience}
              onChange={handleChange}
              required
              className="non-teaching-input"
            />
          </Form.Group>
        </Col>
      </Row>
  
      <div className="non-teaching-buttons">
        <Button type="submit" className="non-teaching-button">
          Submit
        </Button>
        <Button onClick={handleClear} className="non-teaching-clear-button">
          Clear
        </Button>
      </div>
    </Form>
  </Container>
  
  );
};

export default NonTeaching;
