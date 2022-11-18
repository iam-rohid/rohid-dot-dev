import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";
import readingTime from "reading-time";
import { toString } from "mdast-util-to-string";

// https://astro.build/config
export default defineConfig({
  site: "https://rohid.dev",
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  mdx: {
    syntaxHighlight: "prism",
    drafts: true,
  },
  integrations: [tailwind(), sitemap(), mdx()],
});

function remarkReadingTime() {
  return function (tree, file) {
    const textOnPage = toString(tree);
    file.data.astro.frontmatter.readingTime = readingTime(textOnPage).text;
  };
}
