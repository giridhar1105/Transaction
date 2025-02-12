"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LogoutPage() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [router]);

    const styles = {
        logoutContainer: {
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to right, #2193b0, #6dd5ed)',
        },
        messageBox: {
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
        },
        title: {
            fontSize: '2.5rem',
            color: '#333',
            marginBottom: '1rem',
        },
        message: {
            fontSize: '1.5rem',
            color: '#666',
            marginBottom: '0.5rem',
        },
        submessage: {
            fontSize: '1.2rem',
            color: '#888',
        }
    };

    const containerVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    };

    const textVariants = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    };

    return (
        <motion.div 
            style={styles.logoutContainer}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            <motion.div 
                style={styles.messageBox}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1 
                    style={styles.title}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.2 }}
                >
                    Thank You!
                </motion.h1>
                <motion.p 
                    style={styles.message}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.4 }}
                >
                    For visiting our website
                </motion.p>
                <motion.p 
                    style={styles.submessage}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.6 }}
                >
                    Please visit again soon!
                </motion.p>
            </motion.div>
        </motion.div>
    );
}