import React, { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: 'buyer', // Default role
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name, role, rememberMe } = formData;

    if (isLogin) {
      console.log('Login:', { email, password, rememberMe });
      // Handle login API call
      if (rememberMe) {
        localStorage.setItem('token', 'dummyToken'); 
        sessionStorage.setItem('token', 'dummyToken'); 
      }
    } else {
      console.log('Signup:', { email, password, name, role });
      // Handle signup API call
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-blue-400 rounded shadow-md mt-10">
      <h1 className="text-4xl font-bold mb-4">
        {isLogin ? 'Login' : 'Create an Account'}
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field (Signup Only) */}
        {!isLogin && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded mt-1"
              placeholder="Enter your Full Name"
              required={!isLogin}
            />
          </div>
        )}

        {/* Email Field */}
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
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Field */}
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

        {/* Role Selection (Signup Only) */}
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

        {/* Remember Me and Forgot Password (Login Only) */}
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

        {/* Submit Button */}
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



