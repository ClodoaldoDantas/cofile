import { defineCollection } from 'astro:content'
import { file } from 'astro/loaders'
import { featureSchema, questionSchema, testimonySchema } from './schemas'

const features = defineCollection({
  loader: file('src/content/features.json'),
  schema: featureSchema,
})

const faq = defineCollection({
  loader: file('src/content/faq.json'),
  schema: questionSchema,
})

const testimonials = defineCollection({
  loader: file('src/content/testimonials.json'),
  schema: testimonySchema,
})

export const collections = { features, faq, testimonials }
