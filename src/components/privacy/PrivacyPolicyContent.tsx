"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Lock, Globe } from "lucide-react";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function PrivacyPolicyContent() {
    return (
        <main className="flex-grow flex flex-col relative z-10 w-full mb-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pb-16 pt-0 w-full">
                {/* Aurora blobs - Same as Guides/HomePage */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/20 blur-[100px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-500/15 blur-[100px]" />
                </div>

                <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide mb-6"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        Legal Agreements
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto"
                    >
                        Privacy Policy & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Affiliate Disclosure</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed"
                    >
                        Last Updated: February 26, 2026
                        <span className="block mt-2 font-medium text-slate-900 dark:text-slate-200">Our commitment to protecting your data and keeping solar advice free.</span>
                    </motion.p>

                    {/* Chapter pills */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="show"
                        className="flex flex-wrap justify-center gap-2 mb-12"
                    >
                        {[
                            { id: "introduction", label: "📄 Introduction", icon: FileText },
                            { id: "affiliate", label: "💰 Affiliate", icon: FileText },
                            { id: "cookies", label: "🍪 Cookies & AdSense", icon: Globe },
                            { id: "data", label: "🔒 User Data", icon: Lock },
                        ].map((ch) => (
                            <motion.a
                                key={ch.id}
                                href={`#${ch.id}`}
                                variants={fadeUp}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="px-4 py-2 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 border border-slate-200 dark:border-white/10 hover:border-emerald-300 dark:hover:border-emerald-500/40 text-slate-700 dark:text-white text-sm font-medium transition-colors inline-flex items-center gap-2"
                            >
                                {ch.label}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <div className="container mx-auto px-4 pb-12 border-t border-slate-200/50 dark:border-slate-800/50 pt-16 mt-[-40px]">
                <div className="max-w-3xl mx-auto">
                    <article className="prose prose-emerald lg:prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                        <Reveal>
                            <h2 id="introduction" className="flex items-center gap-3 scroll-mt-24 text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                <span className="text-emerald-500 text-xl font-mono opacity-80 mt-1">01.</span> Introduction and Consent
                            </h2>
                            <p className="leading-relaxed">
                                Welcome to SolarAudit ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy outlines the types of personal information that is received and collected by SolarAudit and how it is used. By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                            </p>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <div id="affiliate" className="scroll-mt-24 relative overflow-hidden bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl p-8 my-16 shadow-sm not-prose hover:shadow-emerald-500/5 hover:border-emerald-500/30 transition-all">
                                <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
                                <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-400 mb-4 flex items-center gap-3">
                                    <span className="text-emerald-500 text-sm font-mono opacity-80 mt-1">02.</span> Amazon Affiliate Disclosure
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                                    SolarAudit is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.in and affiliated sites. As an Amazon Associate, we earn from qualifying purchases. This means that if you click on an affiliate link and make a purchase, we may receive a small commission at no additional cost to you. This helps keep our calculator and guides completely free.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <div id="cookies" className="scroll-mt-24 relative overflow-hidden bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800/50 rounded-2xl p-8 my-16 shadow-sm not-prose hover:shadow-blue-500/5 hover:border-blue-500/30 transition-all">
                                <div className="absolute top-0 left-0 w-2 h-full bg-blue-500" />
                                <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-4 flex items-center gap-3">
                                    <span className="text-blue-500 text-sm font-mono opacity-80 mt-1">03.</span> Google AdSense & Advertising Cookies
                                </h3>
                                <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-4 text-base">
                                    <p>We use Google AdSense to display advertisements on SolarAudit.</p>
                                    <p>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites.</p>
                                    <p>Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.</p>
                                    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                                        <p>
                                            Users may opt-out of personalized advertising by visiting{" "}
                                            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">Google's Ads Settings</a>{" "}
                                            website. Alternatively, you can opt-out of a third-party vendor's use of cookies for personalized advertising by visiting{" "}
                                            <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">www.aboutads.info</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="flex items-center gap-3 mt-16 text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                <span className="text-emerald-500 text-xl font-mono opacity-80 mt-1">04.</span> Log Files and Analytics
                            </h2>
                            <p className="leading-relaxed">
                                Like many other websites, SolarAudit makes use of log files. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user's movement around the site, and gather demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.
                            </p>
                        </Reveal>

                        <Reveal>
                            <h2 id="data" className="flex items-center gap-3 scroll-mt-24 mt-16 text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                <span className="text-emerald-500 text-xl font-mono opacity-80 mt-1">05.</span> User Data and Lead Information
                            </h2>
                            <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 not-prose mb-8">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <div className="bg-emerald-100 dark:bg-emerald-500/20 p-2 rounded-lg shrink-0 mt-0.5">
                                            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">If you voluntarily provide information (such as your name, phone number, and electricity bill details) through our Lead generation forms, we collect this data strictly to connect you with verified local solar installers.</span>
                                    </li>
                                    <li className="flex items-start gap-4 border-t border-slate-200 dark:border-slate-800 pt-4">
                                        <div className="bg-emerald-100 dark:bg-emerald-500/20 p-2 rounded-lg shrink-0 mt-0.5">
                                            <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 text-base leading-relaxed"><strong>We do not sell your personal contact information to third-party data brokers.</strong></span>
                                    </li>
                                    <li className="flex items-start gap-4 border-t border-slate-200 dark:border-slate-800 pt-4">
                                        <div className="bg-emerald-100 dark:bg-emerald-500/20 p-2 rounded-lg shrink-0 mt-0.5">
                                            <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">Your data is only shared with trusted solar EPCs (Engineering, Procurement, and Construction companies) for the sole purpose of providing you with solar installation quotes.</span>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="flex items-center gap-3 mt-16 text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                <span className="text-emerald-500 text-xl font-mono opacity-80 mt-1">06.</span> Third-Party Privacy Policies
                            </h2>
                            <p className="leading-relaxed">
                                SolarAudit's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser options.
                            </p>
                        </Reveal>

                        <Reveal>
                            <div className="mt-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-8 md:p-12 text-center not-prose shadow-lg shadow-emerald-500/20">
                                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                                <p className="mb-8 opacity-90 max-w-lg mx-auto text-lg">
                                    If you require any more information or have any questions about our privacy policy, please feel free to reach out.
                                </p>
                                <a href="mailto:legal@solaraudit.in" className="inline-flex items-center justify-center bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg hover:shadow-xl text-lg w-full sm:w-auto">
                                    Email legal@solaraudit.in
                                </a>
                            </div>
                        </Reveal>
                    </article>
                </div>
            </div>
        </main>
    );
}
