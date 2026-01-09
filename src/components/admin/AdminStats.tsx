import styles from './Admin.module.css';

export default function AdminStats() {
    return (
        <div className={styles.statsGrid}>
            <div className={styles.statCard}>
                <span className={styles.statValue}>6,243</span>
                <span className={styles.statLabel}>Total Social Workers</span>
            </div>
            <div className={styles.statCard} style={{ borderLeftColor: 'var(--secondary)' }}>
                <span className={styles.statValue}>215</span>
                <span className={styles.statLabel}>Organizations</span>
            </div>
            <div className={styles.statCard} style={{ borderLeftColor: 'var(--warning)' }}>
                <span className={styles.statValue}>854</span>
                <span className={styles.statLabel}>Active Job Posts</span>
            </div>
            <div className={styles.statCard} style={{ borderLeftColor: 'var(--error)' }}>
                <span className={styles.statValue}>12</span>
                <span className={styles.statLabel}>Pending Flags</span>
            </div>
        </div>
    );
}
