"use client";

import { useState } from "react";



import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Check, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
    state: string;
    billAmount: number;
}

export function LeadModal({ isOpen, onClose, state, billAmount }: LeadModalProps) {
    const [step, setStep] = useState<"form" | "success">("form");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        city: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Validation
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            setError("Please enter a valid 10-digit phone number.");
            return;
        }
        if (!formData.name || !formData.city) {
            setError("All fields are required.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, state, billAmount }),
            });

            if (!res.ok) throw new Error("Failed to submit.");

            setStep("success");
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="p-6">
                {step === "form" ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-text-primary">Get Verified Quotes</h3>
                            <p className="text-sm text-text-secondary">
                                Connect with top installers in {state}.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <label className="text-sm font-medium text-text-secondary">Name</label>
                                <Input
                                    required
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-text-secondary">Phone Number</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-3 text-text-secondary text-sm">+91</span>
                                    <Input
                                        required
                                        type="tel"
                                        placeholder="99999 99999"
                                        className="pl-10"
                                        maxLength={10}
                                        value={formData.phone}
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/\D/g, "");
                                            setFormData({ ...formData, phone: val });
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-text-secondary">City</label>
                                <Input
                                    required
                                    placeholder="Your City"
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                />
                            </div>
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <Button
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-700"
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Request Callback"}
                        </Button>

                        <p className="text-xs text-center text-text-secondary">
                            By clicking, you agree to receive a call from our solar partners.
                        </p>
                    </form>
                ) : (
                    <div className="text-center py-8 space-y-4">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring" }}
                            className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto"
                        >
                            <Check className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-text-primary">Request Received!</h3>
                        <p className="text-text-secondary">
                            Our verified solar partners will contact you shortly with custom quotes for your home in {formData.city}.
                        </p>
                        <Button variant="outline" onClick={onClose} className="w-full">
                            Close
                        </Button>
                    </div>
                )}
            </div>
        </Modal>
    );
}
