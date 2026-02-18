"use client";

import { AmazonBounty } from "@/components/ads/AmazonBounty";
import { useState, useMemo } from "react";
import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { Filter, SlidersHorizontal, Tag } from "lucide-react";

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = ["All", "Inverters", "Panels", "Cleaning Kits", "Batteries", "Gadgets"];

    const filteredProducts = useMemo(() => {
        if (selectedCategory === "All") return products;
        return products.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans">
            <Navbar />

            <main className="container mx-auto px-4 py-8">
                {/* Hero / Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Solar Store</h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        Hand-picked gear for your solar journey. Verified for quality and Indian conditions.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-64 flex-shrink-0">
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
