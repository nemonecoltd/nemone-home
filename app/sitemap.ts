import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://home.nemoneai.com',        lastModified: new Date(), priority: 1.0 },
    { url: 'https://home.nemoneai.com/#think', lastModified: new Date(), priority: 0.8 },
    { url: 'https://home.nemoneai.com/#build', lastModified: new Date(), priority: 0.9 },
    { url: 'https://home.nemoneai.com/#lab',   lastModified: new Date(), priority: 0.7 },
    { url: 'https://home.nemoneai.com/#media', lastModified: new Date(), priority: 0.6 },
  ]
}
