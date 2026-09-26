"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, Download, FileText, Loader2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("./PdfViewer"), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10 w-full h-full gap-3">
            <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
            <span className="text-sm text-gray-500 font-medium">Loading Document...</span>
        </div>
    ),
});


export function ResumeModal({ isOpen, onClose, resumeUrl = "/Kattumuri_Madhu.pdf" }) {
    const [numPages, setNumPages] = useState(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [hasLoaded, setHasLoaded] = useState(false); // Track if we've ever opened it to keep PDF mounted
    const [pdfQuality, setPdfQuality] = useState(undefined);
    const containerRef = useRef(null);

    // Measure container width for responsive PDF resizing
    useEffect(() => {
        if (!containerRef.current) return;

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setContainerWidth(entry.contentRect.width);
            }
        });

        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, [hasLoaded]); // Re-run when it mounts

    // Determine device capabilities for PDF quality
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Force ultra high-quality rendering (4x) for all devices as requested
            setPdfQuality(Math.max(window.devicePixelRatio || 4, 4));
        }
    }, []);

    // Pre-load PDF after 2.5s (Background Warm-up)
    useEffect(() => {
        const timer = setTimeout(() => {
            setHasLoaded(true);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    // Ensure it loads if the user opens the modal before the 2.5s background warmup
    useEffect(() => {
        if (isOpen && !hasLoaded) {
            // Wait 300ms for animation before mounting if it wasn't pre-loaded
            const timer = setTimeout(() => setHasLoaded(true), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen, hasLoaded]);

    // Body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const isResume = resumeUrl.toLowerCase().includes("resume") || resumeUrl.toLowerCase().includes("madhu");
    const headerTitle = isResume ? "My Resume" : "Certificate";
    const downloadName = isResume ? "resume.pdf" : "certificate.pdf";

    // Don't render anything if closed and never loaded (keeps DOM light initially)
    // But once loaded, keep it mounted for instant re-open
    if (!isOpen && !hasLoaded) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-6 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        >
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 sm:backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    scale: isOpen ? 1 : 0.95,
                    y: isOpen ? 0 : 20,
                }}
                transition={{
                    duration: 0.3, // Simple duration for consistency
                    ease: "easeOut" // Standard ease instead of spring for performance
                }}
                className="relative w-full max-h-[85dvh] sm:max-w-5xl sm:max-h-[90vh] flex flex-col rounded-2xl bg-gray-900 sm:shadow-2xl min-h-0"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Subtle White Glow Border (Desktop Only) */}
                <div className={`hidden sm:block absolute -inset-[1px] rounded-2xl bg-white/20 blur-sm opacity-30 pointer-events-none`} />

                <div className="relative flex flex-col w-full rounded-2xl overflow-hidden border border-white/10 sm:shadow-2xl min-h-0">

                    {/* Header */}
                    <div className="flex items-center justify-between p-3 border-b border-white/10 bg-gray-800 shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                                <FileText className="w-5 h-5 text-purple-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white">
                                {headerTitle}
                            </h3>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden sm:block">
                                <Button
                                    size="sm"
                                    className="gap-2 bg-white/10 hover:bg-white/20 text-white border-0"
                                    onClick={() => window.open(resumeUrl, "_blank")}
                                >
                                    <ExternalLink className="w-4 h-4" /> Open
                                </Button>
                            </div>

                            <Button
                                size="sm"
                                className="gap-2 bg-purple-600 hover:bg-purple-700 text-white border-0"
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = resumeUrl;
                                    link.download = downloadName;
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}
                            >
                                <Download className="w-4 h-4" />
                                <span className="hidden sm:inline">
                                    Download
                                </span>
                            </Button>

                            <button
                                onClick={onClose}
                                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* PDF Viewer */}
                    <div className="flex-1 bg-gray-100 overflow-y-auto relative min-h-[30vh] sm:min-h-[50vh]" ref={containerRef}>
                        {hasLoaded ? (
                            <PdfViewer
                                resumeUrl={resumeUrl}
                                containerWidth={containerWidth}
                                pdfQuality={pdfQuality}
                                numPages={numPages}
                                onDocumentLoadSuccess={onDocumentLoadSuccess}
                            />
                        ) : (
                            // Lightweight Skeleton Loading State
                            <div className="relative h-[60dvh] sm:h-[80vh] flex flex-col items-center justify-center bg-gray-100 z-10 w-full gap-3">
                                <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
