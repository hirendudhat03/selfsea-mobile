import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/Home';
import Login from '../views/LoginScreen';
import SignUp from '../views/SignUpWithEmailScreen';
import TabNavigator from '../route/TabNavigator';
import DrawerNavigator from '../route/DrawerNavigator';
import SignIn from '../views/SignInScreen';
import All from '../views/All';
import Mentees from '../views/Mentees';
import CreateProfile from '../views/CreateProfile';
import ForgotPassword from '../views/ForgotPassword';
import CreateNewPassword from '../views/CreateNewPassword';

const AuthStack = () => {
  const AuthStackScreen = createStackNavigator();
  return (
    <AuthStackScreen.Navigator initialRouteName={'Login'}>
      <AuthStackScreen.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStackScreen.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <AuthStackScreen.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <AuthStackScreen.Screen
        name="CreateProfile"
        component={CreateProfile}
        options={{ headerShown: false }}
      />
      <AuthStackScreen.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <AuthStackScreen.Screen
        name="CreateNewPassword"
        component={CreateNewPassword}
        options={{ headerShown: false }}
      />
    </AuthStackScreen.Navigator>
  );
};

const stackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    // initRoute && (
    <Stack.Navigator initialRouteName={'AuthStack'}>
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
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

      <Stack.Screen name="All" component={All} />
      <Stack.Screen name="Mentees" component={Mentees} />
    </Stack.Navigator>
    // )
  );
};

export default stackNavigator;
