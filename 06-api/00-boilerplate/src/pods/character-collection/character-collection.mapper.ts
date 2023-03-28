import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id,
  picture: `${character.image}`,// `${process.env.BASE_PICTURES_URL}/${character.image}`,
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  bestSentences: character.bestSentences,
});
