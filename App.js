// import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import MainStack from "./src/navigation/BottomNav";

import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <MainStack/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
