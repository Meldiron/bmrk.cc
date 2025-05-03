import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://bmrk-cc-liard.vercel.app`,
      lastModified: new Date(),
    },
    {
      url: `https://bmrk-cc-liard.vercel.app/account`,
      lastModified: new Date(),
    },
    {
      url: `https://bmrk-cc-liard.vercel.app/terms`,
      lastModified: new Date(),
    },
    {
      url: `https://bmrk-cc-liard.vercel.app/privacy`,
      lastModified: new Date(),
    },
  ];
}
