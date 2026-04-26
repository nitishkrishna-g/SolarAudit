export interface CityData {
    name: string;
    slug: string;
    blurb: string;
}

export interface StateData {
    slug: string;
    name: string;
    tariff: number; // Average cost per unit (INR) - Weighted Average of top slabs
    sunHours: number; // Peak sun hours per day
    discomName: string;
    localDiscomDetails: string; // SEO details
    panelOrientation: string;
    cities: string[]; // Programmatic SEO (legacy — kept for backwards compat)
    cityData?: CityData[]; // Rich city data with unique blurbs
    subsidyParams: {
        cap: number; // Central Max subsidy amount
        rateUpTo2kW: number; // Central Subsidy per kW up to 2kW
        rateAdditionalkW: number; // Central Subsidy per kW for additional capacity up to 3kW
    };
    stateSubsidy?: {
        ratePerKW: number; // Amount provided by state per kW
        maxAmount: number; // Maximum state subsidy cap
    };
    gbi?: number; // Generation Based Incentive (₹ per unit generated)
    statePolicyBrief: string; // Unique 400-600 word state policy content
    realCostExample: string; // Worked example for a major city in this state
    contactInfo: {
        discomHelpline: string;
        mnreHelpline: string;
        nodalAgency: string;
    };
}

export const solarData: StateData[] = [
    {
        slug: "uttar-pradesh",
        name: "Uttar Pradesh",
        tariff: 7.50,
        sunHours: 4.8,
        discomName: "UPPCL",
        localDiscomDetails: "Combines PM Surya Ghar with UPNEDA subsidy (₹15k/kW, max ₹30k).",
        panelOrientation: "South",
        cities: ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Prayagraj", "Noida", "Bareilly"],
        cityData: [
            { name: "Lucknow", slug: "lucknow", blurb: "Lucknow receives an average of 4.8 peak sun hours daily, making it well-suited for rooftop solar. The city's primary electricity distributor is UPPCL's Lucknow Zone, which has streamlined the net metering application process significantly since 2025 with online submission and real-time status tracking. Most residential installations in Lucknow are 2–3kW systems targeting monthly bills in the ₹2,000–₹5,000 range. A 3kW Mono-PERC system in Lucknow generates approximately 14–15 units per day in summer and 9–11 units during the December–January fog season. With UPNEDA's additional ₹30,000 subsidy stacked on top of the ₹78,000 central subsidy, the net cost for a 3kW system in Lucknow is among the lowest in India — approximately ₹72,000 after both subsidies." },
            { name: "Kanpur", slug: "kanpur", blurb: "Kanpur's industrial profile means higher electricity consumption and consequently stronger solar ROI. UPPCL's Kanpur Zone processes net metering applications in approximately 25–35 working days. The city averages 4.7 peak sun hours — slightly lower than rural UP due to industrial particulate pollution reducing irradiance. Households in Kanpur's residential areas of Kalyanpur, Kidwai Nagar, and Civil Lines commonly install 3–5kW systems. A 3kW system with annual cleaning generates approximately 15,000 units over 25 years in Kanpur conditions, saving an estimated ₹11–17 lakh depending on future tariff escalation." },
            { name: "Ghaziabad", slug: "ghaziabad", blurb: "Ghaziabad, part of the Delhi NCR region, benefits from Delhi's proximity but operates under UPPCL's Ghaziabad Zone rather than Delhi's BSES/Tata Power. This distinction matters: Ghaziabad residents do not qualify for Delhi's ₹3/unit GBI incentive but do qualify for UP's UPNEDA ₹30,000 state subsidy. The city's high residential density means many installations are done on apartment terraces with society approval. Air quality in Ghaziabad is among the worst in India — panels here require cleaning every 10–12 days during the October–April dry season. Despite this, high tariffs and available roof space make Ghaziabad an economically strong solar market." },
            { name: "Agra", slug: "agra", blurb: "Agra receives some of the highest solar irradiance in Uttar Pradesh, averaging 5.0 peak sun hours — significantly above the state average. The city's hot and dry climate, with over 300 clear days annually, ensures consistent high generation. Tourism-area buildings, including large heritage-sector commercial properties, have driven awareness of solar installation in Agra. Residential users in Agra's colonies such as Shahganj, Bodla, and Kamla Nagar typically see payback periods of 18–22 months for 3kW systems after applying both central and UPNEDA subsidies." },
            { name: "Varanasi", slug: "varanasi", blurb: "Varanasi receives an average of 4.7 peak sun hours, with peak generation during the March–June period. The city has seen accelerated solar adoption in the ghats and surrounding residential areas, partly driven by unreliable grid supply in older city zones. UPPCL's Varanasi Zone processes applications, and the city's flat-roofed architectural tradition makes mounting straightforward. Many homeowners in Varanasi choose hybrid inverter systems due to the 1–2 hour daily power cuts common in older mohallas, allowing battery backup during outages." },
            { name: "Meerut", slug: "meerut", blurb: "Meerut benefits from its proximity to the Gangetic plains and receives good solar irradiance of approximately 4.8 peak sun hours per day. The city's manufacturing base drives above-average household electricity consumption, making solar financially attractive. UPPCL's Meerut Zone has an established process for net metering, and most installations complete the full commissioning process within 60–70 days. The UPNEDA subsidy is consistently disbursed to Meerut applicants within 45 days of commissioning certificate submission based on recent applicant feedback." },
            { name: "Prayagraj", slug: "prayagraj", blurb: "Prayagraj (formerly Allahabad) is one of the sunniest cities in Uttar Pradesh, averaging 5.0 peak sun hours and experiencing fewer fog days than Lucknow or Kanpur during winter. The city's large residential bungalow stock in Civil Lines and George Town areas provides ample roof space for 3–5kW systems. The Kumbh Mela region's infrastructure investment has also improved grid reliability, making grid-tied systems more viable than they were five years ago." },
            { name: "Noida", slug: "noida", blurb: "Noida operates under UPPCL's Noida Zone and is one of the most active residential solar markets in UP. High-rise apartments dominate, and many housing societies have installed rooftop solar systems under society-level subsidy applications. Individual apartment owners can also apply if they have dedicated roof rights. Noida's proximity to Delhi means installer competition is intense, driving prices slightly lower than other UP cities. Average payback for a 3kW system in Noida: approximately 20–24 months." },
            { name: "Bareilly", slug: "bareilly", blurb: "Bareilly receives 4.8 peak sun hours and has a mix of residential bungalows and commercial complexes that are well-suited to rooftop solar. UPPCL's Bareilly Zone processes net metering applications and has an empanelled vendor list active in the district. The city's lower average electricity bill compared to Lucknow or Noida means solar system sizing should be matched carefully to actual consumption to avoid oversizing — a 2kW system is sufficient for most Bareilly households consuming 200–250 units per month." },
        ],
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
        stateSubsidy: {
            ratePerKW: 15000,
            maxAmount: 30000
        },
        gbi: 0,
        statePolicyBrief: "Uttar Pradesh offers the highest combined solar subsidy of any state in India in 2026, making it one of the most financially rewarding states to install rooftop solar. The Uttar Pradesh New and Renewable Energy Development Agency (UPNEDA) supplements the central PM Surya Ghar subsidy with an additional ₹15,000 per kW, capped at ₹30,000 for systems up to 2kW. Combined with the central subsidy of ₹78,000 for a 3kW system, a UP resident installing 3kW pays approximately ₹72,000 net after both subsidies — the lowest net cost in the country for this capacity. UPPCL (Uttar Pradesh Power Corporation Limited) manages electricity distribution across the state through five regional zones: Lucknow, Kanpur, Agra, Varanasi, and Meerut. Net metering applications are processed zone-wise, and the approval timeline varies between 15–30 working days depending on transformer capacity in the local area. The state's average retail tariff is ₹7.50 per unit for the residential slab above 200 units — below the national urban average, but the UPNEDA subsidy more than compensates for the lower tariff by dramatically reducing the net system cost. Solar irradiance in UP averages 4.7–5.0 peak sun hours per day, with the Bundelkhand and eastern plains regions receiving slightly higher irradiance. Fog during December–January in northern UP reduces generation by 25–35% during that period, but the annual generation total remains strong. UP also benefits from the MNRE's streamlined 2026 portal, which has reduced grievance resolution times. Homeowners who experience delays beyond 30 working days for any stage of the process can file a complaint directly on the PM Surya Ghar portal under 'Grievance Redressal' and the state DISCOM is required to respond within 7 working days.",
        realCostExample: "A 3kW Mono-PERC system installed in Lucknow by an MNRE-empanelled vendor in April 2026 had a gross cost of ₹1,80,000. After deducting the PM Surya Ghar central subsidy of ₹78,000 and the UPNEDA state subsidy of ₹30,000, the net cost was ₹72,000. The system generates approximately 14 units per day in summer and 9 units per day in winter, producing an average of 11.5 units per day annually. At ₹7.50 per unit, annual savings are approximately ₹31,500 in year one. With 5% annual tariff escalation, cumulative savings over 25 years exceed ₹12 lakh, giving an ROI of over 1,600% on the net investment.",
        contactInfo: {
            discomHelpline: "1912 (UPPCL Toll-Free)",
            mnreHelpline: "1800-180-3333",
            nodalAgency: "UPNEDA (Uttar Pradesh New & Renewable Energy Development Agency)",
        },
    },
    {
        slug: "delhi",
        name: "Delhi",
        tariff: 8.00,
        sunHours: 4.6,
        discomName: "BSES / Tata Power",
        localDiscomDetails: "Unique policy: Earn ₹3/unit generated (GBI) for 5 years.",
        panelOrientation: "South",
        cities: ["New Delhi", "Dwarka", "Rohini", "Saket", "Vasant Kunj", "Lajpat Nagar", "Karol Bagh"],
        cityData: [
            { name: "New Delhi", slug: "new-delhi", blurb: "New Delhi, serviced by BSES Rajdhani and Tata Power Delhi Distribution, is one of the most active residential solar markets in India. The city's unique GBI policy of ₹3 per unit generated for 5 years means a 3kW system earns an additional ₹15,000–₹18,000 over the first 5 years purely from the generation incentive, stacked on top of net metering savings. Average payback for a 3kW system in New Delhi after both subsidies and GBI is approximately 20–24 months. Government colony residents should check with their housing society, as RWAs in many Delhi government housing areas have pre-approved roof rights for individual members." },
            { name: "Dwarka", slug: "dwarka", blurb: "Dwarka, one of Delhi's largest planned residential districts, is serviced by BSES Rajdhani. The sector-based layout of Dwarka means many apartments share common terraces — requiring a society resolution before individual applications can proceed. Standalone DDA flats with private terrace rights can apply individually. Air quality in Dwarka is moderate to poor, making biweekly panel cleaning essential. A 2kW system on a Dwarka flat roof generates approximately 9–10 units per day in peak summer and 6–7 units in winter." },
            { name: "Rohini", slug: "rohini", blurb: "Rohini, serviced by TPDDL (Tata Power Delhi Distribution Limited), has a large stock of independent builder floors and plotted residences that are ideal for 2–4kW rooftop solar installations. TPDDL's online portal for net metering has reduced processing time in north Delhi, and most applications complete within 25 working days. The sector-wise street layout of Rohini minimises shading issues between adjacent buildings. Homeowners in Rohini Sectors 1–25 have reported high installer availability and competitive pricing driven by market density." },
            { name: "Saket", slug: "saket", blurb: "Saket, serviced by BSES Rajdhani, is a mixed-use area with high-income residential apartments, independent floors, and commercial complexes. The high tariff slab in Delhi makes solar returns strong — households paying ₹8,000–₹12,000 monthly typically achieve payback within 24 months. Saket's well-maintained apartment complexes frequently install 3–5kW systems with society approval, splitting the generation benefit across common area electricity bills." },
            { name: "Vasant Kunj", slug: "vasant-kunj", blurb: "Vasant Kunj, one of Delhi's premium residential areas, is serviced by BSES Rajdhani. The neighbourhood's bungalow-heavy zones (DDA housing) are well-suited to 3–5kW installations with ample south-facing roof area. Many Vasant Kunj residents combine solar with electric vehicle charging points, using the hybrid inverter's off-peak generation to charge EVs at near-zero cost. A 5kW system in Vasant Kunj generates approximately 23–25 units daily in summer, comfortably covering both household consumption and EV charging needs." },
            { name: "Lajpat Nagar", slug: "lajpat-nagar", blurb: "Lajpat Nagar, serviced by BSES Yamuna, is a dense mixed-use area where roof access can be complex in older constructions. Many properties here are multi-storey with shared terraces, requiring detailed society coordination. For independent floors with clear roof rights, Lajpat Nagar's high tariff profile makes solar financially very attractive. The commercial strip's moderate shading from surrounding buildings should be factored into the site survey." },
            { name: "Karol Bagh", slug: "karol-bagh", blurb: "Karol Bagh, primarily serviced by BSES Yamuna, is a compact urban area where available roof space is limited due to dense construction. Most viable installations here are 1–2kW systems on accessible flat rooftops. Despite the smaller system sizes, the Delhi GBI of ₹3/unit still applies, and the strong tariff of ₹8/unit ensures reasonable payback. Flat-roof architecture in Karol Bagh simplifies installation — most systems here use horizontal ballasted mounting structures that require no penetration into the roof surface." },
        ],
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
        stateSubsidy: {
            ratePerKW: 2000,
            maxAmount: 10000
        },
        gbi: 3,
        statePolicyBrief: "Delhi has the most layered solar incentive structure of any Indian state or union territory, making it unique in offering both a capital subsidy and a generation-based incentive (GBI) simultaneously. Beyond the PM Surya Ghar central subsidy of up to ₹78,000, Delhi's own policy adds a GBI of ₹3 per unit of solar electricity generated for the first 5 years of the system's operation. For a 3kW system generating approximately 13–14 units per day, this translates to ₹14,000–₹18,000 in additional income over the GBI period — a meaningful boost that is not available in any other Indian state. Delhi has two primary DISCOMs: BSES (Rajdhani and Yamuna) covering south, west, and east Delhi, and Tata Power Delhi Distribution Limited (TPDDL) covering north and northwest Delhi. Both have operational online net metering portals, and approval timelines are among the fastest in India at 15–25 working days. The Delhi government also runs an awareness campaign through Mukhyamantri Solar Power Yojana, which provides technical assistance to residents unfamiliar with the application process. Air quality is a critical operational factor in Delhi — PM2.5 levels mean panels here lose 20–30% output if not cleaned every 10–12 days during the October–May dry season. However, the strong tariff and GBI combination means Delhi installations still achieve excellent ROI even with higher cleaning frequency. Delhi's dense apartment stock requires extra coordination: DDA flats and multi-unit buildings need a society resolution and a designated contact for DISCOM liaison. Group housing societies can install a shared rooftop system and distribute benefits across members through net metering.",
        realCostExample: "A 3kW Mono-PERC system installed in Rohini, Delhi by an MNRE-empanelled installer in March 2026 had a gross cost of ₹1,82,000. After the central PM Surya Ghar subsidy of ₹78,000, the net cost was ₹1,04,000. The system generates approximately 13 units per day on average (accounting for winter fog and monsoon cloud cover). Annual savings from avoided electricity: ₹37,960 (at ₹8/unit). Additional GBI earnings: ₹14,235 per year for 5 years (₹3 × 13 units × 365 days). Combined year-one benefit: ₹52,195, giving a payback period of approximately 24 months.",
        contactInfo: {
            discomHelpline: "19123 (BSES) / 19124 (TPDDL)",
            mnreHelpline: "1800-180-3333",
            nodalAgency: "Delhi Solar Policy — DERC (Delhi Electricity Regulatory Commission)",
        },
    },
    {
        slug: "maharashtra",
        name: "Maharashtra",
        tariff: 11.0, // Top slab
        sunHours: 5.1,
        discomName: "MSEDCL",
        localDiscomDetails: "Highest tariffs in India; excellent ROI.",
        panelOrientation: "South",
        cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Aurangabad", "Solapur", "Amravati", "Kolhapur"],
        cityData: [
            { name: "Mumbai", slug: "mumbai", blurb: "Mumbai is serviced by three electricity providers: BEST (Brihanmumbai Electric Supply and Transport) for the island city, Tata Power for parts of the suburbs, and Adani Electricity for Dharavi and surrounding areas. MSEDCL covers MMR peripheral areas. Mumbai's extremely high land values make rooftop solar particularly valuable — the city's electricity tariff for high-consumption households reaches ₹11–12 per unit. The monsoon season (June–September) is heavy, and post-monsoon salt-grime from coastal exposure requires monthly professional cleaning for maximum efficiency. Despite limited roof space in high-rise buildings, group housing solar is active in Powai, Andheri, and Borivali." },
            { name: "Pune", slug: "pune", blurb: "Pune receives 5.2 peak sun hours daily and has Maharashtra's highest concentration of residential solar installations due to its favourable climate, large bungalow stock, and high electricity tariffs. MSEDCL's Pune Zone processes net metering in approximately 20–30 working days. IT hub areas like Kothrud, Baner, and Wakad have high-consumption households that achieve payback in under 2 years on 3–5kW systems. Pune's clear skies outside the monsoon season allow panels to operate near rated capacity for 8–9 months annually." },
            { name: "Nagpur", slug: "nagpur", blurb: "Nagpur, in Maharashtra's Vidarbha region, receives exceptional solar irradiance of 5.4 peak sun hours — among the highest in the state. The city is also one of the hottest in India, with summer temperatures regularly exceeding 45°C. This extreme heat marginally reduces panel efficiency but is more than offset by the high irradiance. MSEDCL's Nagpur Zone is active, and installer competition in the city has driven benchmark costs slightly below the Mumbai and Pune markets. Vidarbha's agricultural calendar also drives awareness of solar's value during summer months." },
            { name: "Nashik", slug: "nashik", blurb: "Nashik receives 5.1 peak sun hours and has a growing residential solar market driven by MSEDCL's high tariffs and the region's wine and agricultural industry, which has made renewables familiar. The city's moderate climate relative to Vidarbha means panels operate efficiently without significant heat-related losses. Nashik's large plot-based residential zones in Gangapur Road, Indira Nagar, and Cidco provide abundant roof space for 3–5kW systems." },
            { name: "Thane", slug: "thane", blurb: "Thane, immediately adjacent to Mumbai and serviced primarily by MSEDCL, is one of the fastest-growing residential solar markets in Maharashtra. High-density residential towers with cooperative housing societies have been adopting rooftop solar at an increasing rate since the PM Surya Ghar portal streamlined group applications. Thane's inland location reduces coastal salt exposure compared to Mumbai, extending panel life and reducing cleaning costs." },
            { name: "Aurangabad", slug: "aurangabad", blurb: "Aurangabad (officially Chhatrapati Sambhajinagar) receives 5.2 peak sun hours and has a mixed industrial-residential profile. The city's MSEDCL zone processes applications along with those from the broader Marathwada region. Industrial estates surrounding Aurangabad mean that some residential areas experience voltage fluctuations — making a quality inverter with wide voltage tolerance particularly important here. Average payback for residential solar in Aurangabad: 26–30 months." },
            { name: "Solapur", slug: "solapur", blurb: "Solapur is one of the sunniest cities in Maharashtra, receiving 5.4 peak sun hours — matching Nagpur. The city's textile industry drives high commercial electricity consumption, and spillover awareness has accelerated residential adoption. MSEDCL's Solapur Zone is active. The flat terrain and predominantly bungalow-based residential architecture make Solapur one of the most structurally straightforward installation environments in the state." },
            { name: "Amravati", slug: "amravati", blurb: "Amravati, in Vidarbha, receives 5.3 peak sun hours and has Maharashtra's second-highest solar potential after Nagpur. The city's moderate population density and land availability translate to larger rooftops and higher system capacities per installation — 5kW systems are common here, driven by high agricultural pump loads and domestic cooling needs. MSEDCL's Amravati Circle processes applications for the region." },
            { name: "Kolhapur", slug: "kolhapur", blurb: "Kolhapur in south Maharashtra receives approximately 4.9 peak sun hours — slightly lower than central Maharashtra due to Western Ghat cloud influence. However, the city's high tariff under MSEDCL and growing solar contractor network have made it a strong residential market. Kolhapur's moderate monsoon (July–September) is lighter than Mumbai's, meaning less downtime per year. The city is a regional hub for solar equipment distribution, keeping local prices competitive." },
        ],
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
        stateSubsidy: {
            ratePerKW: 0,
            maxAmount: 0
        },
        gbi: 0,
        statePolicyBrief: "Maharashtra has the highest retail electricity tariff of any major Indian state, with MSEDCL's upper residential slab reaching ₹11.00 per unit in 2026. This single factor makes Maharashtra the most financially rewarding state for residential solar investment — every unit generated from rooftop panels offsets electricity that would otherwise cost ₹11, giving Maharashtra homeowners the fastest payback period in India at 20–26 months for a standard 3kW system after PM Surya Ghar subsidy. MSEDCL (Maharashtra State Electricity Distribution Company Limited) is the primary DISCOM serving rural and semi-urban Maharashtra, while Mumbai city is served by BEST, Tata Power, and Adani Electricity. All operators have net metering frameworks, but the application process, timeline, and documentation requirements vary by operator. MSEDCL's net metering portal has seen significant improvements in 2026, with most straightforward residential applications completing within 20–30 working days. Maharashtra does not currently offer a state-level subsidy supplement on top of the PM Surya Ghar central subsidy. However, the state's high tariff structure means the central subsidy alone produces an exceptional financial return — the highest in India by payback period. Solar irradiance in Maharashtra varies by region: coastal areas (Mumbai, Thane, Konkan) average 4.8–5.0 peak sun hours, while Vidarbha (Nagpur, Amravati, Akola) averages 5.2–5.5 peak sun hours. The monsoon is heaviest in the Konkan coast, with 2,500–3,500mm of annual rainfall causing 3–4 months of significantly reduced solar generation. Vidarbha's interior receives less rain and maintains stronger generation year-round. Maharashtra's solar market has matured significantly — installer competition in Pune, Mumbai, and Nagpur has driven benchmark installation costs to ₹42,000–₹52,000 per kW for Tier-1 systems, below the national MNRE benchmark, giving homeowners more competitive pricing.",
        realCostExample: "A 3kW Mono-PERC bifacial system installed in Pune by an MNRE-empanelled installer in February 2026 had a gross cost of ₹1,58,000 — below MNRE benchmark due to Pune's competitive installer market. After the PM Surya Ghar central subsidy of ₹78,000, the net cost was ₹80,000. At Pune's average of 5.2 peak sun hours and MSEDCL's ₹11/unit tariff, annual savings are approximately ₹62,000 in year one. This gives a payback period of approximately 15 months — one of the shortest in the country. Over 25 years with 5% tariff escalation, total savings exceed ₹25 lakh on a net investment of ₹80,000.",
        contactInfo: {
            discomHelpline: "1912 (MSEDCL Toll-Free)",
            mnreHelpline: "1800-180-3333",
            nodalAgency: "MEDA (Maharashtra Energy Development Agency)",
        },
    },
    {
        slug: "karnataka",
        name: "Karnataka",
        tariff: 7.80, // Energy charge reduced, high fixed
        sunHours: 5.2,
        discomName: "BESCOM",
        localDiscomDetails: "High fixed charges, but solar offsets the ₹5.90+ energy charge.",
        panelOrientation: "South",
        cities: ["Bengaluru", "Mysuru", "Hubballi", "Mangaluru", "Belagavi", "Davangere", "Ballari", "Vijayapura", "Shivamogga"],
        cityData: [
            { name: "Bengaluru", slug: "bengaluru", blurb: "Bengaluru, serviced by BESCOM (Bangalore Electricity Supply Company), is India's most active residential solar city by installed capacity. The city's moderate climate — rarely exceeding 35°C even in summer — means panels operate near peak efficiency without significant heat derating. BESCOM's net metering process is well-established, with a dedicated solar portal and an average approval timeline of 20–28 working days. South-facing terraces in Bengaluru's layout-based residential areas (Banashankari, Jayanagar, JP Nagar, Whitefield) are highly suitable for 3–5kW installations. IT professionals in the city's electronics corridor are among the most solar-literate households in India, driving quality-focused purchasing decisions." },
            { name: "Mysuru", slug: "mysuru", blurb: "Mysuru, serviced by CESC (Chamundeshwari Electricity Supply Corporation), receives 5.2 peak sun hours. The city's palace-era bungalow stock and recently developed residential layouts provide ample south-facing roof areas. Mysuru's moderate industrial activity and primarily residential character mean electricity bills tend to be in the ₹1,500–₹4,000 range — making 2–3kW systems the most common sizing. CESC follows Karnataka's KERC net metering regulations with a smooth online application process." },
            { name: "Hubballi", slug: "hubballi", blurb: "Hubballi-Dharwad, serviced by HESCOM (Hubli Electricity Supply Company), receives 5.3 peak sun hours due to its inland north Karnataka location. The twin city's mixed residential and commercial profile supports a range of system sizes. Solar installer activity in Hubballi has grown substantially since 2024 with MNRE's expanded empanelment drive. The city's relatively flat terrain minimises shading complications, and Hubballi's annual rainfall (700–800mm) is lower than the Karnataka coast, meaning fewer generation-loss days." },
            { name: "Mangaluru", slug: "mangaluru", blurb: "Mangaluru, serviced by MESCOM (Mangalore Electricity Supply Company), receives approximately 4.8 peak sun hours — lower than inland Karnataka due to high monsoon cloud cover. The city receives over 3,500mm of annual rainfall, with a 4-month heavy monsoon season. Despite lower sun hours, Mangaluru's high electricity tariff under KERC still produces a financially viable payback of 30–36 months. Coastal installations require marine-grade panel frames and IP67 junction boxes due to salt-laden sea air. Professional cleaning is particularly important here due to salt deposits." },
            { name: "Belagavi", slug: "belagavi", blurb: "Belagavi (Belgaum), serviced by GESCOM (Gulbarga Electricity Supply Company), is located in north Karnataka's Deccan Plateau and receives 5.1 peak sun hours. The city's semi-arid character means fewer cloudy days and consistent generation. Belagavi's residential areas are a mix of independent houses and newer apartment complexes, both well-suited to solar. The region's agricultural sector has also driven awareness of solar's economic benefits, reducing homeowner hesitancy." },
            { name: "Davangere", slug: "davangere", blurb: "Davangere, centrally located in Karnataka and serviced by GESCOM, receives 5.2 peak sun hours. Known as a cotton-trading hub, the city has a large merchant-class residential market with above-average roof areas. Davangere's clear winter sky (unlike coastal Karnataka) means no generation loss from fog, making annual generation estimates more predictable than in southern or coastal districts." },
            { name: "Ballari", slug: "ballari", blurb: "Ballari, serviced by GESCOM, is one of Karnataka's hottest cities — summer temperatures regularly reach 40°C. This heat reduces Mono-PERC panel efficiency slightly but is offset by the high irradiance of 5.4 peak sun hours. Ballari's mining belt has created significant industrial electricity demand and awareness of energy costs, translating to high solar adoption intent in surrounding residential areas." },
            { name: "Vijayapura", slug: "vijayapura", blurb: "Vijayapura (Bijapur), serviced by GESCOM, receives some of Karnataka's best solar irradiance at 5.4 peak sun hours and has a semi-arid climate that minimises cloud-cover losses. The city's predominantly independent-house residential character means large, easily accessible flat rooftops are common. Vijayapura also benefits from some of Karnataka's lowest installation costs due to lower labour rates relative to Bengaluru." },
            { name: "Shivamogga", slug: "shivamogga", blurb: "Shivamogga, serviced by BESCOM, receives 4.9 peak sun hours and has a well-watered climate with a moderately long monsoon. Located near the Western Ghats, the city sees higher cloud cover than inland Karnataka. Despite lower sun hours, BESCOM's tariff structure makes solar financially viable. Shivamogga's large educational institution base has driven awareness of solar power among the city's population." },
        ],
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
        stateSubsidy: {
            ratePerKW: 0,
            maxAmount: 0
        },
        gbi: 0,
        statePolicyBrief: "Karnataka is consistently ranked among India's top three states for rooftop solar adoption, driven by BESCOM's (Bangalore Electricity Supply Company) proactive implementation of net metering, strong solar irradiance averaging 5.2 peak sun hours across most of the state, and high residential electricity awareness in Bengaluru's IT-dominated population. The state is served by five electricity supply companies: BESCOM (Bengaluru and surrounding districts), MESCOM (coastal districts), CESC (Mysuru region), GESCOM (northern Karnataka), and HESCOM (Hubballi-Dharwad). Each follows the Karnataka Electricity Regulatory Commission's (KERC) unified net metering framework, ensuring consistent rules across the state. Karnataka does not offer a state-specific subsidy supplement beyond the PM Surya Ghar central subsidy. However, the state's strong solar irradiance, BESCOM's established net metering process, and the competitive installer market in Bengaluru ensure that the central subsidy alone produces a compelling financial case. KERC's net metering regulations allow surplus credits to be carried forward for 12 months and settled at the Average Power Purchase Cost (APPC) — typically ₹3.50–₹4.00 per unit — at the end of the financial year. Karnataka's BESCOM processes net metering applications faster than most state DISCOMs — most straightforward residential applications complete in 20–28 working days. The state government has set a target of 1GW of rooftop solar by 2027 and is actively incentivising group housing and commercial installations. Bengaluru's moderate climate (rarely below 15°C in winter, rarely above 35°C in summer) means panels here operate consistently near their rated efficiency throughout the year, without significant seasonal temperature derating.",
        realCostExample: "A 3kW Mono-PERC system installed in Bengaluru's JP Nagar by an MNRE-empanelled installer in January 2026 had a gross cost of ₹1,65,000. After the PM Surya Ghar central subsidy of ₹78,000, the net cost was ₹87,000. At Bengaluru's 5.2 peak sun hours and BESCOM's residential tariff of ₹7.80 per unit, the system generates approximately 15 units per day on average and saves approximately ₹42,700 per year in year one. Payback period: approximately 25 months. Over 25 years with 5% tariff escalation, total savings exceed ₹17 lakh.",
        contactInfo: {
            discomHelpline: "1912 (BESCOM Toll-Free)",
            mnreHelpline: "1800-180-3333",
            nodalAgency: "KREDL (Karnataka Renewable Energy Development Limited)",
        },
    },
    {
        slug: "gujarat",
        name: "Gujarat",
        tariff: 5.50,
        sunHours: 5.6,
        discomName: "GUVNL",
        localDiscomDetails: "High sun hours compensate for lower tariff. Surplus buyback ~₹2.25/unit.",
        panelOrientation: "South",
        cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar"],
        cityData: [
            { name: "Ahmedabad", slug: "ahmedabad", blurb: "Ahmedabad receives 5.6 peak sun hours daily and is one of India's highest-irradiance major cities. Serviced by DGVCL and UGVCL under GUVNL, Ahmedabad has a well-developed net metering framework. The city's extreme summer heat (45–48°C in May) slightly reduces panel efficiency by 4–6%, but this is more than offset by the exceptional irradiance. Industrial areas like Naroda and Vatwa drive commercial solar demand. The residential sectors of Satellite, Prahlad Nagar, and Science City are active markets for 3–5kW residential systems." },
            { name: "Surat", slug: "surat", blurb: "Surat, serviced by DGVCL and PASCHIM Gujarat Vij Company, is Gujarat's commercial powerhouse and one of the country's highest electricity consumers per capita. The city's diamond and textile industries create enormous commercial solar demand, and residential awareness has followed. Surat receives 5.5 peak sun hours and has an established installer network. The city's coastal proximity means salt cleaning is important for panel longevity. GUVNL's surplus buyback at ₹2.25 per unit is consistent across the state including Surat." },
            { name: "Vadodara", slug: "vadodara", blurb: "Vadodara (Baroda), serviced by MGVCL, is centrally located in Gujarat and receives 5.5 peak sun hours. The city's large GNFC and IPCL industrial belt drives awareness of energy cost management. Vadodara's residential areas — Alkapuri, Manjalpur, Gorwa — have a mix of independent bungalows and apartment complexes, both suitable for solar. MGVCL's net metering process in Vadodara typically completes in 25–35 working days." },
            { name: "Rajkot", slug: "rajkot", blurb: "Rajkot, in Saurashtra, is one of Gujarat's sunniest cities, averaging 5.8 peak sun hours due to its semi-arid inland location. The city's predominantly flat-roofed construction and minimal shade obstacles make it structurally ideal for residential solar. UGVCL manages Rajkot's electricity distribution. Rajkot's relatively lower tariff (₹5.50/unit) means payback is 30–38 months, but the lower system cost in the Saurashtra market and high generation hours maintain a strong long-term ROI." },
            { name: "Bhavnagar", slug: "bhavnagar", blurb: "Bhavnagar, a coastal Saurashtra city serviced by PGVCL (Paschim Gujarat Vij Company), receives 5.5 peak sun hours. The city's port and industrial base drive commercial solar, with residential following. Coastal salt exposure requires quarterly panel cleaning with fresh water to prevent glass degradation. Bhavnagar's large residential plot sizes allow 3–5kW systems with room to expand." },
            { name: "Jamnagar", slug: "jamnagar", blurb: "Jamnagar, home to the world's largest oil refinery and serviced by PGVCL, receives 5.7 peak sun hours — among the highest in the state. Despite being a petroleum-industry city, residential solar adoption has grown as households recognise the financial benefits of ₹5.50/unit tariff offset by high generation. The city's hot and dry climate minimises rain-related generation losses." },
            { name: "Junagadh", slug: "junagadh", blurb: "Junagadh, at the base of the Girnar hills and serviced by PGVCL, receives 5.4 peak sun hours. The city's moderate size and residential character mean a primarily 1–3kW market. Junagadh's agricultural hinterland has strong awareness of solar water pumping, and this literacy has contributed to faster residential solar adoption than in similarly sized cities elsewhere." },
            { name: "Gandhinagar", slug: "gandhinagar", blurb: "Gandhinagar, Gujarat's planned capital and serviced by UGVCL, is one of India's greenest capitals with a tree-lined grid layout. The planned city's wide roads and government quarters reduce shading, making solar installation straightforward. Gandhinagar also benefits from being the state capital — GUVNL's headquarters are here, and policy implementation tends to be fastest in the capital district." },
        ],
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
        stateSubsidy: {
            ratePerKW: 0,
            maxAmount: 0
        },
        gbi: 0,
        statePolicyBrief: "Gujarat leads India in total rooftop solar installed capacity and has the highest solar irradiance of any major Indian state, averaging 5.5–5.8 peak sun hours daily across most of the state. This exceptional irradiance compensates for Gujarat's relatively lower residential electricity tariff of ₹5.50 per unit — a tariff that is significantly below Maharashtra and Tamil Nadu. GUVNL (Gujarat Urja Vikas Nigam Limited) manages electricity distribution through five regional DISCOMs: PGVCL (Paschim), MGVCL (Madhya), UGVCL (Uttar), DGVCL (Dakshin), and Torrent Power in Ahmedabad and Surat city areas. Gujarat's net metering framework was one of the earliest established in India and remains one of the most mature, with surplus credits carried forward for 12 months and surplus at year-end purchased at ₹2.25 per unit — a specific buyback rate rather than a lapse. This buyback policy is a meaningful benefit for households that generate more than they consume seasonally. Gujarat does not currently offer a state-specific subsidy on top of the PM Surya Ghar central subsidy. However, the state's GUVNL has historically been proactive in enabling DISCOM approvals and has one of the faster net metering timelines nationally — 20–30 working days for straightforward residential applications. Gujarat's extreme summer temperatures (Ahmedabad and Rajkot regularly exceed 45°C in May) cause marginal efficiency reductions for panels, but the high irradiance during these same months more than offsets the heat derating. The state's solar irradiance data is among the most comprehensively documented in India, making generation projections highly accurate.",
        realCostExample: "A 3kW Mono-PERC system installed in Ahmedabad by an MNRE-empanelled installer in December 2025 had a gross cost of ₹1,72,000. After the PM Surya Ghar central subsidy of ₹78,000, the net cost was ₹94,000. At Ahmedabad's exceptional 5.6 peak sun hours, the system generates approximately 17 units per day on average. At GUVNL's tariff of ₹5.50 per unit, annual savings are approximately ₹34,100 in year one. Additionally, surplus generation during summer vacation months earns a buyback of ₹2.25 per unit under GUVNL's net metering settlement. Payback period: approximately 32 months. Over 25 years, total savings exceed ₹14 lakh.",
        contactInfo: {
            discomHelpline: "1912 (GUVNL Toll-Free)",
            mnreHelpline: "1800-180-3333",
            nodalAgency: "GEDA (Gujarat Energy Development Agency)",
        },
    },
    {
        slug: "tamil-nadu",
        name: "Tamil Nadu",
        tariff: 8.50, // Slab rates steep >500 units
        sunHours: 5.3,
        discomName: "TANGEDCO",
        localDiscomDetails: "Excellent ROI for heavy users (>500 units).",
        panelOrientation: "South",
        cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Erode", "Vellore"],
        cityData: [
            { name: "Chennai", slug: "chennai", blurb: "Chennai, serviced by TANGEDCO's Chennai Metropolitan Area (CMA) zone, receives 5.1 peak sun hours on average — slightly lower than inland Tamil Nadu due to the Bay of Bengal's sea breeze and higher humidity. Chennai's coastal character means salt-laden sea air is a factor for panel maintenance, requiring monthly cleaning with fresh water. The city's extreme summer heat (April–June, averaging 38–42°C) reduces panel efficiency slightly, but high irradiance compensates. Adyar, Anna Nagar, Velachery, and OMR corridor are the most active residential solar zones." },
            { name: "Coimbatore", slug: "coimbatore", blurb: "Coimbatore, serviced by TANGEDCO's Coimbatore Zone, receives 5.4 peak sun hours and is Tamil Nadu's leading residential solar market outside Chennai. The city's textile and engineering industries drive high electricity consumption, and a strong entrepreneurial culture has accelerated solar adoption. Coimbatore's moderate climate (lower than Chennai's heat, minimal coastal salt) means panels here have longer service intervals and lower maintenance costs." },
            { name: "Madurai", slug: "madurai", blurb: "Madurai, serviced by TANGEDCO's Southern Zone, is one of Tamil Nadu's hottest cities, with summer temperatures regularly reaching 40°C. This heat reduces panel efficiency but is offset by high irradiance of 5.5 peak sun hours. Madurai's traditional bungalow-centric residential architecture provides ample south-facing roof area. The city has a growing installer network with competitive pricing driven by regional market expansion." },
            { name: "Tiruchirappalli", slug: "tiruchirappalli", blurb: "Tiruchirappalli (Trichy), serviced by TANGEDCO's Central Zone, receives 5.4 peak sun hours. The city's engineering and manufacturing sector drives institutional awareness of energy costs. Residential solar adoption in Trichy has been growing steadily, driven by TANGEDCO's high upper-slab tariff. The city's predominantly flat-roofed construction is ideal for north-south oriented panel placement." },
            { name: "Salem", slug: "salem", blurb: "Salem, in Tamil Nadu's central region, receives 5.5 peak sun hours — above the state average. Serviced by TANGEDCO's Northern Zone, Salem's steel and textile industries create high industrial electricity demand, and awareness has percolated into the residential market. Salem's hot dry climate means panels operate near rated efficiency throughout the year with minimal heat losses relative to coastal areas." },
            { name: "Tirunelveli", slug: "tirunelveli", blurb: "Tirunelveli, in Tamil Nadu's deep south, benefits from proximity to the Thar Desert wind belt and receives some of the highest solar irradiance in the state at 5.6 peak sun hours. The district is also a leading wind energy zone. TANGEDCO's Southern Zone manages Tirunelveli, and net metering applications complete in approximately 25–35 working days. The city's agricultural and commercial profile means many installations are paired with water pumping or commercial loads." },
            { name: "Tiruppur", slug: "tiruppur", blurb: "Tiruppur, India's hosiery and knitwear capital, has some of the highest industrial electricity consumption per capita in Tamil Nadu. Residential spillover from this industrial awareness has made Tiruppur a strong solar market. TANGEDCO's Western Zone manages the district. Average payback for a 3kW residential system in Tiruppur: approximately 24–28 months." },
            { name: "Erode", slug: "erode", blurb: "Erode, serviced by TANGEDCO's Northern Zone, receives 5.4 peak sun hours and is a major trading hub. The city's high-consumption households — driven by AC use in the region's hot summers — have above-average electricity bills, making solar financially compelling. Erode's largely independent-house residential areas provide straightforward roof access." },
            { name: "Vellore", slug: "vellore", blurb: "Vellore, serviced by TANGEDCO's Northern Zone, receives 5.2 peak sun hours. The city's large educational and medical institution base drives awareness of energy efficiency. Residential solar is growing in areas like Sathuvachari and Gandhi Nagar. Vellore's moderate climate — cooler than Salem or Madurai — means panels operate with minimal heat derating year-round." },
        ],
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
        stateSubsidy: {
            ratePerKW: 0,
            maxAmount: 0
        },
        gbi: 0,
        statePolicyBrief: "Tamil Nadu is one of India's most compelling solar markets, combining high solar irradiance averaging 5.3 peak sun hours across the state with TANGEDCO's steep upper-slab residential tariff of ₹8.50 per unit. For households consuming above 500 units monthly — a common threshold in cities like Chennai, Coimbatore, and Madurai — the financial return from solar is exceptional, with payback periods of 22–28 months for standard 3kW systems. TANGEDCO (Tamil Nadu Generation and Distribution Corporation) is the sole electricity distribution company across the state. The organisation's net metering framework follows TNERC's (Tamil Nadu Electricity Regulatory Commission) regulations, which allow monthly credit rollover and annual surplus settlement at the Average Power Purchase Cost. The state's net metering approval timeline has improved since 2024 and averages 25–35 working days for residential applications. Tamil Nadu does not currently offer a state-level subsidy supplement on top of PM Surya Ghar. However, the state government has aggressively promoted rooftop solar through awareness campaigns, and TANGEDCO field offices in most districts maintain an active empanelled vendor list. Tamil Nadu's solar irradiance is strongest in the southern districts (Tirunelveli, Thoothukudi, Ramanathapuram) at 5.5–5.7 peak sun hours, driven by proximity to the country's southern latitudes and clearer skies. Chennai's coastal humidity and sea breeze slightly reduce irradiance and increase panel surface contamination, but the city's high electricity tariff still delivers strong ROI. Tamil Nadu's heavy monsoon (October–December in the northeast, June–September in the northwest) means generation dips significantly during the rainy season. Annual generation estimates should use state irradiance data rather than summer-only projections to set realistic expectations.",
        realCostExample: "A 3kW Mono-PERC system installed in Coimbatore by an MNRE-empanelled installer in November 2025 had a gross cost of ₹1,68,000. After the PM Surya Ghar central subsidy of ₹78,000, the net cost was ₹90,000. At 5.4 peak sun hours, the system generates approximately 15.5 units per day on average. At TANGEDCO's ₹8.50 per unit residential tariff, annual savings are approximately ₹48,000 in year one. Payback period: approximately 22 months. Over 25 years with 5% annual tariff escalation, total savings exceed ₹19 lakh.",
        contactInfo: {
            discomHelpline: "1912 (TANGEDCO Toll-Free)",
            mnreHelpline: "1800-180-3333",
            nodalAgency: "TEDA (Tamil Nadu Energy Development Agency)",
        },
    },
    {
        slug: "india", // Fallback slug
        name: "India (General)",
        tariff: 7.50, // General average
        sunHours: 5.0,
        discomName: "State DISCOM",
        localDiscomDetails: "PM Surya Ghar scheme applies nationwide.",
        panelOrientation: "South",
        cities: [],
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
        stateSubsidy: {
            ratePerKW: 0,
            maxAmount: 0
        },
        gbi: 0,
        statePolicyBrief: "The PM Surya Ghar Muft Bijli Yojana is a national scheme available to all Indian residential households. The central government provides a direct benefit transfer subsidy of up to ₹78,000 for systems of 3kW and above. India averages 5.0 peak sun hours nationally, though this varies significantly by state and season. All states have net metering frameworks, with surplus electricity credits rolled over monthly and settled annually. Applications are processed through pmsuryaghar.gov.in. Select your state above for precise subsidy amounts, local DISCOM details, and accurate ROI projections based on your specific tariff.",
        realCostExample: "A 3kW Mono-PERC system installed in a typical Indian city with ₹7.50/unit tariff and 5.0 peak sun hours generates approximately 14 units per day. Annual savings at ₹7.50/unit: approximately ₹38,325. After the PM Surya Ghar central subsidy of ₹78,000 on a gross system cost of ₹1,80,000, the net cost is ₹1,02,000. Payback period: approximately 32 months. Use the state-specific calculator for accurate figures.",
        contactInfo: {
            discomHelpline: "Contact your state DISCOM",
            mnreHelpline: "1800-180-3333",
            nodalAgency: "MNRE (Ministry of New & Renewable Energy)",
        },
    },
];
