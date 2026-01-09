import Link from 'next/link';
import styles from '@/components/dashboard/Dashboard.module.css';

export default function ActiveOpportunities() {
    const opportunities = [
        { id: 1, title: 'Senior Social Worker', applicants: 12, status: 'Active', daysLeft: 5 },
        { id: 2, title: 'Community Outreach Volunteer', applicants: 4, status: 'Active', daysLeft: 12 },
        { id: 3, title: 'Crisis Counselor', applicants: 8, status: 'Closing Soon', daysLeft: 1 },
    ];

    return (
        <div className={styles.sectionCard}>
            <div className={styles.sectionTitle}>
                Active Opportunities
                <Link href="/org/opportunities/new" style={{ fontSize: '0.875rem', fontWeight: 600 }}>+ Post New</Link>
            </div>
            <ul className={styles.list}>
                {opportunities.map((opp) => (
                    <li key={opp.id} className={styles.listItem}>
                        <div className={styles.itemHeader}>
                            <span className={styles.itemTitle}>{opp.title}</span>
                            <span className={styles.tag} style={{ background: opp.status === 'Closing Soon' ? '#fff5f5' : 'var(--accent-green)', color: opp.status === 'Closing Soon' ? 'var(--error)' : 'var(--secondary)' }}>
                                {opp.status}
                            </span>
                        </div>
                        <div className={styles.itemMeta}>
                            {opp.applicants} Applicants • {opp.daysLeft} days remaining
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
