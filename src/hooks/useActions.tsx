import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export function createActionsHook<T>(actions: T) {
  return function useActionsDeps(deps: any[] = []): T {
    const dispatch = useDispatch();
    return useMemo(
      () => {
        if (Array.isArray(actions)) {
          return actions.map(a => bindActionCreators(a, dispatch));
        }
        return bindActionCreators(actions as any, dispatch);
      },
      deps ? [dispatch, ...deps] : [dispatch],
    ) as T;
  };
}

export function useActions<T>(actions: T, deps: any[] = []): T {
  return createActionsHook(actions)(deps);
}
