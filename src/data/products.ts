export interface Product {
    id: string;
    title: string;
    description: string;
    category: "Inverters" | "Panels" | "Cleaning Kits" | "Batteries" | "Gadgets";
    affiliateLink: string;
    isPrime?: boolean;
    isBestSeller?: boolean;
    rating?: number;
    reviews?: number;
}

export const products: Product[] = [
    // ─── Inverters ───────────────────────────────────────────────
    {
        id: "inv-1",
        title: "Microtek iMerlyn 1050 Advanced Digital 900VA/725W Inverter",
        description: "Support 1 Battery with 3 Year Warranty for Home, Office & Shops.",
        category: "Inverters",
        affiliateLink: "https://amzn.to/4cMVjpf",
        isPrime: true,
        rating: 4.2,
        reviews: 850
    },
    {
        id: "inv-2",
        title: "V-Guard Prime 1150 Inverter — 1000VA / 12V Pure Sine Wave",
        description: "Reliable Power Backup with LED Display, Easy Installation & 3-Year Warranty for Home, Office & Shop.",
        category: "Inverters",
        affiliateLink: "https://amzn.to/4aBnIgJ",
        isPrime: true,
        rating: 4.4,
        reviews: 1200
    },
    {
        id: "inv-3",
        title: "Eastman 3kW Grid Tie Solar Inverter — Single Phase On-Grid",
        description: "For Residential Use with Smart Monitoring, Lightweight, High Output Efficiency, Surge Protection & 10 Years Warranty.",
        category: "Inverters",
        affiliateLink: "https://amzn.to/46Vjazi",
        rating: 4.3,
        reviews: 320
    },
    {
        id: "inv-4",
        title: "Luminous 5KW Solar Grid Tie Inverter — NXI 150 Single Phase",
        description: "High-capacity grid-tie inverter for larger residential and commercial solar setups.",
        category: "Inverters",
        affiliateLink: "https://amzn.to/46XKXPD",
        isBestSeller: true,
        rating: 4.5,
        reviews: 480
    },
    {
        id: "inv-5",
        title: "10.2KW 48V True Hybrid Solar Inverter (2026 Model)",
        description: "Heavy Duty Dual MPPT, Battery-Less Operation, Pure Sine Wave, WiFi App Monitoring for Home & Office.",
        category: "Inverters",
        affiliateLink: "https://amzn.to/46rRXUR",
        rating: 4.6,
        reviews: 150
    },

    // ─── Panels ──────────────────────────────────────────────────
    {
        id: "pnl-1",
        title: "Servotech 50 Watt Polycrystalline Solar Panel",
        description: "Portable & Lightweight PV Module. Durable, High-Efficiency Renewable Energy Solution. 25-Year Performance Warranty. Pack of 1.",
        category: "Panels",
        affiliateLink: "https://amzn.to/3MSQikm",
        rating: 4.1,
        reviews: 95
    },
    {
        id: "pnl-2",
        title: "WAAREE 150W Mono PERC Solar Panel — Pack of 2",
        description: "12 Volt Mono PERC Cells, High Efficiency, Lightweight & Easy Installation. 25 Years Performance Warranty. 150W × 2.",
        category: "Panels",
        affiliateLink: "https://amzn.to/478a16u",
        isPrime: true,
        rating: 4.5,
        reviews: 340
    },
    {
        id: "pnl-3",
        title: "WAAREE 150W Mono PERC Solar Panel — Pack of 1",
        description: "12 Volt Mono PERC Cells, High Efficiency, Eco-Friendly. 25 Years Performance Warranty.",
        category: "Panels",
        affiliateLink: "https://amzn.to/4s76YUj",
        rating: 4.4,
        reviews: 210
    },
    {
        id: "pnl-4",
        title: "WAAREE 365W Black Mono PERC Solar Panel — 108 Half-Cut Cells",
        description: "24V Module for Rooftop, Commercial, Balcony & Hybrid Solar Setups. 27-Year Output Warranty. Pack of 1.",
        category: "Panels",
        affiliateLink: "https://amzn.to/4rei4Gt",
        isBestSeller: true,
        rating: 4.7,
        reviews: 520
    },
    {
        id: "pnl-5",
        title: "WAAREE 365W Mono PERC Solar Panel — Pack of 2",
        description: "Black & White Backsheet, 24V Module for Rooftop & Commercial. 27-Year Output Warranty. 365W × 2.",
        category: "Panels",
        affiliateLink: "https://amzn.to/4kTczLD",
        isPrime: true,
        rating: 4.6,
        reviews: 280
    },
    {
        id: "pnl-6",
        title: "WAAREE 245W Mono PERC Solar Panel — Pack of 2",
        description: "High-Efficiency 24V Modules with Durable Glass & Aluminum Frame. 25Y Performance & 12Y Product Warranty.",
        category: "Panels",
        affiliateLink: "https://amzn.to/4tQQpxC",
        rating: 4.4,
        reviews: 180
    },
    {
        id: "pnl-7",
        title: "WAAREE 585W TOPCon Bifacial Solar Panel — Pack of 2 (1170W)",
        description: "High-Efficiency Mono PERC Half-Cut Technology. BIS & IEC Certified. Dual Glass Bifacial. 30 Years Output Warranty.",
        category: "Panels",
        affiliateLink: "https://amzn.to/3ZUBjJS",
        isPrime: true,
        isBestSeller: true,
        rating: 4.8,
        reviews: 95
    },
    {
        id: "pnl-8",
        title: "WAAREE 560-580W TOPCon DCR Bifacial Solar Panel — Pack of 28 (17.98 KW)",
        description: "High-Efficiency Mono PERC Half-Cut Tech. BIS & IEC Certified. Dual Glass Bifacial. 30 Years Output Warranty.",
        category: "Panels",
        affiliateLink: "https://amzn.to/4ruKFIl",
        rating: 4.7,
        reviews: 40
    },
    {
        id: "pnl-9",
        title: "Loom Solar Shark 600W TOPCon Bifacial Panel — Pack of 2",
        description: "N-Type, Dual Glass Black Frame, 144 Half-Cut Cells, IP68 Rated, BIS Certified. 25 Years Warranty.",
        category: "Panels",
        affiliateLink: "https://amzn.to/3OYTBqS",
        isPrime: true,
        rating: 4.6,
        reviews: 160
    },
    {
        id: "pnl-10",
        title: "Loom Solar Shark 575W TOPCon Bifacial Panel — Pack of 1",
        description: "N-Type, Dual Glass Black Frame, 144 Half-Cut Cells, IP68 Rated, Efficiency 22.30%. 25 Years Warranty.",
        category: "Panels",
        affiliateLink: "https://amzn.to/40sNfm9",
        rating: 4.5,
        reviews: 130
    },

    // ─── Cleaning Kits ──────────────────────────────────────────
    {
        id: "kit-1",
        title: "Hiker by Varroc Multi-Purpose Car Duster",
        description: "Wax-Treated Microfiber Brush for Scratch-Free Cleaning. Long Handle, Reusable. Ideal for Car, Truck, SUV & Home Use.",
        category: "Cleaning Kits",
        affiliateLink: "https://amzn.to/4aXS9g6",
        isPrime: true,
        rating: 4.2,
        reviews: 3400
    },
    {
        id: "kit-2",
        title: "IGAD Pole 17ft Washing Kit",
        description: "Water-fed Brush, Cobweb Duster, 10\" Squeegee & Soap Dispenser with 4-Stage Telescoping Pole (5-17ft).",
        category: "Cleaning Kits",
        affiliateLink: "https://amzn.to/4qZ1xpE",
        rating: 4.0,
        reviews: 280
    },
    {
        id: "kit-3",
        title: "15° Curved Car Cleaning Brush — 43\" Telescopic Handle",
        description: "Aluminum Alloy Long Rod Wash Mop with Soft Chenille Head. Scratch Free. For Van, Truck, Boat, RV & Roof.",
        category: "Cleaning Kits",
        affiliateLink: "https://amzn.to/4aLcsNp",
        rating: 4.1,
        reviews: 520
    },
    {
        id: "kit-4",
        title: "Connecticut Solar Panel Cleaning Brush Kit — 3 Meter",
        description: "Heavy-Duty Nylon Water Brush with PU Pipe & Aluminium Flexible Telescopic Pole (1M to 3M).",
        category: "Cleaning Kits",
        affiliateLink: "https://amzn.to/4rHlEdc",
        isBestSeller: true,
        rating: 4.3,
        reviews: 1500
    },
    {
        id: "kit-5",
        title: "Fieldstar Solar Cleaning Kit — 18FT/5.4M Telescopic Pole",
        description: "Window & Solar Panel Cleaning Brush with Nylon Bristles, Squeegee, Adjustable Bend Angle & Water Fed PU Pipe.",
        category: "Cleaning Kits",
        affiliateLink: "https://amzn.to/4s92Z9S",
        isPrime: true,
        rating: 4.4,
        reviews: 720
    },
    {
        id: "kit-6",
        title: "Solar Panel Sprinkler Cleaning System — 18-Piece Kit",
        description: "1/2-Inch PVC Nozzles, Tee Connectors & L-Type Clamps for Rooftop Panels (6 Pack).",
        category: "Cleaning Kits",
        affiliateLink: "https://amzn.to/3OBu9Ys",
        rating: 4.0,
        reviews: 190
    },
    {
        id: "kit-7",
        title: "Solar Panel Cleaning Brush — 6 Meter Water Fed",
        description: "Nylon Brush with Telescopic Pole, Water Pipe & Connector (6 Meter).",
        category: "Cleaning Kits",
        affiliateLink: "https://amzn.to/4b8YeHC",
        rating: 4.2,
        reviews: 640
    },

    // ─── Batteries ──────────────────────────────────────────────
    {
        id: "bat-1",
        title: "AYUDH 12V 100AH Lithium Ferro Phosphate (LiFePO4) Inverter Battery",
        description: "Solar Compatible, Long Life Up to 20 Years. Works with Any Normal Inverter. 5 Years Warranty.",
        category: "Batteries",
        affiliateLink: "https://amzn.to/4aQKTSS",
        isBestSeller: true,
        isPrime: true,
        rating: 4.5,
        reviews: 980
    },
    {
        id: "bat-2",
        title: "Exide SOLAR C10 Tubular Battery — 150AH",
        description: "Inverter Battery designed for solar applications. 5 Years Warranty.",
        category: "Batteries",
        affiliateLink: "https://amzn.to/3OqDdPY",
        isPrime: true,
        rating: 4.4,
        reviews: 2100
    },
    {
        id: "bat-3",
        title: "Genus Invoshakti Solar Tubular Battery — 150AH C10",
        description: "Best Suitable for Solar Applications at Home, Office & Shops. 60 Months Warranty.",
        category: "Batteries",
        affiliateLink: "https://amzn.to/4tZlnUy",
        rating: 4.3,
        reviews: 760
    },
    {
        id: "bat-4",
        title: "Luminous LPTT12150L Solar Tall Tubular Inverter Battery",
        description: "PCP Body Material for Home, Office & Shops. 36 Months Warranty.",
        category: "Batteries",
        affiliateLink: "https://amzn.to/3OGxDJ9",
        isPrime: true,
        rating: 4.4,
        reviews: 1450
    },
    {
        id: "bat-5",
        title: "48V 100Ah LiFePO4 Solar Battery with Smart BMS",
        description: "6000+ Cycles, RS485 & CAN Communication. Home Solar & Inverter Backup.",
        category: "Batteries",
        affiliateLink: "https://amzn.to/4kXl5JB",
        rating: 4.6,
        reviews: 120
    },
    {
        id: "bat-6",
        title: "Heavy Duty 120AH Lithium Battery — 48V Fully Smart with JK BMS",
        description: "LCD Display, 6000 Life Cycles, 50 Years Life. Mobile App Monitoring.",
        category: "Batteries",
        affiliateLink: "https://amzn.to/4aQSu48",
        rating: 4.5,
        reviews: 85
    },

    // ─── Gadgets ─────────────────────────────────────────────────
    {
        id: "gad-1",
        title: "Kenbrook Solar MC-4 Wire Connector + Spanner — 20 Set",
        description: "MC-4 Wire Connector with Spanner for Solar Panels. 20 Set + Spanner.",
        category: "Gadgets",
        affiliateLink: "https://amzn.to/4tNUv9H",
        isPrime: true,
        rating: 4.3,
        reviews: 1800
    },
    {
        id: "gad-2",
        title: "Kenbrook Solar MC-4 Wire Connector + Spanner — 10 Set",
        description: "MC-4 Wire Connector with Spanner for Solar Panels. 10 Set + Spanner.",
        category: "Gadgets",
        affiliateLink: "https://amzn.to/3MZjYwo",
        rating: 4.3,
        reviews: 1200
    },
    {
        id: "gad-3",
        title: "Spurtar Solar Powered Flashlight — 2000mAh, 500 Lumen",
        description: "LED Emergency Light, USB Rechargeable. 7 Modes with Seat Belt Cutter and Glass Breaker.",
        category: "Gadgets",
        affiliateLink: "https://amzn.to/3OJOHOp",
        rating: 4.1,
        reviews: 2400
    },
    {
        id: "gad-4",
        title: "8-in-1 Multi-Function Solar Powered Flashlight",
        description: "USB Rechargeable with Glass Breaker, Seatbelt Cutter & Alarm LED. For Camping, Hiking & Walking.",
        category: "Gadgets",
        affiliateLink: "https://amzn.to/4703iLZ",
        isBestSeller: true,
        rating: 4.2,
        reviews: 3100
    },
    {
        id: "gad-5",
        title: "PHILIPS 9000mAh LED Torch Light — 3000LM, 60W High Power",
        description: "Telescopic Zoomable Flashlight with 1000M Coverage. Rechargeable for Camping, Exploration & Emergencies.",
        category: "Gadgets",
        affiliateLink: "https://amzn.to/3OqAUwj",
        isPrime: true,
        rating: 4.5,
        reviews: 5600
    },
    {
        id: "gad-6",
        title: "Ambrane Solar Powerbank 10000mAh — 5 Solar Panels",
        description: "22.5W Fast Charging, USB & Type C Output. LED Flashlight. 5 Days Recharge in Sunlight.",
        category: "Gadgets",
        affiliateLink: "https://amzn.to/4tUSrgi",
        isPrime: true,
        rating: 4.0,
        reviews: 890
    },
    {
        id: "gad-7",
        title: "Tuya WiFi Smart Energy Meter 63A 230V — DIN Rail",
        description: "Earth Leakage & Surge Protection. AC 80-300V Power Monitor. Smart Life APP Remote Control.",
        category: "Gadgets",
        affiliateLink: "https://amzn.to/4qXHdVI",
        rating: 4.0,
        reviews: 320
    },
    {
        id: "gad-8",
        title: "ASHAPOWER NEON 70 Solar MPPT Charge Controller",
        description: "12/24/36/48V — 70A. Max Voc 210V, Max Watts 5100W.",
        category: "Gadgets",
        affiliateLink: "https://amzn.to/3MOrJ8m",
        rating: 4.4,
        reviews: 210
    },
    {
        id: "gad-9",
        title: "Luminous Solar Combo — NXG+ 1150 Inverter + 150Ah Battery + 170W Panel",
        description: "Off-Grid Power Solution for Home, Office & Shops. Complete solar combo package.",
        category: "Gadgets",
        affiliateLink: "https://amzn.to/4qYt8az",
        isBestSeller: true,
        isPrime: true,
        rating: 4.6,
        reviews: 430
    }
];
