import Link from 'next/link';
import styles from '@/components/dashboard/Dashboard.module.css';
import StatCard from '@/components/dashboard/StatCard';
import ActiveOpportunities from '@/components/dashboard/ActiveOpportunities';
import RecentApplications from '@/components/dashboard/RecentApplications';
import InterventionOverview from '@/components/dashboard/InterventionOverview';
import Navbar from '@/components/layout/Navbar';

export default function OrgDashboard() {
    return (
        <div>
            <Navbar />
            <div className={styles.dashboardContainer}>
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarTitle}>Organization</div>
                    <nav>
                        <Link href="/org" className={`${styles.navItem} ${styles.activeNav}`}>Overview</Link>
                        <Link href="/org/opportunities" className={styles.navItem}>My Opportunities</Link>
                        <Link href="/org/applicants" className={styles.navItem}>Applicants</Link>
                        <Link href="/org/interventions" className={styles.navItem}>Interventions</Link>
                        <Link href="/org/settings" className={styles.navItem}>Settings</Link>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className={styles.mainContent}>
                    <div className={styles.header}>
                        <h1 className={styles.welcomeUser}>Hope Foundation Dashboard</h1>
                        <Link href="/org/opportunities/new" className="button" style={{
                            backgroundColor: 'var(--primary)',
                            color: 'white',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textDecoration: 'none'
                        }}>
                            Post Opportunity
                        </Link>
                    </div>

                    {/* Stats Row */}
                    <div className={styles.statsGrid}>
                        <StatCard label="Active Posts" value={3} />
                        <StatCard label="Total Applicants" value={24} />
                        <StatCard label="Active Interventions" value={2} />
                    </div>

                    {/* Content Grid */}
                    <div className={styles.contentGrid}>
                        <ActiveOpportunities />
                        <RecentApplications />
                    </div>

                    <InterventionOverview />
                </main>
            </div>
        </div>
    );
}
