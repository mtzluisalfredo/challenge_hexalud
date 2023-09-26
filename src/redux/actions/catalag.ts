import { asyncAction, createTypes } from '../utils/createActions';

export const types = createTypes(
  'catalag/',
  asyncAction('GET_CATALAG'),
  asyncAction('GET_POKEMON'),
);

/**
 * Action to get the catalog of Pokemons.
 * This action triggers a request to get the catalog of Pokemons.
 * It uses the asyncAction utility to create request, success, and fail types for the action.
 * The types are: GET_CATALAG_REQUEST, GET_CATALAG_SUCCESS, GET_CATALAG_FAIL
 */
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

/**
 * Action to get a specific Pokemon by its ID.
 * This action triggers a request to get a specific Pokemon by its ID.
 * It uses the asyncAction utility to create request, success, and fail types for the action.
 * The types are: GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_POKEMON_FAIL
 */
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
