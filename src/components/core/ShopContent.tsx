"use client";

import { AmazonBounty } from "@/components/ads/AmazonBounty";
import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { Filter, ShieldCheck, Star, Truck } from "lucide-react";
import { motion } from "framer-motion";

export function ShopContent() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = ["All", "Inverters", "Panels", "Cleaning Kits", "Batteries", "Gadgets"];

    const filteredProducts = useMemo(() => {
        if (selectedCategory === "All") return products;
        return products.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <>
            {/* Hero — matches homepage aurora */}
            <section className="relative overflow-hidden pb-8 pt-0">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/20 blur-[100px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-500/15 blur-[100px]" />
                </div>
                <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide mb-5"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        Curated for Indian Conditions
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4"
                    >
                        Solar Store.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Gear that actually works.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8"
                    >
                        Hand-picked products verified for quality and Indian weather conditions. Every link is an affiliate — we earn a small commission at no extra cost to you.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400"
                    >
                        <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Quality Verified</div>
                        <div className="flex items-center gap-2"><Star className="w-4 h-4 text-emerald-500" /> Top Rated on Amazon</div>
                        <div className="flex items-center gap-2"><Truck className="w-4 h-4 text-emerald-500" /> Prime Eligible</div>
                    </motion.div>
                </div>
            </section>

            <main className="container mx-auto px-4 pb-16 pt-8">
                {/* Mobile: Horizontal scrollable category pills */}
                <div className="md:hidden mt-4 mb-6 -mx-4 px-4">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${selectedCategory === cat
                                    ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-emerald-400"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Filters — desktop only */}
                    <aside className="hidden md:block w-64 flex-shrink-0">
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sticky top-24">
                            <div className="flex items-center gap-2 mb-4 font-bold text-slate-900 dark:text-white">
                                <Filter className="w-4 h-4" />
                                <span>Filters</span>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">
                                    Categories
                                </label>
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === cat
                                            ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 font-medium"
                                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-6 space-y-4">
                                <AmazonBounty type="prime" />
                                <AmazonBounty type="business" />
                            </div>

                            <div className="mt-8 p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
                                <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-400 mb-2">Need Help?</h4>
                                <p className="text-xs text-emerald-700 dark:text-emerald-500 mb-3">
                                    Confused about compatibility?
                                </p>
                                <a href="/guides" className="text-xs font-bold underline text-emerald-600 hover:text-emerald-500">
                                    Read our Buying Guides &rarr;
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-grow">
                        {/* Category editorial introductions */}
                        {selectedCategory === "All" && (
                            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 mb-6">
                                <h2 className="font-bold text-slate-900 dark:text-white mb-2 text-base">How We Select Products</h2>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Every product on this page is independently reviewed by our editorial team against three criteria: build quality for Indian climate conditions (heat, humidity, dust), verified customer ratings above 4.0 on Amazon India, and appropriate price-to-performance ratio for residential use. We do not accept manufacturer payments for placement. Affiliate commissions are earned at the same rate regardless of which product you choose, so our recommendations are never influenced by commission size. Use the category filters to find guides for each product type.
                                </p>
                            </div>
                        )}
                        {selectedCategory === "Inverters" && (
                            <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl p-5 mb-6">
                                <h2 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 text-base">How to Choose a Solar Inverter</h2>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                                    The inverter converts DC electricity from your panels into the AC power your home appliances use. It is the most critical component for long-term system performance — a low-quality inverter can waste 10–15% of your generation, costing ₹400–600 per month in lost savings. For most Indian residential systems (3–5kW), a <strong className="text-slate-800 dark:text-slate-300">string inverter</strong> is the best value choice. Choose a <strong className="text-slate-800 dark:text-slate-300">hybrid inverter</strong> only if you plan to add battery storage. Micro inverters are worth their premium only for roofs with significant shading. Minimum warranty to accept: 5 years. Check that the brand has an active service centre in your city before purchasing.
                                </p>
                                <a href="/guides/solar-inverter-buying-guide" className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline">Read our full Inverter Buying Guide &rarr;</a>
                            </div>
                        )}
                        {selectedCategory === "Panels" && (
                            <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-5 mb-6">
                                <h2 className="font-bold text-amber-800 dark:text-amber-300 mb-2 text-base">Which Solar Panel Brand to Trust in India</h2>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                                    Only purchase panels from brands on MNRE's Approved List of Models and Manufacturers (ALMM) — non-listed panels disqualify you from PM Surya Ghar subsidy. For Indian conditions, prioritise Mono-PERC technology over polycrystalline: the 15–20% price premium is recovered within 2–3 years through higher generation. Look for a temperature coefficient better than -0.40%/°C and a 25-year linear performance warranty guaranteeing at least 80% output at year 25. Tier-1 Indian manufacturers — WAAREE, Adani Solar, Vikram Solar, Tata Power Solar — all meet these benchmarks and have reliable domestic warranty support.
                                </p>
                                <a href="/guides/solar-panel-types-india" className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline">Read our full Panel Technology Guide &rarr;</a>
                            </div>
                        )}
                        {selectedCategory === "Cleaning Kits" && (
                            <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/50 rounded-2xl p-5 mb-6">
                                <h2 className="font-bold text-blue-800 dark:text-blue-300 mb-2 text-base">Essential Accessories for Long Panel Life</h2>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                                    Regular cleaning is the single highest-ROI maintenance action a solar owner can take. In North Indian cities, uncleaned panels lose 20–30% of their output within two weeks of dust accumulation — costing ₹500–750 per month in lost savings. The right cleaning kit for Indian conditions: a telescopic aluminium pole (3–5 metres) with a swivel soft nylon brush head, plus a garden hose with a gentle spray attachment. Avoid: metal bristle brushes (scratch anti-reflective coating), detergents (leave residue), and high-pressure washers (damage panel seals). Clean in the early morning or evening when panels are cool.
                                </p>
                                <a href="/guides/solar-panel-maintenance" className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">Read our full Maintenance Guide &rarr;</a>
                            </div>
                        )}
                        {selectedCategory === "Batteries" && (
                            <div className="bg-violet-50 dark:bg-violet-900/10 border border-violet-200 dark:border-violet-800/50 rounded-2xl p-5 mb-6">
                                <h2 className="font-bold text-violet-800 dark:text-violet-300 mb-2 text-base">Do You Actually Need a Battery?</h2>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                                    Battery storage adds ₹60,000–₹1,50,000 to your system cost and extends payback by 12–24 months. For most urban households with grid reliability above 22 hours per day, a grid-tied system without battery gives better financial returns. Batteries are worth the investment if: your area receives more than 2 hours of daily power cuts on average, or you have critical loads (medical equipment, home office) that cannot tolerate outages. If you decide to add a battery, choose LiFePO4 chemistry — safer, longer cycle life (3,000+ cycles vs 500–800 for lead-acid), and better temperature tolerance for Indian conditions.
                                </p>
                            </div>
                        )}
                        {selectedCategory === "Gadgets" && (
                            <div className="bg-teal-50 dark:bg-teal-900/10 border border-teal-200 dark:border-teal-800/50 rounded-2xl p-5 mb-6">
                                <h2 className="font-bold text-teal-800 dark:text-teal-300 mb-2 text-base">Smart Monitoring: Know What Your System is Doing</h2>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                                    Solar monitoring tools let you track real-time generation, identify underperforming panels, and detect faults within hours rather than weeks. Most modern inverters include a Wi-Fi monitoring module — check that yours is activated and that you can see daily generation data in the app. Third-party energy monitors add a layer of independent verification, ensuring your DISCOM's net meter readings match your own records. This is especially useful when disputing a billing error with your DISCOM in the first year of operation.
                                </p>
                            </div>
                        )}

                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-slate-500">No products found in this category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}
