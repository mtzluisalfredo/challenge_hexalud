import { types } from '../actions/catalag'

const loadingStates: string[] = [
  types.GET_CATALAG_REQUEST
];

const failureStates: string[] = [
  types.GET_CATALAG_FAIL
];

const { GET_CATALAG_SUCCESS, GET_POKEMON_SUCCESS } = types;

interface CatalogState {

  limit: number;
  loading: boolean;
  pokemons: any[];
  pokemon_detail: any;
}

const initialState: CatalogState = {
  limit: 10,
  loading: false,
  pokemons: [],
  pokemon_detail: null
};

export default (state = initialState, action: any) => {
  const { error, result = {} } = action;
  console.log("🚀 ~ file: catalag.ts:30 ~ action:", action)

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
        loading: false,
      };
    }
    case GET_POKEMON_SUCCESS: {
      return {
        ...newState,
        pokemon_detail: { ...result },
        loading: false,
      };
    }
    default:
      return state;
  }
};