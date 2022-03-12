import React from 'react';

//Stack Navigator
import StackNavigator from './StackNavigator';
//Navigation Container
import { NavigationContainer } from '@react-navigation/native';

const route = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default route;
