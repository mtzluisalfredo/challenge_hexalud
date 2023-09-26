import { asyncAction, createTypes } from '../utils/createActions';

export const types = createTypes(
  'catalag/',
  asyncAction('GET_CATALAG'),
  asyncAction('GET_POKEMON'),
);

export const getPokedex = (payload: { offset: number; limit: number }) => {
  return {
    types: [types.GET_CATALAG_REQUEST, types.GET_CATALAG_SUCCESS, types.GET_CATALAG_FAIL],
    promise: (api: any) =>
      api
        .getPokedex({ ...payload })
        .then((response: any) => {
          return response;
        })
        .catch((error: any) => {
          return error;
        }),
  };
};

export const getPokemonById = (pokemonId:  number | string ) => {
  return {
    types: [types.GET_POKEMON_REQUEST, types.GET_POKEMON_SUCCESS, types.GET_POKEMON_FAIL],
    promise: (api: any) =>
      api
        .getPokemonById(pokemonId)
        .then((response: any) => {
          console.log("🚀 ~ file: catalag.ts:31 ~ .then ~ response:", response)
          return response;
        })
        .catch((error: any) => {
          return error;
        }),
  };
};
