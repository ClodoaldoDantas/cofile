import Heading from '@/components/ui/Heading.astro'

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {
    level: {
      control: 'radio',
      options: [1, 2, 3],
    },
  },
}

export const Default = {
  args: {
    title: 'Cofile',
    level: 2,
  },
}
