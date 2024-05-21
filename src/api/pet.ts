import { PetApiFp, type Pet } from 'petstore-models';
import { axiosPromiseResolver } from '../libs/axios-helper';

const petApi = PetApiFp();

/**
 * POST: /pet
 */
export const postPet = (body: Pet): Promise<Pet> => axiosPromiseResolver(petApi.addPet(body));

/**
 * GET: /pet/:petId
 */
export const getPetByPetId = (petId: number): Promise<Pet> => axiosPromiseResolver(petApi.getPetById(petId));

/** easy to fix */

import axios from 'axios';
import { type UIPet } from '../interfaces/pet.interface';

const petApiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

/**
 * GET: /pet/:petId
 */
export const getPetByPetId_easyToFix = async (petId: number): Promise<UIPet> => {
  const { data } = await petApiInstance.get<Pet>(`/pet/${petId}`);
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
export const postPet_easyToFix = async (pet: UIPet): Promise<UIPet> => {
  const body: Pet = pet;
  const { data } = await petApiInstance.post<Pet>('/pet', body);
  return data;
  // return {
  //   ...data,
  //   name: data.name ?? '',
  //   photoUrls: data.photoUrls ?? [],
  // };
};
