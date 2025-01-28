import React, { useState } from 'react';
import UserManagement from '../Components/UserManagement';
import CattleManagement from '../Components/CattleManagement'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-200 h-screen p-4">
          <button
            onClick={() => setActiveTab('users')}
            className={`block w-full text-left px-4 py-2 mb-2 ${
              activeTab === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            User Management
          </button>
          <button
            onClick={() => setActiveTab('cattle')}
            className={`block w-full text-left px-4 py-2 ${
              activeTab === 'cattle' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            Cattle Management
          </button>
        </aside>
        {/* Content */}
        <main className="w-3/4 p-4">
          {activeTab === 'users' && <UserManagement />}
          {activeTab === 'cattle' && <CattleManagement />}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
