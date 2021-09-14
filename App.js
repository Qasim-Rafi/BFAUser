import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './src/navigation/Router';
import {persistor, store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
      <StatusBar hidden />
      {/*<PersistGate loading={null} persistor={persistor}>*/}
      <Router />
      {/*</PersistGate>*/}
      </PersistGate>
    </Provider>
  );
};

export default App;

console.disableYellowBox = true;

LogBox.ignoreLogs([
  'Warning: VirtualizedList should',
  'Warning: Each child',
  'Warning: Each child in a',
  'Warning: Failed prop type',
]);
