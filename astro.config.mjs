import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { createSidebarGroups } from "./src/scripts/createSidebarGroups";

const sidebarGroups = await createSidebarGroups();

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE,
  base: process.env.ASTRO_BASE,
  integrations: [

    starlight({
      title: "My Docs",
      editLink: {
        baseUrl: "https://github.com/idea-pool/js-assertion-cheat-sheet-astro/edit/main/docs/",
      },
      social: {
        github: "https://github.com/idea-pool",
      },
      sidebar: [
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Contribution",
          link: "/contribution",
        },
        ...sidebarGroups,
      ],
      components: {
        Footer: './src/components/Footer.astro',
      },
    }),
  ],
});
