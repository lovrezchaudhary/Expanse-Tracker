/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const TransactionList = ({ transactions }) => {
  return (
    <div className="my-6">
      <h2 className="text-lg font-bold mb-4">Transactions</h2>
      <ul className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="py-2">
            <div className="flex justify-between">
              <span>{transaction.description}</span>
              <span className={transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}>
                {transaction.amount}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Define prop types for validation
TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionList;
