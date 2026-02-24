"use client";

import { motion } from "framer-motion";
import { ChapterSidebar } from "@/components/guides/ChapterSidebar";
import { RightRail } from "@/components/guides/RightRail";
import { ProductCard } from "@/components/guides/ProductCard";
import { Calculator, CheckCircle, Clock, Shield, Zap, Sun, Battery, Sparkles } from "lucide-react";
import Link from "next/link";

// ── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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

function AdBreak() {
    return (
        <Reveal>
            <div className="my-10 bg-slate-100 dark:bg-slate-800/60 rounded-xl h-24 flex items-center justify-center border border-dashed border-slate-300 dark:border-slate-700">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Advertisement</span>
            </div>
        </Reveal>
    );
}

function ChapterHeading({ id, emoji, number, title, subtitle }: { id: string; emoji: string; number: string; title: string; subtitle: string }) {
    return (
        <motion.div
            id={id}
            className="scroll-mt-24 pt-16 pb-6 border-b border-border-color mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="flex items-center gap-3 mb-3">
                <motion.span
                    className="text-3xl"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                    {emoji}
                </motion.span>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">{number}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">{title}</h2>
            <p className="text-lg text-text-secondary">{subtitle}</p>
        </motion.div>
    );
}

export function GuidesContent() {
    return (
        <div>
            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden pb-16 pt-0">
                {/* Aurora blobs — identical to homepage */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/20 blur-[100px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-500/15 blur-[100px]" />
                </div>

                <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        2026 Edition — Fully Updated
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto"
                    >
                        The Only Solar Guide<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">You Need.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed"
                    >
                        From PM Surya Ghar subsidies to choosing the right inverter — the complete roadmap for Indian homeowners.
                        <span className="block mt-2 font-medium text-slate-900 dark:text-slate-200">No fluff. Just what you need to go solar.</span>
                    </motion.p>

                    {/* Trust signals */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-10"
                    >
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-500" /> 25 min read</div>
                        <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-emerald-500" /> Verified by Electrical Engineers</div>
                        <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Updated Feb 2026 • MNRE Guidelines</div>
                    </motion.div>

                    {/* Chapter pills */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="show"
                        className="flex flex-wrap justify-center gap-2 mb-12"
                    >
                        {[
                            { id: "economics", label: "💰 Economics" },
                            { id: "hardware", label: "⚡ Hardware" },
                            { id: "installation", label: "🔧 Installation" },
                            { id: "maintenance", label: "🧹 Maintenance" },
                            { id: "checklist", label: "✅ Checklist" },
                        ].map((ch) => (
                            <motion.a
                                key={ch.id}
                                href={`#${ch.id}`}
                                variants={fadeUp}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="px-4 py-2 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 border border-slate-200 dark:border-white/10 hover:border-emerald-300 dark:hover:border-emerald-500/40 text-slate-700 dark:text-white text-sm font-medium transition-colors"
                            >
                                {ch.label}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Solar diagram */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="max-w-2xl mx-auto bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-sm"
                    >
                        <div className="flex items-center justify-center gap-2 md:gap-4">
                            {/* Solar Panels */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                                className="flex flex-col items-center gap-2 shrink-0"
                            >
                                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-500/20 rounded-xl flex items-center justify-center text-2xl shadow-sm">☀️</div>
                                <span className="text-xs text-slate-500 dark:text-slate-400">Solar Panels</span>
                            </motion.div>

                            {/* Connector 1 */}
                            <div className="flex-1 flex flex-col items-center gap-1 min-w-0">
                                <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center">
                                    <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 fill-emerald-500" />
                                </div>
                                <div className="w-full h-0.5 bg-gradient-to-r from-amber-400 to-emerald-500 rounded-full" />
                                <span className="text-[10px] text-slate-400">DC power</span>
                            </div>

                            {/* Your Home */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.75 }}
                                className="flex flex-col items-center gap-2 shrink-0"
                            >
                                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-500/20 rounded-xl flex items-center justify-center text-2xl shadow-sm">🏠</div>
                                <span className="text-xs text-slate-500 dark:text-slate-400">Your Home</span>
                            </motion.div>

                            {/* Connector 2 */}
                            <div className="flex-1 flex flex-col items-center gap-1 min-w-0">
                                <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-500/20 border border-blue-300 dark:border-blue-500/40 flex items-center justify-center">
                                    <Zap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 fill-blue-500" />
                                </div>
                                <div className="w-full h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full" />
                                <span className="text-[10px] text-slate-400">AC / net</span>
                            </div>

                            {/* Grid */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.9 }}
                                className="flex flex-col items-center gap-2 shrink-0"
                            >
                                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/20 rounded-xl flex items-center justify-center text-2xl shadow-sm">🔌</div>
                                <span className="text-xs text-slate-500 dark:text-slate-400">Grid (Net Meter)</span>
                            </motion.div>
                        </div>
                        <p className="text-xs text-slate-500 text-center mt-4">Export excess power by day → Import from grid at night. Your meter runs backwards.</p>
                    </motion.div>
                </div>
            </section>

            {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex gap-8 xl:gap-12">
                    <ChapterSidebar />


                    <main className="flex-1 min-w-0 max-w-3xl">


                        {/* ── CHAPTER 1: ECONOMICS ─────────────────────── */}
                        <ChapterHeading
                            id="economics"
                            emoji="💰"
                            number="Chapter 1"
                            title="The Economics — Does Solar Actually Make Sense?"
                            subtitle="Look, solar isn't magic. But if your bill is over ₹3,000, it's basically free money after 3 years."
                        />

                        <Reveal>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Let's be brutally honest. Solar is a <strong>financial product</strong> first, and a green product second. The question isn't "is solar good?" — it's "does solar make sense for MY bill, MY roof, and MY state?"
                            </p>
                        </Reveal>

                        {/* Inflation Chart */}
                        <Reveal delay={0.1}>
                            <div className="bg-white dark:bg-slate-900 border border-border-color rounded-2xl p-6 mb-8">
                                <h3 className="font-bold text-lg mb-4 text-text-primary">Electricity Tariff vs. Solar Cost (10-Year Projection)</h3>
                                <div className="space-y-3">
                                    {[
                                        { year: "2026", bill: 4000, solar: 3200, billW: "40%", solarW: "32%" },
                                        { year: "2028", bill: 4410, billW: "44%" },
                                        { year: "2030", bill: 4862, billW: "49%" },
                                        { year: "2032", bill: 5362, billW: "54%" },
                                        { year: "2036", bill: 6516, billW: "65%" },
                                    ].map((row, i) => (
                                        <motion.div
                                            key={row.year}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.08 }}
                                            className="flex items-center gap-3"
                                        >
                                            <span className="text-xs font-bold text-text-secondary w-10">{row.year}</span>
                                            <div className="flex-1 space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <motion.div
                                                        className="h-5 bg-rose-500/80 rounded flex items-center px-2"
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: row.billW }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
                                                    >
                                                        <span className="text-white text-xs font-bold whitespace-nowrap">₹{row.bill.toLocaleString()}/mo</span>
                                                    </motion.div>
                                                    <span className="text-xs text-rose-500">Grid Bill</span>
                                                </div>
                                                {row.solar && (
                                                    <div className="flex items-center gap-2">
                                                        <motion.div
                                                            className="h-5 bg-emerald-500/80 rounded flex items-center px-2"
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: row.solarW }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                                        >
                                                            <span className="text-white text-xs font-bold whitespace-nowrap">₹{row.solar.toLocaleString()}/mo</span>
                                                        </motion.div>
                                                        <span className="text-xs text-emerald-500">Solar EMI</span>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <p className="text-xs text-text-secondary mt-4 italic">* Assumes 5% annual tariff increase. Solar EMI ends after 5 years — then it's free.</p>
                            </div>
                        </Reveal>

                        {/* Subsidy Breakdown */}
                        <Reveal>
                            <h3 className="text-xl font-bold mb-4 text-text-primary">PM Surya Ghar Subsidy Breakdown</h3>
                        </Reveal>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
                        >
                            {[
                                { kw: "1 kW", subsidy: "₹30,000", color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800", text: "text-blue-700 dark:text-blue-400" },
                                { kw: "2 kW", subsidy: "₹60,000", color: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800", text: "text-emerald-700 dark:text-emerald-400" },
                                { kw: "3 kW+", subsidy: "₹78,000", color: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800", text: "text-amber-700 dark:text-amber-400", badge: "Max Subsidy" },
                            ].map((item) => (
                                <motion.div
                                    key={item.kw}
                                    variants={fadeUp}
                                    whileHover={{ scale: 1.03, y: -4 }}
                                    className={`relative border rounded-2xl p-5 text-center cursor-default ${item.color}`}
                                >
                                    {item.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-0.5 rounded-full">{item.badge}</div>}
                                    <div className={`text-3xl font-bold mb-1 ${item.text}`}>{item.subsidy}</div>
                                    <div className="text-sm font-medium text-text-secondary">for {item.kw} system</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Net Metering */}
                        <Reveal>
                            <div className="bg-slate-900 text-white rounded-2xl p-6 mb-8">
                                <h3 className="font-bold text-lg mb-3">Net Metering 101 — The Grid is Your Battery</h3>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
                                        <div className="text-2xl mb-2">☀️ Daytime</div>
                                        <p className="text-sm text-amber-300">You generate more than you use → <strong>Export to grid</strong></p>
                                        <div className="mt-2 text-xs text-amber-400">Meter runs backwards ↩</div>
                                    </div>
                                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
                                        <div className="text-2xl mb-2">🌙 Nighttime</div>
                                        <p className="text-sm text-blue-300">You use grid power → <strong>Import from grid</strong></p>
                                        <div className="mt-2 text-xs text-blue-400">Meter runs forward ↪</div>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400">At the end of the month, you only pay for the <em>net</em> difference. Most 3kW+ systems result in a ₹0 bill.</p>
                            </div>
                        </Reveal>

                        {/* Mini Calculator CTA */}
                        <Reveal>
                            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 mb-8 text-white text-center">
                                <Calculator className="w-8 h-8 mx-auto mb-3 opacity-80" />
                                <h3 className="font-bold text-xl mb-2">Run Your Own Numbers</h3>
                                <p className="text-sm opacity-90 mb-4">Type your monthly bill → Get your exact subsidy, system size, and payback period.</p>
                                <motion.a
                                    href="/#calculator-section"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="inline-block bg-white text-emerald-700 font-bold px-8 py-3 rounded-xl hover:bg-emerald-50 transition shadow-lg"
                                >
                                    Open Free Calculator →
                                </motion.a>
                            </div>
                        </Reveal>

                        <AdBreak />

                        {/* ── CHAPTER 2: HARDWARE ──────────────────────── */}
                        <ChapterHeading
                            id="hardware"
                            emoji="⚡"
                            number="Chapter 2"
                            title="The Hardware — What to Buy (and What to Avoid)"
                            subtitle="Don't let your installer upsell you on cheap components. Here's what actually matters."
                        />

                        <Reveal>
                            <p className="text-text-secondary leading-relaxed mb-8">
                                A solar system has 3 main components: the <strong>Inverter</strong> (the brain), the <strong>Panels</strong> (the muscle), and the <strong>Battery</strong> (the backup). Here's our unbiased breakdown.
                            </p>
                        </Reveal>

                        <Reveal>
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-text-primary">
                                <Zap className="w-5 h-5 text-amber-500" /> Sub-Section A: Inverters (The Brain)
                            </h3>
                            <p className="text-text-secondary mb-4">The inverter converts DC power from your panels to AC power for your home. A bad inverter = wasted panels.</p>
                        </Reveal>

                        <Reveal>
                            <div className="bg-amber-50 dark:bg-amber-900/10 border-2 border-amber-400 rounded-2xl p-5 mb-4">
                                <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">⭐ Best for Most People</div>
                                <p className="text-sm text-slate-700 dark:text-slate-300">The <strong>Luminous Zelio 1100</strong> is India's most popular pure sine wave inverter. Silent, reliable, and works with all sensitive appliances.</p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <ProductCard
                                icon="⚡"
                                name="Microtek iMerlyn 1050 Advanced Digital 900VA/725W Inverter"
                                rating={4.2}
                                reviewCount={850}
                                tagline="Support 1 Battery with 3 Year Warranty. Best value for Home, Office & Shops."
                                link="https://amzn.to/4cMVjpf"
                                badge="Editor's Choice"
                            />
                        </Reveal>

                        <Reveal delay={0.15}>
                            <ProductCard
                                icon="⚡"
                                name="V-Guard Prime 1150 Inverter — 1000VA / 12V Pure Sine Wave"
                                rating={4.4}
                                reviewCount={1200}
                                tagline="Reliable Power Backup with LED Display, Easy Installation & 3-Year Warranty."
                                link="https://amzn.to/4aBnIgJ"
                            />
                        </Reveal>

                        {/* Comparison table */}
                        <Reveal>
                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-slate-100 dark:bg-slate-800">
                                            <th className="p-3 text-left border border-border-color font-bold">Model</th>
                                            <th className="p-3 text-left border border-border-color font-bold">Efficiency</th>
                                            <th className="p-3 text-left border border-border-color font-bold">Warranty</th>
                                            <th className="p-3 text-left border border-border-color font-bold">Price</th>
                                            <th className="p-3 text-left border border-border-color font-bold">Best For</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { model: "Luminous Zelio 1100", eff: "94%", warranty: "24 mo", price: "₹6,500", best: "2BHK" },
                                            { model: "Microtek Solar 1135", eff: "93%", warranty: "24 mo", price: "₹5,200", best: "Budget" },
                                            { model: "Enphase IQ7 (Micro)", eff: "97%", warranty: "25 yr", price: "₹12k/panel", best: "Shaded roofs" },
                                        ].map((row) => (
                                            <tr key={row.model} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                <td className="p-3 border border-border-color font-medium">{row.model}</td>
                                                <td className="p-3 border border-border-color text-emerald-600">{row.eff}</td>
                                                <td className="p-3 border border-border-color">{row.warranty}</td>
                                                <td className="p-3 border border-border-color font-bold">{row.price}</td>
                                                <td className="p-3 border border-border-color text-slate-500">{row.best}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Reveal>

                        <AdBreak />

                        {/* Panels */}
                        <Reveal>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-text-primary">
                                <Sun className="w-5 h-5 text-amber-500" /> Sub-Section B: Panels (The Muscle)
                            </h3>
                        </Reveal>

                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4 mb-6"
                        >
                            {[
                                { type: "Mono-PERC", eff: "22% eff.", desc: "Higher efficiency. Better in low light. Ideal for small roofs.", price: "₹28–35/Wp", color: "bg-slate-900 text-white", btnColor: "bg-blue-600 hover:bg-blue-700", btnText: "Shop Mono-PERC →", link: "https://www.amazon.in/s?k=mono+perc+solar+panel&tag=solaraudit-21", badge: "text-blue-400" },
                                { type: "Polycrystalline", eff: "17% eff.", desc: "Lower cost. Good if you have plenty of roof space.", price: "₹20–25/Wp", color: "bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800", btnColor: "bg-amber-500 hover:bg-amber-600", btnText: "Shop Poly →", link: "https://www.amazon.in/s?k=polycrystalline+solar+panel&tag=solaraudit-21", badge: "text-amber-600" },
                            ].map((p) => (
                                <motion.div key={p.type} variants={fadeUp} whileHover={{ y: -4 }} className={`${p.color} rounded-2xl p-5`}>
                                    <div className={`text-xs font-bold uppercase tracking-wider ${p.badge} mb-2`}>{p.type}</div>
                                    <div className="text-2xl font-bold mb-1">{p.eff}</div>
                                    <p className="text-sm opacity-80 mb-3">{p.desc}</p>
                                    <div className="text-xs opacity-60 mb-3">{p.price}</div>
                                    <a href={p.link} target="_blank" rel="nofollow noopener" className={`block text-center ${p.btnColor} text-white text-xs font-bold py-2 rounded-lg transition`}>{p.btnText}</a>
                                </motion.div>
                            ))}
                        </motion.div>

                        <Reveal>
                            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 mb-8 text-sm">
                                <strong className="text-emerald-800 dark:text-emerald-400">Our Verdict:</strong>
                                <span className="text-slate-700 dark:text-slate-300"> Small roof (&lt;400 sq ft)? Go Mono-PERC. Large roof with no shade? Save money with Poly.</span>
                            </div>
                        </Reveal>

                        {/* Batteries */}
                        <Reveal>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-text-primary">
                                <Battery className="w-5 h-5 text-emerald-500" /> Sub-Section C: Batteries (The Backup)
                            </h3>
                            <p className="text-text-secondary mb-4">
                                If you have frequent power cuts (&gt;2 hrs/day), you need a battery. Use <strong>Solar C10 batteries</strong> — not regular tubular batteries.
                            </p>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <ProductCard
                                icon="🔋"
                                name="AYUDH 12V 100AH LiFePO4 Inverter Battery"
                                rating={4.5}
                                reviewCount={980}
                                tagline="Solar Compatible, 20 Years Life. Works with any normal inverter. 5 Years Warranty."
                                link="https://amzn.to/4aQKTSS"
                                badge="Best Seller"
                            />
                        </Reveal>

                        {/* ── CHAPTER 3: INSTALLATION ──────────────────── */}
                        <ChapterHeading
                            id="installation"
                            emoji="🔧"
                            number="Chapter 3"
                            title="The Installation — What Happens After You Sign"
                            subtitle="Most installers take 5–7 days. Here's what to expect, and how to not get scammed."
                        />

                        {/* Timeline — Modern Vertical */}
                        <div className="relative mb-10">
                            {/* Vertical line */}
                            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-teal-500 opacity-30 -translate-x-1/2" />

                            <div className="space-y-0">
                                {[
                                    {
                                        day: "Day 1",
                                        icon: "🔍",
                                        title: "Site Survey",
                                        desc: "Installer visits to check roof angle, shadow, and load. Should be FREE. If they charge for it, walk away.",
                                        accent: "emerald",
                                        status: "Start here",
                                        tip: "Ask for a shadow analysis report",
                                    },
                                    {
                                        day: "Day 2",
                                        icon: "📋",
                                        title: "Quotation & Agreement",
                                        desc: "You receive a detailed quote. Verify panel brand, inverter model, warranty terms, and subsidy handling before signing.",
                                        accent: "violet",
                                        status: "Read carefully",
                                        tip: "Never pay 100% upfront",
                                    },
                                    {
                                        day: "Day 3–4",
                                        icon: "🚚",
                                        title: "Material Delivery",
                                        desc: "Panels, mounting structure, cables, and inverter arrive. Cross-check every item against the agreed quotation list.",
                                        accent: "amber",
                                        status: "Verify items",
                                        tip: "Photograph the brand labels",
                                    },
                                    {
                                        day: "Day 5–6",
                                        icon: "⚙️",
                                        title: "Installation",
                                        desc: "Panels are mounted, wiring is done, and the inverter is installed. A 3kW system typically takes 1–2 days.",
                                        accent: "blue",
                                        status: "The big day",
                                        tip: "Stay home and supervise",
                                    },
                                    {
                                        day: "Day 7",
                                        icon: "📡",
                                        title: "DISCOM Application",
                                        desc: "Installer submits net meter application to your electricity board. This is the slow part — approval can take weeks.",
                                        accent: "orange",
                                        status: "⏳ Be patient",
                                        tip: "Get the application receipt",
                                    },
                                    {
                                        day: "Day 30",
                                        icon: "🎉",
                                        title: "Net Meter Activated!",
                                        desc: "DISCOM installs the bi-directional meter. Your system is live. You're now officially solar-powered!",
                                        accent: "teal",
                                        status: "🏆 You made it",
                                        tip: "Check your first bill carefully",
                                    },
                                ].map((step, i) => {
                                    const isRight = i % 2 === 0;
                                    const accentMap: Record<string, { node: string; badge: string; text: string; border: string }> = {
                                        emerald: { node: "bg-emerald-500", badge: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-200 dark:border-emerald-800/60" },
                                        violet: { node: "bg-violet-500", badge: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-800", text: "text-violet-600 dark:text-violet-400", border: "border-violet-200 dark:border-violet-800/60" },
                                        amber: { node: "bg-amber-500", badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800", text: "text-amber-600 dark:text-amber-400", border: "border-amber-200 dark:border-amber-800/60" },
                                        blue: { node: "bg-blue-500", badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800", text: "text-blue-600 dark:text-blue-400", border: "border-blue-200 dark:border-blue-800/60" },
                                        orange: { node: "bg-orange-500", badge: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800", text: "text-orange-600 dark:text-orange-400", border: "border-orange-200 dark:border-orange-800/60" },
                                        teal: { node: "bg-teal-500", badge: "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 border-teal-200 dark:border-teal-800", text: "text-teal-600 dark:text-teal-400", border: "border-teal-200 dark:border-teal-800/60" },
                                    };
                                    const a = accentMap[step.accent];
                                    return (
                                        <div key={step.day} className="relative flex items-start md:items-center gap-0 pb-8 last:pb-0">
                                            {/* Mobile: left-aligned layout */}
                                            <div className="flex md:hidden items-start gap-4 w-full pl-14">
                                                {/* Node on the line */}
                                                <div className={`absolute left-6 -translate-x-1/2 w-5 h-5 rounded-full ${a.node} ring-4 ring-white dark:ring-slate-950 shadow-lg flex items-center justify-center mt-1`}>
                                                    <span className="text-[10px]">{step.icon}</span>
                                                </div>
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
                                                    className={`bg-white dark:bg-slate-900 border ${a.border} rounded-2xl p-5 shadow-sm w-full`}
                                                >
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className={`text-xs font-bold uppercase tracking-widest ${a.text}`}>{step.day}</span>
                                                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-bold ${a.badge}`}>{step.status}</span>
                                                    </div>
                                                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">{step.title}</h4>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{step.desc}</p>
                                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-500">
                                                        <span className="text-emerald-500">💡</span>
                                                        <span>{step.tip}</span>
                                                    </div>
                                                </motion.div>
                                            </div>

                                            {/* Desktop: alternating layout */}
                                            <div className="hidden md:flex items-center w-full gap-0">
                                                {/* Left content */}
                                                <div className="flex-1 pr-8 flex justify-end">
                                                    {isRight ? (
                                                        <motion.div
                                                            initial={{ opacity: 0, x: -30 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
                                                            className={`bg-white dark:bg-slate-900 border ${a.border} rounded-2xl p-5 shadow-sm max-w-xs w-full`}
                                                        >
                                                            <div className="flex items-center justify-between mb-2">
                                                                <span className={`text-xs font-bold uppercase tracking-widest ${a.text}`}>{step.day}</span>
                                                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-bold ${a.badge}`}>{step.status}</span>
                                                            </div>
                                                            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">{step.title}</h4>
                                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{step.desc}</p>
                                                            <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                                                <span className="text-emerald-500">💡</span>
                                                                <span>{step.tip}</span>
                                                            </div>
                                                        </motion.div>
                                                    ) : <div className="max-w-xs w-full" />}
                                                </div>

                                                {/* Center node */}
                                                <div className="relative flex-shrink-0 flex flex-col items-center">
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        whileInView={{ scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ type: "spring", stiffness: 300, delay: i * 0.08 + 0.1 }}
                                                        className={`w-12 h-12 rounded-full ${a.node} ring-4 ring-white dark:ring-slate-950 shadow-lg flex items-center justify-center text-xl z-10`}
                                                    >
                                                        {step.icon}
                                                    </motion.div>
                                                </div>

                                                {/* Right content */}
                                                <div className="flex-1 pl-8 flex justify-start">
                                                    {!isRight ? (
                                                        <motion.div
                                                            initial={{ opacity: 0, x: 30 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
                                                            className={`bg-white dark:bg-slate-900 border ${a.border} rounded-2xl p-5 shadow-sm max-w-xs w-full`}
                                                        >
                                                            <div className="flex items-center justify-between mb-2">
                                                                <span className={`text-xs font-bold uppercase tracking-widest ${a.text}`}>{step.day}</span>
                                                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-bold ${a.badge}`}>{step.status}</span>
                                                            </div>
                                                            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">{step.title}</h4>
                                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{step.desc}</p>
                                                            <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                                                <span className="text-emerald-500">💡</span>
                                                                <span>{step.tip}</span>
                                                            </div>
                                                        </motion.div>
                                                    ) : <div className="max-w-xs w-full" />}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>



                        <Reveal>
                            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-700 rounded-2xl p-6 mb-6">
                                <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-2">🌤️ The Shadow Test (Do This Before Signing)</h4>
                                <p className="text-sm text-amber-800 dark:text-amber-200">
                                    Stand on your roof at <strong>9 AM</strong> and <strong>4 PM</strong>. If you see shadow from a water tank, parapet, or tree — that area will lose 20–40% efficiency.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <ProductCard
                                icon="🔌"
                                name="Tuya WiFi Smart Energy Meter 63A 230V — DIN Rail"
                                rating={4.0}
                                reviewCount={320}
                                tagline="Earth Leakage & Surge Protection. Smart Life APP Remote Control. Monitor your solar output."
                                link="https://amzn.to/4qXHdVI"
                            />
                        </Reveal>

                        <AdBreak />

                        {/* ── CHAPTER 4: MAINTENANCE ───────────────────── */}
                        <ChapterHeading
                            id="maintenance"
                            emoji="🧹"
                            number="Chapter 4"
                            title="Maintenance — The ₹500/Month You're Losing to Dust"
                            subtitle="Solar panels are low-maintenance, not no-maintenance. Here's what you actually need."
                        />

                        <Reveal>
                            <div className="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-2xl p-6 mb-6">
                                <h4 className="font-bold text-rose-800 dark:text-rose-300 mb-2">The Dust Problem</h4>
                                <p className="text-sm text-rose-700 dark:text-rose-200">
                                    A thin layer of dust can reduce your panel efficiency by <strong>15%</strong>. On a 3kW system, that's ~2 units/day = <strong>₹500 lost every month</strong>.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div className="grid grid-cols-2 gap-4 mb-6 rounded-2xl overflow-hidden border border-border-color">
                                <div className="relative">
                                    <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400" alt="Dirty panel" className="w-full h-40 object-cover grayscale" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-rose-600/80 text-white text-xs font-bold text-center py-1">❌ Dirty — 15% less power</div>
                                </div>
                                <div className="relative">
                                    <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400" alt="Clean panel" className="w-full h-40 object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-emerald-600/80 text-white text-xs font-bold text-center py-1">✅ Clean — Full power</div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <ProductCard
                                icon="🧹"
                                name="Connecticut Solar Panel Cleaning Brush Kit — 3 Meter"
                                rating={4.3}
                                reviewCount={1500}
                                tagline="Heavy-Duty Nylon Water Brush with Telescopic Pole. Reaches 3-storey roofs safely."
                                link="https://amzn.to/4rHlEdc"
                                badge="Best Seller"
                            />
                        </Reveal>

                        <Reveal delay={0.15}>
                            <ProductCard
                                icon="🧹"
                                name="Fieldstar Solar Cleaning Kit — 18FT/5.4M Telescopic Pole"
                                rating={4.4}
                                reviewCount={720}
                                tagline="Window & Solar Panel Cleaning Brush with Nylon Bristles, Squeegee & Water Fed PU Pipe."
                                link="https://amzn.to/4s92Z9S"
                            />
                        </Reveal>

                        {/* ── CHAPTER 5: CHECKLIST & FAQ ───────────────── */}
                        <ChapterHeading
                            id="checklist"
                            emoji="✅"
                            number="Chapter 5"
                            title="The Go-Live Checklist & FAQ"
                            subtitle="Before you sign anything, run through this list. It's saved people ₹50,000+ in mistakes."
                        />

                        {/* Checklist */}
                        <Reveal>
                            <div className="bg-white dark:bg-slate-900 border border-border-color rounded-2xl p-6 mb-8">
                                <h3 className="font-bold text-lg mb-4 text-text-primary">✅ The Complete Go-Live Checklist</h3>
                                <div className="space-y-3">
                                    {[
                                        { done: true, text: "Electricity bill in your name (not older than 3 months)" },
                                        { done: true, text: "Aadhar card with linked mobile number for OTP" },
                                        { done: true, text: "Bank passbook for subsidy transfer (DBT)" },
                                        { done: true, text: "Roof photo showing shadow-free area" },
                                        { done: true, text: "Registered on pmsuryaghar.gov.in with Consumer Number" },
                                        { done: false, text: "DISCOM feasibility approval received" },
                                        { done: false, text: "Installer is MNRE-registered (check the portal)" },
                                        { done: false, text: "Panel brand and model verified on MNRE approved list" },
                                        { done: false, text: "Net meter application submitted after installation" },
                                        { done: false, text: "Commissioning certificate received → Subsidy claimed" },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className={`shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 ${item.done ? "bg-emerald-500 border-emerald-500" : "border-slate-300 dark:border-slate-600"}`}>
                                                {item.done && <CheckCircle className="w-3 h-3 text-white" />}
                                            </div>
                                            <span className={`text-sm ${item.done ? "text-text-secondary line-through" : "text-text-primary"}`}>{item.text}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* FAQ */}
                        <Reveal>
                            <h3 className="text-xl font-bold mb-4 text-text-primary">Frequently Asked Questions</h3>
                        </Reveal>
                        <div className="space-y-3 mb-12">
                            {[
                                { q: "Does solar work during rain or cloudy days?", a: "Yes, but at reduced efficiency (20–40% of rated output). Panels generate power from diffused light, not just direct sunlight. India's monsoon months typically see 30–50% lower generation." },
                                { q: "What if I move houses?", a: "You can dismantle and reinstall the system at your new home. Expect ₹15,000–25,000 in reinstallation costs. The subsidy is tied to the address, so you cannot claim it again for the new location." },
                                { q: "Can I install solar in an apartment?", a: "Yes, if you have terrace rights or the society allows it. Many housing societies now have 'community solar' setups where the generation is split among flat owners." },
                                { q: "What happens if the inverter fails after warranty?", a: "Inverter replacement costs ₹5,000–15,000 depending on the model. Budget for one replacement in the 10-year lifecycle. Panels typically last 25 years with no major maintenance." },
                                { q: "How long does the PM Surya Ghar subsidy take to arrive?", a: "After submitting your commissioning certificate and bank details on the portal, the subsidy is credited within 30 working days via DBT directly to your bank account." },
                            ].map((faq, i) => (
                                <motion.details
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="group border border-border-color rounded-xl overflow-hidden"
                                >
                                    <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors list-none">
                                        <span>{faq.q}</span>
                                        <span className="text-emerald-500 group-open:rotate-45 transition-transform text-xl font-light">+</span>
                                    </summary>
                                    <div className="px-4 pb-4 text-sm text-text-secondary leading-relaxed border-t border-border-color pt-4">
                                        {faq.a}
                                    </div>
                                </motion.details>
                            ))}
                        </div>

                        {/* Final CTA */}
                        <Reveal>
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="bg-gradient-to-br from-slate-900 to-emerald-950 rounded-2xl p-8 text-white text-center"
                            >
                                <div className="text-4xl mb-4">🚀</div>
                                <h3 className="text-2xl font-bold mb-3">Ready to Go Solar?</h3>
                                <p className="text-slate-300 mb-6 max-w-md mx-auto">
                                    You've read the whole guide. Now run your numbers and see exactly what you'll save.
                                </p>
                                <motion.a
                                    href="/#calculator-section"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-emerald-500/30 text-lg"
                                >
                                    <Calculator className="w-5 h-5" />
                                    Calculate My Savings
                                </motion.a>
                            </motion.div>
                        </Reveal>

                    </main>

                    <RightRail />
                </div>
            </div>

            {/* Mobile Sticky Footer Ad */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 border-t border-border-color h-14 flex items-center justify-center shadow-lg">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Advertisement</span>
            </div>
        </div>
    );
}
