export interface GuideArticle {
    slug: string;
    title: string;
    metaDescription: string;
    lastUpdated: string;
    readTime: string;
    category: string;
    heroSubtitle: string;
    toc: { id: string; label: string }[];
    faqs: { q: string; a: string }[];
    relatedSlugs: string[];
}

export const guideArticles: GuideArticle[] = [
    {
        slug: "pm-surya-ghar-subsidy-2026",
        title: "PM Surya Ghar Subsidy 2026: Complete Application Guide",
        metaDescription: "Step-by-step guide to applying for PM Surya Ghar Muft Bijli Yojana subsidy in 2026. Eligibility, documents, subsidy amounts, and application process explained.",
        lastUpdated: "April 2026",
        readTime: "12 min",
        category: "Subsidies",
        heroSubtitle: "Everything you need to know about India's biggest rooftop solar subsidy — eligibility, amounts, application steps, and common mistakes to avoid.",
        toc: [
            { id: "what-is", label: "What is PM Surya Ghar?" },
            { id: "eligibility", label: "Eligibility Criteria" },
            { id: "subsidy-amounts", label: "Subsidy Amounts" },
            { id: "how-to-apply", label: "How to Apply" },
            { id: "documents", label: "Documents Required" },
            { id: "timeline", label: "Timeline & Disbursement" },
            { id: "mistakes", label: "Common Mistakes" },
        ],
        faqs: [
            { q: "Can I apply for PM Surya Ghar if I already have solar panels?", a: "No. The scheme is only for new installations. Existing solar system owners are not eligible for the subsidy." },
            { q: "Is the subsidy available for commercial properties?", a: "No. PM Surya Ghar is exclusively for residential households. Commercial, industrial, and institutional buildings are not covered." },
            { q: "How long does the subsidy take to arrive?", a: "After commissioning certificate submission, the subsidy is typically credited to your bank account within 30 working days via Direct Benefit Transfer (DBT)." },
            { q: "Can tenants apply for the subsidy?", a: "No. The electricity connection must be in the applicant's name. Tenants cannot apply unless the connection is transferred to them." },
        ],
        relatedSlugs: ["net-metering-explained", "solar-roi-calculator-guide"],
    },
    {
        slug: "solar-panel-types-india",
        title: "Mono-PERC vs Polycrystalline: Which Solar Panel for India?",
        metaDescription: "Compare Mono-PERC and Polycrystalline solar panels for Indian conditions. Efficiency, cost, heat performance, and which type suits your roof best.",
        lastUpdated: "April 2026",
        readTime: "10 min",
        category: "Hardware",
        heroSubtitle: "A no-nonsense comparison of the two most popular solar panel technologies available in India — with real-world performance data.",
        toc: [
            { id: "overview", label: "Panel Technology Overview" },
            { id: "mono-perc", label: "Mono-PERC Explained" },
            { id: "polycrystalline", label: "Polycrystalline Explained" },
            { id: "comparison", label: "Head-to-Head Comparison" },
            { id: "indian-weather", label: "Performance in Indian Weather" },
            { id: "which-to-choose", label: "Which Should You Choose?" },
        ],
        faqs: [
            { q: "Do Mono-PERC panels work better in cloudy weather?", a: "Yes. Mono-PERC panels perform 10–15% better than polycrystalline in low-light and overcast conditions due to their higher cell efficiency." },
            { q: "How much roof space do I need for each type?", a: "A 1kW Mono-PERC system needs approximately 60–65 sq ft, while polycrystalline requires 75–85 sq ft for the same capacity." },
            { q: "Which panel type lasts longer?", a: "Both types have a 25-year warranty, but Mono-PERC panels degrade slightly slower at 0.5% per year compared to 0.7% for polycrystalline." },
        ],
        relatedSlugs: ["solar-inverter-buying-guide", "solar-panel-maintenance"],
    },
    {
        slug: "net-metering-explained",
        title: "Net Metering in India: How It Works & State-Wise Rules",
        metaDescription: "Understand net metering for rooftop solar in India. How bi-directional meters work, state-wise policies, surplus credits, and application process.",
        lastUpdated: "April 2026",
        readTime: "11 min",
        category: "Policy",
        heroSubtitle: "Net metering is what makes rooftop solar financially viable. Here's exactly how it works and what rules apply in your state.",
        toc: [
            { id: "what-is-net-metering", label: "What is Net Metering?" },
            { id: "how-it-works", label: "How It Works" },
            { id: "state-policies", label: "State-Wise Policies" },
            { id: "application", label: "Application Process" },
            { id: "surplus", label: "Surplus Credit Rules" },
            { id: "common-issues", label: "Common Issues" },
        ],
        faqs: [
            { q: "What happens to excess solar power I generate?", a: "Under net metering, excess power is exported to the grid and your meter runs backwards. At month-end, you only pay for the net consumption (import minus export)." },
            { q: "Do all states in India allow net metering?", a: "Yes, all states have net metering policies, but the rules vary significantly — especially regarding system size caps, surplus buyback rates, and settlement periods." },
            { q: "Can I sell solar power back to the grid?", a: "Under net metering, excess generation is adjusted against your bill. Under gross metering (available in some states), all power is sold at a feed-in tariff rate." },
        ],
        relatedSlugs: ["pm-surya-ghar-subsidy-2026", "solar-roi-calculator-guide"],
    },
    {
        slug: "solar-inverter-buying-guide",
        title: "Solar Inverter Buying Guide: String vs Micro vs Hybrid",
        metaDescription: "Complete guide to choosing the right solar inverter for your Indian home. Compare string, micro, and hybrid inverters — features, costs, and recommendations.",
        lastUpdated: "April 2026",
        readTime: "10 min",
        category: "Hardware",
        heroSubtitle: "The inverter is the brain of your solar system. Choose wrong, and you waste 20% of your investment. Here's how to choose right.",
        toc: [
            { id: "role", label: "Role of the Inverter" },
            { id: "string", label: "String Inverters" },
            { id: "micro", label: "Micro Inverters" },
            { id: "hybrid", label: "Hybrid Inverters" },
            { id: "comparison", label: "Comparison Table" },
            { id: "recommendations", label: "Our Recommendations" },
        ],
        faqs: [
            { q: "Which inverter type is best for homes with partial shade?", a: "Micro inverters are ideal for shaded roofs because each panel operates independently. A shaded panel won't drag down the entire array's output." },
            { q: "Can I add a battery to a string inverter later?", a: "No. String inverters are grid-tied only. If you want battery backup later, choose a hybrid inverter from the start." },
            { q: "What size inverter do I need for a 3kW system?", a: "For a 3kW panel array, choose a 3kW or 3.5kW inverter. Slight oversizing (10–15%) accounts for peak generation and reduces clipping losses." },
        ],
        relatedSlugs: ["solar-panel-types-india", "solar-panel-maintenance"],
    },
    {
        slug: "solar-panel-maintenance",
        title: "Solar Panel Cleaning & Maintenance: The Complete Schedule",
        metaDescription: "How to clean and maintain your solar panels in India. Monthly schedule, DIY vs professional cleaning, tools needed, and how to avoid losing ₹500/month to dust.",
        lastUpdated: "April 2026",
        readTime: "8 min",
        category: "Maintenance",
        heroSubtitle: "A thin layer of dust costs you ₹500 every month. Here's the complete maintenance schedule every Indian solar owner needs.",
        toc: [
            { id: "why-clean", label: "Why Cleaning Matters" },
            { id: "schedule", label: "Cleaning Schedule" },
            { id: "diy", label: "DIY Cleaning Guide" },
            { id: "tools", label: "Tools You Need" },
            { id: "professional", label: "Professional Cleaning" },
            { id: "annual-check", label: "Annual Inspection Checklist" },
        ],
        faqs: [
            { q: "How often should I clean solar panels in India?", a: "In most Indian cities, clean panels every 2–3 weeks during dry months (Oct–May) and monthly during monsoon. Dusty areas like Rajasthan may need weekly cleaning." },
            { q: "Can I use soap or detergent to clean panels?", a: "No. Use only plain water or a mild, non-abrasive solar panel cleaning solution. Detergents leave residue that attracts more dust and can damage the anti-reflective coating." },
            { q: "What time of day should I clean panels?", a: "Clean early morning (before 8 AM) or late evening when panels are cool. Cleaning hot panels with cold water can cause thermal shock and micro-cracks." },
        ],
        relatedSlugs: ["solar-panel-types-india", "solar-inverter-buying-guide"],
    },
    {
        slug: "solar-roi-calculator-guide",
        title: "How to Calculate Solar ROI: The Complete Formula Explained",
        metaDescription: "Learn how solar ROI is calculated in India. Understand the formula, variables, payback period, and real-world examples for different states and bill amounts.",
        lastUpdated: "April 2026",
        readTime: "9 min",
        category: "Finance",
        heroSubtitle: "Stop guessing. Learn the exact formula behind solar ROI calculations and understand what every variable means for your savings.",
        toc: [
            { id: "what-is-roi", label: "What is Solar ROI?" },
            { id: "formula", label: "The Formula" },
            { id: "variables", label: "Key Variables" },
            { id: "payback", label: "Payback Period" },
            { id: "examples", label: "Real-World Examples" },
            { id: "improve-roi", label: "How to Improve ROI" },
        ],
        faqs: [
            { q: "What is the average payback period for solar in India?", a: "For most Indian homeowners with bills above ₹3,000/month, the payback period is 3–5 years after PM Surya Ghar subsidy. High-tariff states like Maharashtra see payback under 3 years." },
            { q: "Does solar ROI account for panel degradation?", a: "Yes. Our calculator factors in 0.5% annual degradation for Mono-PERC panels. Over 25 years, total degradation is approximately 12%, meaning your panels still produce 88% of original output in year 25." },
            { q: "Is solar ROI better with or without a battery?", a: "Without battery, ROI is significantly better because battery costs add ₹60,000–₹1,20,000 to the system. Grid-tied systems with net metering offer the best financial returns." },
        ],
        relatedSlugs: ["pm-surya-ghar-subsidy-2026", "net-metering-explained"],
    },
];
