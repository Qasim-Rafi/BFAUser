import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import Router from './src/navigation/Router';
import {persistor, store} from './src/redux';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar hidden />
      {/*<PersistGate loading={null} persistor={persistor}>*/}
      <Router />
      {/*</PersistGate>*/}
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
