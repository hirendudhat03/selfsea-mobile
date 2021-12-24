import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import Login from '../views/LoginScreen';
import Signup from '../views/SignupScreen';

const stackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    //initRoute && (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login" component={Login} options={{ headerShown:false }}/>
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    )
  //);
};

export default stackNavigator;
