import { useState } from 'react';
import { assets } from '../assets/assets';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '🛒', label: 'Online Orders' },
    { icon: '👥', label: 'Customers' },
    { icon: '🍽️', label: 'Menu' },
    { icon: '💬', label: 'Complaints' },
    { icon: '📈', label: 'Sales Report' },
    { icon: '🔧', label: 'Update Menu' },
  ];

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-56'} bg-white shadow-lg flex flex-col border-r transition-all duration-300`}>
      {/* Logo */}
      <div className="p-4 border-b flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <img src={assets.AB} alt="Logo" className="w-8 h-8 rounded object-cover" />
            <span className="text-orange-500 font-bold text-lg">Foodery</span>
          </div>
        )}
        {isCollapsed && (
          <img src={assets.AB} alt="Logo" className="w-8 h-8 rounded object-cover mx-auto" />
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center ${isCollapsed ? 'justify-center px-4' : 'px-6'} py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors ${
              item.active ? 'bg-orange-50 text-orange-600 border-r-2 border-orange-500' : ''
            }`}
            title={isCollapsed ? item.label : ''}
          >
            <span className={`text-base ${isCollapsed ? '' : 'mr-3'}`}>{item.icon}</span>
            {!isCollapsed && <span className="font-medium">{item.label}</span>}
          </a>
        ))}
      </nav>

      {/* Toggle Button */}
      <div className="p-4 border-t">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
        >
          <span className="text-xl">{isCollapsed ? '→' : '←'}</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
