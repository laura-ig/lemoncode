import { CharacterEntityApi, ResultApi } from './character-collection.api-model';
import Axios from 'axios';

//const url = 'https://rickandmortyapi.com/api/character';
const url = '/api/results';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await Axios.get<CharacterEntityApi[]>(url);
  console.log(data)
  return data;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  await Axios.delete(`${url}/${id}`);
  return true;
};
