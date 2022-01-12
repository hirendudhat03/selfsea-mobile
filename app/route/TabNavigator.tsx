import React from "react";
import { View, Text, Image, StyleSheet,Dimensions } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Images from '../theme/images';

import CommunitiesHome from '../views/CommunitiesHome';
import Bell from '../views/Bell';
import Book from '../views/Book';
import Person from '../views/Person';
import TabScreen from '../views/TabScreen';
import Color from '../theme/colors';

import HealthScreen from '../views/HealthScreen';

const height = Dimensions.get('window').height;


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = ({ navigation }) => {


const CommunitiesHomeStack =()=>(

    <Stack.Navigator initialRouteName="CommunitiesHome">
      <Stack.Screen
        name="CommunitiesHome"
        component={CommunitiesHome}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="HealthScreen"
        component={HealthScreen}
        options={{
            headerShown: false,
          }}
      />
      </Stack.Navigator>
    )
 



    


    return (
     

            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        height:height/9 ,
                        borderTopColor: Color.BORDER_COLOR,
                        borderTopWidth: 1,
                    },
                }}



            >
                <Tab.Screen
                    name="TabHome"
                    component={CommunitiesHomeStack}
                    options={{
                        headerShown: false,
                        tabBarLabel: () => { return null },
                        tabBarIcon: ({focused}) => {
                            const image = focused
                            ? Images.HomeFill
                            : Images.House



                            return (
                                <Image
                                    source={image}

                                />
                            )
                        }
                    }}

                />
                <Tab.Screen
                    name="Bell"
                    component={Bell}
                    options={{
                        headerShown: false,
                        tabBarLabel: () => { return null },
                        tabBarIcon: ({focused}) => {
                         
                            const image = focused
                            ? Images.BellFill
                            : Images.Bell

                            return (
                                <Image
                                    source={image}

                                />
                            )
                        }

                    }}
                />
                <Tab.Screen
                    name="TabScreen "
                    component={TabScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: () => { return null },
                        tabBarIcon: () => {
                            return (
                                <View style={styles.tabView}>
                                    <Image
                                        source={Images.LogoTab}

                                    />
                                </View>
                            )
                        }

                    }}
                />
                <Tab.Screen
                    name="Book"
                    component={Book}
                    options={{
                        headerShown: false,
                        tabBarLabel: () => { return null },
                        tabBarIcon: ({focused}) => {
                            const image = focused
                            ? Images.BookFill
                            : Images.Book

                            return (
                                <Image
                                    source={image}


                                />
                            )
                        }

                    }}
                />
                <Tab.Screen
                    name="Person"
                    component={Person}
                    options={{
                        headerShown: false,
                        tabBarLabel: () => { return null },
                        tabBarIcon: ({focused}) => {
                            const image = focused
                            ? Images.PersonFill
                            : Images.Person


                            return (
                                <Image
                                    source={image}


                                />
                            )
                        }
                    }}

                />

            </Tab.Navigator>
       
    );
};


const styles = StyleSheet.create({

    tabView: {
        width: 75,
        height: 75,
        borderStyle: "solid",
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