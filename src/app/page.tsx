import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { Calculator } from "@/components/core/Calculator";
import { IndianRupee, SwitchCamera, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary transition-colors font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-3xl opacity-30" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                  Stop renting your <br />
                  electricity. <span className="text-emerald-600 dark:text-emerald-400">Own it.</span>
                </h1>
                <p className="text-lg text-text-secondary max-w-xl mx-auto lg:mx-0">
                  SolarAudit calculates your exact ROI using the 2026 PM Surya Ghar subsidy rates and local tariff data. No hidden math.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                  {/* Logos would go here, using text for now */}
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary border border-border-color px-3 py-1 rounded-full">MNRE Data</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary border border-border-color px-3 py-1 rounded-full">DISCOM Rates</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary border border-border-color px-3 py-1 rounded-full">State Policies</span>
                </div>
              </div>

              <div className="mt-8 lg:mt-0">
                <Calculator />
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-border-color">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border-color hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                  <IndianRupee className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">The 2026 Subsidy Update</h3>
                <p className="text-text-secondary leading-relaxed">
                  The central subsidy is now capped at ₹78,000 for systems above 3kW. Some states like UP offer an extra ₹30,000 top-up.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border-color hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-6 text-amber-600 dark:text-amber-400">
                  <SwitchCamera className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Net Metering Explained</h3>
                <p className="text-text-secondary leading-relaxed">
                  Send excess power back to the grid during the day. Withdraw it at night. Your meter runs backwards to offset your bill.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border-color hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">25-Year Warranty</h3>
                <p className="text-text-secondary leading-relaxed">
                  Tier-1 solar panels are performance-warranted for 25 years. It is an asset ensuring energy independence, not just an expense.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
