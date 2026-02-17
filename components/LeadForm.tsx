"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Loader2, CheckCircle } from "lucide-react";

export function LeadForm() {
    const [formData, setFormData] = useState({ name: "", phone: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    if (status === "success") {
        return (
            <Card variant="glass" className="h-full flex flex-col justify-center items-center text-center p-8">
                <div className="bg-primary/20 p-4 rounded-full mb-4">
                    <CheckCircle className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Blueprint Sent!</h3>
                <p className="opacity-70">Check your WhatsApp for the 25-page customized solar report.</p>
            </Card>
        );
    }

    return (
        <Card variant="glass" className="h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <FileText className="text-primary" />
                    Get Your Free Blueprint
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm opacity-70 mb-1 block">Full Name</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="text-sm opacity-70 mb-1 block">WhatsApp Number</label>
                        <input
                            type="tel"
                            required
                            className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                        />
                    </div>
                    <p className="text-xs opacity-50 text-center">
                        We'll customize the report for your location and bill.
                    </p>
                    <Button type="submit" className="w-full" disabled={status === "loading"}>
                        {status === "loading" ? <Loader2 className="animate-spin h-5 w-5" /> : "Send Me The PDF"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
