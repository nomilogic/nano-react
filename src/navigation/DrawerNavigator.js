// ./navigation/DrawerNavigator.js

import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigator';
import {DrawerContent} from '../components/drawer/DrawerContent';
import Settings from '../components/settings/Settings';
import Blocked from '../components/settings/Blocked';
import Account from '../components/settings/Account';
import {HeaderBackButton} from '@react-navigation/stack';

// import {DrawerContent} from './DrawerContent';
const Drawer = createDrawerNavigator();
// const { goBack } = this.props.navigation;

// const DrawerNavigator = ({navigation}) => {
const DrawerNavigator = ({navigation}) => {
  console.log('out:', navigation);

  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen
        name="Setting"
        component={Settings}
        options={{
          headerShown: true,
          title: 'Settings',
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => {
                console.log('In');
                console.log(navigation);
                navigation.navigate('Home');

                // goBack;
                // this.props.navigation.dispatch(NavigationActions.back());
                // console.log(this.props);
                // console.log();
                //   navigation.pop();
                // this.props.navigate.goback();
              }}
            />
          ),
        }}
      />
      <Drawer.Screen name="Blocked" component={Blocked} />
      <Drawer.Screen name="Account" component={Account} />
      {/*<Drawer.Screen name="Feed" component={FeedNavigator} />*/}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
