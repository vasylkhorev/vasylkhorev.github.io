import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
  site: 'https://vasylkhorev.github.io',
  integrations: [tailwind(), mdx(
      {
        syntaxHighlight: false,
        rehypePlugins: [
          /**
           * Adds ids to headings
           */
          rehypeSlug,
          [
            /**
             * Enhances code blocks with syntax highlighting, line numbers,
             * titles, and allows highlighting specific lines and words
             */

            rehypePrettyCode,
            {
              theme: 'github-dark',
            },
          ],
        ],
      }
  ), sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypePrettyCode],
  },
});