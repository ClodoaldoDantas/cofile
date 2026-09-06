import Button from '@/components/ui/Button.astro'

export default {
  title: 'Components/Button',
  component: Button,
}

export const Default = {
  args: {
    slots: {
      default: 'Download',
    },
  },
}

export const WithIcon = {
  argTypes: {
    icon: {
      control: 'select',
      options: ['ph:cloud-arrow-down', 'ph:gift', 'ph:trophy', 'ph:check'],
    },
  },
  args: {
    icon: 'ph:cloud-arrow-down',
    slots: {
      default: 'Download',
    },
  },
}
