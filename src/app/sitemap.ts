import { MetadataRoute } from "next";
import { solarData } from "@/data/solarData";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://solaraudit.vercel.app";

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${baseUrl}/shop`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/guides`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.4,
        },
        {
            url: `${baseUrl}/disclaimer`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.4,
        },
    ];

    const guideSlugs = [
        "pm-surya-ghar-subsidy-2026",
        "solar-panel-types-india",
        "net-metering-explained",
        "solar-inverter-buying-guide",
        "solar-panel-maintenance",
        "solar-roi-calculator-guide",
    ];

    const guideUrls: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
        url: `${baseUrl}/guides/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    const stateUrls: MetadataRoute.Sitemap = solarData.map((state) => ({
        url: `${baseUrl}/calculator/${state.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
    }));

    const cityUrls: MetadataRoute.Sitemap = solarData.flatMap((state) =>
        (state.cities || []).map((city) => ({
            url: `${baseUrl}/calculator/${state.slug}/${city.toLowerCase().replace(/ /g, "-")}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        }))
    );

    return [...staticRoutes, ...guideUrls, ...stateUrls, ...cityUrls];
}
