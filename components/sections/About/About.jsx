"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./About.module.scss";
import { ResumeModal } from "@/components/ui/ResumeModal";

const skills = [
    { name: "Python", color: "#306998" },
    { name: "React.js", color: "#61dafb" },
    { name: "Next.js", color: "#111111" },
    { name: "Node.js", color: "#3c873a" },
    { name: "MongoDB", color: "#47a248" },
    { name: "Java", color: "#f89820" },
    { name: "C", color: "#00599c" },
    { name: "HTML", color: "#e34c26" },
    { name: "CSS", color: "#264de4" },
    { name: "SCSS", color: "#cc6699" },
    { name: "Tailwind CSS", color: "#06b6d4" },
    { name: "MySQL", color: "#4479a1" },
];

const softSkills = ["Analytical Skills", "Communication Skills", "Problem Solving"];

export function About() {
    const [isCertModalOpen, setIsCertModalOpen] = useState(false);
    const [currentCertUrl, setCurrentCertUrl] = useState("/KATTUMURI MADHU.pdf");




    const openCertificate = (e, url) => {
        e.preventDefault();
        setCurrentCertUrl(url);
        setIsCertModalOpen(true);
    };

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>
                    About <span>Me</span>
                </h2>

                {/* Bio Section - Full Width */}
                <div className={styles.bioSection}>
                    <h3>Who I Am</h3>
                    <p>
                        Motivated B-Tech student with a strong interest in Full-Stack Development. Experienced in building end-to-end web applications using technologies like Python, React, Node.js, and MongoDB. Skilled in developing secure, scalable systems and integrating advanced features into real-world projects. Passionate about solving complex problems through clean, efficient code, modern technologies, and practical, user-focused solutions. A quick learner and collaborative team player, eager to grow, adapt, and contribute meaningfully in innovative, technology-driven environments.
                    </p>
                </div>

                {/* Skills Section - Full Width */}
                <div className={styles.skillsContainer}>
                    <div className={styles.skillGroup}>
                        <h3>Technical Skills</h3>
                        <div className={styles.skillCloud}>
                            {skills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className={styles.skillTag}
                                    style={{ backgroundColor: skill.color }}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.skillGroup}>
                        <h3>Soft Skills</h3>
                        <div className={styles.skillCloud}>
                            {softSkills.map((skill) => (
                                <span
                                    key={skill}
                                    className={styles.skillTag}
                                    style={{ backgroundColor: '#64748b' }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Timeline Grid: Education & Experience & Certifications */}
                <div className={styles.timelineGrid}>
                    {/* Left Column (Education & Certifications) */}
                    <div className={styles.leftColumn}>
                        <div
                            className={styles.column}
                            style={{ order: 1 }}
                        >
                            <h3>Education</h3>
                            <div className={styles.timelineList}>
                                <div className={styles.timelineItem}>
                                    <h4>BTech – Computer Science and Engineering (AI&ML)</h4>
                                    <p>Nadimpalli Satyanarayana Raju Institute of Technology</p>
                                    <p className={styles.date}>• Oct 2022 - April 2026</p>
                                    <p className={styles.meta}>GPA: 8.38</p>
                                </div>
                                <div className={styles.timelineItem}>
                                    <h4>Board of Intermediate (MPC)</h4>
                                    <p>Sri Chaitanya Jr College</p>
                                    <p className={styles.date}>• June 2020 – May 2022</p>
                                    <p className={styles.meta}>Percentage: 91.3%</p>
                                </div>
                                <div className={styles.timelineItem}>
                                    <h4>Board of Secondary Education</h4>
                                    <p>Navya Vikas Em High School</p>
                                    <p className={styles.date}>• June 2019 – May 2020</p>
                                    <p className={styles.meta}>GPA: 10</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className={styles.column}
                            style={{ order: 3 }}
                        >
                            <h3>Certifications</h3>
                            <div className={styles.timelineList}>
                                <div className={styles.timelineItem}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                                        <h4 style={{ margin: 0 }}>Introduction to Machine Learning and AI</h4>
                                        <p className={styles.company} style={{ margin: 0 }}>Edx</p>
                                    </div>
                                </div>
                                <div className={styles.timelineItem}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                                        <h4 style={{ margin: 0 }}>Introduction to R Programming</h4>
                                        <p className={styles.company} style={{ margin: 0 }}>Edx</p>
                                    </div>
                                </div>
                                <div className={styles.timelineItem}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                                        <h4 style={{ margin: 0 }}>Introduction to AI&amp;ML</h4>
                                        <p className={styles.company} style={{ margin: 0 }}>Raspberry Pi Foundation</p>
                                    </div>
                                </div>
                                <div className={styles.timelineItem}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                                        <h4 style={{ margin: 0 }}>Overview of Building Apps on AWS</h4>
                                        <p className={styles.company} style={{ margin: 0 }}>MongoDB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={styles.column}
                            style={{ order: 4 }}
                        >
                            <h3>Achievements &amp; Activities</h3>
                            <div className={styles.timelineList}>
                                <div className={styles.timelineItem}>
                                    <h4>Research &amp; Innovation: AI in Education</h4>
                                    <p className={styles.description}>
                                        Published a Technical paper titled &quot;Application of Artificial Intelligence in Education&quot; in the International Journal of Innovative Research in computer.
                                    </p>
                                </div>
                                <div className={styles.timelineItem}>
                                    <h4>Research &amp; Innovation: AI Social Media Systems</h4>
                                    <p className={styles.description}>
                                        Published a Technical paper titled &quot;AI-Based Automated Social Media Content Creation and Posting System&quot;.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Experience) */}
                    <div className={styles.rightColumn}>
                        <div
                            className={styles.column}
                            style={{ order: 2 }}
                        >
                            <h3>Internship Experience</h3>
                            <div className={styles.timelineList}>
                                <div className={styles.timelineItem}>
                                    <h4>AI Deployment & Automation Virtual Internship</h4>
                                    <p className={styles.company}>EduSkills & AICTE</p>
                                    <div className={styles.dateRow}>
                                        <p className={styles.date}>• Jan 2026 - Mar 2026</p>
                                        <button
                                            type="button"
                                            onClick={(e) => openCertificate(e, "/Ai deploy.pdf")}
                                            className={styles.certLink}
                                        >
                                            View Certificate
                                        </button>
                                    </div>
                                    <p className={styles.description}>
                                        Gained hands-on experience in deploying artificial intelligence models and building automation pipelines. Learned the fundamentals of model serving, performance optimization, and integrating AI features into production environments.
                                    </p>
                                </div>
                                <div className={styles.timelineItem}>
                                    <h4>IoT Cloud Engineer Virtual Internship</h4>
                                    <p className={styles.company}>EduSkills & AWS Skill Builder</p>
                                    <div className={styles.dateRow}>
                                        <p className={styles.date}>• Oct 2025 - Dec 2025</p>
                                        <button
                                            type="button"
                                            onClick={(e) => openCertificate(e, "/iot.pdf")}
                                            className={styles.certLink}
                                        >
                                            View Certificate
                                        </button>
                                    </div>
                                    <p className={styles.description}>
                                        Explored the fundamentals of Internet of Things (IoT) and cloud integration using AWS services. Learned to manage connected devices, process telemetry data, and implement secure cloud architectures for IoT solutions.
                                    </p>
                                </div>
                                <div className={styles.timelineItem}>
                                    <h4>AI-ML Virtual Internship</h4>
                                    <p className={styles.company}>EduSkills & Google for Developers</p>
                                    <div className={styles.dateRow}>
                                        <p className={styles.date}>• Jul 2025 - Sep 2025</p>
                                        <button
                                            type="button"
                                            onClick={(e) => openCertificate(e, "/AIML.pdf")}
                                            className={styles.certLink}
                                        >
                                            View Certificate
                                        </button>
                                    </div>
                                    <p className={styles.description}>
                                        Developed practical skills in Artificial Intelligence and Machine Learning. Covered foundational concepts such as data processing, training algorithms, and evaluating predictive models using modern frameworks.
                                    </p>
                                </div>
                                <div className={styles.timelineItem}>
                                    <h4>Data Analytics Intern</h4>
                                    <p className={styles.company}>Andhra Pradesh State Skill Development Corporation (APSSDC)</p>
                                    <div className={styles.dateRow}>
                                        <p className={styles.date}>• April 2025 - June 2025</p>
                                        <button
                                            type="button"
                                            onClick={(e) => openCertificate(e, "/apssdc-intern.pdf")}
                                            className={styles.certLink}
                                        >
                                            View Certificate
                                        </button>
                                    </div>
                                    <p className={styles.description}>
                                        Learned data preprocessing, analysis, and visualization using Python libraries (Pandas, NumPy, Seaborn). Implemented machine learning models like logistic regression on sample datasets.
                                    </p>
                                </div>
                                <div className={styles.timelineItem}>
                                    <h4>Cloud and DevOps Intern</h4>
                                    <p className={styles.company}>Demy Software Solutions – Visakhapatnam, India</p>
                                    <div className={styles.dateRow}>
                                        <p className={styles.date}>• June 2024 - July 2024</p>
                                        <button
                                            type="button"
                                            onClick={(e) => openCertificate(e, "/demi-intern.pdf")}
                                            className={styles.certLink}
                                        >
                                            View Certificate
                                        </button>
                                    </div>
                                    <p className={styles.description}>
                                        Worked on real time DevOps tasks during a summer internship, including managing AWS EC2 instances, setting up CI/CD pipeline with Jenkins, and using Docker to streamline deployments. Actively contributed to deploying and managing applications while addressing real-world cloud and DevOps challenges.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificate Modal (Reusing ResumeModal component) */}
            <ResumeModal
                isOpen={isCertModalOpen}
                onClose={() => setIsCertModalOpen(false)}
                resumeUrl={currentCertUrl}
            />

            {/* Hidden links for prefetching heavy PDFs so they load instantly */}
            <div style={{ display: 'none' }}>
                <link rel="prefetch" href="/KATTUMURI MADHU.pdf" as="fetch" />
                <link rel="prefetch" href="/demi-intern.pdf" as="fetch" />
                <link rel="prefetch" href="/apssdc-intern.pdf" as="fetch" />
                <link rel="prefetch" href="/Ai deploy.pdf" as="fetch" />
                <link rel="prefetch" href="/iot.pdf" as="fetch" />
                <link rel="prefetch" href="/AIML.pdf" as="fetch" />
            </div>
        </section>
    );
}
