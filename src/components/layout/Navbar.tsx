import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                Social Connect
            </Link>

            <div className={styles.navLinks}>
                <Link href="/about" className={styles.link}>About</Link>
                <Link href="/opportunities" className={styles.link}>Opportunities</Link>
                <Link href="/organizations" className={styles.link}>Organizations</Link>
            </div>

            <div className={styles.authButtons}>
                <Link href="/login" className={`${styles.button} ${styles.login}`}>
                    Log In
                </Link>
                <Link href="/register/worker" className={`${styles.button} ${styles.register}`}>
                    Get Started
                </Link>
            </div>
        </nav>
    );
}
