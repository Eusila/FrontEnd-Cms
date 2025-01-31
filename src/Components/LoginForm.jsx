import React, { useState } from 'react';

const LoginForm = ({ login, toggleForm }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState(''); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); 
    setLoading(true); 

    const { email, password, rememberMe } = formData;

    try {
      await login({ email, password, rememberMe });
      // Optionally, handle successful login (e.g., redirect)
    } catch (err) {
      setError('Login failed: ' + err); // Set error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email" // Added id for accessibility
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded mt-1"
          placeholder="Email"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password" // Added id for accessibility
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
        className={`w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading} // Disable button while loading
      >
        {loading ? 'Logging in...' : 'Login'} {/* Change button text based on loading state */}
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

