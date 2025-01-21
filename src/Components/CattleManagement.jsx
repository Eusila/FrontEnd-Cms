import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CattleManagement = () => {
  const [cattleList, setCattleList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCattle = async () => {
      try {
        const response = await axios.get('https://mock-api.com/pending-cattle');
        setCattleList(response.data);
      } catch (err) {
        setError('Failed to fetch cattle data.');
      } finally {
        setLoading(false);
      }
    };

    fetchCattle();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.post(`https://mock-api.com/cattle/${id}/approve`);
      setCattleList((prevList) => prevList.filter((cattle) => cattle.id !== id));
    } catch (err) {
      alert('Failed to approve cattle.');
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.post(`https://mock-api.com/cattle/${id}/reject`);
      setCattleList((prevList) => prevList.filter((cattle) => cattle.id !== id));
    } catch (err) {
      alert('Failed to reject cattle.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Pending Cattle Listings</h2>
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
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleApprove(cattle.id)}
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleReject(cattle.id)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CattleManagement;
