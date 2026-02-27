"use client";

import { motion, Variants } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TrendingUp, ShieldCheck, Sun, Zap } from "lucide-react";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

export function BentoGrid() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 relative z-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Why Go Solar in 2026?
                </h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                >
                    {/* Box 1: Large Span — Emerald / Green */}
                    <motion.div variants={item} className="md:col-span-2 h-full">
                        <SpotlightCard
                            className="h-full bg-gradient-to-br from-white to-emerald-50/50 dark:from-slate-900 dark:to-emerald-900/10 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300"
                            spotlightColor="rgba(16, 185, 129, 0.2)"
                        >
                            <div className="p-8 flex flex-col justify-center h-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-50 pointer-events-none" />
                                <div className="flex items-center gap-4 mb-4 relative z-10">
                                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-600 dark:text-emerald-400">
                                        <TrendingUp className="w-6 h-6" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                        ROI &gt; Mutual Funds
                                    </h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-lg relative z-10">
                                    With electricity tariffs rising at 5% CAGR, a solar system
                                    offers a tax-free IRR of 25%+. That beats FD, Gold, and most
                                    Equity funds provided you have a shadow-free roof.
                                </p>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                    {/* Box 2: Tall Span — Amber / Orange */}
                    <motion.div variants={item} className="h-full">
                        <SpotlightCard
                            className="h-full bg-gradient-to-br from-white to-amber-50/80 dark:from-slate-900 dark:to-amber-900/20 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between min-h-[280px]"
                            spotlightColor="rgba(245, 158, 11, 0.2)"
                        >
                            <div className="p-8 h-full flex flex-col justify-between relative z-10">
                                <div className="p-0 text-amber-600 dark:text-amber-400 w-fit mb-4">
                                    <ShieldCheck className="w-12 h-12 opacity-80" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                                        25 Year Asset
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Performance warranty ensures generation for decades. It's
                                        not an expense, it's infrastructure.
                                    </p>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                    {/* Box 3 — Violet / Purple */}
                    <motion.div variants={item} className="h-full">
                        <SpotlightCard
                            className="h-full bg-gradient-to-br from-white to-violet-50/50 dark:from-slate-900 dark:to-violet-900/10 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-violet-500/30 transition-all duration-300"
                            spotlightColor="rgba(139, 92, 246, 0.2)"
                        >
                            <div className="p-8 h-full">
                                <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-xl text-violet-600 dark:text-violet-400 w-fit mb-4">
                                    <Sun className="w-6 h-6" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                                    Green Energy
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Reduce your carbon footprint by 4 tons/year. That's equal to
                                    planting 100 trees.
                                </p>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                    {/* Box 4 — Blue */}
                    <motion.div variants={item} className="md:col-span-2 h-full">
                        <SpotlightCard
                            className="h-full bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-900 dark:to-blue-900/10 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
                            spotlightColor="rgba(59, 130, 246, 0.2)"
                        >
                            <div className="p-8 flex flex-col justify-center h-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-50 pointer-events-none" />
                                <div className="flex items-center gap-4 mb-4 relative z-10">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                                        <Zap className="w-6 h-6" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                        Net Metering Magic
                                    </h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 relative z-10">
                                    Send excess power to the grid during the day. Withdraw it at
                                    night. The grid acts as your free battery bank.
                                </p>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
