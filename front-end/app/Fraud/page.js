"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaBell, FaExclamationTriangle, FaLock } from 'react-icons/fa';

export default function FraudDetection() {
    // Define data objects
    const riskData = {
        score: 65,
        threshold: {
            high: 70,
            medium: 40
        }
    };

    const alertData = [
        { id: 1, type: 'warning', message: 'Unusual login attempt detected from new location', date: '2024-01-20' },
        { id: 2, type: 'critical', message: 'Multiple failed transaction attempts', date: '2024-01-19' },
        { id: 3, type: 'info', message: 'Password unchanged for 3 months', date: '2024-01-18' },
    ];

    const securityTips = [
        { id: 1, message: 'Enable Two-Factor Authentication' },
        { id: 2, message: 'Review recent transactions regularly' },
        { id: 3, message: 'Update your password' },
        { id: 4, message: 'Verify linked devices' },
    ];

    return (
        <div className="p-6 bg-white min-h-screen">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-8 text-indigo-600"
            >
                Security & Fraud Detection
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Risk Score Card */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-white rounded-lg shadow-lg"
                >
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-800">Risk Score</h2>
                        <FaShieldAlt className="text-2xl text-indigo-500" />
                    </div>
                    <div className="mt-4">
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-4 rounded-full bg-gray-200">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${riskData.score}%` }}
                                    transition={{ duration: 1 }}
                                    className={`h-full rounded-full ${
                                        riskData.score > riskData.threshold.high ? 'bg-green-500' : 
                                        riskData.score > riskData.threshold.medium ? 'bg-yellow-500' : 'bg-red-500'
                                    }`}
                                />
                            </div>
                        </div>
                        <p className="mt-2 text-lg font-bold text-gray-800">{riskData.score}/100</p>
                    </div>
                </motion.div>

                {/* Recent Alerts */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="p-6 bg-white rounded-lg shadow-lg"
                >
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-800">Recent Alerts</h2>
                        <FaBell className="text-2xl text-indigo-500" />
                    </div>
                    <div className="mt-4 space-y-3">
                        {alertData.map((alert) => (
                            <motion.div
                                key={alert.id}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className={`p-3 rounded-lg ${
                                    alert.type === 'critical' ? 'bg-red-100' :
                                    alert.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                                }`}
                            >
                                <p className="text-sm text-gray-800">{alert.message}</p>
                                <p className="text-xs text-gray-500 mt-1">{alert.date}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Security Tips */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="p-6 bg-white rounded-lg shadow-lg md:col-span-2"
                >
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-800">Security Recommendations</h2>
                        <FaLock className="text-2xl text-indigo-500" />
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {securityTips.map((tip) => (
                            <motion.div
                                key={tip.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * tip.id }}
                                className="flex items-center p-3 bg-indigo-50 rounded-lg"
                            >
                                <FaExclamationTriangle className="text-indigo-500 mr-2" />
                                <p className="text-sm text-gray-800">{tip.message}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
