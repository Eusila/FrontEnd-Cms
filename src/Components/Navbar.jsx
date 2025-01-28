import { Link, useLocation, useNavigate } from 'react-router-dom';
import bg1 from '../assets/images/bg1.jpg';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  // Render for logged-in users
  if (isLoggedIn) {
    return (
      <nav className="bg-blue-500 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={bg1}
                alt="CMS Logo"
                className="h-8 w-8 mr-2"
              />
              <Link to="/" className="text-4xl font-bold">
                CMS
              </Link>
            </div>

            
            <div className="hidden md:flex space-x-4">
              <Link
                to="/buyer"
                className={`${
                  isActive('/buyer') ? 'bg-blue-800' : ''
                } px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700`}
              >
                Buyer Dashboard
              </Link>
              <Link
                to="/seller"
                className={`${
                  isActive('/seller') ? 'bg-blue-800' : ''
                } px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700`}
              >
                Seller Dashboard
              </Link>
              <Link
                to="/admin"
                className={`${
                  isActive('/admin') ? 'bg-blue-800' : ''
                } px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700`}
              >
                Admin Dashboard
              </Link>
            </div>

          
            <div>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Render for non-logged-in users
  return (
    <nav className="bg-blue-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          <div className="flex items-center">
            <img
              src={bg1}
              alt="CMS Logo"
              className="h-8 w-8 mr-2"
            />
            <Link to="/" className="text-4xl font-bold">
              CMS
            </Link>
          </div>

          {/* Navigation Links for non-logged-in users */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#home" // Use <a> instead of <Link> because the #points to another page
              className={`${
                isActive('#home') ? 'bg-blue-800' : ''
              } px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700`}
            >
              Home
            </a>
            <a
              href="#features" 
              className={`${
                isActive('#features') ? 'bg-blue-800' : ''
              } px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700`}
            >
              Features
            </a>
            <a
              href="#services" 
              className={`${
                isActive('#services') ? 'bg-blue-800' : ''
              } px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700`}
            >
              Services
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
