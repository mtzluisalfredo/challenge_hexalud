import { asyncAction, createTypes } from '../utils/createActions';

export const types = createTypes(
  'pokedex/',
  'UPDATE_PROFILE'
);

/**
 * Action to update the profile
 */

export const updateProfile = (profile: { name: string; }) => (dispatch: (arg0: { type: string; payload: { profile: any; }; }) => any) => {
  return dispatch(
    {
      type: 'UPDATE_PROFILE',
      payload: { profile },
    },
  );
};