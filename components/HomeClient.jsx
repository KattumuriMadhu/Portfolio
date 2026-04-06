"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Preloader } from "@/components/ui/Preloader";

export default function HomeClient({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // Scroll to top immediately on mount
        window.scrollTo(0, 0);

        // Also scroll to top exactly when the real content finishes loading and appears
        if (!isLoading) {
            setTimeout(() => window.scrollTo(0, 0), 50);
        }
    }, [isLoading]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            {!isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col min-h-screen"
                >
                    {children}
                </motion.div>
            )}
        </>
    );
}
