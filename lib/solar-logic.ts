import { INDIAN_SUBSIDY, STATE_TARIFFS, StateName } from './constants';

export const calculateSubsidy = (systemCapacityKw: number): number => {
    if (systemCapacityKw <= 0) return 0;

    let subsidy = 0;

    if (systemCapacityKw <= 2) {
        subsidy = systemCapacityKw * INDIAN_SUBSIDY.upto2kW;
    } else if (systemCapacityKw <= 3) {
        subsidy = (2 * INDIAN_SUBSIDY.upto2kW) + ((systemCapacityKw - 2) * INDIAN_SUBSIDY.step3rdkW); // Wait, logic says "18000 for the 3rd kW". 
        // The rule is: 
        // 0-2 kW: 30k/kW -> 2kW = 60k
        // 2-3 kW: 18k for the 3rd kW -> 3kW = 60k + 18k = 78k.
        // So if cap is 2.5kW: 60k + (0.5 * 18k) ? 
        // Usually these are slab based or per kW. "18,000 for the 3rd kW" usually means flat 18k for that specific kW or pro-rata?
        // "Total Cap: ₹78,000 (fixed for anything >= 3 kW)" implies it caps at 3kW.
        // Let's assume pro-rata for the 2-3kW slab.
        const remaining = systemCapacityKw - 2;
        subsidy = (2 * INDIAN_SUBSIDY.upto2kW) + (remaining * INDIAN_SUBSIDY.step3rdkW);
    } else {
        subsidy = INDIAN_SUBSIDY.maxSubsidy;
    }

    return Math.min(subsidy, INDIAN_SUBSIDY.maxSubsidy);
};

export const calculateMonthlySavings = (monthlyBill: number, state: StateName) => {
    // Reverse calculate consumption from bill
    // This is complex due to slabs. Simplified approximation or detailed reverse slab?
    // Let's simplified: Bill / AvgRate? No, we have slabs.
    // We need to find Consumption units (kWh) such that Bill(kWh) approx MonthlyBill.

    // This is a "Hero Audit" estimation. 
    // For now, let's assume a simpler heuristic or iterative approach if needed, 
    // or just estimated generation * tariff_at_consumption_level.

    // Let's return just the potential generation value for now and we can refine the savings logic 
    // when we implement the full flow.
    return 0; // Placeholder
};

export const calculateSoilingLoss = (daysSinceRain: number, avgAqi: number): number => {
    // Algorithm: If days_since_rain > 14 AND avg_aqi > 150, set soiling_loss_factor = 0.85 (15% loss).
    if (daysSinceRain > 14 && avgAqi > 150) {
        return 15; // 15% loss
    }
    return 0;
};
