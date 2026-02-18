import { notFound } from "next/navigation";
import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { Calculator } from "@/components/core/Calculator";
import { solarData } from "@/data/solarData";
import { Metadata } from "next";
import { Fireflies } from "@/components/ui/fireflies";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TrendingUp, ShieldCheck, Zap, Sun, Award, Banknote } from "lucide-react";

interface PageProps {
    params: Promise<{
        state: string;
        city: string;
    }>;
}

// Generate static params for all cities in all states
export async function generateStaticParams() {
    const params = [];
    for (const state of solarData) {
        if (state.cities && state.cities.length > 0) {
            for (const city of state.cities) {
                params.push({
                    state: state.slug,
                    city: city.toLowerCase().replace(/ /g, "-"),
                });
            }
        }
    }
    return params;
}

// Dynamic Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { state: stateSlug, city: cityParam } = await params;
    const stateData = solarData.find((s) => s.slug === stateSlug);

    if (!stateData) {
        return {
            title: "City Not Found - SolarAudit",
        };
    }

    const city = stateData.cities.find(c => c.toLowerCase().replace(/ /g, "-") === cityParam) || cityParam;
    const cityName = city === cityParam ? city.charAt(0).toUpperCase() + city.slice(1) : city;

    return {
        title: `Solar Installer in ${cityName} - ${stateData.name} Subsidy Check`,
        description: `Stop paying high bills to ${stateData.discomName}. Find verified installers in ${cityName} and check your subsidy eligibility.`,
    };
}

export default async function CityPage({ params }: PageProps) {
    const { state: stateSlug, city: cityParam } = await params;
    const stateData = solarData.find((s) => s.slug === stateSlug);

    if (!stateData) {
        notFound();
    }

    const city = stateData.cities.find(c => c.toLowerCase().replace(/ /g, "-") === cityParam);

    if (!city) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-emerald-500/30">
            <Navbar />
            <Fireflies />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-24 pb-16 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                        {/* Enhanced Aurora */}
                        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px]" />
                        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200 dark:border-emerald-800 shadow-sm">
                                📍 {city}, {stateData.name}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white leading-tight">
                                Solar Panels in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">{city}</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                                Don't let <strong>{stateData.discomName}</strong> dictate your bills.
                                Get the 2026 PM Surya Ghar subsidy and switch to freedom.
                            </p>
                        </div>

                        <div className="flex justify-center mb-16 relative">
                            {/* Glow behind calculator */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/5 blur-3xl rounded-full -z-10" />
                            <Calculator />
                        </div>
                    </div>
                </section>

                {/* 2. Premium Grid (The "Why Solar" Education) - Replaced text with Bento Grid */}
                <section className="py-16 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Solar is Booming in {city}</h2>
                            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                Combining {stateData.sunHours} peak sun hours with heavy government subsidies makes this the perfect time to switch.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            <SpotlightCard className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800" spotlightColor="rgba(16, 185, 129, 0.2)">
                                <div className="p-6 h-full flex flex-col">
                                    <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                                        <Banknote className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">₹{stateData.subsidyParams.cap.toLocaleString()} Subsidy</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                                        Flat subsidy directly to your bank account under the new 2026 PM Surya Ghar Muft Bijli Yojana.
                                    </p>
                                </div>
                            </SpotlightCard>

                            <SpotlightCard className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800" spotlightColor="rgba(245, 158, 11, 0.2)">
                                <div className="p-6 h-full flex flex-col">
                                    <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
                                        <Sun className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{stateData.sunHours} Peak Hours</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                                        {city}'s geographical location ensures high generation efficiency, maximizing your ROI.
                                    </p>
                                </div>
                            </SpotlightCard>

                            <SpotlightCard className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800" spotlightColor="rgba(59, 130, 246, 0.2)">
                                <div className="p-6 h-full flex flex-col">
                                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{stateData.discomName} Net Metering</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                                        Expert handling of {stateData.discomName} paperwork. Send power to the grid and just pay the difference.
                                    </p>
                                </div>
                            </SpotlightCard>
                        </div>
                    </div>
                </section>


                {/* SEO Content Article (Styled) */}
                <section className="py-16 bg-slate-50 dark:bg-slate-950">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800">
                            <article className="prose prose-emerald lg:prose-lg dark:prose-invert max-w-none">
                                {/* The "Hidden" Costs Table (Styled) */}
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Solar Cost Breakdown for {city}</h3>

                                <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 mb-12 shadow-sm">
                                    <table className="w-full text-left border-collapse my-0">
                                        <thead>
                                            <tr className="bg-slate-50 dark:bg-slate-800/50">
                                                <th className="py-4 px-6 font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">Component</th>
                                                <th className="py-4 px-6 font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">Details</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                            <tr>
                                                <td className="py-4 px-6 text-slate-700 dark:text-slate-300">Provider</td>
                                                <td className="py-4 px-6 text-slate-700 dark:text-slate-300 font-medium">{stateData.discomName}</td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 px-6 text-slate-700 dark:text-slate-300">Avg. Sun Hours</td>
                                                <td className="py-4 px-6 text-slate-700 dark:text-slate-300">{stateData.sunHours} Hours/Day</td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 px-6 text-slate-700 dark:text-slate-300">Subsidy Cap</td>
                                                <td className="py-4 px-6 text-emerald-600 dark:text-emerald-400 font-bold">₹{stateData.subsidyParams.cap.toLocaleString()}</td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 px-6 text-slate-700 dark:text-slate-300">Avg. ROI Period</td>
                                                <td className="py-4 px-6 text-slate-700 dark:text-slate-300">3 - 4 Years</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Steps to Apply (Actionable) */}
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Installation Steps</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12">
                                    {[
                                        { title: "Get Quote", desc: `Request a custom quote for your ${city} home.` },
                                        { title: "Site Survey", desc: "Installer checks your roof shadow and fastens structure." },
                                        { title: "Subsidy Apply", desc: "We help you apply on the PM Surya Ghar portal." },
                                        { title: "Net Metering", desc: `Official meter exchange with ${stateData.discomName}.` },
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                            <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm shrink-0">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{step.title}</h4>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Call to Action Card */}
                                <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 rounded-2xl text-center shadow-xl shadow-emerald-500/20 not-prose relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                                    <div className="relative z-10">
                                        <h4 className="text-2xl font-bold text-white mb-2">Ready to switch in {city}?</h4>
                                        <p className="text-emerald-100 mb-8 max-w-lg mx-auto">
                                            We have a network of verified <strong>{stateData.discomName}</strong> empaneled solar partners in your area.
                                        </p>
                                        <button className="bg-white text-emerald-700 px-8 py-3.5 rounded-xl font-bold hover:bg-emerald-50 transition shadow-lg w-full md:w-auto">
                                            Get 3 {city} Installer Quotes
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Service Schema for Local SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Solar Panel Installation",
                            "provider": {
                                "@type": "Organization",
                                "name": "SolarAudit"
                            },
                            "areaServed": {
                                "@type": "City",
                                "name": city
                            },
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Solar Installation Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Residential Rooftop Solar"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Commercial Solar Solutions"
                                        }
                                    }
                                ]
                            }
                        })
                    }}
                />
            </main>

            <Footer />
        </div>
    );
}
