import { HeroAudit } from "@/components/HeroAudit";
import { ProfitChart } from "@/components/ProfitChart";
import { MaintenanceWidget } from "@/components/MaintenanceWidget";
import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12 relative z-10">

        {/* Navbar / Header Placeholder */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold tracking-tighter">Solar<span className="text-primary">Audit</span>.ai</div>
          <div className="hidden md:block bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-xs opacity-50">
            AdSense Slot (Top-Right)
          </div>
        </div>

        {/* Section 1: Hero Audit */}
        <section>
          <HeroAudit />
        </section>

        {/* Section 2 & 3: Profit & Maintenance */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <ProfitChart />
            {/* Lead Magnet Form (Inline or Bottom) */}
            <div className="md:hidden">
              <LeadForm />
            </div>
          </div>
          <div className="space-y-8">
            <MaintenanceWidget />
            {/* Amazon Affiliate Slot (Middle-Right) */}
            <div className="h-32 bg-white/5 border border-white/10 border-dashed rounded-2xl flex items-center justify-center text-xs opacity-50 text-center p-4">
              Amazon Affiliate: <br /> "Telescopic Solar Cleaning Brush"
            </div>
            <div className="hidden md:block">
              <LeadForm />
            </div>
          </div>
        </section>

        {/* Footer / Monetization */}
        <footer className="mt-12 text-center text-sm opacity-50 pb-8">
          <p>© 2026 SolarAudit.ai - Empowering Indian Homes</p>
          <div className="mt-4 mx-auto w-full max-w-md h-16 bg-white/5 border border-white/10 border-dashed rounded-lg flex items-center justify-center text-xs">
            Lead Gen / Ad Slot (Bottom-Center)
          </div>
        </footer>

      </div>
    </main>
  );
}
