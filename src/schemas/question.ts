import { z } from 'astro/zod'

export const questionSchema = z.object({
  title: z.string(),
  content: z.string(),
})

export type Question = z.infer<typeof questionSchema>
