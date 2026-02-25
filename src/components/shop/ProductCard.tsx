"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
    product: Product;
}

/* ─── Category colour + icon map ─────────────────────────────── */
const categoryMeta: Record<string, { icon: string; accent: string }> = {
    Inverters: { icon: "⚡", accent: "text-blue-600 dark:text-blue-400" },
    Panels: { icon: "☀️", accent: "text-amber-600 dark:text-amber-400" },
    "Cleaning Kits": { icon: "🧹", accent: "text-cyan-600 dark:text-cyan-400" },
    Batteries: { icon: "🔋", accent: "text-green-600 dark:text-green-400" },
    Gadgets: { icon: "🔌", accent: "text-purple-600 dark:text-purple-400" },
};

export function ProductCard({ product }: ProductCardProps) {
    const meta = categoryMeta[product.category] ?? categoryMeta.Gadgets;
    const fullStars = Math.floor(product.rating ?? 0);
    const hasHalf = (product.rating ?? 0) % 1 >= 0.5;

    return (
        <motion.a
            href={product.affiliateLink}
            target="_blank"
            rel="nofollow noopener"
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative group flex flex-col rounded-2xl overflow-hidden cursor-pointer"
            style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
        >
            {/* Gradient border glow on hover */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: "linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(6,182,212,0.08) 100%)",
                    boxShadow: "0 0 0 1px rgba(16,185,129,0.3), 0 8px 32px rgba(16,185,129,0.15)",
                }}
            />

            {/* Shimmer sweep on hover */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>

            {/* Badges */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                {product.isBestSeller && (
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded-full border border-amber-200 uppercase tracking-wide">
                        Best Seller
                    </span>
                )}
                {product.isPrime && (
                    <span className="bg-[#00A8E1] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                        Prime
                    </span>
                )}
            </div>

            {/* Category Icon Header */}
            <div className="flex items-center justify-center py-4 sm:py-6 bg-white/5">
                <span className="text-3xl sm:text-4xl select-none">{meta.icon}</span>
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4 flex flex-col flex-grow relative z-10">
                <div className="mb-2">
                    <span className={`text-[10px] sm:text-xs font-medium uppercase tracking-wider ${meta.accent}`}>{product.category}</span>
                    <h3 className="font-bold text-xs sm:text-base text-slate-900 dark:text-white leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 min-h-[32px] sm:min-h-[40px]">
                        {product.title}
                    </h3>
                </div>

                {/* Rating */}
                {product.rating && (
                    <div className="flex items-center gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                        <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${i < fullStars
                                        ? "text-amber-400 fill-amber-400"
                                        : i === fullStars && hasHalf
                                            ? "text-amber-400 fill-amber-200"
                                            : "text-slate-300 dark:text-slate-600"
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                            {product.rating.toFixed(1)}
                        </span>
                    </div>
                )}

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 line-clamp-2 flex-grow italic leading-snug hidden sm:block">
                    {product.description}
                </p>

                {/* CTA */}
                <div className="mt-auto">
                    <span className="inline-flex items-center justify-center gap-1 sm:gap-2 w-full bg-gradient-to-r from-amber-500 to-orange-500 group-hover:from-amber-400 group-hover:to-orange-400 text-white font-bold py-2 sm:py-2.5 px-2 sm:px-4 rounded-xl transition-all shadow-lg shadow-amber-500/25 group-hover:shadow-amber-500/40 text-xs sm:text-sm">
                        <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Amazon Deal</span>
                        <span className="sm:hidden">Buy Now</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                    </span>
                </div>
            </div>
        </motion.a>
    );
}
