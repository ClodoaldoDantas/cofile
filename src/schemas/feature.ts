import { z } from 'astro/zod'

export const featureSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
})

export type Feature = z.infer<typeof featureSchema>
