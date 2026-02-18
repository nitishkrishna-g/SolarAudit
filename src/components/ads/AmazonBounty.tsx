import { ExternalLink } from "lucide-react";

interface AmazonBountyProps {
    type?: "prime" | "business" | "audible";
}

export function AmazonBounty({ type = "prime" }: AmazonBountyProps) {
    const bounties = {
        prime: {
            title: "Join Amazon Prime",
            desc: "Get fast, free delivery on solar accessories & exclusive deals.",
            cta: "Start 30-Day Free Trial",
            link: "https://www.amazon.in/tryprime?tag=solaraudit-21",
            color: "bg-[#232F3E] text-white",
            accent: "bg-[#00A8E1]"
        },
        business: {
            title: "Amazon Business",
            desc: "GST invoices & bulk discounts for solar installers.",
            cta: "Create Free Account",
            link: "https://www.amazon.in/business?tag=solaraudit-21",
            color: "bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700",
            accent: "bg-orange-500 text-white"
        },
        audible: {
            title: "Listen to Solar Audiobooks",
            desc: "Get 1 free audiobook on renewable energy.",
            cta: "Try Audible Free",
            link: "https://www.amazon.in/audible?tag=solaraudit-21",
            color: "bg-purple-900 text-white",
            accent: "bg-yellow-400 text-slate-900"
        }
    };

    const content = bounties[type];

    return (
        <a
            href={content.link}
            target="_blank"
            rel="nofollow noopener"
            className={`block p-4 rounded-xl ${content.color} shadow-lg hover:shadow-xl transition-all relative overflow-hidden group`}
        >
            <div className="relative z-10">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                    {content.title}
                    <ExternalLink className="w-4 h-4 opacity-50" />
                </h3>
                <p className="text-sm opacity-90 mb-4 pr-8">{content.desc}</p>
                <div className={`inline-block px-4 py-2 rounded-lg text-sm font-bold ${content.accent} group-hover:scale-105 transition-transform`}>
                    {content.cta}
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        </a>
    );
}
