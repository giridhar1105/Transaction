"use client"

import { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaCog, FaHistory, FaShieldAlt, FaBell, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const menuItems = [
        { title: 'Dashboard', icon: <FaHome />, path: '/', color: 'hover:bg-blue-600' },
        { title: 'Account Settings', icon: <FaCog />, path: '/settings', color: 'hover:bg-purple-600' },
        { title: 'Transaction History', icon: <FaHistory />, path: '/transactions', color: 'hover:bg-green-600' },
        { title: 'Fraud Detection', icon: <FaShieldAlt />, path: '/fraud-detection', color: 'hover:bg-red-600' },
        { title: 'Notifications', icon: <FaBell />, path: '/notifications', color: 'hover:bg-yellow-600' },
        { title: 'Logout', icon: <FaSignOutAlt />, path: '/logout', color: 'hover:bg-pink-600' },
    ];

    return (
        <div className={`bg-gradient-to-b from-indigo-900 to-purple-900 text-white h-screen transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
            <button
                className="p-4 w-full text-right bg-opacity-20 bg-white hover:bg-opacity-30 transition-all"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? '←' : '→'}
            </button>
            
            <nav className="mt-5">
                {menuItems.map((item, index) => (
                    <Link 
                        key={index} 
                        href={item.path}
                        className={`flex items-center p-4 ${item.color} transition-all duration-200 border-l-4 border-transparent hover:border-white`}
                    >
                        <span className="text-xl text-white">{item.icon}</span>
                        {isOpen && (
                            <span className="ml-4 font-medium tracking-wide">
                                {item.title}
                            </span>
                        )}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;