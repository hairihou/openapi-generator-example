import { type AxiosInstance, type AxiosPromise } from 'axios';

export const axiosPromiseResolver = <T>(
  promise: Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<T>>
): Promise<T> => promise.then((axiosPromise) => axiosPromise().then(({ data }) => data));
