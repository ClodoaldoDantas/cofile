import Header from '@/components/header/Header.astro'
import { menu } from '@/data/menu'

export default {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = {
  args: {
    menu,
  },
}
