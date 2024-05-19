import { PetApiFp, type Pet } from 'petstore-models';

const axiosPromiseResolver = <T>(
  promise: Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<T>>
): Promise<T> => promise.then((axiosPromise) => axiosPromise().then(({ data }) => data));

/**
 * GET: /pet/:petId
 */
export const getPetByPetId = (petId: number): Promise<Pet> => axiosPromiseResolver(PetApiFp().getPetById(petId));

/**
 * POST: /pet
 */
export const postPet = (body: Pet): Promise<Pet> => axiosPromiseResolver(PetApiFp().addPet(body));

/**
 * Easy to Fix
 */
import axios, { type AxiosInstance, type AxiosPromise } from 'axios';
import { type UIPet } from '../interfaces/pet.interface';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

/**
 * GET: /pet/:petId
 */
export const getPetByPetId_easyToFix = async (petId: number): Promise<UIPet> => {
  const { data } = await axios.get<Pet>(`/pet/${petId}`);
  return data;
  // return {
  //   ...data,
  //   name: data.name ?? '',
  //   photoUrls: data.photoUrls ?? [],
  // };
};

/**
 * POST: /pet
 */
export const postPet_easyToFix = async (_body: UIPet): Promise<UIPet> => {
  const body: Pet = _body;
  const { data } = await axios.post<Pet>('/pet', body);
  return data;
  // return {
  //   ...data,
  //   name: data.name ?? '',
  //   photoUrls: data.photoUrls ?? [],
  // };
};
