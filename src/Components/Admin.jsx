import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';

const Admin = () => {
  const [drivers, setDrivers] = useState([]);
  const [nonTeaching, setNonTeaching] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teachingStaff, setTeachingStaff] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/drives/all')
      .then(res => setDrivers(res.data))
      .catch(err => console.error('Error fetching drivers:', err));

    axios.get('http://localhost:8080/api/NonTeaching/all')
      .then(res => setNonTeaching(res.data))
      .catch(err => console.error('Error fetching non-teaching staff:', err));

    axios.get('http://localhost:8080/courses/all')
      .then(res => setCourses(res.data))
      .catch(err => console.error('Error fetching courses:', err));

    axios.get('http://localhost:8080/api/teaching-staff/all')
      .then(res => setTeachingStaff(res.data))
      .catch(err => console.error('Error fetching teaching staff:', err));

    // axios.get('http://localhost:8080/api/students/all')
    //   .then(res => setStudents(res.data))
    //   .catch(err => console.error('Error fetching students:', err));

    axios.get('http://localhost:8080/api/enrollments')
      .then(res => setEnrolledStudents(res.data))
      .catch(err => console.error('Error fetching enrollments:', err));
  }, []);

  const chartData = [
    { name: 'Drivers', count: drivers.length },
    { name: 'Non-Teaching', count: nonTeaching.length },
    { name: 'Courses', count: courses.length },
    { name: 'Teaching', count: teachingStaff.length },
    { name: 'Enrolled', count: enrolledStudents.length },
  ];

  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#a83279', '#4db6ac'];

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>
      <div style={{ width: '100%', height: 400, marginTop: 20 }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="count">
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Admin;
