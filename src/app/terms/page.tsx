import { Metadata } from "next";
import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { Fireflies } from "@/components/ui/fireflies";

export const metadata: Metadata = {
  title: "Terms of Service — SolarAudit",
  description:
    "Terms of Service, calculator disclaimer, and affiliate disclosure for SolarAudit. Read before using our solar ROI calculator.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service — SolarAudit",
    description:
      "Terms of Service, disclaimer, and affiliate disclosure for SolarAudit.",
    url: "https://solaraudit.vercel.app/terms",
    siteName: "SolarAudit",
    locale: "en_IN",
    type: "website",
  },
};

export default function TermsPage() {
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
              Terms of Service
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
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the SolarAudit website (&ldquo;solaraudit.vercel.app&rdquo; or &ldquo;the Site&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree with any part of these Terms, you must not use the Site.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                SolarAudit provides a free online calculator that estimates solar panel return on investment (ROI) for Indian homeowners. The calculator uses publicly available tariff data from state DISCOMs, subsidy information from MNRE, and standard industry assumptions to generate estimates.
              </p>
              <p>
                The Site also provides educational guides, product recommendations, and curated product links to third-party e-commerce platforms.
              </p>

              <h2>3. Calculator Disclaimer</h2>
              <p>
                <strong>The calculations provided by SolarAudit are estimates only and should not be treated as financial advice or guarantees.</strong> Actual solar savings depend on numerous factors including but not limited to:
              </p>
              <ul>
                <li>Your roof&apos;s actual shadow-free area and orientation</li>
                <li>Panel degradation rates over time (typically 0.5–0.7% per year)</li>
                <li>Future electricity tariff changes by your DISCOM</li>
                <li>Local weather conditions and actual solar irradiance</li>
                <li>Quality of installation and equipment chosen</li>
                <li>Net metering policy changes by your state government</li>
                <li>Subsidy disbursement timelines and eligibility changes</li>
              </ul>
              <p>
                We recommend consulting a certified solar installer and obtaining multiple quotations before making any investment decision. SolarAudit is not responsible for any financial loss incurred based on our calculator estimates.
              </p>

              <h2>4. Affiliate Disclosure</h2>
              <p>
                SolarAudit is a participant in the <strong>Amazon Services LLC Associates Program</strong>, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.in.
              </p>
              <p>
                When you click on a product link on our Site and make a purchase on Amazon.in, we may earn a small commission at no additional cost to you. This commission helps us maintain the Site, keep our calculator free, and produce high-quality educational content.
              </p>
              <p>
                Our product recommendations are based on independent research and experience. Affiliate partnerships do not influence our editorial content or product rankings. We only recommend products we believe offer genuine value to Indian solar system owners.
              </p>

              <h2>5. Intellectual Property</h2>
              <p>
                All content on the Site — including text, calculations, code, design, logos, and images — is the property of SolarAudit and is protected by applicable intellectual property laws. You may not reproduce, distribute, or modify any part of the Site without prior written permission.
              </p>
              <p>
                You may share links to our pages and reference our data with proper attribution.
              </p>

              <h2>6. User Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the calculator or Site for any unlawful purpose</li>
                <li>Attempt to scrape, reverse-engineer, or overload the Site</li>
                <li>Impersonate another person or entity through our contact form</li>
                <li>Submit false or misleading information</li>
                <li>Interfere with the security or integrity of the Site</li>
              </ul>

              <h2>7. Third-Party Links</h2>
              <p>
                The Site contains links to third-party websites (including Amazon.in, MNRE portals, and DISCOM websites). SolarAudit is not responsible for the content, policies, or practices of these external sites. Visiting these links is at your own risk.
              </p>

              <h2>8. Data Accuracy</h2>
              <p>
                While we make every effort to ensure our tariff data, subsidy rates, and product information are accurate and current, we cannot guarantee absolute accuracy. Government policies and tariff rates change frequently. We update our data as soon as changes are published, but there may be delays.
              </p>
              <p>
                If you notice any data inaccuracies, please <a href="/contact">contact us</a> so we can correct them promptly.
              </p>

              <h2>9. Limitation of Liability</h2>
              <p>
                SolarAudit and its team shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Site or reliance on any information provided herein. This includes, without limitation, damages for loss of profits, goodwill, data, or other intangible losses.
              </p>

              <h2>10. Privacy</h2>
              <p>
                Your use of the Site is also governed by our{" "}
                <a href="/privacy-policy">Privacy Policy</a>. We do not sell personal data. Any information submitted through our contact form is used solely to respond to your inquiry.
              </p>

              <h2>11. Advertising</h2>
              <p>
                The Site may display advertisements served by Google AdSense or other advertising networks. These ads are clearly marked and are served based on your browsing behavior as determined by the ad network. SolarAudit does not control the specific ads displayed and is not responsible for the content of third-party advertisements.
              </p>

              <h2>12. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the Site after any modification constitutes acceptance of the revised Terms.
              </p>

              <h2>13. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in India.
              </p>

              <h2>14. Contact</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:contact@solaraudit.in">contact@solaraudit.in</a>{" "}
                or visit our <a href="/contact">Contact page</a>.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
