import { Metadata } from "next";
import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { Fireflies } from "@/components/ui/fireflies";
import { ShopContent } from "@/components/core/ShopContent";

export const metadata: Metadata = {
    title: "Solar Store — Curated Gear for Indian Rooftops | SolarAudit",
    description:
        "Shop hand-picked solar inverters, panels, batteries, and cleaning kits verified for Indian weather. Every product is independently reviewed and top-rated on Amazon.",
    alternates: { canonical: "/shop" },
    openGraph: {
        title: "Solar Store — Curated Gear for Indian Rooftops",
        description:
            "Hand-picked solar products verified for quality and Indian weather conditions.",
        url: "https://solaraudit.vercel.app/shop",
        siteName: "SolarAudit",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Solar Store — SolarAudit",
        description:
            "Curated solar gear verified for Indian weather. Inverters, panels, batteries & more.",
    },
};

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-emerald-500/30">
            <Navbar />
            <Fireflies />
            <ShopContent />

            {/* Crawlable SEO content section */}
            <section className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <article className="prose prose-emerald dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Why We Curate Solar Products
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            The Indian solar market is flooded with low-quality components
                            that degrade within 2–3 years. Cheap inverters fail during
                            monsoon surges, off-brand panels lose 20% efficiency in under 5
                            years, and generic batteries don&apos;t survive India&apos;s 45°C
                            summers. We created this store because homeowners deserve better.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            Every product in the SolarAudit Store is independently reviewed
                            by our editorial team. We verify manufacturer warranties, check
                            Amazon review authenticity, and confirm compatibility with
                            standard Indian solar setups (single-phase, 230V, 50Hz). Products
                            that don&apos;t meet our quality bar are excluded — regardless of
                            affiliate commission rates.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            Our categories include <strong>Inverters</strong> (pure sine wave,
                            hybrid, and micro-inverters), <strong>Solar Panels</strong>{" "}
                            (Mono-PERC and Polycrystalline from Tier-1 manufacturers),{" "}
                            <strong>Batteries</strong> (LiFePO4 and tubular options for
                            backup), <strong>Cleaning Kits</strong> (telescopic brushes
                            designed for rooftop access), and{" "}
                            <strong>Smart Gadgets</strong> (energy meters and monitoring
                            systems that track your solar output in real-time).
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-500 italic">
                            Affiliate Disclosure: SolarAudit earns a small commission from
                            qualifying Amazon.in purchases at no additional cost to you. This
                            revenue supports our free calculator and independent content. See
                            our{" "}
                            <a
                                href="/terms"
                                className="text-emerald-600 dark:text-emerald-400 hover:underline"
                            >
                                Terms of Service
                            </a>{" "}
                            for full details.
                        </p>
                    </article>
                </div>
            </section>

            <Footer />
        </div>
    );
}
