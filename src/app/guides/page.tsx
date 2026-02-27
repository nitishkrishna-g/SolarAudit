import { Metadata } from "next";
import { ReadingProgress } from "@/components/guides/ReadingProgress";
import { ExitIntentModal } from "@/components/guides/ExitIntentModal";
import { GuidesContent } from "@/components/guides/GuidesContent";
import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { Fireflies } from "@/components/ui/fireflies";

export const metadata: Metadata = {
    title: "The Only Solar Guide You Need (2026 Edition) | SolarAudit",
    description: "From PM Surya Ghar subsidies to choosing the right inverter — the complete solar roadmap for Indian homeowners. Updated Feb 2026.",
};

export default function GuidesPage() {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-emerald-500/30 transition-colors duration-300">
            <ReadingProgress />
            <ExitIntentModal />
            <Navbar />
            <Fireflies />
            <main className="flex-grow relative z-10 w-full">
                <GuidesContent />
            </main>
            <Footer />
        </div>
    );
}
