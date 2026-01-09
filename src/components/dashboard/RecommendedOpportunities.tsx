import Link from 'next/link';
import styles from './Dashboard.module.css';

export default function RecommendedOpportunities() {
    const opportunities = [
        { id: 1, title: 'Youth Counselor', org: 'Hope Foundation', location: 'Cape Town', type: 'Full-time' },
        { id: 2, title: 'Community Outreach', org: 'City Health', location: 'Johannesburg', type: 'Contract' },
        { id: 3, title: 'Early Development', org: 'EduCare', location: 'Durban', type: 'Volunteer' },
    ];

    return (
        <div className={styles.sectionCard}>
            <div className={styles.sectionTitle}>
                Recommended for You
                <Link href="/opportunities" style={{ fontSize: '0.875rem', fontWeight: 400 }}>View All</Link>
            </div>
            <ul className={styles.list}>
                {opportunities.map((opp) => (
                    <li key={opp.id} className={styles.listItem}>
                        <div className={styles.itemHeader}>
                            <span className={styles.itemTitle}>{opp.title}</span>
                            <span className={styles.tag}>{opp.type}</span>
                        </div>
                        <div className={styles.itemMeta}>
                            {opp.org} • {opp.location}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
