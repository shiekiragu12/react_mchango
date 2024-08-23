import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom'
import SplashScreen from '../screens/SplashScreen';
import Login from '../auth/Login';
import Register from '../auth/Register';


function WebRoutes() {
  const isAuthenticated = localStorage.getItem('authTokens');

  useEffect(() => {
    if (!isAuthenticated && window.location.pathname !== '/login' && window.location.pathname !== '/register' && window.location.pathname !== '/register/:id' && window.location.pathname !== '/forgot-password' && window.location.pathname !== '/') {
      window.location.href = '/#/login'; 
    }
  });

  return (
    <HashRouter>
      <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* <Route path="/" element={isAuthenticated ? <NewHome /> : <LandingPage />} /> */}

      </Routes>
    </HashRouter>
  );
}

export default WebRoutes;
