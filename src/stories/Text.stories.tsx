import Text from '@/components/ui/Text.astro'
import Container from '@/components/ui/Container.astro'

export default {
  title: 'Typography/Text',
  component: Text,
  decorators: [() => ({ component: Container })],
}

export const Default = {
  args: {
    text: 'Monitor your worldwide business with this handy apps.',
  },
}
