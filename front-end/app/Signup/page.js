"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiLock, FiUser, FiPhone, FiShield } from 'react-icons/fi';

export default function SignupPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        terms: false,
        privacy: false,
        otp: '' // New state for OTP
    });

    const [otpSent, setOtpSent] = useState(false); // New state for OTP sent status
    const [otpVerified, setOtpVerified] = useState(false); // New state for OTP verification status

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!otpSent) {
            // Trigger OTP sending logic here (you can integrate with an actual API for sending OTP)
            console.log('Sending OTP...');
            setOtpSent(true);
        } else if (!otpVerified) {
            // OTP verification logic (this should be a backend check)
            console.log('Verifying OTP...');
            if (formData.otp === '123456') { // Simulate OTP validation
                setOtpVerified(true);
                console.log('OTP Verified');
            } else {
                console.log('Invalid OTP');
            }
        } else {
            // Handle final form submission after OTP verification
            console.log('Form submitted with verified OTP');
            // Add your form submission logic here (e.g., API call to register user)
        }
    };

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 p-6 flex items-center justify-center">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 w-full max-w-2xl shadow-2xl"
            >
                <motion.h1 
                    variants={itemVariants}
                    className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                >
                    Create Your Account
                </motion.h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                                required
                            />
                        </div>
                        <div className="relative">
                            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                                required
                            />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative">
                        <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </motion.div>

                    {otpSent && !otpVerified && (
                        <motion.div variants={itemVariants} className="relative">
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                                value={formData.otp}
                                onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                                required
                            />
                        </motion.div>
                    )}

                    <motion.div variants={itemVariants} className="relative">
                        <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative">
                        <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative">
                        <FiShield className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            required
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-4">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded text-blue-500" required />
                            <span className="text-sm text-gray-600">I agree to the Terms and Conditions</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded text-blue-500" required />
                            <span className="text-sm text-gray-600">I agree to the Privacy Policy</span>
                        </label>
                    </motion.div>

                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        type="submit"
                    >
                        {otpSent && !otpVerified ? 'Verify OTP' : 'Create Account'}
                    </motion.button>

                    <motion.p variants={itemVariants} className="text-center text-gray-600 mt-4">
                        Already have an account?{" "}
                        <a href="/Login" className="text-blue-500 hover:underline">
                            Log in
                        </a>
                    </motion.p>
                </form>
            </motion.div>
        </div>
    );
}
