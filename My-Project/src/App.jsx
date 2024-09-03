/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import { Client } from 'appwrite';
import { account } from './appwriteConfig';


const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const session = await account.getSession('current');
        if (session) {
          setUser(await account.get()); // Get user data
        }
      } catch (error) {
        console.error('No active session or session expired', error);
      }
    };
    checkUserSession();
  }, []);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const totalIncome = transactions.reduce((acc, t) => t.amount > 0 ? acc + t.amount : acc, 0);
  const totalExpenses = transactions.reduce((acc, t) => t.amount < 0 ? acc + t.amount : acc, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header user={user} setUser={setUser} />
        <div className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
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
