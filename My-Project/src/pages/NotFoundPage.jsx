/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='min-h-screen bg-[#392294] flex flex-col items-center justify-center rounded-2xl'>
      <div className='w-4/5 max-w-4xl bg-gray-300 bg-opacity-20 border border-gray-300 rounded-lg p-6 shadow-lg backdrop-blur-md'>
        <h1 className="text-2xl font-bold text-gray-200">404 - Page Not Found</h1>
        <p className='text-slate-400'>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="text-red-200 flex justify-center">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
