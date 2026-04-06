"use client";

import { ArrowUp } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";
import styles from "./ScrollToTop.module.scss";

export function ScrollToTop() {
    const isVisible = useScroll(300);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`${styles.scrollToTop} ${isVisible ? styles.visible : ""}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <ArrowUp size={24} />
        </button>
    );
}
