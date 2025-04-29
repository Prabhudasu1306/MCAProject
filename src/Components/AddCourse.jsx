import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [course, setCourse] = useState({
    name: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({
      ...course,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/courses/add', course);
      alert('Course added successfully!');
      console.log(response.data);
      setCourse({ name: '', duration: '' });
    } catch (error) {
      console.error('Error adding course:', error);
      alert('Failed to add course. Please try again.');
    }
  };

  const handleClear = () => {
    setCourse({ name: '', duration: '' });
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ flex: '1 1 45%' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Course Name:</label>
          <input
            type="text"
            name="name"
            value={course.name}
            onChange={handleChange}
            placeholder="Enter course name"
            required
            style={{ width: '80%', padding: '5px' }}
          />
        </div>
        <div style={{ flex: '1 1 45%' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Duration (in Years):</label>
          <input
            type="number"
            name="duration"
            value={course.duration}
            onChange={handleChange}
            placeholder="Enter duration"
            required
            style={{ width: '80%', padding: '5px' }}
          />
        </div>
        <div style={{ flex: '1 1 100%', marginTop: '20px' }}>
          <button
            type="submit"
            style={{
              marginRight: '10px',
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            style={{
              padding: '10px 20px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
