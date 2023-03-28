import { CharacterEntityApi, ResultApi } from './character-collection.api-model';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await Axios.get<ResultApi>(url);
  return data.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  await Axios.delete(`${url}/${id}`);
  return true;
};
