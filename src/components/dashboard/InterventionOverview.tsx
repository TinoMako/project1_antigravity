import styles from '@/components/dashboard/Dashboard.module.css';

export default function InterventionOverview() {
    return (
        <div className={styles.sectionCard} style={{ marginTop: '2rem' }}>
            <div className={styles.sectionTitle}>Intervention Tracking</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '8px' }}>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-main)' }}>Youth Mentorship Program</h4>
                    <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', margin: '0.5rem 0' }}>
                        <div style={{ width: '75%', height: '100%', background: 'var(--success)', borderRadius: '4px' }}></div>
                    </div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>75% Term Complete</span>
                </div>

                <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '8px' }}>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-main)' }}>Food Sensitivity Drive</h4>
                    <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', margin: '0.5rem 0' }}>
                        <div style={{ width: '30%', height: '100%', background: 'var(--warning)', borderRadius: '4px' }}></div>
                    </div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>30% Distribution Goal</span>
                </div>
            </div>
        </div>
    );
}
