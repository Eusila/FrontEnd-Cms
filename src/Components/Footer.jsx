import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
const Footer = () => {
  const { isLoggedIn, user } = useAuth(); 

  return (
    <footer className="bg-gray-700 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
              <a
              href="#home" 
              className=
               
              "hover:underline"
            >
              Home
            </a>
               
              </li>

              {isLoggedIn ? (
                <>
                  {/* links if the user is logged in */}
                  {user?.role === 'buyer' && (
                    <li>
                      <Link to="/buyer" className="hover:underline">
                        Buyer Dashboard
                      </Link>
                    </li>
                  )}
                  {user?.role === 'seller' && (
                    <li>
                      <Link to="/seller" className="hover:underline">
                        Seller Dashboard
                      </Link>
                    </li>
                  )}
                  {user?.role === 'admin' && (
                    <li>
                      <Link to="/admin" className="hover:underline">
                        Admin Dashboard
                      </Link>
                    </li>
                  )}
                </>
              ) : (
                <>
                  {/* Render these links if the user is not logged in */}
                  <li>
                    <Link to="/register" className="hover:underline">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="hover:underline">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>
              <strong>Helpline:</strong> +254 702341454
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

          
          <div>
            <h3 className="text-lg font-bold mb-4">About CMS</h3>
            <p>
              CMS (Cattle Management System) is a platform that helps buyers, sellers, and admins
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

