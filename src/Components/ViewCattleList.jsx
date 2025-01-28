import React, { useEffect, useState } from 'react';
import { apiGet, apiDelete } from '../Services/apiService';

const ViewCattleList = () => {
  const [cattleList, setCattleList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCattle = async () => {
      try {
        const data = await apiGet('/cattle');
        setCattleList(data);
      } catch (err) {
        setError(err || 'Failed to fetch cattle data.');
      } finally {
        setLoading(false);
      }
    };

    fetchCattle();
  }, []);

  const handleDelete = async (id) => {
    try {
      await apiDelete(`/cattle/${id}`);
      setCattleList((prevList) => prevList.filter((cattle) => cattle.id !== id));
    } catch (err) {
      alert(err || 'Failed to delete cattle.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Cattle Listings</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Breed</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cattleList.map((cattle) => (
            <tr key={cattle.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{cattle.id}</td>
              <td className="border border-gray-300 px-4 py-2">{cattle.name}</td>
              <td className="border border-gray-300 px-4 py-2">{cattle.breed}</td>
              <td className="border border-gray-300 px-4 py-2">{cattle.age}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(cattle.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCattleList;

