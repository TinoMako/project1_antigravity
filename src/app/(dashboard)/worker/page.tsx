import Link from 'next/link';
import styles from '@/components/dashboard/Dashboard.module.css';
import StatCard from '@/components/dashboard/StatCard';
import RecommendedOpportunities from '@/components/dashboard/RecommendedOpportunities';
import RecentActivity from '@/components/dashboard/RecentActivity';
import Navbar from '@/components/layout/Navbar';

export default function WorkerDashboard() {
    return (
        <div>
            <Navbar />
            <div className={styles.dashboardContainer}>
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarTitle}>My Dashboard</div>
                    <nav>
                        <Link href="/worker" className={`${styles.navItem} ${styles.activeNav}`}>Overview</Link>
                        <Link href="/worker/profile" className={styles.navItem}>My Profile</Link>
                        <Link href="/worker/applications" className={styles.navItem}>Applications</Link>
                        <Link href="/worker/saved" className={styles.navItem}>Saved Jobs</Link>
                        <Link href="/worker/settings" className={styles.navItem}>Settings</Link>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className={styles.mainContent}>
                    <div className={styles.header}>
                        <h1 className={styles.welcomeUser}>Welcome back, Sarah!</h1>
                        <button className="button" style={{
                            backgroundColor: 'var(--primary)',
                            color: 'white',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            fontWeight: 600,
                            cursor: 'pointer'
                        }}>
                            Edit Profile
                        </button>
                    </div>

                    {/* Stats Row */}
                    <div className={styles.statsGrid}>
                        <StatCard label="Applications Sent" value={12} />
                        <StatCard label="Profile Views" value={45} />
                        <StatCard label="Opportunities Matched" value={8} />
                    </div>

                    {/* Content Grid */}
                    <div className={styles.contentGrid}>
                        <RecommendedOpportunities />
                        <RecentActivity />
                    </div>
                </main>
            </div>
        </div>
    );
}
