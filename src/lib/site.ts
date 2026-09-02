const configuredSiteUrl = process.env.SITE_URL?.trim();

export const siteUrl = (() => {
  if (!configuredSiteUrl) return undefined;

  try {
    const url = new URL(configuredSiteUrl);
    return url.protocol === "https:" ? url : undefined;
  } catch {
    return undefined;
  }
})();
