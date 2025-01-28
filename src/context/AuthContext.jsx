import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch token and user data from localStorage when the app initializes
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = async ({ email, password, rememberMe }) => {
    try {
      // Mock API request to authenticate user
      const response = await mockApiLogin(email, password);

      if (response.success) {
        const { token, user } = response.data;

        if (rememberMe) {
          // Persist token and user info in localStorage for "Remember Me" functionality
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
        }

        setIsLoggedIn(true);
        setUser(user);
      } else {
        console.error('Login failed:', response.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const signup = async ({ email, username, contact, address, password, role }) => {
    try {
      // Mock API request to create a new user
      const response = await mockApiSignup({ email, username, contact, address, password, role });

      if (response.success) {
        const { token, user } = response.data;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        setIsLoggedIn(true);
        setUser(user);
      } else {
        console.error('Signup failed:', response.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
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

// Mock API login function
const mockApiLogin = async (email, password) => {
  // Simulating an API response
  if (email === 'user@example.com' && password === 'password123') {
    return {
      success: true,
      data: {
        token: 'mockToken123',
        user: { name: 'John Doe', role: 'buyer', email },
      },
    };
  }
  return { success: false, message: 'Invalid email or password' };
};

// Mock API signup function
const mockApiSignup = async (userData) => {
  // Simulating an API response
  return {
    success: true,
    data: {
      token: 'mockSignupToken123',
      user: {
        name: userData.username,
        role: userData.role,
        email: userData.email,
      },
    },
  };
};
