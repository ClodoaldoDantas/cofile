import Testimony from '@/components/Testimony.astro'
import Container from '@/components/ui/Container.astro'

export default {
  title: 'Components/Testimony',
  component: Testimony,
  decorators: [() => ({ component: Container })],
}

export const Default = {
  args: {
    data: {
      quote:
        'I love this product! It has completely changed the way I work and has made my life so much easier. I highly recommend it to anyone looking for a reliable and efficient solution.',
      author: {
        image: 'https://github.com/clodoaldodantas.png',
        name: 'Clodoaldo Dantas',
        role: 'Software Engineer',
      },
    },
  },
}
