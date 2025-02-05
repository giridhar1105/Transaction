"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt with:', formData);
        // Add your login logic here
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
                className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-2xl"
            >
                <motion.h1 
                    variants={itemVariants}
                    className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                >
                    Welcome Back
                </motion.h1>

                <form onSubmit={handleSubmit} className="space-y-6">
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

                    <motion.div variants={itemVariants} className="flex items-center justify-between">
                        <label className="flex items-center space-x-2">
                            <input 
                                type="checkbox" 
                                className="rounded text-blue-500"
                                checked={formData.rememberMe}
                                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                            />
                            <span className="text-sm text-gray-600">Remember me</span>
                        </label>
                        <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                            Forgot Password?
                        </a>
                    </motion.div>

                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        type="submit"
                    >
                        Log In
                    </motion.button>

                    <motion.p variants={itemVariants} className="text-center text-gray-600 mt-4">
                        Don't have an account?{" "}
                        <a href="/signup" className="text-blue-500 hover:underline">
                            Sign up
                        </a>
                    </motion.p>
                </form>
            </motion.div>
        </div>
    );
}