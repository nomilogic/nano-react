// ./navigation/DrawerNavigator.js

import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigator';
import {DrawerContent} from '../components/drawer/DrawerContent';
import Settings from '../components/settings/Settings';
import Blocked from '../components/settings/Blocked';
import Account from '../components/settings/Account';
import Feedback from '../components/feedback/Feedback';
import {HeaderBackButton} from '@react-navigation/elements';
import { CommunityStackStackScreen, ProfileStackScreen, RewardStackScreen } from './StackNavigator';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { Button } from 'react-native-paper';

// import {DrawerContent} from './DrawerContent';
const Drawer = createDrawerNavigator();
// const { goBack } = this.props.navigation;
console.log(Drawer);
// const DrawerNavigator = ({navigation}) => {
const DrawerNavigator = ({Navigator}) => {
  console.log('out:', Navigator);
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}   screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen 
        name="Setting"
        component={Settings}
      options={({ navigation }) => ({
          headerShown: true,
          title: 'Settings',
          headerLeft: () => (
           /*  <HeaderBackButton
              onPress={() => navigation.goBack()}
              title="Back" // You can set a custom title here
              tintColor="#fff" // Custom color for the back button
            /> */
           // <View>Back</View>
           <HeaderBackButton onPress={()=>navigation.goBack()} >{'<'}</HeaderBackButton>
          ),
        })}
      />
      <Drawer.Screen name="Blocked" component={Blocked} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Reward" component={RewardStackScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      <Drawer.Screen name="Community" component={CommunityStackStackScreen} />
      
        
      <Drawer.Screen name="Feed" component={Feedback}
       options={({ navigation }) => ({
          headerShown: true,
          title: 'Feedback',
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => {
                navigation.goBack() 
              }}
            />
          ),
        })}/>
    </Drawer.Navigator>
  ); 
};

export default DrawerNavigator;
