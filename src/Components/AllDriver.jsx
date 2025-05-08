import React, { useState, useEffect } from "react";
import axios from "axios";
import './AllDriver.css';

const AllDriver = () => {
  const [drivers, setDrivers] = useState([]);
  const [isAddDriver, setIsAddDriver] = useState(false);
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

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/drives/all");
      setDrivers(response.data);
    } catch (error) {
      console.error("There was an error fetching the drivers:", error);
    }
  };

  const handleChange = (e) => {
    setNewDriver({
      ...newDriver,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddDriver = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/drives/add", newDriver);
      setDrivers([...drivers, response.data]);
      clearForm();
    } catch (error) {
      console.error("Error adding driver:", error);
    }
  };

  const handleDeleteDriver = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/drives/${id}`);
      setDrivers(drivers.filter((driver) => driver.id !== id));
    } catch (error) {
      console.error("Error deleting driver:", error);
    }
  };

  const handleEditDriver = (driver) => {
    setNewDriver(driver);
    setEditingDriverId(driver.id);
    setIsAddDriver(true);
  };

  const handleUpdateDriver = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/api/drives/${editingDriverId}`,
        newDriver
      );
      setDrivers(
        drivers.map((driver) =>
          driver.id === editingDriverId ? response.data : driver
        )
      );
      clearForm();
    } catch (error) {
      console.error("Error updating driver:", error);
    }
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
    setIsAddDriver(false);
    setEditingDriverId(null);
  };

  return (
    <div className="all-drivers-container">
      <h2 className="all-drivers-heading">Driver Details</h2>

      <div className="drivers-buttons">
        <button className="drivers-button add-button" onClick={() => setIsAddDriver(true)}>
          {editingDriverId ? "Edit Driver" : "Add Driver"}
        </button>
        <button className="drivers-button clear-button" onClick={clearForm}>
          Clear
        </button>
      </div>

      {isAddDriver && (
        <div className="add-driver-form">
          <h3>{editingDriverId ? "Edit Driver" : "Add Driver"}</h3>
          <form onSubmit={editingDriverId ? handleUpdateDriver : handleAddDriver}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Name" value={newDriver.name} onChange={handleChange} required />
              <input type="text" name="mobileNumber" placeholder="Mobile Number" value={newDriver.mobileNumber} onChange={handleChange} required />
              <input type="number" name="salary" placeholder="Salary" value={newDriver.salary} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="number" name="experience" placeholder="Experience (Years)" value={newDriver.experience} onChange={handleChange} required />
              <input type="text" name="busNumber" placeholder="Bus Number" value={newDriver.busNumber} onChange={handleChange} required />
              <input type="text" name="fromAddress" placeholder="From Address" value={newDriver.fromAddress} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="text" name="toAddress" placeholder="To Address" value={newDriver.toAddress} onChange={handleChange} required />
            </div>
            <button type="submit">{editingDriverId ? "Update" : "Submit"}</button>
            <button type="button" onClick={clearForm}>
              Clear
            </button>
          </form>
        </div>
      )}

      <table className="drivers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Salary</th>
            <th>Experience (Years)</th>
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
                <td>{driver.name}</td>
                <td>{driver.mobileNumber}</td>
                <td>{driver.salary}</td>
                <td>{driver.experience}</td>
                <td>{driver.busNumber}</td>
                <td>{driver.fromAddress}</td>
                <td>{driver.toAddress}</td>
                <td>
                  <button className="update-button" onClick={() => handleEditDriver(driver)}>
                    Edit
                  </button>
                  <button className="delete-button" onClick={() => handleDeleteDriver(driver.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No driver details available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllDriver;
