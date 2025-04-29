import React from 'react';
import Hostel1 from './Hostel1.jpg';
import Hostel2 from './Hostel2.jpg';
import Hostel3 from './Hostel3.jpg';
import './Hostel.css';

const Hostel = () => {
  return (
    <div className="hostel-container">
      <h1 className="hostel-title">HOSTEL – A HOME AWAY FROM HOME</h1>
      <p className="hostel-description">
        The Institution houses 5 hostels for Boys and 5 hostels for Girls in a gargantuan area of 16,75,000 square feet.
        “SAFETY” is the prime objective on campus, and the institution is known as “SAFE HEAVEN” especially for girl students.
        All academic and daily needs are within reach, making hostel life pleasant and comfortable. The hostel campus is known as “HOME AWAY FROM HOME”.
      </p>

      <h2 className="section-title">Hostel Gents</h2>
      <div className="hostel-images">
        <div className="hostel-item">
          <h3 className="hostel-subtitle">Hostel 1</h3>
          <img className="hostel-img" src={Hostel1} alt="Hostel 1" />
        </div>
        <div className="hostel-item">
          <h3 className="hostel-subtitle">Hostel 2</h3>
          <img className="hostel-img" src={Hostel2} alt="Hostel 2" />
        </div>
        <div className="hostel-item">
          <h3 className="hostel-subtitle">Hostel 3</h3>
          <img className="hostel-img" src={Hostel3} alt="Hostel 3" />
        </div>
      </div>

      <h2 className="section-title">Hostel Ladies</h2>

      <h3 className="facilities-title">Facilities</h3>
      <ul className="facilities-list">
        <li className="facility-item">Hostels are within reachable distance from classrooms and sports facilities, supporting ease of mobility.</li>
        <li className="facility-item">All hostels have well-ventilated living rooms with attached bathrooms.</li>
        <li className="facility-item">Air-conditioned rooms are available in the hostels.</li>
        <li className="facility-item">Students can avail of laundry services twice a week for washing and ironing their clothes.</li>
        <li className="facility-item">Every Sunday, Mass will take place at 9:30 A.M for Christian students in the Central Auditorium.</li>
        <li className="facility-item">Students going for outings must return to the hostel by 6:30 P.M.</li>
        <li className="facility-item">A 24-hour medical facility is available in the hostel.</li>
        <li className="facility-item">Students are advised to take care of their personal belongings, as management is not responsible for the loss of any valuable items.</li>
      </ul>

      <h3 className="health-title">Health</h3>
      <ul className="health-list">
        <li className="health-item">Dedicated fitness centers are available for boys and girls, located near the hostels.</li>
        <li className="health-item">24/7 emergency medical aid is available for hostel inmates. During institution working hours, students should approach the "STUDENT HELP DESK" for health emergencies.</li>
        <li className="health-item">In case of further diagnosis, students will be treated at "Sathyabama General Hospital".</li>
        <li className="health-item">Medical insurance is provided for all students.</li>
      </ul>

      <h3 className="rules-title">Hostel Rules and Regulations</h3>
      <p className="rules-description">Details of hostel rules and regulations will be provided here.</p>
    </div>
  );
};

export default Hostel;
