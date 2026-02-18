
export interface Guide {
    slug: string;
    title: string;
    excerpt: string;
    category: "Beginners" | "Buying" | "Govt" | "Installation" | "Maintenance";
    image: string;
    author: string;
    publishedAt: string;
    readTime: string;
    content: string; // HTML content for simplicity in this iteration
    featured?: boolean;
}

export const guides: Guide[] = [
    {
        slug: "pm-surya-ghar-guide",
        title: "PM Surya Ghar Muft Bijli Yojana: The Complete 2026 Application Guide",
        excerpt: "Step-by-step application process, document checklist, and how to avoid the 3 most common rejection reasons.",
        category: "Govt",
        image: "https://placehold.co/1200x630/10b981/ffffff?text=PM+Surya+Ghar+2026",
        author: "Nitish",
        publishedAt: "February 2026",
        readTime: "8 min read",
        featured: true,
        content: `
            <h2>Introduction</h2>
            <p>The PM Surya Ghar Muft Bijli Yojana is a game-changer for Indian households. It promises up to 300 units of free electricity per month for 1 crore households. But the application process can be tricky. This guide covers everything you need to know to claim your ₹78,000 subsidy without getting rejected.</p>

            <h3>Eligibility Criteria</h3>
            <div class="overflow-x-auto my-6">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-slate-100 dark:bg-slate-800">
                            <th class="p-4 border border-slate-200 dark:border-slate-700">Criteria</th>
                            <th class="p-4 border border-slate-200 dark:border-slate-700">Requirement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-4 border border-slate-200 dark:border-slate-700">Nationality</td>
                            <td class="p-4 border border-slate-200 dark:border-slate-700">Indian Resident</td>
                        </tr>
                         <tr>
                            <td class="p-4 border border-slate-200 dark:border-slate-700">Income</td>
                            <td class="p-4 border border-slate-200 dark:border-slate-700">Limit specific to local DISCOM policies, generally under ₹15 Lakhs/year for priority.</td>
                        </tr>
                         <tr>
                            <td class="p-4 border border-slate-200 dark:border-slate-700">Roof Rights</td>
                            <td class="p-4 border border-slate-200 dark:border-slate-700">Must own the roof or have valid NOC.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p><strong>Note:</strong> You must have a valid electricity connection in your name.</p>

            <h3>The "Secret" Document Checklist</h3>
            <p>Most applications get rejected because of missing or mismatched documents. ensure you have these ready:</p>
            <ul class="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Latest Electricity Bill:</strong> Must not be older than 3 months. The name on the bill MUST match the Aadhar name.</li>
                <li><strong>Aadhar Card:</strong> Verify your mobile number is linked for OTP.</li>
                <li><strong>Bank Passbook:</strong> For direct subsidy transfer (DBT). Ensure the account is active.</li>
                <li><strong>Roof Photo:</strong> A clear photo showing shadow-free space.</li>
            </ul>

            <!-- Internal Link Callout -->
            <div class="my-8 p-6 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl">
                <h4 class="font-bold text-emerald-800 dark:text-emerald-400 mb-2">Confused by the math?</h4>
                <p class="mb-4 text-emerald-900 dark:text-emerald-300">Use our Solar Calculator to check your exact subsidy eligibility and potential savings.</p>
                <a href="/#calculator-section" class="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition">Check Eligibility Now</a>
            </div>

            <h3>Step-by-Step Application Process</h3>
            <ol class="list-decimal pl-6 space-y-4 mb-6">
                <li><strong>Register:</strong> Go to <a href="#" class="text-blue-600 hover:underline">pmsuryaghar.gov.in</a> and register with your mobile number and Consumer Number.</li>
                <li><strong>Apply:</strong> Log in and fill out the rooftop solar application form.</li>
                <li><strong>Feasibility:</strong> Wait for DISCOM feasibility approval (usually 2-7 days).</li>
                <li><strong>Install:</strong> Get it installed by a registered vendor only.</li>
                <li><strong>Net Meter:</strong> Apply for a net meter.</li>
                <li><strong>Subsidy:</strong> Once the commissioning certificate is generated, submit your bank details. The subsidy reaches you in 30 days.</li>
            </ol>
        `
    },
    {
        slug: "best-solar-inverters-2026",
        title: "Best Solar Inverters in India (2026): Luminous vs. Microtek vs. Enphase",
        excerpt: "An unbiased comparison of efficiency, warranty, and price. Find out which inverter is best for 2BHK vs 4BHK homes.",
        category: "Buying",
        image: "https://placehold.co/1200x630/eab308/ffffff?text=Best+Inverters+2026",
        author: "Nitish",
        publishedAt: "February 2026",
        readTime: "12 min read",
        content: `
             <!-- Winner Box -->
            <div class="my-8 p-6 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 rounded-xl">
                <div class="flex flex-col md:flex-row gap-6 items-center">
                    <div class="shrink-0">
                         <img src="https://placehold.co/150x150/eab308/ffffff?text=Winner" alt="Winner" class="rounded-lg shadow-md" />
                    </div>
                    <div>
                        <h4 class="font-bold text-xl text-amber-900 dark:text-amber-100 mb-2">Top Pick: Luminous Zelio 1100</h4>
                        <p class="mb-4 text-amber-800 dark:text-amber-200">Best value for 2BHK homes. Silent operation and handles surge loads perfectly.</p>
                        <a href="https://www.amazon.in/dp/B00L4R6E96?tag=solaraudit-21" target="_blank" rel="nofollow noopener" class="inline-block bg-amber-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-600 transition shadow-lg shadow-amber-500/30">Check Price on Amazon</a>
                    </div>
                </div>
            </div>

            <h2>Which Inverter Should You Buy?</h2>
            <p>Choosing the right inverter is critical. It's the brain of your solar system. Here is a comparison of the top models available in 2026.</p>

            <h3>Comparison Chart</h3>
            <div class="overflow-x-auto my-6">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-slate-100 dark:bg-slate-800">
                            <th class="p-4 border border-slate-200 dark:border-slate-700">Model</th>
                            <th class="p-4 border border-slate-200 dark:border-slate-700">Efficiency</th>
                            <th class="p-4 border border-slate-200 dark:border-slate-700">Warranty</th>
                            <th class="p-4 border border-slate-200 dark:border-slate-700">Price (Approx)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-4 border border-slate-200 dark:border-slate-700 font-bold">Luminous Zelio</td>
                            <td class="p-4 border border-slate-200 dark:border-slate-700">94%</td>
                            <td class="p-4 border border-slate-200 dark:border-slate-700">24 Months</td>
                            <td class="p-4 border border-slate-200 dark:border-slate-700">₹6,500</td>
                        </tr>
                         <tr>
                            <td class="p-4 border border-slate-200 dark:border-slate-700 font-bold">Microtek Solar</td>
                            <td class="p-4 border border-slate-200 dark:border-slate-700">93%</td>
                            <td class="p-4 border border-slate-200 dark:border-slate-700">24 Months</td>
                            <td class="p-4 border border-slate-200 dark:border-slate-700">₹5,800</td>
                        </tr>
                         <tr>
                            <td class="p-4 border border-slate-200 dark:border-slate-700 font-bold">Enphase IQ7 (Micro)</td>
                            <td class="p-4 border border-slate-200 dark:border-slate-700">97%</td>
                            <td class="p-4 border border-slate-200 dark:border-slate-700">25 Years</td>
                            <td class="p-4 border border-slate-200 dark:border-slate-700">₹12,000 / panel</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>1. Luminous Zelio 1100</h3>
            <p>The Zelio 1100 is India's most popular pure sine wave inverter. It's safe for sensitive appliances like MacBooks and LED TVs.</p>
            <p><strong>Pros:</strong> Silent operation, 32-bit DSP processor, LED display for battery time.</p>
            <p><strong>Cons:</strong> Plastic body doesn't feel very premium.</p>

             <!-- Product Callout -->
            <div class="my-6 p-4 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-between gap-4 bg-white dark:bg-slate-900">
                <div class="flex items-center gap-4">
                    <img src="https://m.media-amazon.com/images/I/41-M+6q+LAL._SX300_SY300_QL70_FMwebp_.jpg" alt="Luminous" class="w-16 h-16 object-contain" />
                    <div>
                        <h5 class="font-bold text-slate-900 dark:text-white">Luminous Zelio 1100</h5>
                        <div class="text-amber-500 text-sm">★★★★☆ (2.4k reviews)</div>
                    </div>
                </div>
                <a href="https://www.amazon.in/dp/B00L4R6E96?tag=solaraudit-21" target="_blank" rel="nofollow noopener" class="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded font-bold text-sm hover:opacity-90 transition">View Deal</a>
            </div>
        `
    },
    {
        slug: "solar-maintenance-tools",
        title: "Essential Solar Maintenance: 5 Tools Every Owner Needs",
        excerpt: "Dust reduces generation by 15%. Save ₹500/month with these simple cleaning tools.",
        category: "Maintenance",
        image: "https://placehold.co/1200x630/3b82f6/ffffff?text=Maintenance+Tools",
        author: "Nitish",
        publishedAt: "February 2026",
        readTime: "5 min read",
        content: `
            <h2>Dust is the Enemy</h2>
            <p>Did you know a thin layer of dust can reduce your solar panel efficiency by up to 15%? If you have a 3kW system, that's roughly 2 units lost per day. Over a month, that's ₹500 down the drain.</p>
            
            <h3>1. Extendable Cleaning Brush</h3>
            <p>Don't risk your life climbing on the roof with a kitchen cloth. Use a professional water-fed pole.</p>
            
             <!-- Product Callout -->
            <div class="my-6 p-4 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-between gap-4 bg-white dark:bg-slate-900">
                <div class="flex items-center gap-4">
                     <div class="w-16 h-16 bg-slate-100 flex items-center justify-center rounded">
                        <span class="text-2xl">🧹</span>
                    </div>
                    <div>
                        <h5 class="font-bold text-slate-900 dark:text-white">Solar Cleaning Kit (3.5m)</h5>
                        <div class="text-amber-500 text-sm">★★★★★ (540 reviews)</div>
                    </div>
                </div>
                <a href="https://www.amazon.in/dp/B09X5K6G3T?tag=solaraudit-21" target="_blank" rel="nofollow noopener" class="bg-emerald-600 text-white px-4 py-2 rounded font-bold text-sm hover:bg-emerald-700 transition">Buy Now</a>
            </div>

            <h3>2. Smart Wi-Fi Energy Meter</h3>
            <p>Your inverter display is hidden in the garage. Get a smart meter to track your generation on your phone in real-time.</p>
             <!-- Product Callout -->
            <div class="my-6 p-4 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-between gap-4 bg-white dark:bg-slate-900">
                <div class="flex items-center gap-4">
                     <div class="w-16 h-16 bg-slate-100 flex items-center justify-center rounded">
                        <span class="text-2xl">⚡</span>
                    </div>
                    <div>
                        <h5 class="font-bold text-slate-900 dark:text-white">Smart Energy Meter (Tuya)</h5>
                        <div class="text-amber-500 text-sm">★★★★☆ (320 reviews)</div>
                    </div>
                </div>
                <a href="https://www.amazon.in/s?k=smart+energy+meter&tag=solaraudit-21" target="_blank" rel="nofollow noopener" class="bg-emerald-600 text-white px-4 py-2 rounded font-bold text-sm hover:bg-emerald-700 transition">Check Price</a>
            </div>
        `
    },
    {
        slug: "is-solar-worth-it-2026",
        title: "Is Solar Actually Worth It in 2026? A Brutally Honest ROI Analysis.",
        excerpt: "We break down the real math behind solar EMI vs. Electricity Bills. Warning: It's better than you think.",
        category: "Beginners",
        image: "https://placehold.co/1200x630/f43f5e/ffffff?text=Is+Solar+Worth+It%3F",
        author: "Nitish",
        publishedAt: "February 2026",
        readTime: "10 min read",
        content: `
            <h2>The Math Doesn't Lie</h2>
            <p>Let's look at a real example. A typical 3BHK household in India pays about ₹4,000 per month for electricity. That's ₹48,000 a year.</p>

            <h3>The Inflation Trap</h3>
            <p>Electricity tariffs in India rise by about 5% every year. In 10 years, that ₹4,000 bill will become ₹6,500. Without solar, you will pay over ₹7 Lakhs to the DISCOM in the next decade, with zero return.</p>

            <h3>The Solar Switch</h3>
            <p>A 3kW system costs about ₹1.5 Lakhs after subsidy. If you take a loan, your EMI will be roughly ₹3,500 for 5 years.</p>
            <p><strong>Result:</strong> Your EMI is LOWER than your current bill. And after 5 years, your electricity is FREE for the next 20 years.</p>

            <div class="my-8 p-6 bg-slate-900 text-white rounded-xl text-center">
                <h3 class="text-2xl font-bold mb-4">Don't believe us?</h3>
                <p class="mb-6 opacity-80">Run your own numbers with our 2026 Policy Calculator.</p>
                <a href="/#calculator-section" class="inline-block bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/30">Open Calculator</a>
            </div>
        `
    }
];
