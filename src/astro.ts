import unplugin from ".";
import type { Options } from "./types";

// biome-ignore lint: its from default template
export default (options: Options): any => ({
  name: "unplugin-excel",
  hooks: {
    // biome-ignore lint: its from default template
    "astro:config:setup": async (astro: any) => {
      astro.config.vite.plugins ||= [];
      astro.config.vite.plugins.push(unplugin.vite(options));
    },
  },
});
