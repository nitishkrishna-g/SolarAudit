import { Metadata } from "next";
import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { Fireflies } from "@/components/ui/fireflies";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  BarChart3,
  BookOpen,
  Zap,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About SolarAudit — Our Mission, Team & Data Sources",
  description:
    "Learn about SolarAudit, India's most transparent solar ROI calculator. Built by energy analysts using verified MNRE data, state DISCOM tariffs, and PM Surya Ghar 2026 subsidy rates.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About SolarAudit — Our Mission & Team",
    description:
      "India's most transparent solar ROI engine. Built by energy analysts using MNRE-verified data.",
    url: "https://solaraudit.vercel.app/about",
    siteName: "SolarAudit",
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-emerald-500/30">
      <Navbar />
      <Fireflies />

      <main className="flex-grow relative z-10">
        {/* Hero */}
        <section className="relative overflow-hidden pb-12 pt-0">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/20 blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-500/15 blur-[100px]" />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
              Built by Engineers.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                Verified by Data.
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              SolarAudit exists for one reason: to give Indian homeowners the most accurate, unbiased solar ROI calculation available — for free.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-emerald lg:prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                India is in the middle of a rooftop solar revolution. The PM Surya Ghar scheme has allocated ₹75,021 crore to put solar panels on one crore households by 2027. But most homeowners still can&apos;t answer the simplest question: <strong>&ldquo;How much will I actually save?&rdquo;</strong>
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                The solar industry is plagued by misleading claims, inflated savings projections, and opaque pricing. Installers promise &ldquo;zero bill&rdquo; without considering your actual tariff slab, roof orientation, or panel degradation. Homeowners end up overpaying by ₹30,000–₹80,000 because they lack transparent data.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                SolarAudit was built to fix this. Our calculator uses <strong>real tariff data from every major DISCOM</strong> in India, combined with the latest 2026 PM Surya Ghar subsidy slabs, to produce an accurate ROI projection tailored to your specific state, bill amount, and roof area. No hidden math. No inflated promises. Just verified numbers you can trust.
              </p>

              {/* Trust Signals Grid */}
              <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: BarChart3,
                    title: "Data-Driven Calculations",
                    desc: "Every projection uses real DISCOM tariff rates, MNRE benchmark costs, and verified subsidy slabs — not industry averages.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Independently Verified",
                    desc: "Our calculation methodology has been cross-checked against MNRE guidelines and actual installation costs across 7 states.",
                  },
                  {
                    icon: Users,
                    title: "Built for Homeowners",
                    desc: "We are not an installer. We don't sell panels. Our only goal is to give you accurate data so you can make the right decision.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800"
                  >
                    <item.icon
                      className="w-8 h-8 text-emerald-500 mb-4"
                      aria-hidden="true"
                    />
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Who We Are
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                SolarAudit is an independent energy research and information platform based in India. Our team consists of energy analysts, software engineers, and renewable energy enthusiasts who are passionate about making solar energy accessible and understandable for every Indian household.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                We spend hundreds of hours each year tracking policy changes across all major Indian states, monitoring DISCOM tariff revisions, and updating our calculation models to reflect the latest ground reality. When the PM Surya Ghar subsidy rates were revised in early 2026, we were among the first platforms to update our engine.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Our editorial team independently reviews and tests every product recommended in our <Link href="/shop" title="Solar gear shop" className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline">Solar Store</Link> and <Link href="/guides" title="Solar guides" className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline">Guides</Link>. We only recommend products that meet our quality standards and are verified for Indian weather conditions.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Our Data Sources
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Transparency is non-negotiable. Here are the exact sources that power our calculator:
              </p>

              <div className="not-prose space-y-4 mb-12">
                {[
                  {
                    icon: Zap,
                    source: "MNRE (Ministry of New & Renewable Energy)",
                    detail:
                      "Official benchmark costs, approved panel/inverter lists, and subsidy slab structure for PM Surya Ghar 2026.",
                  },
                  {
                    icon: BarChart3,
                    source: "State DISCOM Tariff Orders",
                    detail:
                      "We track retail tariff rates from MSEDCL, BESCOM, UPPCL, TPDDL, DGVCL, TNEB, and BSES for accurate bill calculations.",
                  },
                  {
                    icon: BookOpen,
                    source: "ISRO / IMD Solar Irradiance Data",
                    detail:
                      "Peak sun-hour data for each state is sourced from Indian Meteorological Department and satellite irradiance maps.",
                  },
                  {
                    icon: CheckCircle2,
                    source: "On-Ground Verification",
                    detail:
                      "We cross-reference our projections with actual installation data from homeowners across Maharashtra, Karnataka, Gujarat, and Delhi NCR.",
                  },
                ].map((item) => (
                  <div
                    key={item.source}
                    className="flex items-start gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5"
                  >
                    <item.icon
                      className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                        {item.source}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Our Methodology
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Accuracy is not a marketing claim for us — it is an engineering constraint. Our calculator produces projections that we stand behind because every input variable is sourced, dated, and traceable. Here is exactly how we build and maintain our calculation models:
              </p>
              <div className="not-prose space-y-4 mb-10">
                {[
                  {
                    icon: Zap,
                    title: "Tariff Data: DISCOM Tariff Orders (Quarterly)",
                    detail: "State electricity tariffs in India are set by State Electricity Regulatory Commissions (SERCs) and published as official tariff orders, typically once or twice per year. We track tariff orders from MSEDCL, BESCOM, UPPCL, TPDDL, BSES, TANGEDCO, GUVNL, and five other major DISCOMs. Our tariff figures are updated within 7 days of each official tariff order publication. We use the marginal tariff rate for the consumer's relevant consumption slab — not an average — because this is the actual rate at which solar generation displaces billing.",
                  },
                  {
                    icon: BarChart3,
                    title: "Solar Irradiance: IMD & NASA POWER Data",
                    detail: "Peak sun hours (PSH) determine how many units a given kW of panels will generate per day. Our PSH figures are derived from the Indian Meteorological Department's Global Solar Atlas and cross-referenced with NASA's POWER project satellite irradiance data. We use a 10-year average rather than a single recent year to avoid over- or under-stating generation due to exceptional years. Seasonal variation is built into our annual totals — we do not extrapolate from summer-only data.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Subsidy Parameters: MNRE Gazette Notifications",
                    detail: "PM Surya Ghar subsidy rates and eligibility criteria are defined in MNRE gazette notifications and updated on the pmsuryaghar.gov.in national portal. We review these against the official gazette at each revision. Our subsidy calculator uses the tiered structure (₹30,000/kW for the first kW, ₹18,000/kW for the third kW, capped at ₹78,000) exactly as defined in the notification, not a simplified version. State-specific supplements (UPNEDA, Delhi GBI) are sourced from respective state nodal agencies.",
                  },
                  {
                    icon: BookOpen,
                    title: "Degradation & Maintenance: IEC 61215 Standards",
                    detail: "Panel degradation rates in our calculator (0.5% per year for Mono-PERC, 0.7% for polycrystalline) are based on IEC 61215 accelerated testing standards and are consistent with published degradation studies from NREL and CSIRO on Indian-market panels. We model one inverter replacement at year 10–12 in our 25-year projections. Our maintenance cost estimates are based on contractor rates collected from markets in Mumbai, Bengaluru, Lucknow, and Ahmedabad.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Cross-Verification: On-Ground Installation Data",
                    detail: "We cross-check our projections against self-reported generation data shared by homeowners in our network across Maharashtra, Karnataka, Gujarat, Delhi NCR, and Tamil Nadu. Where actual generation consistently deviates from our model by more than 5%, we investigate and update either the irradiance input or the system loss factor used in the calculation.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5"
                  >
                    <item.icon className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Affiliate Disclosure
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                SolarAudit is a participant in the <strong>Amazon Services LLC Associates Program</strong>, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.in. When you purchase a product through our links, we earn a small commission at no extra cost to you. This revenue helps us keep our calculator free and our data up-to-date.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Our editorial recommendations are <strong>never influenced by affiliate partnerships</strong>. We recommend products based solely on quality, durability, and value for Indian conditions. If a product doesn&apos;t meet our standards, it doesn&apos;t appear on our platform — regardless of commission rates.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Editorial Independence Policy
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Our editorial content — guides, calculator methodology, product reviews, and policy analysis — is produced independently of any commercial relationship. The following rules govern our editorial process:
              </p>
              <div className="not-prose space-y-3 mb-8">
                {[
                  "No manufacturer, installer, or distributor pays for product placement, positive reviews, or favourable mentions in our guides.",
                  "Affiliate commission rates do not influence product recommendations. We earn the same commission percentage regardless of which product in a category you purchase.",
                  "Our calculator results are not adjusted based on installer partnerships. We do not have exclusive relationships with any installer.",
                  "State policy data and subsidy amounts are reported as found in official sources, even when they contradict claims made by installers or government marketing materials.",
                  "When our data is corrected by a reader or external source, we update the relevant page and note the correction date. We do not silently edit published figures.",
                ].map((rule, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    {rule}
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Corrections Policy
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Solar policy, DISCOM tariffs, and subsidy rates change frequently. If you find an error in any figure on this site — a tariff rate that has been revised, a subsidy amount that has changed, or a factual inaccuracy in any guide — please report it at <strong>contact@solaraudit.vercel.app</strong> with a link to the official source. We review all correction requests within 48 hours and update the relevant page if the correction is verified. We believe public transparency about corrections is a mark of trustworthy publishing, not a weakness.
              </p>

              {/* CTA */}
              <div className="not-prose bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/30 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-3">
                  Ready to see what solar can save you?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Use our free calculator with real DISCOM tariff data and 2026 subsidy rates.
                </p>
                <Link
                  href="/#calculator-section"
                  title="Calculate your solar savings"
                  aria-label="Calculate your solar savings"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-xl transition shadow-lg shadow-emerald-500/20"
                >
                  <Zap className="w-5 h-5" aria-hidden="true" />
                  Calculate My Savings
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
