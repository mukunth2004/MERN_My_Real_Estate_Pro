import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, User, LogIn } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">RealEstatePro</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <NavLink to="/" title="Home" />
            <NavLink to="/properties" title="Properties" />
            <NavLink to="/about" title="About" />
            <button 
              onClick={() => navigate('/signin')}
              className="flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, title }: { to: string; title: string }) => (
  <Link
    to={to}
    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
  >
    {title}
  </Link>
);

export default Navbar;