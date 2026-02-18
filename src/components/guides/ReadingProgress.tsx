"use client";
import { useEffect, useState } from "react";

export function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
        };
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-slate-200/20">
            <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-100 ease-out shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
