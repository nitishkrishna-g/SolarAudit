import { notFound } from "next/navigation";
import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { Calculator } from "@/components/core/Calculator";
import { solarData } from "@/data/solarData";
import { Metadata } from "next";
import Link from "next/link";

interface PageProps {
    params: Promise<{
        state: string;
    }>;
}

// Generate static params for all known states
export async function generateStaticParams() {
    return solarData.map((state) => ({
        state: state.slug,
    }));
}

// Dynamic Metadata with canonical, OG, and Twitter
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { state: stateSlug } = await params;
    const stateData = solarData.find((s) => s.slug === stateSlug);

    if (!stateData) {
        return {
            title: "State Not Found",
        };
    }

    const canonicalUrl = `https://solaraudit.in/calculator/${stateSlug}`;

    return {
        title: `Solar Panel Subsidy in ${stateData.name} (2026 Guide)`,
        description: `Calculate your solar ROI in ${stateData.name}. Updated with 2026 PM Surya Ghar subsidy rates and ${stateData.discomName} tariffs. Get subsidy up to ₹${stateData.subsidyParams.cap.toLocaleString("en-IN")}.`,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: `Solar ROI in ${stateData.name} – 2026 Subsidy Calculator`,
            description: `Calculate exact solar savings in ${stateData.name} with ${stateData.discomName} tariffs. PM Surya Ghar subsidy up to ₹${stateData.subsidyParams.cap.toLocaleString("en-IN")}.`,
            url: canonicalUrl,
            siteName: "SolarAudit",
            locale: "en_IN",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `Solar Panel Subsidy in ${stateData.name} (2026)`,
            description: `Calculate your solar ROI in ${stateData.name}. Updated with 2026 PM Surya Ghar subsidy rates.`,
        },
    };
}

export default async function StatePage({ params }: PageProps) {
    const { state: stateSlug } = await params;
    const stateData = solarData.find((s) => s.slug === stateSlug);

    if (!stateData) {
        notFound();
    }

    // How-to steps for subsidy application
    const howToSteps = [
        `Register on the PM Surya Ghar National Portal (pmsuryaghar.gov.in).`,
        `Select ${stateData.name} and your specific district.`,
        `Choose ${stateData.discomName} as your electricity provider.`,
        `Pick a vendor from the "Empaneled Installers" list (Do not choose a non-empaneled vendor or you lose the subsidy).`,
        `Apply for Net Metering after installation.`,
    ];

    // Combined JSON-LD schema: BreadcrumbList + FAQPage + HowTo
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: "https://solaraudit.in",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Calculator",
                        item: "https://solaraudit.in/calculator",
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: stateData.name,
                        item: `https://solaraudit.in/calculator/${stateSlug}`,
                    },
                ],
            },
            {
                "@type": "FAQPage",
                mainEntity: [
                    {
                        "@type": "Question",
                        name: `Is solar subsidy available in ${stateData.name}?`,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: `Yes, residents of ${stateData.name} can avail ₹${stateData.subsidyParams.cap.toLocaleString("en-IN")} subsidy under PM Surya Ghar 2026.`,
                        },
                    },
                    {
                        "@type": "Question",
                        name: `Who is the electricity provider (DISCOM) in ${stateData.name}?`,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: `${stateData.discomName} is the primary provider. We calculate ROI based on their current tariff of ₹${stateData.tariff}/unit.`,
                        },
                    },
                    {
                        "@type": "Question",
                        name: `What is the solar panel cost in ${stateData.name}?`,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: `Tier-1 bifacial panels in ${stateData.name} typically cost between ₹50,000 - ₹60,000 per kW before subsidy.`,
                        },
                    },
                ],
            },
            {
                "@type": "HowTo",
                name: `How to Apply for Solar Subsidy in ${stateData.name}`,
                description: `Step-by-step guide to applying for the PM Surya Ghar solar subsidy in ${stateData.name} through ${stateData.discomName}.`,
                totalTime: "PT30M",
                step: howToSteps.map((text, index) => ({
                    "@type": "HowToStep",
                    position: index + 1,
                    name: `Step ${index + 1}`,
                    text,
                })),
            },
        ],
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-emerald-500/30">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-24 pb-16 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]" />
                        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        {/* Breadcrumb Navigation */}
                        <nav aria-label="Breadcrumb" className="mb-8">
                            <ol className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <li>
                                    <Link
                                        href="/"
                                        title="Go to SolarAudit homepage"
                                        aria-label="Go to SolarAudit homepage"
                                        className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li aria-hidden="true">/</li>
                                <li>
                                    <Link
                                        href="/#calculator-section"
                                        title="Go to Solar ROI Calculator"
                                        aria-label="Go to Solar ROI Calculator"
                                        className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                    >
                                        Calculator
                                    </Link>
                                </li>
                                <li aria-hidden="true">/</li>
                                <li>
                                    <span className="font-medium text-slate-900 dark:text-white">
                                        {stateData.name}
                                    </span>
                                </li>
                            </ol>
                        </nav>

                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200 dark:border-emerald-800">
                                2026 Policy Update
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
                                Solar Panel Subsidy in{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                                    {stateData.name}
                                </span>
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                Complete guide to rebates, net metering, and ROI with{" "}
                                {stateData.discomName} tariffs.
                            </p>
                        </div>

                        <div className="flex justify-center mb-16">
                            <Calculator />
                        </div>
                    </div>
                </section>

                {/* SEO Content Article */}
                <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <article className="prose prose-emerald lg:prose-lg dark:prose-invert max-w-none">
                            {/* 1. Authority Intro */}
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                Solar Policy in {stateData.name}: The 2026 Guide
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                                Homeowners in {stateData.name} are uniquely positioned to take
                                advantage of high solar irradiance ({stateData.sunHours}{" "}
                                hours/day). Coupled with high tariffs from{" "}
                                <strong>{stateData.discomName}</strong>, the payback period is
                                often under 3 years.
                                {stateData.localDiscomDetails && (
                                    <span className="block mt-2">
                                        {stateData.localDiscomDetails}
                                    </span>
                                )}
                            </p>

                            {/* 2. Cost Breakdown Table */}
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-4">
                                Real Cost Breakdown for {stateData.name}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                While the calculator gives an estimate, here are the official
                                2026 benchmark costs in your region for a top-tier system:
                            </p>

                            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 mb-12">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                            <th className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                                                Item
                                            </th>
                                            <th className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                                                Cost (₹)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        <tr>
                                            <td className="py-4 px-6 text-slate-700 dark:text-slate-300">
                                                Bi-facial Panels (Tier 1)
                                            </td>
                                            <td className="py-4 px-6 text-slate-700 dark:text-slate-300">
                                                ₹22/watt
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-6 text-slate-700 dark:text-slate-300">
                                                Structure (Galvanized / Aluminium)
                                            </td>
                                            <td className="py-4 px-6 text-slate-700 dark:text-slate-300">
                                                ₹4,000/kW
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-6 text-slate-700 dark:text-slate-300">
                                                Net Metering ({stateData.discomName})
                                            </td>
                                            <td className="py-4 px-6 text-slate-700 dark:text-slate-300">
                                                ₹5,000 - ₹15,000 (Approx)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-6 text-slate-700 dark:text-slate-300">
                                                Inverter (Hybrid/On-Grid)
                                            </td>
                                            <td className="py-4 px-6 text-slate-700 dark:text-slate-300">
                                                ₹6,000 - ₹10,000/kW
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* 3. Steps to Apply */}
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                How to Apply for Subsidy in {stateData.name}
                            </h3>
                            <ol className="list-decimal pl-6 space-y-3 text-slate-700 dark:text-slate-300 mb-12 marker:text-emerald-600 dark:marker:text-emerald-400 marker:font-bold">
                                {howToSteps.map((step, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{
                                        __html: step.replace(
                                            "PM Surya Ghar National Portal",
                                            "<strong>PM Surya Ghar National Portal</strong>"
                                        ).replace(
                                            stateData.name,
                                            `<strong>${stateData.name}</strong>`
                                        ).replace(
                                            stateData.discomName,
                                            `<strong>${stateData.discomName}</strong>`
                                        )
                                    }} />
                                ))}
                            </ol>

                            {/* 4. Internal Link CTA */}
                            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-2xl border border-emerald-100 dark:border-emerald-800/30 not-prose text-center">
                                <h4 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-2">
                                    Ready to switch in {stateData.name}?
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    Get 3 verified quotes from empaneled vendors in your district
                                    today.
                                </p>
                                <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-500/20">
                                    Request Installer Call
                                </button>
                            </div>

                            {/* 5. Internal SEO Links */}
                            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 not-prose">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                                    Explore More Calculators
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {solarData
                                        .filter((s) => s.slug !== stateSlug && s.slug !== "india")
                                        .slice(0, 5)
                                        .map((s) => (
                                            <Link
                                                key={s.slug}
                                                href={`/calculator/${s.slug}`}
                                                title={`Solar panel subsidy calculator for ${s.name}`}
                                                aria-label={`Solar panel subsidy calculator for ${s.name}`}
                                                className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors border border-slate-200 dark:border-slate-700"
                                            >
                                                {s.name}
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                {/* JSON-LD Schemas */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </main>

            <Footer />
        </div>
    );
}
