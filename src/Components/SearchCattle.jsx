import React, { useState } from 'react';
import BrowseCattle from '../Components/BrowseCattle';
import PaymentPage from '../Pages/PaymentPage';
import SearchCattle from '../Components/SearchCattle'; 

const BuyerDashboard = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [selectedCattle, setSelectedCattle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [image, setImage] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleImageUpload = (file) => {
    setImage(URL.createObjectURL(file));
    // Here you would typically send the image to an AI service for processing
    // For example: sendImageToAIService(file);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Buyer Dashboard</h1>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-200 h-screen p-4">
          <button
            onClick={() => setActiveTab('browse')}
            className={`block w-full text-left px-4 py-2 mb-2 ${
              activeTab === 'browse' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            Browse Cattle
          </button>
          <button
            onClick={() => setActiveTab('payment')}
            className={`block w-full text-left px-4 py-2 ${
              activeTab === 'payment' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            Make Payment
          </button>
        </aside>
        {/* Content */}
        <main className="w-3/4 p-4">
          {activeTab === 'browse' && (
            <div>
             
              <SearchCattle onSearch={handleSearch} onImageUpload={handleImageUpload} />
              <BrowseCattle setSelectedCattle={setSelectedCattle} searchTerm={searchTerm} />
            </div>
          )}
          {activeTab === 'payment' && <PaymentPage selectedCattle={selectedCattle} />}
        </main>
      </div>
    </div>
  );
};

export default BuyerDashboard;

