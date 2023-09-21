// store/index.ts
import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage

// Importa tus reducers aquí
import counterReducer from '../reducers';

const rootReducer = combineReducers({
  // Agrega tus reducers aquí
  counter: counterReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
