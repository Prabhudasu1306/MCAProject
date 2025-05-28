// OnlineTraining.jsx

import React, { useState, useEffect } from 'react';
import './OnlineTraining.css'; // Assuming you'll create a CSS file for styling

const OnlineTraining = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // In a real application, you'd fetch this data from an API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Simulate an API call
        const response = await new Promise(resolve => setTimeout(() => {
          resolve([
            {
              id: 1,
              title: 'Introduction to ReactJS',
              instructor: 'John Doe',
              duration: '8 hours',
              level: 'Beginner',
              description: 'Learn the fundamentals of ReactJS for building dynamic user interfaces.',
              imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=ReactJS' // Placeholder image
            },
            {
              id: 2,
              title: 'Advanced JavaScript Concepts',
              instructor: 'Jane Smith',
              duration: '12 hours',
              level: 'Intermediate',
              description: 'Deep dive into advanced JavaScript features like closures, prototypes, and async/await.',
              imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=JavaScript'
            },
            {
              id: 3,
              title: 'Python for Data Science',
              instructor: 'Robert Johnson',
              duration: '15 hours',
              level: 'Beginner',
              description: 'An introduction to Python programming for data analysis and machine learning.',
              imageUrl: 'https://via.placeholder.com/150/008000/FFFFFF?text=Python'
            },
            {
              id: 4,
              title: 'Full-Stack Web Development with MERN',
              instructor: 'Emily White',
              duration: '40 hours',
              level: 'Intermediate',
              description: 'Build complete web applications using MongoDB, Express, React, and Node.js.',
              imageUrl: 'https://via.placeholder.com/150/FFFF00/000000?text=MERN'
            },
          ]);
        }, 1000)); // Simulate 1 second loading time

        setCourses(response);
      } catch (err) {
        setError('Failed to fetch courses. Please try again later.');
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="online-training-container">Loading online training courses...</div>;
  }

  if (error) {
    return <div className="online-training-container error">{error}</div>;
  }

  return (
    <div className="online-training-container">
      <h1 className="online-training-title">Online Training Programs</h1>

      <div className="course-list">
        {courses.length > 0 ? (
          courses.map(course => (
            <div key={course.id} className="course-card">
              <img src={course.imageUrl} alt={course.title} className="course-image" />
              <div className="course-details">
                <h2 className="course-title">{course.title}</h2>
                <p className="course-instructor">Instructor: {course.instructor}</p>
                <p className="course-duration">Duration: {course.duration}</p>
                <p className="course-level">Level: {course.level}</p>
                <p className="course-description">{course.description}</p>
                <button className="enroll-button" onClick={() => alert(`Enrolling in ${course.title}`)}>Enroll Now</button>
              </div>
            </div>
          ))
        ) : (
          <p>No online training courses available at the moment. Please check back later!</p>
        )}
      </div>
    </div>
  );
};

export default OnlineTraining;