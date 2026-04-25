"use client";

import { PmSuryaGhar } from "./articles/PmSuryaGhar";
import { SolarPanelTypes } from "./articles/SolarPanelTypes";
import { NetMetering } from "./articles/NetMetering";
import { InverterGuide } from "./articles/InverterGuide";
import { Maintenance } from "./articles/Maintenance";
import { RoiGuide } from "./articles/RoiGuide";

const articleMap: Record<string, React.FC> = {
    "pm-surya-ghar-subsidy-2026": PmSuryaGhar,
    "solar-panel-types-india": SolarPanelTypes,
    "net-metering-explained": NetMetering,
    "solar-inverter-buying-guide": InverterGuide,
    "solar-panel-maintenance": Maintenance,
    "solar-roi-calculator-guide": RoiGuide,
};

export function GuideBody({ slug }: { slug: string }) {
    const Article = articleMap[slug];
    if (!Article) return null;
    return <Article />;
}
