import { motion } from "framer-motion";
import { Reveal, SectionHeading, InfoBox, StatCards, DarkInfoPanel } from "../ArticleAnimations";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export function PmSuryaGhar() {
    return (
        <>
            <SectionHeading id="what-is" emoji="🏛️" title="What is PM Surya Ghar?" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    PM Surya Ghar Muft Bijli Yojana is the Indian government&apos;s <strong className="text-slate-900 dark:text-white">flagship rooftop solar subsidy scheme</strong> launched under MNRE. The programme aims to install rooftop solar on <strong className="text-slate-900 dark:text-white">one crore (10 million)</strong> residential households by 2027, with a budget of ₹75,021 crore.
                </p>
            </Reveal>
            <Reveal delay={0.1}>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    The subsidy is disbursed <strong className="text-slate-900 dark:text-white">directly to your bank account</strong> through DBT after installation. Unlike previous schemes that routed subsidies through installers (leading to markups), PM Surya Ghar ensures 100% transparency.
                </p>
            </Reveal>

            <InfoBox variant="info">
                <strong>Key Change in 2026:</strong> The subsidy is now available for systems up to 10kW (previously capped at 3kW for max subsidy). However, the maximum subsidy amount remains ₹78,000 regardless of system size.
            </InfoBox>

            <SectionHeading id="eligibility" emoji="✅" title="Eligibility Criteria" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    To qualify for the PM Surya Ghar subsidy in 2026, you must meet <strong className="text-slate-900 dark:text-white">all</strong> of these criteria:
                </p>
            </Reveal>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3 mb-8">
                {[
                    { icon: "🏠", text: "Residential connection — Commercial, industrial, and agricultural connections are not eligible." },
                    { icon: "📝", text: "Property ownership — The electricity bill must be in the applicant's name." },
                    { icon: "☀️", text: "No existing solar — Homes with existing grid-connected systems cannot apply." },
                    { icon: "📐", text: "Minimum 100 sq ft shadow-free roof area for a 1kW system." },
                    { icon: "⚡", text: "System capacity cannot exceed your sanctioned electrical load." },
                    { icon: "🆔", text: "Aadhaar must be linked to registered mobile number for OTP verification." },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                        <span className="text-xl shrink-0">{item.icon}</span>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
                    </motion.div>
                ))}
            </motion.div>

            <InfoBox variant="tip">
                Group housing societies and multi-storey apartments are also eligible if they have terrace rights or a society resolution authorising the installation.
            </InfoBox>

            <SectionHeading id="subsidy-amounts" emoji="💰" title="Subsidy Amounts (2026)" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">The PM Surya Ghar subsidy follows a tiered structure:</p>
            </Reveal>
            <StatCards items={[
                { value: "₹30,000", label: "1 kW System", color: "blue" },
                { value: "₹60,000", label: "2 kW System", color: "emerald" },
                { value: "₹78,000", label: "3 kW+ (Max)", color: "amber" },
            ]} />

            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    Some states offer <strong className="text-slate-900 dark:text-white">additional state-level subsidies</strong>. UP provides ₹15,000/kW (max ₹30,000) through UPNEDA, and Delhi offers a GBI of ₹3/unit for 5 years. Check your state&apos;s renewable energy agency for local incentives.
                </p>
            </Reveal>

            <SectionHeading id="how-to-apply" emoji="📋" title="How to Apply: Step-by-Step" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Follow these steps carefully to apply:</p>
            </Reveal>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4 mb-8">
                {[
                    { step: "01", title: "Register on the Portal", desc: "Visit pmsuryaghar.gov.in and register using your electricity consumer number. Verify via Aadhaar OTP." },
                    { step: "02", title: "Select State & DISCOM", desc: "Choose your state, district, and electricity distribution company. The system auto-fetches connection details." },
                    { step: "03", title: "Choose System Capacity", desc: "Based on your monthly bill and roof space, select 1kW–10kW. The portal shows your applicable subsidy." },
                    { step: "04", title: "Select Empaneled Vendor", desc: "Choose from the MNRE-empaneled vendors list. Never choose a non-empaneled vendor — you'll lose the subsidy." },
                    { step: "05", title: "Get Feasibility Approval", desc: "Your DISCOM conducts a technical check. This takes 7–15 working days." },
                    { step: "06", title: "Installation", desc: "The vendor installs the system. Residential systems typically take 1–3 days." },
                    { step: "07", title: "Net Meter Application", desc: "Apply for a bi-directional net meter through your DISCOM. Installed within 15–30 days." },
                    { step: "08", title: "Commissioning", desc: "DISCOM inspects and commissions the system. You receive a commissioning certificate." },
                    { step: "09", title: "Claim Subsidy", desc: "Upload commissioning certificate + bank details on the portal. Subsidy credited via DBT within 30 working days." },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex gap-4 items-start">
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-sm font-bold text-emerald-700 dark:text-emerald-400">
                            {item.step}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{item.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <SectionHeading id="documents" emoji="📁" title="Documents Required" />
            <DarkInfoPanel title="Keep These Ready Before Applying">
                <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Latest electricity bill (not older than 3 months)</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Aadhaar card (linked to active mobile number)</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Bank passbook or cancelled cheque (for DBT)</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Passport-size photograph</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Roof photograph showing shadow-free area</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Property ownership proof (sale deed, tax receipt, or society NOC)</li>
                </ul>
            </DarkInfoPanel>

            <SectionHeading id="timeline" emoji="⏱️" title="Timeline & Disbursement" />
            <Reveal>
                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                                <th className="p-3 text-left border border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white">Stage</th>
                                <th className="p-3 text-left border border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white">Duration</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600 dark:text-slate-400">
                            {[
                                ["Registration + vendor selection", "1–2 days"],
                                ["DISCOM feasibility approval", "7–15 working days"],
                                ["Installation", "1–3 days"],
                                ["Net meter installation", "15–30 working days"],
                                ["Commissioning & inspection", "5–10 working days"],
                                ["Subsidy disbursement (DBT)", "30 working days"],
                            ].map(([stage, dur]) => (
                                <tr key={stage} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 font-medium">{stage}</td>
                                    <td className="p-3 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-bold">{dur}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Reveal>
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    <strong className="text-slate-900 dark:text-white">Total estimated time:</strong> 2–3 months from application to subsidy receipt. Net metering approval is typically the longest step due to DISCOM backlogs in high-demand states.
                </p>
            </Reveal>

            <SectionHeading id="mistakes" emoji="🚫" title="Common Mistakes to Avoid" />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3 mb-8">
                {[
                    { title: "Non-empaneled vendor", desc: "#1 reason for rejection. Always verify your installer is on the MNRE empaneled list." },
                    { title: "Mismatched bank details", desc: "Account name must exactly match the electricity connection name. Even minor spelling differences delay DBT." },
                    { title: "Installing before approval", desc: "Never start before DISCOM feasibility clearance. Premature installations lose net metering eligibility." },
                    { title: "Oversizing the system", desc: "Capacity beyond sanctioned load = DISCOM rejects net metering application." },
                    { title: "Forgetting commissioning upload", desc: "Many homeowners install but forget to upload the certificate on the portal. No upload = no subsidy." },
                    { title: "Paying 100% upfront", desc: "Reputable vendors ask 30–50% advance. Full upfront payment is a red flag." },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 rounded-xl p-4 flex gap-3">
                        <span className="text-rose-500 text-lg shrink-0">✗</span>
                        <div>
                            <h4 className="font-bold text-sm text-rose-800 dark:text-rose-300 mb-1">{item.title}</h4>
                            <p className="text-sm text-rose-700 dark:text-rose-400 leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    For a personalised estimate of your savings after subsidy, use our <a href="/#calculator-section" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">free Solar ROI Calculator</a> which uses real DISCOM tariff data and the latest 2026 subsidy rates.
                </p>
            </Reveal>
        </>
    );
}
