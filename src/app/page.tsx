import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { AffiliateGrid } from "@/components/core/AffiliateGrid";
import { Fireflies } from "@/components/ui/fireflies";
import { CalculatorSection } from "@/components/core/CalculatorSection";
import { HomeFAQ } from "@/components/core/HomeFAQ";
import { faqItems } from "@/data/faqData";
import { BentoGrid } from "@/components/core/BentoGrid";
import { GuidesTeaser } from "@/components/core/GuidesTeaser";
import {
  ShieldCheck,
  TrendingUp,
  Zap,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  // Build FAQ JSON-LD from the shared faqItems data
  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const websiteSchema = {
    "@type": "WebSite",
    name: "SolarAudit",
    url: "https://solaraudit.in",
    description:
      "Calculate exact solar ROI using 2026 PM Surya Ghar subsidy rates and state-specific tariffs.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://solaraudit.in/calculator/{state_slug}",
      },
      "query-input": "required name=state_slug",
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [websiteSchema, faqSchema],
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-emerald-500/30">
      <Navbar />
      <Fireflies />

      <main>
        {/* SECTION 1: HERO */}
        <section className="relative pb-20 pt-0 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/30 blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-500/20 blur-[100px]" />
          </div>

          {/* AD ZONE 1: LEADERBOARD */}
          <div className="container relative z-20 px-4 pt-6 pb-6 mx-auto flex justify-center">
            <div className="w-full max-w-[728px] min-h-[90px] bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-xl flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 text-xs border border-white/20 dark:border-white/10 shadow-sm">
              <span className="uppercase tracking-widest opacity-70 font-semibold">
                Advertisement
              </span>
            </div>
          </div>

          <div className="container relative z-10 px-4 mx-auto flex flex-col lg:flex-row gap-12 items-center justify-center">
            <div className="space-y-6 text-center lg:text-left max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Updated for 2026 Policy
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Stop renting electricity. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                  Own it.
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0">
                SolarAudit calculates your exact ROI using the 2026 PM Surya
                Ghar subsidy rates and local tariff data.
                <span className="block mt-2 font-medium text-slate-900 dark:text-slate-200">
                  No hidden math. Just pure savings.
                </span>
              </p>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-500 pt-4">
                Data verified against 2026 MNRE Guidelines
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-2 w-full max-w-xs shrink-0">
              <Link
                href="#calculator-section"
                title="Calculate your solar savings with our ROI calculator"
                aria-label="Calculate your solar savings with our ROI calculator"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-14 px-8 shadow-lg shadow-emerald-500/20 w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Calculate Savings
              </Link>
              <Link
                href="/shop"
                title="Browse solar panels, inverters, and accessories"
                aria-label="Browse solar panels, inverters, and accessories"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-14 px-8 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 w-full text-slate-900 dark:text-slate-50"
              >
                Shop Solar Gear
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 1.5: CALCULATOR */}
        <CalculatorSection />

        {/* AD ZONE 2: SECTION BREAK */}
        <section className="bg-slate-50 dark:bg-slate-950 py-8 flex justify-center border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="w-full max-w-[728px] min-h-[90px] bg-slate-100 dark:bg-slate-900 rounded flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 text-xs">
              <span className="uppercase tracking-widest opacity-50">
                Sponsored
              </span>
            </div>
          </div>
        </section>

        {/* SECTION: POPULAR CITIES */}
        <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Find Solar in Your City
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Get local subsidy rates and verified installer quotes.
                </p>
              </div>
              <Link
                href="#locations"
                title="View all available solar installation locations"
                aria-label="View all available solar installation locations"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline text-sm flex items-center gap-1"
              >
                View all locations{" "}
                <TrendingUp className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                {
                  name: "Pune",
                  url: "/calculator/maharashtra/pune",
                  state: "Maharashtra",
                },
                {
                  name: "Bengaluru",
                  url: "/calculator/karnataka/bengaluru",
                  state: "Karnataka",
                },
                {
                  name: "Mumbai",
                  url: "/calculator/maharashtra/mumbai",
                  state: "Maharashtra",
                },
                {
                  name: "New Delhi",
                  url: "/calculator/delhi/new-delhi",
                  state: "Delhi",
                },
                {
                  name: "Chennai",
                  url: "/calculator/tamil-nadu/chennai",
                  state: "Tamil Nadu",
                },
                {
                  name: "Ahmedabad",
                  url: "/calculator/gujarat/ahmedabad",
                  state: "Gujarat",
                },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  title={`Calculate solar ROI in ${item.name}, ${item.state}`}
                  aria-label={`Calculate solar ROI in ${item.name}, ${item.state}`}
                  className="group relative p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <MapPin
                      className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    />
                    <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                      {item.state}
                    </span>
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: THE AFFILIATE REVENUE GRID */}
        <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">
              Essential Gear for Solar Owners
            </h2>
            <AffiliateGrid />
          </div>
        </section>

        {/* SECTION: PROBLEM AGITATION */}
        <section className="py-16 bg-slate-50 dark:bg-slate-950 relative z-10">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Why Your Bill is High</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Electricity tariffs in India have risen by{" "}
              <strong className="text-emerald-600 dark:text-emerald-400">
                35%
              </strong>{" "}
              in the last 5 years. In 2026, the average urban household pays{" "}
              <strong className="text-emerald-600 dark:text-emerald-400">
                ₹8/unit
              </strong>
              . Without solar, you are renting your power at an
              inflation-adjusted rate that doubles every 10 years.
            </p>
          </div>
        </section>

        {/* SECTION 3: BENTO GRID */}
        <BentoGrid />

        {/* SECTION 4: SOLAR JOURNEY TIMELINE */}
        <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative z-10 overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                Your Solar Journey
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                A simple path from your current bill to specific energy freedom.
              </p>
            </div>

            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 md:-translate-x-1/2" />

              {[
                {
                  title: "Site Survey",
                  desc: "Our engineer visits your property to analyze shadow-free area, roof strength, and optimal panel orientation.",
                  step: "01",
                },
                {
                  title: "System Design",
                  desc: "We create a 3D model of your roof to simulate generation and ensure maximum efficiency before a single hole is drilled.",
                  step: "02",
                },
                {
                  title: "Installation",
                  desc: "Our certified team installs the mounting structure, panels, and inverter in just 1-2 days with zero structural damage.",
                  step: "03",
                },
                {
                  title: "Net Metering",
                  desc: "We handle the government liaisoning. The DISCOM replaces your meter with a bi-directional one to track your exports.",
                  step: "04",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center gap-8 mb-16 last:mb-0 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Icon Node */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-950 flex items-center justify-center text-white z-10 shadow-lg">
                    {idx === 0 && (
                      <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                    )}
                    {idx === 1 && (
                      <TrendingUp className="w-5 h-5" aria-hidden="true" />
                    )}
                    {idx === 2 && (
                      <Zap className="w-5 h-5" aria-hidden="true" />
                    )}
                    {idx === 3 && (
                      <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                    )}
                  </div>

                  {/* Content Side */}
                  <div
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}
                  >
                    <div className="group relative">
                      <span
                        className={`text-9xl font-black text-slate-300/50 dark:text-slate-700/50 absolute -top-12 -z-10 select-none ${idx % 2 === 0 ? "-left-4" : "-right-4"}`}
                      >
                        {item.step}
                      </span>
                      <span className="text-emerald-500 font-bold tracking-widest text-sm uppercase mb-2 block relative z-10 ml-2">
                        Step {item.step}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10 max-w-md ml-auto mr-auto md:mx-0">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Empty Side for Layout Balance */}
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: FAQ */}
        <HomeFAQ />
      </main>

      {/* GUIDES TEASER SECTION */}
      <GuidesTeaser />

      <Footer />

      {/* Page-specific JSON-LD: WebSite + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
