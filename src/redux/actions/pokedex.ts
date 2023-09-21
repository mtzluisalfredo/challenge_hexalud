import { asyncAction, createTypes } from '../utils/createActions';

export const types = createTypes(
  'pokedex/',
  asyncAction('GET_POKEDEX'),
);

export const getPokedex = ({ offset, limit }: { offset: number; limit: number }) => {
  return {
    types: [types.GET_POKEDEX_REQUEST, types.GET_POKEDEX_SUCCESS, types.GET_POKEDEX_FAIL],
    promise: (api: any) =>
      api
        .getPokedex({ offset, limit })
        .then((response: any) => {
          console.log("🚀 ~ file: pokedex.ts:15 ~ .then ~ response:", response)
          return response;
        })
        .catch((error: any) => {
          console.log("🚀 ~ file: pokedex.ts:19 ~ getPokedex ~ error:", error)
          return error;
        }),
  };
};
