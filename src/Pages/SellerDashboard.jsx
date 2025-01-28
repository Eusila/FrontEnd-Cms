import React, { useState } from 'react';
import AddCattleForm from '../Components/AddCattleForm';
import ViewCattleList from '../Components/ViewCattleList';

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState('viewCattle'); // State for toggling between tabs

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Seller Dashboard</h1>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-200 h-screen p-4">
          <button
            onClick={() => setActiveTab('viewCattle')}
            className={`block w-full text-left px-4 py-2 mb-2 ${
              activeTab === 'viewCattle' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            View Cattle
          </button>
          <button
            onClick={() => setActiveTab('addCattle')}
            className={`block w-full text-left px-4 py-2 ${
              activeTab === 'addCattle' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            Add Cattle
          </button>
        </aside>
        {/* Content */}
        <main className="w-3/4 p-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            {activeTab === 'viewCattle' ? <ViewCattleList /> : <AddCattleForm />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellerDashboard;



