/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ totalIncome, totalExpenses, transactions }) => {
  return (
    <div className="min-h-screen bg-[#E1D7B7] flex flex-col items-center justify-center">
      <div className="w-4/5 max-w-4xl bg-white bg-opacity-20 border border-gray-300 rounded-lg p-6 shadow-lg backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Dashboard</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700">Total Income</h3>
            <p className="text-lg text-gray-600">${totalIncome || 0}</p>
          </div>
          <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700">Total Expenses</h3>
            <p className="text-lg text-gray-600">${totalExpenses || 0}</p>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Transactions</h3>
          {transactions.length > 0 ? (
            <ul>
              {transactions.map((transaction, index) => (
                <li key={index} className="mb-2 text-gray-600">
                  {transaction.description}: ${transaction.amount}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No transactions available</p>
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
