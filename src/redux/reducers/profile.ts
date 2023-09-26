import { types } from '../actions/profile'

const loadingStates: string[] = [
];

const failureStates: string[] = [
];

const { UPDATE_PROFILE } = types;


const initialState = {
  profile: {
    name: 'Luis Alfredo',
  }
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
    case UPDATE_PROFILE: {
      return {
        ...newState,
      };
    }
    default:
      return state;
  }
};