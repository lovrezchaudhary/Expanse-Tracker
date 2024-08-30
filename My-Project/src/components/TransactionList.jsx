/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Transactions = ({ transactions }) => {
  return (
    <div className="min-h-screen bg-[#E1D7B7] flex flex-col items-center justify-center">
      <div className="w-4/5 max-w-4xl bg-white bg-opacity-20 border border-gray-300 rounded-lg p-6 shadow-lg backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Transactions</h2>

        {transactions.length > 0 ? (
          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white bg-opacity-50 p-4 rounded-lg shadow"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">{transaction.description}</h3>
                  <p className="text-gray-600">Date: {transaction.date}</p>
                </div>
                <div className="text-lg font-semibold text-gray-700">
                  ${transaction.amount}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No transactions available</p>
        )}

        <div className="mt-6 flex justify-between items-center">
          <p className="text-gray-700 font-medium">Total Transactions: {transactions.length}</p>
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
