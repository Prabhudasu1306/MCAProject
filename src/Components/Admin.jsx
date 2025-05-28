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
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Admin.css'; // Assuming you'll create an Admin.css for better styling

const Admin = () => {
  const [drivers, setDrivers] = useState([]);
  const [nonTeaching, setNonTeaching] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teachingStaff, setTeachingStaff] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const [hostels, setHostels] = useState([]);
  const [placedStudents, setPlacedStudents] = useState([]);
  const [placements, setPlacements] = useState([]);
  const [placementDrives, setPlacementDrives] = useState([]);
  const [feedback, setFeedback] = useState([]);


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

    axios.get('http://localhost:8080/api/enrollments')
      .then(res => setEnrolledStudents(res.data))
      .catch(err => console.error('Error fetching enrollments:', err));

    axios.get('http://localhost:8080/api/hostels/all')
      .then(res => setHostels(res.data))
      .catch(err => console.error('Error fetching hostels:', err));

    axios.get('http://localhost:8080/api/placed-students/all')
      .then(res => setPlacedStudents(res.data))
      .catch(err => console.error('Error fetching placed students:', err));

    axios.get('http://localhost:8080/api/placements/all')
      .then(res => setPlacements(res.data))
      .catch(err => console.error('Error fetching placements:', err));

    axios.get('http://localhost:8080/api/placement-drives/all')
      .then(res => setPlacementDrives(res.data))
      .catch(err => console.error('Error fetching placement drives:', err));

    axios.get('http://localhost:8080/api/feedback/all')
      .then(res => setFeedback(res.data))
      .catch(err => console.error('Error fetching feedback:', err));

  }, []);

  const chartData = [
    { name: 'Drivers', count: drivers.length },
    { name: 'Non-Teaching', count: nonTeaching.length },
    { name: 'Courses', count: courses.length },
    { name: 'Teaching', count: teachingStaff.length },
    { name: 'Enrolled', count: enrolledStudents.length },
    { name: 'Hostels', count: hostels.length },
    { name: 'Placed Students', count: placedStudents.length },
    { name: 'Placements', count: placements.length },
    { name: 'Placement Drives', count: placementDrives.length },
    { name: 'Feedback', count: feedback.length },
  ];

  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#a83279', '#4db6ac', '#f06292', '#7986cb', '#cddc39', '#ffb74d'];

  return (
    <Container className="admin-dashboard-container my-5">
      <h2 className="dashboard-title text-center mb-4">Admin Dashboard Overview</h2>

      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm data-summary-card">
            <Card.Body className="text-center">
              <Card.Title>Total Drivers</Card.Title>
              <Card.Text className="display-4 font-weight-bold">{drivers.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm data-summary-card">
            <Card.Body className="text-center">
              <Card.Title>Non-Teaching Staff</Card.Title>
              <Card.Text className="display-4 font-weight-bold">{nonTeaching.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm data-summary-card">
            <Card.Body className="text-center">
              <Card.Title>Courses Offered</Card.Title>
              <Card.Text className="display-4 font-weight-bold">{courses.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm data-summary-card">
            <Card.Body className="text-center">
              <Card.Title>Teaching Staff</Card.Title>
              <Card.Text className="display-4 font-weight-bold">{teachingStaff.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm data-summary-card">
            <Card.Body className="text-center">
              <Card.Title>Enrolled Students</Card.Title>
              <Card.Text className="display-4 font-weight-bold">{enrolledStudents.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm data-summary-card">
            <Card.Body className="text-center">
              <Card.Title>Hostels Available</Card.Title>
              <Card.Text className="display-4 font-weight-bold">{hostels.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm data-summary-card">
            <Card.Body className="text-center">
              <Card.Title>Placed Students</Card.Title>
              <Card.Text className="display-4 font-weight-bold">{placedStudents.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm data-summary-card">
            <Card.Body className="text-center">
              <Card.Title>Total Placements</Card.Title>
              <Card.Text className="display-4 font-weight-bold">{placements.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="shadow-sm data-summary-card">
            <Card.Body className="text-center">
              <Card.Title>Placement Drives</Card.Title>
              <Card.Text className="display-4 font-weight-bold">{placementDrives.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm data-summary-card">
            <Card.Body className="text-center">
              <Card.Title>Feedback Entries</Card.Title>
              <Card.Text className="display-4 font-weight-bold">{feedback.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Card className="shadow-sm chart-card mt-5">
        <Card.Body>
          <Card.Title className="text-center mb-4">University Data Overview</Card.Title>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-30} textAnchor="end" height={60} />
              <YAxis allowDecimals={false} label={{ value: 'Count', angle: -90, position: 'insideLeft' }} />
              <Tooltip cursor={{ fill: 'transparent' }} />
              <Legend verticalAlign="top" height={36} />
              <Bar dataKey="count" name="Count of Items">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Admin;