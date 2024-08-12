import React from 'react'
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contextApi/AuthContext';

const PrivateRoutes = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
  return (
    user ? <Outlet/> : <Navigate to = '/login'/>
  )
}

export default PrivateRoutes