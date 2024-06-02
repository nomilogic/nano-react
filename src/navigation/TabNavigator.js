// ./navigation/TabNavigator.js

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  RootStackScreen,
  SettingStackScreen,
  TaskStackScreen,
  ChampionStackScreen,
  ImpactStackScreen,
} from './StackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Task'}
      shifting={true}
      backBehavior={'none'}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'News') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'Championship') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === 'Task') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Versus') {
            iconName = focused ? 'star' : 'star-outline';
          } else if (route.name === 'Impact') {
            iconName = focused ? 'earth' : 'earth-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}>
      <Tab.Screen
        name="News"
        component={RootStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Championship"
        component={ChampionStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Task"
        component={TaskStackScreen}
        options={{headerShown: false}}
      />
      {/*<Tab.Screen name="Task" component={MainStackNavigator} />*/}
      {/*<Tab.Screen name="Versus" component={VersusStackNavigator} />*/}
      <Tab.Screen
        name="Impact"
        component={ImpactStackScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
