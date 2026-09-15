// @ts-check
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    imageService: "compile",
    prerenderEnvironment: "node",
  }),
  integrations: [sitemap({ filter: (page) => !page.endsWith("/404/") })],
  output: "server",
  redirects: {
    "/analytics": "https://cloud.umami.is/share/fbMpK8dlvWeG41PO",
    "/contact": "https://wa.me/+6281357811710",
  },
  site: "https://melangkahstudio.site",
  trailingSlash: "always",
});
