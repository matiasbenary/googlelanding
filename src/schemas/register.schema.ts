import { z } from 'zod';

export const RegisterFormSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Debe contener 3 caracteres como mínimo' })
      .max(255, { message: 'Debe contener 255 caracteres como máximo' }),
    email: z.string().email({ message: 'Debe ser un email valido' }),
    birthday: z.string().length(10),
    dni: z.string().min(1).max(12),
    phone_number: z.string().min(8).max(16),
    address: z
      .string()
      .min(3, { message: 'Debe contener 3 caracteres como mínimo' })
      .max(255, { message: 'Debe contener 255 caracteres como máximo' }),
  })
  .required();

export type RegisterForm = z.infer<typeof RegisterFormSchema>;
