import { types } from '../actions/catalag'

const loadingStates: string[] = [
  types.GET_CATALAG_REQUEST
];

const failureStates: string[] = [
  types.GET_CATALAG_FAIL
];

const { GET_CATALAG_SUCCESS } = types;

interface CatalogState {
  offset: number;
  limit: number;
  loading: boolean;
  pokemons: any[];
}

const initialState: CatalogState = {
  offset: 0,
  limit: 10,
  loading: false,
  pokemons: []
};

export default (state = initialState, action: any) => {
  const { error, result = {} } = action;

  const actionType: string = action?.type;

  const newState = {
    ...state,
    loading: false,
    error: false,
  };

  if (loadingStates.indexOf(actionType) > -1) {
    return {
      ...state,
      loading: true,
      error: false,
    };
  }

  if (failureStates.indexOf(actionType) > -1) {
    return {
      ...state,
      loading: false,
      error,
    };
  }

  switch (actionType) {
    case GET_CATALAG_SUCCESS: {
      return {
        ...newState,
        pokemons: [...newState.pokemons, ...result?.results],
        offset: newState.offset + 1,
        loading: false,
      };
    }
    default:
      return state;
  }
};