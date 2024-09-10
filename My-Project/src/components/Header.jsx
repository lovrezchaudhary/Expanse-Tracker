/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const Header = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Expense Tracker</h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/about" className="mr-4">About</Link>
          <Link to="/dashboard" className="mr-4">Dashboard</Link>
          <Link to="/transactions" className="mr-4">Transactions</Link>
          <Link to="/add" className="mr-4">Add Transaction</Link>
          {user ? (
            <>
              <span className="mr-4">Hello, {user.name}</span>
              <button onClick={handleLogout} className="bg-red-500 p-2 rounded">Logout</button>
            </>
          ) : (
            <Link to="/" className="bg-blue-500 p-2 rounded">Login / Signup</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func.isRequired,
};

export default Header;
