import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Enrollment.css';

const Enrollment = () => {
  const [name, setName] = useState('');
  const [fee, setFee] = useState('');
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [durations, setDurations] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/courses/all')
      .then(res => {
        if (Array.isArray(res.data)) {
          setCourses(res.data);
        } else {
          setCourses([]);
        }
      })
      .catch(() => setCourses([]));
  }, []);

  const handleCourseChange = e => {
    const name = e.target.value;
    setSelectedCourse(name);
    const course = courses.find(c => c.name === name);
    if (course) {
      setDurations([course.duration]);
      setSelectedDuration(course.duration);
      setFee(course.fee?.toString() || '');
    } else {
      setDurations([]);
      setSelectedDuration('');
      setFee('');
    }
  };

  const handleProcessToPay = async () => {
    if (!name || !fee || !selectedCourse || !selectedDuration) {
      return alert('Please fill all fields');
    }

    try {
      const orderRes = await axios.post('http://localhost:8080/api/students/createOrder', {
        amount: Number(fee)
      });
      const order = orderRes.data;

      const options = {
        key: 'rzp_test_HGl3PTqZYOKXbN',
        amount: order.amount,
        currency: order.currency,
        name: 'The THOP University',
        description: `Enrollment for ${selectedCourse}`,
        order_id: order.id,
        handler: async (response) => {
          await axios.post('http://localhost:8080/api/enrollments', {
            name,
            fee,
            course: selectedCourse,
            duration: selectedDuration,
            paymentId: response.razorpay_payment_id
          });

          alert('Payment & Enrollment successful!');
          setName('');
          setFee('');
          setSelectedCourse('');
          setSelectedDuration('');
        },
        prefill: { name, email: '', contact: '' },
        theme: { color: '#3399cc' }
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      alert('Payment initiation failed');
    }
  };

  const handleClear = () => {
    setName('');
    setFee('');
    setSelectedCourse('');
    setSelectedDuration('');
  };

  return (
    <div className="enrollment-container">
      <h2>Enrollment Form</h2>
      <div className="enrollment-form">
        <div>
          <label>Name</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Fee (in Rupees)</label>
          <input
            value={fee}
            onChange={e => setFee(e.target.value)}
            placeholder="Enter fee in Rupees"
          />
        </div>
        <div>
          <label>Course</label>
          <select value={selectedCourse} onChange={handleCourseChange}>
            <option value="">Select Course</option>
            {courses.map((c, i) => (
              <option key={i} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Duration</label>
          <select
            value={selectedDuration}
            onChange={e => setSelectedDuration(e.target.value)}
          >
            <option value="">Select Duration</option>
            {durations.map((d, i) => (
              <option key={i} value={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="enrollment-buttons">
        <button className="pay-btn" onClick={handleProcessToPay}>Process to Pay</button>
        <button className="clear-btn" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default Enrollment;
