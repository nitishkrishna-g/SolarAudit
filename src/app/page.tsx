"use client";

import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { Calculator } from "@/components/core/Calculator";
import { AffiliateGrid } from "@/components/core/AffiliateGrid";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Fireflies } from "@/components/ui/fireflies";
import { ShieldCheck, TrendingUp, Zap, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-emerald-500/30">
      <Navbar />
      <Fireflies />

      <main>
        {/* SECTION 1: HERO (Modernized with Aurora) */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* The "Aurora" Effect - Static & Dominant */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/30 blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-500/20 blur-[100px]" />
          </div>

          <div className="container relative z-10 px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Updated for 2026 Policy
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Stop renting electricity. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Own it.</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0">
                SolarAudit calculates your exact ROI using the 2026 PM Surya Ghar subsidy rates and local tariff data.
                <span className="block mt-2 font-medium text-slate-900 dark:text-slate-200">No hidden math. Just pure savings.</span>
              </p>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-500 pt-4">
                Data verified against 2026 MNRE Guidelines
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <Calculator />
            </div>
          </div>
        </section>

        {/* SECTION 2: THE "AFFILIATE" REVENUE GRID */}
        <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Essential Gear for Solar Owners</h2>
            <AffiliateGrid />
          </div>
        </section>

        {/* SECTION 1.5: PROBLEM AGITATION */}
        <section className="py-16 bg-slate-50 dark:bg-slate-950 relative z-10">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Why Your Bill is High</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Electricity tariffs in India have risen by <strong className="text-emerald-600 dark:text-emerald-400">35%</strong> in the last 5 years.
              In 2026, the average urban household pays <strong className="text-emerald-600 dark:text-emerald-400">₹8/unit</strong>.
              Without solar, you are renting your power at an inflation-adjusted rate that doubles every 10 years.
            </p>
          </div>
        </section>

        {/* SECTION 3: BENTO GRID (The "Why Solar" Education) */}
        <section className="py-24 bg-slate-50 dark:bg-slate-950 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Go Solar in 2026?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Box 1: Large Span */}
              <div className="md:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-600 dark:text-emerald-400">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">ROI &gt; Mutual Funds</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  With electricity tariffs rising at 5% CAGR, a solar system offers a tax-free IRR of 25%+. That beats FD, Gold, and most Equity funds provided you have a shadow-free roof.
                </p>
              </div>

              {/* Box 2: Tall Span */}
              <div className="bg-emerald-600 text-white p-8 rounded-3xl shadow-lg flex flex-col justify-between min-h-[280px]">
                <ShieldCheck className="w-12 h-12 mb-4 opacity-80" />
                <div>
                  <h3 className="text-xl font-bold mb-2">25 Year Asset</h3>
                  <p className="opacity-90 leading-relaxed">Performance warranty ensures generation for decades. It's not an expense, it's infrastructure.</p>
                </div>
              </div>

              {/* Box 3 */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl text-amber-600 dark:text-amber-400 w-fit mb-4">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Green Energy</h3>
                <p className="text-slate-600 dark:text-slate-400">Reduce your carbon footprint by 4 tons/year. That's equal to planting 100 trees.</p>
              </div>

              {/* Box 4 */}
              <div className="md:col-span-2 bg-slate-900 dark:bg-slate-800 text-white p-8 rounded-3xl shadow-sm border border-slate-800 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Net Metering Magic</h3>
                </div>
                <p className="text-slate-300">
                  Send excess power to the grid during the day. Withdraw it at night. The grid acts as your free battery bank.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: 4-Step Process - REVAMPED */}
        <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative z-10 overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">From Roof to Savings in 4 Steps</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                We handle the complexity. You enjoy the zero electricity bills. Here is how the journey looks.
              </p>
            </div>

            <div className="relative">
              {/* Center Line for Desktop / Left Line for Mobile */}
              <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500/20 via-emerald-500/50 to-emerald-500/20 md:-translate-x-1/2 rounded-full" />

              {[
                {
                  title: "Site Survey",
                  desc: "Our engineer visits your property to analyze shadow-free area, roof strength, and optimal panel orientation.",
                  icon: <ShieldCheck className="w-6 h-6 text-white" />,
                  color: "bg-emerald-500"
                },
                {
                  title: "Design & Engineering",
                  desc: "We create a 3D model of your roof to simulate generation and ensure maximum efficiency before a single hole is drilled.",
                  icon: <TrendingUp className="w-6 h-6 text-white" />,
                  color: "bg-blue-500"
                },
                {
                  title: "Installation",
                  desc: "Our certified team installs the mounting structure, panels, and inverter in just 1-2 days with zero structural damage.",
                  icon: <Zap className="w-6 h-6 text-white" />,
                  color: "bg-amber-500"
                },
                {
                  title: "Net Metering",
                  desc: "We handle the government liaisoning. The DISCOM replaces your meter with a bi-directional one to track your exports.",
                  icon: <Sun className="w-6 h-6 text-white" />,
                  color: "bg-rose-500"
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex items-center mb-12 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Icon */}
                  <div className={`absolute left-0 md:left-1/2 w-10 h-10 rounded-full ${step.color} shadow-lg shadow-emerald-500/20 flex items-center justify-center z-10 md:-translate-x-1/2 border-4 border-white dark:border-slate-900`}>
                    {step.icon}
                  </div>

                  {/* Spacer for desktop to push content to side */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-emerald-500/30 transition-all group"
                    >
                      <div className={`flex flex-col gap-2 mb-2 ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                        <span className="text-4xl font-bold text-slate-200 dark:text-slate-700 leading-none">0{idx + 1}</span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: FAQ (SEO Juice) */}
        <section className="py-24 bg-slate-50 dark:bg-slate-950 relative z-10">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white dark:bg-slate-900 px-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <AccordionTrigger>Is the ₹78,000 subsidy guaranteed?</AccordionTrigger>
                <AccordionContent>
                  Yes, for systems above 3kW under the PM Surya Ghar scheme. The amount is credited directly to your bank account within 30 days of commissioning.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white dark:bg-slate-900 px-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <AccordionTrigger>What happens if I generate more than I use?</AccordionTrigger>
                <AccordionContent>
                  With Net Metering, excess units are banked with the DISCOM. You can use them in future months or get paid at a nominal rate at the end of the financial year.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white dark:bg-slate-900 px-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <AccordionTrigger>Do solar panels work during rain?</AccordionTrigger>
                <AccordionContent>
                  Yes, but generation drops to 15-20%. However, India has 300+ sunny days, so the annual average remains high.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white dark:bg-slate-900 px-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <AccordionTrigger>What is the maintenance cost?</AccordionTrigger>
                <AccordionContent>
                  Negligible. You only need to clean the panels with water once every 2 weeks to ensure maximum efficiency. There are no moving parts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
