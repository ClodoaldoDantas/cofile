import Footer from '@/components/Footer.astro'
import { menu } from '@/data/menu'
import { socialMedia } from '@/data/social-media'

export default {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = {
  args: {
    menu,
    socialMedia,
    copyright: 'Design by Masbobz Works',
  },
}
