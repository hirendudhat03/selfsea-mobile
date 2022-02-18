import React from 'react';
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Color from '../theme/colors';
import Font from '../theme/fonts';
import Mycommunity from './Mycommunity';
import AllCommunities from './AllCommunities';
const Tab = createMaterialTopTabNavigator();

const height = Dimensions.get('window').height;

const Communities = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Color.BASE_COLOR_WHITE,
        indicatorStyle: {
          opacity: 0,
        },
        labelStyle: {
          textTransform: 'none',
          fontSize: 20,
          fontFamily: Font.CALIBRE,
          fontWeight: 'bold',
          fontStyle: 'normal',
          lineHeight: 145,
          textAlign: 'center',
        },
        style: {
          backgroundColor: Color.BASE_COLOR_LIGHT_BLUE,
          height: height / 7.6,
        },
      }}>
      <Tab.Screen
        name="Mycommunity"
        component={Mycommunity}
        options={{
          tabBarLabel: 'my communities',
        }}
      />
      <Tab.Screen
        name="AllCommunities"
        component={AllCommunities}
        options={{
          tabBarLabel: 'all communities',
        }}
      />
    </Tab.Navigator>
  );
};
export default Communities;
