import React, { useEffect } from "react";
import { View, Text, Image, } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Images from '../theme/images';
import TabHome from '../views/TabHome';
import Bell from '../views/Bell';
import Book from '../views/Book';
import Person from '../views/Person';


const Tab = createBottomTabNavigator();
const BottomTabNavigator = ({ navigation }) => {


    return (
        <Tab.Navigator



        >
            <Tab.Screen
                name="Refer"
                component={TabHome}
                options={{
                    headerShown: false,
                    tabBarLabel: "REFER",
                    tabBarIcon: () => {
                        
                            
                        return (
                            <Image
                                source={Images.House}
                                
                            />
                        )
                    }
                }}

            />
            <Tab.Screen
                name="Home"
                component={Bell}
                options={{
                    headerShown: false,
                    tabBarIcon: () => {
                        
                            
                        return (
                            <Image
                                source={Images.Bell}
                              
                            />
                        )
                    }
                    
                }}
            />
            <Tab.Screen
                name="Refer2"
                component={Book}
                options={{
                    headerShown: false,
                  
                    tabBarIcon: () => {
                        
                            
                        return (
                            <Image
                                source={Images.Book}
                               
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
                    tabBarLabel: "TRANSFER",
                    tabBarIcon: () => {
                        
                            
                        return (
                            <Image
                                source={Images.Person}
                             
                            />
                        )
                    }
                }}

            />

        </Tab.Navigator>
    );
};

export default BottomTabNavigator;