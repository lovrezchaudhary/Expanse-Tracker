/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ totalIncome, totalExpenses, remainingBudget }) => {
  return (
    <div className="grid grid-cols-3 gap-4 my-6">
      <div className="bg-green-100 p-4 rounded-lg">
        <h2 className="text-lg font-bold">Total Income</h2>
        <p className="text-xl font-semibold">{totalIncome}</p>
      </div>
      <div className="bg-red-100 p-4 rounded-lg">
        <h2 className="text-lg font-bold">Total Expenses</h2>
        <p className="text-xl font-semibold">{totalExpenses}</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg">
        <h2 className="text-lg font-bold">Remaining Budget</h2>
        <p className="text-xl font-semibold">{remainingBudget}</p>
      </div>
    </div>
  );
};

// Define prop types for validation
Dashboard.propTypes = {
  totalIncome: PropTypes.number.isRequired,
  totalExpenses: PropTypes.number.isRequired,
  remainingBudget: PropTypes.number.isRequired,
};

export default Dashboard;
