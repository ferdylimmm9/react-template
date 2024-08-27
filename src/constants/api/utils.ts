import { z } from 'zod';

export async function blobToBase64(blob: Blob): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      resolve(reader.result as string);
    };
    reader.onerror = function () {
      reject(reader.error);
    };
  });
}

export function downloadContent(title: string, base64URL: string) {
  const link = document.createElement('a');
  link.download = title;
  link.href = base64URL;
  link.click();
}

export function ResponseTransformerWithDataArray<
  TValidation extends z.ZodTypeAny,
  TData extends object,
>(validation: TValidation, response: TData) {
  try {
    return z
      .object({
        status: z.string(),
        message: z.string(),
        data: z.array(validation),
      })
      .parse(response);
  } catch (e) {
    console.error(e);
    return response;
  }
}

export function ResponseTransformerWithData<
  TValidation extends z.ZodTypeAny,
  TData extends object,
>(validation: TValidation, response: TData) {
  try {
    return z
      .object({
        status: z.string(),
        message: z.string(),
        data: validation,
      })
      .parse(response);
  } catch (e) {
    console.error(e);
    return response;
  }
}

export function ResponseTransformerWithoutData<TData extends object>(
  response: TData,
) {
  try {
    return z
      .object({
        status: z.string(),
        message: z.string(),
      })
      .parse(response);
  } catch (e) {
    console.error(e);
    return response;
  }
}
