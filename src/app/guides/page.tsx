import { Metadata } from "next";
import { ReadingProgress } from "@/components/guides/ReadingProgress";
import { ExitIntentModal } from "@/components/guides/ExitIntentModal";
import { GuidesContent } from "@/components/guides/GuidesContent";
import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";

export const metadata: Metadata = {
    title: "The Only Solar Guide You Need (2026 Edition) | SolarAudit",
    description: "From PM Surya Ghar subsidies to choosing the right inverter — the complete solar roadmap for Indian homeowners. Updated Feb 2026.",
};

export default function GuidesPage() {
    return (
        <div className="min-h-screen bg-background">
            <ReadingProgress />
            <ExitIntentModal />
            <Navbar />
            <GuidesContent />
            <Footer />
        </div>
    );
}
