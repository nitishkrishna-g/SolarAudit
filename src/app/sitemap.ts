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
            priority: 0.7,
        },
    ];

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

    return [...staticRoutes, ...stateUrls, ...cityUrls];
}
