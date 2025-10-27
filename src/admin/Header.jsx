import { useState } from 'react';
import { assets } from '../assets/assets';

const Header = ({ showNotifications, setShowNotifications }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="bg-gradient-to-r from-orange-400 to-orange-500 shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        
        {/* Left side - Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-white font-bold text-xl">Feedma</span>
        </div>

        {/* Center - Search Bar */}
        <div className="flex-1 max-w-md mx-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-4 pr-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-3">
          {/* Notification Bell */}
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-white hover:bg-orange-600 rounded-full transition-colors"
          >
            <span className="text-xl">🔔</span>
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-orange-500"></span>
          </button>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 hover:bg-orange-600 rounded-full px-3 py-1 transition-colors"
            >
              <img src={assets.AB} alt="Profile" className="w-8 h-8 rounded-full object-cover border-2 border-white" />
              <span className="text-white text-sm font-medium">Hi, Michael</span>
              <span className="text-white text-xs">▼</span>
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b">
                  <p className="text-sm font-semibold text-gray-800">Hi, Michael</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  👤 Profile
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🚪 Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
