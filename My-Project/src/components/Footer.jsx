/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-700 text-gray-200 py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center mb-4">
          <img src="https://play-lh.googleusercontent.com/dif6BNC4jh2EKHOw6gplsjoKy7F3Fv4avCiJGhglmzNlzv8fJQtqEtMA2T__rypQapY" alt="Company Logo" className="h-12 mr-3" />
          <span className="text-2xl font-semibold">Expense Tracker</span>
        </div>
        <p className="mb-2">&copy; {new Date().getFullYear()}  All rights reserved by company.</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms of Service</a>
          <a href="#" className="hover:text-blue-400">Contact Us</a>
        </div>
        <div className="text-sm">
          
          <div className="flex justify-center space-x-4 mt-2">
          <p>Follow us on :</p>
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
