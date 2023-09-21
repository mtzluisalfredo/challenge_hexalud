import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from '../reducers';
import apiMiddleware from '../middleware/api'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['pokedex'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(apiMiddleware) // Agrega tu middleware aquí
);

const persistor = persistStore(store);

export { store, persistor };
