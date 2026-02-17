"use client";

import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { Calculator } from "@/components/core/Calculator";
import { AffiliateGrid } from "@/components/core/AffiliateGrid";
import { IndianRupee, SwitchCamera, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary transition-colors font-sans overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          {/* Background Elements - Animated */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden block">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-[20%] -left-[10%] w-[1000px] h-[1000px] bg-emerald-500/5 dark:bg-emerald-500/5 rounded-full blur-[120px] will-change-transform"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-[10%] -right-[10%] w-[800px] h-[800px] bg-amber-500/5 dark:bg-amber-500/5 rounded-full blur-[100px] will-change-transform"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Updated for 2026 Policy
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                  Stop renting your <br />
                  electricity. <span className="text-emerald-600 dark:text-emerald-400 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-400 dark:to-emerald-200">Own it.</span>
                </h1>
                <p className="text-lg text-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  SolarAudit calculates your exact ROI using the 2026 PM Surya Ghar subsidy rates and local tariff data from official sources.
                  <span className="block mt-2 font-medium text-text-primary">No hidden math. Just pure savings.</span>
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4 opacity-70 grayscale hover:grayscale-0 transition-all"
                >
                  {/* Logos would go here, using text for now */}
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary border border-border-color px-4 py-2 rounded-full bg-surface/50 backdrop-blur-sm">MNRE Data</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary border border-border-color px-4 py-2 rounded-full bg-surface/50 backdrop-blur-sm">DISCOM Rates</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary border border-border-color px-4 py-2 rounded-full bg-surface/50 backdrop-blur-sm">State Policies</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 lg:mt-0 relative"
              >
                {/* Clean, no-glow approach */}
                <Calculator />
                <AffiliateGrid />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-border-color">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why SolarAudit?</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">We cut through the solar sales pitch to give you the raw numbers.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <motion.div
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-surface p-8 rounded-2xl shadow-sm border border-border-color hover:shadow-lg hover:border-emerald-500/20 transition-all"
              >
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                  <IndianRupee className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">The 2026 Subsidy Update</h3>
                <p className="text-text-secondary leading-relaxed">
                  The central subsidy is now capped at ₹78,000 for systems above 3kW. Some states like UP offer an extra ₹30,000 top-up.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-surface p-8 rounded-2xl shadow-sm border border-border-color hover:shadow-lg hover:border-amber-500/20 transition-all"
              >
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mb-6 text-amber-600 dark:text-amber-400">
                  <SwitchCamera className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Net Metering Explained</h3>
                <p className="text-text-secondary leading-relaxed">
                  Send excess power back to the grid during the day. Withdraw it at night. Your meter runs backwards to offset your bill.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-surface p-8 rounded-2xl shadow-sm border border-border-color hover:shadow-lg hover:border-blue-500/20 transition-all"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">25-Year Warranty</h3>
                <p className="text-text-secondary leading-relaxed">
                  Tier-1 solar panels are performance-warranted for 25 years. It is an asset ensuring energy independence, not just an expense.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
