import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white text-slate-900">
            <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
            <p className="text-lg mb-8 text-slate-600">Could not find requested resource</p>
            <Link
                href="/"
                className="px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors"
            >
                Return Home
            </Link>
        </div>
    );
}
