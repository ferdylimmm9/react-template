import { useMutation } from '@tanstack/react-query';

import {
  LoginMutationInputSchemaType,
  LoginResponseSchemaType,
  RegisterMutationInputSchemaType,
} from './model';
import { ApiMutationType, ApiResult, httpClient } from '@/constants/api';

export const LOGIN_ENDPOINT = 'login';
export const REGISTER_ENDPOINT = 'register';

export const useLogin: ApiMutationType<
  ApiResult<LoginResponseSchemaType>,
  LoginMutationInputSchemaType
> = function (options) {
  return useMutation({
    ...options,
    async mutationFn(body) {
      return (await httpClient.post(LOGIN_ENDPOINT, body)).data;
    },
  });
};

export const useRegister: ApiMutationType<
  ApiResult,
  RegisterMutationInputSchemaType
> = function (options) {
  return useMutation({
    ...options,
    async mutationFn(body) {
      return (await httpClient.post(REGISTER_ENDPOINT, body)).data;
    },
  });
};
