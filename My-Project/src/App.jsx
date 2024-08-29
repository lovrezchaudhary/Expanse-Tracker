/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + Math.abs(transaction.amount), 0);

  const remainingBudget = totalIncome - totalExpenses;

  return (
    <div className="container mx-auto p-4">
      <Header />
      <Dashboard totalIncome={totalIncome} totalExpenses={totalExpenses} remainingBudget={remainingBudget} />
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;
