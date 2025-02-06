'use client';

import { useEffect, useState } from 'react';

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'info',
            title: 'Hackathon Registration Open',
            message: 'Registration for Fintech & Cybersecurity Hackathon is now open. Submit your proposals before the deadline.',
            date: '2024-01-20',
        },
        {
            id: 2,
            type: 'reminder',
            title: 'Submission Guidelines',
            message: 'Remember to include detailed functionality explanations and practical applications in your proposal.',
            date: '2024-01-21',
        },
        {
            id: 3,
            type: 'update',
            title: 'Problem Statement Updates',
            message: 'New details added for Fintech track: Focus on RBI compliance and NPCI integration.',
            date: '2024-01-22',
        }
    ]);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6">Notifications</h1>
            <div className="space-y-4">
                {notifications.map((notification) => (
                    <div 
                        key={notification.id}
                        className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex justify-between items-start">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {notification.title}
                            </h2>
                            <span className="text-sm text-gray-500">
                                {notification.date}
                            </span>
                        </div>
                        <p className="mt-2 text-gray-600">
                            {notification.message}
                        </p>
                        <div className="mt-2">
                            <span className={`inline-block px-2 py-1 text-sm rounded-full ${
                                notification.type === 'info' ? 'bg-blue-100 text-blue-800' :
                                notification.type === 'reminder' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                            }`}>
                                {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}