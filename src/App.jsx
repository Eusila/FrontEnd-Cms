import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  const location = useLocation();

  const excludeNavbarFooter = ['/login', '/signup'].includes(location.pathname);

  return (
    <>
      {!excludeNavbarFooter && <Navbar />}
      <AppRoutes />
      {!excludeNavbarFooter && <Footer />}
    </>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
