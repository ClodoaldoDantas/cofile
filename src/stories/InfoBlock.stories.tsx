import InfoBlock from '@/components/InfoBlock.astro'

export default {
  title: 'Components/InfoBlock',
  component: InfoBlock,
  argTypes: {
    icon: {
      control: 'select',
      options: ['ph:trophy', 'ph:heart', 'ph:star', 'ph:check-circle'],
    },
  },
}

export const Default = {
  args: {
    icon: 'ph:trophy',
    title: 'Award winning support',
    description: 'We provide the best support for our customers.',
  },
}
