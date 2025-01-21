// components/SellerDashboard.js
import React, { useState } from 'react';
import AddCattleForm from './AddCattleForm';
import ViewCattleList from './ViewCattleList';

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState('view');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Seller Dashboard</h1>
      </div>
      <div className="flex">
        <aside className="w-1/4 bg-gray-200 h-screen p-4">
          <button
            onClick={() => setActiveTab('add')}
            className={`block w-full text-left px-4 py-2 mb-2 ${
              activeTab === 'add' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            Add Cattle
          </button>
          <button
            onClick={() => setActiveTab('view')}
            className={`block w-full text-left px-4 py-2 ${
              activeTab === 'view' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            View Listings
          </button>
        </aside>
        <main className="w-3/4 p-4">
          {activeTab === 'add' && <AddCattleForm />}
          {activeTab === 'view' && <ViewCattleList />}
        </main>
      </div>
    </div>
  );
};

export default SellerDashboard;
