"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
    image: string;
    name: string;
    rating: number;
    reviewCount: number;
    tagline: string;
    price?: string;
    link: string;
    badge?: string;
}

export function ProductCard({ image, name, rating, reviewCount, tagline, price, link, badge }: ProductCardProps) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    return (
        <motion.a
            href={link}
            target="_blank"
            rel="nofollow noopener"
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative group flex flex-col sm:flex-row items-center gap-5 p-5 rounded-2xl my-6 overflow-hidden cursor-pointer"
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

            {/* Badge */}
            {badge && (
                <div className="absolute -top-px left-4 px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-b-lg shadow-lg shadow-emerald-500/30 z-10">
                    ⭐ {badge}
                </div>
            )}

            {/* Product image */}
            <div className="relative shrink-0 w-24 h-24 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center p-2 shadow-inner group-hover:shadow-emerald-500/10 group-hover:shadow-lg transition-shadow">
                <img src={image} alt={name} className="max-w-full max-h-full object-contain" />
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left relative z-10">
                <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {name}
                </h4>

                {/* Stars */}
                <div className="flex items-center justify-center sm:justify-start gap-1 mb-1.5">
                    <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${i < fullStars
                                        ? "text-amber-400 fill-amber-400"
                                        : i === fullStars && hasHalf
                                            ? "text-amber-400 fill-amber-200"
                                            : "text-slate-300 dark:text-slate-600"
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                        {rating.toFixed(1)} ({reviewCount.toLocaleString()} reviews)
                    </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 italic leading-snug">{tagline}</p>

                {price && (
                    <p className="text-lg font-bold text-slate-900 dark:text-white mt-1.5 tabular-nums">{price}</p>
                )}
            </div>

            {/* CTA */}
            <div className="shrink-0 relative z-10">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:from-amber-400 group-hover:to-orange-400 text-white font-bold py-3 px-5 rounded-xl transition-all shadow-lg shadow-amber-500/25 group-hover:shadow-amber-500/40 text-sm whitespace-nowrap">
                    <ShoppingCart className="w-4 h-4" />
                    Amazon Deal
                    <ExternalLink className="w-3 h-3 opacity-70" />
                </span>
            </div>
        </motion.a>
    );
}
