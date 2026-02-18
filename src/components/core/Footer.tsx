import Link from "next/link";
import { solarData } from "@/data/solarData";

export function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pt-16 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400 mb-6 inline-block">
                            SolarAudit
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                            Empowering Indian homeowners with transparent solar ROI calculations and verified installer connections.
                        </p>
                    </div>
                </div>

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

                <div className="border-t border-slate-200 dark:border-slate-800 mt-16 pt-8 text-center">
                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} SolarAudit. All rights reserved. Data sourced from MNRE, DISCOMs, and State Nodal Agencies.
                    </p>
                </div>
            </div>
        </footer>
    );
}
