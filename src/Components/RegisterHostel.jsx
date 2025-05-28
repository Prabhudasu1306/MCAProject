import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RegisterHostel.css'; // Import the custom CSS file

const RegisterHostel = () => {
  const [hostel, setHostel] = useState({
    firstName: '',
    lastName: '',
    branch: '',
    roomNo: '',
    floor: '',
    bedNo: '',
    address: ''
  });

  const [hostelData, setHostelData] = useState([]);
  const [floors, setFloors] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [filteredBeds, setFilteredBeds] = useState([]);
  const [message, setMessage] = useState(''); // State for success/error messages
  const [isSuccess, setIsSuccess] = useState(false); // State to determine message styling

  useEffect(() => {
    fetchHostelData();
  }, []);

  const fetchHostelData = async () => {
    try {
      // Assuming this endpoint returns a list of available rooms/beds structure
      // e.g., [{floor: "1", roomNo: "101", bedNo: "A"}, ...]
      const response = await axios.get('http://localhost:8080/api/universityHostels/all');
      setHostelData(response.data);

      // Extract unique floors
      const uniqueFloors = [...new Set(response.data.map(item => item.floor))];
      setFloors(uniqueFloors.sort()); // Sort floors for consistent order
    } catch (error) {
      console.error('Error fetching hostel data:', error);
      setMessage('Failed to load hostel availability data.');
      setIsSuccess(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setHostel(prev => ({
      ...prev,
      [name]: value
    }));

    // When floor is selected, filter rooms
    if (name === 'floor') {
      const rooms = hostelData
        .filter(item => item.floor === value)
        .map(item => item.roomNo);
      setFilteredRooms([...new Set(rooms)].sort()); // Filter and sort rooms

      // Reset room and bed on floor change
      setHostel(prev => ({ ...prev, roomNo: '', bedNo: '' }));
      setFilteredBeds([]);
    }

    // When room is selected, filter beds
    if (name === 'roomNo') {
      const beds = hostelData
        .filter(item => item.floor === hostel.floor && item.roomNo === value)
        .map(item => item.bedNo);
      setFilteredBeds([...new Set(beds)].sort()); // Filter and sort beds

      // Reset bed on room change
      setHostel(prev => ({ ...prev, bedNo: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    setIsSuccess(false);

    try {
      await axios.post('http://localhost:8080/api/hostels/add', hostel);
      setMessage('Hostel entry registered successfully!');
      setIsSuccess(true);
      resetForm(); // Reset form on successful submission
    } catch (error) {
      console.error('Error registering hostel entry:', error);
      setMessage('Failed to register hostel entry. Please try again.');
      setIsSuccess(false);
    }
  };

  const resetForm = () => {
    setHostel({
      firstName: '',
      lastName: '',
      branch: '',
      roomNo: '',
      floor: '',
      bedNo: '',
      address: ''
    });
    setFilteredRooms([]);
    setFilteredBeds([]);
    // Keep message if it was a success, clear if it was an error
    if (!isSuccess) setMessage('');
  };

  return (
    <div className="register-hostel-container">
      <div className="register-hostel-card">
        <h2 className="register-hostel-heading">Register Hostel Entry</h2>

        {message && (
          <p className={`hostel-form-message ${isSuccess ? 'success' : 'error'}`}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="hostel-registration-form">
          <div className="form-grid">
            {/* First Name */}
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={hostel.firstName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Last Name */}
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={hostel.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Branch */}
            <div className="form-group">
              <label htmlFor="branch">Branch</label>
              <input
                type="text"
                id="branch"
                name="branch"
                value={hostel.branch}
                onChange={handleChange}
                required
              />
            </div>

            {/* Floor Dropdown */}
            <div className="form-group">
              <label htmlFor="floor">Floor</label>
              <select
                id="floor"
                name="floor"
                value={hostel.floor}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Floor --</option>
                {floors.map((floor, idx) => (
                  <option key={idx} value={floor}>{floor}</option>
                ))}
              </select>
            </div>

            {/* Room No Dropdown */}
            <div className="form-group">
              <label htmlFor="roomNo">Room No</label>
              <select
                id="roomNo"
                name="roomNo"
                value={hostel.roomNo}
                onChange={handleChange}
                required
                disabled={!hostel.floor} // Disable if no floor is selected
              >
                <option value="">-- Select Room --</option>
                {filteredRooms.map((room, idx) => (
                  <option key={idx} value={room}>{room}</option>
                ))}
              </select>
            </div>

            {/* Bed No Dropdown */}
            <div className="form-group">
              <label htmlFor="bedNo">Bed No</label>
              <select
                id="bedNo"
                name="bedNo"
                value={hostel.bedNo}
                onChange={handleChange}
                required
                disabled={!hostel.roomNo} // Disable if no room is selected
              >
                <option value="">-- Select Bed --</option>
                {filteredBeds.map((bed, idx) => (
                  <option key={idx} value={bed}>{bed}</option>
                ))}
              </select>
            </div>

            {/* Address */}
            <div className="form-group full-width"> {/* Use a full-width class for address */}
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={hostel.address}
                onChange={handleChange}
                rows="3"
                required
              ></textarea>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">Register</button>
            <button type="button" className="cancel-button" onClick={resetForm}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterHostel;