"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import styles from "./Social.module.scss";

export function Social() {
    return (
        <section id="social" className={styles.social}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    transition={{ duration: 0.8 }}
                >
                    Socials
                </motion.h2>

                <div className={styles.grid}>
                    <motion.div
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Button
                            className={`${styles.socialBtn} ${styles.linkedin}`}
                            onClick={() => window.open("https://www.linkedin.com/in/madhukattumuri/", "_blank")}
                        >
                            <Linkedin className="mr-2 h-6 w-6" /> LinkedIn
                        </Button>
                    </motion.div>

                    <motion.div
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Button
                            className={`${styles.socialBtn} ${styles.github}`}
                            onClick={() => window.open("https://github.com/KattumuriMadhu", "_blank")}
                        >
                            <Github className="mr-2 h-6 w-6" /> GitHub
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
