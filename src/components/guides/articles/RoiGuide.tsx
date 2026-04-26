import { motion } from "framer-motion";
import { Reveal, SectionHeading, InfoBox, StatCards, DarkInfoPanel } from "../ArticleAnimations";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export function RoiGuide() {
    return (
        <>
            <SectionHeading id="what-is-roi" emoji="📈" title="What is Solar ROI?" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    Solar ROI measures the <strong className="text-slate-900 dark:text-white">financial return from your rooftop solar system</strong> compared to its total cost. Unlike most home improvements that depreciate, solar generates <em>increasing</em> returns because electricity tariffs rise while your solar cost stays fixed at zero.
                </p>
            </Reveal>
            <StatCards items={[
                { value: "20–35%", label: "Annual ROI", color: "emerald" },
                { value: "3–5 yr", label: "Payback Period", color: "blue" },
                { value: "20x+", label: "25-Year Return", color: "amber" },
            ]} />
            <InfoBox variant="info">
                Solar delivers 20–35% annual returns — outperforming FDs (6–7%), mutual funds (12–15%), and even real estate in most markets.
            </InfoBox>

            <SectionHeading id="formula" emoji="🧮" title="The Formula" />
            <DarkInfoPanel title="Solar ROI Formula">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mb-4 text-center">
                    <p className="text-lg font-mono text-emerald-300 font-bold">
                        ROI = [(Lifetime Savings − System Cost) ÷ System Cost] × 100
                    </p>
                </div>
                <p className="text-sm text-slate-400 mb-2">Real example — 3kW system in Maharashtra:</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-slate-400">System cost:</div><div className="text-white font-medium">₹1,80,000</div>
                    <div className="text-slate-400">PM Surya Ghar subsidy:</div><div className="text-emerald-400 font-medium">−₹78,000</div>
                    <div className="text-slate-400">Net cost:</div><div className="text-white font-bold">₹1,02,000</div>
                    <div className="text-slate-400">25-year savings:</div><div className="text-white font-medium">₹22,90,000</div>
                    <div className="text-slate-400">Maintenance + inverter:</div><div className="text-amber-400 font-medium">−₹90,000</div>
                    <div className="text-slate-400 font-bold border-t border-slate-700 pt-2">Net ROI:</div>
                    <div className="text-emerald-400 font-bold text-lg border-t border-slate-700 pt-2">2,057%</div>
                </div>
            </DarkInfoPanel>

            <SectionHeading id="variables" emoji="🎛️" title="Key Variables" />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3 mb-8">
                {[
                    { icon: "⚡", title: "Electricity Tariff (₹/unit)", desc: "The single biggest factor. MH at ₹11/unit sees 2x faster payback vs GJ at ₹5.50/unit." },
                    { icon: "☀️", title: "Peak Sun Hours", desc: "GJ & RJ lead (5.5–5.8 hrs) while Kerala averages 4.0–4.5 hrs. Directly affects daily generation." },
                    { icon: "📏", title: "System Capacity (kW)", desc: "Must match consumption. Over-sizing wastes investment since surplus credits may lapse or be compensated low." },
                    { icon: "📉", title: "Panel Degradation", desc: "0.5–0.7% per year. A 3kW system: 12 units/day in year 1 → 10.5 units/day in year 25." },
                    { icon: "📊", title: "Tariff Escalation", desc: "Indian tariffs rise 5–8% annually. Your savings grow every year while solar cost stays fixed." },
                    { icon: "💰", title: "Subsidy Amount", desc: "₹78,000 max from PM Surya Ghar. Without subsidy, payback extends by 1.5–2.5 years." },
                    { icon: "🔧", title: "Maintenance Costs", desc: "One inverter replacement + cleaning = ₹75K–90K over 25 years. Well-maintained systems generate 15–20% more." },
                    { icon: "🔄", title: "Net Metering Policy", desc: "States with 1:1 credit provide better ROI than those with reduced buyback rates." },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                        <span className="text-xl shrink-0">{item.icon}</span>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{item.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <SectionHeading id="payback" emoji="⏱️" title="Payback Period by State" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    After payback, every unit your system generates is <strong className="text-slate-900 dark:text-white">free electricity</strong> for the remaining 20+ years:
                </p>
            </Reveal>
            <Reveal>
                <div className="space-y-3 mb-8">
                    {[
                        { state: "Maharashtra", tariff: "₹11.00", payback: "2.0–2.5 yr", w: "95%" },
                        { state: "Tamil Nadu", tariff: "₹8.50", payback: "2.5–3.0 yr", w: "80%" },
                        { state: "Delhi", tariff: "₹8.00", payback: "2.5–3.0 yr", w: "75%" },
                        { state: "Karnataka", tariff: "₹7.80", payback: "3.0–3.5 yr", w: "72%" },
                        { state: "Uttar Pradesh", tariff: "₹7.50", payback: "3.0–3.5 yr", w: "68%" },
                        { state: "Gujarat", tariff: "₹5.50", payback: "4.0–5.0 yr", w: "50%" },
                    ].map((row, i) => (
                        <motion.div
                            key={row.state}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="flex items-center gap-3"
                        >
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 w-24 shrink-0">{row.state}</span>
                            <div className="flex-1">
                                <motion.div
                                    className="h-8 bg-emerald-500/80 rounded-lg flex items-center px-3"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: row.w }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
                                >
                                    <span className="text-white text-xs font-bold whitespace-nowrap">{row.tariff}/unit → {row.payback}</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Reveal>

            <SectionHeading id="examples" emoji="📝" title="Real-World Examples" />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4 mb-8">
                {[
                    { city: "Pune", bill: "₹5,000/mo", system: "3kW", cost: "₹1,02,000", savings: "₹52,000/yr", payback: "23 months", lifetime: "₹24+ lakh", color: "emerald" },
                    { city: "Ahmedabad", bill: "₹3,000/mo", system: "2kW", cost: "₹60,000", savings: "₹19,000/yr", payback: "38 months", lifetime: "₹7+ lakh", color: "blue" },
                    { city: "Delhi", bill: "₹8,000/mo", system: "5kW", cost: "₹2,22,000", savings: "₹84,000/yr", payback: "32 months", lifetime: "₹30+ lakh", color: "amber" },
                ].map((ex, i) => (
                    <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.02 }} className={`border-2 rounded-2xl p-5 cursor-default ${ex.color === "emerald" ? "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-400" : ex.color === "blue" ? "bg-blue-50 dark:bg-blue-900/10 border-blue-400" : "bg-amber-50 dark:bg-amber-900/10 border-amber-400"}`}>
                        <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${ex.color === "emerald" ? "text-emerald-600" : ex.color === "blue" ? "text-blue-600" : "text-amber-600"}`}>
                            {ex.city} — {ex.bill} bill
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                            <div><div className="text-xs text-slate-500">System</div><div className="font-bold text-slate-900 dark:text-white">{ex.system}</div></div>
                            <div><div className="text-xs text-slate-500">Net Cost</div><div className="font-bold text-slate-900 dark:text-white">{ex.cost}</div></div>
                            <div><div className="text-xs text-slate-500">Payback</div><div className="font-bold text-emerald-600 dark:text-emerald-400">{ex.payback}</div></div>
                            <div><div className="text-xs text-slate-500">25-yr Savings</div><div className="font-bold text-emerald-600 dark:text-emerald-400">{ex.lifetime}</div></div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <SectionHeading id="improve-roi" emoji="🚀" title="How to Maximise ROI" />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3 mb-8">
                {[
                    { icon: "📏", text: "Right-size your system — Match to actual consumption. Over-sizing wastes money; under-sizing leaves savings on the table." },
                    { icon: "🧹", text: "Clean panels regularly — A ₹2,000 cleaning kit saves ₹6,000–₹9,000 per year. 15–25% efficiency loss from dust." },
                    { icon: "⭐", text: "Choose quality components — Tier-1 panels cost 10–15% more but generate 5–10% more over their lifetime." },
                    { icon: "🌞", text: "Shift heavy loads to daytime — Run ACs, washing machines, and water heaters during 10 AM – 4 PM." },
                    { icon: "📱", text: "Monitor daily generation — Use your inverter's app. Sudden drops = cleaning needed or equipment issues." },
                    { icon: "🔋", text: "Avoid battery unless needed — Batteries add ₹60K–₹1.2L to cost. Only worth it if you get 2+ hours of power cuts daily." },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                        <span className="text-xl shrink-0">{item.icon}</span>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
                    </motion.div>
                ))}
            </motion.div>

            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Ready to calculate your exact ROI? Our <a href="/#calculator-section" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">free Solar ROI Calculator</a> uses real DISCOM tariff data and 2026 PM Surya Ghar subsidy rates for accurate projections tailored to your state.
                </p>
            </Reveal>

            <SectionHeading id="tariff-escalation" emoji="📈" title="Tariff Escalation: Why Your Savings Grow Every Year" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    Solar ROI calculations that ignore tariff escalation are significantly understating the financial benefit of going solar. Indian electricity tariffs have increased at an average compound annual growth rate (CAGR) of 6.2% over the past decade — meaning the value of every unit your panels generate increases year after year, while your solar system&apos;s cost remains fixed at zero.
                </p>
            </Reveal>
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Here is the compounding effect on a 3kW system in Maharashtra (current tariff: ₹11/unit) over 25 years, using a conservative 5% annual escalation:
                </p>
            </Reveal>
            <Reveal>
                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                                {["Year", "Effective Tariff (₹/unit)", "Annual Generation (units)", "Annual Savings", "Cumulative Savings"].map((h) => (
                                    <th key={h} className="p-3 text-left border border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white text-xs">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-slate-600 dark:text-slate-400 text-xs">
                            {[
                                ["Year 1", "₹11.00", "4,320", "₹47,520", "₹47,520"],
                                ["Year 3", "₹12.13", "4,277", "₹51,890", "₹1,47,900"],
                                ["Year 5", "₹14.04", "4,234", "₹59,440", "₹2,57,800"],
                                ["Year 10", "₹17.93", "4,105", "₹73,580", "₹5,90,000"],
                                ["Year 15", "₹22.88", "3,980", "₹91,060", "₹10,30,000"],
                                ["Year 20", "₹29.20", "3,858", "₹1,12,650", "₹16,10,000"],
                                ["Year 25", "₹37.27", "3,740", "₹1,39,390", "₹23,50,000"],
                            ].map(([year, tariff, gen, annual, cumulative]) => (
                                <tr key={year} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white">{year}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800">{tariff}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800">{gen}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-medium">{annual}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-emerald-600 dark:text-emerald-400">{cumulative}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Reveal>
            <InfoBox variant="info">
                At a static tariff, this system saves ₹11.88 lakh over 25 years. With 5% annual escalation factored in, total savings reach ₹23.50 lakh — nearly double. Most solar ROI calculators on the internet use a static tariff, causing them to understate solar ROI by 40–60%.
            </InfoBox>

            <SectionHeading id="break-even-analysis" emoji="🎯" title="Break-Even Analysis: 3kW System Across 6 States" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    The break-even point is when cumulative savings equal the net system cost (after PM Surya Ghar subsidy). What happens after break-even is pure profit — your panels generate free electricity for the remaining years of their 25-year life. This analysis uses 2026 benchmark costs: ₹1,80,000 gross cost, ₹78,000 subsidy, ₹1,02,000 net cost, with 5% annual tariff escalation:
                </p>
            </Reveal>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4 mb-8">
                {[
                    { state: "Maharashtra", tariff: "₹11.00/unit", gen: "18 units/day", annualSavings: "₹65,000", breakEven: "19 months", post25yr: "₹23.5 lakh", verdict: "Exceptional", color: "emerald" },
                    { state: "Tamil Nadu", tariff: "₹8.50/unit", gen: "17 units/day", annualSavings: "₹52,700", breakEven: "23 months", post25yr: "₹19.2 lakh", verdict: "Excellent", color: "emerald" },
                    { state: "Delhi", tariff: "₹8.00/unit", gen: "15 units/day", annualSavings: "₹43,800", breakEven: "28 months", post25yr: "₹16.8 lakh", verdict: "Very Good", color: "blue" },
                    { state: "Uttar Pradesh", tariff: "₹7.50/unit", gen: "16 units/day", annualSavings: "₹43,800", breakEven: "14 months*", post25yr: "₹17.1 lakh", verdict: "Excellent (with UP subsidy)", color: "blue" },
                    { state: "Karnataka", tariff: "₹7.80/unit", gen: "17 units/day", annualSavings: "₹48,400", breakEven: "25 months", post25yr: "₹17.8 lakh", verdict: "Excellent", color: "blue" },
                    { state: "Gujarat", tariff: "₹5.50/unit", gen: "19 units/day", annualSavings: "₹38,200", breakEven: "32 months", post25yr: "₹13.6 lakh", verdict: "Good", color: "amber" },
                ].map((row, i) => (
                    <motion.div key={i} variants={fadeUp} className={`border rounded-2xl p-4 ${row.color === "emerald" ? "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800/50" : row.color === "blue" ? "bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800/50" : "bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800/50"}`}>
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-slate-900 dark:text-white">{row.state}</h4>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${row.color === "emerald" ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300" : row.color === "blue" ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300" : "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300"}`}>{row.verdict}</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                            <div><div className="text-slate-500 mb-0.5">Tariff</div><div className="font-bold text-slate-900 dark:text-white">{row.tariff}</div></div>
                            <div><div className="text-slate-500 mb-0.5">Annual Savings</div><div className="font-bold text-emerald-600 dark:text-emerald-400">{row.annualSavings}</div></div>
                            <div><div className="text-slate-500 mb-0.5">Break-Even</div><div className="font-bold text-slate-900 dark:text-white">{row.breakEven}</div></div>
                            <div><div className="text-slate-500 mb-0.5">25-yr Total Savings</div><div className="font-bold text-emerald-600 dark:text-emerald-400">{row.post25yr}</div></div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <Reveal>
                <p className="text-xs text-slate-500 dark:text-slate-500 mb-6">
                    * UP figure reflects ₹1,08,000 combined subsidy (central + UPNEDA). All figures assume 5% annual tariff escalation, 0.5% annual panel degradation, and one inverter replacement at year 12 (₹25,000).
                </p>
            </Reveal>
        </>
    );
}
