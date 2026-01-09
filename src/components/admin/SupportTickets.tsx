import styles from './Admin.module.css';

export default function SupportTickets() {
    const tickets = [
        { id: 101, subject: 'Registration issue failure', user: 'Mike R.', priority: 'High', time: '1h ago' },
        { id: 102, subject: 'Question about job posting', user: 'Hope Fdn.', priority: 'Medium', time: '3h ago' },
        { id: 103, subject: 'Password reset not working', user: 'Lisa K.', priority: 'High', time: '5h ago' },
        { id: 104, subject: 'Delete my account request', user: 'Tom B.', priority: 'Low', time: '1d ago' },
    ];

    return (
        <div className={styles.section}>
            <div className={styles.sectionTitle}>
                Support Requests
                <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 400 }}>4 pending</span>
            </div>
            <ul className={styles.ticketList}>
                {tickets.map(ticket => (
                    <li key={ticket.id} className={styles.ticketItem}>
                        <div className={styles.ticketHeader}>
                            <span className={styles.ticketSubject}>{ticket.subject}</span>
                            <span className={styles.ticketPriority}>{ticket.priority}</span>
                        </div>
                        <div className={styles.ticketMeta}>
                            From: {ticket.user} • {ticket.time}
                        </div>
                    </li>
                ))}
            </ul>
            <button style={{ width: '100%', marginTop: '1rem', padding: '0.75rem', border: '1px solid #e2e8f0', background: 'transparent', borderRadius: '6px', cursor: 'pointer', color: '#475569', fontWeight: 500 }}>
                View All Tickets
            </button>
        </div>
    );
}
