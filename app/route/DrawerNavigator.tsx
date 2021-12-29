import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from '../route/TabNavigator';
import Home from '../views/Home';
import Customdrawer from '../views/CustomDrawer';

const Drawer = createDrawerNavigator();


const DrawerNavigator = (props) => {
    return (
            <Drawer.Navigator 
            drawerContent={props=><Customdrawer{...props}/>}
            initialRouteName="TabNavigator">
                <Drawer.Screen name="TabNavigator" component={TabNavigator} />
            </Drawer.Navigator>

    );
}



export default DrawerNavigator;