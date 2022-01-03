// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React from 'react';
// import Home from './views/Home';
// import Login from './views/LoginScreen';
// import Signup from './views/SignupScreen';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Signup" component={Signup} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React from 'react';
import { LogBox } from 'react-native';
// import {StyleSheet, View} from 'react-native';
// import {Root} from 'native-base';
// import { Provider } from "react-redux";
// import store from "./source/redux/store/Store";
import RootNavigators from './route/Route';


// console.disableYellowBox = true;
LogBox.ignoreAllLogs();
const App = () => {
  const Navigation = RootNavigators;

  return (
    // <Root>
    //   <Provider store={store}>
      <Navigation />
    //   </Provider>
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