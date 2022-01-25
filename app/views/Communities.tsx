import React from 'react';
import { SafeAreaView, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Mycommunity from './Mycommunity';
import AllCommunities from './AllCommunities';
import Color from '../theme/colors';
const Tab = createMaterialTopTabNavigator();

const height = Dimensions.get('window').height;

const Communities = ({ navigation }) => {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Color.BASE_COLOR_WHITE,
        labelStyle: {
          fontSize: 17,
          // paddingTop: 60,
          fontFamily: 'Calibre',
          fontWeight: 'bold',
          fontStyle: 'normal',
          lineHeight: 150,
          letterSpacing: 0,
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
    // </SafeAreaView>
  );
};

export default Communities;
