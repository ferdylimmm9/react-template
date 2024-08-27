import { z } from 'zod';

export const MeResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});

export type MeResponseSchemaType = z.infer<typeof MeResponseSchema>;

export const RegisterMutationInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export type RegisterMutationInputSchemaType = z.infer<
  typeof RegisterMutationInputSchema
>;

export const LoginMutationInputSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginMutationInputSchemaType = z.infer<
  typeof LoginMutationInputSchema
>;

export const LoginResponseSchema = z.object({
  accessToken: z.string(),
});

export type LoginResponseSchemaType = z.infer<typeof LoginResponseSchema>;
