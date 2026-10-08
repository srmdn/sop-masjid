import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import publicLinks from './scripts/public-links.mjs';
export default defineConfig({
  site: 'https://srmdn.github.io', base: '/sop-masjid', output: 'static',
  trailingSlash: 'always', markdown: { processor: unified({ remarkPlugins: [publicLinks] }) },
});
