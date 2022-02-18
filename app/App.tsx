import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store/Store';
import RootNavigators from './route/Route';
import Config from 'react-native-config';

const App = () => {
  const Navigation = RootNavigators;
  console.log('config:::', Config.API_URL);
  console.log('Config :::: ', JSON.stringify(Config));

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
