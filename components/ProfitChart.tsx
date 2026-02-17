"use client";

import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export function ProfitChart() {
    // Mock data for 25 years
    const data = Array.from({ length: 25 }, (_, i) => ({
        year: `Year ${i + 1}`,
        savings: Math.round(50000 * (i + 1) * 1.05), // Compounding
        cost: 500000, // Initial cost constant reference?
    }));

    return (
        <Card variant="glass" className="w-full h-[400px]">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="text-primary" />
                    25-Year Wealth Accumulation
                </CardTitle>
            </CardHeader>
            <CardContent className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#00E5FF" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
                        <XAxis dataKey="year" hide />
                        <YAxis hide />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#161B2B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                            itemStyle={{ color: '#EDEDED' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="savings"
                            stroke="#00E5FF"
                            fillOpacity={1}
                            fill="url(#colorSavings)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
