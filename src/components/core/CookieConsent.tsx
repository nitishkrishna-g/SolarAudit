"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
        gtag: (...args: unknown[]) => void;
    }
}

function updateGoogleConsent(granted: boolean) {
    if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: unknown[]) {
            window.dataLayer.push(Object.assign({}, ...args.map((a, i) => i === 0 ? { event: a } : a)));
        }
        if (typeof window.gtag === "function") {
            window.gtag("consent", "update", {
                ad_storage: granted ? "granted" : "denied",
                ad_personalization: granted ? "granted" : "denied",
                ad_user_data: granted ? "granted" : "denied",
                analytics_storage: granted ? "granted" : "denied",
            });
        }
    }
}

export function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("sa-cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(timer);
        } else {
            updateGoogleConsent(consent === "granted");
        }
    }, []);

    const handleAccept = useCallback(() => {
        localStorage.setItem("sa-cookie-consent", "granted");
        updateGoogleConsent(true);
        setVisible(false);
    }, []);

    const handleReject = useCallback(() => {
        localStorage.setItem("sa-cookie-consent", "denied");
        updateGoogleConsent(false);
        setVisible(false);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-3 sm:p-4"
                >
                    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/30 p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="flex items-start gap-3 flex-1">
                                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                                    <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                                        We value your privacy
                                    </h3>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                        We use cookies to serve personalized ads via Google AdSense and to analyze traffic.
                                        You can accept or reject non-essential cookies.{" "}
                                        <Link
                                            href="/privacy-policy"
                                            className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                                <button
                                    onClick={handleReject}
                                    className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                                >
                                    Reject All
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-lg shadow-emerald-500/20 cursor-pointer"
                                >
                                    Accept All
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
