import { types } from '../actions/catalag'

const loadingStates: string[] = [
  types.GET_CATALAG_REQUEST
];

const failureStates: string[] = [
  types.GET_CATALAG_FAIL
];

const { GET_CATALAG_SUCCESS } = types;

const initialState = {
  offset: 0,
  limit: 10,
  loading: false,
  pokemonData: []
};

export default (state = initialState, action: any) => {
  const { error, payload = {}, result = {} } = action;
  console.log("TCLLLLLL", result?.results)

  const newState = {
    ...state,
    loading: false,
    error: false,
  };

  if (loadingStates.indexOf(action.type) > -1) {
    return {
      ...state,
      loading: true,
      error: false,
    };
  }

  if (failureStates.indexOf(action.type) > -1) {
    return {
      ...state,
      loading: false,
      error,
    };
  }

  switch (action.type) {
    case GET_CATALAG_SUCCESS: {
      console.log('Tod chido')
      return {
        ...newState,
        pokemonData: [...newState.pokemonData, ...result?.results],
        offset: newState.offset + 1,
        loading: false,
      };
    }
    default:
      return state;
  }
};