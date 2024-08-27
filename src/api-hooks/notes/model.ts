import { IdInput } from '@/constants/api';
import { z } from 'zod';

export const NotesResponseSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  createdAt: z.coerce.date(),
  archived: z.boolean(),
  owner: z.string(),
});

export type NotesResponseSchemaType = z.infer<typeof NotesResponseSchema>;

export type getNoteInput = IdInput;

export const CreateNoteMutationInputSchema = z.object({
  title: z.string(),
  body: z.string(),
});

export type CreateNoteMutationInputType = z.infer<
  typeof CreateNoteMutationInputSchema
>;
