// import React, { useContext } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { AuthContext } from '../AuthContext'; // Adjust path if AuthContext.js is elsewhere
// import AccessDenied from './AccessDenied'; // Create this component in the next step

// const ProtectedRoute = ({ allowedRoles }) => {
//   const { user } = useContext(AuthContext); // Get user info from context

//   // 1. If no user is logged in, redirect to login page
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   // 2. If user is logged in but their role is not in the allowedRoles array, show access denied
//   if (allowedRoles && !allowedRoles.includes(user.role)) {
//     return <AccessDenied />; // Show a custom "Access Denied" component
//   }

//   // 3. If user is logged in and has an allowed role, render the child routes
//   return <Outlet />;
// };

// export default ProtectedRoute;