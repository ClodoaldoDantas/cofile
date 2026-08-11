// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import alpinejs from '@astrojs/alpinejs'

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Epilogue',
      cssVariable: '--font-epilogue',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
    },
  ],

  integrations: [alpinejs()],
})
