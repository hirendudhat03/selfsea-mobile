import React from 'react';

import { LogBox } from 'react-native';
// import {StyleSheet, View} from 'react-native';
// import {Root} from 'native-base';
import { Provider } from 'react-redux';
import store from './redux/store/Store';
import RootNavigators from './route/Route';
import Config from 'react-native-config';

console.disableYellowBox = true;
// console.disableYellowBox = true;
LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  const Navigation = RootNavigators;

  console.log('Config : ', JSON.stringify(Config));

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
