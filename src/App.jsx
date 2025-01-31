import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { AuthProvider } from './context/AuthContext';
import './App.css';

const AppContent = () => {
  const location = useLocation();

  //  routes where Navbar should not appear
  const excludeNavbar = ['/register', '/login'].includes(location.pathname);

  return (
    <>
      {!excludeNavbar && <Navbar />}
      <AppRoutes />
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  </Router>
);

export default App;



