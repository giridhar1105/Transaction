"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiSearch } from "react-icons/fi";

// This is your mock data, now as an array of objects
const mockTransactions = [
  {
    id: "1",
    date: "2024-01-15",
    type: "deposit",
    amount: 1500.0,
    vendor: "Direct Deposit - Employer",
    status: "completed",
    category: "Income",
  },
  {
    id: "2",
    date: "2024-01-17",
    type: "withdrawal",
    amount: 200.0,
    vendor: "Grocery Store",
    status: "completed",
    category: "Expense",
  },
];

// Parent component could pass this data as a prop, for now it's hardcoded
export default function TransactionHistory({ transactions = mockTransactions }) {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [filterDate, setFilterDate] = useState("7days");
  const [searchQuery, setSearchQuery] = useState("");

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-to-br from-purple-50 to-blue-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-black">Transaction History</h1>
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 shadow-lg w-full">
            <h2 className="text-2xl font-semibold mb-2 text-white">Total Balance</h2>
            <p className="text-4xl font-bold text-white">{formatCurrency(25420.50)}</p>
          </div>
        </div>

        {/* Filters Section */}
        <div className="mb-6 flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <select
              className="w-full p-2 border rounded-lg bg-white text-black shadow-sm"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px] relative">
            <input
              type="text"
              placeholder="Search transactions..."
              className="w-full p-2 border rounded-lg pl-10 bg-white text-black shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md">
            <FiDownload /> Export
          </button>
        </div>

        {/* Transactions List */}
        <div className="bg-white rounded-lg shadow-xl border border-gray-100 flex-grow">
          <AnimatePresence>
            {transactions
              .filter((transaction) =>
                transaction.vendor.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((transaction) => (
                <motion.div
                  key={transaction.id}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="border-b p-4 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 cursor-pointer transition-all"
                  onClick={() => setSelectedTransaction(transaction)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-black">{transaction.vendor}</p>
                      <p className="text-sm text-gray-600">{transaction.date}</p>
                    </div>
                    <div
                      className={`font-bold ${
                        transaction.type === "deposit"
                          ? "text-emerald-600"
                          : "text-rose-600"
                      }`}
                    >
                      {transaction.type === "deposit" ? "+" : "-"}
                      {formatCurrency(transaction.amount)}
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Transaction Detail Modal */}
      <AnimatePresence>
        {selectedTransaction && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={() => setSelectedTransaction(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl max-w-lg w-full m-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-6 text-black">Transaction Details</h3>
              <div className="space-y-3">
                <p className="text-lg text-black">
                  Vendor: <span className="font-semibold">{selectedTransaction.vendor}</span>
                </p>
                <p className="text-lg text-black">
                  Date: <span className="font-semibold">{selectedTransaction.date}</span>
                </p>
                <p className="text-lg text-black">
                  Category: <span className="font-semibold">{selectedTransaction.category}</span>
                </p>
                <p className="text-lg text-black">
                  Amount:{" "}
                  <span
                    className={`font-semibold ${
                      selectedTransaction.type === "deposit"
                        ? "text-emerald-600"
                        : "text-rose-600"
                    }`}
                  >
                    {selectedTransaction.type === "deposit" ? "+" : "-"}
                    {formatCurrency(selectedTransaction.amount)}
                  </span>
                </p>
                <p className="text-lg text-black">
                  Status:{" "}
                  <span className="font-semibold capitalize ml-1 text-indigo-600">
                    {selectedTransaction.status}
                  </span>
                </p>
                <p className="text-lg text-black">
                  Type:{" "}
                  <span className="font-semibold capitalize ml-1">{selectedTransaction.type}</span>
                </p>
              </div>
              <button
                className="mt-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md"
                onClick={() => setSelectedTransaction(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
