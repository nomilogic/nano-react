import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
  SafeAreaView,
} from 'react-native';
// import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Spinner from 'react-native-loading-spinner-overlay';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
// import {Container, Header, Content, DatePicker} from 'native-base';
import GetLocation from 'react-native-get-location';
import Geocoder from 'react-native-geocoding';
import OnboardingScreen from '../onboarding/OnboardingScreen';
// import DrawerNavigator from '../../navigation/DrawerNavigator';
import {useSelector, useDispatch} from 'react-redux';
import {signUp, loginSuccess, getUdid} from '../../../src/actions/loginAction';
// import {signUp} from '../../../src/api/loginApi';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-community/async-storage';
import uuid from 'react-native-uuid';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    email: '',
    dob: new Date(),
    profilepic: '',
    platform: Platform.OS,
    pushNotification: true,
    bio: '',
    deviceToken: '',
    lat: 0,
    lng: 0,
    location: '',
    pwd: '',
    confirm_password: '',
    check_textInputChange: false,
    check_emailInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    registered: false,
    isLoading: false,
  });
  const [date, setDate] = React.useState(new Date());
  // const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);
  // const [mode, setMode] = React.useState('date');
  // const notes = useSelector(state => state);
  const dispatch = useDispatch();
  // const addUser = user => dispatch(userSign(user));
  // React.useEffect(() => {
  //   let fcmTokenStore = await AsyncStorage.getItem('fcmToken');
  //   setData({
  //     ...data,
  //     deviceToken: fcmTokenStore,
  //
  //   });
  // }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setData({
      ...data,
      dob: selectedDate,
    });
    // console.log(date);
  };
  const showDatepicker = () => {
    setShow(true);
    // setMode('date');
  };

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const emailInputChange = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(val) !== false) {
      setData({
        ...data,
        email: val,
        check_emailInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_emailInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      pwd: val,
    });
  };
  const handleBioChange = (val) => {
    setData({
      ...data,
      bio: val,
    });
  };
  // const setDate = (newDate) => {
  //   // this.setState({ chosenDate: newDate });
  //   // dob
  //   setData({
  //     ...data,
  //     chosenDate: newDate,
  //   });
  // };
  // const handleConfirmPasswordChange = (val) => {
  //   setData({
  //     ...data,
  //     confirm_password: val,
  //   });
  // };
  //
  // const updateSecureTextEntry = () => {
  //   setData({
  //     ...data,
  //     secureTextEntry: !data.secureTextEntry,
  //   });
  // };

  // const updateConfirmSecureTextEntry = () => {
  //   setData({
  //     ...data,
  //     confirm_secureTextEntry: !data.confirm_secureTextEntry,
  //   });
  // };
  // const signUpHandle = (lati, longi) => {
  //   if (
  //     // data.pwd.length != 0 &&
  //     data.username.length != 0 &&
  //     data.check_emailInputChange
  //   ) {
  //     console.log('Register', data);
  //   } else {
  //     console.log('ERROR', data);
  //   }
  // };

  const registerUser = async (obj) => {
    let fcmTokenStore = await AsyncStorage.getItem('fcmToken');
    let Uuid = await AsyncStorage.getItem('Uuid');
    obj.deviceToken = fcmTokenStore;
    obj.uuid = Uuid;
    const res = await signUp(obj);
    // console.log(res);
    setData({...data, isLoading: false});
    if (res.status === 200) {
      // console.log(res.data);
      const jsonValue = JSON.stringify(res.data);
      await AsyncStorage.setItem('userData', jsonValue);
      dispatch(loginSuccess(res.data));
      setData({registered: true});
    } else {
      Alert.alert('Error', res.msg, [{text: 'Okay'}]);
    }
  };

  async function getLocation() {
    return GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
    })
      .then((location) => {
        // console.log(location.latitude, 'location:::::>>>', location.longitude);
        let latitude = location.latitude;
        let longitude = location.longitude;
        setData({
          ...data,
          lat: latitude,
          lng: longitude,
        });
        return Geocoder.from(latitude, longitude).then((json) => {
          // console.log('=================================');
          let userlocation =
            json.results[0].address_components[
              json.results[0].address_components.length - 2
            ].long_name +
            ',' +
            json.results[0].address_components[
              json.results[0].address_components.length - 4
            ].long_name;
          let obj = {
            status: 200,
            latitude: location.latitude,
            longitude: location.longitude,
            location: userlocation,
          };
          return obj;
        });
      })
      .catch((ex) => {
        const {code, message} = ex;
        console.warn(code, message);
        if (code === 'CANCELLED') {
          Alert.alert('Location cancelled by user or by another request');
        }
        if (code === 'UNAVAILABLE') {
          Alert.alert('Location service is disabled or unavailable');
        }
        if (code === 'TIMEOUT') {
          Alert.alert('Location request timed out');
        }
        if (code === 'UNAUTHORIZED') {
          Alert.alert('Authorization denied');
        }
        let obj = {
          status: 500,
          latitude: '',
          longitude: '',
          location: '',
          code: code,
          message: message,
        };
        return obj;
      });
  }

  async function addUuid() {
    let olduuid = await AsyncStorage.getItem('Uuid');
    if (olduuid == null) {
      let udid = uuid.v4();
      const udId = await getUdid(udid);
      // console.log('Uuid   addUuid', udId.data.data.uuid);
      const setUdid = await AsyncStorage.setItem('Uuid', udId.data.data.uuid);
      // console.log('Uuid   addUuid', udId.data.data.uuid);
      // console.log('==============================');
      return 'done';
    } else {
      return 'done';
    }
  }

  const getAge = async (birthDateString) => {
    var today = new Date();
    var birthDate = new Date(birthDateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  const loginHandle = async (username, password, check_emailInputChange) => {
    if (data.pwd.length == 0) {
      Alert.alert('Please enter you password.');
      return;
    }
    if (data.username.length == 0) {
      Alert.alert('Please enter username.');
      return;
    }
    // console.log('data.check_emailInputChange', data.check_emailInputChange);
    // console.log('--');
    if (!data.check_emailInputChange) {
      Alert.alert('Please enter correct email.');
      return;
    }
    const age = await getAge(data.dob);
    if (age <= 13) {
      Alert.alert('You Must Be 13 Years Old');
      return;
    }
    // this.getAge(this.account.dob) <= 13
    // if (
    //   getAge(data.dob) <= 13
    //   // data.pwd.length != 0
    //   // data.username.length != 0
    //   // data.check_emailInputChange
    // ) {
    setData({...data, isLoading: true});
    const udid = await addUuid();
    // console.log('udiddddd', udid);
    const loc = await getLocation();
    // console.log('RESULT FROM ASYNC========>', loc);
    let account = {
      userName: data.username,
      email: data.email,
      pwd: data.pwd,
      uuid: '',
      profilepic: data.profilepic,
      platform: data.platform,
      dob: data.dob,
      pushNotification: true,
      bio: data.bio,
      deviceToken: '',
      lat: loc.latitude,
      lng: loc.longitude,
      location: loc.location,
    };
    registerUser(account);
    // } else {
    //   Alert.alert('Please enter you password.');
    // }
  };

  return data.registered === true ? (
    <OnboardingScreen />
  ) : (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FF5A60" />
      <SafeAreaView style={[styles.container]} backgroundColor="transparent">
        <View style={[styles.inPtxtCont]}>
          <TextInput
            style={styles.inputTxt}
            // underlineColorAndroid = "transparent"
            placeholder="Name"
            placeholderTextColor="rgba(0, 0, 0, 0.4)"
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />

          <TextInput
            style={styles.inputTxt}
            // underlineColorAndroid = "transparent"
            placeholder="Email"
            placeholderTextColor="rgba(0, 0, 0, 0.4)"
            autoCapitalize="none"
            onChangeText={(val) => emailInputChange(val)}
          />

          <TextInput
            style={styles.inputTxt}
            // underlineColorAndroid = "transparent"
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="rgba(0, 0, 0, 0.4)"
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />

          <View>
            <TouchableOpacity onPress={showDatepicker}>
              {/* <Text title="DOB" /> */}
              <Text
                style={[
                  styles.inputTxt,
                  {
                    paddingVertical: 16,
                    paddingLeft: 4,
                    color: 'rgba(0, 0, 0, 0.4)',
                  },
                ]}>
                DOB
              </Text>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={'date'}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </TouchableOpacity>
          </View>

          {/* <View
            style={styles.inputTxt}
            placeholderTextColor="rgba(0, 0, 0, 0.4)">

            <TouchableOpacity onPress={showDatepicker}>*/}
          {/*  <Text title="DOB" />
          </View> */}

          <TextInput
            style={styles.mInputTxt}
            // underlineColorAndroid = "transparent"
            placeholder="Describe who you are"
            placeholderTextColor="rgba(0, 0, 0, 0.4)"
            // autoCapitalize = "none"
            multiline={true}
            numberOfLines={5}
            onChangeText={(val) => handleBioChange(val)}
          />
        </View>

        <View style={styles.btnCont}>
          <TouchableOpacity
            onPress={() => {
              loginHandle(data.username, data.pwd, data.check_emailInputChange);
            }}
            style={styles.suBtn}>
            <LinearGradient
              useAngle={true}
              angle={45}
              angleCenter={{x: 0.5, y: 0.5}}
              colors={['#FF5A60', '#D3D454']}
              style={styles.suGradient}>
              <Text style={styles.suText}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={[styles.rdTxtCont]}>
          <TouchableOpacity>
            <Text style={[styles.rdTxt]}>Policies</Text>
          </TouchableOpacity>
        </View>
        <Spinner
          visible={data.isLoading}
          textContent={'Please wait...'}
          textStyle={styles.spinnerTextStyle}
        />
      </SafeAreaView>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  inPtxtCont: {
    // top:"20%",
    // backgroundColor: 'rgba(0, 0, 0, 0.4)',
    // borderRadius:10,
    width: '80%',
    // height:40,
    // marginBottom:20,
    // paddingLeft:35,
    // borderBottomColor: 'red',
    // borderBottomWidth: 2,
    // marginBottom: 30,
  },
  inputTxt: {
    color: 'rgba(0, 0, 0, 0.4)',
    // fontSize:14,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 1,
  },
  mInputTxt: {
    color: 'rgba(0, 0, 0, 0.4)',
    // fontSize:14,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 1,
    textAlignVertical: 'top',
  },
  // inputTxtIcon: {
  //   color:'rgba(255, 255, 255, .8)',
  //   top:10,
  //   position:'absolute',
  //   left:10,
  // },
  rdTxtCont: {
    top: '30%',
  },
  rdTxt: {
    color: '#DB55BC',
    // fontSize: 20,
    textTransform: 'uppercase',
  },
  buttonCont: {
    top: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    // height:50,
    // flex:1,
    // backgroundColor:"red",
  },

  linearGradient: {
    flex: 1,
  },
  button: {
    // borderWidth:1,
    // borderColor:'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 50,
    // backgroundColor:'#fff',
    // borderRadius:10,
    // marginBottom:20,
  },
  buttonTxt: {
    color: '#fff',
    textTransform: 'uppercase',
  },

  btnCont: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    top: '20%',
  },
  suGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  suBtn: {
    width: '100%',
    height: 45,
  },
  suText: {
    color: 'white',
    // fontSize: 16
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
