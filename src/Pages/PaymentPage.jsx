import React, { useState } from 'react';
import { apiPost } from '../Services/apiService'

const PaymentPage = ({ cattleId }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      await apiPost('/payments', { cattleId, cardNumber, expiryDate, cvv });
      setSuccess('Payment successful!');
    } catch (err) {
      setError(err || 'Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Payment Form</h2>
      {success && <p className="text-green-500">{success}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Card Number"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Expiry Date (MM/YY)"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="CVV"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        required
      />
      <button
        type="submit"
        className={`bg-blue-500 text-white px-4 py-2 rounded ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
};

export default PaymentPage;
