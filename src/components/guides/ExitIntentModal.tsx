"use client";
import { useState, useEffect } from "react";
import { X, Calculator } from "lucide-react";

export function ExitIntentModal() {
    const [open, setOpen] = useState(false);
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        const onMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !triggered) {
                setOpen(true);
                setTriggered(true);
            }
        };
        // Only attach after 8 seconds on page
        const t = setTimeout(() => {
            document.addEventListener("mouseleave", onMouseLeave);
        }, 8000);
        return () => {
            clearTimeout(t);
            document.removeEventListener("mouseleave", onMouseLeave);
        };
    }, [triggered]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white text-center">
                    <div className="text-4xl mb-2">☀️</div>
                    <h3 className="text-xl font-bold mb-1">Wait! Before you go...</h3>
                    <p className="text-sm opacity-90">Check if your roof qualifies for the ₹78,000 subsidy in 30 seconds.</p>
                    <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-white/70 hover:text-white">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="p-6 text-center">
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                        Our calculator uses your electricity bill + state data to give you an exact subsidy estimate — no sign-up needed.
                    </p>
                    <a
                        href="/#calculator-section"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-lg shadow-emerald-500/20 w-full justify-center"
                        onClick={() => setOpen(false)}
                    >
                        <Calculator className="w-5 h-5" />
                        Check My Eligibility Now
                    </a>
                    <button onClick={() => setOpen(false)} className="mt-4 text-xs text-slate-400 hover:text-slate-600 transition-colors">
                        No thanks, I'll figure it out myself
                    </button>
                </div>
            </div>
        </div>
    );
}
