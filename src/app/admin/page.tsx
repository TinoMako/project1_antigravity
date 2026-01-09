import Link from 'next/link';
import styles from '@/components/admin/Admin.module.css';
import AdminStats from '@/components/admin/AdminStats';
import UserManagement from '@/components/admin/UserManagement';
import SupportTickets from '@/components/admin/SupportTickets';

export default function AdminDashboard() {
    return (
        <div className={styles.adminContainer}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>Admin Panel</h1>
                    <p style={{ color: '#64748b' }}>Platform Overview & Management</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link href="/" style={{ padding: '0.5rem 1rem', background: 'white', borderRadius: '6px', textDecoration: 'none', color: '#475569', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                        View Site
                    </Link>
                    <div style={{ width: '40px', height: '40px', background: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                        A
                    </div>
                </div>
            </header>

            <AdminStats />

            <div className={styles.sectionGrid}>
                <UserManagement />
                <SupportTickets />
            </div>
        </div>
    );
}
