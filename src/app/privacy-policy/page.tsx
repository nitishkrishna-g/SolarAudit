import { Metadata } from "next";
import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | SolarAudit",
    description: "Privacy policy for SolarAudit — how we collect, use, and protect your data. Includes Google AdSense, Amazon Associates, and cookie disclosures.",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-emerald-500/30">
            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden pb-8 pt-0">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/10 blur-[100px]" />
                </div>
                <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Policy</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
                        Your privacy matters. This policy explains what data we collect, how we use it, and your rights.
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-3">Last updated: February 25, 2026</p>
                </div>
            </section>

            {/* Content */}
            <main className="container mx-auto px-4 pb-20 max-w-4xl">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-sm space-y-10">

                    {/* 1. Introduction */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">1. Who We Are</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            SolarAudit (<Link href="/" className="text-emerald-600 hover:underline">solaraudit.in</Link>) is a free solar ROI calculator and educational resource for Indian homeowners. We help you calculate your potential savings under the PM Surya Ghar subsidy scheme. SolarAudit is operated independently and is not affiliated with any government body.
                        </p>
                    </section>

                    {/* 2. Data Collection */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">2. Information We Collect</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                            We collect minimal data to provide and improve our services:
                        </p>
                        <div className="space-y-4">
                            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                                <h3 className="font-bold text-sm mb-2">Calculator Inputs</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">State, city, and monthly electricity bill amount entered into our calculator. This data is processed locally in your browser and is <strong>not stored on our servers</strong>.</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                                <h3 className="font-bold text-sm mb-2">Contact Information (Optional)</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">If you choose to submit an installer callback request, we collect your name, phone number, city, and email. This data is shared only with verified solar installers in your area.</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                                <h3 className="font-bold text-sm mb-2">Automatic Technical Data</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">IP address, browser type, device type, operating system, referral URLs, pages visited, and time spent. This is collected automatically via cookies and analytics tools.</p>
                            </div>
                        </div>
                    </section>

                    {/* 3. Google AdSense */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">3. Google AdSense &amp; Advertising</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                            We use <strong>Google AdSense</strong> to display advertisements on our website. Google AdSense uses cookies and web beacons to serve ads based on your prior visits to this website and other websites on the internet.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-0.5">•</span>
                                Google uses the <strong>DoubleClick DART cookie</strong> to serve ads based on your visit to our site and other sites on the internet.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-0.5">•</span>
                                You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Google&apos;s Ads Settings</a>.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-0.5">•</span>
                                Third-party vendors, including Google, use cookies to serve ads based on your browsing history.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-0.5">•</span>
                                You can opt out of third-party vendor cookies at <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">aboutads.info</a>.
                            </li>
                        </ul>
                    </section>

                    {/* 4. Amazon Affiliate */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">4. Amazon Associates Disclosure</h2>
                        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                SolarAudit is a participant in the <strong>Amazon Services LLC Associates Program</strong>, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to <strong>Amazon.in</strong>. As an Amazon Associate, we earn from qualifying purchases. Product recommendations on our site contain affiliate links — clicking them and making a purchase supports our work at no extra cost to you.
                            </p>
                        </div>
                    </section>

                    {/* 5. Cookies */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">5. Cookies</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                            Cookies are small text files stored on your device. We use the following types:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-slate-100 dark:bg-slate-800">
                                        <th className="p-3 text-left border border-slate-200 dark:border-slate-700 font-bold">Type</th>
                                        <th className="p-3 text-left border border-slate-200 dark:border-slate-700 font-bold">Purpose</th>
                                        <th className="p-3 text-left border border-slate-200 dark:border-slate-700 font-bold">Provider</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-600 dark:text-slate-400">
                                    <tr>
                                        <td className="p-3 border border-slate-200 dark:border-slate-700">Essential</td>
                                        <td className="p-3 border border-slate-200 dark:border-slate-700">Theme preference (dark/light mode)</td>
                                        <td className="p-3 border border-slate-200 dark:border-slate-700">SolarAudit</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-200 dark:border-slate-700">Advertising</td>
                                        <td className="p-3 border border-slate-200 dark:border-slate-700">Serve and personalize ads</td>
                                        <td className="p-3 border border-slate-200 dark:border-slate-700">Google AdSense</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-200 dark:border-slate-700">Affiliate</td>
                                        <td className="p-3 border border-slate-200 dark:border-slate-700">Track affiliate referrals</td>
                                        <td className="p-3 border border-slate-200 dark:border-slate-700">Amazon Associates</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-500 mt-3">
                            You can control cookies through your browser settings. Disabling cookies may affect site functionality.
                        </p>
                    </section>

                    {/* 6. Third-Party Links */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">6. Third-Party Links</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Our website contains links to external sites such as Amazon.in, government portals (pmsuryaghar.gov.in), and other resources. We are not responsible for the privacy practices or content of these external websites. We encourage you to read the privacy policies of any linked sites you visit.
                        </p>
                    </section>

                    {/* 7. Data Security */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">7. Data Security</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            We implement appropriate technical and organizational measures to protect your personal data. Our website is served over HTTPS. Calculator data is processed entirely in your browser. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    {/* 8. Children */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">8. Children&apos;s Privacy</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            SolarAudit is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe that a child has provided us with personal data, please contact us and we will delete the information promptly.
                        </p>
                    </section>

                    {/* 9. User Rights */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">9. Your Rights</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">You have the right to:</p>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span>Request access to personal data we hold about you</li>
                            <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span>Request correction of inaccurate data</li>
                            <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span>Request deletion of your data</li>
                            <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span>Opt out of personalized advertising</li>
                            <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span>Withdraw consent at any time</li>
                        </ul>
                    </section>

                    {/* 10. Changes */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">10. Changes to This Policy</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            We may update this privacy policy from time to time. Any changes will be posted on this page with a revised &quot;Last updated&quot; date. We encourage you to review this page periodically to stay informed about how we protect your data.
                        </p>
                    </section>

                    {/* 11. Contact */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">11. Contact Us</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            If you have any questions about this privacy policy, or wish to exercise any of your rights, please contact us:
                        </p>
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4">
                            <p className="text-sm font-medium text-emerald-800 dark:text-emerald-400">
                                SolarAudit
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                Email: privacy@solaraudit.in
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                Website: <Link href="/" className="text-emerald-600 hover:underline">solaraudit.in</Link>
                            </p>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
}
