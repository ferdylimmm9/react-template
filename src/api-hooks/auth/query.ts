import { useQuery } from '@tanstack/react-query';

import { MeResponseSchemaType } from './model';
import { ApiQueryType, ApiResult, httpClientWithToken } from '@/constants/api';

export const ME_ENDPOINT = 'users/me';

export const authKey = {
  meKey: 'get-me',
  me: () => [authKey.meKey],
};

export const getMe = async () =>
  (await httpClientWithToken.get(ME_ENDPOINT)).data;

export const useGetMe: ApiQueryType<ApiResult<MeResponseSchemaType>> =
  function (options) {
    return useQuery({
      ...options,
      queryKey: authKey.me(),
      queryFn: async () => (await httpClientWithToken.get(ME_ENDPOINT)).data,
      staleTime: Infinity,
    });
  };
