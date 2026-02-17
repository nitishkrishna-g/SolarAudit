import { notFound } from "next/navigation";
import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { Calculator } from "@/components/core/Calculator";
import { solarData } from "@/data/solarData";
import { Metadata } from "next";

interface PageProps {
    params: {
        state: string;
    };
}

// Generate static params for all known states
export async function generateStaticParams() {
    return solarData.map((state) => ({
        state: state.slug,
    }));
}

// Dynamic Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { state: stateSlug } = params;
    const stateData = solarData.find((s) => s.slug === stateSlug);

    if (!stateData) {
        return {
            title: "State Not Found - SolarAudit",
        };
    }

    return {
        title: `Solar Panel Subsidy in ${stateData.name} (2026 Guide) - SolarAudit`,
        description: `Calculate your solar ROI in ${stateData.name}. Updated with 2026 PM Surya Ghar subsidy rates and ${stateData.discomName} tariffs.`,
    };
}

export default function StatePage({ params }: PageProps) {
    const { state: stateSlug } = params;
    const stateData = solarData.find((s) => s.slug === stateSlug);

    if (!stateData) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col bg-background text-text-primary transition-colors font-sans">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section Reuse */}
                <section className="relative pt-20 pb-12 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                                2026 Policy Update
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                                Solar Panel Subsidy in <span className="text-emerald-600 dark:text-emerald-400">{stateData.name}</span>
                            </h1>
                            <p className="text-lg text-text-secondary">
                                Complete guide to rebates, net metering, and ROI with {stateData.discomName} tariffs.
                            </p>
                        </div>

                        <div className="flex justify-center mb-16">
                            <Calculator />
                        </div>
                    </div>
                </section>

                {/* SEO Content Article */}
                <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-border-color">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-xl leading-relaxed text-text-secondary">
                                {stateData.name} receives an average of <strong className="text-text-primary">{stateData.sunHours} peak sun hours</strong> daily.
                                With <strong className="text-text-primary">{stateData.discomName}</strong> rates averaging at
                                <strong className="text-text-primary"> ₹{stateData.tariff}/unit</strong>, the ROI for residential solar is exceptionally high in this region.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-6">Cost Breakdown for 3kW System in {stateData.name}</h2>
                            <div className="overflow-hidden rounded-xl border border-border-color bg-surface shadow-sm">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-100 dark:bg-slate-800 border-b border-border-color">
                                        <tr>
                                            <th className="py-4 px-6 font-semibold">Component</th>
                                            <th className="py-4 px-6 font-semibold text-right">Estimated Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border-color">
                                        <tr>
                                            <td className="py-4 px-6">Material Cost (Panels, Inverter, Structure)</td>
                                            <td className="py-4 px-6 text-right tabular-nums">₹1,35,000</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-6">Installation & Commissioning</td>
                                            <td className="py-4 px-6 text-right tabular-nums">₹15,000</td>
                                        </tr>
                                        <tr className="bg-emerald-50 dark:bg-emerald-900/10">
                                            <td className="py-4 px-6 text-emerald-700 dark:text-emerald-400 font-medium">Central Subsidy (PM Surya Ghar)</td>
                                            <td className="py-4 px-6 text-right tabular-nums text-emerald-700 dark:text-emerald-400 font-bold">-₹78,000</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-6 font-bold text-lg">Net Cost to You</td>
                                            <td className="py-4 px-6 text-right tabular-nums font-bold text-lg">₹72,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-2xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-lg mb-2">How to apply for PM Surya Ghar in {stateData.name}?</h3>
                                    <p className="text-text-secondary">
                                        You can apply directly through the National Portal for Rooftop Solar. Select {stateData.name} as your state and {stateData.discomName} as your DISCOM.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">List of empaneled vendors in {stateData.name}</h3>
                                    <p className="text-text-secondary">
                                        The portal provides a list of certified vendors in your district. Always ask for their certification ID before proceeding.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
