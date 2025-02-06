"use client"

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CSVLink } from 'react-csv';

// Mock Data (replace with real API calls)
const mockTransactions = [
  {
    id: 1,
    date: '2025-02-05',
    type: 'Deposit',
    amount: 500,
    vendor: 'PayPal',
    method: 'Credit Card',
    status: 'Completed',
    description: 'Deposit from PayPal',
  },
  {
    id: 2,
    date: '2025-02-04',
    type: 'Withdrawal',
    amount: -200,
    vendor: 'ATM Withdrawal',
    method: 'Bank Transfer',
    status: 'Completed',
    description: 'ATM withdrawal',
  },
  // More mock data here...
];

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState(mockTransactions);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedType, setSelectedType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');

  // Handle Filter Change
  const handleFilterChange = () => {
    // Here, you can filter transactions based on startDate, endDate, selectedType, and searchTerm
    const filtered = mockTransactions.filter((transaction) => {
      const date = new Date(transaction.date);
      return (
        date >= startDate &&
        date <= endDate &&
        (selectedType ? transaction.type === selectedType : true) &&
        (transaction.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          transaction.id.toString().includes(searchTerm))
      );
    });

    setTransactions(filtered);
  };

  // Handle Sorting
  const handleSort = (field) => {
    setSortBy(field);
    const sorted = [...transactions].sort((a, b) => {
      if (field === 'amount') {
        return a.amount - b.amount;
      } else if (field === 'date') {
        return new Date(a.date) - new Date(b.date);
      }
      return 0;
    });
    setTransactions(sorted);
  };

  useEffect(() => {
    handleFilterChange();
  }, [startDate, endDate, selectedType, searchTerm]);

  return (
    <div className="container">
      <h1>Transaction History</h1>
      <div className="transaction-filters">
        <div>
          <label>Date Range:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="yyyy/MM/dd"
          />
          <span> to </span>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="yyyy/MM/dd"
          />
        </div>

        <div>
          <label>Transaction Type:</label>
          <select onChange={(e) => setSelectedType(e.target.value)}>
            <option value="">All</option>
            <option value="Deposit">Deposit</option>
            <option value="Withdrawal">Withdrawal</option>
            <option value="Payment">Payment</option>
            <option value="Refund">Refund</option>
          </select>
        </div>

        <div>
          <label>Search:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by ID, Vendor"
          />
        </div>

        <div>
          <button onClick={() => handleSort('date')}>Sort by Date</button>
          <button onClick={() => handleSort('amount')}>Sort by Amount</button>
        </div>
      </div>

      <div className="transaction-list">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Vendor</th>
              <th>Status</th>
              <th>Payment Method</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.id}</td>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.vendor}</td>
                <td>{transaction.status}</td>
                <td>{transaction.method}</td>
                <td>
                  <button onClick={() => alert('View Details')}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        {/* Pagination buttons or infinite scroll can go here */}
      </div>

      <div className="download">
        <CSVLink data={transactions} filename="transactions.csv">
          Download CSV
        </CSVLink>
      </div>
    </div>
  );
};

export default TransactionHistory;
