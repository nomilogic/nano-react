// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
// import 'react-native-gesture-handler';
// import React, {Fragment, useEffect} from 'react';
// // import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Alert,
//   Button,
// } from 'react-native';
//
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// // import messaging from '@react-native-firebase/messaging';
// // import firebase from '@react-native-firebase/app';
// import {NavigationContainer} from '@react-navigation/native';
// // import {createStackNavigator} from '@react-navigation/stack';
// // import {RootStackScreen} from './StackNavigator';
// import BottomTabNavigator from './TabNavigator';
// import DrawerNavigator from './DrawerNavigator';
// // import HomeScreen from './HomeScreen';
// // import DetailsScreen from './DetailsScreen';
//
// // messaging().setBackgroundMessageHandler(async (remoteMessage) => {
// //   console.log('Message handled in the background!', remoteMessage);
// // });
// // const Stack = createStackNavigator();
// export default function App() {
//   // var firebaseConfig = {
//   //   apiKey: 'AIzaSyD4dHv8yhXXJ4f327pU2UNeZbF51FY-uhc',
//   //   authDomain: 'nano-8302b.firebaseapp.com',
//   //   databaseURL: 'https://nano-8302b.firebaseio.com',
//   //   projectId: 'nano-8302b',
//   //   storageBucket: 'nano-8302b.appspot.com',
//   //   messagingSenderId: '829128185688',
//   //   appId: '1:829128185688:android:7caa042c36c13f37',
//   //   measurementId: 'G-measurement-id',
//   // };
//
//   useEffect(() => {
//     // console.log('useEffect:');
//     // firebase.initializeApp(firebaseConfig);
//     // requestUserPermission();
//     // createNotificationListeners();
//     // const unsubscribe = messaging().onMessage(async (remoteMessage) => {
//     //   console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
//     // });
//     //
//     // const msg = messaging.setBackgroundMessageHandler(async (remoteMessage) => {
//     //   console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
//     // });
//     //
//     // return unsubscribe;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//
//   // const requestUserPermission = async () => {
//   //   const authStatus = await messaging().requestPermission();
//   //   const enabled =
//   //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//   //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
//   //
//   //   if (enabled) {
//   //     getFcmToken(); //<---- Add this
//   //     console.log('Authorization status:', authStatus);
//   //   }
//   // };
//
//   // const getFcmToken = async () => {
//   //   const fcmToken = await messaging().getToken();
//   //   if (fcmToken) {
//   //     console.log(fcmToken);
//   //     console.log('Your Firebase Token is:', fcmToken);
//   //   } else {
//   //     console.log('Failed', 'No token received');
//   //   }
//   // };
//
//   // const createNotificationListeners = async () => {
//   //   const unsubscribe = messaging().onMessage(async (remoteMessage) => {
//   //     console.log(
//   //       'A new FCM message arrived!!!',
//   //       JSON.stringify(remoteMessage),
//   //     );
//   //     const {title, body} = remoteMessage.notification;
//   //     displayNotification(title, body);
//   //   });
//   //   return unsubscribe;
//   //
//   //   // eslint-disable-next-line no-unreachable
//   //   // const notificationOpen = await messaging().setBackgroundMessageHandler();
//   //   // if (notificationOpen) {
//   //   //   const {title, body} = notificationOpen.notification;
//   //   //   displayNotification(title, body);
//   //   // }
//   //
//   //   // const notificationOpen = await firebase.notifications().getInitialNotification();
//   //   // if (notificationOpen) {
//   //   //   const {title, body} = notificationOpen.notification;
//   //   //   displayNotification(title, body);
//   //   // }
//   // };
//
//   // const displayNotification = async (title, body) => {
//   //   // we display notification in alert box with title and body
//   //   Alert.alert(
//   //     title,
//   //     body,
//   //     [{text: 'Ok', onPress: () => console.log('ok pressed')}],
//   //     {cancelable: false},
//   //   );
//   // };
//
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//     </NavigationContainer>
//   );
// }
//
// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });
//
// // export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component, useEffect, useMemo} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';
// import firebase from 'firebase';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/reducers/index';
import thunk from 'redux-thunk';
import Config from './serverConfig';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import MainStackNavigator from './src/navigation/StackNavigator';
// import BottomTabNavigator from './src/navigation/TabNavigator';
import {LoginStackScreen} from './src/navigation/StackNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';
// import {AuthContext} from './src/components/context';
import Geocoder from 'react-native-geocoding';
import messaging from '@react-native-firebase/messaging';

import fb from '@react-native-firebase/app';
const firebase = !fb.apps.length
  ? fb.initializeApp(Config.FIRE_BASE_CONFIG)
  : fb.app();
// firebase.initializeApp(Config.FIRE_BASE_CONFIG);
let store = createStore(rootReducer, applyMiddleware(thunk));
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);
});
// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const App: () => React$Node = () => {
// const authContext = React.useMemo(
//   () => ({
//     signIn: async foundUser => {
//       const userToken = foundUser;
//       const userData = foundUser;
//       try {
//         const userData = JSON.stringify(foundUser);
//         console.log('SignIn Context');
//         await AsyncStorage.setItem('userData', userData);
//       } catch (e) {
//         console.log(e);
//       }
//       // console.log('user token: ', userToken);
//       // dispatch({type: 'LOGIN', id: userName, token: userToken});
//     },
//     signOut: async () => {
//       try {
//         await AsyncStorage.removeItem('userData');
//       } catch (e) {
//         console.log(e);
//       }
//       // dispatch({type: 'LOGOUT'});
//     },
//     signUp: () => {
//       // setUserToken('fgkj');
//       // setIsLoading(false);
//     },
//   }),
//   [],
// );
// useEffect(() => {
//   setTimeout(async () => {
//     // setIsLoading(false);
//     let userData;
//     userData = null;
//     try {
//       console.log('userEffect');
//       userData = await AsyncStorage.getItem('userData');
//     } catch (e) {
//       console.log(e);
//     }
//     // console.log('user token: ', userToken);
//     // dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
//   }, 1000);
// }, []);
// var firebaseConfig = {
//   apiKey: 'AIzaSyD4dHv8yhXXJ4f327pU2UNeZbF51FY-uhc',
//   authDomain: 'nano-8302b.firebaseapp.com',
//   databaseURL: 'https://nano-8302b.firebaseio.com',
//   projectId: 'nano-8302b',
//   storageBucket: 'nano-8302b.appspot.com',
//   messagingSenderId: '829128185688',
//   appId: '1:829128185688:android:7caa042c36c13f37',
//   measurementId: 'G-measurement-id',
// };
export default class App extends Component {
  state = {loggedIn: null, isLoading: true};
  componentDidMount() {
    this.checkUserSignedIn();
    this.requestUserPermission();
    this.getFcmToken();
    this.createNotificationListeners();

    if (Text.defaultProps == null) {
      Text.defaultProps = {};
      Text.defaultProps.allowFontScaling = false;
    }
  }

  requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      this.getFcmToken(); //<---- Add this
      // console.log('Authorization status:', authStatus);
    }
  };

  getFcmToken = async () => {
    let fcmTokenStore = await AsyncStorage.getItem('fcmToken');

    if (fcmTokenStore) {
      // console.log(fcmTokenStore);
      console.log('Your Firebase Token is:', fcmTokenStore);
    } else {
      const fcmToken = await messaging().getToken();
      await AsyncStorage.setItem('fcmToken', fcmToken);
      // console.log('Your Firebase Token is::', fcmToken);
    }
  };

  createNotificationListeners = async () => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log(
        'A new FCM message arrived!!!',
        JSON.stringify(remoteMessage),
      );
      const {title, body} = remoteMessage.notification;
      this.displayNotification(title, body);
    });
    return unsubscribe;
  };

  displayNotification = async (title, body) => {
    // we display notification in alert box with title and body
    Alert.alert(
      title,
      body,
      [{text: 'Ok', onPress: () => console.log('ok pressed')}],
      {cancelable: false},
    );
  };

  async checkUserSignedIn() {
    try {
      let value = await AsyncStorage.getItem('userData');
      // console.log('asyc', value);
      if (value != null) {
        this.setState({loggedIn: true});
        this.setState({isLoading: false});
      } else {
        this.setState({isLoading: false});
        Geocoder.init(Config.GOOGLE_API_KEY);
      }
    } catch (error) {
      // Error retrieving data
    }
  }
  render() {
    return this.state.isLoading === true ? (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
      <Provider store={store}>
        <NavigationContainer>
          {this.state.loggedIn !== null ? (
            <DrawerNavigator />
          ) : (
            <LoginStackScreen />
          )}
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});
