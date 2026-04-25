"use client";

import { motion } from "framer-motion";
import React from "react";

/* ── Reveal: fade-up on scroll (same as main guide page) ──────────── */
export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ── AnimatedHero: scale + fade entrance for the hero area ────────── */
export function AnimatedHero({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}

/* ── AnimatedBadge: ping dot + scale entrance ─────────────────────── */
export function AnimatedBadge({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide mb-4"
        >
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {children}
        </motion.div>
    );
}

/* ── AnimatedTocPills: staggered chapter pills ────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

export function AnimatedTocPills({ items }: { items: { id: string; label: string }[] }) {
    return (
        <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-2 mt-8"
        >
            {items.map((item) => (
                <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    variants={fadeUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-4 py-2 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 border border-slate-200 dark:border-white/10 hover:border-emerald-300 dark:hover:border-emerald-500/40 text-slate-700 dark:text-white text-sm font-medium transition-colors"
                >
                    {item.label}
                </motion.a>
            ))}
        </motion.div>
    );
}

/* ── AnimatedFaq: animated accordion items ────────────────────────── */
export function AnimatedFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
    return (
        <div className="space-y-3">
            {faqs.map((faq, i) => (
                <motion.details
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="group border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
                >
                    <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors list-none">
                        <span className="pr-4">{faq.q}</span>
                        <span className="text-emerald-500 group-open:rotate-45 transition-transform text-xl shrink-0 font-light">+</span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-4">
                        {faq.a}
                    </div>
                </motion.details>
            ))}
        </div>
    );
}

/* ── AnimatedCTA: hover-effect CTA block ──────────────────────────── */
export function AnimatedCTA() {
    return (
        <Reveal>
            <motion.div
                whileHover={{ scale: 1.01 }}
                className="mt-12 bg-gradient-to-br from-slate-900 to-emerald-950 rounded-2xl p-8 text-white text-center"
            >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-3">Calculate Your Solar Savings</h3>
                <p className="text-slate-300 mb-6 max-w-md mx-auto">
                    Use our free calculator with real DISCOM tariff data and 2026 PM Surya Ghar subsidy rates.
                </p>
                <motion.a
                    href="/#calculator-section"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-emerald-500/30 text-lg"
                >
                    Open Free Calculator →
                </motion.a>
            </motion.div>
        </Reveal>
    );
}

/* ── AnimatedRelated: hover-effect related guide cards ─────────────── */
export function AnimatedRelatedCard({ href, category, title, readTime }: { href: string; category: string; title: string; readTime: string }) {
    return (
        <motion.a
            href={href}
            whileHover={{ scale: 1.03, y: -4 }}
            className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 transition-all bg-white dark:bg-slate-800/50 block"
        >
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">{category}</span>
            <h4 className="font-bold text-slate-900 dark:text-white mt-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors text-sm leading-snug">{title}</h4>
            <p className="text-xs text-slate-500 mt-2">{readTime} read</p>
        </motion.a>
    );
}

/* ── SectionHeading: animated h2 like ChapterHeading ──────────────── */
export function SectionHeading({ id, emoji, title }: { id: string; emoji: string; title: string }) {
    return (
        <motion.div
            id={id}
            className="scroll-mt-24 pt-12 pb-4 border-b border-slate-200 dark:border-slate-800 mb-6 not-prose"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="flex items-center gap-3">
                <motion.span
                    className="text-2xl"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                    {emoji}
                </motion.span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{title}</h2>
            </div>
        </motion.div>
    );
}

/* ── InfoBox: callout/tip box ─────────────────────────────────────── */
export function InfoBox({ children, variant = "tip" }: { children: React.ReactNode; variant?: "tip" | "warning" | "info" }) {
    const styles = {
        tip: "bg-emerald-50 dark:bg-emerald-900/10 border-2 border-emerald-400 text-emerald-800 dark:text-emerald-300",
        warning: "bg-amber-50 dark:bg-amber-900/10 border-2 border-amber-400 text-amber-800 dark:text-amber-300",
        info: "bg-blue-50 dark:bg-blue-900/10 border-2 border-blue-400 text-blue-800 dark:text-blue-300",
    };
    const labels = { tip: "💡 Pro Tip", warning: "⚠️ Important", info: "ℹ️ Did You Know" };
    return (
        <Reveal>
            <div className={`rounded-2xl p-5 mb-6 not-prose ${styles[variant]}`}>
                <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80">{labels[variant]}</div>
                <div className="text-sm leading-relaxed">{children}</div>
            </div>
        </Reveal>
    );
}

/* ── StatCard: animated metric cards ──────────────────────────────── */
export function StatCards({ items }: { items: { value: string; label: string; color: string }[] }) {
    const colorMap: Record<string, string> = {
        emerald: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400",
        blue: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400",
        amber: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400",
        violet: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-400",
    };
    return (
        <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 not-prose"
        >
            {items.map((item) => (
                <motion.div
                    key={item.label}
                    variants={fadeUp}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className={`border rounded-2xl p-4 text-center cursor-default ${colorMap[item.color] || colorMap.emerald}`}
                >
                    <div className="text-2xl font-bold mb-1">{item.value}</div>
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400">{item.label}</div>
                </motion.div>
            ))}
        </motion.div>
    );
}

/* ── DarkInfoPanel: dark background info block ────────────────────── */
export function DarkInfoPanel({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <Reveal>
            <div className="bg-slate-900 text-white rounded-2xl p-6 mb-8 not-prose">
                <h3 className="font-bold text-lg mb-3">{title}</h3>
                {children}
            </div>
        </Reveal>
    );
}
