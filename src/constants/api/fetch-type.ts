import {
  UseQueryOptions,
  UseQueryResult,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

export type FetchType<TInput, TResult, TOption> = [TInput] extends [never]
  ? (options?: TOption) => TResult
  : (input: TInput, options?: TOption) => TResult;

//modeling the error result
export type TError = AxiosError<{ message: string; status: 'fail' }>;

export type ApiQueryType<TResult, TInput = never> = FetchType<
  TInput,
  UseQueryResult<TResult, TError>,
  Partial<UseQueryOptions<TResult, TError>>
>;

export type ApiMutationType<TResult, TBodyInput, TInput = never> = [
  TInput,
] extends [never]
  ? FetchType<
      never,
      UseMutationResult<TResult, TError, TBodyInput>,
      UseMutationOptions<TResult, TError, TBodyInput>
    >
  : FetchType<
      TInput,
      UseMutationResult<TResult, TError, TBodyInput>,
      UseMutationOptions<TResult, TError, TBodyInput>
    >;
