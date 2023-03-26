import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockCharacterCollection } from './character.mock-data';
import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string): Promise<Character> => {
  //return mockCharacterCollection.find((h) => h.id === id);
  const { data } = await axios.get<Character>(`${url}/${id}`);
  return data;
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
