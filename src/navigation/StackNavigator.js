import React, {Component} from 'react';
import {View, Text, Image, Linking, Button, TouchableOpacity, Platform, Dimensions} from 'react-native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';
import SettingsScreen from '../components/SettingsScreen';
import SignInScreen from '../components/login/SignInScreen';
import SingUpScreen from '../components/login/SignUpScreen';
// import Settings from '../components/settings/Settings';
import OnboardingScreen from '../components/onboarding/OnboardingScreen';
import NanoTaskScreen from '../components/nanotask/nanoTask';
import NanoTaskDetailsScreen from '../components/nanotask/nanoTaskDetails';
import ActivityScreen from '../components/nanotask/commute/ActivityScreen';
import LogScreen from '../components/nanotask/commute/LogScreen';
import RouteScreen from '../components/nanotask/commute/RouteScreen';
import SelectScreen from '../components/nanotask/commute/SelectScreen';
import NanoTaskUpload from '../components/nanotask/nanoTaskUpload';
import NanoTaskUploadConfirm from '../components/nanotask/nanoTaskUploadConfirm';
import ChampionshipScreen from '../components/championship/Championship';
import Teamlist from '../components/championship/TeamList';
import TeamDetails from '../components/championship/TeamDetails';
import TeamStats from '../components/championship/TeamStats';
import MyImpactScreen from '../components/impact/Impact';
//import Profile from '../components/nanotask/commute/SelectScreen';
import Profile from '../components/profile/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import NewsFeed from '../components/feed/NewsFeed';
import UploadVideoScreen from '../components/feed/uploadVideo';
import CommentsScreen from '../components/comments/comments';
import AllTime from '../components/leaderboard/AllTime';
import UploadImageScreen from '../components/feed/uploadImage';
import UploadTextScreen from '../components/feed/uploadText';
import UploadLinkScreen from '../components/feed/uploadLink';
import CarbonCalculator from '../components/carbonCalclulator/carbonCalculator';
import Reward from '../components/reward/Reward';
import RewardDetails from '../components/reward/RewardDetails';
import RewardList from '../components/reward/RewardList';
import RewardAnalytics from '../components/reward/RewardAnalytics';
import Community from '../components/search/Community';
import Feed from '../components/community/Feed';
import Camera from '../components/camera/camera';
// import SplashScreen from 'react-native-splash-screen';
const RootStack = createStackNavigator();
const RootStackScreen = ({navigation}) => {
  console.log(navigation, 'naviRootStack');
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={NewsFeed}
        options={{
          title: 'News',
          headerLeft: () => (
            <Icon.Button
              name="menu"
              color="#000"
              style={{
                fontSize: 25,
                backgroundColor: '#fff',
                paddingLeft: 20,
                height: '100%',
              }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <RootStack.Screen name="Details" component={DetailsScreen} />
      <RootStack.Screen name="UploadVideo" component={UploadVideoScreen} />
      <RootStack.Screen name="UploadImage" component={UploadImageScreen} />
      <RootStack.Screen name="UploadLink" component={UploadLinkScreen} />
      <RootStack.Screen name="UploadText" component={UploadTextScreen} />
      <RootStack.Screen name="Comments" component={CommentsScreen} />
      {/*<RootStack.Screen name="Settings" component={Settings} />*/}
    </RootStack.Navigator>
  );
};

const SettingStack = createStackNavigator();
const SettingStackScreen = ({navigation}) => {
  return (
    <SettingStack.Navigator headerMode="none">
      {/*<SettingStack.Screen name="Setting" component={Settings} />*/}
    </SettingStack.Navigator>
  );
};
const RewardStack = createStackNavigator();
const RewardStackScreen = ({navigation}) => {
  return (
    <RewardStack.Navigator>
      <RewardStack.Screen name="Reward" component={Reward}  
      options={({ navigation }) => ({
          headerShown: true,
          title: 'Rewards',
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => {
                navigation.goBack()
                console.log('In');
                console.log();
              }}
            />
          )
        })}
        
        
        />
      <RewardStack.Screen name="RewardDetails" component={RewardDetails} 
       options={({ navigation }) => ({
          headerShown: true,
          title: 'Rewards',
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => {
                navigation.goBack()
                console.log('In');
                console.log();
              }}
            />
          ),
          headerRight: () => (

            <TouchableOpacity onPress={() =>{
              console.log(this)
              this.props.navigation.navigate('RewardAnalytics')

            }}
            style={{right: 10, backgroundColor: 'blue', padding:10}}>
              <Icon
              url="https://media.nanodot.us/icon/searchIcon.svg"
              height={20}
              width={20}
              color="#fff"
            />
            </TouchableOpacity>


          )
        })}/>
      <RewardStack.Screen name="RewardList" component={RewardList} />
      <RewardStack.Screen name="RewardAnalytics" component={RewardAnalytics} />

      {/*<SettingStack.Screen name="Setting" component={Settings} />*/}
    </RewardStack.Navigator>
  );
};


const LoginStack = createStackNavigator();
const LoginStackScreen = ({navigation}) => {
  return (
    <LoginStack.Navigator  screenOptions={{
      headerShown: false
    }}>
      <LoginStack.Screen name="SignInScreen" component={SignInScreen} />
      <LoginStack.Screen name="SignUpScreen" component={SingUpScreen} />
      <LoginStack.Screen name="Onboard" component={OnboardingScreen} />
    </LoginStack.Navigator>
  );
};
// const SettingStack = createStackNavigator();
// const SettingStackScreen = ({navigation}) => {
//     return (
//         <LoginStack.Navigator headerMode="none">
//             <LoginStack.Screen name="SignInScreen" component={SignInScreen} />
//             <LoginStack.Screen name="SignUpScreen" component={SingUpScreen} />
//             <LoginStack.Screen name="Onboard" component={OnboardingScreen} />
//         </LoginStack.Navigator>
//     );
// };

const TaskStack = createStackNavigator();
const TaskStackScreen = ({navigation}) => {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        name="NanoTask"
        component={NanoTaskScreen}
        options={{
          title: 'Nano Task',
          headerLeft: () => (
            <Icon.Button
              name="menu"
              color="#000"
              style={{
                fontSize: 25,
                backgroundColor: '#fff',
                paddingLeft: 20,
                height: '100%',
              }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <TaskStack.Screen
        name="NanoTaskDetails"
        component={NanoTaskDetailsScreen}
      />
      <TaskStack.Screen name="NanoTaskUpload" component={NanoTaskUpload} />
      <TaskStack.Screen name="ActivityScreen" component={ActivityScreen} />
      <TaskStack.Screen name="LogScreen" component={LogScreen} />
      <TaskStack.Screen name="RouteScreen" component={RouteScreen} />
      <TaskStack.Screen name="SelectScreen" component={SelectScreen} />
      <TaskStack.Screen name="Leaderboard" component={AllTime} />
      <TaskStack.Screen
        name="NanoTaskUploadConfirm"
        component={NanoTaskUploadConfirm}
        options={ {headerShown: false}}
      />
    </TaskStack.Navigator>
  );
};

const ChampionStack = createStackNavigator();
const ChampionStackScreen = ({navigation}) => {
  return (
    <ChampionStack.Navigator>
      <ChampionStack.Screen
        name="Championship"
        component={ChampionshipScreen}
        options={{
          title: 'Championship',
          headerLeft: () => (
            <Icon.Button
              name="menu"
              color="#000"
              style={{
                fontSize: 25,
                backgroundColor: '#fff',
                paddingLeft: 20,
                height: '100%',
              }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <ChampionStack.Screen name="List" component={Teamlist} />
      <ChampionStack.Screen name="Details" component={TeamDetails} />
      <ChampionStack.Screen name="Stats" component={TeamStats} />
    </ChampionStack.Navigator>
  );
};

const ImpactStack = createStackNavigator();
const ImpactStackScreen = ({navigation}) => {
  return (
    <ImpactStack.Navigator>
      <ImpactStack.Screen
        name="Impact"
        component={MyImpactScreen}
        options={{
          title: 'My Impact',
          headerLeft: () => (
            <Icon.Button
              name="menu"
              color="#000"
              style={{
                fontSize: 25,
                backgroundColor: '#fff',
                paddingLeft: 20,
                height: '100%',
              }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
   
      <ImpactStack.Screen
        name="CarbonCalculator"
        component={CarbonCalculator}
      />
    </ImpactStack.Navigator>
  );
};
const ProfileStack = createStackNavigator();
const ProfileStackScreen = ({navigation}) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
     options={({ navigation }) => ({
          headerShown: true,
          title: 'Profile',
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          
        })}
        title="Profile"
      />
   
      <ProfileStack.Screen
        name="CarbonCalculator"
        component={CarbonCalculator}
      />
    </ProfileStack.Navigator>
  );
};
const CommunityStackStack = createStackNavigator();
const CommunityStackStackScreen = ({navigation}) => {
  return (
    <CommunityStackStack.Navigator>
      <CommunityStackStack.Screen
        name="Community"
        component={Community}
       options={({ navigation }) => ({
          headerShown: true,
          title: 'Community',
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          
        })}
      />
   
      <CommunityStackStack.Screen
        name="CommunityFeed"
        component={Feed}
      />
         <RootStack.Screen name="UploadVideo" component={UploadVideoScreen} />
      <RootStack.Screen name="UploadImage" component={UploadImageScreen} />
      <RootStack.Screen name="UploadLink" component={UploadLinkScreen} />
      <RootStack.Screen name="UploadText" component={UploadTextScreen} />
      <RootStack.Screen name="Comments" component={CommentsScreen} />
    </CommunityStackStack.Navigator>
  );
};

export {
  RootStackScreen,
  SettingStackScreen,
  LoginStackScreen,
  TaskStackScreen,
  ChampionStackScreen,
  ImpactStackScreen,
  RewardStackScreen,
  ProfileStackScreen,
  CommunityStackStackScreen,
};
