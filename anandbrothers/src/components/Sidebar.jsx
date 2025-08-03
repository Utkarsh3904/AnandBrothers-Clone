import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
Home,
Package, Star, Zap, Briefcase, PhoneCall, Info,
  PanelLeft as PanelLeftIcon,
} from 'lucide-react';

const Sidebar = ({ isOpen = false, onToggle }) => {
  // Use react-router's useLocation to get current path
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  // Define your menu items with href paths matching your routes
  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Package, label: 'Products', href: '/product' },
    { icon: Star, label: 'Featured Products', href: '/featuredproduct' },
    { icon: Zap, label: 'Quick Order', href: '/quick-order' },
    { icon: Briefcase, label: 'Careers', href: '/careers' },
    { icon: Info, label: 'About Us', href: '/aboutUs' },
    { icon: PhoneCall, label: 'Contact Us', href: '/contactus' },
  ];

  // Helper to determine if menu item is active based on current URL path
  const isActive = (href) => {
    // For the root path '/'
    if (href === '/' && location.pathname === '/') return true;
    // Otherwise match startsWith for nested routes
    return href !== '/' && location.pathname.startsWith(href);
  };

  const sidebarWidthClass = isOpen ? 'w-64' : 'w-18';

  return (
    <div
      className={`fixed top-0 left-0 h-screen z-50 bg-white border-r border-gray-200 flex flex-col transition-width duration-300 ease-in-out shadow-lg ${sidebarWidthClass}`}
      style={{
        boxShadow:
          '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
      }}
    >
      {/* Header */}
      <div className="flex items-center h-17 border-b border-gray-200 bg-gray-50 px-4">
        <button
          onClick={onToggle}
          aria-label="Toggle sidebar"
          className={`p-2 rounded-lg border-none cursor-pointer shadow-md transition-all duration-200 ease-in-out bg-blue-700 text-white ${
            isButtonHovered ? 'bg-blue-700 shadow-lg scale-95 ' : ''
          }`}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          <PanelLeftIcon size={22} className="text-white" />
        </button>
        <div  
          className={`ml-3 overflow-hidden transition-all duration-300 ease-out whitespace-nowrap ${
            isOpen
              ? 'opacity-100 translate-x-0 max-w-xs'
              : 'opacity-0 -translate-x-4 max-w-0'
          }`}
        >
          <span className="text-xl font-semibold text-blue-700">Main Menu</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="px-2.5">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            const isHovered = hoveredItem === idx;

            const baseClasses = `flex items-center rounded-lg mb-1 font-medium transition-colors duration-200 group ${
              isOpen ? 'justify-start px-3 py-3' : 'justify-center p-3'
            }`;

            const activeClasses = active
              ? 'bg-blue-700 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900';

            const containerClasses = isHovered
              ? `${baseClasses} ${!active ? 'bg-gray-100 text-gray-900 `' : 'bg-blue-700 text-black'}`
              : `${baseClasses} ${activeClasses}`;

            // Make sure active icon keeps white and visible on hover
            const iconClasses = `${
              active
                ? 'text-white group-hover:text-black'
                : 'text-gray-500 group-hover:text-gray-800'
            } ${isOpen ? 'mr-3' : ''}`;

            // Icon size: 22 to keep increased size
            const iconSize = 22;

            // Label font size: text-lg if sidebar open, base if closed
            const labelClass = isOpen ? 'text-lg' : 'text-base';

            return (
              <Link
                key={idx}
                to={item.href}
                className={containerClasses}
                onMouseEnter={() => setHoveredItem(idx)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Icon size={iconSize} className={iconClasses} />
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out whitespace-nowrap ${
                    isOpen
                      ? 'opacity-100 translate-x-0 max-w-xs'
                      : 'opacity-0 translate-x-2 max-w-0'
                  }`}
                >
                  <span className={labelClass}>{item.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer spacer */}
      <div className="h-4 bg-white" />
    </div>
  );
};

export default Sidebar;
