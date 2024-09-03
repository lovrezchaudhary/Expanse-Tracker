/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { databases } from '../appwriteConfig';

const Dashboard = ({ totalIncome, totalExpenses, transactions }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setDarkMode(isDarkMode);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-[#E1D7B7] text-gray-800'}`}>
      <div className="w-4/5 max-w-4xl bg-white dark:bg-gray-800 bg-opacity-20 border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-lg backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Dashboard</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-700 bg-opacity-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Total Income</h3>
            <p className="text-lg">${totalIncome || 0}</p>
          </div>
          <div className="bg-white dark:bg-gray-700 bg-opacity-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Total Expenses</h3>
            <p className="text-lg">${totalExpenses || 0}</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 bg-opacity-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Transactions</h3>
          {transactions.length > 0 ? (
            <ul>
              {transactions.map((transaction, index) => (
                <li key={index} className="mb-2">
                  {transaction.description}: ${transaction.amount}
                </li>
              ))}
            </ul>
          ) : (
            <p>No transactions available</p>
          )}
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  totalIncome: PropTypes.number,
  totalExpenses: PropTypes.number,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
};

Dashboard.defaultProps = {
  totalIncome: 0,
  totalExpenses: 0,
  transactions: [],
};

export default Dashboard;
