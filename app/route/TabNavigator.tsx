import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Images from '../theme/images';

import CommunitiesHome from '../views/CommunitiesHome';
import Notifications from '../views/Notifications';
import Book from '../views/Book';
import Profile from '../views/Profile';
import TabScreen from '../views/TabScreen';

import Color from '../theme/colors';

import HealthScreen from '../views/HealthScreen';

// import Communities from '../views/Communities';

import NavigationIdentity from '../views/NavigationIdentity';
import MentorCommunity from '../views/MentorCommunity';

export const screenNames = {
  CommunitiesHome: 'CommunitiesHome',
  HealthScreen: 'HealthScreen',
  NavigationIdentity: 'NavigationIdentity',
  Communities: 'Communities',
  homeStack: 'HomeStackScreen',
  MentorCommunity: 'MentorCommunity',
};

const height = Dimensions.get('window').height;

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerShown: false
      }}
      initialRouteName={screenNames.CommunitiesHome}>
      <HomeStack.Screen
        name={screenNames.CommunitiesHome}
        component={CommunitiesHome}
      />
      <HomeStack.Screen
        name={screenNames.HealthScreen}
        component={HealthScreen}
      />
      <HomeStack.Screen
        name={screenNames.NavigationIdentity}
        component={NavigationIdentity}
      />
      {/* <HomeStack.Screen
        name={screenNames.Communities}
        component={Communities}
      /> */}
      <HomeStack.Screen
        name={screenNames.MentorCommunity}
        component={MentorCommunity}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: height / 9,
          borderTopColor: Color.BORDER_COLOR,
          borderTopWidth: 1,
        },
      }}>
      <Tab.Screen
        name={screenNames.homeStack}
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => {
            const image = focused ? Images.HomeFill : Images.House;
            return <Image source={image} />;
          },
        }}
      />
      <Tab.Screen
        name="Bell"
        component={Notifications}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => {
            const image = focused ? Images.BellFill : Images.Bell;

            return <Image source={image} />;
          },
        }}
      />
      <Tab.Screen
        name="TabScreen "
        component={TabScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => {
            return (
              <View style={[styles.tabView]}>
                <Image source={Images.LogoTab} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Book"
        component={Book}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => {
            const image = focused ? Images.BookFill : Images.Book;

            return <Image source={image} />;
          },
        }}
      />
      <Tab.Screen
        name="Person"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => {
            const image = focused ? Images.PersonFill : Images.Person;
            return <Image source={image} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabView: {
    width: 75,
    height: 75,
    borderStyle: 'solid',
    borderRadius: 75,
    borderWidth: 5,
    borderColor: Color.BASE_COLOR_WHITE,
    marginBottom: 40,
    backgroundColor: Color.BASE_COLOR_ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Color.BASE_COLOR_LIGHTGRAY,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 0,
    shadowOpacity: 0.5,
  },
});

export default BottomTabNavigator;
