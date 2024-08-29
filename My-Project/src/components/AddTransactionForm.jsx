/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

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

    // Clear the form
    setDescription('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <form onSubmit={onSubmit} className="my-6">
      <h2 className="text-lg font-bold mb-4">Add New Transaction</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded-lg"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg mt-4">
        Add Transaction
      </button>
    </form>
  );
};

// Define prop types for validation
AddTransactionForm.propTypes = {
  addTransaction: PropTypes.func.isRequired, // Validate addTransaction prop
};

export default AddTransactionForm;
