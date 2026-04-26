import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { Fireflies } from "@/components/ui/fireflies";
import { guideArticles } from "@/data/guidesArticles";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { GuideBody } from "@/components/guides/GuideBody";
import { ReadingProgress } from "@/components/guides/ReadingProgress";
import { ArticleChapterSidebar } from "@/components/guides/ArticleChapterSidebar";
import { ArticleRightRail } from "@/components/guides/ArticleRightRail";
import {
    AnimatedHero, AnimatedBadge, AnimatedTocPills,
    AnimatedFaq, AnimatedCTA, AnimatedRelatedCard, Reveal,
} from "@/components/guides/ArticleAnimations";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return guideArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = guideArticles.find((a) => a.slug === slug);
    if (!article) return { title: "Guide Not Found" };
    const url = `https://solaraudit.vercel.app/guides/${slug}`;
    return {
        title: article.title,
        description: article.metaDescription,
        alternates: { canonical: `/guides/${slug}` },
        openGraph: {
            title: article.title,
            description: article.metaDescription,
            url,
            siteName: "SolarAudit",
            locale: "en_IN",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.metaDescription,
        },
    };
}

const emojiMap: Record<string, string> = {
    Subsidies: "💰", Hardware: "⚡", Policy: "📋", Maintenance: "🧹", Finance: "📊",
};

export default async function GuidePage({ params }: PageProps) {
    const { slug } = await params;
    const article = guideArticles.find((a) => a.slug === slug);
    if (!article) notFound();

    const related = guideArticles.filter((a) => article.relatedSlugs.includes(a.slug));

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://solaraudit.vercel.app" },
                    { "@type": "ListItem", position: 2, name: "Guides", item: "https://solaraudit.vercel.app/guides" },
                    { "@type": "ListItem", position: 3, name: article.title, item: `https://solaraudit.vercel.app/guides/${slug}` },
                ],
            },
            {
                "@type": "Article",
                headline: article.title,
                description: article.metaDescription,
                dateModified: "2026-04-15",
                datePublished: "2026-01-01",
                author: {
                    "@type": "Person",
                    name: article.author,
                    jobTitle: article.authorTitle,
                    url: "https://solaraudit.vercel.app/about",
                },
                publisher: { "@type": "Organization", name: "SolarAudit", url: "https://solaraudit.vercel.app" },
            },
            {
                "@type": "FAQPage",
                mainEntity: article.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
            },
        ],
    };

    return (
        <div className="min-h-screen flex flex-col relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-emerald-500/30 transition-colors duration-300">
            <ReadingProgress />
            <Navbar />
            <Fireflies />

            <main className="flex-grow relative z-10">
                {/* ── HERO ───────────────────────────────────────── */}
                <section className="relative overflow-hidden pb-4 pt-0">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/20 blur-[100px]" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-500/15 blur-[100px]" />
                    </div>

                    <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="mb-6">
                            <ol className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 flex-wrap">
                                <li><Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Home</Link></li>
                                <li><ChevronRight className="w-3 h-3" /></li>
                                <li><Link href="/guides" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Guides</Link></li>
                                <li><ChevronRight className="w-3 h-3" /></li>
                                <li className="text-slate-900 dark:text-white font-medium truncate max-w-[200px] sm:max-w-none">{article.title}</li>
                            </ol>
                        </nav>

                        <AnimatedHero>
                            <div className="max-w-3xl">
                                <AnimatedBadge>
                                    {article.category} • {article.lastUpdated}
                                </AnimatedBadge>

                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                                    {article.title.split(":")[0]}
                                    {article.title.includes(":") && (
                                        <>
                                            <br className="hidden sm:block" />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                                                {article.title.split(":").slice(1).join(":")}
                                            </span>
                                        </>
                                    )}
                                </h1>

                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-4">
                                    {article.heroSubtitle}
                                </p>

                                {/* Author byline */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg shadow-emerald-500/30">
                                        {article.author.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="font-semibold text-sm text-slate-900 dark:text-white">{article.author}</span>
                                            <span className="text-slate-400 dark:text-slate-500 text-xs">•</span>
                                            <span className="text-xs text-slate-500 dark:text-slate-400">{article.authorTitle}</span>
                                        </div>
                                        <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                                            Reviewed {article.reviewedDate} &nbsp;·&nbsp; {article.readTime} read
                                        </div>
                                    </div>
                                </div>

                                {/* Chapter Pills */}
                                <AnimatedTocPills
                                    items={article.toc.map((t) => ({
                                        id: t.id,
                                        label: `${emojiMap[article.category] || "📖"} ${t.label}`,
                                    }))}
                                />
                            </div>
                        </AnimatedHero>
                    </div>
                </section>

                {/* ── CONTENT ────────────────────────────────────── */}
                <div className="container mx-auto px-4 py-12">
                    <div className="flex items-start gap-8 xl:gap-12">
                        {/* Left chapter navigator — same style as main guides page */}
                        <ArticleChapterSidebar toc={article.toc} />

                        {/* Article Body */}
                        <main className="flex-1 min-w-0 max-w-3xl">
                            {/* Guide Content (animated articles) */}
                            <GuideBody slug={slug} />

                            {/* FAQ Section */}
                            <Reveal>
                                <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                        Frequently Asked Questions
                                    </h2>
                                    <AnimatedFaq faqs={article.faqs} />
                                </div>
                            </Reveal>

                            {/* CTA */}
                            <AnimatedCTA />

                            {/* Related Guides */}
                            {related.length > 0 && (
                                <Reveal>
                                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Related Guides</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {related.map((r) => (
                                                <AnimatedRelatedCard
                                                    key={r.slug}
                                                    href={`/guides/${r.slug}`}
                                                    category={r.category}
                                                    title={r.title}
                                                    readTime={r.readTime}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                            )}

                            {/* Back Link */}
                            <Reveal>
                                <div className="mt-8">
                                    <Link href="/guides" className="inline-flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
                                        <ArrowLeft className="w-4 h-4" /> Back to All Guides
                                    </Link>
                                </div>
                            </Reveal>
                        </main>

                        {/* Right affiliate rail — same style as main guides page */}
                        <ArticleRightRail
                            category={article.category}
                            toc={article.toc}
                            related={related.map((r) => ({
                                href: `/guides/${r.slug}`,
                                category: r.category,
                                title: r.title,
                                readTime: r.readTime,
                            }))}
                        />
                    </div>
                </div>
            </main>

            <Footer />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </div>
    );
}
