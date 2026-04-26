import { motion } from "framer-motion";
import { Reveal, SectionHeading, InfoBox, StatCards, DarkInfoPanel } from "../ArticleAnimations";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export function InverterGuide() {
    return (
        <>
            <SectionHeading id="role" emoji="🧠" title="The Role of the Inverter" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    The inverter is the <strong className="text-slate-900 dark:text-white">brain of your solar system</strong>. While panels passively convert sunlight to DC, the inverter performs the complex task of converting DC to AC at 230V/50Hz for your appliances.
                </p>
            </Reveal>
            <InfoBox variant="warning">
                A low-quality inverter wastes 10–15% of your generation — costing ₹300–600 every month in lost savings. Inverters are also the component most likely to fail during their lifespan.
            </InfoBox>

            <SectionHeading id="string" emoji="🔗" title="String Inverters" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    The most common type in Indian homes. All panels connect in a &quot;string&quot; (series) to a single centralised inverter.
                </p>
            </Reveal>
            <StatCards items={[
                { value: "93–96%", label: "Efficiency", color: "emerald" },
                { value: "₹5–8K", label: "Per kW", color: "blue" },
                { value: "5–10 yr", label: "Warranty", color: "amber" },
            ]} />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                    { icon: "✅", text: "Lowest cost, simple install", color: "emerald" },
                    { icon: "✅", text: "Easy maintenance (single unit)", color: "emerald" },
                    { icon: "⚠️", text: "One shaded panel drags all output", color: "amber" },
                    { icon: "⚠️", text: "No battery backup capability", color: "amber" },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className={`flex items-start gap-2 border rounded-xl p-3 text-sm ${item.color === "emerald" ? "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800" : "bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800"}`}>
                        <span className="shrink-0">{item.icon}</span>
                        <span className="text-slate-700 dark:text-slate-300">{item.text}</span>
                    </motion.div>
                ))}
            </motion.div>

            <SectionHeading id="micro" emoji="🔬" title="Micro Inverters" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Small inverters attached to <strong className="text-slate-900 dark:text-white">each individual panel</strong>. Each panel operates independently — shading on one panel doesn&apos;t affect others.
                </p>
            </Reveal>
            <StatCards items={[
                { value: "95–97%", label: "Efficiency", color: "emerald" },
                { value: "₹10–15K", label: "Per Panel", color: "violet" },
                { value: "25 yr", label: "Warranty", color: "blue" },
            ]} />
            <InfoBox variant="tip">
                The 25-year warranty matches panel lifespan — no mid-life inverter replacement needed. This alone can save ₹15,000–₹30,000 over the system&apos;s lifetime.
            </InfoBox>

            <SectionHeading id="hybrid" emoji="🔋" title="Hybrid Inverters" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Combine grid-tied functionality with battery charging. Intelligently routes power three ways: <strong className="text-slate-900 dark:text-white">home → battery → grid</strong>.
                </p>
            </Reveal>
            <StatCards items={[
                { value: "93–96%", label: "Grid Efficiency", color: "emerald" },
                { value: "₹8–15K", label: "Per kW", color: "amber" },
                { value: "5–10 yr", label: "Warranty", color: "blue" },
            ]} />
            <DarkInfoPanel title="When to Choose Hybrid">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-center">
                        <div className="text-xl mb-1">⚡</div>
                        <p className="text-xs text-emerald-300">Frequent power cuts (2+ hours/day)</p>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 text-center">
                        <div className="text-xl mb-1">🔮</div>
                        <p className="text-xs text-blue-300">Planning to add battery later</p>
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-center">
                        <div className="text-xl mb-1">🏠</div>
                        <p className="text-xs text-amber-300">Want energy independence</p>
                    </div>
                </div>
            </DarkInfoPanel>

            <SectionHeading id="comparison" emoji="📊" title="Comparison Table" />
            <Reveal>
                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                                {["Feature", "String", "Micro", "Hybrid"].map((h) => (
                                    <th key={h} className="p-3 text-left border border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-slate-600 dark:text-slate-400">
                            {[
                                ["Cost (3kW)", "₹15K–24K", "₹80K–1.2L", "₹24K–45K"],
                                ["Efficiency", "93–96%", "95–97%", "93–96%"],
                                ["Warranty", "5–10 yr", "25 yr", "5–10 yr"],
                                ["Shade tolerance", "Poor", "Excellent", "Poor"],
                                ["Battery support", "No", "No", "Yes"],
                                ["Maintenance", "Low", "Very low", "Medium"],
                            ].map(([feature, string, micro, hybrid]) => (
                                <tr key={feature} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 font-medium">{feature}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800">{string}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400">{micro}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800">{hybrid}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Reveal>

            <SectionHeading id="recommendations" emoji="⭐" title="Our Recommendations" />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4 mb-8">
                {[
                    { badge: "Best Overall (String)", name: "Growatt MIN 3000TL-X", desc: "97.6% efficiency, Wi-Fi monitoring, compact design. ~₹18,000 for 3kW.", color: "emerald" },
                    { badge: "Best for Shade (Micro)", name: "Enphase IQ7+", desc: "25-year warranty, panel-level monitoring via Enlighten app. ~₹12,000/panel.", color: "blue" },
                    { badge: "Best Hybrid", name: "Goodwe GW3648D-ES", desc: "On-grid + off-grid, LiFePO4 compatible, Wi-Fi monitoring. ~₹35,000 for 3.6kW.", color: "amber" },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.02, y: -2 }} className={`border-2 rounded-2xl p-5 cursor-default ${item.color === "emerald" ? "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-400" : item.color === "blue" ? "bg-blue-50 dark:bg-blue-900/10 border-blue-400" : "bg-amber-50 dark:bg-amber-900/10 border-amber-400"}`}>
                        <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${item.color === "emerald" ? "text-emerald-600" : item.color === "blue" ? "text-blue-600" : "text-amber-600"}`}>⭐ {item.badge}</div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </motion.div>
                ))}
            </motion.div>

            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Check our <a href="/shop" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">Solar Store</a> for current prices. Use our <a href="/#calculator-section" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">ROI Calculator</a> to see how inverter efficiency affects your 25-year savings.
                </p>
            </Reveal>

            <SectionHeading id="inverter-errors" emoji="⚠️" title="Common Inverter Error Codes & Fixes" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Most Indian homeowners encounter at least one inverter error in the first year of operation. The majority of errors are self-resolvable — knowing what each code means prevents unnecessary service calls and weeks of lost generation. These are the most frequently reported error codes across Growatt, Goodwe, Havells, and Microtek inverters used in Indian installations:
                </p>
            </Reveal>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3 mb-8">
                {[
                    { code: "Grid Over-Voltage (OVP)", colour: "rose", icon: "🔴", cause: "Grid voltage exceeds 253V — common in areas with poor grid regulation.", fix: "The inverter auto-shuts for protection. Usually self-resolves within minutes. If persistent, log a complaint with your DISCOM — over-voltage damages appliances and is their responsibility to fix." },
                    { code: "Ground Fault / GFCI Trip", colour: "rose", icon: "🔴", cause: "A panel string or DC wire has come in contact with the mounting structure, creating a ground path.", fix: "Do not attempt DIY repair — call your installer. This is a safety hazard that requires a licensed electrician to isolate the faulty string." },
                    { code: "No Grid / Grid Lost (F04)", colour: "amber", icon: "🟡", cause: "Inverter cannot detect the grid — usually during a power cut or a blown main fuse.", fix: "Check your main MCB. If there is a power cut in your area, the inverter will restart automatically once grid is restored. This is normal and expected behaviour." },
                    { code: "DC Over-Voltage", colour: "amber", icon: "🟡", cause: "String voltage exceeds inverter&apos;s rated input — often from too many panels in series, or extreme cold weather.", fix: "Count the panels in each string and verify they do not exceed the MPPT voltage range listed in your inverter spec sheet. Reconfigure strings if needed." },
                    { code: "Low Insulation Resistance (ISO)", colour: "amber", icon: "🟡", cause: "Moisture has entered panel lamination or conduit — common after heavy monsoon or old wiring.", fix: "Clean and dry all conduit entry points. Re-inspect MC4 connectors for water ingress. Replace damaged connectors immediately." },
                    { code: "PV String Reversed (F01)", colour: "blue", icon: "🔵", cause: "Positive and negative DC wires have been crossed during installation — typically a wiring error.", fix: "Switch off the AC and DC isolators completely. Have your installer reverse the polarity of the affected string. This should not occur if installed correctly." },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <span>{item.icon}</span>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.code}</h4>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mb-1"><strong className="text-slate-600 dark:text-slate-400">Cause:</strong> {item.cause}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed"><strong className="text-slate-700 dark:text-slate-300">Fix:</strong> {item.fix}</p>
                    </motion.div>
                ))}
            </motion.div>
            <InfoBox variant="tip">
                Most inverters now have a companion mobile app (Growatt ShinePhone, Goodwe SEMS Portal, Havells Solar App). Enable notifications so you receive an alert the moment an error is logged — catching faults within hours rather than days can save weeks of lost generation.
            </InfoBox>

            <SectionHeading id="inverter-brands-india" emoji="🇮🇳" title="Inverter Brands Sold in India: What to Know" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    The Indian market has over 40 inverter brands. Many are imported with minimal after-sales service networks, making warranty claims difficult. Based on installer feedback from across Maharashtra, Karnataka, UP, and Delhi, here is a frank assessment of the brands you will actually encounter:
                </p>
            </Reveal>
            <Reveal>
                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                                {["Brand", "Origin", "Service Network", "Our Take"].map((h) => (
                                    <th key={h} className="p-3 text-left border border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white text-xs">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-slate-600 dark:text-slate-400 text-xs">
                            {[
                                ["Growatt", "China (Indian distributor)", "Strong — 200+ service partners", "Most recommended for residential. Excellent app, reliable warranty."],
                                ["Goodwe", "China (Indian office)", "Good — pan-India partners", "Strong hybrid range. Slightly pricier but solid support."],
                                ["Havells", "India", "Excellent — own service centres", "Premium pricing but unmatched after-sales support across tier-2 cities."],
                                ["Luminous", "India", "Excellent — 80,000+ touchpoints", "Best choice if service accessibility is your priority. Widely available."],
                                ["Microtek", "India", "Good — north India strength", "Value-for-money. Strong presence in UP, Delhi, Punjab markets."],
                                ["Enphase (micro)", "USA (Indian distributor)", "Limited", "Best technology but expensive and limited local service. Urban areas only."],
                            ].map(([brand, origin, service, take]) => (
                                <tr key={brand} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white">{brand}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800">{origin}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800">{service}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800">{take}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Reveal>
        </>
    );
}
