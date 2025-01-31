import React, { createContext, useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import { apiPost } from '../Services/apiService';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const history = useHistory(); // Initialize useHistory

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (token && userData) {
      const decodedToken = jwtDecode(token);
      const isExpired = decodedToken.exp * 1000 < Date.now();

      if (!isExpired) {
        setIsLoggedIn(true);
        setUser(JSON.parse(userData));
      } else {
        logout();
      }
    }
  }, []);

  const login = async ({ email, password, rememberMe }) => {
    try {
      const response = await apiPost('/api/v1/users/login', { email, password });
      const { token, user } = response;

      if (rememberMe) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      }

      setIsLoggedIn(true);
      setUser(user);

      
      if (user.role === 'admin') {
        history.push('/admin-dashboard'); 
      } else {
        history.push('/user-dashboard'); 
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const signup = async ({ email, username, contact, address, password, role }) => {
    try {
      const response = await apiPost('/api/v1/users/register', {
        email,
        username,
        contact,
        address,
        password,
        role,
      });
      const { token, user } = response;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      setIsLoggedIn(true);
      setUser(user);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);



