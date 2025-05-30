import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CoursesOffered.css'; 

const CoursesOffered = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/courses/all');
        setCourses(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Failed to fetch courses.');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <h3 className="loading-message">Loading courses...</h3>;
  }

  if (error) {
    return <h3 className="error-message">{error}</h3>;
  }

  return (
    <div className="courses-container">
      <h3>Courses Offered</h3>
      <table className="courses-table">
        <thead>
          <tr>
            <th>SNO</th>
            <th>Course Name</th>
            <th>Duration (YEARS)</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={course.id}>
              {/* Using index + 1 for SNO to ensure sequential numbering */}
              <td data-label="SNO">{index + 1}</td> 
              <td data-label="Course Name">{course.name}</td>
              <td data-label="Duration (Months)">{course.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesOffered;