/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { account } from '../appwriteConfig'; 

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await account.createSession(loginEmail, loginPassword);
      alert('Login successful!');
      // Redirect to dashboard or another page
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (signupPassword !== signupConfirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    try {
      await account.create(signupEmail, signupPassword);
      alert('Signup successful!');
      // Optionally log in the user after signup
      await handleLogin();
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed. Please try again.');
    }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {/* Login Container */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col">
              <label className="mb-2" htmlFor="loginEmail">Email:</label>
              <input
                className="p-2 mb-4 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                type="email"
                id="loginEmail"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <label className="mb-2" htmlFor="loginPassword">Password:</label>
              <input
                className="p-2 mb-4 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                type="password"
                id="loginPassword"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Login
              </button>
            </form>
          </div>

          {/* Signup Container */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">Signup</h2>
            <form onSubmit={handleSignup} className="flex flex-col">
              <label className="mb-2" htmlFor="signupEmail">Email:</label>
              <input
                className="p-2 mb-4 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                type="email"
                id="signupEmail"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <label className="mb-2" htmlFor="signupPassword">Password:</label>
              <input
                className="p-2 mb-4 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                type="password"
                id="signupPassword"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <label className="mb-2" htmlFor="signupConfirmPassword">Confirm Password:</label>
              <input
                className="p-2 mb-4 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                type="password"
                id="signupConfirmPassword"
                value={signupConfirmPassword}
                onChange={(e) => setSignupConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
              />
              <button
                type="submit"
                className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                Signup
              </button>
            </form>
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
