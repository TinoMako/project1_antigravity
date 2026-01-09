'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from '@/components/applications/Applications.module.css';

// Mock Data
const ALL_APPLICATIONS = [
    { id: 1, jobTitle: 'Senior Social Worker', org: 'Hope Foundation', date: '2 days ago', status: 'Under Review' },
    { id: 2, jobTitle: 'Community Outreach', org: 'City Health', date: '1 week ago', status: 'Applied' },
    { id: 3, jobTitle: 'Crisis Counselor', org: 'Safe Haven', date: '2 weeks ago', status: 'Rejected' },
    { id: 4, jobTitle: 'Youth Mentor', org: 'Bright Futures', date: '3 weeks ago', status: 'Accepted' },
];

export default function ApplicationsPage() {
    const [filter, setFilter] = useState('All');

    const filteredApps = filter === 'All'
        ? ALL_APPLICATIONS
        : ALL_APPLICATIONS.filter(app => app.status === filter);

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'Under Review': return styles.statusReview;
            case 'Accepted': return styles.statusAccepted;
            case 'Rejected': return styles.statusRejected;
            default: return styles.statusApplied;
        }
    };

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div style={{ paddingLeft: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Link href="/worker" style={{ color: 'var(--text-muted)' }}>← Back to Dashboard</Link>
                </div>
                <h1 className={styles.pageTitle}>My Applications</h1>

                {/* Filter Tabs */}
                <div className={styles.filterTabs}>
                    {['All', 'Applied', 'Under Review', 'Accepted', 'Rejected'].map(status => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`${styles.tab} ${filter === status ? styles.activeTab : ''}`}
                        >
                            {status}
                        </button>
                    ))}
                </div>

                {/* List */}
                <div className={styles.applicationList}>
                    {filteredApps.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                            No applications found in this category.
                        </div>
                    ) : (
                        filteredApps.map(app => (
                            <div key={app.id} className={styles.applicationCard}>
                                <div>
                                    <Link href={`/opportunities/${app.id}`} className={styles.jobTitle}>{app.jobTitle}</Link>
                                    <p className={styles.orgName}>{app.org}</p>
                                    <p className={styles.metaRow}>Applied {app.date}</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                                    <span className={`${styles.statusBadge} ${getStatusClass(app.status)}`}>
                                        {app.status}
                                    </span>

                                    {app.status === 'Applied' && (
                                        <button className={styles.withdrawButton} onClick={() => alert('Withdraw functionality demo')}>
                                            Withdraw
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}
