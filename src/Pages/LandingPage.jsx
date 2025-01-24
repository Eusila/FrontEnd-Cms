{/*import React from 'react';
import { Link } from 'react-router-dom';
import img

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Cattle Management System
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Buy, sell, and manage cattle listings seamlessly. Whether you're a buyer or a seller, our platform provides the tools you need.
        </p>
        <div className="flex space-x-4 justify-center">
          <Link
            to="/register"
            className="bg-white text-blue-600 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-700 font-semibold py-2 px-6 rounded hover:bg-blue-800 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default LandingPage;*/}
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-screen relative" style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to CMS</h1>
          <p className="text-lg md:text-2xl mb-6">
            Simplify Cattle Management with Ease
          </p>
          <div className="space-x-4">
            <Link
              to="/signup"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded shadow-md hover:bg-blue-700"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 bg-gray-700 text-white font-medium rounded shadow-md hover:bg-gray-800"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose CMS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src="/path-to-icon1.png" alt="Feature 1" className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Cattle Management</h3>
              <p className="text-gray-600">Manage your cattle listings efficiently and hassle-free.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src="/path-to-icon2.png" alt="Feature 2" className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Buy & Sell Cattle</h3>
              <p className="text-gray-600">Connect buyers and sellers in a secure marketplace.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src="/path-to-icon3.png" alt="Feature 3" className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-gray-600">Experience safe and reliable payment options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-700 rounded-lg p-6 shadow-md">
              <p className="mb-4">"CMS has transformed how I manage my cattle listings. Highly recommend it!"</p>
              <h4 className="font-semibold">- Fidel, Seller</h4>
            </div>
            <div className="bg-blue-700 rounded-lg p-6 shadow-md">
              <p className="mb-4">"The secure transactions feature is amazing. I trust CMS for all my purchases."</p>
              <h4 className="font-semibold">- Fidlema, Buyer</h4>
            </div>
            <div className="bg-blue-700 rounded-lg p-6 shadow-md">
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
