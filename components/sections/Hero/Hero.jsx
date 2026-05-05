"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Hero.module.scss";
import { ResumeModal } from "@/components/ui/ResumeModal";

function TypingAnimation() {
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const fullText = "Full Stack Developer";

    useEffect(() => {
        let typingInterval;
        const startTimeout = setTimeout(() => {
            let index = 0;
            typingInterval = setInterval(() => {
                setText(fullText.slice(0, index + 1));
                index++;
                if (index > fullText.length) {
                    clearInterval(typingInterval);
                    // Keep cursor for 2s then remove
                    setTimeout(() => setIsTyping(false), 2000);
                }
            }, 100);
        }, 1000); // 1s delay as requested

        return () => {
            clearTimeout(startTimeout);
            if (typingInterval) clearInterval(typingInterval);
        };
    }, []);

    return (
        <>
            {text.slice(0, 11)}
            {text.length > 11 && (
                <span className={styles.highlight}>{text.slice(11)}</span>
            )}
            {isTyping && (
                <span
                    className={`${styles.cursor} ${text.length > 11 ? styles['gradient-cursor'] : ''}`}
                ></span>
            )}
        </>
    );
}

export function Hero() {
    const [showResumeModal, setShowResumeModal] = useState(false);

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.auroraBackground}>
                <div className={styles.auroraBlob} />
                <div className={styles.auroraBlob} />
                <div className={styles.auroraBlob} />
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Hi, I&apos;m <span className={styles.firstName}>Madhu</span> <span className={styles.lastName}>Kattumuri</span>
                    </motion.h1>

                    <motion.h2
                        className={styles.typingText}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <TypingAnimation />
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Motivated B-Tech student and Full Stack Developer passionate about building robust web applications using React.js, Node.js, and Python.
                    </motion.p>
                    <motion.div
                        className={styles.buttons}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Button
                            size="lg"
                            className={styles.btnPrimary}
                            onClick={(e) => {
                                e.preventDefault();
                                const projectsSection = document.getElementById('projects');
                                if (projectsSection) {
                                    const yOffset = -80; // Match scroll margin
                                    const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                }
                            }}
                        >
                            View My Work
                        </Button>
                        <Button
                            size="lg"
                            className={styles.btnResume}
                            onClick={() => setShowResumeModal(true)}
                        >
                            <FileText className="mr-2 h-4 w-4" /> View Resume
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className={styles.btnContact}
                            onClick={(e) => {
                                e.preventDefault();
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                    const yOffset = -50; // Match scroll margin
                                    const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                }
                            }}
                        >
                            Contact Me
                        </Button>
                    </motion.div>
                </div>

                {/* Profile Image Column */}
                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className={styles.imageContainer}>
                        <img src="/profile.jpg" alt="Madhu Kattumuri" />
                    </div>
                </motion.div>
            </div>

            {/* Resume Modal */}
            <ResumeModal
                isOpen={showResumeModal}
                onClose={() => setShowResumeModal(false)}
            />
        </section>
    );
}
