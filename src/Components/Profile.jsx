import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css'; // Import the new CSS file

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  // If user data is not found in localStorage, redirect to login or show a message
  if (!user) {
    return (
      <div className="profile-container">
        <p className="no-user-message">Please log in to view your profile.</p>
        <Link to="/login" className="login-link-button">Go to Login</Link>
      </div>
    );
  }

  const handleDelete = async () => {
    // Confirm with the user before deleting the account
    if (!window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      return; // Stop if the user cancels
    }

    try {
      // Using axios for consistency, though fetch is also valid
      // Ensure your backend endpoint is correct for DELETE
      const response = await fetch(`http://localhost:8080/users/delete/${user.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        localStorage.removeItem('user'); // Remove user from localStorage
        navigate('/login'); // Redirect to login page after successful deletion
        alert('Your account has been successfully deleted.');
      } else {
        // Attempt to read error message from backend if available
        const errorText = await response.text();
        alert(`Error deleting account: ${errorText || response.statusText}`);
        console.error('Error deleting account:', response.status, errorText);
      }
    } catch (error) {
      console.error('Network or other error during account deletion:', error);
      alert('A network error occurred. Please try again.');
    }
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Welcome, {user.firstName}!</h2>
      <div className="profile-info">
        <p><strong>Email:</strong> {user.email}</p>
        {/*
          Consider if you really want to display the password.
          For security, it's generally best not to expose it directly.
          If needed for debugging, remove it for production.
        */}
        <p><strong>Password:</strong> {user.password}</p>
        <p><strong>Role:</strong> {user.role}</p> {/* Display user role if available */}
      </div>

      <div className="profile-actions">
        <Link to="/edit-profile" className="edit-profile-button">
          Edit Profile
        </Link>
        <button onClick={handleDelete} className="delete-account-button">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Profile;