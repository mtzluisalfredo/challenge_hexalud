import { asyncAction, createTypes } from '../utils/createActions';

export const types = createTypes(
  'catalag/',
  asyncAction('GET_CATALAG'),
);

export const getPokedex = (payload: { offset: number; limit: number }) => {
  console.log("🚀 ~ file: catalag.ts:9 ~ getPokedex ~ payload:", payload)
  return {
    types: [types.GET_CATALAG_REQUEST, types.GET_CATALAG_SUCCESS, types.GET_CATALAG_FAIL],
    promise: (api: any) =>
      api
        .getPokedex({ ...payload })
        .then((response: any) => {
          console.log("🚀 ~ file: catalag.ts:15 ~ .then ~ response:", response)
          return response;
        })
        .catch((error: any) => {
          console.log("🚀 ~ file: catalag.ts:19 ~ getPokedex ~ error:", error)
          return error;
        }),
  };
};
