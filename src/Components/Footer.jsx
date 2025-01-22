import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Section Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/buyer" className="hover:underline">
                  Buyer Dashboard
                </Link>
              </li>
              <li>
                <Link to="/seller" className="hover:underline">
                  Seller Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:underline">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>
              <strong>Helpline:</strong> +1-800-555-1234
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:support@cms.com"
                className="text-blue-400 hover:underline"
              >
                support@cms.com
              </a>
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About CMS</h3>
            <p>
              CMS (Cattle Management System) helps buyers, sellers, and admins
              manage cattle listings efficiently. Contact us for help or
              feedback!
            </p>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} CMS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
