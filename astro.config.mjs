import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from "rehype-pretty-code";

// https://astro.build/config
export default defineConfig({
  site: 'https://vasylkhorev.github.io',
  integrations: [tailwind(), mdx()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypePrettyCode],
  },
});