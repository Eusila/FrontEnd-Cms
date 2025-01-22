import React, { useState } from 'react';
import { apiPost } from '../Services/apiService';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      await apiPost('/forgot-password', { email }); // Backend API for password recovery
      setSuccess('Password recovery email sent. Check your inbox!');
    } catch (err) {
      setError(err || 'Failed to send recovery email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Your Email"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full p-2 rounded ${
            loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500'
          } text-white`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Recovery Email'}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
