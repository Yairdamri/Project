import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Calendar, LogOut, ChevronDown } from 'lucide-react';

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="100" fill="currentColor"/>
    <path d="M71.7678 48.7678C72.7441 47.7915 72.7441 46.2085 71.7678 45.2322L55.8579 29.3223C54.8816 28.346 53.2986 28.346 52.3223 29.3223C51.346 30.2986 51.346 31.8816 52.3223 32.8579L66.4645 47L52.3223 61.1421C51.346 62.1184 51.346 63.7014 52.3223 64.6777C53.2986 65.654 54.8816 65.654 55.8579 64.6777L71.7678 48.7678ZM22 49.5H70V44.5H22V49.5Z" fill="white"/>
    <line x1="85.5" y1="23" x2="85.5" y2="71" stroke="white" strokeWidth="5"/>
  </svg>
);

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const user = {
    name: 'Alex Thompson',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  };

  const handleNavigate = (path: string) => {
    setShowDropdown(false);
    navigate(path);
  };

  return (
    <header className="bg-gradient-primary py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <Logo />
            <span className="text-xl font-bold text-white">EduConnect</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/universities" className="text-white/90 hover:text-white transition-colors">Universities</Link>
            <Link to="/high-school" className="text-white/90 hover:text-white transition-colors">High School</Link>
            <Link to="/teachers" className="text-white/90 hover:text-white transition-colors">Teachers</Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="relative">
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-white/20"
                />
                <span className="font-medium text-white">{user.name}</span>
                <ChevronDown className="w-4 h-4 text-white" />
              </div>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-colored py-1 text-gray-800">
                  <button
                    onClick={() => handleNavigate('/profile')}
                    className="w-full flex items-center px-4 py-2 hover:bg-gray-50"
                  >
                    <User className="w-4 h-4 mr-2 text-primary-600" />
                    Profile
                  </button>
                  <button
                    onClick={() => handleNavigate('/calendar')}
                    className="w-full flex items-center px-4 py-2 hover:bg-gray-50"
                  >
                    <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                    Calendar
                  </button>
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      setShowDropdown(false);
                      navigate('/');
                    }}
                    className="w-full flex items-center px-4 py-2 hover:bg-gray-50 text-red-600"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate('/signup')}
                className="px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Sign up
              </button>
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                  navigate('/login');
                }}
                className="px-4 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors font-medium"
              >
                Log in
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;