"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export const Preloader = ({ onComplete }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onComplete();
        }, 4000);

        return () => clearTimeout(timeout);
    }, [onComplete]);

    const nameText = "Kattumuri Madhu";
    const nameChars = nameText.split("");

    const container = {
        show: {
            transition: {
                staggerChildren: 0.4, // Delay between "Welcome", "Name", "Portfolio"
                delayChildren: 0.5,
            },
        },
        exit: {
            opacity: 0,
            scale: 1.1,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
    };

    const fallDown = {
        hidden: { y: -80, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    const nameContainer = {
        show: {
            transition: {
                staggerChildren: 0.05, // Letter by letter delay
            }
        }
    };

    const slideRight = {
        hidden: { x: 50, opacity: 0 },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={container}
            onAnimationComplete={(definition) => {
                if (definition === 'exit') onComplete();
            }}
        >
            {/* Premium Dark Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-[#000000] pointer-events-none" />

            {/* Luxurious Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Welcome Text - Silver/White */}
            <motion.div variants={fallDown} className="mb-4 relative z-10">
                <p className="text-sm md:text-base font-medium tracking-[0.4em] text-slate-400 uppercase text-center font-sans">
                    Welcome to
                </p>
            </motion.div>

            {/* Name - Gold/Premium Gradient */}
            <motion.div
                variants={nameContainer}
                className="relative z-10 text-center px-4 flex flex-wrap justify-center gap-[1px] md:gap-[3px] overflow-hidden py-2"
            >
                {nameChars.map((char, index) => (
                    <motion.span
                        key={index}
                        variants={slideRight}
                        className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-black inline-block tracking-tight"
                        style={{ minWidth: char === " " ? "0.4em" : "auto" }}
                    >
                        {/* Golden/White Gradient for Dark Mode */}
                        <span className="bg-gradient-to-b from-white via-slate-200 to-slate-500 text-transparent bg-clip-text filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            {char}
                        </span>
                    </motion.span>
                ))}
            </motion.div>

            {/* Portfolio Tagline - Elegant Finish */}
            <motion.div variants={fallDown} className="mt-8 relative z-10">
                <div className="flex items-center gap-6">
                    <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-slate-600"></div>
                    <p className="text-lg md:text-xl font-light text-slate-500 tracking-[0.3em] text-center uppercase">
                        Portfolio
                    </p>
                    <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-slate-600"></div>
                </div>
            </motion.div>
        </motion.div>
    );
};
