import { ExternalLink, Battery, Droplets, Gauge } from "lucide-react";
import { motion } from "framer-motion";

export function AffiliateGrid() {
    const products = [
        {
            title: "Solar Panel Cleaning Kit",
            desc: "Dust reduces efficiency by 15%. Keep panels clean.",
            price: "₹1,499",
            icon: <Droplets className="w-6 h-6 text-blue-500" />,
            link: "https://www.amazon.in/s?k=solar+panel+cleaning+kit&tag=solaraudit-21",
            image: "https://placehold.co/600x400/png?text=Cleaning+Kit"
        },
        {
            title: "Smart Wi-Fi Energy Meter",
            desc: "Track your home consumption in real-time.",
            price: "₹2,299",
            icon: <Gauge className="w-6 h-6 text-amber-500" />,
            link: "https://www.amazon.in/s?k=smart+wifi+energy+meter&tag=solaraudit-21",
            image: "https://placehold.co/600x400/png?text=Energy+Meter"
        },
        {
            title: "Luminous Solar Inverter",
            desc: "Best-selling hybrid inverter for Indian homes.",
            price: "₹18,500",
            icon: <Battery className="w-6 h-6 text-emerald-500" />,
            link: "https://www.amazon.in/s?k=luminous+solar+inverter&tag=solaraudit-21",
            image: "https://placehold.co/600x400/png?text=Solar+Inverter"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
        >
            {products.map((p, i) => (
                <motion.a
                    key={i}
                    href={p.link}
                    target="_blank"
                    rel="nofollow noopener" // CRITICAL FOR SEO
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
                >
                    <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-slate-100 dark:bg-slate-900">
                        <img
                            src={p.image}
                            alt={p.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                            <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg">{p.icon}</div>
                            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                        </div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">{p.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-3 flex-grow">{p.desc}</p>
                        <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{p.price} on Amazon</span>
                    </div>
                </motion.a>
            ))}
        </motion.div>
    );
}
