import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import Login from '../views/LoginScreen';
import Signup from '../views/SigninEmailScreen';
import TabNavigator from '../route/TabNavigator';
import DrawerNavigator from '../route/DrawerNavigator';
import Signin from '../views/SigninScreen';
import All from '../views/All';
import Mentees from '../views/Mentees';

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
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown:false }}/>
        <Stack.Screen name="TabNavigator" component={TabNavigator}  />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown:false }} />
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown:false }} />
        <Stack.Screen name="All" component={All}/>
        <Stack.Screen name="Mentees" component={Mentees}/>

      </Stack.Navigator>
    )
  //);
};

export default stackNavigator;
