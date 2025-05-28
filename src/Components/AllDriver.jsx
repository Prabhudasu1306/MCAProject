import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  Card,
  Alert,
} from "react-bootstrap";
import "./AllDriver.css";

const AllDriver = () => {
  const [drivers, setDrivers] = useState([]);
  const [showDriverForm, setShowDriverForm] = useState(false);
  const [editingDriverId, setEditingDriverId] = useState(null);
  const [newDriver, setNewDriver] = useState({
    name: "",
    mobileNumber: "",
    salary: "",
    experience: "",
    busNumber: "",
    fromAddress: "",
    toAddress: "",
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/drives/all");
      setDrivers(response.data);
    } catch (error) {
      console.error("Error fetching drivers:", error);
      setMessage("Failed to fetch drivers.");
      setMessageType("danger");
    }
  };

  const handleChange = (e) => {
    setMessage("");
    setMessageType("");
    const { name, value } = e.target;

    setNewDriver((prevDriver) => ({
      ...prevDriver,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, mobileNumber, salary, experience, busNumber, fromAddress, toAddress } = newDriver;

    if (!name.trim() || !mobileNumber.trim() || !busNumber.trim() || !fromAddress.trim() || !toAddress.trim()) {
      setMessage("Name, Mobile Number, Bus Number, From Address, and To Address are required fields.");
      setMessageType("danger");
      return false;
    }

    if (salary === "" || isNaN(Number(salary))) {
      setMessage("Salary is required and must be a number.");
      setMessageType("danger");
      return false;
    }

    if (experience === "" || isNaN(Number(experience))) {
      setMessage("Experience is required and must be a number.");
      setMessageType("danger");
      return false;
    }

    return true;
  };

  const handleAddOrUpdateDriver = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      // Convert numeric fields to numbers before sending
      const driverToSend = {
        ...newDriver,
        salary: Number(newDriver.salary),
        experience: Number(newDriver.experience),
      };

      if (editingDriverId) {
        const response = await axios.put(
          `http://localhost:8080/api/drives/${editingDriverId}`,
          driverToSend
        );
        setDrivers(
          drivers.map((driver) =>
            driver.id === editingDriverId ? response.data : driver
          )
        );
        setMessage("Driver updated successfully!");
        setMessageType("success");
      } else {
        const response = await axios.post(
          "http://localhost:8080/api/drives/add",
          driverToSend
        );
        setDrivers([...drivers, response.data]);
        setMessage("Driver added successfully!");
        setMessageType("success");
      }
      clearForm();
      fetchDrivers();
    } catch (error) {
      console.error("Error saving driver:", error);
      setMessage("Error saving driver. Please try again.");
      setMessageType("danger");
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(`Error saving driver: ${error.response.data.message}`);
      }
    }
  };

  const handleDeleteDriver = async (id) => {
    if (window.confirm("Are you sure you want to delete this driver?")) {
      try {
        await axios.delete(`http://localhost:8080/api/drives/${id}`);
        setDrivers(drivers.filter((driver) => driver.id !== id));
        setMessage("Driver deleted successfully!");
        setMessageType("success");
      } catch (error) {
        console.error("Error deleting driver:", error);
        setMessage("Error deleting driver. Please try again.");
        setMessageType("danger");
      }
    }
  };

  const handleEditDriver = (driver) => {
    setNewDriver(driver);
    setEditingDriverId(driver.id);
    setShowDriverForm(true);
    setMessage("");
    setMessageType("");
  };

  const clearForm = () => {
    setNewDriver({
      name: "",
      mobileNumber: "",
      salary: "",
      experience: "",
      busNumber: "",
      fromAddress: "",
      toAddress: "",
    });
    setEditingDriverId(null);
    setShowDriverForm(false);
    setMessage("");
    setMessageType("");
  };

  return (
    <Container className="all-drivers-container my-5">
      <h2 className="text-center mb-4 drivers-page-title">Driver Details</h2>

      <div className="d-flex justify-content-end mb-4 gap-2">
        <Button
          variant="primary"
          onClick={() => setShowDriverForm(!showDriverForm)}
          className="add-driver-toggle-btn"
        >
          {showDriverForm ? "Hide Form" : "Add New Driver"}
        </Button>
        {showDriverForm && (
          <Button variant="secondary" onClick={clearForm} className="clear-form-btn">
            Clear Form
          </Button>
        )}
      </div>

      {message && (
        <Alert variant={messageType} className="mb-4 text-center">
          {message}
        </Alert>
      )}

      {showDriverForm && (
        <Card className="mb-4 p-4 shadow-sm driver-form-card">
          <Card.Title className="mb-4 text-center driver-form-title">
            {editingDriverId ? "Edit Driver Information" : "Add New Driver"}
          </Card.Title>
          <Form onSubmit={handleAddOrUpdateDriver}>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={newDriver.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="mobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobileNumber"
                    value={newDriver.mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="salary">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control
                    type="number"
                    name="salary"
                    value={newDriver.salary}
                    onChange={handleChange}
                    placeholder="Enter salary"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="experience">
                  <Form.Label>Experience (Years)</Form.Label>
                  <Form.Control
                    type="number"
                    name="experience"
                    value={newDriver.experience}
                    onChange={handleChange}
                    placeholder="Enter experience in years"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="busNumber">
                  <Form.Label>Bus Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="busNumber"
                    value={newDriver.busNumber}
                    onChange={handleChange}
                    placeholder="Enter bus number"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="fromAddress">
                  <Form.Label>From Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="fromAddress"
                    value={newDriver.fromAddress}
                    onChange={handleChange}
                    placeholder="Enter starting address"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <Form.Group controlId="toAddress">
                  <Form.Label>To Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="toAddress"
                    value={newDriver.toAddress}
                    onChange={handleChange}
                    placeholder="Enter destination address"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <Button variant="success" type="submit" className="form-submit-btn">
                {editingDriverId ? "Update Driver" : "Add Driver"}
              </Button>
              <Button variant="outline-danger" onClick={clearForm} className="form-cancel-btn">
                Cancel
              </Button>
            </div>
          </Form>
        </Card>
      )}

      <Card className="p-4 shadow-sm driver-table-card">
        <Card.Title className="mb-4 text-center driver-table-title">All Drivers</Card.Title>
        <div className="table-responsive">
          <Table striped bordered hover className="drivers-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Salary</th>
                <th>Experience (Yrs)</th>
                <th>Bus Number</th>
                <th>From Address</th>
                <th>To Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {drivers.length > 0 ? (
                drivers.map((driver) => (
                  <tr key={driver.id}>
                    <td>{driver.id}</td>
                    <td>{driver.name}</td>
                    <td>{driver.mobileNumber}</td>
                    <td>{driver.salary}</td>
                    <td>{driver.experience}</td>
                    <td>{driver.busNumber}</td>
                    <td>{driver.fromAddress}</td>
                    <td>{driver.toAddress}</td>
                    <td>
                      <Button
                        variant="info"
                        size="sm"
                        className="me-2 action-btn edit-btn"
                        onClick={() => handleEditDriver(driver)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        className="action-btn delete-btn"
                        onClick={() => handleDeleteDriver(driver.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center">
                    No driver details available
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

export default AllDriver;