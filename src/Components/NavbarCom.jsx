
import React, { useState } from 'react';
import { Navbar, Nav, Container, Dropdown, NavDropdown } from 'react-bootstrap';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import PlacedStudentsList from './PlacedStudentsList'
import PostGraduate from './PostGraduate';
import AddCourse from './AddCourse';
import About from './About';
import SignUp from './SignUp';
import Login from './Login';
import Profile from './Profile';
import Staff from './Staff';
import AllStaff from './AllStaff';
import Driver from './Driver';
import AllDriver from './AllDriver';
import CoursesOffered from './CoursesOffered';
import EditStaff from './EditStaff';
import NonTeaching from './NonTeaching';
import CoreValues from './CoreValues';
import Overview from './Overview';
import FounderChancellor from './FounderChancellor';
import ResultFetcher from './ResultFetcher'
import AddResult from './AddResult'
import Chancellor from './Chancellor';
import Vision from './Vision';
import Home from './Home'
import Culturals from './Culturals';
import Library from './Library';
import Feedback from './Feedback';
import Undergraduate from './Undergraduate';
import PlacedStudents from './PlacedStudents';
import Training from './Training';
import Internships from './Internships';
import Certifications from './Certifications';
import ContactUs from './ContactUs';
import Eligible from './Eligible';
import EditProfile from './EditProfile';
import Recruitments from './Recruitments';
import Relations from './Relations';
import Admin from './Admin';
import Enrollment from './Enrollment';
import AddPlacedStudent from './AddPlacedStudent'
import './NavbarCom.css';
import Sports from './Sports';
import Placement from './Placement';
import AllPlacementInfo from './AllPlacementInfo';
import PlacementApplication from './PlacementApplication';
import AllEnrollemnt from './AllEnrollemnt';
import UpdateEnrollment from './UpdateEnrollment';
import Hostels from './Hostels';
import RegisterHostel from './RegisterHostel';
import AllHostelsDetails from './AllHostelsDetails';


const NavbarCom = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);
  const [userRole, setUserRole] = useState(null);

  const handleLoginSuccess = (firstName, email, role) => {
    setUserName(firstName);
    setUserRole(role);
    navigate('/profile');
  };

  const handleLogout = () => {
    setUserName(null);
    setUserRole(null);
    navigate('/login');
  };

  return (
    <div>
      <Navbar className="custom-navbar" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {userRole === 'ADMIN' && (
                
                <NavDropdown title="Admin Panel" id="admin-panel-dropdown">
                  <NavDropdown.Item as={Link} to="/admin">Dashboard</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/allstaff">All Staff</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/alldriver">All Drivers</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/undergraduate">Course Offered</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/nonteaching">NonTeaching</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/placemntDrive">PlacementDrive</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/allenrollements">AllEnrollments</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/AllHostelsDetails">AllHostelsDetails</NavDropdown.Item>
                     <NavDropdown.Item as={Link} to="/Addresult">Addresult</NavDropdown.Item>

                  
                </NavDropdown>
              )}
              <Nav.Link as={Link} to="/home" className="home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="about">About</Nav.Link>

              <NavDropdown title="Institution Info" id="institution-info-dropdown">
                <NavDropdown.Item as={Link} to="/core-values">Core Values</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/overview">Overview</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/founder-chancellor">Founder Chancellor</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/chancellor">Chancellor</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/vision">Vision</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Academics" id="academics-dropdown"> 
                 <NavDropdown.Item as={Link} to="/courses-offered">Courses Offered</NavDropdown.Item>
                 <NavDropdown.Item as={Link} to="/schools">Colleges</NavDropdown.Item> 
                <NavDropdown.Item as={Link} to="/library">Library</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/feedback">Feedback</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Admission" id="admission-dropdown">
                <NavDropdown.Item as={Link} to="/undergraduate">Course Offered</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/feedback">Feedback</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Placement" id="placement-dropdown">
                <NavDropdown.Item as={Link} to="/about-placements">About Placements</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/training">Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/internships">Internships</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/certifications">Certifications</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contactus">Contact Us</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/recruitments">Recruitments</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/relations">Industry Relations</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Campus Life" id="Campus Life-dropdown">
                <NavDropdown.Item as={Link} to="/overview">Overview</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/culturals">Culturals</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/hostel-facility">Hostel-Facility</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/sports">Sports</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contactus">Transportation</NavDropdown.Item>
              </NavDropdown>

<NavDropdown title="Enrollment " id="Campus Life-dropdown">
                <NavDropdown.Item as={Link} to="/enrollment">Enrollment</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/allPlacementInfo">PlacementsAll</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Registerhostel">Registerhostel</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/resultfetching">resultfatching</NavDropdown.Item>

              </NavDropdown>

          
              

              <Nav.Link as={Link} to="/addplacedstudent" className="addplacedstudent-link">addplacedstudent</Nav.Link>
              <Nav.Link as={Link} to="/PlacedStudentsList" className="PlacedStudentsList-link">PlacedStudentsList</Nav.Link>
        

            </Nav>
            <Nav className="ms-auto">
              {!userName ? (
                <>
                  <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </>
              ) : (
                <Dropdown align="end">
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className="profile-icon">
                    {userName}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/edit-profile">Edit Profile</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/enrollment" element={<Enrollment />} />

          {userRole === 'ADMIN' && (
            <>
              <Route path="/staff" element={<Staff />} />
              <Route path="/allstaff" element={<AllStaff />} />
              <Route path="/driver" element={<Driver />} />
              <Route path="/alldriver" element={<AllDriver />} />
              <Route path="/coursesoffered" element={<CoursesOffered />} />
              <Route path="/addcourse" element={<AddCourse />} />
              <Route path="/editstaff/:id" element={<EditStaff />} />
              <Route path="/placemntDrive" element={<Placement/>}/>
               <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/Addresult" element={<AddResult/>}/>
            <Route path="/resultfetching" element={<ResultFetcher />} />
               <Route path="/addplacedstudent" element={<AddPlacedStudent />} />
                              <Route path="/PlacedStudentsList" element={<PlacedStudentsList />} />

              <Route path="/allenrollements" element={<AllEnrollemnt/>}/>
            


            </>
          )}

          <Route path="/about-placements" element={<About />} />
          <Route path="/resultfetching" element={<ResultFetcher />} />
          <Route path="/nonteaching" element={<NonTeaching />} />
          <Route path="/core-values" element={<CoreValues />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/founder-chancellor" element={<FounderChancellor />} />
          <Route path="/chancellor" element={<Chancellor />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="sports" element={<Sports/>}/>
          <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
               <Route path="/addplacedstudent" element={<AddPlacedStudent />} />
PlacedStudentsList
               <Route path="/PlacedStudentsList" element={<PlacedStudentsList />} />

          <Route path="/courses-offered" element={<CoursesOffered />} />
          <Route path="/culturals" element={< Culturals/>} />
          <Route path="hostel-facility" element={<Hostels/>} />
          <Route path="/library" element={<Library />} />
          <Route path="/update-enrollment/:enrollmentId" element={<UpdateEnrollment />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/undergraduate" element={<Undergraduate />} />
          <Route path="/postgraduate" element={<PostGraduate />} />
          <Route path="/placedstudents" element={<PlacedStudents />} />
          <Route path="/training" element={<Training />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/eligible" element={<Eligible />} />
          <Route path="/recruitments" element={<Recruitments />} />
          <Route path="/relations" element={<Relations />} />
          <Route path="/edit-staff/:id" element={<EditStaff />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/Registerhostel" element={<RegisterHostel />} />
          <Route path="/allPlacementInfo" element={<AllPlacementInfo/>}/>
          <Route path="/apply/:companyName" element={<PlacementApplication />} />
          <Route path="/AllHostelsDetails" element={<AllHostelsDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default NavbarCom;
