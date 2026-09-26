"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { Loader2 } from "lucide-react";

// Configure worker locally
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const options = {
    cMapUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
    cMapPacked: true,
    standardFontDataUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
};

export default function PdfViewer({ resumeUrl, containerWidth, pdfQuality, numPages, onDocumentLoadSuccess }) {
    return (
        <Document
            key={resumeUrl}
            file={resumeUrl}
            options={options}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10 w-full h-full gap-3">
                    <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
                    <span className="text-sm text-gray-500 font-medium">Loading Document...</span>
                </div>
            }
            error={
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10 w-full h-full text-red-500 gap-3">
                    <p>Failed to load PDF.</p>
                    <span
                        onClick={() => window.open(resumeUrl, "_blank")}
                        className="underline cursor-pointer"
                    >
                        Open directly
                    </span>
                </div>
            }
            className="flex flex-col items-center min-h-full"
        >
            {numPages &&
                Array.from(new Array(numPages), (el, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={containerWidth ? containerWidth : undefined}
                        devicePixelRatio={pdfQuality}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="shadow-lg mb-4 last:mb-0"
                    />
                ))}
        </Document>
    );
}
