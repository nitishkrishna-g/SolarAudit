import { motion } from "framer-motion";
import { Reveal, SectionHeading, InfoBox, StatCards, DarkInfoPanel } from "../ArticleAnimations";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export function SolarPanelTypes() {
    return (
        <>
            <SectionHeading id="overview" emoji="🔬" title="Panel Technology Overview" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    Solar panels convert sunlight into electricity using photovoltaic cells made from silicon. The two dominant technologies in India are <strong className="text-slate-900 dark:text-white">Mono-PERC</strong> and <strong className="text-slate-900 dark:text-white">Polycrystalline</strong>. Each has distinct advantages depending on your roof size, budget, and local weather.
                </p>
            </Reveal>
            <Reveal delay={0.1}>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Panels come with <strong className="text-slate-900 dark:text-white">25-year warranties</strong> and will be on your roof for decades. Choosing the right type upfront saves you money and maximises generation over the system&apos;s lifetime.
                </p>
            </Reveal>

            <SectionHeading id="mono-perc" emoji="⬛" title="Mono-PERC: The Premium Choice" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Made from a single crystal of silicon with a rear passivation layer that reflects unabsorbed light for a second pass — increasing efficiency by 1–2%.
                </p>
            </Reveal>
            <StatCards items={[
                { value: "20–22%", label: "Cell Efficiency", color: "emerald" },
                { value: "60–65 ft²", label: "Per kW", color: "blue" },
                { value: "₹28–35", label: "Per Watt (Wp)", color: "amber" },
            ]} />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3 mb-8">
                {[
                    { icon: "🌡️", text: "Temperature coefficient: -0.35%/°C — loses less efficiency in extreme Indian summer heat." },
                    { icon: "☁️", text: "Superior low-light performance — generates 10–15% more than poly on cloudy days." },
                    { icon: "📉", text: "Degradation: 0.5%/year — still produces ~87.5% output after 25 years." },
                    { icon: "🎨", text: "Uniform black colour — considered more aesthetically pleasing on rooftops." },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                        <span className="text-xl shrink-0">{item.icon}</span>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
                    </motion.div>
                ))}
            </motion.div>

            <SectionHeading id="polycrystalline" emoji="🔷" title="Polycrystalline: The Budget Option" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Made by melting multiple silicon fragments together. The resulting crystal structure gives the panel its characteristic blue, speckled appearance.
                </p>
            </Reveal>
            <StatCards items={[
                { value: "15–17%", label: "Cell Efficiency", color: "blue" },
                { value: "75–85 ft²", label: "Per kW", color: "violet" },
                { value: "₹20–25", label: "Per Watt (Wp)", color: "emerald" },
            ]} />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Temperature coefficient of -0.40%/°C (worse in heat), 0.7%/year degradation (~83% at year 25). Needs 20–30% more roof area than Mono-PERC for same capacity. <strong className="text-slate-900 dark:text-white">Main advantage:</strong> significantly cheaper upfront.
                </p>
            </Reveal>

            <SectionHeading id="comparison" emoji="⚖️" title="Head-to-Head Comparison" />
            <Reveal>
                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                                {["Parameter", "Mono-PERC", "Polycrystalline"].map((h) => (
                                    <th key={h} className="p-3 text-left border border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-slate-600 dark:text-slate-400">
                            {[
                                ["Efficiency", "20–22%", "15–17%"],
                                ["Cost/Wp", "₹28–35", "₹20–25"],
                                ["Space/kW", "60–65 sq ft", "75–85 sq ft"],
                                ["Heat tolerance", "Better (-0.35%/°C)", "Worse (-0.40%/°C)"],
                                ["25-year output", "~87.5%", "~83%"],
                                ["Best for", "Small roofs, hot climates", "Large roofs, tight budgets"],
                            ].map(([param, mono, poly]) => (
                                <tr key={param} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 font-medium">{param}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400">{mono}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800">{poly}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Reveal>

            <SectionHeading id="indian-weather" emoji="🌤️" title="Performance in Indian Weather" />
            <DarkInfoPanel title="Season-by-Season Breakdown">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">☀️</div>
                        <div className="font-bold text-amber-300 text-sm mb-1">Summer</div>
                        <p className="text-xs text-slate-400">Mono-PERC loses 10–12% vs Poly 14–16%. ≈ ₹150–300/month difference on 3kW.</p>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">🌧️</div>
                        <div className="font-bold text-blue-300 text-sm mb-1">Monsoon</div>
                        <p className="text-xs text-slate-400">Mono-PERC generates 10–15% more due to superior low-light performance.</p>
                    </div>
                    <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">❄️</div>
                        <div className="font-bold text-teal-300 text-sm mb-1">Winter</div>
                        <p className="text-xs text-slate-400">Both perform well. Gap narrows. Shorter daylight reduces total generation equally.</p>
                    </div>
                </div>
            </DarkInfoPanel>
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    <strong className="text-slate-900 dark:text-white">Dust:</strong> Both types are equally susceptible. Regular cleaning every 2–3 weeks is essential regardless of panel type. See our <a href="/guides/solar-panel-maintenance" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">maintenance guide</a>.
                </p>
            </Reveal>

            <SectionHeading id="which-to-choose" emoji="🎯" title="Which Should You Choose?" />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <motion.div variants={fadeUp} whileHover={{ scale: 1.02, y: -4 }} className="bg-emerald-50 dark:bg-emerald-900/10 border-2 border-emerald-400 rounded-2xl p-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">Choose Mono-PERC If</div>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <li>✓ Roof area under 400 sq ft</li>
                        <li>✓ Hot state (MH, GJ, RJ, TN)</li>
                        <li>✓ Want max generation/sq ft</li>
                    </ul>
                </motion.div>
                <motion.div variants={fadeUp} whileHover={{ scale: 1.02, y: -4 }} className="bg-blue-50 dark:bg-blue-900/10 border-2 border-blue-400 rounded-2xl p-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Choose Polycrystalline If</div>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <li>✓ Ample roof space (500+ sq ft)</li>
                        <li>✓ Budget is top priority</li>
                        <li>✓ Moderate climate region</li>
                    </ul>
                </motion.div>
            </motion.div>

            <InfoBox variant="tip">
                <strong>Our 2026 verdict:</strong> For most Indian homeowners, Mono-PERC is the better long-term investment. The price gap has narrowed to just 15–20% while efficiency advantages remain substantial. Always buy BIS-certified Tier-1 panels.
            </InfoBox>

            <SectionHeading id="brand-comparison" emoji="🏭" title="Indian Brand Comparison (Tier-1, 2026)" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Buying from a reputable Indian manufacturer ensures warranty support, domestically available replacement panels, and BIS certification compliance required for PM Surya Ghar subsidy eligibility. Here is how the top Indian Tier-1 manufacturers compare on the key specifications that matter for residential installations:
                </p>
            </Reveal>
            <Reveal>
                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                                {["Brand", "Technology", "Efficiency", "Warranty", "Price/Wp", "Best For"].map((h) => (
                                    <th key={h} className="p-3 text-left border border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white text-xs">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-slate-600 dark:text-slate-400 text-xs">
                            {[
                                ["WAAREE", "Mono-PERC / TOPCon", "20.5–22.1%", "25 yr linear", "₹26–32", "Best overall quality"],
                                ["Adani Solar", "Mono-PERC Bifacial", "20.2–21.8%", "25 yr linear", "₹27–33", "High-sun states (GJ, RJ)"],
                                ["Tata Power Solar", "Mono-PERC", "19.8–21.0%", "25 yr linear", "₹28–34", "Brand-conscious buyers"],
                                ["Vikram Solar", "Mono-PERC / Bifacial", "20.0–21.5%", "27 yr linear", "₹29–35", "Longest warranty"],
                                ["Servotech", "Polycrystalline", "15.5–17.0%", "25 yr linear", "₹18–23", "Budget-first buyers"],
                                ["Goldi Solar", "Mono-PERC", "19.5–21.0%", "25 yr linear", "₹25–30", "Mid-range value"],
                            ].map(([brand, tech, eff, warranty, price, best]) => (
                                <tr key={brand} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white">{brand}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800">{tech}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-medium">{eff}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800">{warranty}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 font-medium">{price}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400">{best}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Reveal>
            <InfoBox variant="warning">
                Always verify the panel is on MNRE&apos;s Approved List of Models and Manufacturers (ALMM) before purchasing. Non-ALMM panels are disqualified from PM Surya Ghar subsidy regardless of quality. The ALMM list is updated quarterly at mnre.gov.in.
            </InfoBox>

            <SectionHeading id="climate-zones" emoji="🌡️" title="Performance Across Indian Climate Zones" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    India&apos;s diverse climate zones produce significantly different panel performance outcomes. A panel that performs brilliantly in Rajasthan may underperform in Kerala. Understanding your local climate helps you choose correctly and set realistic generation expectations.
                </p>
            </Reveal>
            <DarkInfoPanel title="Zone-by-Zone Generation Estimates (3kW Mono-PERC System)">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        { zone: "Hot & Dry (RJ, GJ)", cities: "Jaipur, Ahmedabad, Jodhpur", sun: "5.5–6.0 hrs/day", gen: "14–16 units/day", note: "Maximum generation. High heat reduces efficiency 3–5%, offset by irradiance." },
                        { zone: "Composite (DL, UP, HR)", cities: "Delhi, Lucknow, Gurugram", sun: "4.6–5.0 hrs/day", gen: "11–13 units/day", note: "Good generation. Dust from pollution a major factor — clean every 10–14 days." },
                        { zone: "Hot & Humid (MH, AP)", cities: "Mumbai, Pune, Hyderabad", sun: "4.8–5.4 hrs/day", gen: "12–15 units/day", note: "High humidity reduces output marginally. Coastal salt deposits require regular cleaning." },
                        { zone: "Tropical (TN, KL)", cities: "Chennai, Coimbatore, Kochi", sun: "4.2–5.5 hrs/day", gen: "10–14 units/day", note: "Heavy monsoon reduces June–Sept generation. Mono-PERC&apos;s diffuse light advantage is key here." },
                        { zone: "Temperate (KA interior)", cities: "Bengaluru, Mysuru, Hubballi", sun: "5.0–5.5 hrs/day", gen: "13–15 units/day", note: "Moderate temperatures. Consistent generation year-round with minimal heat losses." },
                        { zone: "Cold (HP, UK)", cities: "Shimla, Dehradun, Mussoorie", sun: "4.0–5.0 hrs/day", gen: "10–13 units/day", note: "Cold temperatures improve efficiency (+0.3%/°C). Snow cover = zero generation days." },
                    ].map((z, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3">
                            <div className="font-bold text-emerald-300 text-sm mb-1">{z.zone}</div>
                            <div className="text-xs text-slate-400 mb-2">{z.cities}</div>
                            <div className="flex gap-4 mb-2">
                                <div><span className="text-xs text-slate-500">Sun: </span><span className="text-xs text-white font-medium">{z.sun}</span></div>
                                <div><span className="text-xs text-slate-500">Output: </span><span className="text-xs text-emerald-400 font-bold">{z.gen}</span></div>
                            </div>
                            <p className="text-xs text-slate-400">{z.note}</p>
                        </div>
                    ))}
                </div>
            </DarkInfoPanel>
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-6">
                    Use our <a href="/#calculator-section" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">state-specific ROI calculator</a> which factors your exact city&apos;s sun-hour data from IMD records to give a precise generation projection for your chosen system capacity.
                </p>
            </Reveal>
        </>
    );
}
