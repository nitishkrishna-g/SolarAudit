"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "@/components/core/Calculator";
import { ProductCard } from "@/components/guides/ProductCard";
import { CheckCircle2, Zap } from "lucide-react";

export function CalculatorSection() {
    const [isCalculatorExpanded, setIsCalculatorExpanded] = useState(false);

    return (
        <section
            className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative z-10"
            id="calculator-section"
        >
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* LEFT COLUMN: Content & Buying Links */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                                Calculate Your{" "}
                                <span className="text-emerald-600 dark:text-emerald-400">
                                    Potential Savings
                                </span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Stop guessing. Our advanced calculator uses real-time tariff data
                                and the 2026 PM Surya Ghar subsidy rates to give you an accurate
                                ROI estimate.
                            </p>
                            <ul className="space-y-3 pt-2">
                                {[
                                    "Instant Subsidy Calculation",
                                    "Monthly Savings Estimation",
                                    "ROI & Payback Period",
                                    "System Size Recommendation",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
                                    >
                                        <CheckCircle2
                                            className="w-5 h-5 text-emerald-500"
                                            aria-hidden="true"
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* BUYING LINKS / ADS */}
                        <div className="space-y-0">
                            <ProductCard
                                icon="⚡"
                                name="Microtek iMerlyn 1050 Advanced Digital 900VA/725W Inverter"
                                rating={4.2}
                                reviewCount={850}
                                tagline="Support 1 Battery with 3 Year Warranty. Best value for Home, Office & Shops."
                                link="https://amzn.to/4cMVjpf"
                                badge="Best Seller"
                            />

                            {/* DYNAMIC PRODUCT EXPANSION */}
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: isCalculatorExpanded ? "auto" : 0,
                                    opacity: isCalculatorExpanded ? 1 : 0,
                                }}
                            >
                                <div className="pt-2">
                                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase tracking-wider mb-2">
                                        <Zap className="w-4 h-4" aria-hidden="true" /> Recommended
                                        Add-ons
                                    </div>

                                    <ProductCard
                                        icon="🧹"
                                        name="Connecticut Solar Panel Cleaning Brush Kit"
                                        rating={4.3}
                                        reviewCount={1500}
                                        tagline="Heavy-Duty Nylon Water Brush with Telescopic Pole. Reaches 3-storey roofs safely."
                                        link="https://amzn.to/4rHlEdc"
                                    />

                                    <ProductCard
                                        icon="🔋"
                                        name="AYUDH 12V 100AH LiFePO4 Inverter Battery"
                                        rating={4.5}
                                        reviewCount={980}
                                        tagline="Solar Compatible, 20 Years Life. Works with any normal inverter."
                                        link="https://amzn.to/4aQKTSS"
                                    />

                                    <ProductCard
                                        icon="🔌"
                                        name="Tuya WiFi Smart Energy Meter 63A 230V"
                                        rating={4.0}
                                        reviewCount={320}
                                        tagline="Track your solar output live on your phone. Easy DIN rail installation."
                                        link="https://amzn.to/4qXHdVI"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Calculator */}
                    <div className="w-full max-w-xl mx-auto lg:ml-auto sticky top-24">
                        <Calculator
                            onCalculationComplete={() => setIsCalculatorExpanded(true)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
