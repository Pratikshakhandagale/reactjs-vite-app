// PrivateRoute.js
import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Home from '../../pages/Home';
import Login from '../../pages/Login';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogged = localStorage.getItem('isLogged');
  if (isLogged) {
    return <Home /> 
  } 


};

export default PrivateRoute;
