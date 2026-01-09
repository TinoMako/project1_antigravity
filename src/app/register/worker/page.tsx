'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import styles from '@/components/forms/MultiStepForm.module.css';

const STEPS = [
    { id: 1, label: 'Personal Info' },
    { id: 2, label: 'Qualifications' },
    { id: 3, label: 'Experience' },
    { id: 4, label: 'Documents' },
];

export default function WorkerRegistration() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Personal
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        // Step 2: Qualifications
        degree: '',
        specialization: '',
        certifications: '',
        skills: '',
        // Step 3: Experience
        yearsExperience: '',
        previousEmployer: '',
        bio: '',
        availability: '',
        // Step 4: Documents
        idDocument: null,
        certificationDoc: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for submission logic
        alert('Registration submitted! (Demo)');
    };

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Social Worker Registration</h1>
                    <p className={styles.subtitle}>Join our network and make a difference</p>
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
                    {/* Step 1: Personal Info */}
                    {currentStep === 1 && (
                        <>
                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label} htmlFor="firstName">First Name</label>
                                    <input className={styles.input} type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label} htmlFor="lastName">Last Name</label>
                                    <input className={styles.input} type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="email">Email Address</label>
                                <input className={styles.input} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label} htmlFor="phone">Phone Number</label>
                                    <input className={styles.input} type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label} htmlFor="location">Location / City</label>
                                    <input className={styles.input} type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
                                </div>
                            </div>
                        </>
                    )}

                    {/* Step 2: Qualifications */}
                    {currentStep === 2 && (
                        <>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="degree">Highest Degree</label>
                                <select className={styles.select} id="degree" name="degree" value={formData.degree} onChange={handleChange}>
                                    <option value="">Select...</option>
                                    <option value="bachelors">Bachelor&apos;s in Social Work</option>
                                    <option value="masters">Master&apos;s in Social Work</option>
                                    <option value="phd">PhD / Doctorate</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="specialization">Specialization</label>
                                <input className={styles.input} type="text" id="specialization" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="e.g., Child Welfare, Mental Health" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="certifications">Certifications (comma separated)</label>
                                <input className={styles.input} type="text" id="certifications" name="certifications" value={formData.certifications} onChange={handleChange} placeholder="e.g., LCSW, ACSW" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="skills">Key Skills (comma separated)</label>
                                <input className={styles.input} type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} placeholder="e.g., Crisis Intervention, Case Management" />
                            </div>
                        </>
                    )}

                    {/* Step 3: Experience */}
                    {currentStep === 3 && (
                        <>
                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label} htmlFor="yearsExperience">Years of Experience</label>
                                    <select className={styles.select} id="yearsExperience" name="yearsExperience" value={formData.yearsExperience} onChange={handleChange}>
                                        <option value="">Select...</option>
                                        <option value="0-1">0-1 years</option>
                                        <option value="2-5">2-5 years</option>
                                        <option value="5-10">5-10 years</option>
                                        <option value="10+">10+ years</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label} htmlFor="availability">Availability</label>
                                    <select className={styles.select} id="availability" name="availability" value={formData.availability} onChange={handleChange}>
                                        <option value="">Select...</option>
                                        <option value="full-time">Full-time</option>
                                        <option value="part-time">Part-time</option>
                                        <option value="contract">Contract</option>
                                        <option value="volunteer">Volunteer</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="previousEmployer">Previous Employer / Organization</label>
                                <input className={styles.input} type="text" id="previousEmployer" name="previousEmployer" value={formData.previousEmployer} onChange={handleChange} />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="bio">Short Bio / Summary</label>
                                <textarea className={styles.textarea} id="bio" name="bio" value={formData.bio} onChange={handleChange} placeholder="Tell us about yourself and your experience..." />
                            </div>
                        </>
                    )}

                    {/* Step 4: Documents */}
                    {currentStep === 4 && (
                        <>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Upload ID Document</label>
                                <div className={styles.fileUpload}>
                                    <p>Click or drag file to upload</p>
                                    <input type="file" name="idDocument" style={{ display: 'none' }} />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Upload Certifications</label>
                                <div className={styles.fileUpload}>
                                    <p>Click or drag file to upload</p>
                                    <input type="file" name="certificationDoc" style={{ display: 'none' }} />
                                </div>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Accepted formats: PDF, JPG, PNG. Max 5MB each.</p>
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
                            <button type="submit" className={`${styles.button} ${styles.buttonPrimary}`}>
                                Submit Registration
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
}
