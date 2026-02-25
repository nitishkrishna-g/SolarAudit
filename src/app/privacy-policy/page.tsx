import { Metadata } from "next";
import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { Fireflies } from "@/components/ui/fireflies";

export const metadata: Metadata = {
    title: "Privacy Policy | SolarAudit",
    description: "Welcome to SolarAudit. Privacy policy and affiliate disclosure information.",
};

import { PrivacyPolicyContent } from "@/components/privacy/PrivacyPolicyContent";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-emerald-500/30 transition-colors duration-300">
            <Navbar />
            <Fireflies />
            <PrivacyPolicyContent />
            <Footer />
        </div>
    );
}
