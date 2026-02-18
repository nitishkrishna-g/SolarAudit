"use client";

import Link from "next/link";
import { Moon, Sun, Zap, BookOpen, Calculator, Home } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/guides", label: "Guides", icon: BookOpen },
    { href: "/shop", label: "Shop", icon: null },
];

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={cn(
                "sticky top-0 z-40 transition-all duration-300",
                scrolled
                    ? "border-b border-border-color bg-surface/90 backdrop-blur-xl shadow-sm"
                    : "border-b border-transparent bg-surface/60 backdrop-blur-md"
            )}
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white group-hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-500/20">
                        <Zap className="w-5 h-5 fill-current" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">SolarAudit</span>
                </Link>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href || pathname.startsWith(href + "/");
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                                    isActive
                                        ? "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10"
                                        : "text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                                )}
                            >
                                {label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-emerald-500 rounded-full" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    {/* Calculator CTA */}
                    <Link
                        href="/#calculator-section"
                        className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-4 py-2 rounded-xl transition-all shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                    >
                        <Calculator className="w-4 h-4" />
                        Check Subsidy
                    </Link>

                    {/* Theme Toggle */}
                    {mounted && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="rounded-full w-9 h-9 p-0"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </Button>
                    )}
                </div>
            </div>
        </nav>
    );
}
