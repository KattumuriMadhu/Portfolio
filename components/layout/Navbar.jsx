"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.scss";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Social", href: "#social" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        if (elem) {
            const headerOffset = 50; // Adjust this value based on your header height
            const elementPosition = elem.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsOpen(false);
        }
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Madhu <span>Kattumuri</span>
                </Link>

                <div className={styles.navInner}>
                    {/* Desktop Nav */}
                    <div className={styles.desktopMenu}>
                        {navItems.map((item) => (
                            <span
                                key={item.name}
                                className={styles.navLink}
                                onClick={(e) => handleNavClick(e, item.href)}
                                style={{ cursor: "pointer" }}
                            >
                                {item.name}
                            </span>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`${styles.mobileToggle} ${isOpen ? styles.open : ""}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Nav Drawer - Portaled to Body */}
                {mounted && createPortal(
                    <>
                        <div
                            className={`${styles.mobileBackdrop} ${isOpen ? styles.open : ""}`}
                            onClick={() => setIsOpen(false)}
                        />
                        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
                            {navItems.map((item) => (
                                <span
                                    key={item.name}
                                    className={styles.navLink}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </>,
                    document.body
                )}
            </div>
        </nav>
    );
}
