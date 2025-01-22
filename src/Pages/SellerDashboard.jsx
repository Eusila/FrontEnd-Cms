import React, { useState } from 'react';
import AddCattleForm from './AddCattleForm';
import ViewCattleList from './ViewCattleList';

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState('viewCattle'); // State for toggling between tabs

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Seller Dashboard</h1>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('viewCattle')}
          className={`py-2 px-4 rounded ${
            activeTab === 'viewCattle' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          View Cattle
        </button>
        <button
          onClick={() => setActiveTab('addCattle')}
          className={`py-2 px-4 rounded ${
            activeTab === 'addCattle' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Add Cattle
        </button>
      </div>

      {/* Conditional Rendering Based on Active Tab */}
      <div className="bg-white shadow-md rounded-lg p-6">
        {activeTab === 'viewCattle' ? <ViewCattleList /> : <AddCattleForm />}
      </div>
    </div>
  );
};

export default SellerDashboard;


