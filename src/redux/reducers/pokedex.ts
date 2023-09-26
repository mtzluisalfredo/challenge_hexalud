import { types } from '../actions/pokedex'

const loadingStates: string[] = [
];

const failureStates: string[] = [
];

const { SET_TO_POKEDEX } = types;

interface PokedexState {
  myPokemons: any[];
}

const initialState: PokedexState = {
  myPokemons: []
};

export default (state = initialState, action: any) => {
  const { error, payload = {} } = action;

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
    case SET_TO_POKEDEX: {
      return {
        ...newState,
        myPokemons: [...newState.myPokemons, payload],
      };
    }
    default:
      return state;
  }
};