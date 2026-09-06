import Accordion from '@/components/ui/Accordion.astro'
import Container from '@/components/ui/Container.astro'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [() => ({ component: Container })],
}

export const Default = {
  args: {
    items: [
      {
        title: 'What is the capital of France?',
        content: 'The capital of France is Paris.',
      },
      {
        title: 'What is the largest planet in our solar system?',
        content: 'The largest planet in our solar system is Jupiter.',
      },
      {
        title: 'What is the football team with the most World Cup wins?',
        content:
          'The football team with the most World Cup wins is Brazil, with 5 titles.',
      },
    ],
  },
}
