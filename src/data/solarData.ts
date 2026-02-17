export interface StateData {
    slug: string;
    name: string;
    tariff: number; // Average cost per unit (INR)
    sunHours: number; // Peak sun hours per day
    discomName: string;
    localDiscomDetails: string; // New field for SEO
    panelOrientation: string;
    subsidyParams: {
        cap: number; // Max subsidy amount
        rateUpTo2kW: number; // Subsidy per kW up to 2kW
        rateAdditionalkW: number; // Subsidy per kW for additional capacity up to 3kW
    };
}

export const solarData: StateData[] = [
    {
        slug: "uttar-pradesh",
        name: "Uttar Pradesh",
        tariff: 7.5,
        sunHours: 4.8,
        discomName: "UPPCL",
        localDiscomDetails: "UPPCL's residential tariffs are among the highest in North India.",
        panelOrientation: "South",
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
    },
    {
        slug: "maharashtra",
        name: "Maharashtra",
        tariff: 8.2,
        sunHours: 5.1,
        discomName: "MSEDCL",
        localDiscomDetails: "MSEDCL consumers face steep slab-wise tariff hikes.",
        panelOrientation: "South",
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
    },
    {
        slug: "karnataka",
        name: "Karnataka",
        tariff: 8.4,
        sunHours: 5.2,
        discomName: "BESCOM",
        localDiscomDetails: "BESCOM rates have seen a significant hike recently.",
        panelOrientation: "South",
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
    },
    {
        slug: "gujarat",
        name: "Gujarat",
        tariff: 6.8,
        sunHours: 5.6,
        discomName: "GUVNL",
        localDiscomDetails: "GUVNL allows for excellent solar generation availability.",
        panelOrientation: "South",
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
    },
    {
        slug: "delhi",
        name: "Delhi",
        tariff: 8.0,
        sunHours: 4.6,
        discomName: "BSES",
        localDiscomDetails: "BSES supports net metering for residential users effectively.",
        panelOrientation: "South",
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
    },
    {
        slug: "tamil-nadu",
        name: "Tamil Nadu",
        tariff: 7.8,
        sunHours: 5.3,
        discomName: "TANGEDCO",
        localDiscomDetails: "TANGEDCO grid availability encourages solar adoption.",
        panelOrientation: "South",
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
    },
    {
        slug: "india", // Fallback slug
        name: "India (General)",
        tariff: 7.0, // National Average
        sunHours: 5.0,
        discomName: "State DISCOM",
        localDiscomDetails: "State DISCOMs generally support net metering policies.",
        panelOrientation: "South",
        subsidyParams: {
            cap: 78000,
            rateUpTo2kW: 30000,
            rateAdditionalkW: 18000,
        },
    },
];
