// components/SearchCattle.js
import React, { useState } from 'react';
import { apiPost } from '../utils/apiService';

const SearchCattle = () => {
  const [searchText, setSearchText] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);

    try {
      const formData = new FormData();
      if (searchText) formData.append('text', searchText);
      if (image) formData.append('image', image);

      const response = await apiPost('/search', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setResults(response.data.results); // Assuming the API returns results in `results`
    } catch (err) {
      setError('Search failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Search Cattle</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSearch}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Search by Text</label>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., Breed, Location"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Search by Image</label>
          <input type="file" onChange={handleImageChange} className="w-full" />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-4 w-32 h-32 object-cover rounded-md"
            />
          )}
        </div>
        <button
          type="submit"
          className={`w-full p-2 rounded ${
            loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500'
          } text-white`}
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Display Results */}
      <div className="mt-6">
        <h3 className="text-lg font-bold">Search Results</h3>
        {results.length > 0 ? (
          <ul className="mt-4 space-y-4">
            {results.map((item, index) => (
              <li
                key={index}
                className="p-4 border rounded shadow-md flex items-center space-x-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p className="text-gray-600 mt-4">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchCattle;
