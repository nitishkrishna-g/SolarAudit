"use client";

import { Star, Check, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/Button";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
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

            {/* Image */}
            <div className="relative h-48 bg-white p-4 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                    {/* Using next/image requires domain config, sticking to img for external URLs if not configured, but let's try to use standard img for simplicity with external affiliate images */}
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                <div className="mb-2">
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{product.category}</span>
                    <h3 className="font-bold text-slate-900 dark:text-white leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 min-h-[40px]">
                        {product.title}
                    </h3>
                </div>

                {/* Rating */}
                {product.rating && (
                    <div className="flex items-center gap-1 mb-3">
                        <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating!) ? "fill-current" : "text-slate-300 dark:text-slate-700"}`} />
                            ))}
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400">({product.reviews})</span>
                    </div>
                )}

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 flex-grow">
                    {product.description}
                </p>

                {/* Price & Action */}
                <div className="mt-auto">
                    <div className="flex items-baseline gap-1 mb-3">
                        <span className="text-lg font-bold text-slate-900 dark:text-white">
                            ₹{product.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                            ₹{(product.price * 1.2).toLocaleString()}
                        </span>
                    </div>

                    <a
                        href={product.affiliateLink}
                        target="_blank"
                        rel="nofollow noopener"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-xl ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black border border-transparent hover:border-[#F7CA00] transition-colors font-medium text-sm h-10 px-4 py-2"
                    >
                        Check Price on Amazon
                    </a>
                </div>
            </div>
        </div>
    );
}
