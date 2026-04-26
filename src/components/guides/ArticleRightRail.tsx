"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

interface TocItem { id: string; label: string; }
interface RelatedArticle { href: string; category: string; title: string; readTime: string; }

interface Widget {
    emoji: string;
    title: string;
    sub: string;
    cta: string;
    link: string;
    color: string;
}

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

const categoryWidgets: Record<string, Widget[]> = {
    Subsidies: [
        { emoji: "🧮", title: "Check Your Subsidy", sub: "See your exact savings based on your bill and state", cta: "Open Calculator", link: "/#calculator-section", color: "emerald" },
        { emoji: "💰", title: "PM Surya Ghar Portal", sub: "Register for the subsidy at the official government portal", cta: "Visit Portal", link: "https://pmsuryaghar.gov.in", color: "blue" },
        { emoji: "📋", title: "Installation Checklist", sub: "Documents you need before applying for the subsidy", cta: "See Checklist", link: "/guides/solar-installation-checklist-india", color: "violet" },
    ],
    Hardware: [
        { emoji: "⚡", title: "Microtek iMerlyn Inverter", sub: "900VA/725W — Best value string inverter with 3yr warranty", cta: "Check on Amazon", link: "https://amzn.to/4cMVjpf", color: "amber" },
        { emoji: "☀️", title: "Browse Solar Panels", sub: "MNRE-approved Mono-PERC panels with Prime delivery", cta: "Shop Panels →", link: "https://www.amazon.in/s?k=mono+perc+solar+panel&tag=solaraudit-21", color: "amber" },
        { emoji: "🧮", title: "Calculate Your ROI", sub: "See exact payback period with 2026 subsidy rates", cta: "Open Calculator", link: "/#calculator-section", color: "emerald" },
    ],
    Policy: [
        { emoji: "🧮", title: "Check Your Savings", sub: "Calculate your exact ROI with real DISCOM tariff data", cta: "Open Calculator", link: "/#calculator-section", color: "emerald" },
        { emoji: "💰", title: "PM Surya Ghar Portal", sub: "Get your ₹78,000 subsidy — register at the official portal", cta: "Visit Portal", link: "https://pmsuryaghar.gov.in", color: "blue" },
        { emoji: "📋", title: "Full Installation Guide", sub: "What to do from first call to commissioning day", cta: "Read Guide", link: "/guides/solar-installation-checklist-india", color: "violet" },
    ],
    Maintenance: [
        { emoji: "🧹", title: "Connecticut Cleaning Kit", sub: "3M telescopic pole brush — saves ₹500/month in lost generation", cta: "Check on Amazon", link: "https://amzn.to/4rHlEdc", color: "teal" },
        { emoji: "🧹", title: "Fieldstar 18FT Kit", sub: "5.4M pole with squeegee and water-fed pipe — ideal for 3-storey", cta: "Check on Amazon", link: "https://amzn.to/4s92Z9S", color: "teal" },
        { emoji: "🧮", title: "Calculate Your ROI", sub: "See how much proper maintenance improves your payback", cta: "Open Calculator", link: "/#calculator-section", color: "emerald" },
    ],
    Finance: [
        { emoji: "🧮", title: "Use Our Free Calculator", sub: "Input your bill and state — get exact savings in 30 seconds", cta: "Open Calculator", link: "/#calculator-section", color: "emerald" },
        { emoji: "💰", title: "PM Surya Ghar Subsidy", sub: "Get up to ₹78,000 off your system cost in 2026", cta: "Check Eligibility", link: "/guides/pm-surya-ghar-subsidy-2026", color: "blue" },
        { emoji: "⚡", title: "Browse Solar Inverters", sub: "Rated inverters for Indian conditions on Amazon India", cta: "Shop Inverters →", link: "https://www.amazon.in/s?k=solar+inverter&tag=solaraudit-21", color: "amber" },
    ],
    Installation: [
        { emoji: "🧮", title: "Check Your Subsidy", sub: "Confirm you'll qualify before you begin the process", cta: "Open Calculator", link: "/#calculator-section", color: "emerald" },
        { emoji: "🔌", title: "Smart Energy Monitor", sub: "Tuya WiFi meter — verify your output matches projections", cta: "Check on Amazon", link: "https://amzn.to/4qXHdVI", color: "blue" },
        { emoji: "💰", title: "PM Surya Ghar Portal", sub: "Submit your commissioning certificate to claim your subsidy", cta: "Visit Portal", link: "https://pmsuryaghar.gov.in", color: "violet" },
    ],
};

const fallbackWidgets: Widget[] = categoryWidgets.Subsidies;

export function ArticleRightRail({
    category,
    toc,
    related,
}: {
    category: string;
    toc: TocItem[];
    related: RelatedArticle[];
}) {
    const [activeTocIndex, setActiveTocIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = toc.findIndex((t) => t.id === entry.target.id);
                        if (idx !== -1) setActiveTocIndex(idx);
                    }
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

    const pool = categoryWidgets[category] ?? fallbackWidgets;
    const widget = pool[activeTocIndex % pool.length];

    return (
        <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden xl:flex flex-col gap-4 w-56 shrink-0 sticky top-24 h-fit"
        >
            {/* Contextual affiliate widget — changes per active section */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`${activeTocIndex}-${widget.title}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className={cn("border rounded-2xl p-5", bgMap[widget.color])}
                >
                    <div className="text-3xl mb-3">{widget.emoji}</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">{widget.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">{widget.sub}</p>
                    <a
                        href={widget.link}
                        target={widget.link.startsWith("http") ? "_blank" : "_self"}
                        rel={widget.link.startsWith("http") ? "nofollow noopener" : undefined}
                        className={cn(
                            "block text-center text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors shadow-lg",
                            colorMap[widget.color]
                        )}
                    >
                        {widget.cta}
                    </a>
                </motion.div>
            </AnimatePresence>

            {/* Related guides */}
            {related.length > 0 && (
                <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-3">Related Guides</h4>
                    <ul className="space-y-3">
                        {related.map((r) => (
                            <li key={r.href}>
                                <Link
                                    href={r.href}
                                    className="group block hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                >
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                                        {r.category}
                                    </span>
                                    <p className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-snug mt-0.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                        {r.title}
                                    </p>
                                    <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-400">
                                        <Clock className="w-2.5 h-2.5" />
                                        {r.readTime}
                                        <ArrowRight className="w-2.5 h-2.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Quick links */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-3">Quick Links</h4>
                <ul className="space-y-2">
                    <li>
                        <a href="/shop" className="text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                            Solar Store →
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                            About SolarAudit →
                        </a>
                    </li>
                    <li>
                        <a href="/guides" className="text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                            All Guides →
                        </a>
                    </li>
                </ul>
            </div>
        </motion.aside>
    );
}
