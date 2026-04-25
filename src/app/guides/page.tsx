import { Metadata } from "next";
import { ReadingProgress } from "@/components/guides/ReadingProgress";
import { ExitIntentModal } from "@/components/guides/ExitIntentModal";
import { GuidesContent } from "@/components/guides/GuidesContent";
import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { Fireflies } from "@/components/ui/fireflies";
import { guideArticles } from "@/data/guidesArticles";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "The Only Solar Guide You Need (2026 Edition) | SolarAudit",
    description: "From PM Surya Ghar subsidies to choosing the right inverter — the complete solar roadmap for Indian homeowners. Updated Feb 2026.",
};

export default function GuidesPage() {
    return (
        <div className="min-h-screen flex flex-col relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-emerald-500/30 transition-colors duration-300">
            <ReadingProgress />
            <ExitIntentModal />
            <Navbar />
            <Fireflies />
            <main className="flex-grow relative z-10 w-full">
                <GuidesContent />

                {/* Individual Guide Articles Listing */}
                <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                Deep Dive Guides
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                Explore our in-depth articles on every aspect of going solar in India — from subsidies and hardware to maintenance and ROI.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {guideArticles.map((article) => (
                                <Link
                                    key={article.slug}
                                    href={`/guides/${article.slug}`}
                                    className="group bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
                                >
                                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                                        {article.category}
                                    </span>
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors text-sm leading-snug">
                                        {article.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                                        {article.metaDescription}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center gap-1 text-xs text-slate-400">
                                            <Clock className="w-3 h-3" /> {article.readTime}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 group-hover:gap-2 transition-all">
                                            Read <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

