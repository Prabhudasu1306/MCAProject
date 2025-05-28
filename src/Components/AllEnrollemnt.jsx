import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Table, Button, Card, Alert } from 'react-bootstrap';
import './AllEnrollment.css';

const AllEnrollment = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/enrollments');
      setEnrollments(response.data);
      setMessage("");
      setMessageType("");
    } catch (error) {
      console.error("There was an error fetching the enrollments!", error);
      setMessage("Failed to fetch enrollments. Please try again later.");
      setMessageType("danger");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this enrollment?")) {
      try {
        await axios.delete(`http://localhost:8080/api/enrollments/${id}`);
        setMessage("Enrollment deleted successfully!");
        setMessageType("success");
        fetchEnrollments();
      } catch (error) {
        console.error('Error deleting enrollment:', error);
        setMessage("There was an error deleting the enrollment!");
        setMessageType("danger");
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/update-enrollment/${id}`);
  };

  return (
    <Container className="all-enrollment-container my-5">
      <h2 className="text-center mb-4 enrollment-page-title">Existing Enrollments</h2>

      {message && (
        <Alert variant={messageType} className="mb-4 text-center">
          {message}
        </Alert>
      )}

      <Card className="p-4 shadow-sm enrollment-table-card">
        <Card.Title className="mb-4 text-center enrollment-table-title">Enrollment Records</Card.Title>
        <div className="table-responsive">
          <Table striped bordered hover className="enrollment-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Fee</th>
                <th>Course</th>
                <th>Duration</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.length > 0 ? (
                enrollments.map(enrollment => (
                  <tr key={enrollment.id}>
                    <td>{enrollment.id}</td>
                    <td>{enrollment.name}</td>
                    <td>{enrollment.fee}</td>
                    <td>{enrollment.course}</td>
                    <td>{enrollment.duration}</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button
                          variant="info"
                          size="sm"
                          className="me-2 action-btn edit-btn"
                          onClick={() => handleEdit(enrollment.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          className="action-btn delete-btn"
                          onClick={() => handleDelete(enrollment.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No enrollment details available
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </Card>
    </Container>
  );
};

export default AllEnrollment;