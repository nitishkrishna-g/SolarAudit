import { MetadataRoute } from 'next'
import { solarData } from '@/data/solarData'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://solaraudit.in' // Make sure this matches actual domain in production

    const stateUrls = solarData.map((state) => ({
        url: `${baseUrl}/calculator/${state.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const cityUrls = solarData.flatMap((state) =>
        (state.cities || []).map((city) => ({
            url: `${baseUrl}/calculator/${state.slug}/${city.toLowerCase().replace(/ /g, '-')}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }))
    )

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...stateUrls,
        ...cityUrls,
    ]
}
