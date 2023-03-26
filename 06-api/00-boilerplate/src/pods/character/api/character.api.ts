import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities } from './character.mock-data';
import axios from 'axios';

//const url = 'https://rickandmortyapi.com/api/character';
const url = '/api/results';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await axios.get<Character>(`${url}/${id}`);
  return data;
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  console.log(character)
  if(character.id){
    await axios.put<Character>(`${url}/${character.id}`, character);
  } else {
    await axios.post<Character>(`${url}`, character);
  }
  return true;
};
