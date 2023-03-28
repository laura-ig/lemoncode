import { CharacterEntityApi, ResultApi } from './character-collection.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api/graphql.client';

const url = 'https://rickandmortyapi.com/graphql';

interface GetCharacterCollectionResponse {
  characters: {
    results: ResultApi;
  }
};

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const query = gql`
    query {
    characters(page: 1) {
      results {
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
  }
  `;

  const { characters } = await graphQLClient.request<GetCharacterCollectionResponse>(query);
  return characters.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  return true;
};
