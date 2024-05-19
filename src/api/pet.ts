import axios from 'axios';
import { type Pet, PetApi } from 'petstore-models';
import { type UIPet } from '../interfaces/pet.interface';

const petApi = new PetApi();

/**
 * GET: /pet/:petId
 */
export const getPetByPetId = async (petId: number): Promise<Pet> => petApi.getPetById(petId).then(({ data }) => data);

/**
 * POST: /pet
 */
export const postPet = async (body: Pet): Promise<Pet> => petApi.addPet(body).then(({ data }) => data);

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

/**
 * GET: /pet/:petId
 *
 * - Easy to fix!
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
 *
 * - Easy to fix!
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
