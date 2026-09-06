import Picture from '@/components/ui/Picture.astro'

import heroMobile from '@/assets/hero-mobile.png'
import heroDesktop from '@/assets/hero-desktop.png'

export default {
  title: 'Components/Picture',
  component: Picture,
  argTypes: {
    mobile: {
      control: false,
    },
    desktop: {
      control: false,
    },
  },
}

export const Default = {
  args: {
    mobile: heroMobile.src,
    desktop: heroDesktop.src,
    alt: 'Mobile device showing app with currency exchange rate information',
  },
}
