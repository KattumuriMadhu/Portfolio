"use client";

import styles from "./Footer.module.scss";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    // Native CSS scroll-behavior: smooth handles this much more efficiently.

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>

                    {/* Brand Section */}
                    <div className={styles.brandColumn}>
                        <h3 className={styles.brand}>Madhu Kattumuri</h3>
                        <p className={styles.tagline}>
                            Building digital experiences with passion and precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linksColumn}>
                        <h4>Quick Links</h4>
                        <nav>
                            <a href="#" className={styles.navLink}>
                                Home
                            </a>
                            <a href="#about" className={styles.navLink}>
                                About
                            </a>
                            <a href="#projects" className={styles.navLink}>
                                Projects
                            </a>
                            <a href="#contact" className={styles.navLink}>
                                Contact
                            </a>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className={styles.socialColumn}>
                        <h4>Connect</h4>
                        <div className={styles.socialIcons}>

                            {/* GitHub */}
                            {/* GitHub */}
                            <div
                                onClick={() => window.open("https://github.com/KattumuriMadhu", "_blank")}
                                aria-label="GitHub Profile"
                                className={styles.socialLink}
                                role="button"
                                tabIndex={0}
                            >
                                <Github size={20} />
                            </div>

                            {/* LinkedIn */}
                            <div
                                onClick={() => window.open("https://www.linkedin.com/in/madhukattumuri/", "_blank")}
                                aria-label="LinkedIn Profile"
                                className={styles.socialLink}
                                role="button"
                                tabIndex={0}
                            >
                                <Linkedin size={20} />
                            </div>

                            {/* Gmail */}
                            <div
                                onClick={() => window.location.href = "mailto:kattumurimadhu@gmail.com"}
                                aria-label="Send Email"
                                className={styles.socialLink}
                                role="button"
                                tabIndex={0}
                            >
                                <Mail size={20} />
                            </div>

                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p>&copy; {currentYear} Madhu Kattumuri. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
