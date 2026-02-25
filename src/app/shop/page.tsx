"use client";

import { AmazonBounty } from "@/components/ads/AmazonBounty";
import { useState, useMemo } from "react";
import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { Filter, ShieldCheck, Star, Truck } from "lucide-react";
import { Fireflies } from "@/components/ui/fireflies";
import { motion } from "framer-motion";

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = ["All", "Inverters", "Panels", "Cleaning Kits", "Batteries", "Gadgets"];

    const filteredProducts = useMemo(() => {
        if (selectedCategory === "All") return products;
        return products.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-emerald-500/30">
            <Navbar />
            <Fireflies />

            {/* Hero — matches homepage aurora */}
            <section className="relative overflow-hidden pb-12 pt-0">
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

            <main className="container mx-auto px-4 pb-16">
                {/* Mobile: Horizontal scrollable category pills */}
                <div className="md:hidden mb-6 -mx-4 px-4">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
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
            <Footer />
        </div>
    );
}
