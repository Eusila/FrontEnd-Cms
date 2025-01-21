import React, { useState } from 'react';
import axios from 'axios';

const AddCattleForm = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const response = await axios.post('https://mock-api.com/cattle', {
        name,
        breed,
        age,
      });

      if (response.status === 201) {
        setSuccess('Cattle added successfully!');
        setName('');
        setBreed('');
        setAge('');
      } else {
        setError('Failed to add cattle. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while adding cattle.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Add Cattle</h2>
      {success && <p className="text-green-500">{success}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Cattle Name"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Breed"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age (years)"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <button
        type="submit"
        className={`bg-blue-500 text-white px-4 py-2 rounded ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add'}
      </button>
    </form>
  );
};

export default AddCattleForm;
