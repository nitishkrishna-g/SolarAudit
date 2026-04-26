import { motion } from "framer-motion";
import { Reveal, SectionHeading, InfoBox, DarkInfoPanel } from "../ArticleAnimations";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export function NetMetering() {
    return (
        <>
            <SectionHeading id="what-is-net-metering" emoji="🔄" title="What is Net Metering?" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    Net metering lets you <strong className="text-slate-900 dark:text-white">export surplus solar electricity to the grid</strong> and receive credit on your bill. A bi-directional meter tracks imports and exports — you only pay for the <strong className="text-slate-900 dark:text-white">net difference</strong>.
                </p>
            </Reveal>
            <InfoBox variant="info">
                Without net metering, you&apos;d need expensive battery storage for daytime surplus. With it, the grid acts as a free, infinite battery — making rooftop solar financially viable.
            </InfoBox>

            <SectionHeading id="how-it-works" emoji="⚡" title="How Net Metering Works" />
            <DarkInfoPanel title="The Daily Energy Flow">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">☀️ Daytime</div>
                        <p className="text-sm text-amber-300">You generate more than you use → <strong>Export to grid</strong></p>
                        <div className="mt-2 text-xs text-amber-400">Meter runs backwards ↩</div>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">🌙 Nighttime</div>
                        <p className="text-sm text-blue-300">You use grid power → <strong>Import from grid</strong></p>
                        <div className="mt-2 text-xs text-blue-400">Meter runs forward ↪</div>
                    </div>
                </div>
                <p className="text-sm text-slate-400">At month-end, you only pay for the net difference. Most 3kW+ systems result in a ₹0 bill.</p>
            </DarkInfoPanel>

            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    <strong className="text-slate-900 dark:text-white">The bi-directional meter</strong> has two registers — one for import, one for export. Most DISCOMs replace your existing meter at their cost (some charge ₹2,000–₹5,000).
                </p>
            </Reveal>

            <SectionHeading id="state-policies" emoji="🗺️" title="State-Wise Policies" />
            <Reveal>
                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                                {["State", "DISCOM", "Surplus Treatment"].map((h) => (
                                    <th key={h} className="p-3 text-left border border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-slate-600 dark:text-slate-400">
                            {[
                                ["Maharashtra", "MSEDCL", "Carry forward 12 months, then lapse"],
                                ["Karnataka", "BESCOM", "Carry forward 12 months"],
                                ["Delhi", "BSES/Tata", "Compensated at APPC rate (~₹3/unit)"],
                                ["Gujarat", "GUVNL", "Buyback at ₹2.25/unit"],
                                ["Tamil Nadu", "TANGEDCO", "Carry forward, settle annually"],
                                ["Uttar Pradesh", "UPPCL", "Carry forward 12 months"],
                            ].map(([state, discom, surplus]) => (
                                <tr key={state} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 font-medium">{state}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800">{discom}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800">{surplus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Reveal>
            <InfoBox variant="warning">
                <strong>Over-sizing risk:</strong> In states like Gujarat, surplus is bought at ₹2.25/unit (vs ₹5.50 retail tariff). Over-sizing your system beyond your consumption may not be financially optimal.
            </InfoBox>

            <SectionHeading id="application" emoji="📝" title="Application Process" />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4 mb-8">
                {[
                    { step: "01", title: "Apply via PM Surya Ghar", desc: "Initiate net metering request during your solar subsidy application." },
                    { step: "02", title: "DISCOM Feasibility Check", desc: "Verifies local transformer and grid can handle additional generation. 7–15 working days." },
                    { step: "03", title: "Install Solar System", desc: "Empaneled vendor installs the system after feasibility approval." },
                    { step: "04", title: "Submit Commissioning Request", desc: "Upload installation photos, panel serial numbers, and inverter details to DISCOM." },
                    { step: "05", title: "DISCOM Inspection", desc: "Engineer inspects for safety compliance, proper earthing, and correct wiring." },
                    { step: "06", title: "Meter Replacement", desc: "DISCOM replaces your meter with a bi-directional meter. This is the final step." },
                    { step: "07", title: "Net Metering Goes Live", desc: "Once the new meter is activated, net metering begins automatically." },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex gap-4 items-start">
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-sm font-bold text-blue-700 dark:text-blue-400">
                            {item.step}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{item.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <SectionHeading id="surplus" emoji="💳" title="Surplus Credit Rules" />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3 mb-8">
                {[
                    { icon: "🔄", text: "Monthly rollover — Unused credits carry forward. October surplus offsets November imports." },
                    { icon: "📅", text: "Annual settlement — March 31 reset. Remaining credits paid at APPC rate (₹2–3/unit) or zeroed." },
                    { icon: "⏳", text: "No banking beyond 12 months — Credits don't accumulate indefinitely." },
                    { icon: "💵", text: "Fixed charges still apply — Even with ₹0 consumption, expect ₹200–500/month in fixed charges and duties." },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                        <span className="text-xl shrink-0">{item.icon}</span>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
                    </motion.div>
                ))}
            </motion.div>

            <SectionHeading id="common-issues" emoji="🔧" title="Common Issues & Solutions" />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3 mb-8">
                {[
                    { title: "Delayed meter replacement", desc: "File a grievance on the PM Surya Ghar portal and escalate to your state SERC if delayed beyond 30 days." },
                    { title: "Incorrect billing", desc: "Verify your first net-metered bill carefully. Raise an immediate dispute if import/export readings seem wrong." },
                    { title: "Transformer capacity issues", desc: "If feasibility is rejected, appeal to the DISCOM for a transformer upgrade." },
                    { title: "System underperformance", desc: "Check for panel soiling, inverter issues, or unexpected shading. Use our calculator to verify expected generation." },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4">
                        <h4 className="font-bold text-sm text-amber-800 dark:text-amber-300 mb-1">{item.title}</h4>
                        <p className="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </motion.div>

            <SectionHeading id="reading-your-bill" emoji="🧾" title="How to Read Your First Net Metering Bill" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    Your first bill after net metering activation will look very different from your previous electricity bills. Many homeowners panic when they see unfamiliar line items — understanding each field prevents costly disputes and helps you verify that the DISCOM has applied your credits correctly.
                </p>
            </Reveal>
            <DarkInfoPanel title="Sample Net Metering Bill Breakdown (Maharashtra, MSEDCL)">
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-2 font-bold text-white">
                        <span>Bill Component</span><span>Reading / Amount</span>
                    </div>
                    {[
                        ["Import Register (units drawn from grid)", "220 units", "text-white"],
                        ["Export Register (units sent to grid)", "−180 units", "text-emerald-400"],
                        ["Net Consumption (import − export)", "40 units", "text-white"],
                        ["Energy Charge (40 × ₹11.00)", "₹440", "text-white"],
                        ["Fixed / Demand Charge", "₹250", "text-slate-400"],
                        ["Electricity Duty (@ 16%)", "₹111", "text-slate-400"],
                        ["Previous month credit carry-forward", "−₹0", "text-slate-400"],
                        ["Total Bill Payable", "₹801", "text-emerald-300 font-bold text-base"],
                    ].map(([label, value, color]) => (
                        <div key={label} className="flex justify-between py-1">
                            <span className="text-slate-300 text-xs">{label}</span>
                            <span className={`text-xs font-medium ${color}`}>{value}</span>
                        </div>
                    ))}
                    <div className="pt-2 text-xs text-slate-400 border-t border-white/10">
                        Without solar: this household&apos;s bill would have been approx ₹2,690/month. Net saving: ₹1,889/month.
                    </div>
                </div>
            </DarkInfoPanel>
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 mt-6">
                    <strong className="text-slate-900 dark:text-white">Key things to verify on your first net-metered bill:</strong> Confirm that the export reading has actually been recorded (some older meters need a manual activation by the DISCOM engineer). Check that the surplus is being carried forward at the correct unit rate, not converted to rupees prematurely. If your DISCOM charges a separate &quot;renewable energy surcharge&quot; or &quot;solar banking fee,&quot; this is state-specific and should be declared in your state&apos;s tariff order — file a complaint if any undisclosed charge appears.
                </p>
            </Reveal>

            <SectionHeading id="gross-vs-net" emoji="⚖️" title="Gross Metering vs Net Metering: Which is Better?" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    While net metering is the dominant framework, some states and certain consumer categories are offered <strong className="text-slate-900 dark:text-white">gross metering</strong> — where all solar power generated is sold to the grid at a feed-in tariff (FiT), and you buy all your household electricity separately at the retail rate. Here is when each makes sense for an Indian residential household:
                </p>
            </Reveal>
            <Reveal>
                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                                {["Factor", "Net Metering", "Gross Metering"].map((h) => (
                                    <th key={h} className="p-3 text-left border border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-slate-600 dark:text-slate-400">
                            {[
                                ["Solar revenue per unit", "₹7–11 (retail tariff offset)", "₹2–4 (FiT rate)"],
                                ["Daytime self-consumption", "Directly offsets retail rate", "Sold first, then bought back"],
                                ["High-consumption households", "Excellent — offsets high slabs", "Poor — pays retail for all imports"],
                                ["Low-consumption households", "Good — credits carry forward", "May be better if FiT > self-use offset"],
                                ["Bill complexity", "Moderate (2 registers)", "High (2 separate meters)"],
                                ["Who benefits most", "Households consuming >400 units/month", "Households consuming <150 units/month"],
                            ].map(([factor, net, gross]) => (
                                <tr key={factor} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 font-medium">{factor}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400">{net}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800">{gross}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Reveal>
            <InfoBox variant="info">
                For the overwhelming majority of Indian households — those consuming 200–600 units per month — net metering is the financially superior choice. Gross metering only makes sense in niche scenarios where the household uses very little electricity during daylight hours (e.g., a vacation home or a property under renovation).
            </InfoBox>
        </>
    );
}
