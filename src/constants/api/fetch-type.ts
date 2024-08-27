import {
  UseQueryOptions,
  UseQueryResult,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

export type FetchType<TInput, TResult, TOption> = [TInput] extends [unknown]
  ? (options?: TOption) => TResult
  : (input: TInput, options: TOption) => TResult;

//modeling the error resutl
export type TError = any;

export type ApiQueryType<TResult, TInput = unknown> = FetchType<
  TInput,
  UseQueryResult<TResult, TError>,
  UseQueryOptions<TResult, TError>
>;

export type ApiMutationType<TResult, TBodyInput, TInput = unknown> = FetchType<
  TInput,
  UseMutationResult<TResult, TError, TBodyInput>,
  UseMutationOptions<TResult, TError, TBodyInput>
>;
