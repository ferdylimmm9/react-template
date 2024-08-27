import { useQuery } from '@tanstack/react-query';
import {
  getNoteInput,
  NotesResponseSchema,
  NotesResponseSchemaType,
} from './model';
import {
  ApiQueryType,
  ApiResult,
  httpClientWithToken,
  ResponseTransformerWithData,
  ResponseTransformerWithDataArray,
} from '@/constants/api';

const ENDPOINT = 'notes';

export const noteKey = {
  listKey: 'get-notes',
  archivedListKey: 'get-archived-notes',
  detailKey: 'get-note',
  list: () => [noteKey.listKey],
  archivedList: () => [noteKey.archivedListKey],
  detail: (input: getNoteInput) => [noteKey.detailKey, input.id],
};

export const useGetNotes: ApiQueryType<ApiResult<NotesResponseSchemaType[]>> =
  function (options) {
    return useQuery({
      ...options,
      queryKey: noteKey.list(),
      queryFn: async () =>
        ResponseTransformerWithDataArray(
          NotesResponseSchema,
          (await httpClientWithToken.get(ENDPOINT)).data,
        ),
    });
  };

export const useGetArchivedNotes: ApiQueryType<
  ApiResult<NotesResponseSchemaType[]>
> = function (options) {
  return useQuery({
    ...options,
    queryKey: noteKey.archivedList(),
    queryFn: async () =>
      ResponseTransformerWithDataArray(
        NotesResponseSchema,
        (await httpClientWithToken.get(`${ENDPOINT}/archived`)).data,
      ),
  });
};

export const useGetNote: ApiQueryType<
  ApiResult<NotesResponseSchemaType>,
  getNoteInput
> = function (input, options) {
  return useQuery({
    ...options,
    queryKey: noteKey.detail(input),
    queryFn: async () =>
      ResponseTransformerWithData(
        NotesResponseSchema,
        (await httpClientWithToken.get(`${ENDPOINT}/${input.id}`)).data,
      ),
  });
};
