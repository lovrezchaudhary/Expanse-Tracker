/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className={`min-h-screen bg-[#ebdfc1] dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500`}>
      <div className="container mx-auto p-6">
        <div className="flex flex-col items-center justify-center mb-6">
          <h1 className="text-4xl font-bold text-center mb-4">Welcome to the Expense Tracker</h1>
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-3xl bg-gradient-to-r from-gray-500 to-gray-700 text-white font-semibold shadow-lg hover:from-gray-600 hover:to-gray-800 transition-transform transform hover:scale-105"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <p className="text-lg text-center mb-4">
          Track your expenses and manage your budget efficiently with our easy-to-use expense tracker. 
          Start managing your finances today and gain insights into your spending habits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">Track Expenses</h2>
            <p>Keep track of all your expenses and categorize them for better understanding.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">Set Budgets</h2>
            <p>Set and monitor your budget to ensure you stay within your limits.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">View Reports</h2>
            <p>Generate reports and visualize your spending trends over time.</p>
          </div>
        </div>
        <section className="bg-[#e0d09e] dark:bg-gray-800 p-6 mt-20 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#faf5e7] dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Step 1: Add Transactions</h3>
              <p>Add your income and expenses to keep track of your financial activities.</p>
            </div>
            <div className="bg-[#faf5e7] dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Step 2: Set Budgets</h3>
              <p>Define budgets for different categories to manage your spending effectively.</p>
            </div>
            <div className="bg-[#faf5e7] dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Step 3: Review Reports</h3>
              <p>Analyze your spending patterns and adjust your budgets as needed.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
