import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store/Store';
import RootNavigators from './route/Route';

console.disableYellowBox = true;

const App = () => {
  const Navigation = RootNavigators;

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
