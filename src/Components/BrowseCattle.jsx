import React, { useEffect, useState } from 'react';
import { apiGet } from '../Services/apiService';

const BrowseCattle = ({ setSelectedCattle, searchTerm }) => {
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

  // Filter cattle based on the search term
  const filteredCattleList = cattleList.filter(cattle =>
    cattle.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cattle.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Browse Cattle</h2>
      <div className="grid grid-cols-3 gap-4">
        {filteredCattleList.map((cattle) => (
          <div key={cattle.id} className="p-4 border rounded shadow-md">
            <img
              src={cattle.image} 
              alt={cattle.categoryName} 
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <h3 className="font-bold">{cattle.categoryName}</h3> 
            <p>Breed: {cattle.breed}</p>           
            <p>Weight: {cattle.weight} kg</p>      
            <p>Price: ${cattle.price.toFixed(2)}</p> 
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setSelectedCattle(cattle)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCattle;


  