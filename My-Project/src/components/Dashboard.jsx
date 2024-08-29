/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ totalIncome, totalExpenses }) => {
  return (
    <div className="my-6">
      <h2 className="text-lg font-bold mb-4">Dashboard</h2>
      <div>
        <p>Total Income: {totalIncome}</p>
        <p>Total Expenses: {totalExpenses}</p>
        <p>Net Balance: {totalIncome - totalExpenses}</p>
      </div>
    </div>
  );
};

// PropTypes validation
Dashboard.propTypes = {
  totalIncome: PropTypes.number.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

// Default props in case they are not passed
Dashboard.defaultProps = {
  totalIncome: 0,
  totalExpenses: 0,
};

export default Dashboard;
