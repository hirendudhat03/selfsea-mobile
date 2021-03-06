import React from 'react';
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Color from '../theme/colors';
import Font from '../theme/fonts';
import MenteeCommunity from '../views/Mentee/MenteeCommunity';

const Tab = createMaterialTopTabNavigator();

const height = Dimensions.get('window').height;

const Communities = ({ navigation }) => {
  console.log(navigation);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Color.BASE_COLOR_WHITE,
        tabBarIndicatorStyle: {
          opacity: 0,
        },
        tabBarLabelStyle: {
          textTransform: 'none',
          fontSize: 20,
          fontFamily: Font.CALIBRE,
          fontWeight: 'bold',
          fontStyle: 'normal',
          lineHeight: 145,
          textAlign: 'center',
        },
        tabBarStyle: {
          backgroundColor: Color.BASE_COLOR_LIGHT_BLUE,
          height: height / 7.6,
        },
      }}>
      <Tab.Screen
        name="MyCommunity"
        component={MenteeCommunity}
        options={{
          tabBarLabel: 'my communities',
        }}
      />
      <Tab.Screen
        name="AllCommunities"
        component={MenteeCommunity}
        options={{
          tabBarLabel: 'all communities',
        }}
      />
    </Tab.Navigator>
  );
};
export default Communities;
