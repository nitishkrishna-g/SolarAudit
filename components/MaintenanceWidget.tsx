"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Droplets, Wind, ExternalLink } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function MaintenanceWidget() {
    const [health, setHealth] = useState(100);
    const [daysSinceRain, setDaysSinceRain] = useState(18); // Simulated
    const [aqi, setAqi] = useState(160); // Simulated

    useEffect(() => {
        // Simulated logic based on "Maintenance Math"
        // If days_since_rain > 14 AND avg_aqi > 150, set soiling_loss_factor = 0.85 (15% loss).
        if (daysSinceRain > 14 && aqi > 150) {
            setHealth(85);
        } else {
            setHealth(100);
        }
    }, [daysSinceRain, aqi]);

    const data = [
        { name: "Health", value: health },
        { name: "Loss", value: 100 - health },
    ];

    const COLORS = ["#00E5FF", "#161B2B"]; // Cyan for health, Dark for loss

    return (
        <Card variant="glass" className="w-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <AlertCircle className={health < 100 ? "text-red-500" : "text-primary"} />
                    System Health Monitor
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
                <div className="relative w-48 h-24 mb-4">
                    {/* Half Pie Chart */}
                    <ResponsiveContainer width="100%" height="200%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                startAngle={180}
                                endAngle={0}
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index === 0 ? (health < 90 ? '#ef4444' : '#00E5FF') : '#333'} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-end justify-center pb-2">
                        <span className={`text-3xl font-bold ${health < 90 ? 'text-red-500' : 'text-primary'}`}>{health}%</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full mb-6">
                    <div className="flex flex-col items-center p-2 bg-white/5 rounded-lg">
                        <Droplets className="h-5 w-5 text-blue-400 mb-1" />
                        <span className="text-xs opacity-70">Dry Days</span>
                        <span className="font-bold">{daysSinceRain}</span>
                    </div>
                    <div className="flex flex-col items-center p-2 bg-white/5 rounded-lg">
                        <Wind className="h-5 w-5 text-gray-400 mb-1" />
                        <span className="text-xs opacity-70">Avg AQI</span>
                        <span className="font-bold">{aqi}</span>
                    </div>
                </div>

                {health < 90 && (
                    <div className="mb-4 text-center bg-red-500/10 border border-red-500/20 p-3 rounded-lg text-sm text-red-200">
                        <p className="font-semibold mb-1">Dust Alert!</p>
                        Your panels are losing efficiency. Clean them to save ₹400/mo.
                    </div>
                )}

                <Button variant="outline" className="w-full gap-2 text-xs" onClick={() => window.open("https://amazon.in", "_blank")}>
                    <ExternalLink className="h-3 w-3" />
                    Buy Cleaning Brush (Amazon)
                </Button>
            </CardContent>
        </Card>
    );
}
