import { AnyAction, Dispatch, Middleware } from 'redux';
import api from '../../api';

interface Action<T = any> {
  type: T;
  [key: string]: any;
}

type ThunkAction = (dispatch: MyDispatch, getState: () => RootState) => void;

type MyDispatch = Dispatch<AnyAction>;

interface RootState {
  // definir el tipo de tu estado raíz aquí
}

const middleware: Middleware<{}, RootState> = ({ dispatch, getState }) => (next) => (
  action: Action | ThunkAction
) => {
  if (typeof action === 'function') {
    return (action as ThunkAction)(dispatch, getState);
  }

  const { promise, types, redirect, ...rest } = action as Action & {
    promise: (api: any) => Promise<any>;
    types: [string, string, string];
    redirect?: string;
  };

  if (!promise) {
    return next(action);
  }

  const [REQUEST, SUCCESS, FAILURE] = types;

  next({ ...rest, type: REQUEST });

  return promise(api())
    .then(
      (result) => {
        next({ ...rest, result, type: SUCCESS });
        // TODO: if redirect from action is send - active push
        // if (redirect) {
        //  Router.push(redirect);
        // }
        return Promise.resolve();
      },
      (error) => {
        next({ ...rest, error, type: FAILURE });

        return Promise.resolve();
      }
    )
    .catch((error) => {
      next({ ...rest, error, type: FAILURE });

      return Promise.resolve();
    });
};

export default middleware;
