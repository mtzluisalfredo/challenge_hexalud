// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Importa PersistGate
import { store, persistor } from './data/store'; // Importa tu store y persistor

import HomeScreen from './screens/Home'; // Reemplaza con tu componente principal

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
