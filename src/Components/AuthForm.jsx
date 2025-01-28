import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Assuming you have an AuthContext

const AuthForm = () => {
  const { login, signup } = useAuth(); // Assuming you have login and signup functions in your context
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    contact: '',
    address: '',
    password: '',
    role: 'buyer',
    rememberMe: false,
  });

  const toggleForm = () => setIsLogin(!isLogin);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password, rememberMe } = formData;
    // Call the login function from context
    login({ email, password, rememberMe });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const { email, username, contact, address, password, role } = formData;
    // Call the signup function from context
    signup({ email, username, contact, address, password, role });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-blue-400 rounded shadow-md mt-6 mb-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        {isLogin ? 'Login' : 'Create an Account'}
      </h1>
      <form onSubmit={isLogin ? handleLogin : handleSignup}>
        {!isLogin && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded mt-1"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact
              </label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded mt-1"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>
        )}

        {!isLogin && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded mt-1"
              placeholder="Address e.g Nakuru"
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded mt-1"
            placeholder="Email"
            required={!isLogin}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded mt-1"
            placeholder="Enter your password"
            required
          />
        </div>

        {!isLogin && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Select Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded mt-1"
              required
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
        )}

        {isLogin && (
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2"
              />
              Remember Me
            </label>
            <button
              type="button"
              className="text-blue-600 hover:underline text-sm"
              onClick={() => console.log('Forgot Password Clicked')}
            >
              Forgot Password?
            </button>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      {/* Toggle Form */}
      <div className="mt-4 text-center">
        <p>
          {isLogin
            ? "Don't have an account?"
            : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={toggleForm}
            className="text-blue-600 hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;




