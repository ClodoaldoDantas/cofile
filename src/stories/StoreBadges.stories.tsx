import StoreBadges from '@/components/StoreBadges.astro'

export default {
  title: 'Components/StoreBadges',
  component: StoreBadges,
  argTypes: {
    inline: {
      control: 'boolean',
    },
  },
}

export const Default = {}

export const Inline = {
  args: {
    inline: true,
  },
}
