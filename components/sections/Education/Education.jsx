"use client";

import { motion } from "framer-motion";
import styles from "./Education.module.scss";

const education = [
    {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Aditya College of Engineering and Technology",
        location: "Surampalem, India",
        year: "2021 - 2025",
        score: "CGPA: 8.87/10",
    },
    {
        degree: "Intermediate Education (MPC)",
        institution: "Narayana Junior College",
        location: "Kakinada, India",
        year: "2019 - 2021",
        score: "CGPA: 9.61/10",
    },
    {
        degree: "Secondary School Certificate",
        institution: "Narayana E-Techno School",
        location: "Kakinada, India",
        year: "2019",
        score: "GPA: 10/10",
    },
];

const certifications = [
    "Wipro TalentNext Project Based Learning Program (Java Full Stack)",
    "Udemy: The Complete 2023 Web Development Bootcamp",
    "MongoDB Data Modeling and Aggregations",
    "Infosys Springboard: Python & Data Structures",
];

export function Education() {
    return (
        <section id="education" className={styles.education}>
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Education & Certifications
                </motion.h2>

                <div className={styles.grid}>
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3>{edu.degree}</h3>
                            <span className={styles.institution}>{edu.institution}</span>
                            <span className={styles.year}>• {edu.year}</span>
                            <div className={styles.info}>
                                <span>{edu.location}</span>
                            </div>
                            <span className={styles.score}>{edu.score}</span>
                        </motion.div>
                    ))}

                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3>Certifications</h3>
                        <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-gray-600">
                            {certifications.map((cert, i) => (
                                <li key={i}>{cert}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
