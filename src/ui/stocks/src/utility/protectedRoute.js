import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../pages/login';

const ProtectedRoute = () => {
    const user = useSelector(state => state.authInformation.user);
  return (
    user ? <Outlet/> : <Navigate to='/login'/>
    )
  }
export default ProtectedRoute;
