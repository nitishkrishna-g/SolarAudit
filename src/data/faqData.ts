export const faqItems = [
    {
        value: "item-1",
        question: "Is the ₹78,000 PM Surya Ghar subsidy guaranteed for every applicant?",
        answer:
            "The ₹78,000 subsidy is the maximum amount under PM Surya Ghar and applies to systems of 3 kW and above. For a 1 kW system the central subsidy is ₹30,000, and for 2 kW it is ₹60,000. Eligibility is guaranteed for any Indian residential household that meets the criteria — valid electricity connection in the applicant's name, no existing grid-connected solar, and installation done through an MNRE-empanelled vendor. The amount is credited directly to your Aadhaar-linked bank account via DBT within 30 working days of submitting the commissioning certificate on the national portal. There is no competitive queue or lottery; every eligible household that completes the process receives their entitled subsidy.",
    },
    {
        value: "item-2",
        question: "What happens to the extra solar units I generate but don't use that month?",
        answer:
            "Under net metering — mandatory across all Indian states — excess units are exported to the grid and recorded by your bi-directional meter. At the end of each billing cycle, your DISCOM calculates net consumption (units imported minus units exported). If your exports exceed imports, the surplus units are carried forward as a credit to the next month. Most states follow an annual settlement cycle: any remaining credits at the end of the financial year (March 31) are either carried forward, paid out at a buyback rate (typically ₹1.50–₹3/unit depending on your state), or forfeited depending on your state's specific net metering regulation. States like Delhi additionally offer a GBI (Generation Based Incentive) of ₹3 per unit generated for the first 5 years, regardless of consumption.",
    },
    {
        value: "item-3",
        question: "Do solar panels still generate power during overcast skies or rain?",
        answer:
            "Yes — solar panels generate electricity from diffuse daylight, not just direct sunlight. On heavily overcast days, a typical Mono-PERC panel produces 15–25% of its rated capacity. During light cloud cover, generation falls to 50–70%. India averages over 300 clear or partly cloudy days per year, so annual generation projections remain reliable even accounting for the monsoon months. The 3–4 months of reduced generation (June–September in most regions) are offset by the high-production months of October–May. Our calculator already accounts for this seasonal variation using IMD irradiance data specific to your state, so your projected annual savings already reflect a realistic monsoon impact.",
    },
    {
        value: "item-4",
        question: "What does solar panel maintenance actually cost per year?",
        answer:
            "Annual maintenance for a residential rooftop solar system in India is minimal. If you clean panels yourself every 2–3 weeks using plain water and a soft brush (the standard recommendation for most Indian cities), the only cost is water — roughly ₹0. If you hire a professional cleaning service, expect to pay ₹500–₹1,500 per visit, or ₹3,000–₹8,000 per year for quarterly professional cleaning. Inverter servicing is recommended every 2 years and costs ₹800–₹2,000 per service call. Panel mounting structures need a visual inspection annually for rust or loose bolts — a 30-minute DIY task. The biggest maintenance cost is inverter replacement, which typically happens at year 10–12 and costs ₹12,000–₹35,000 depending on type. Factored over 25 years, total maintenance averages ₹3,000–₹6,000 per year — a fraction of the monthly savings.",
    },
    {
        value: "item-5",
        question: "How do I apply for the PM Surya Ghar subsidy online — what are the exact steps?",
        answer:
            "The complete process has nine stages. First, register on pmsuryaghar.gov.in with your electricity consumer number and verify via Aadhaar OTP. Second, select your state, district, and DISCOM. Third, choose your system capacity (1–10 kW). Fourth, select a vendor exclusively from the MNRE-empanelled installer list — using a non-empanelled vendor means forfeiting the subsidy. Fifth, wait for your DISCOM's feasibility approval (7–15 working days). Sixth, the installer sets up the system (1–3 days). Seventh, apply for bi-directional net metering through your DISCOM (approval takes 15–30 working days). Eighth, your DISCOM inspects and issues a commissioning certificate. Ninth, upload the certificate and bank details on the portal — the subsidy arrives within 30 working days via Direct Benefit Transfer. Total timeline from registration to subsidy receipt: approximately 2–3 months.",
    },
    {
        value: "item-6",
        question: "What is the minimum roof area required for a residential solar installation?",
        answer:
            "The minimum usable shadow-free roof area depends on the panel technology you choose. For a 1 kW Mono-PERC system, you need approximately 60–65 square feet of unshaded area. Polycrystalline panels require 75–85 square feet for the same 1 kW capacity due to their lower efficiency. As a rule of thumb: multiply your desired capacity in kW by 65 (for Mono-PERC) or 80 (for Polycrystalline) to get the approximate required area in square feet. A 3 kW Mono-PERC system therefore needs around 195 square feet — roughly the size of one large bedroom. Roof area occupied by water tanks, AC units, ventilation shafts, or structures that cast shadows must not be included in your calculation. Apartment rooftops with society approval are eligible if the calculated shadow-free area is available.",
    },
    {
        value: "item-7",
        question: "How long do solar panels actually last in Indian weather conditions?",
        answer:
            "Quality Tier-1 solar panels carry a 25-year linear performance warranty, which guarantees that output will not drop below 80% of rated capacity at year 25. In Indian conditions — high heat, dust, monsoon humidity, and occasional hail — Mono-PERC panels degrade at approximately 0.5% per year, while Polycrystalline panels degrade slightly faster at 0.7% per year. This means a 3 kW Mono-PERC system that produces 12 units per day on day one will still produce around 10.6 units per day at year 25. Inverters are the component with a shorter lifespan — grid-tied string inverters typically last 10–12 years, hybrid inverters 8–10 years. BIS-certified panels from manufacturers like WAAREE, Adani Solar, or Vikram Solar are best suited to handle Indian UV exposure and temperature extremes.",
    },
    {
        value: "item-8",
        question: "Can apartment residents or flat owners benefit from rooftop solar?",
        answer:
            "Yes, with some conditions. Individual flat owners in a multi-storey building can go solar if the housing society passes a resolution granting rooftop rights and the flat's electricity connection is in the applicant's name. Group housing societies can also collectively install a community solar system on the shared terrace and distribute the benefits across multiple units through a sub-metering arrangement. For high-rise apartments above the 6th floor, the panel area per unit becomes limited, but smaller 1–2 kW rooftop systems are still financially viable. Some DISCOMs also allow virtual net metering (VNM), where the generation from a single rooftop meter is distributed across multiple apartment meters in the same society — check with your local DISCOM for availability.",
    },
    {
        value: "item-9",
        question: "Does a solar system work during a grid power failure?",
        answer:
            "A standard grid-tied (on-grid) solar system automatically shuts down during a power outage — this is a mandatory safety feature called anti-islanding protection, which prevents accidental live current from reaching the grid while linemen are working. This means your lights go off during a power cut even if your panels are generating. To have backup power during outages, you need a hybrid inverter with a battery bank. Battery systems add ₹60,000–₹1,50,000 to the cost depending on capacity, which lengthens the payback period. For most urban households with reliable grid supply (less than 2 hours of daily outage), a grid-tied system without batteries gives the best financial return. For areas with frequent long outages — rural Uttar Pradesh, parts of Rajasthan — a hybrid system may be worth the extra cost.",
    },
    {
        value: "item-10",
        question: "How does net metering billing actually work on a month-to-month basis?",
        answer:
            "Your bi-directional meter records two readings: the import register (units drawn from the grid) and the export register (units you pushed back to the grid). At billing time, your DISCOM calculates: Net Units = Import − Export. If net units are positive, you pay for the difference at your normal slab tariff. If net units are negative (you exported more than you imported), the surplus is typically carried forward as a unit credit, not converted to cash — most DISCOMs only do a monetary settlement once a year. Your bill will still include a fixed charge (demand charge or meter rent), which is payable regardless of net generation. This fixed charge typically ranges from ₹50–₹200/month depending on your state and connection category. After solar, most households with bills above ₹4,000/month see their net monthly payment drop to just this fixed charge.",
    },
];
