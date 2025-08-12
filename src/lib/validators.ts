
import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  company: z.string().optional().default(''),
  hp: z.string().max(0).optional(), // honeypot field (must be empty)
})

export type ContactInput = z.infer<typeof contactSchema>
