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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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

        {/* Contact Us Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg max-w-xl mx-auto mb-6">
            Have any questions, feedback, or suggestions? Feel free to reach out to us. We are always here to help you manage your finances more effectively.
          </p>

          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2" htmlFor="name">Name</label>
              <input
                className="w-full p-3 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2" htmlFor="email">Email</label>
              <input
                className="w-full p-3 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2" htmlFor="message">Message</label>
              <textarea
                className="w-full p-3 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                id="message"
                rows="4"
                placeholder="Enter your message"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
