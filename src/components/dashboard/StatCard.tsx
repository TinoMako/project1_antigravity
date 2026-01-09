import styles from './Dashboard.module.css';

interface StatCardProps {
    label: string;
    value: string | number;
}

export default function StatCard({ label, value }: StatCardProps) {
    return (
        <div className={styles.statCard}>
            <span className={styles.statValue}>{value}</span>
            <span className={styles.statLabel}>{label}</span>
        </div>
    );
}
