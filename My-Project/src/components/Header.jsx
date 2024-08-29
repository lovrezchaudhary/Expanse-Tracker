/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#2a375c] dark:bg-[#1E2A5E] text-gray-200 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Header Title */}
        <h1 className="text-2xl font-bold text-white">Expense Tracker</h1>
        
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About</Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors duration-300">Dashboard</Link>
            </li>
            <li>
              <Link to="/transactions" className="text-gray-300 hover:text-white transition-colors duration-300">Transactions</Link>
            </li>
            <li>
              <Link to="/add" className="text-gray-300 hover:text-white transition-colors duration-300">Add Transaction</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
