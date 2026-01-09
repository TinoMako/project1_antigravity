import styles from './Stats.module.css';

export default function Stats() {
    return (
        <section className={styles.statsSection}>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <span className={styles.number}>6,000+</span>
                    <span className={styles.label}>Social Workers</span>
                </div>
                <div className={styles.card}>
                    <span className={styles.number}>200+</span>
                    <span className={styles.label}>Organizations</span>
                </div>
                <div className={styles.card}>
                    <span className={styles.number}>500+</span>
                    <span className={styles.label}>Successful Placements</span>
                </div>
            </div>
        </section>
    );
}
