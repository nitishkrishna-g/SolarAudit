export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    category: "Inverters" | "Panels" | "Cleaning Kits" | "Batteries" | "Gadgets";
    image: string;
    affiliateLink: string;
    isPrime?: boolean;
    isBestSeller?: boolean;
    rating?: number;
    reviews?: number;
}

export const products: Product[] = [
    {
        id: "inv-1",
        title: "Luminous Solar Hybrid Inverter 1400",
        description: "1100VA/12V Home UPS for Solar off-grid applications. Supports up to 1000W panels.",
        price: 18500,
        category: "Inverters",
        image: "https://m.media-amazon.com/images/I/41s7p2E9+QL._SX679_.jpg", // Retaining real image
        affiliateLink: "https://www.amazon.in/s?k=luminous+solar+inverter&tag=solaraudit-21",
        isPrime: true,
        isBestSeller: true,
        rating: 4.5,
        reviews: 2400
    },
    {
        id: "inv-2",
        title: "Microtek Solar IP 111248 1KVA",
        description: "Pure Sinewave Technology. Intelligent Solar Conversion. 98% Efficiency.",
        price: 16000,
        category: "Inverters",
        image: "https://placehold.co/400x300/e2e8f0/1e293b?text=Solar+Inverter",
        affiliateLink: "https://www.amazon.in/s?k=microtek+solar+inverter&tag=solaraudit-21",
        rating: 4.2,
        reviews: 850
    },
    {
        id: "pnl-1",
        title: "Loom Solar Panel 550W Mono Perc",
        description: "Half Cut Technology for low light performance. 24 Volts. Shark Bi-Facial.",
        price: 15500,
        category: "Panels",
        image: "https://placehold.co/400x300/e2e8f0/1e293b?text=Solar+Panel",
        affiliateLink: "https://www.amazon.in/s?k=loom+solar+panel+550w&tag=solaraudit-21",
        isPrime: true,
        rating: 4.7,
        reviews: 120
    },
    {
        id: "kit-1",
        title: "Solar Panel Cleaning Brush with Water Fed Pole",
        description: "3.5m Telescopic handle. Soft bristles to prevent scratches. Standard hose connector.",
        price: 1499,
        category: "Cleaning Kits",
        image: "https://placehold.co/400x300/e2e8f0/1e293b?text=Cleaning+Kit",
        affiliateLink: "https://www.amazon.in/s?k=solar+panel+cleaning+kit&tag=solaraudit-21",
        isBestSeller: true,
        rating: 4.3,
        reviews: 5400
    },
    {
        id: "gad-1",
        title: "Solar Garden Lights (Pack of 4)",
        description: "Waterproof LED decorative sticks for pathway/garden. Auto on/off sensor.",
        price: 899,
        category: "Gadgets",
        image: "https://placehold.co/400x300/e2e8f0/1e293b?text=Garden+Lights",
        affiliateLink: "https://www.amazon.in/s?k=solar+garden+lights&tag=solaraudit-21",
        isPrime: true,
        rating: 4.1,
        reviews: 10500
    },
    {
        id: "bat-1",
        title: "Luminous Red Charge RC 18000 150 Ah",
        description: "Tall Tubular Battery for Home, Office & Shops. 36 Months Warranty.",
        price: 14500,
        category: "Batteries",
        image: "https://placehold.co/400x300/e2e8f0/1e293b?text=Battery",
        affiliateLink: "https://www.amazon.in/s?k=luminous+solar+battery&tag=solaraudit-21",
        isPrime: true,
        rating: 4.4,
        reviews: 8900
    },
    {
        id: "gad-2",
        title: "Smart Wi-Fi Energy Meter",
        description: "Monitor Voltage, Current & KWh. App support (Tuya/Smart Life).",
        price: 2299,
        category: "Gadgets",
        image: "https://placehold.co/400x300/e2e8f0/1e293b?text=Smart+Meter",
        affiliateLink: "https://www.amazon.in/s?k=smart+energy+meter&tag=solaraudit-21",
        isBestSeller: false,
        rating: 4.0,
        reviews: 320
    },
    // Add more mock products to fill the grid
    {
        id: "pnl-2",
        title: "Tata Power Solar 335W Poly",
        description: "Polycrystalline module. Trusted Indian brand. 25-year performance warranty.",
        price: 9000,
        category: "Panels",
        image: "https://placehold.co/400x300/e2e8f0/1e293b?text=Solar+Panel",
        affiliateLink: "https://www.amazon.in/s?k=tata+solar+panel&tag=solaraudit-21",
        rating: 4.6,
        reviews: 45
    },
    {
        id: "inv-3",
        title: "Smarten Superb 2500VA 24V",
        description: "MPPT Solar PCU. Supports 1800W solar panel. 30% more efficient.",
        price: 19500,
        category: "Inverters",
        image: "https://placehold.co/400x300/e2e8f0/1e293b?text=Solar+PCU",
        affiliateLink: "https://www.amazon.in/s?k=smarten+solar+pcu&tag=solaraudit-21",
        rating: 4.3,
        reviews: 110
    }
];
