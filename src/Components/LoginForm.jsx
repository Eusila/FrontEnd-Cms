import React, { useState } from 'react';

const LoginForm = ({ login, toggleForm }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

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
    login({ email, password, rememberMe });
  };

  return (
    <form onSubmit={handleLogin}>
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
          required
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

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Login
      </button>

      {/* Toggle Form */}
      <div className="mt-4 text-center">
        <p>
          Don't have an account?{' '}
          <button
            type="button"
            onClick={toggleForm}
            className="text-blue-600 hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
