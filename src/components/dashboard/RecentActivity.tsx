import styles from './Dashboard.module.css';

export default function RecentActivity() {
    const activities = [
        { id: 1, text: 'Your application to "Senior Social Worker" was viewed', date: '2h ago' },
        { id: 2, text: 'New match found in your area', date: '5h ago' },
        { id: 3, text: 'Profile completeness reached 80%', date: '1d ago' },
    ];

    return (
        <div className={styles.sectionCard}>
            <div className={styles.sectionTitle}>Recent Activity</div>
            <ul className={styles.list}>
                {activities.map((act) => (
                    <li key={act.id} className={styles.listItem}>
                        <p style={{ marginBottom: '0.25rem', fontSize: '0.95rem' }}>{act.text}</p>
                        <span className={styles.itemMeta}>{act.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
