"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { BookOpen, X, Menu } from "lucide-react";

interface TocItem {
    id: string;
    label: string;
}

export function ArticleChapterSidebar({ toc }: { toc: TocItem[] }) {
    const [active, setActive] = useState(toc[0]?.id ?? "");
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-30% 0px -60% 0px" }
        );
        toc.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [toc]);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setDrawerOpen(false);
    };

    function NavList() {
        return (
            <nav className="space-y-1">
                {toc.map((item, i) => (
                    <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={cn(
                            "w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                            active === item.id
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-l-2 border-emerald-500 pl-[10px]"
                                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                        )}
                    >
                        <span className="text-[10px] font-bold text-slate-300 dark:text-slate-600 w-4 shrink-0 tabular-nums">
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-snug text-left">{item.label}</span>
                        {active === item.id && (
                            <motion.span
                                layoutId="art-active-dot"
                                className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"
                            />
                        )}
                    </button>
                ))}
            </nav>
        );
    }

    return (
        <>
            {/* Desktop Sidebar */}
            <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden lg:flex flex-col gap-4 w-56 shrink-0 sticky top-24 h-fit"
            >
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        <BookOpen className="w-3.5 h-3.5" />
                        Contents
                    </div>
                    <NavList />
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-4 text-center">
                    <div className="text-2xl mb-2">🧮</div>
                    <p className="text-xs font-medium text-emerald-800 dark:text-emerald-300 mb-3">
                        Check your exact subsidy in 30 seconds
                    </p>
                    <a
                        href="/#calculator-section"
                        className="block bg-emerald-600 text-white text-xs font-bold py-2 px-4 rounded-lg hover:bg-emerald-700 transition"
                    >
                        Open Calculator
                    </a>
                </div>
            </motion.aside>

            {/* Mobile Floating Button */}
            <div className="lg:hidden fixed bottom-20 right-6 z-50">
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setDrawerOpen(true)}
                    className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-full shadow-xl shadow-emerald-500/30 font-bold text-sm"
                >
                    <Menu className="w-4 h-4" /> Contents
                </motion.button>
            </div>

            {/* Mobile Bottom Drawer */}
            <AnimatePresence>
                {drawerOpen && (
                    <div className="lg:hidden fixed inset-0 z-[150]">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/50"
                            onClick={() => setDrawerOpen(false)}
                        />
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 rounded-t-2xl p-6 shadow-2xl max-h-[70vh] overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-bold text-slate-900 dark:text-white">Guide Contents</span>
                                <button
                                    onClick={() => setDrawerOpen(false)}
                                    className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <NavList />
                            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                                <a
                                    href="/#calculator-section"
                                    className="block w-full bg-emerald-600 text-white text-sm font-bold py-3 px-4 rounded-xl text-center hover:bg-emerald-700 transition"
                                >
                                    🧮 Open Free Calculator
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
