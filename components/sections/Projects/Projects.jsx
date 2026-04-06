"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import styles from "./Projects.module.scss";
import { projects } from "@/lib/data";

export function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    My <span>Projects</span>
                </motion.h2>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.projectCard}
                            // Removed initial/whileInView to ensure visibility
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.glow} />

                            <div className={styles.glow} />

                            {/* Icons removed as per user request */}

                            <h3>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>

                            <div className={styles.tags}>
                                {project.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>

                            <div className={styles.links}>
                                <span
                                    onClick={() => window.open(project.links.github, "_blank")}
                                    className={styles.code}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <Github className="w-4 h-4" /> Code
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
