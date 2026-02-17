"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin,
    IndianRupee,
    Sun,
    Moon,
    SwitchCamera,
    ShieldCheck,
    ChevronsUpDown,
    Check
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Slider } from "@/components/ui/Slider";
import { solarData, StateData } from "@/data/solarData";
import { calculateSolar } from "@/utils/calculator";
import { cn } from "@/lib/utils";
import { LeadModal } from "@/components/LeadModal";

export function Calculator() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Form State
    const [selectedState, setSelectedState] = useState<StateData | null>(null);
    const [billAmount, setBillAmount] = useState(4500);
    const [roofType, setRoofType] = useState<"concrete" | "tiled">("concrete");

    // Combobox State
    const [comboboxOpen, setComboboxOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    const filteredStates = useMemo(() => {
        return solarData.filter((state) =>
            state.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    // Calculation Result
    const result = useMemo(() => {
        if (!selectedState) return null;
        return calculateSolar(billAmount, selectedState, roofType);
    }, [selectedState, billAmount, roofType]);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Format currency
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(value);
    };

    const formatLakhs = (value: number) => {
        const lakhs = value / 100000;
        return `₹${lakhs.toFixed(2)} Lakhs`;
    };

    return (
        <div className="w-full max-w-md mx-auto relative rounded-3xl overflow-hidden glass-panel border border-slate-200 dark:border-slate-800 shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-all">

            {/* Header */}
            <div className="p-6 border-b border-border-color flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold tracking-tight text-text-primary">Solar Audit 2026</h2>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-medium text-text-secondary">Live Policy Data</span>
                    </div>
                </div>

                {/* Theme Toggle within Widget */}
                {mounted && (
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-text-primary"
                        aria-label="Toggle widget theme"
                    >
                        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                )}
            </div>

            {/* Input Section */}
            <div className="p-6 space-y-8">

                {/* State Selector */}
                <div className="space-y-3 relative z-20">
                    <label className="text-sm font-medium text-text-secondary block">Select your state</label>
                    <div className="relative">
                        <Button
                            variant="outline"
                            role="combobox"
                            className="w-full justify-between font-normal text-left h-12"
                            onClick={() => setComboboxOpen(!comboboxOpen)}
                        >
                            <div className="flex items-center gap-2 truncate">
                                <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                                {selectedState ? selectedState.name : "Select state..."}
                            </div>
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>

                        <AnimatePresence>
                            {comboboxOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    className="absolute mt-2 w-full bg-surface border border-border-color rounded-xl shadow-lg max-h-60 overflow-y-auto p-1 z-30"
                                >
                                    <Input
                                        placeholder="Search state..."
                                        className="h-9 mb-2"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        autoFocus
                                    />
                                    {filteredStates.length === 0 ? (
                                        <p className="text-sm text-text-secondary p-2 text-center">No state found.</p>
                                    ) : (
                                        <div className="space-y-1">
                                            {filteredStates.map((state) => (
                                                <button
                                                    key={state.slug}
                                                    className={cn(
                                                        "w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-between",
                                                        selectedState?.slug === state.slug && "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400"
                                                    )}
                                                    onClick={() => {
                                                        setSelectedState(state);
                                                        setComboboxOpen(false);
                                                    }}
                                                >
                                                    {state.name}
                                                    {selectedState?.slug === state.slug && <Check className="w-4 h-4" />}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Monthly Bill Slider */}
                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <label className="text-sm font-medium text-text-secondary">Average Monthly Bill</label>
                        <div className="text-right">
                            <span className="text-2xl font-bold text-text-primary tabular-nums tracking-tight">
                                {formatCurrency(billAmount)}
                            </span>
                        </div>
                    </div>
                    <Slider
                        min={500}
                        max={30000}
                        step={100}
                        value={billAmount}
                        onChange={setBillAmount}
                        className="w-full"
                    />
                    <div className="flex justify-between text-xs text-text-secondary">
                        <span>₹500</span>
                        <span>₹30,000+</span>
                    </div>
                </div>

                {/* Roof Type Toggle */}
                <div className="space-y-3">
                    <label className="text-sm font-medium text-text-secondary block">Roof Type</label>
                    <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                        <button
                            className={cn(
                                "flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all",
                                roofType === "concrete"
                                    ? "bg-white dark:bg-slate-700 shadow-sm text-emerald-600 dark:text-emerald-400"
                                    : "text-text-secondary hover:text-text-primary"
                            )}
                            onClick={() => setRoofType("concrete")}
                        >
                            Concrete / Flat
                        </button>
                        <button
                            className={cn(
                                "flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all",
                                roofType === "tiled"
                                    ? "bg-white dark:bg-slate-700 shadow-sm text-emerald-600 dark:text-emerald-400"
                                    : "text-text-secondary hover:text-text-primary"
                            )}
                            onClick={() => setRoofType("tiled")}
                        >
                            Tiled / Slanted
                        </button>
                    </div>
                </div>

                {/* Results View (Animated) */}
                <AnimatePresence>
                    {selectedState && result && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-6 border-t border-border-color space-y-6">

                                {/* Big Number */}
                                <div className="text-center space-y-1">
                                    <p className="text-sm text-text-secondary">You will save approx.</p>
                                    <h3 className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 tracking-tight tabular-nums">
                                        {formatLakhs(result.lifetimeSavings)}
                                    </h3>
                                    <p className="text-xs text-text-secondary">over 25 years with a {result.systemSize}kW system</p>
                                    <div className="pt-2">
                                        <span
                                            className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium cursor-help"
                                            title="Based on 0.82kg CO2/kWh (CEA Data)"
                                        >
                                            🌱 {result.treesSaved} Trees Saved
                                        </span>
                                    </div>
                                </div>

                                {/* Breakdown Grid */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-border-color">
                                        <p className="text-xs text-text-secondary mb-1">System Cost</p>
                                        <p className="font-semibold text-text-primary line-through decoration-red-400 decoration-2">
                                            {formatCurrency(result.totalCost)}
                                        </p>
                                    </div>
                                    <div className="p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
                                        <p className="text-xs text-emerald-700 dark:text-emerald-400 mb-1">Govt. Subsidy</p>
                                        <p className="font-bold text-emerald-700 dark:text-emerald-400">
                                            -{formatCurrency(result.subsidy)}
                                        </p>
                                    </div>
                                    <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-border-color">
                                        <p className="text-xs text-text-secondary mb-1">Net Investment</p>
                                        <p className="font-bold text-text-primary">
                                            {formatCurrency(result.netInvestment)}
                                        </p>
                                    </div>
                                    <div className="p-3 bg-amber-50 dark:bg-amber-900/10 rounded-lg border border-amber-100 dark:border-amber-800/30">
                                        <p className="text-xs text-amber-700 dark:text-amber-400 mb-1">Payback Period</p>
                                        <p className="font-bold text-amber-700 dark:text-amber-400">
                                            {result.paybackPeriod} Years
                                        </p>
                                    </div>
                                </div>

                                {/* CTA */}
                                <Button
                                    className="w-full h-auto py-4 text-lg bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/20 whitespace-normal text-balance leading-tight"
                                    onClick={() => setIsLeadModalOpen(true)}
                                >
                                    Get 3 Verified Installer Quotes <span className="hidden sm:inline">for {selectedState.name}</span>
                                    <span className="sm:hidden">Now</span>
                                </Button>
                                <p className="text-center text-xs text-text-secondary">
                                    100% Free. No Spam. Valid for 24 hours.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <LeadModal
                    isOpen={isLeadModalOpen}
                    onClose={() => setIsLeadModalOpen(false)}
                    state={selectedState?.name || ""}
                    billAmount={billAmount}
                />
            </div>
        </div>
    );
}
