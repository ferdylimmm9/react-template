import { useMutation } from '@tanstack/react-query';
import {
  CreateNoteMutationInputType,
  NotesResponseSchema,
  NotesResponseSchemaType,
} from './model';
import {
  ApiMutationType,
  ApiResult,
  httpClientWithToken,
  IdInput,
  ResponseTransformerWithData,
} from '@/constants/api';

export const ENDPOINT = 'notes';

export const useCreateNote: ApiMutationType<
  ApiResult<NotesResponseSchemaType>,
  CreateNoteMutationInputType
> = function (options) {
  return useMutation({
    ...options,
    async mutationFn(body) {
      return ResponseTransformerWithData(
        NotesResponseSchema,
        (await httpClientWithToken.post(ENDPOINT, body)).data,
      );
    },
  });
};

export const useArchiveNote: ApiMutationType<ApiResult, IdInput> = function (
  options,
) {
  return useMutation({
    ...options,
    async mutationFn({ id }) {
      return (await httpClientWithToken.post(`${ENDPOINT}/${id}/archive`)).data;
    },
  });
};

export const useUnarchiveNote: ApiMutationType<ApiResult, IdInput> = function (
  options,
) {
  return useMutation({
    ...options,
    async mutationFn({ id }) {
      return (await httpClientWithToken.post(`${ENDPOINT}/${id}/unarchive`))
        .data;
    },
  });
};

export const useDeleteNote: ApiMutationType<ApiResult, IdInput> = function (
  options,
) {
  return useMutation({
    ...options,
    async mutationFn({ id }) {
      return (await httpClientWithToken.delete(`${ENDPOINT}/${id}/delete`))
        .data;
    },
  });
};
