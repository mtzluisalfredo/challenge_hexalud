import { asyncAction, createTypes } from '../utils/createActions';

export const types = createTypes(
  'catalag/',
  asyncAction('GET_CATALAG'),
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
