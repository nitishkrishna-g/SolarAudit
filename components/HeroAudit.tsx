"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { STATE_TARIFFS, StateName, INDIAN_SUBSIDY } from "@/lib/constants";
import { Zap, MapPin, IndianRupee } from "lucide-react";

export function HeroAudit() {
    const [bill, setBill] = useState(2000);
    const [state, setState] = useState<StateName>("Maharashtra");
    const [pinCode, setPinCode] = useState("");
    const [savings, setSavings] = useState(0);
    const [subsidy, setSubsidy] = useState(0);

    // Simplified logic for immediate feedback (Client-side estimation)
    useEffect(() => {
        // Very rough estimation: Bill / 8 (approx rate) = Units. 
        // Solar covers units. Units * Rate = Savings.
        // Actually, savings ~= Bill (if 100% offset).
        // Let's just say Savings = Bill * 0.9 (90% offset) for the "WOW" effect.
        // And calculate Subsidy based on System Size needed.
        // System Size (kW) ~= (Bill / 8) / 120 (units/kW/month) ~= Bill / 960.

        const estimatedKw = bill / 1000; // Roughly 1kW per 1000 Rs bill

        // Calculate Subsidy
        let calcSubsidy = 0;
        if (estimatedKw <= 2) {
            calcSubsidy = estimatedKw * INDIAN_SUBSIDY.upto2kW;
        } else if (estimatedKw <= 3) {
            calcSubsidy = (2 * INDIAN_SUBSIDY.upto2kW) + ((estimatedKw - 2) * INDIAN_SUBSIDY.step3rdkW);
        } else {
            calcSubsidy = INDIAN_SUBSIDY.maxSubsidy;
        }

        setSavings(Math.round(bill * 0.9));
        setSubsidy(Math.round(Math.min(calcSubsidy, INDIAN_SUBSIDY.maxSubsidy)));
    }, [bill]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Unlock Your <span className="text-primary">Solar Wealth</span>
                    <br />
                    <span className="text-2xl md:text-3xl font-light opacity-80">Zero Bills. Max Subsidy.</span>
                </h1>
                <p className="text-lg opacity-70 mb-8">
                    Stop paying the electricity board. Let the sun (and the Govt) pay you.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Card variant="glass" className="border-t-4 border-primary/50">
                    <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-2">
                            <Zap className="text-primary h-6 w-6" />
                            Instant Audit
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">

                        {/* Inputs */}
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm opacity-70 mb-1 block">Your State</label>
                                <select
                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                    value={state}
                                    onChange={(e) => setState(e.target.value as StateName)}
                                >
                                    {Object.keys(STATE_TARIFFS).map((s) => (
                                        <option key={s} value={s} className="bg-card text-foreground">{s}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="text-sm opacity-70 mb-1 block">Monthly Bill: ₹{bill.toLocaleString()}</label>
                                <input
                                    type="range"
                                    min="500"
                                    max="50000"
                                    step="500"
                                    value={bill}
                                    onChange={(e) => setBill(Number(e.target.value))}
                                    className="w-full h-2 bg-gradient-to-r from-primary/20 to-primary rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div>
                                <label className="text-sm opacity-70 mb-1 block">Pin Code</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-primary/70" />
                                    <input
                                        type="text"
                                        placeholder="Enter Pin Code"
                                        value={pinCode}
                                        onChange={(e) => setPinCode(e.target.value)}
                                        className="w-full pl-10 bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-10">
                                <IndianRupee className="h-24 w-24" />
                            </div>

                            <div className="relative z-10">
                                <p className="text-sm uppercase tracking-wide opacity-70">You Save Monthly</p>
                                <motion.div
                                    key={savings}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-4xl font-bold text-primary my-1"
                                >
                                    ₹{savings.toLocaleString()}
                                </motion.div>

                                <div className="mt-4 flex items-center gap-2 bg-accent/20 px-3 py-1 rounded-full w-fit">
                                    <div className="bg-accent h-2 w-2 rounded-full animate-pulse" />
                                    <span className="text-xs font-semibold text-accent-foreground">Govt. Pays You ₹{subsidy.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        <Button className="w-full text-lg h-14" variant="primary">
                            Get My Free Solar Blueprint
                        </Button>

                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
