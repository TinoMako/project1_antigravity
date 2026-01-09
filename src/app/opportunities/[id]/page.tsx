import Navbar from '@/components/layout/Navbar';
import styles from '@/components/search/Detail.module.css';

// Mock Data Function (Simulating DB fetch)
function getOpportunity(id: string) {
    return {
        id,
        title: 'Senior Social Worker',
        org: 'Hope Foundation',
        location: 'Cape Town, Western Cape',
        type: 'Full-time',
        salary: 'R25,000 - R35,000 per month',
        posted: '2 days ago',
        description: `The Hope Foundation is seeking a dedicated Senior Social Worker to join our child welfare division. You will be responsible for managing complex cases, mentoring junior staff, and coordinating with local authorities to ensure the safety and well-being of vulnerable children.

    Responsibilities:
    • Conduct detailed assessments of children and families.
    • Develop and implement care plans.
    • Provide crisis intervention support.
    • Maintain accurate records in compliance with legal standards.
    • Collaborate with schools, healthcare providers, and police.
    
    This is a challenging but rewarding role that offers the chance to make a tangible difference in the community.`,
        requirements: [
            "Bachelor's degree in Social Work (BSW) or higher",
            "Registration with the SACSSP",
            "Minimum 5 years experience in child protection",
            "Valid driver's license",
            "Fluent in English and isiXhosa/Afrikaans"
        ],
        skills: ["Child Welfare", "Case Management", "Crisis Intervention", "Leadership"]
    };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const opp = getOpportunity(id);

    return (
        <>
            <Navbar />
            <div className={styles.detailContainer}>
                {/* Header */}
                <header className={styles.header}>
                    <h1 className={styles.title}>{opp.title}</h1>
                    <div className={styles.orgName}>{opp.org}</div>

                    <div className={styles.headerMeta}>
                        <div className={styles.metaItem}>📍 {opp.location}</div>
                        <div className={styles.metaItem}>💼 {opp.type}</div>
                        <div className={styles.metaItem}>💰 {opp.salary}</div>
                        <div className={styles.metaItem}>🕒 Posted {opp.posted}</div>
                    </div>
                </header>

                <div className={styles.contentGrid}>
                    {/* Main Content */}
                    <section className={styles.mainSection}>
                        <h2 className={styles.sectionTitle}>About the Opportunity</h2>
                        <div className={styles.description}>{opp.description}</div>

                        <h2 className={styles.sectionTitle}>Requirements</h2>
                        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                            {opp.requirements.map((req, i) => (
                                <li key={i}>{req}</li>
                            ))}
                        </ul>

                        <h2 className={styles.sectionTitle}>Required Skills</h2>
                        <div>
                            {opp.skills.map(skill => (
                                <span key={skill} className={styles.skillTag}>{skill}</span>
                            ))}
                        </div>
                    </section>

                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <button className={styles.applyButton}>Apply Now</button>
                        <button className={styles.saveButton}>♥ Save for Later</button>

                        <div style={{ marginTop: '2rem' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Location</h3>
                            <div className={styles.mapPreview}>
                                Map View
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                {opp.location}
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
