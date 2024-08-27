export class IdInput {
  id: string;
}

export type ApiResult<T = never> = [T] extends [never]
  ? {
      status: 'fail' | 'success';
      message: string;
    }
  : {
      status: 'fail' | 'success';
      message: string;
      data: T;
    };
