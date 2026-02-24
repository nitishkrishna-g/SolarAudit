"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const widgets: Record<string, { title: string; sub: string; cta: string; link: string; emoji: string; color: string }> = {
    economics: {
        emoji: "🧮",
        title: "Check Your Subsidy",
        sub: "See your exact savings based on your bill + state",
        cta: "Open Calculator",
        link: "/#calculator-section",
        color: "emerald",
    },
    hardware: {
        emoji: "⚡",
        title: "Top Pick: Microtek iMerlyn",
        sub: "900VA/725W Inverter — 3 Year Warranty",
        cta: "Check on Amazon",
        link: "https://amzn.to/4cMVjpf",
        color: "amber",
    },
    installation: {
        emoji: "🔌",
        title: "Tuya Smart Energy Meter",
        sub: "WiFi monitor — track your solar output live",
        cta: "Check on Amazon",
        link: "https://amzn.to/4qXHdVI",
        color: "blue",
    },
    maintenance: {
        emoji: "🧹",
        title: "Connecticut Cleaning Kit",
        sub: "3M telescopic pole brush — saves ₹500/month",
        cta: "Check on Amazon",
        link: "https://amzn.to/4rHlEdc",
        color: "teal",
    },
    checklist: {
        emoji: "✅",
        title: "Free Solar Checklist",
        sub: "Download the complete go-live checklist PDF",
        cta: "Download Free",
        link: "#checklist",
        color: "violet",
    },
};

const colorMap: Record<string, string> = {
    emerald: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20",
    amber: "bg-amber-500 hover:bg-amber-600 shadow-amber-500/20",
    blue: "bg-blue-600 hover:bg-blue-700 shadow-blue-500/20",
    teal: "bg-teal-600 hover:bg-teal-700 shadow-teal-500/20",
    violet: "bg-violet-600 hover:bg-violet-700 shadow-violet-500/20",
};

const bgMap: Record<string, string> = {
    emerald: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800",
    amber: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
    blue: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
    teal: "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800",
    violet: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800",
};

const chapters = ["economics", "hardware", "installation", "maintenance", "checklist"];

export function RightRail() {
    const [activeChapter, setActiveChapter] = useState("economics");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveChapter(entry.target.id);
                });
            },
            { rootMargin: "-30% 0px -60% 0px" }
        );
        chapters.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const w = widgets[activeChapter] ?? widgets.economics;

    return (
        <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden xl:flex flex-col gap-4 w-56 shrink-0 sticky top-24 h-fit"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeChapter}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className={cn("border rounded-2xl p-5", bgMap[w.color])}
                >
                    <div className="text-3xl mb-3">{w.emoji}</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">{w.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">{w.sub}</p>
                    <a
                        href={w.link}
                        target={w.link.startsWith("http") ? "_blank" : "_self"}
                        rel={w.link.startsWith("http") ? "nofollow noopener" : undefined}
                        className={cn("block text-center text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors shadow-lg", colorMap[w.color])}
                    >
                        {w.cta}
                    </a>
                </motion.div>
            </AnimatePresence>

            {/* Static Ad Placeholder */}
            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl h-48 flex items-center justify-center border border-dashed border-slate-300 dark:border-slate-700">
                <span className="text-xs text-slate-400">Ad Space</span>
            </div>
        </motion.aside>
    );
}
