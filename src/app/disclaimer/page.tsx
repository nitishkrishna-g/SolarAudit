import { Metadata } from "next";
import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { Fireflies } from "@/components/ui/fireflies";

export const metadata: Metadata = {
    title: "Disclaimer — SolarAudit",
    description:
        "Calculator disclaimer, data accuracy limitations, and affiliate disclosure for SolarAudit. Important information before using our solar ROI calculator.",
    alternates: { canonical: "/disclaimer" },
    openGraph: {
        title: "Disclaimer — SolarAudit",
        description:
            "Important disclaimers about SolarAudit's calculator accuracy, data sources, and affiliate relationships.",
        url: "https://solaraudit.vercel.app/disclaimer",
        siteName: "SolarAudit",
        locale: "en_IN",
        type: "website",
    },
};

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-emerald-500/30">
            <Navbar />
            <Fireflies />

            <main className="flex-grow relative z-10">
                {/* Hero */}
                <section className="relative overflow-hidden pb-8 pt-0">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/20 blur-[100px]" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-500/15 blur-[100px]" />
                    </div>
                    <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Disclaimer
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                            Last updated: April 2026
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="pb-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                    <div className="container mx-auto px-4 max-w-3xl py-16">
                        <article className="prose prose-emerald lg:prose-lg dark:prose-invert max-w-none">
                            <h2>1. General Information Disclaimer</h2>
                            <p>
                                The information provided on SolarAudit (&ldquo;solaraudit.vercel.app&rdquo;) is for general
                                informational and educational purposes only. While we strive to keep all content accurate and
                                up-to-date, we make no representations or warranties of any kind — express or implied — about the
                                completeness, accuracy, reliability, suitability, or availability of any information, products,
                                services, or related graphics on the Site.
                            </p>
                            <p>
                                Any reliance you place on such information is therefore strictly at your own risk. In no event shall
                                SolarAudit be liable for any loss or damage — including without limitation, indirect or consequential
                                loss or damage — arising from the use of information on this website.
                            </p>

                            <h2>2. Calculator Accuracy Disclaimer</h2>
                            <p>
                                <strong>
                                    The solar ROI calculator provided on SolarAudit generates estimates only. These figures are NOT
                                    financial advice, guarantees, or binding quotations.
                                </strong>
                            </p>
                            <p>Our calculator uses the following data inputs:</p>
                            <ul>
                                <li>Published tariff rates from state DISCOMs (MSEDCL, BESCOM, UPPCL, TPDDL, DGVCL, TANGEDCO, BSES)</li>
                                <li>PM Surya Ghar 2026 subsidy slabs as published by MNRE</li>
                                <li>Average peak sun-hour data from IMD/ISRO satellite irradiance maps</li>
                                <li>Industry-standard assumptions for panel degradation (0.5–0.7% per year)</li>
                                <li>Benchmark system costs as per MNRE 2026 guidelines</li>
                            </ul>
                            <p>
                                Actual solar savings may differ significantly due to factors including: roof orientation, shading,
                                local weather patterns, installation quality, inverter efficiency, tariff slab changes, future policy
                                revisions, maintenance frequency, and equipment degradation. We strongly recommend obtaining at least
                                three quotations from MNRE-empaneled installers before making any investment decision.
                            </p>

                            <h2>3. Not Financial or Professional Advice</h2>
                            <p>
                                SolarAudit does not provide financial, legal, tax, or professional advice. The content on this website —
                                including calculator results, guides, and product recommendations — should not be used as a substitute
                                for consultation with qualified professionals. Always consult a certified solar installer, financial
                                advisor, or relevant authority before making decisions based on our content.
                            </p>

                            <h2>4. Affiliate Relationships</h2>
                            <p>
                                SolarAudit is a participant in the <strong>Amazon Services LLC Associates Program</strong>, an
                                affiliate advertising program designed to provide a means for sites to earn advertising fees by
                                advertising and linking to Amazon.in.
                            </p>
                            <p>
                                When you click on product links on our site and make a purchase, we may earn a small commission at no
                                additional cost to you. This commission helps us maintain the site and keep our calculator free.
                            </p>
                            <p>
                                <strong>Important:</strong> Our editorial recommendations and product rankings are never influenced by
                                affiliate partnerships. We only recommend products that meet our quality and durability standards for
                                Indian conditions. If a product does not pass our review criteria, it will not appear on our platform
                                regardless of commission rates.
                            </p>

                            <h2>5. Third-Party Content and Links</h2>
                            <p>
                                This website contains links to external websites (including Amazon.in, MNRE portals, state DISCOM
                                websites, and PM Surya Ghar portal). SolarAudit has no control over the content, availability, or
                                privacy practices of these external sites. Inclusion of any links does not imply endorsement or
                                recommendation. You access third-party sites entirely at your own risk.
                            </p>

                            <h2>6. Data Accuracy and Timeliness</h2>
                            <p>
                                Government policies, tariff rates, and subsidy structures change frequently. While we make every effort
                                to update our calculator data and guides promptly, there may be periods where our information does not
                                reflect the most recent changes. We recommend verifying critical data points (subsidy amounts, tariff
                                rates, eligibility criteria) directly with your local DISCOM and the PM Surya Ghar portal before making
                                any decisions.
                            </p>
                            <p>
                                If you notice any data inaccuracy on our site, please{" "}
                                <a href="/contact">contact us</a> so we can correct it promptly.
                            </p>

                            <h2>7. Advertising Disclaimer</h2>
                            <p>
                                This website may display advertisements served by Google AdSense and other advertising networks. These
                                ads are clearly distinguishable from editorial content and are served based on your browsing behaviour
                                as determined by the ad network. SolarAudit does not endorse or guarantee any products or services
                                advertised through these networks.
                            </p>

                            <h2>8. Contact</h2>
                            <p>
                                If you have questions about this Disclaimer, please contact us at{" "}
                                <a href="mailto:contact@solaraudit.in">contact@solaraudit.in</a> or visit
                                our <a href="/contact">Contact page</a>.
                            </p>
                        </article>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
