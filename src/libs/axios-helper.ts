import { type AxiosInstance, type AxiosPromise } from 'axios';

export const axiosPromiseResolver = async <T>(
  promise: Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<T>>,
  options?: { axios?: AxiosInstance; basePath?: string }
): Promise<T> => {
  const axiosPromise = await promise;
  const { data } = await axiosPromise(options?.axios, options?.basePath);
  return data;
};
