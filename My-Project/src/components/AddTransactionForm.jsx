/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount || !date ) {
      alert('Please fill out all fields');
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      date,
    };

    addTransaction(newTransaction);

    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="min-h-screen bg-[#E1D7B7] flex flex-col items-center justify-center">
      <div className="w-4/5 max-w-md bg-white bg-opacity-20 border border-gray-300 rounded-lg p-8 shadow-lg backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Transaction</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="amount"
              className="block text-lg font-medium text-gray-700"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-lg font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
          >
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

AddTransactionForm.propTypes = {
  addTransaction: PropTypes.func.isRequired,
};

export default AddTransactionForm;
