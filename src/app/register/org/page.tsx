'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import styles from '@/components/forms/MultiStepForm.module.css';

const STEPS = [
    { id: 1, label: 'Organization Info' },
    { id: 2, label: 'Contact Person' },
    { id: 3, label: 'Verification' },
    { id: 4, label: 'Review & Terms' },
];

export default function OrgRegistration() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Org Info
        orgName: '',
        orgType: '',
        website: '',
        serviceAreas: '',
        address: '',
        // Step 2: Contact Person
        contactName: '',
        contactRole: '',
        contactEmail: '',
        contactPhone: '',
        // Step 3: Verification
        regNumber: '',
        taxId: '',
        verificationDoc: null,
        // Step 4: Terms
        acceptedTerms: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: checked }));
    };

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.acceptedTerms) {
            alert('Please accept the terms and conditions');
            return;
        }
        alert('Organization Registration submitted! (Demo)');
    };

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Organization Registration</h1>
                    <p className={styles.subtitle}>Partner with us to find qualified social workers</p>
                </header>

                {/* Progress Indicator */}
                <div className={styles.progressBar}>
                    {STEPS.map((step) => (
                        <div
                            key={step.id}
                            className={`${styles.step} ${currentStep === step.id ? styles.stepActive : ''} ${currentStep > step.id ? styles.stepComplete : ''}`}
                        >
                            <div className={styles.stepCircle}>{currentStep > step.id ? '✓' : step.id}</div>
                            <span className={styles.stepLabel}>{step.label}</span>
                        </div>
                    ))}
                </div>

                {/* Form Card */}
                <form className={styles.formCard} onSubmit={handleSubmit}>
                    {/* Step 1: Organization Info */}
                    {currentStep === 1 && (
                        <>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="orgName">Organization Name</label>
                                <input className={styles.input} type="text" id="orgName" name="orgName" value={formData.orgName} onChange={handleChange} required />
                            </div>
                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label} htmlFor="orgType">Organization Type</label>
                                    <select className={styles.select} id="orgType" name="orgType" value={formData.orgType} onChange={handleChange} required>
                                        <option value="">Select...</option>
                                        <option value="ngo">NGO / Non-Profit</option>
                                        <option value="government">Government Agency</option>
                                        <option value="private">Private Sector</option>
                                        <option value="community">Community Group</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label} htmlFor="website">Website (Optional)</label>
                                    <input className={styles.input} type="url" id="website" name="website" value={formData.website} onChange={handleChange} placeholder="https://" />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="serviceAreas">Service Areas</label>
                                <input className={styles.input} type="text" id="serviceAreas" name="serviceAreas" value={formData.serviceAreas} onChange={handleChange} placeholder="e.g., Youth Education, Elderly Care" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="address">Headquarters Address</label>
                                <textarea className={styles.textarea} id="address" name="address" value={formData.address} onChange={handleChange} rows={3} />
                            </div>
                        </>
                    )}

                    {/* Step 2: Contact Person */}
                    {currentStep === 2 && (
                        <>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="contactName">Contact Person Name</label>
                                <input className={styles.input} type="text" id="contactName" name="contactName" value={formData.contactName} onChange={handleChange} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="contactRole">Role / Job Title</label>
                                <input className={styles.input} type="text" id="contactRole" name="contactRole" value={formData.contactRole} onChange={handleChange} />
                            </div>
                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label} htmlFor="contactEmail">Work Email</label>
                                    <input className={styles.input} type="email" id="contactEmail" name="contactEmail" value={formData.contactEmail} onChange={handleChange} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label} htmlFor="contactPhone">Direct Phone</label>
                                    <input className={styles.input} type="tel" id="contactPhone" name="contactPhone" value={formData.contactPhone} onChange={handleChange} />
                                </div>
                            </div>
                        </>
                    )}

                    {/* Step 3: Verification */}
                    {currentStep === 3 && (
                        <>
                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label} htmlFor="regNumber">Registration Number</label>
                                    <input className={styles.input} type="text" id="regNumber" name="regNumber" value={formData.regNumber} onChange={handleChange} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label} htmlFor="taxId">Tax ID / EIN</label>
                                    <input className={styles.input} type="text" id="taxId" name="taxId" value={formData.taxId} onChange={handleChange} />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Upload Verification Documents (Registration Certificate)</label>
                                <div className={styles.fileUpload}>
                                    <p>Click or drag file to upload</p>
                                    <input type="file" name="verificationDoc" style={{ display: 'none' }} />
                                </div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                                    Please upload official documentation proving your organization&apos;s legal status.
                                </p>
                            </div>
                        </>
                    )}

                    {/* Step 4: Terms */}
                    {currentStep === 4 && (
                        <>
                            <div className={styles.formGroup}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>Terms and Conditions</h3>
                                <div style={{ background: 'var(--background)', padding: '1rem', borderRadius: '8px', maxHeight: '150px', overflowY: 'scroll', border: '1px solid var(--border)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                                    <p>1. By registering, you agree to provide accurate information about your organization.</p>
                                    <p>2. You agree to treat all social worker candidates with respect and non-discrimination.</p>
                                    <p>3. You verify that all opportunities posted are legitimate and comply with local labor laws.</p>
                                    <p>4. Social Connect reserves the right to verify your organization details and suspend accounts that violate our policies.</p>
                                    <p>5. Data privacy is important to us. Your data will be handled according to our Privacy Policy.</p>
                                </div>

                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                                    <input
                                        type="checkbox"
                                        name="acceptedTerms"
                                        checked={formData.acceptedTerms}
                                        onChange={handleCheckbox}
                                        style={{ width: '20px', height: '20px' }}
                                    />
                                    <span>I accept the Terms and Conditions and Privacy Policy</span>
                                </label>
                            </div>
                        </>
                    )}

                    {/* Navigation Buttons */}
                    <div className={styles.buttonGroup}>
                        {currentStep > 1 ? (
                            <button type="button" className={`${styles.button} ${styles.buttonSecondary}`} onClick={prevStep}>
                                Back
                            </button>
                        ) : (
                            <div />
                        )}
                        {currentStep < STEPS.length ? (
                            <button type="button" className={`${styles.button} ${styles.buttonPrimary}`} onClick={nextStep}>
                                Continue
                            </button>
                        ) : (
                            // Only enable submit if terms are checked (for good UX feel, though validation is in handler too)
                            <button
                                type="submit"
                                className={`${styles.button} ${styles.buttonPrimary}`}
                                style={{ opacity: formData.acceptedTerms ? 1 : 0.5, cursor: formData.acceptedTerms ? 'pointer' : 'not-allowed' }}
                                disabled={!formData.acceptedTerms}
                            >
                                Register Organization
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
}
