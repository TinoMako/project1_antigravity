import styles from '@/components/dashboard/Dashboard.module.css';

export default function RecentApplications() {
    const applications = [
        { id: 1, name: 'Grace M.', role: 'Senior Social Worker', date: '30m ago' },
        { id: 2, name: 'David K.', role: 'Community Outreach', date: '2h ago' },
        { id: 3, name: 'Thandi S.', role: 'Senior Social Worker', date: '4h ago' },
        { id: 4, name: 'Michael B.', role: 'Crisis Counselor', date: '1d ago' },
    ];

    return (
        <div className={styles.sectionCard}>
            <div className={styles.sectionTitle}>Recent Applications</div>
            <ul className={styles.list}>
                {applications.map((app) => (
                    <li key={app.id} className={styles.listItem}>
                        <div className={styles.itemHeader}>
                            <span className={styles.itemTitle}>{app.name}</span>
                        </div>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-main)' }}>Applied for: {app.role}</p>
                        <span className={styles.itemMeta}>{app.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
