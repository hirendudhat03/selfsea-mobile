import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from '../route/TabNavigator';
import Customdrawer from '../views/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <Customdrawer props={props} />}
      initialRouteName="TabNavigator">
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
