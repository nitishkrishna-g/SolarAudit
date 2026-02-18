"use client";

import { useState } from "react";
import { LeadModal } from "@/components/LeadModal";

interface CityCTAProps {
    city: string;
    state: string;
    className?: string;
}

export function CityCTA({ city, state, className }: CityCTAProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className={`bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-500/20 ${className}`}
            >
                Get {city} Solar Quotes
            </button>

            <LeadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                state={state}
                billAmount={0} // Default or passing explicit context if needed
            />
        </>
    );
}
