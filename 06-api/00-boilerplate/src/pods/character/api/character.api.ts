import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities } from './character.mock-data';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api/graphql.client';

const url = 'https://rickandmortyapi.com/graphql';

export const getCharacter = async (id: string): Promise<Character> => {
  const query = gql`
    query {
      character(id: ${id}) {
        id
        name
        status
        species
        type
        gender
        image
        location {
          name
        }
    }
  }
  `;

  const { character } = await graphQLClient.request<{character:Character}>(query);
  return character;
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
