// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  redirects: {
    "/analytics": "https://cloud.umami.is/share/fbMpK8dlvWeG41PO",
  },
  // TODO: we dont have a domain yet, so this is just a placeholder
  site: "https://melangkah-studio.com",
  trailingSlash: "always",
});
