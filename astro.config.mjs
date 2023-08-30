import { defineConfig } from 'astro/config'

import sitemap from 'astro-sitemap'
import compress from 'astro-compress'
import compressor from 'astro-compressor'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  integrations: [sitemap(), compress(), compressor(), robotsTxt()],
  site: 'https://split.vercel.app'
})
