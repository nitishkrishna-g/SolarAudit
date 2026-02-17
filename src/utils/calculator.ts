import { StateData } from "@/data/solarData";

interface CalculationResult {
    unitsPerMonth: number;
    systemSize: number; // kW
    totalCost: number; // INR
    subsidy: number; // INR
    netInvestment: number; // INR
    monthlySavings: number; // INR
    annualSavings: number; // INR
    lifetimeSavings: number; // INR (25 years)
    paybackPeriod: number; // Years
    treesSaved: number; // Estimated
}

export function calculateSolar(
    monthlyBill: number,
    state: StateData,
    roofType: "concrete" | "tiled"
): CalculationResult {
    // 1. Calculate average monthly units consumed
    const unitsPerMonth = monthlyBill / state.tariff;

    // 2. Calculate required system size
    // Formula: Units / 30 / SunHours
    // Efficiency Adjustment: Concrete roofs are 5% more efficient for placement
    const efficiencyFactor = roofType === "concrete" ? 1.0 : 0.95;
    let rawSystemSize = unitsPerMonth / 30 / state.sunHours / efficiencyFactor;

    // Round up to nearest 0.5 kW for realistic panel configurations, min 1kW
    let systemSize = Math.max(1, Math.ceil(rawSystemSize * 2) / 2);

    // 3. Calculate Project Cost
    // Assumption: ₹50,000 per kW for standard implementation
    const costPerKW = 50000;
    const totalCost = systemSize * costPerKW;

    // 4. Calculate Subsidy (PM Surya Ghar: Muft Bijli Yojana 2024-2026 specs)
    // - ₹30,000 per kW up to 2 kW
    // - ₹18,000 per kW for additional capacity up to 3 kW
    // - Total subsidy capped at ₹78,000 for systems > 3 kW

    let subsidy = 0;
    const { rateUpTo2kW, rateAdditionalkW, cap } = state.subsidyParams;

    if (systemSize <= 2) {
        subsidy = systemSize * rateUpTo2kW;
    } else if (systemSize <= 3) {
        subsidy = (2 * rateUpTo2kW) + ((systemSize - 2) * rateAdditionalkW);
    } else {
        subsidy = cap;
    }

    // 5. Net Investment
    const netInvestment = totalCost - subsidy;

    // 6. Savings Calculation
    // Generation per month = System Size * Sun Hours * 30 * Efficiency
    const monthlyGeneration = systemSize * state.sunHours * 30 * efficiencyFactor;
    // Cap savings at consumption (Net Metering logic: excess is banked/sold but usually offsets bill first)
    // For simplicity, we assume 100% offset value at tariff rate
    const monthlySavings = monthlyGeneration * state.tariff;

    const annualSavings = monthlySavings * 12;

    // Lifetime Savings (25 Years)
    // Inflation model: Tariff increases by 3% per year
    // PV degradation: 0.5% per year
    let lifetimeSavings = 0;
    let currentTariff = state.tariff;
    let currentGeneration = monthlyGeneration * 12;

    for (let year = 1; year <= 25; year++) {
        lifetimeSavings += currentGeneration * currentTariff;
        currentTariff *= 1.03; // 3% tariff hike
        currentGeneration *= 0.995; // 0.5% degradation
    }

    // Payback Period
    const paybackPeriod = netInvestment / annualSavings;

    // Environmental Impact (Trees Saved)
    // approx 0.82 kg CO2 per kWh in India. 1 mature tree absorbs ~20kg CO2/year.
    const annualCO2 = (monthlyGeneration * 12 * 0.82);
    const treesSaved = Math.round((annualCO2 * 25) / 20); // Over 25 years

    return {
        unitsPerMonth: Math.round(unitsPerMonth),
        systemSize,
        totalCost,
        subsidy,
        netInvestment,
        monthlySavings: Math.round(monthlySavings),
        annualSavings: Math.round(annualSavings),
        lifetimeSavings: Math.round(lifetimeSavings),
        paybackPeriod: parseFloat(paybackPeriod.toFixed(1)),
        treesSaved
    };
}
