import Link from "next/link";
import { solarData } from "@/data/solarData";

export function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pt-16 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400 mb-6 inline-block">
                            SolarAudit
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                            Empowering Indian homeowners with transparent solar ROI calculations and verified installer connections.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/guides", label: "Solar Guide" },
                                { href: "/shop", label: "Solar Store" },
                                { href: "/#calculator-section", label: "ROI Calculator" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { href: "/about", label: "About Us" },
                                { href: "/contact", label: "Contact" },
                                { href: "/terms", label: "Terms of Service" },
                                { href: "/privacy-policy", label: "Privacy Policy" },
                                { href: "/disclaimer", label: "Disclaimer" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { href: "https://pmsuryaghar.gov.in", label: "PM Surya Ghar Portal", external: true },
                                { href: "https://mnre.gov.in", label: "MNRE Official Site", external: true },
                                { href: "/sitemap.xml", label: "Sitemap" },
                            ].map((link) => (
                                <li key={link.href}>
                                    {'external' in link && link.external ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                        >
                                            {link.label} ↗
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* State/City Links */}
                <div className="border-t border-slate-200 dark:border-slate-800 pt-12">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-8">
                        Solar Subsidy & Installers by Region
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {solarData.filter(s => s.slug !== 'india').map((state) => (
                            <div key={state.slug} className="space-y-4">
                                <Link
                                    href={`/calculator/${state.slug}`}
                                    className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                                >
                                    {state.name} Solar
                                </Link>
                                <ul className="space-y-2">
                                    {state.cities?.map((city) => (
                                        <li key={city}>
                                            <Link
                                                href={`/calculator/${state.slug}/${city.toLowerCase().replace(/ /g, '-')}`}
                                                className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                            >
                                                Solar in {city}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 dark:border-slate-800 mt-16 pt-8 text-center space-y-4">
                    <p className="text-slate-500 dark:text-slate-500 text-xs max-w-4xl mx-auto">
                        SolarAudit is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.in.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 items-center text-sm text-slate-500">
                        <Link href="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                            About
                        </Link>
                        <span className="text-slate-300 dark:text-slate-700">|</span>
                        <Link href="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                            Contact
                        </Link>
                        <span className="text-slate-300 dark:text-slate-700">|</span>
                        <Link href="/terms" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                            Terms
                        </Link>
                        <span className="text-slate-300 dark:text-slate-700">|</span>
                        <Link href="/privacy-policy" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                            Privacy
                        </Link>
                        <span className="text-slate-300 dark:text-slate-700">|</span>
                        <p className="text-slate-500 dark:text-slate-500">
                            &copy; {new Date().getFullYear()} SolarAudit. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
