import { asyncAction, createTypes } from '../utils/createActions';

export const types = createTypes(
  'pokedex/',
  'SET_TO_POKEDEX'
);

/**
 * Action to set the information of a specific Pokemon.
 * This action triggers a dispatch to set the information of a specific Pokemon to the Pokedex.
 * The type is: SET_TO_POKEDEX
 */

export const setInfoPokemon = (pokemon: { name: string; }) => (dispatch: (arg0: { type: string; payload: { pokemon: any; }; }) => any) => {
  return dispatch(
    {
      type: 'SET_TO_POKEDEX',
      payload: { pokemon },
    },
  );
};