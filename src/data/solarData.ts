export interface StateData {
    slug: string;
    name: string;
    tariff: number; // Average cost per unit (INR) - Weighted Average of top slabs
    sunHours: number; // Peak sun hours per day
    discomName: string;
    localDiscomDetails: string; // SEO details
    panelOrientation: string;
    cities: string[]; // Programmatic SEO
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
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
        stateSubsidy: {
            ratePerKW: 15000,
            maxAmount: 30000
        },
        gbi: 0
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
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
        stateSubsidy: {
            ratePerKW: 2000,
            maxAmount: 10000
        },
        gbi: 3
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
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
        stateSubsidy: {
            ratePerKW: 0,
            maxAmount: 0
        },
        gbi: 0
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
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
        stateSubsidy: {
            ratePerKW: 0,
            maxAmount: 0
        },
        gbi: 0
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
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
        stateSubsidy: {
            ratePerKW: 0,
            maxAmount: 0
        },
        gbi: 0
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
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
        stateSubsidy: {
            ratePerKW: 0,
            maxAmount: 0
        },
        gbi: 0
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
        gbi: 0
    },
];
