import React from 'react';
import { LogBox } from 'react-native';
// import {StyleSheet, View} from 'react-native';
// import {Root} from 'native-base';
import { Provider } from 'react-redux';
import store from './redux/store/Store';
import RootNavigators from './route/Route';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// console.disableYellowBox = true;
LogBox.ignoreAllLogs();

// const client = new ApolloClient({
//   uri: 'http://selfseastagingapi-env.eba-zspdnj8e.us-west-2.elasticbeanstalk.com/graphql',
//   cache: new InMemoryCache(),
// });

const App = () => {
  const Navigation = RootNavigators;

  return (
    // <Root>
    <Provider store={store}>
      <Navigation />
    </Provider>
    //   <GlobalInclude.Loader ref={(ref) => (global.global_loader_reff = ref)} />
    //   <GlobalInclude.Alert ref={(ref) => (global.toast_reff = ref)} />
    // </Root>
  );
};

// const styles = StyleSheet.create({
//   mainView: {
//     flex: 1,
//   },
// });

export default App;
