/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount || !date || !category) {
      alert('Please fill out all fields');
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      date,
      category,
    };

    addTransaction(newTransaction);

    setDescription('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Transaction</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button type="submit" className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
        Add Transaction
      </button>
    </form>
  );
};

AddTransactionForm.propTypes = {
  addTransaction: PropTypes.func.isRequired,
};

export default AddTransactionForm;
