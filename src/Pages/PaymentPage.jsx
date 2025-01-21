import React, { useState } from 'react';
import axios from 'axios';

const PaymentPage = ({ selectedCattle }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();

    // Reset error and success messages
    setSuccess('');
    setError('');
    setLoading(true);

    const paymentData = {
      cardNumber,
      expiry,
      cvv,
      amount: selectedCattle?.price || 0,
      cattleId: selectedCattle?.id || '',
    };

    try {
      // Replace with a real API endpoint in production
      const response = await axios.post('https://mock-payment-api.com/pay', paymentData);

      if (response.status === 200 && response.data.success) {
        setSuccess('Payment Successful! Thank you for your purchase.');
      } else {
        setError('Payment failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while processing your payment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Payment</h2>
      {selectedCattle ? (
        <div>
          <p className="mb-4">Selected Cattle: <strong>{selectedCattle.name}</strong></p>
          {success && <p className="text-green-500">{success}</p>}
          {error && <p className="text-red-500">{error}</p>}
          <form className="bg-white p-6 rounded shadow-md" onSubmit={handlePayment}>
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
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
            <input
              type="text"
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
              {loading ? 'Processing...' : `Pay $${selectedCattle.price}`}
            </button>
          </form>
        </div>
      ) : (
        <p>Please select a cattle to proceed with the payment.</p>
      )}
    </div>
  );
};

export default PaymentPage;
