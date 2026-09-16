import { z } from 'astro/zod'

export const testimonySchema = z.object({
  quote: z.string(),
  author: z.object({
    image: z.url(),
    name: z.string(),
    role: z.string(),
  }),
})

export type ITestimony = z.infer<typeof testimonySchema>
