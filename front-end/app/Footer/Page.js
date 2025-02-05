"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
    return (
        <motion.footer 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-purple-500 via-blue-500 to-red-500 text-white py-8"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="text-center"
                    >
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <Link href="/contact" className="hover:text-yellow-300 transition-colors duration-300">
                            Get Support
                        </Link>
                    </motion.div>

                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="text-center"
                    >
                        <h3 className="text-xl font-bold mb-4">Privacy Policy</h3>
                        <Link href="/privacy" className="hover:text-yellow-300 transition-colors duration-300">
                            Read Policy
                        </Link>
                    </motion.div>

                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="text-center"
                    >
                        <h3 className="text-xl font-bold mb-4">Terms of Service</h3>
                        <Link href="/terms" className="hover:text-yellow-300 transition-colors duration-300">
                            View Terms
                        </Link>
                    </motion.div>

                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="text-center"
                    >
                        <h3 className="text-xl font-bold mb-4">Help Center</h3>
                        <Link href="/faq" className="hover:text-yellow-300 transition-colors duration-300">
                            Visit FAQ
                        </Link>
                    </motion.div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;