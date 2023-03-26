import { CharacterEntityApi, ResultApi } from './character-collection.api-model';
//import { mockCharacterCollection } from './character-collection.mock-data';
import Axios from 'axios';

//let characterCollection = [...mockCharacterCollection];

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await Axios.get<ResultApi>(url);
  return data.results;
 // return characterCollection;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  //characterCollection = characterCollection.filter((h) => h.id !== id);
  //return true;
  await Axios.delete(`${url}/${id}`);
  return true;
};
