import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CoursesOffered.css';

const Undergraduate = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
    return <h3>Loading courses...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className="courses-container">
      <h3>Courses Offered</h3>
      <table className="courses-table">
        <thead>
          <tr>
            <th>SNO</th>
            
            <th>Course Name</th>
            <th>Duration (Months)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.duration}</td>
              <td>
               
                <button
                  className="eligibility-link"
                  onClick={() => navigate('/eligible')}
                >
                  Click Here
                </button>
                
                <button
                  className="register-link"
                  onClick={() => navigate('/login')}
                >
                  Register Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Undergraduate;
