"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaShieldAlt, FaHistory } from 'react-icons/fa';

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState('personal');
    const [isEditing, setIsEditing] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.5, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-4xl mx-auto"
            >
                {/* Profile Header */}
                <motion.div variants={itemVariants} className="bg-white rounded-lg p-6 mb-6 shadow-lg">
                    <div className="flex items-center space-x-6">
                        <div className="relative">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover"
                            />
                            <button className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white">
                                <FaUser />
                            </button>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">John Doe</h1>
                            <p className="text-gray-600">john.doe@example.com</p>
                        </div>
                    </div>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div variants={itemVariants} className="flex mb-6 space-x-4">
                    {['personal', 'security', 'activity'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 rounded-lg font-medium transition-all ${
                                activeTab === tab
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </motion.div>

                {/* Content Sections */}
                <motion.div variants={itemVariants} className="bg-white rounded-lg p-6 shadow-lg">
                    {activeTab === 'personal' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-gray-600">Full Name</p>
                                        <p className="font-medium">John Doe</p>
                                    </div>
                                    <button
                                        onClick={() => setIsEditing(!isEditing)}
                                        className="text-blue-500 hover:text-blue-600"
                                    >
                                        Edit
                                    </button>
                                </div>
                                <div>
                                    <p className="text-gray-600">Phone Number</p>
                                    <p className="font-medium">+1 234 567 8900</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'security' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <div>
                                <h2 className="text-xl font-bold mb-4">Security Settings</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div className="flex items-center space-x-4">
                                            <FaLock className="text-blue-500" />
                                            <div>
                                                <p className="font-medium">Password</p>
                                                <p className="text-sm text-gray-600">Last changed 30 days ago</p>
                                            </div>
                                        </div>
                                        <button className="text-blue-500 hover:text-blue-600">Change</button>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div className="flex items-center space-x-4">
                                            <FaShieldAlt className="text-blue-500" />
                                            <div>
                                                <p className="font-medium">Two-Factor Authentication</p>
                                                <p className="text-sm text-gray-600">Currently enabled</p>
                                            </div>
                                        </div>
                                        <button className="text-blue-500 hover:text-blue-600">Manage</button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'activity' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                            <div className="space-y-4">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                        <FaHistory className="text-blue-500" />
                                        <div>
                                            <p className="font-medium">Login from new device</p>
                                            <p className="text-sm text-gray-600">2 hours ago</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
}
