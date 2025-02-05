"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSignOut = () => {
        console.log('Sign out action');
    };

    return (
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Animated Logo */}
                <div className="flex items-center transform hover:scale-110 transition-transform duration-300">
                    <Link href="/">
                        <div className="text-2xl font-bold text-white animate-pulse">Logo</div>
                    </Link>
                </div>

                {/* Mobile Menu Button with animation */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden flex items-center space-x-2 transform hover:scale-105 transition-transform"
                >
                    <span className="text-white text-2xl hover:rotate-180 transition-transform duration-300">☰</span>
                </button>

                {/* Navigation Links (Desktop) with hover effects */}
                <nav className="hidden md:flex space-x-8">
                    {['Dashboard', 'Transactions', 'Fraud Alerts', 'Profile'].map((item) => (
                        <Link 
                            key={item}
                            href={`/${item.toLowerCase().replace(' ', '-')}`}
                            className="text-white hover:text-yellow-300 transform hover:scale-110 transition-all duration-300 hover:font-bold"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu with slide animation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 right-0 w-48 bg-white rounded-md shadow-lg py-2 animate-slideIn">
                        {['Dashboard', 'Transactions', 'Fraud Alerts', 'Profile'].map((item) => (
                            <Link 
                                key={item}
                                href={`/${item.toLowerCase().replace(' ', '-')}`}
                                className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-colors duration-300"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                )}

                {/* User Profile with pulse animation */}
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300"
                        aria-haspopup="true"
                        aria-expanded={isDropdownOpen ? 'true' : 'false'}
                    >
                        <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white hover:ring-yellow-300 transition-all duration-300">
                            <Image
                                src="/placeholder-avatar.jpg"
                                alt="User profile"
                                width={40}
                                height={40}
                                className="hover:opacity-90 transition-opacity duration-300"
                            />
                        </div>
                    </button>

                    {/* Dropdown with fade-in animation */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 animate-fadeIn">
                            {['My Profile', 'Settings'].map((item) => (
                                <Link 
                                    key={item}
                                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                                    className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-colors duration-300"
                                >
                                    {item}
                                </Link>
                            ))}
                            <button
                                onClick={handleSignOut}
                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-colors duration-300"
                            >
                                Sign out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}