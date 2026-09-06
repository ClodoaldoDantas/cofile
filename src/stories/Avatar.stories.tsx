import Avatar from '@/components/ui/Avatar.astro'

export default {
  title: 'Components/Avatar',
  component: Avatar,
}

export const Default = {
  args: {
    src: 'https://github.com/clodoaldodantas.png',
    alt: 'Clodoaldo Dantas',
  },
}

export const WithFallback = {}
