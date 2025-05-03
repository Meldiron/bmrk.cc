import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://bookmarks.almostapps.eu`,
      lastModified: new Date(),
    },
    {
      url: `https://bookmarks.almostapps.eu/account`,
      lastModified: new Date(),
    },
    {
      url: `https://bookmarks.almostapps.eu/terms`,
      lastModified: new Date(),
    },
    {
      url: `https://bookmarks.almostapps.eu/privacy`,
      lastModified: new Date(),
    },
  ];
}
