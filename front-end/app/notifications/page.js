'use client';

import { useState, useEffect } from 'react';
import { Bell, Shield, AlertTriangle, UserCheck, Settings, Gift } from 'lucide-react';

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState([]);

    // Simulated notifications data
    useEffect(() => {
        // In a real app, this would come from an API
        setNotifications([
            {
                id: 1,
                type: 'security',
                title: 'New Login Detected',
                message: 'A new login was detected from Mumbai, India. Was this you?',
                timestamp: '2 minutes ago',
                icon: <Shield className="w-6 h-6 text-blue-500" />,
                priority: 'high'
            },
            {
                id: 2,
                type: 'transaction',
                title: 'Transaction Alert',
                message: 'Payment of ₹10,000 sent to John Doe. Transaction ID: TXN123456',
                timestamp: '5 minutes ago',
                icon: <Bell className="w-6 h-6 text-green-500" />,
                priority: 'medium'
            },
            {
                id: 3,
                type: 'fraud',
                title: 'Suspicious Activity',
                message: 'Multiple failed login attempts detected. Please verify your account security.',
                timestamp: '10 minutes ago',
                icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
                priority: 'high'
            }
        ]);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-gray-900">Notifications</h1>
                
                {/* Notification Filters */}
                <div className="flex gap-4 mb-6">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">All</button>
                    <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border">Security</button>
                    <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border">Transactions</button>
                    <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border">Updates</button>
                </div>

                {/* Notifications List */}
                <div className="space-y-4">
                    {notifications.map((notification) => (
                        <div 
                            key={notification.id}
                            className={`p-4 bg-white rounded-lg shadow-sm border-l-4 ${
                                notification.priority === 'high' ? 'border-red-500' :
                                notification.priority === 'medium' ? 'border-yellow-500' : 'border-blue-500'
                            }`}
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    {notification.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                                    <p className="text-gray-700 mt-1">{notification.message}</p>
                                    <span className="text-sm text-gray-500 mt-2 block">{notification.timestamp}</span>
                                </div>
                                <button className="text-gray-400 hover:text-gray-500">
                                    <Settings className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Notification Settings */}
                <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900">Notification Preferences</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium text-gray-900">Security Alerts</h3>
                                <p className="text-sm text-gray-500">Get notified about security-related activities</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium text-gray-900">Transaction Alerts</h3>
                                <p className="text-sm text-gray-500">Get notified about all transactions</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
