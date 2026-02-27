"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import Link from "next/link";

export function GuidesTeaser() {
    return (
        <section className="relative py-20 overflow-hidden bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide mb-4">
                        <BookOpen className="w-3 h-3" aria-hidden="true" />
                        Free Knowledge Base
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        The Only Solar Guide
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-400 dark:to-cyan-400">
                            You&apos;ll Ever Need
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        From PM Surya Ghar subsidies to the best inverters — everything in
                        one place. No sign-up required.
                    </p>
                </motion.div>

                {/* Preview cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10"
                >
                    {[
                        {
                            emoji: "💰",
                            title: "The Economics",
                            desc: "Does solar actually pay off in 2026?",
                            color:
                                "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30 dark:hover:bg-emerald-500/20 hover:border-emerald-500/50 shadow-emerald-500/5",
                            spotlightColor: "rgba(16, 185, 129, 0.2)",
                        },
                        {
                            emoji: "⚡",
                            title: "Best Hardware",
                            desc: "Top inverters & panels reviewed",
                            color:
                                "bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30 dark:hover:bg-amber-500/20 hover:border-amber-500/50 shadow-amber-500/5",
                            spotlightColor: "rgba(245, 158, 11, 0.2)",
                        },
                        {
                            emoji: "🔧",
                            title: "Installation",
                            desc: "What happens after you sign",
                            color:
                                "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30 dark:hover:bg-blue-500/20 hover:border-blue-500/50 shadow-blue-500/5",
                            spotlightColor: "rgba(59, 130, 246, 0.2)",
                        },
                        {
                            emoji: "🧹",
                            title: "Maintenance",
                            desc: "The ₹500/month you're losing to dust",
                            color:
                                "bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/30 dark:hover:bg-violet-500/20 hover:border-violet-500/50 shadow-violet-500/5",
                            spotlightColor: "rgba(139, 92, 246, 0.2)",
                        },
                    ].map((card, i) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 * i }}
                            className="h-full"
                        >
                            <SpotlightCard
                                className={`${card.color} border rounded-2xl p-4 sm:p-5 transition-all cursor-pointer shadow-sm min-h-[120px] h-full flex flex-col md:backdrop-blur-sm`}
                                spotlightColor={card.spotlightColor}
                            >
                                <div className="text-xl sm:text-2xl mb-2 sm:mb-3 relative z-10">
                                    {card.emoji}
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1 relative z-10">
                                    {card.title}
                                </h3>
                                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed relative z-10">
                                    {card.desc}
                                </p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="text-center"
                >
                    <Link
                        href="/guides"
                        title="Read the complete solar guide for free"
                        aria-label="Read the complete solar guide for free"
                        className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 text-base"
                    >
                        <BookOpen className="w-5 h-5" aria-hidden="true" />
                        Read the Complete Guide — Free
                    </Link>
                    <p className="text-xs text-slate-500 mt-3">
                        25 min read • Updated Feb 2026 • No sign-up
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
