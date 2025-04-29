import React, { useState, useEffect } from "react";
import axios from "axios";
import './AllDriver.css';

const AllDriver = () => {
  const [drivers, setDrivers] = useState([]);
  const [isAddDriver, setIsAddDriver] = useState(false);
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
    const fetchDrivers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/drives/all");
        setDrivers(response.data);
      } catch (error) {
        console.error("There was an error fetching the drivers:", error);
      }
    };
    fetchDrivers();
  }, []);

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
      setIsAddDriver(false);
      setNewDriver({
        name: "",
        mobileNumber: "",
        salary: "",
        experience: "",
        busNumber: "",
        fromAddress: "",
        toAddress: "",
      });
    } catch (error) {
      console.error("Error adding driver:", error);
    }
  };

  const handleDeleteDriver = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/drives/delete/${id}`);
      setDrivers(drivers.filter((driver) => driver.id !== id));
    } catch (error) {
      console.error("Error deleting driver:", error);
    }
  };

  const handleUpdateDriver = async (id) => {
    try {
      const updatedDriver = { ...newDriver };
      await axios.put(`http://localhost:8080/api/drives/update/${id}`, updatedDriver);
      setDrivers(
        drivers.map((driver) => (driver.id === id ? { ...driver, ...updatedDriver } : driver))
      );
    } catch (error) {
      console.error("Error updating driver:", error);
    }
  };

  return (
    <div className="all-drivers-container">
      <h2 className="all-drivers-heading">Driver Details</h2>

      <div className="drivers-buttons">
        <button className="drivers-button add-button" onClick={() => setIsAddDriver(true)}>
          Add Driver
        </button>
        <button className="drivers-button clear-button" onClick={() => setIsAddDriver(false)}>
          Clear
        </button>
      </div>

      {isAddDriver && (
        <div className="add-driver-form">
          <h3>Add Driver</h3>
          <form onSubmit={handleAddDriver}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newDriver.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={newDriver.mobileNumber}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="salary"
                placeholder="Salary"
                value={newDriver.salary}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="number"
                name="experience"
                placeholder="Experience (Years)"
                value={newDriver.experience}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="busNumber"
                placeholder="Bus Number"
                value={newDriver.busNumber}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="fromAddress"
                placeholder="From Address"
                value={newDriver.fromAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="toAddress"
                placeholder="To Address"
                value={newDriver.toAddress}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setNewDriver({})}>
              Clear
            </button>
          </form>
        </div>
      )}

      <table className="drivers-table">
        <thead>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Mobile Number</th>
            <th className="table-header">Salary</th>
            <th className="table-header">Experience (Years)</th>
            <th className="table-header">Bus Number</th>
            <th className="table-header">From Address</th>
            <th className="table-header">To Address</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {drivers.length > 0 ? (
            drivers.map((driver) => (
              <tr key={driver.id}>
                <td className="table-cell">{driver.name}</td>
                <td className="table-cell">{driver.mobileNumber}</td>
                <td className="table-cell">{driver.salary}</td>
                <td className="table-cell">{driver.experience}</td>
                <td className="table-cell">{driver.busNumber}</td>
                <td className="table-cell">{driver.fromAddress}</td>
                <td className="table-cell">{driver.toAddress}</td>
                <td className="table-cell">
                  <button
                    className="update-button"
                    onClick={() => handleUpdateDriver(driver.id)}
                  >
                    Update
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteDriver(driver.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="table-cell" colSpan="8">
                No driver details available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllDriver;
