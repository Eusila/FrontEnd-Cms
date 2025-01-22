import React, { useEffect, useState } from 'react';
import { apiGet } from '../utils/apiService';

const BrowseCattle = () => {
  const [cattleList, setCattleList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAllCattle = async () => {
      try {
        const data = await apiGet('/cattle'); // Endpoint for fetching all cattle
        setCattleList(data);
      } catch (err) {
        setError(err || 'Failed to fetch cattle data.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllCattle();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Browse Cattle</h2>
      <div className="grid grid-cols-3 gap-4">
        {cattleList.map((cattle) => (
          <div key={cattle.id} className="p-4 border rounded shadow-md">
            <h3 className="font-bold">{cattle.name}</h3>
            <p>Breed: {cattle.breed}</p>
            <p>Age: {cattle.age} years</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCattle;

  