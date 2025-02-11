import React from 'react';
import { Link } from 'react-router-dom';
import img9 from '../assets/images/img9.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow, faShoppingCart, faLock } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-300">
      
      <div
        className="bg-cover bg-center h-screen relative"
        style={{ backgroundImage: `url(${img9})` }} 
        id="home"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-centre h-full text-white text-center">
          <h1 className="text-6xl md:text-5xl font-bold mb-4 mt-80">Buy, sell, and manage cattle listings seamlessly. Whether you're a buyer or a seller, 
            our platform provides the tools you need.</h1>
         
          <div className="space-x-6">
            <Link
              to="/register"
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded shadow-md hover:bg-blue-700"
            >
              Get Started
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 bg-gray-700 text-white font-medium rounded shadow-md hover:bg-gray-800"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      <section  id="features" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose CMS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <FontAwesomeIcon icon={faCow} className="h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Cattle Management</h3>
            <p className="text-gray-600">Manage your cattle listings efficiently and hassle-free.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <FontAwesomeIcon icon={faShoppingCart} className="h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Buy & Sell Cattle</h3>
            <p className="text-gray-600">Connect buyers and sellers in a secure marketplace.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <FontAwesomeIcon icon={faLock} className="h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-600">Experience safe and reliable payment options.</p>
          </div>
        </div>
      </div>
    </section>
  



      
      <section id="services"className="py-12 bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-500 rounded-lg p-6 shadow-md">
              <p className="mb-4">"CMS has transformed how I manage my cattle listings. Highly recommend it!"</p>
              <h4 className="font-semibold">- Fidel, Seller</h4>
            </div>
            <div className="bg-blue-500 rounded-lg p-6 shadow-md">
              <p className="mb-4">"The secure transactions feature is amazing. I trust CMS for all my purchases."</p>
              <h4 className="font-semibold">- Fidlema, Buyer</h4>
            </div>
            <div className="bg-blue-500  rounded-lg p-6 shadow-md">
              <p className="mb-4">"The admin dashboard is intuitive and user-friendly. Great job!"</p>
              <h4 className="font-semibold">- Admin Team</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;



