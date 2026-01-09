import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>
                Connecting Social Workers with Communities in Need
            </h1>
            <p className={styles.subtitle}>
                A centralized platform to find meaningful opportunities, manage cases, and make a real impact where it matters most.
            </p>

            <div className={styles.ctaGroup}>
                <Link href="/register/worker" className={`${styles.button} ${styles.primary}`}>
                    Register as Social Worker
                </Link>
                <Link href="/register/org" className={`${styles.button} ${styles.secondary}`}>
                    Register as Organization
                </Link>
            </div>
        </section>
    );
}
