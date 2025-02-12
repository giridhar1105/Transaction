"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './logout.module.css';

export default function LogoutPage() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className={styles.logoutContainer}>
            <div className={styles.messageBox}>
                <h1 className={styles.title}>Thank You!</h1>
                <p className={styles.message}>For visiting our website</p>
                <p className={styles.submessage}>Please visit again soon!</p>
            </div>
        </div>
    );
</div>
)}