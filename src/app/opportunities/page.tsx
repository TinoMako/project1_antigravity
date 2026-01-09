'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import styles from '@/components/search/Search.module.css';
import FilterSidebar from '@/components/search/FilterSidebar';
import OpportunityCard from '@/components/search/OpportunityCard';

// Mock Data
const OPPORTUNITIES = [
    {
        id: 1,
        title: 'Senior Social Worker',
        org: 'Hope Foundation',
        location: 'Cape Town',
        type: 'Full-time',
        salary: 'R25k - R35k/pm',
        tags: ['Child Welfare', 'Case Management']
    },
    {
        id: 2,
        title: 'Community Outreach Coordinator',
        org: 'City Health Dept',
        location: 'Johannesburg',
        type: 'Contract',
        salary: 'R20k/pm',
        tags: ['Public Health', 'Community Organization']
    },
    {
        id: 3,
        title: 'Early Childhood Development Vol.',
        org: 'Bright Futures',
        location: 'Durban',
        type: 'Volunteer',
        salary: 'Stipend',
        tags: ['Education', 'Youth']
    },
    {
        id: 4,
        title: 'Crisis Intervention Specialist',
        org: 'Safe Haven',
        location: 'Pretoria',
        type: 'Full-time',
        salary: 'R30k - R40k/pm',
        tags: ['Mental Health', 'Crisis Mgmt']
    },
    {
        id: 5,
        title: 'Elderly Care Assistant',
        org: 'Golden Years',
        location: 'Cape Town',
        type: 'Part-time',
        salary: 'R150/hr',
        tags: ['Geriatrics', 'Home Care']
    },
];

export default function OpportunitiesPage() {
    const [view, setView] = useState<'list' | 'map'>('list');

    return (
        <div className={styles.pageContainer}>
            <Navbar />

            {/* Search Header */}
            <div className={styles.searchHeader}>
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>Find Opportunities</h1>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                        <div className={styles.searchBarGroup}>
                            <input type="text" placeholder="Search by job title or keyword..." className={styles.searchInput} />
                            <input type="text" placeholder="City or Postal Code" className={styles.searchInput} style={{ maxWidth: '200px' }} />
                            <button style={{ padding: '0 1.5rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Search</button>
                        </div>

                        <div className={styles.viewToggle}>
                            <button
                                className={`${styles.toggleButton} ${view === 'list' ? styles.active : ''}`}
                                onClick={() => setView('list')}
                            >
                                List View
                            </button>
                            <button
                                className={`${styles.toggleButton} ${view === 'map' ? styles.active : ''}`}
                                onClick={() => setView('map')}
                            >
                                Map View
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Layout */}
            <div className={styles.mainLayout}>
                <FilterSidebar />

                <main>
                    {view === 'list' ? (
                        <div className={styles.resultsGrid}>
                            {OPPORTUNITIES.map(opp => (
                                <OpportunityCard key={opp.id} opp={opp} />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.mapPlaceholder}>
                            <div style={{ textAlign: 'center' }}>
                                <p>🗺️ Interactive Map View</p>
                                <p style={{ fontSize: '1rem', marginTop: '1rem' }}>Displaying {OPPORTUNITIES.length} opportunities geographically.</p>
                                {/* Visual placeholder for map pins */}
                                <div style={{ position: 'relative', width: '300px', height: '200px', margin: '2rem auto', background: '#d1d5db', borderRadius: '8px' }}>
                                    <div style={{ position: 'absolute', top: '20%', left: '30%', fontSize: '1.5rem' }}>📍</div>
                                    <div style={{ position: 'absolute', top: '50%', left: '60%', fontSize: '1.5rem' }}>📍</div>
                                    <div style={{ position: 'absolute', top: '70%', left: '20%', fontSize: '1.5rem' }}>📍</div>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
