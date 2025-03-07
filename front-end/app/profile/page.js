"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaShieldAlt, FaHistory } from 'react-icons/fa';
import jwt_decode from 'jwt-decode';  // Import jwt-decode to decode the JWT token

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState('personal');
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        phone: '',
        avatar: ''  // You can update this with the actual avatar url later
    });

    useEffect(() => {
        // Retrieve JWT token from localStorage
        const token = localStorage.getItem('token');
        if (!token) {
            // Redirect to login if no token found
            window.location.href = '/login';
            return;
        }

        try {
            // Decode the JWT token and get the user ID
            const decodedToken = jwt_decode(token);
            const userId = decodedToken.userId;

            // Fetch user profile data using the userId
            fetch(`http://localhost:5000/api/profile/${userId}`)
                .then((response) => response.json())
                .then((data) => {
                    setProfileData({
                        name: data.full_name,
                        email: data.email,
                        phone: data.phone,
                        avatar: data.avatar || '' // Optional, if you store avatar images
                    });
                })
                .catch((error) => console.error('Error fetching profile data:', error));
        } catch (error) {
            console.error('Invalid token or error decoding it', error);
            window.location.href = '/login';
        }
    }, []);

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

    const tabs = [
        { id: 'personal', label: 'Personal' },
        { id: 'security', label: 'Security' },
        { id: 'activity', label: 'Activity' }
    ];

    const personalInfo = {
        fullName: profileData.name,
        phoneNumber: profileData.phone
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
                <motion.div variants={itemVariants} className="bg-white rounded-lg p-6 mb-6 shadow-lg">
                    <div className="flex items-center space-x-6">
                        <div className="relative">
                            <img
                                src={profileData.avatar || '/default-avatar.png'}
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

                    {/* Other tabs */}
                    {/* Add security and activity logs sections here */}
                </motion.div>
            </motion.div>
        </div>
    );
}
