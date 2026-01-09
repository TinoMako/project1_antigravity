import Link from 'next/link';
import styles from './Search.module.css';

interface Opportunity {
    id: number;
    title: string;
    org: string;
    location: string;
    type: string;
    salary: string;
    tags: string[];
}

export default function OpportunityCard({ opp }: { opp: Opportunity }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <Link href={`/opportunities/${opp.id}`} className={styles.cardTitle}>
                    {opp.title}
                </Link>
                <div className={styles.orgName}>{opp.org}</div>

                <div className={styles.metaRow}>
                    <span>📍 {opp.location}</span>
                    <span>💼 {opp.type}</span>
                </div>

                <div className={styles.tags}>
                    {opp.tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>
            <div className={styles.cardFooter}>
                <span className={styles.salary}>{opp.salary}</span>
                <Link href={`/opportunities/${opp.id}`} className={styles.applyLink}>
                    View Details →
                </Link>
            </div>
        </div>
    );
}
