// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte'

import mdx from '@astrojs/mdx';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://crosstraining.wiki',
  integrations: [mdx(), tailwind(), svelte(), sitemap()],
});