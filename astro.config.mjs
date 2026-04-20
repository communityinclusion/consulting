import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://consulting.communityinclusion.org',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
