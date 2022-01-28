import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/Home';
import Login from '../views/LoginScreen';
import Signup from '../views/SignUpWithEmailScreen';
import TabNavigator from '../route/TabNavigator';
import DrawerNavigator from '../route/DrawerNavigator';
import Signin from '../views/SigninScreen';
import All from '../views/All';
import Mentees from '../views/Mentees';
import CreateProfile from '../views/CreateProfile';
import ForgotPassword from '../views/ForgotPassword';
import CreateNewPassword from '../views/CreateNewPassword';

const stackNavigator = () => {
  const Stack = createStackNavigator();

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
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateProfile"
        component={CreateProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateNewPassword"
        component={CreateNewPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="All" component={All} />
      <Stack.Screen name="Mentees" component={Mentees} />
    </Stack.Navigator>
  );
};

export default stackNavigator;
