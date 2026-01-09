import styles from './Search.module.css';

export default function FilterSidebar() {
    return (
        <aside className={styles.filtersSidebar}>
            <div className={styles.filterGroup}>
                <label className={styles.filterTitle}>Job Type</label>
                <label className={styles.checkboxLabel}><input type="checkbox" /> Full-time</label>
                <label className={styles.checkboxLabel}><input type="checkbox" /> Part-time</label>
                <label className={styles.checkboxLabel}><input type="checkbox" /> Contract</label>
                <label className={styles.checkboxLabel}><input type="checkbox" /> Volunteer</label>
            </div>

            <div className={styles.filterGroup}>
                <label className={styles.filterTitle}>Location</label>
                <label className={styles.checkboxLabel}><input type="checkbox" /> Johannesburg</label>
                <label className={styles.checkboxLabel}><input type="checkbox" /> Cape Town</label>
                <label className={styles.checkboxLabel}><input type="checkbox" /> Durban</label>
                <label className={styles.checkboxLabel}><input type="checkbox" /> Pretoria</label>
            </div>

            <div className={styles.filterGroup}>
                <label className={styles.filterTitle}>Skills / Area</label>
                <label className={styles.checkboxLabel}><input type="checkbox" /> Child Welfare</label>
                <label className={styles.checkboxLabel}><input type="checkbox" /> Mental Health</label>
                <label className={styles.checkboxLabel}><input type="checkbox" /> Crisis Management</label>
                <label className={styles.checkboxLabel}><input type="checkbox" /> Elderly Care</label>
            </div>

            <button style={{
                width: '100%',
                padding: '0.75rem',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 600,
                cursor: 'pointer',
                marginTop: '1rem'
            }}>
                Apply Filters
            </button>
        </aside>
    );
}
