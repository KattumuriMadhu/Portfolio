"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Hero.module.scss";
import { ResumeModal } from "@/components/ui/ResumeModal";

import { useRef } from "react";

function TypingAnimation() {
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const cursorRef = useRef(null);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const fullText1 = "Full Stack ";
        const fullText2 = "Developer";
        const delay = 1000;
        const speed = 120; // Slower, more natural typing speed

        let startTime = null;
        let animationFrame;

        const tick = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            if (elapsed > delay) {
                const totalChars = Math.floor((elapsed - delay) / speed);

                if (totalChars <= fullText1.length) {
                    if (textRef1.current) {
                        textRef1.current.textContent = fullText1.slice(0, totalChars);
                    }
                } else if (totalChars <= fullText1.length + fullText2.length) {
                    if (textRef1.current && textRef1.current.textContent !== fullText1) {
                        textRef1.current.textContent = fullText1;
                    }
                    if (textRef2.current) {
                        textRef2.current.textContent = fullText2.slice(0, totalChars - fullText1.length);
                    }
                    if (cursorRef.current) {
                        cursorRef.current.classList.add(styles['gradient-cursor']);
                    }
                } else {
                    if (textRef2.current && textRef2.current.textContent !== fullText2) {
                        textRef2.current.textContent = fullText2;
                    }
                    setIsComplete(true);
                    return; // Stop animation
                }
            }
            animationFrame = requestAnimationFrame(tick);
        };

        animationFrame = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(animationFrame);
    }, []);

    useEffect(() => {
        if (isComplete) {
            const timeout = setTimeout(() => {
                if (cursorRef.current) {
                    cursorRef.current.style.display = 'none';
                }
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [isComplete]);

    return (
        <>
            <span ref={textRef1}></span>
            <span ref={textRef2} className={styles.highlight}></span>
            <span ref={cursorRef} className={styles.cursor}></span>
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
