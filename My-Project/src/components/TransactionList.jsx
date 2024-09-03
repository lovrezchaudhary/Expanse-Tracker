/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { databases } from './appwriteConfig';

const Transactions = ({ transactions }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled on the document and set the state accordingly
    const isDarkMode = document.documentElement.classList.contains('dark');
    setDarkMode(isDarkMode);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-[#E1D7B7] text-gray-800'}`}>
      <div className="w-4/5 max-w-4xl bg-white dark:bg-gray-800 bg-opacity-20 border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-lg backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Transactions</h2>

        {transactions.length > 0 ? (
          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white dark:bg-gray-700 bg-opacity-50 p-4 rounded-lg shadow"
              >
                <div>
                  <h3 className="text-lg font-semibold">{transaction.description}</h3>
                  <p>Date: {transaction.date}</p>
                </div>
                <div className="text-lg font-semibold">
                  ${transaction.amount}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No transactions available</p>
        )}

        <div className="mt-6 flex justify-between items-center">
          <p className="font-medium">Total Transactions: {transactions.length}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
            Add New Transaction
          </button>
        </div>
      </div>
    </div>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
};

Transactions.defaultProps = {
  transactions: [],
};

export default Transactions;
