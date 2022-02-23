import React from 'react';

import { Provider } from 'react-redux';
import config from './config';

import store from './redux/store/Store';
import RootNavigators from './route/Route';

const App = () => {
  const Navigation = RootNavigators;
  console.log('config:::', config.config.API_BASE_URL);

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
