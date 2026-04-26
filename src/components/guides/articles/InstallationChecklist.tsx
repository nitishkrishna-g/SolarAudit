import { motion } from "framer-motion";
import { Reveal, SectionHeading, InfoBox, DarkInfoPanel } from "../ArticleAnimations";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export function InstallationChecklist() {
    return (
        <>
            <SectionHeading id="before-you-begin" emoji="📋" title="Before You Begin: The 3 Questions to Answer" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    Most homeowners jump straight to calling installers before they have answered the three questions that determine everything else about their solar system. Getting the answers wrong at this stage means oversizing, undersizing, or choosing the wrong technology — each of which costs ₹30,000–₹80,000 in avoidable expenses.
                </p>
            </Reveal>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4 mb-8">
                {[
                    {
                        icon: "📊",
                        q: "Question 1: What is my actual annual consumption?",
                        a: "Pull your last 12 months of electricity bills and add up the total units consumed. Divide by 12 for your monthly average. This is your baseline. Do not size your solar system based on your highest single bill — that inflates costs without proportional benefit. The goal is to offset 80–100% of your average monthly consumption, not your peak month.",
                    },
                    {
                        icon: "🏠",
                        q: "Question 2: How much shadow-free roof area do I actually have?",
                        a: "Measure only the area that receives unobstructed sunlight between 9 AM and 4 PM — the peak solar window. Exclude area under water tanks, near parapet walls that cast shadows in winter, and within 1.5 metres of the edge (structural and DISCOM regulation). Each kW of Mono-PERC requires 60–65 square feet of this true shadow-free area.",
                    },
                    {
                        icon: "⚡",
                        q: "Question 3: How stable is my local grid supply?",
                        a: "If your area experiences power cuts exceeding 2 hours per day on average, factor battery storage into your system design from day one. Adding a battery inverter retrofit later costs 30–40% more than choosing a hybrid inverter from the start. Flat-dwellers in Tier-1 cities can typically ignore this; homeowners in rural UP, parts of Rajasthan, and Bihar should not.",
                    },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <div className="flex items-start gap-3 mb-2">
                            <span className="text-2xl">{item.icon}</span>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-snug">{item.q}</h4>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-9">{item.a}</p>
                    </motion.div>
                ))}
            </motion.div>

            <SectionHeading id="site-survey-checklist" emoji="🔍" title="Site Survey Checklist (10 Items)" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    A professional site survey should cover every item on this list. If the installer you are evaluating does not assess all of these points, their system design will be based on incomplete information — and your payback period will be longer than projected. Use this list to evaluate each installer you speak to.
                </p>
            </Reveal>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3 mb-8">
                {[
                    { num: "01", item: "Roof structural load assessment", detail: "Solar panels weigh 10–15 kg per panel. The mounting structure adds another 5–8 kg per panel. The surveyor should verify the roof slab can support this distributed load — especially for older buildings. Request a written load certificate for buildings over 15 years old." },
                    { num: "02", item: "Shadow analysis at winter solstice sun angle", detail: "Winter sun angle in India is 20–40° lower than summer. A parapet wall that causes no shadow in June may shadow your panels for 2–3 hours daily in December. Insist that the shadow analysis be done at the December sun angle, not the current date." },
                    { num: "03", item: "Roof waterproofing condition assessment", detail: "Every bolt that penetrates the roof is a potential leak point. The surveyor should assess the existing waterproofing membrane condition. If it is cracked or more than 8 years old, it should be re-done before installation — not after." },
                    { num: "04", item: "Distance from roof to main distribution board", detail: "This determines the length of AC and DC cabling required. Every extra 10 metres of cable adds resistance and line losses. Longer cable runs also mean higher installation costs. Ideally, the inverter should be within 15 metres of the main board." },
                    { num: "05", item: "Existing electrical load and sanctioned capacity", detail: "The solar system capacity cannot exceed your sanctioned electrical load from the DISCOM. Check your electricity bill for your sanctioned kW and inform the surveyor. Oversizing beyond this limit means the DISCOM will reject your net metering application." },
                    { num: "06", item: "Roof orientation and tilt angle", detail: "True south is optimal in India. Deviation of up to 20° east or west reduces output by only 3–5%. Deviation beyond 30° reduces output by 10–15%. The surveyor should use a compass or mobile app, not estimate by eye." },
                    { num: "07", item: "Local DISCOM transformer capacity", detail: "If your street's transformer is already near capacity, the DISCOM may reject the feasibility application citing grid capacity constraints. A knowledgeable installer will check this before submission, saving you weeks of waiting for a rejection." },
                    { num: "08", item: "Earthing connection quality", detail: "Solar systems require a dedicated earthing pit with resistance under 5 ohms. The surveyor should test your existing earthing or plan a new pit. Poor earthing is the second most common cause of inverter ground-fault errors." },
                    { num: "09", item: "Panel cleaning access route", detail: "Panels that cannot be safely accessed for cleaning will not be cleaned — and uncleaned panels lose 15–25% of their output. Confirm that there is a safe, stable pathway to reach all panels for biweekly cleaning without specialised equipment." },
                    { num: "10", item: "Local weather-specific design factors", detail: "Coastal areas need marine-grade aluminium frames and IP67 junction boxes. High-wind areas need a low-profile mounting design with extra anchor points. Hail-prone regions (parts of HP, UK, Punjab) should use IEC 61215-certified hail-resistant glass." },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex gap-4 items-start">
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-sm font-bold text-emerald-700 dark:text-emerald-400">
                            {item.num}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{item.item}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.detail}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <SectionHeading id="documents-checklist" emoji="📁" title="Documents to Prepare Before Applying" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Having all documents ready before initiating the PM Surya Ghar application prevents the most common cause of application delays — which is applicants discovering they are missing a document after the DISCOM feasibility check has already been initiated. Preparing this set in advance typically saves 10–20 days in the total timeline.
                </p>
            </Reveal>
            <DarkInfoPanel title="Complete Document Checklist">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        { doc: "Latest electricity bill", note: "Must be within 3 months. Must show consumer number prominently." },
                        { doc: "Aadhaar card", note: "Must be linked to an active mobile number for OTP verification." },
                        { doc: "Bank passbook / cancelled cheque", note: "Account name must exactly match electricity bill name. Even one character difference causes DBT failure." },
                        { doc: "Passport-size photograph", note: "Recent (within 6 months). Digital format JPG/PNG accepted on the portal." },
                        { doc: "Roof photograph", note: "Clear photo showing the proposed installation area from above. All four corners must be visible." },
                        { doc: "Property ownership proof", note: "Sale deed, property tax receipt, or registered society allotment letter. Must be in applicant's name." },
                        { doc: "Aadhaar-linked mobile OTP access", note: "Ensure your Aadhaar-linked mobile number is active and with you during the application session." },
                        { doc: "System capacity decision", note: "Know in advance the kW capacity you are applying for. Changing this after application restarts the feasibility process." },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 bg-white/5 border border-white/10 rounded-xl p-3">
                            <span className="text-emerald-400 shrink-0 mt-0.5 font-bold text-sm">✓</span>
                            <div>
                                <div className="text-white text-sm font-medium">{item.doc}</div>
                                <div className="text-xs text-slate-400 mt-0.5">{item.note}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </DarkInfoPanel>

            <SectionHeading id="vendor-vetting" emoji="🔎" title="How to Vet an Installer: The 7-Point Test" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    The single most important decision in your entire solar journey is which installer you choose. A bad installer can cost you the subsidy, damage your roof, and deliver a system that underperforms by 20–30% for its entire 25-year life. There are over 28,000 MNRE-empanelled installers in India — here is how to identify the good ones.
                </p>
            </Reveal>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3 mb-8">
                {[
                    { pass: true, test: "MNRE Empanelment Verified", action: "Ask for their empanelment registration number and verify it on pmsuryaghar.gov.in under the 'Vendor List' section. Non-empanelled installers cannot register your subsidy application." },
                    { pass: true, test: "References from 3+ Recent Installations", action: "Request contact details for 3 customers whose systems were commissioned in the last 12 months in your city. Call at least 2 of them and ask specifically about net metering completion time and whether the quoted savings are being achieved." },
                    { pass: true, test: "Written Quotation with Component Specifications", action: "Any legitimate installer will provide a written quotation listing the exact panel model, inverter brand, mounting structure type, cable specifications, and warranty terms. A verbal quote or WhatsApp screenshot is not acceptable." },
                    { pass: true, test: "Separate Quote for Net Metering Liaison", action: "Confirm whether net metering application assistance is included or charged separately. Some installers quote low upfront and charge ₹5,000–15,000 extra for DISCOM liaison work. Get this in writing." },
                    { pass: false, test: "Installer Asks for 100% Upfront Payment", action: "Reputable installers request 30–50% advance. 100% advance before installation begins is a major red flag — it removes all financial incentive for them to complete the job correctly or on time." },
                    { pass: false, test: "Promised Subsidy Routed Through Installer", action: "Under PM Surya Ghar, the subsidy is sent directly to your bank account via DBT — not through the installer. Any installer who says 'I'll handle the subsidy and deduct it from your invoice' is operating incorrectly and may be inflating costs." },
                    { pass: false, test: "No Site Visit Before Quoting", action: "A legitimate installer cannot give you an accurate quote without visiting your roof. Any installer who quotes via phone or WhatsApp photos alone is guessing — and that guess will benefit them, not you." },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className={`border rounded-xl p-4 flex gap-3 ${item.pass ? "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800/50" : "bg-rose-50 dark:bg-rose-900/10 border-rose-200 dark:border-rose-800/50"}`}>
                        <span className={`text-lg shrink-0 ${item.pass ? "text-emerald-500" : "text-rose-500"}`}>{item.pass ? "✓" : "✗"}</span>
                        <div>
                            <h4 className={`font-bold text-sm mb-1 ${item.pass ? "text-emerald-800 dark:text-emerald-300" : "text-rose-800 dark:text-rose-300"}`}>{item.test}</h4>
                            <p className={`text-sm leading-relaxed ${item.pass ? "text-emerald-700 dark:text-emerald-400" : "text-rose-700 dark:text-rose-400"}`}>{item.action}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <SectionHeading id="post-installation" emoji="✅" title="Post-Installation Checklist (Day 1)" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    On the day your installation is completed — before the installer leaves your premises — walk through this checklist with the team leader. Identifying issues at this stage costs nothing to fix. Discovering them a month later can mean expensive revisit fees and, in some cases, re-installation.
                </p>
            </Reveal>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-2 mb-8">
                {[
                    "All panels are physically level — no visible tilt variation between adjacent panels.",
                    "Mounting bolts are tightened to spec and all bolt holes are sealed with waterproofing compound.",
                    "DC isolator (between panels and inverter) is accessible and labelled.",
                    "AC isolator (between inverter and main board) is accessible and labelled.",
                    "All cable runs are in conduit — no exposed DC cables on the roof surface.",
                    "Inverter is mounted in a shaded or semi-shaded location — not in direct afternoon sun (causes overheating).",
                    "Inverter is at least 30 cm from any wall for adequate ventilation on all four sides.",
                    "Earthing pit has been installed and a resistance test has been done — result should be < 5 ohms.",
                    "Inverter powers on and shows generation reading within 1 hour of sunrise.",
                    "You have the installer's emergency contact, warranty card, and the panel/inverter serial number list.",
                    "You have been shown how to read the inverter display or app, and how to perform a safe shutdown.",
                    "The roof around all bolt penetrations has been re-waterproofed and is visually clean and sealed.",
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
                        <span className="text-emerald-500 font-bold shrink-0">✓</span>
                        {item}
                    </motion.div>
                ))}
            </motion.div>
            <InfoBox variant="warning">
                Do not sign the installation completion certificate until you have checked every item on this list. The completion certificate triggers the subsidy disbursement process — and once signed, any installation defects become warranty claims rather than pre-acceptance corrections.
            </InfoBox>

            <SectionHeading id="questions-for-installer" emoji="💬" title="Questions to Ask Your Installer Before Signing" />
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Print this list and bring it to every installer meeting. The quality of an installer&apos;s answers — and their willingness to answer at all — tells you everything about how they will handle problems during and after installation.
                </p>
            </Reveal>
            <DarkInfoPanel title="25 Questions for Your Solar Installer">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                        "What is your MNRE empanelment number and when does it expire?",
                        "How many residential systems have you commissioned in the last 12 months in this city?",
                        "Can you provide 3 references with contact numbers I can call independently?",
                        "Which panel brand and model are you quoting? Is it on the current ALMM list?",
                        "Which inverter brand are you quoting? What is the warranty period and your local service contact?",
                        "What is the mounting structure material — galvanised steel or aluminium?",
                        "What gauge (mm²) DC cable are you using?",
                        "Will the DC cable runs be in conduit on the roof, or left exposed?",
                        "Who handles the DISCOM net metering application — your team or the homeowner?",
                        "Is net metering liaison included in the quoted price?",
                        "How long does your net metering process typically take in this district?",
                        "What is your payment schedule — how much advance, and when is the balance due?",
                        "Do you provide a roof waterproofing guarantee after installation?",
                        "How do I contact you for a warranty claim? What is your response time commitment?",
                        "Will you provide a generation estimate per month for the first year, in writing?",
                        "What inverter monitoring app will I use, and how do I set it up?",
                        "How do I perform a safe AC + DC shutdown in an emergency?",
                        "Will I receive the original panel and inverter warranty cards?",
                        "What does your Annual Maintenance Contract (AMC) cover, and what is the price?",
                        "Is earthing included in the quote? What resistance level do you guarantee?",
                        "What happens if my DISCOM rejects the net metering application for a technical reason?",
                        "Are you using BIS-certified panels for this installation?",
                        "Will you conduct a shadow analysis and show me the results before finalising panel placement?",
                        "What is your process for handling a panel defect claim in years 5–15?",
                        "What is your company's CIN or registration number and where are you registered?",
                    ].map((q, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300 py-1.5 border-b border-white/5">
                            <span className="text-emerald-400 shrink-0 font-bold">{String(i + 1).padStart(2, "0")}.</span>
                            <span>{q}</span>
                        </div>
                    ))}
                </div>
            </DarkInfoPanel>
            <Reveal>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-6">
                    Once you have selected your installer, use our <a href="/#calculator-section" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">ROI Calculator</a> to verify that their quoted system size aligns with what your consumption and roof area actually require.
                </p>
            </Reveal>
        </>
    );
}
