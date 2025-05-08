import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  if (!user) return <h2>Please login first.</h2>;

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/users/delete/${user.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        localStorage.removeItem('user'); // Remove user from localStorage
        navigate('/login'); // Redirect to login page after successful deletion
        alert('Account deleted successfully!');
      } else {
        alert('Error deleting account');
      }
    } catch (error) {
      console.error('Error deleting account:', error);
      alert('Error deleting account');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Welcome, {user.firstName}!</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Password:</strong> {user.password}</p>

      <Link to="/edit-profile">
        <button>Edit Profile</button>
      </Link>
      <button onClick={handleDelete} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>
        Delete Account
      </button>
    </div>
  );
};

export default Profile;
