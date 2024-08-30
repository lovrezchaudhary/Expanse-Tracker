/* eslint-disable no-unused-vars */
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-400 bg-[#E1D7B7] dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <div className="container mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            The Expense Tracker is a modern solution designed to help you manage your finances effectively. 
            Whether you are tracking daily expenses or planning long-term budgets, our tool offers all the features you need to stay on top of your finances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our mission is to empower individuals and businesses to take control of their financial future. 
              We aim to simplify the process of expense tracking and budgeting so that you can focus on what truly matters.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Real-time expense tracking</li>
              <li>Customizable categories and budgets</li>
              <li>Comprehensive reports and analytics</li>
              <li>User-friendly interface with dark mode support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
