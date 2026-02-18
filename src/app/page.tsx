"use client";

import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { Calculator } from "@/components/core/Calculator";
import { AffiliateGrid } from "@/components/core/AffiliateGrid";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Fireflies } from "@/components/ui/fireflies";
import { ShieldCheck, TrendingUp, Zap, CheckCircle2, Home as HomeIcon, Sun, IndianRupee, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { solarData } from "@/data/solarData";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AmazonBounty } from "@/components/ads/AmazonBounty";

import { useState } from "react";

export default function Home() {
  const [isCalculatorExpanded, setIsCalculatorExpanded] = useState(false);
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-emerald-500/30">
      <Navbar />
      <Fireflies />

      <main>


        {/* SECTION 1: HERO (Modernized with Aurora) */}
        <section className="relative pb-20 pt-0 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* The "Aurora" Effect - Static & Dominant */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/30 blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-500/20 blur-[100px]" />
          </div>

          {/* AD ZONE 1: LEADERBOARD (Integrated) */}
          <div className="container relative z-20 px-4 pt-6 pb-6 mx-auto flex justify-center">
            <div className="w-full max-w-[728px] min-h-[90px] bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-xl flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 text-xs border border-white/20 dark:border-white/10 shadow-sm">
              <span className="uppercase tracking-widest opacity-70 font-semibold">Advertisement</span>
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

            <div className="flex flex-col gap-4 pt-2 w-full max-w-xs shrink-0">
              <Link
                href="#calculator-section"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-14 px-8 shadow-lg shadow-emerald-500/20 w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Calculate Savings
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-14 px-8 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 w-full text-slate-900 dark:text-slate-50"
              >
                Shop Solar Gear
              </Link>
            </div>
          </div>


        </section>

        {/* SECTION 1.5: CALCULATOR (Dedicated Section) */}


        {/* SECTION 1.5: CALCULATOR (Dedicated Section) */}
        <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative z-10" id="calculator-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* LEFT COLUMN: Content & Buying Links (Ads) */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                    Calculate Your <span className="text-emerald-600 dark:text-emerald-400">Potential Savings</span>
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Stop guessing. Our advanced calculator uses real-time tariff data and the 2026 PM Surya Ghar subsidy rates to give you an accurate ROI estimate.
                  </p>
                  <ul className="space-y-3 pt-2">
                    {[
                      "Instant Subsidy Calculation",
                      "Monthly Savings Estimation",
                      "ROI & Payback Period",
                      "System Size Recommendation"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BUYING LINKS / ADS: REPLACED WITH PRODUCT */}
                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Best Seller</span>
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">Save 38%</span>
                  </div>

                  <a
                    href="https://www.amazon.in/dp/B00L4R6E96?tag=solaraudit-21"
                    target="_blank"
                    rel="nofollow noopener"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-24 h-24 bg-white rounded-lg p-2 border border-slate-100 flex items-center justify-center shrink-0">
                      <img src="https://m.media-amazon.com/images/I/41-M+6q+LAL._SX300_SY300_QL70_FMwebp_.jpg" alt="Solar Inverter" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white leading-tight group-hover:text-emerald-600 transition-colors">
                        Luminous NXG 1400 Solar Inverter (12V)
                      </h3>
                      <div className="flex items-center gap-2 mt-1 mb-2">
                        <div className="flex text-amber-400">
                          <span className="text-xs">★★★★☆</span>
                        </div>
                        <span className="text-xs text-slate-500">(2.4k reviews)</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-slate-900 dark:text-white">₹9,500</span>
                        <span className="text-sm text-slate-400 line-through">₹16,500</span>
                      </div>
                      <div className="mt-3 text-xs font-bold text-center text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-lg px-3 py-1.5 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 transition-colors w-full">
                        Check Price on Amazon
                      </div>
                    </div>
                  </a>
                </div>

                {/* DYNAMIC PRODUCT EXPANSION */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: isCalculatorExpanded ? "auto" : 0, opacity: isCalculatorExpanded ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 space-y-4">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase tracking-wider">
                      <Zap className="w-4 h-4" /> Recommended Add-ons
                    </div>
                    {/* Product 2: Cleaning Kit */}
                    <a
                      href="https://www.amazon.in/dp/B09X5K6G3T?tag=solaraudit-21"
                      target="_blank"
                      rel="nofollow noopener"
                      className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-emerald-500/30 transition-all group"
                    >
                      <div className="w-16 h-16 bg-white rounded-lg p-1 border border-slate-100 flex items-center justify-center shrink-0">
                        <img src="https://m.media-amazon.com/images/I/51wQge-zWlL._SX522_.jpg" alt="Cleaning Kit" className="w-full h-full object-contain" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm truncate group-hover:text-emerald-500 transition-colors">
                          Solar Panel Cleaning Kit (Brush + Pole)
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-emerald-600 font-bold text-sm">₹1,499</span>
                          <span className="text-slate-400 text-xs line-through">₹2,999</span>
                          <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] px-1.5 py-0.5 rounded">50% OFF</span>
                        </div>
                      </div>
                    </a>

                    {/* Product 3: Solar Battery */}
                    <a
                      href="https://www.amazon.in/d/B00L4R6E96?tag=solaraudit-21"
                      target="_blank"
                      rel="nofollow noopener"
                      className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-emerald-500/30 transition-all group"
                    >
                      <div className="w-16 h-16 bg-white rounded-lg p-1 border border-slate-100 flex items-center justify-center shrink-0">
                        <img src="https://placehold.co/400x300/e2e8f0/1e293b?text=Battery" alt="Solar Battery" className="w-full h-full object-contain" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm truncate group-hover:text-emerald-500 transition-colors">
                          Luminous Red Charge RC 18000 150 Ah
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-emerald-600 font-bold text-sm">₹14,500</span>
                          <span className="text-slate-400 text-xs line-through">₹22,000</span>
                        </div>
                      </div>
                    </a>

                    {/* Product 4: Garden Lights */}
                    <a
                      href="https://www.amazon.in/s?k=solar+garden+lights&tag=solaraudit-21"
                      target="_blank"
                      rel="nofollow noopener"
                      className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-emerald-500/30 transition-all group"
                    >
                      <div className="w-16 h-16 bg-white rounded-lg p-1 border border-slate-100 flex items-center justify-center shrink-0">
                        <img src="https://placehold.co/400x300/e2e8f0/1e293b?text=Garden+Lights" alt="Garden Lights" className="w-full h-full object-contain" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm truncate group-hover:text-emerald-500 transition-colors">
                          Solar Garden Lights (Pack of 4)
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-emerald-600 font-bold text-sm">₹899</span>
                          <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] px-1.5 py-0.5 rounded">Best Seller</span>
                        </div>
                      </div>
                    </a>

                    {/* Product 5: Smart Meter */}
                    <a
                      href="https://www.amazon.in/s?k=smart+energy+meter&tag=solaraudit-21"
                      target="_blank"
                      rel="nofollow noopener"
                      className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-emerald-500/30 transition-all group"
                    >
                      <div className="w-16 h-16 bg-white rounded-lg p-1 border border-slate-100 flex items-center justify-center shrink-0">
                        <img src="https://placehold.co/400x300/e2e8f0/1e293b?text=Smart+Meter" alt="Smart Meter" className="w-full h-full object-contain" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm truncate group-hover:text-emerald-500 transition-colors">
                          Smart Wi-Fi Energy Meter (Tuya App)
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-emerald-600 font-bold text-sm">₹2,299</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT COLUMN: Calculator */}
              <div className="w-full max-w-xl mx-auto lg:ml-auto sticky top-24">
                <Calculator onCalculationComplete={() => setIsCalculatorExpanded(true)} />
              </div>
            </div>
          </div>
        </section>

        {/* AD ZONE 2: SECTION BREAK */}
        <section className="bg-slate-50 dark:bg-slate-950 py-8 flex justify-center border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="w-full max-w-[728px] min-h-[90px] bg-slate-100 dark:bg-slate-900 rounded flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 text-xs">
              <span className="uppercase tracking-widest opacity-50">Sponsored</span>
            </div>
          </div>
        </section>

        {/* SECTION 1.5: POPULAR CITIES (Quick Access) */}
        <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Find Solar in Your City</h2>
                <p className="text-slate-600 dark:text-slate-400">Get local subsidy rates and verified installer quotes.</p>
              </div>
              <Link href="#locations" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline text-sm flex items-center gap-1">
                View all locations <TrendingUp className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Manual Grid for Top Cities to ensure they map correctly to my new data structure */}
              {[
                { name: 'Pune', url: '/calculator/maharashtra/pune', state: 'Maharashtra' },
                { name: 'Bengaluru', url: '/calculator/karnataka/bengaluru', state: 'Karnataka' },
                { name: 'Mumbai', url: '/calculator/maharashtra/mumbai', state: 'Maharashtra' },
                { name: 'New Delhi', url: '/calculator/delhi/new-delhi', state: 'Delhi' },
                { name: 'Chennai', url: '/calculator/tamil-nadu/chennai', state: 'Tamil Nadu' },
                { name: 'Ahmedabad', url: '/calculator/gujarat/ahmedabad', state: 'Gujarat' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className="group relative p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <MapPin className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded-full">{item.state}</span>
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: THE "AFFILIATE" REVENUE GRID */}
        <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">Essential Gear for Solar Owners</h2>
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

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {/* Box 1: Large Span */}
              <motion.div
                variants={item}
                className="md:col-span-2 h-full"
              >
                <SpotlightCard className="h-full bg-gradient-to-br from-white to-emerald-50/50 dark:from-slate-900 dark:to-emerald-900/10 hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300" spotlightColor="rgba(16, 185, 129, 0.2)">
                  <div className="p-8 flex flex-col justify-center h-full">
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
                </SpotlightCard>
              </motion.div>

              {/* Box 2: Tall Span */}
              <motion.div
                variants={item}
                className="h-full"
              >
                <SpotlightCard className="h-full bg-emerald-600 text-white shadow-lg flex flex-col justify-between min-h-[280px] border-none" spotlightColor="rgba(255, 255, 255, 0.2)">
                  <div className="p-8 h-full flex flex-col justify-between relative z-10">
                    <ShieldCheck className="w-12 h-12 mb-4 opacity-80" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">25 Year Asset</h3>
                      <p className="opacity-90 leading-relaxed">Performance warranty ensures generation for decades. It's not an expense, it's infrastructure.</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>

              {/* Box 3 */}
              <motion.div
                variants={item}
                className="h-full"
              >
                <SpotlightCard className="h-full bg-gradient-to-br from-white to-amber-50/50 dark:from-slate-900 dark:to-amber-900/10 hover:shadow-xl hover:border-amber-500/30 transition-all duration-300" spotlightColor="rgba(245, 158, 11, 0.2)">
                  <div className="p-8 h-full">
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl text-amber-600 dark:text-amber-400 w-fit mb-4">
                      <Sun className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Green Energy</h3>
                    <p className="text-slate-600 dark:text-slate-400">Reduce your carbon footprint by 4 tons/year. That's equal to planting 100 trees.</p>
                  </div>
                </SpotlightCard>
              </motion.div>

              {/* Box 4 */}
              <motion.div
                variants={item}
                className="md:col-span-2 h-full"
              >
                <SpotlightCard className="h-full bg-slate-900 dark:bg-slate-800 text-white hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300" spotlightColor="rgba(59, 130, 246, 0.2)">
                  <div className="p-8 flex flex-col justify-center h-full relative overflow-hidden">
                    {/* Background Gradient for this specific card */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-50 pointer-events-none" />

                    <div className="flex items-center gap-4 mb-4 relative z-10">
                      <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">Net Metering Magic</h3>
                    </div>
                    <p className="text-slate-300 relative z-10">
                      Send excess power to the grid during the day. Withdraw it at night. The grid acts as your free battery bank.
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: 4-Step Process - FIX (Robust Timeline) */}
        <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative z-10 overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Your Solar Journey</h2>
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
                  icon: <ShieldCheck className="w-5 h-5" />,
                  step: "01"
                },
                {
                  title: "System Design",
                  desc: "We create a 3D model of your roof to simulate generation and ensure maximum efficiency before a single hole is drilled.",
                  icon: <TrendingUp className="w-5 h-5" />,
                  step: "02"
                },
                {
                  title: "Installation",
                  desc: "Our certified team installs the mounting structure, panels, and inverter in just 1-2 days with zero structural damage.",
                  icon: <Zap className="w-5 h-5" />,
                  step: "03"
                },
                {
                  title: "Net Metering",
                  desc: "We handle the government liaisoning. The DISCOM replaces your meter with a bi-directional one to track your exports.",
                  icon: <CheckCircle2 className="w-5 h-5" />,
                  step: "04"
                }
              ].map((item, idx) => (
                <div key={idx} className={`relative flex items-center gap-8 mb-16 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  {/* Icon Node (Absolute Center) */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-950 flex items-center justify-center text-white z-10 shadow-lg">
                    {item.icon}
                  </div>

                  {/* Content Side */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="group relative">
                      <span className={`text-9xl font-black text-slate-300/50 dark:text-slate-700/50 absolute -top-12 -z-10 select-none ${idx % 2 === 0 ? '-left-4' : '-right-4'}`}>
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
    </div >
  );
}
