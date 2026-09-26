"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Preloader = ({ onComplete }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timeout = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => clearTimeout(timeout);
    }, [onComplete]);

    const words = ["Kattumuri", "Madhu"];

    const preloaderContent = (
        <motion.div
            key="preloader-overlay"
            className="fixed inset-0 flex flex-col items-center justify-center select-none cursor-pointer"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 9999999,
                backgroundColor: "#030712",
                background: "radial-gradient(ellipse at 50% 45%, #0f172a 0%, #080d1a 50%, #020617 100%)",
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 1.03,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
            onClick={onComplete}
        >
            {/* Subtle luxury ambient glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at 40% 35%, rgba(59, 130, 246, 0.12) 0%, transparent 55%), radial-gradient(circle at 60% 65%, rgba(139, 92, 246, 0.10) 0%, transparent 55%)",
                }}
            />

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4">
                {/* Welcome Text */}
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="mb-3 sm:mb-4"
                >
                    <p className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.35em] sm:tracking-[0.45em] text-slate-400 uppercase text-center font-sans">
                        Welcome to
                    </p>
                </motion.div>

                {/* Name */}
                <div className="text-center flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-1 py-1 sm:py-2">
                    {words.map((word, wordIdx) => (
                        <span key={wordIdx} className="inline-flex whitespace-nowrap">
                            {word.split("").map((char, charIdx) => {
                                const totalIndex = wordIdx === 0 ? charIdx : words[0].length + charIdx;
                                return (
                                    <motion.span
                                        key={charIdx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.45,
                                            delay: 0.25 + totalIndex * 0.035,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black inline-block tracking-tight"
                                    >
                                        <span
                                            style={{
                                                background: "linear-gradient(180deg, #ffffff 0%, #e2e8f0 55%, #94a3b8 100%)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                backgroundClip: "text",
                                                display: "inline-block",
                                            }}
                                        >
                                            {char}
                                        </span>
                                    </motion.span>
                                );
                            })}
                        </span>
                    ))}
                </div>

                {/* Portfolio Tagline */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
                    className="mt-6 sm:mt-8"
                >
                    <div className="flex items-center gap-4 sm:gap-6">
                        <div className="h-[1px] w-10 sm:w-20 md:w-28 bg-gradient-to-r from-transparent to-slate-500" />
                        <p className="text-xs sm:text-sm md:text-base font-light text-slate-400 tracking-[0.35em] sm:tracking-[0.45em] text-center uppercase">
                            Portfolio
                        </p>
                        <div className="h-[1px] w-10 sm:w-20 md:w-28 bg-gradient-to-l from-transparent to-slate-500" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );

    if (!mounted) {
        return preloaderContent;
    }

    return createPortal(preloaderContent, document.body);
};


