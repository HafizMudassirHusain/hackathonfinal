// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        {/* Left side: Logo/Brand Name (Optional) */}
        <div className="text-white font-bold text-xl">
          Saylani Microfinance
        </div>

        {/* Center: Navigation links */}
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link to="/loan-calculator" className="hover:text-gray-200">Calculator</Link>
          </li>
          <li>
            <Link to="/loan-request" className="hover:text-gray-200">Loan Request</Link>
          </li>
        </ul>

        {/* Right side: Sign In button with avatar */}
        <div className="flex items-center space-x-4">
          <Link to="/signin" className="text-white text-sm hover:bg-blue-700 py-2 px-4 rounded-lg transition-all duration-300">
            Sign In
          </Link>

          {/* Avatar Placeholder */}
          <div className="relative">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png" // Avatar image (replace with user profile picture if available)
              alt="User Avatar"
              className="w-8 h-8 rounded-full cursor-pointer hover:ring-2 hover:ring-blue-300 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
