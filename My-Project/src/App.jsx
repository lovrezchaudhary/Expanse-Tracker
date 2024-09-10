/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const totalIncome = transactions.reduce((acc, t) => t.amount > 0 ? acc + t.amount : acc, 0);
  const totalExpenses = transactions.reduce((acc, t) => t.amount < 0 ? acc + t.amount : acc, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/dashboard" element={<Dashboard totalIncome={totalIncome} totalExpenses={totalExpenses} />} />
            <Route path="/transactions" element={<TransactionList transactions={transactions} />} />
            <Route path="/add" element={<AddTransactionForm addTransaction={addTransaction} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
