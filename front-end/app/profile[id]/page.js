"use client";

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

    // Data for profile, tabs, and content
    const profileData = {
        name: 'Giridhara D',
        email: 'giridhaar1105@gmail.com.com',
        phone: '+91 8660304942',
        avatar: 'https://via.placeholder.com/150'
    };

    const tabs = [
        { id: 'personal', label: 'Personal' },
        { id: 'security', label: 'Security' },
        { id: 'activity', label: 'Activity' }
    ];

    const personalInfo = {
        fullName: 'John Doe',
        phoneNumber: '+1 234 567 8900'
    };

    const securitySettings = [
        {
            id: 'password',
            icon: <FaLock className="text-blue-500" />,
            label: 'Password',
            description: 'Last changed 30 days ago',
            actionLabel: 'Change',
        },
        {
            id: 'twoFactor',
            icon: <FaShieldAlt className="text-blue-500" />,
            label: 'Two-Factor Authentication',
            description: 'Currently enabled',
            actionLabel: 'Manage',
        }
    ];

    const activityLogs = [
        {
            id: 1,
            icon: <FaHistory className="text-blue-500" />,
            label: 'Login from new device',
            time: '2 hours ago'
        },
        {
            id: 2,
            icon: <FaHistory className="text-blue-500" />,
            label: 'Password changed',
            time: '1 day ago'
        },
        {
            id: 3,
            icon: <FaHistory className="text-blue-500" />,
            label: 'Email address changed',
            time: '3 days ago'
        }
    ];

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
                                src={profileData.avatar}
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover"
                            />
                            <button className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white">
                                <FaUser />
                            </button>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-black">{profileData.name}</h1>
                            <p className="text-black">{profileData.email}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div variants={itemVariants} className="flex mb-6 space-x-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-lg font-medium transition-all ${
                                activeTab === tab.id
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white text-black hover:bg-gray-50'
                            }`}
                        >
                            {tab.label}
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
                            <h2 className="text-xl font-bold mb-4 text-black">Personal Information</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-black">Full Name</p>
                                        <p className="font-medium text-black">{personalInfo.fullName}</p>
                                    </div>
                                    <button
                                        onClick={() => setIsEditing(!isEditing)}
                                        className="text-blue-500 hover:text-blue-600"
                                    >
                                        Edit
                                    </button>
                                </div>
                                <div>
                                    <p className="text-black">Phone Number</p>
                                    <p className="font-medium text-black">{personalInfo.phoneNumber}</p>
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
                                <h2 className="text-xl font-bold mb-4 text-black">Security Settings</h2>
                                <div className="space-y-4">
                                    {securitySettings.map(setting => (
                                        <div key={setting.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                            <div className="flex items-center space-x-4">
                                                {setting.icon}
                                                <div>
                                                    <p className="font-medium text-black">{setting.label}</p>
                                                    <p className="text-sm text-black">{setting.description}</p>
                                                </div>
                                            </div>
                                            <button className="text-blue-500 hover:text-blue-600">{setting.actionLabel}</button>
                                        </div>
                                    ))}
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
                            <h2 className="text-xl font-bold mb-4 text-black">Recent Activity</h2>
                            <div className="space-y-4">
                                {activityLogs.map((log) => (
                                    <div key={log.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                        {log.icon}
                                        <div>
                                            <p className="font-medium text-black">{log.label}</p>
                                            <p className="text-sm text-black">{log.time}</p>
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
