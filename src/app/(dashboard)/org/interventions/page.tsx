'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from '@/components/interventions/Interventions.module.css';

// Mock Data
const INITIAL_INTERVENTIONS = [
    { id: 1, title: 'Youth Mentorship Program', status: 'Active', description: 'Weekly mentorship sessions for at-risk youth in Cape Town.', progress: 75, target: '100 Youth Reached' },
    { id: 2, title: 'Food Sensitivity Drive', status: 'Active', description: 'Collecting and distributing allergy-safe food parcels.', progress: 30, target: '500 Families' },
    { id: 3, title: 'Senior Digital Literacy', status: 'Planning', description: 'Teaching seniors how to use smartphones for banking and connection.', progress: 0, target: '50 Seniors' },
];

export default function InterventionsPage() {
    const [interventions, setInterventions] = useState(INITIAL_INTERVENTIONS);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        const newId = interventions.length + 1;
        setInterventions([...interventions, {
            id: newId,
            title: newTitle,
            status: 'Active',
            description: newDesc,
            progress: 0,
            target: 'TBD'
        }]);
        setIsModalOpen(false);
        setNewTitle('');
        setNewDesc('');
    };

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <Link href="/org" style={{ color: 'var(--text-muted)' }}>← Back to Dashboard</Link>
                </div>

                <header className={styles.header}>
                    <h1 className={styles.pageTitle}>Intervention Management</h1>
                    <button className={styles.addButton} onClick={() => setIsModalOpen(true)}>
                        + Create New Intervention
                    </button>
                </header>

                <div className={styles.grid}>
                    {interventions.map((int) => (
                        <div key={int.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div>
                                    <h3 className={styles.cardTitle}>{int.title}</h3>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Target: {int.target}</div>
                                </div>
                                <span className={styles.cardStatus}>{int.status}</span>
                            </div>

                            <p className={styles.cardDesc}>{int.description}</p>

                            <div className={styles.metrics}>
                                <div className={styles.metricRow}>
                                    <span>Progress</span>
                                    <span>{int.progress}%</span>
                                </div>
                                <div className={styles.progressBarBG}>
                                    <div className={styles.progressBarFill} style={{ width: `${int.progress}%` }}></div>
                                </div>
                            </div>

                            <div className={styles.cardFooter}>
                                <button className={styles.iconButton} title="View Details">👁️</button>
                                <button className={styles.iconButton} title="Edit">✏️</button>
                                <button className={styles.iconButton} title="Report Impact">📊</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Create Modal */}
                {isModalOpen && (
                    <div className={styles.overlay}>
                        <div className={styles.modal}>
                            <h2 className={styles.modalTitle}>New Intervention</h2>
                            <form onSubmit={handleCreate}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Program Title</label>
                                    <input
                                        className={styles.input}
                                        value={newTitle}
                                        onChange={(e) => setNewTitle(e.target.value)}
                                        placeholder="e.g. Winter Warmth Drive"
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Description</label>
                                    <textarea
                                        className={styles.textarea}
                                        rows={4}
                                        value={newDesc}
                                        onChange={(e) => setNewDesc(e.target.value)}
                                        placeholder="Briefly describe the goals..."
                                        required
                                    />
                                </div>
                                <div className={styles.modalActions}>
                                    <button type="button" className={styles.cancelBtn} onClick={() => setIsModalOpen(false)}>Cancel</button>
                                    <button type="submit" className={styles.submitBtn}>Create Program</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
