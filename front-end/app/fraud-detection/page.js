"use client"

import { motion } from 'framer-motion';
import { useState } from 'react';
import { BsShieldCheck, BsExclamationTriangle, BsGear, BsBook, BsClock } from 'react-icons/bs';

export default function FraudDetectionPage() {
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    // Mock data
    const suspiciousTransactions = [
        {
            id: 1,
            date: '2024-01-15',
            time: '14:30',
            amount: 999.99,
            merchant: 'Unknown Vendor',
            reason: 'Unusual Location',
            riskLevel: 'High',
            status: 'Under Review'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    // Format amount to Indian Rupees
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(amount);
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen bg-gray-50 p-6 text-black"
        >
            {/* Header Section */}
            <motion.section variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <BsShieldCheck className="text-green-500 text-3xl" />
                        <h1 className="text-2xl font-bold text-black">Fraud Detection Overview</h1>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-green-100 text-green-700 px-4 py-2 rounded-full"
                    >
                        Account Secure
                    </motion.div>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold text-black">Last Scan</h3>
                        <p className="text-gray-600">Today at 12:30 PM</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold text-black">Suspicious Activity</h3>
                        <p className="text-gray-600">No current threats detected</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-blue-500 text-white py-2 rounded-lg"
                        >
                            Run New Scan
                        </motion.button>
                    </div>
                </div>
            </motion.section>

            {/* Suspicious Transactions Section */}
            <motion.section variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-xl font-bold mb-4 text-black">Suspicious Transactions</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-black">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="px-6 py-3 text-left">Date/Time</th>
                                <th className="px-6 py-3 text-left">Amount</th>
                                <th className="px-6 py-3 text-left">Merchant</th>
                                <th className="px-6 py-3 text-left">Risk Level</th>
                                <th className="px-6 py-3 text-left">Status</th>
                                <th className="px-6 py-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {suspiciousTransactions.map((transaction) => (
                                <motion.tr
                                    key={transaction.id}
                                    whileHover={{ backgroundColor: '#f9fafb' }}
                                    className="border-b"
                                >
                                    <td className="px-6 py-4">{`${transaction.date} ${transaction.time}`}</td>
                                    <td className="px-6 py-4">{formatCurrency(transaction.amount)}</td>
                                    <td className="px-6 py-4">{transaction.merchant}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full">
                                            {transaction.riskLevel}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">{transaction.status}</td>
                                    <td className="px-6 py-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                            onClick={() => setSelectedTransaction(transaction)}
                                        >
                                            View Details
                                        </motion.button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.section>

            {/* Quick Actions Section */}
            <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                >
                    <BsGear className="text-2xl text-blue-500 mb-3" />
                    <h3 className="font-bold mb-2 text-black">Security Settings</h3>
                    <p className="text-gray-600 mb-4">Configure your security preferences and alerts</p>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="text-blue-500 font-semibold"
                    >
                        Manage Settings →
                    </motion.button>
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                >
                    <BsExclamationTriangle className="text-2xl text-yellow-500 mb-3" />
                    <h3 className="font-bold mb-2 text-black">Report Fraud</h3>
                    <p className="text-gray-600 mb-4">Report unauthorized transactions or suspicious activity</p>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="text-yellow-500 font-semibold"
                    >
                        Report Now →
                    </motion.button>
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                >
                    <BsBook className="text-2xl text-green-500 mb-3" />
                    <h3 className="font-bold mb-2 text-black">Security Tips</h3>
                    <p className="text-gray-600 mb-4">Learn how to protect your account from fraud</p>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="text-green-500 font-semibold"
                    >
                        Learn More →
                    </motion.button>
                </motion.div>
            </motion.section>

            {/* Modal for Transaction Details */}
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
                        className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full text-black"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-bold mb-4">Transaction Details</h2>
                        <div className="space-y-4">
                            <p>
                                <strong>Date/Time:</strong> {selectedTransaction.date} {selectedTransaction.time}
                            </p>
                            <p>
                                <strong>Merchant:</strong> {selectedTransaction.merchant}
                            </p>
                            <p>
                                <strong>Amount:</strong> {formatCurrency(selectedTransaction.amount)}
                            </p>
                            <p>
                                <strong>Reason:</strong> {selectedTransaction.reason}
                            </p>
                            <p>
                                <strong>Risk Level:</strong> {selectedTransaction.riskLevel}
                            </p>
                            <p>
                                <strong>Status:</strong> {selectedTransaction.status}
                            </p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg"
                            onClick={() => setSelectedTransaction(null)}
                        >
                            Close
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    );
}
