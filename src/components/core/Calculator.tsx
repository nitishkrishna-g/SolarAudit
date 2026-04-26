"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin,
    IndianRupee,
    SwitchCamera,
    ShieldCheck,
    ChevronsUpDown,
    Check,
    ShoppingCart,
    ExternalLink
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Slider } from "@/components/ui/Slider";
import { solarData, StateData } from "@/data/solarData";
import { calculateSolar } from "@/utils/calculator";
import { cn } from "@/lib/utils";
import { LeadModal } from "@/components/LeadModal";

export function Calculator({ onCalculationComplete, defaultStateSlug }: { onCalculationComplete?: () => void; defaultStateSlug?: string }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Form State
    const [selectedState, setSelectedState] = useState<StateData | null>(
        defaultStateSlug ? (solarData.find(s => s.slug === defaultStateSlug) ?? null) : null
    );
    const [billAmount, setBillAmount] = useState(4500);
    const [roofArea, setRoofArea] = useState(500); // Default 500 sq ft
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

    const [hasCalculated, setHasCalculated] = useState(false);

    // Calculation Result
    const [result, setResult] = useState<ReturnType<typeof calculateSolar> | null>(null);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleCalculate = () => {
        if (!selectedState) return;
        setIsCalculating(true);
        // Add a slight delay for better UX
        setTimeout(() => {
            const res = calculateSolar(billAmount, selectedState, roofType);
            setResult(res);
            setHasCalculated(true);
            setIsCalculating(false);
        }, 500);
    };

    useEffect(() => {
        if (hasCalculated && result && onCalculationComplete) {
            onCalculationComplete();
        }
    }, [hasCalculated, result, onCalculationComplete]);

    // Reset result when inputs change
    useEffect(() => {
        setHasCalculated(false);
        setResult(null);
    }, [selectedState, billAmount, roofArea, roofType]);

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


            </div>

            {/* Input Section */}
            <div className="p-6 space-y-8">

                {/* State Selector — hidden when state is already set by the page */}
                <div className={`space-y-3 relative z-20${defaultStateSlug ? " hidden" : ""}`}>
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

                {/* Roof Area Slider */}
                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <label className="text-sm font-medium text-text-secondary">Available Roof Area</label>
                        <div className="text-right">
                            <span className="text-2xl font-bold text-text-primary tabular-nums tracking-tight">
                                {roofArea} sq ft
                            </span>
                        </div>
                    </div>
                    <Slider
                        min={100}
                        max={5000}
                        step={50}
                        value={roofArea}
                        onChange={setRoofArea}
                        className="w-full"
                    />
                    <div className="flex justify-between text-xs text-text-secondary">
                        <span>100 sq ft</span>
                        <span>5,000+ sq ft</span>
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

                {/* Calculate Button */}
                <Button
                    className="w-full h-14 text-lg font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 rounded-xl mt-4"
                    onClick={handleCalculate}
                    disabled={!selectedState || isCalculating}
                >
                    {isCalculating ? "Calculating..." : "Calculate Savings"}
                </Button>

                {/* Results View (Animated) */}
                <AnimatePresence>
                    {hasCalculated && result && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-6 border-t border-border-color space-y-6 mt-6">
                                {/* Warning for Roof Area */}
                                {(result.systemSize * 100) > roofArea && (
                                    <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600 dark:text-red-400">
                                        <strong>⚠️ Insufficient Roof Area</strong>
                                        <p>You need ~{result.systemSize * 100} sq ft for a {result.systemSize}kW system, but you only have {roofArea} sq ft.</p>
                                    </div>
                                )}

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

                                {/* CTA */}
                                <div className="grid grid-cols-2 gap-3">
                                    <Button
                                        variant="outline"
                                        className="h-auto py-3 text-sm whitespace-normal"
                                        onClick={() => setIsLeadModalOpen(true)}
                                    >
                                        Get Installer Quote
                                    </Button>
                                    <Link
                                        href="/shop"
                                        className="inline-flex items-center justify-center rounded-xl font-medium transition-colors h-auto py-3 text-sm md:text-sm bg-emerald-600 hover:bg-emerald-700 text-white px-3 sm:px-6 shadow-lg shadow-emerald-500/20 text-center leading-tight sm:leading-normal"
                                    >
                                        <span className="hidden sm:inline">Shop Solar Components</span>
                                        <span className="sm:hidden">Shop Solar Gear</span>
                                        <ShoppingCart className="w-3 h-3 ml-1 sm:ml-2 inline shrink-0" />
                                    </Link>
                                    <p className="col-span-2 text-center text-[10px] text-slate-400">
                                        Free quote valid for 24 hours
                                    </p>
                                </div>
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
