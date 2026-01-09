import styles from './Admin.module.css';

export default function UserManagement() {
    const users = [
        { id: 1, name: 'Sarah Connor', email: 'sarah@example.com', role: 'Worker', status: 'Active' },
        { id: 2, name: 'Hope Foundation', email: 'admin@hope.org', role: 'Organization', status: 'Pending' },
        { id: 3, name: 'John Doe', email: 'john@example.com', role: 'Worker', status: 'Suspended' },
        { id: 4, name: 'City Outreach', email: 'contact@city.gov', role: 'Organization', status: 'Active' },
        { id: 5, name: 'Emily Blunt', email: 'emily@example.com', role: 'Worker', status: 'Active' },
    ];

    return (
        <div className={styles.section}>
            <div className={styles.sectionTitle}>
                Recent Users
                <button className={styles.actionBtn}>Export CSV</button>
            </div>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>
                                    <div style={{ fontWeight: 500 }}>{user.name}</div>
                                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{user.email}</div>
                                </td>
                                <td>
                                    <span className={`${styles.roleBadge} ${user.role === 'Worker' ? styles.roleWorker : styles.roleOrg}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td>
                                    <span style={{
                                        color: user.status === 'Active' ? 'green' : user.status === 'Suspended' ? 'red' : 'orange',
                                        fontWeight: 500,
                                        fontSize: '0.9rem'
                                    }}>
                                        {user.status}
                                    </span>
                                </td>
                                <td>
                                    <button className={styles.actionBtn}>Edit</button>
                                    <button className={`${styles.actionBtn} ${styles.deleteBtn}`}>Suspend</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
