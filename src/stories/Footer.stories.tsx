import Footer from '@/components/Footer.astro'
import { menu } from '@/constants/menu'
import { socialMedia } from '@/constants/social-media'

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
