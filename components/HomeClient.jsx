"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/ui/Preloader";
import { LoadingContext } from "@/lib/LoadingContext";

export default function HomeClient({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <LoadingContext.Provider value={{ isLoading, isLoaded: !isLoading }}>
            <AnimatePresence>
                {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            <div className="flex flex-col min-h-screen">
                {children}
            </div>
        </LoadingContext.Provider>
    );
}


