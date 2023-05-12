import { z } from 'zod';

export const RegisterFormSchema = z
  .object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    birthday: z.string().min(10).max(10),
    dni: z.string().min(8).max(8),
    phone_number: z.string().min(10).max(11),
  })
  .required();

export type RegisterForm = z.infer<typeof RegisterFormSchema>;
