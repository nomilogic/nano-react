// ./screens/Versus.js
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  Image,
} from 'react-native';
// import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'react-native-paper';
import {AuthContext} from '../../components/context';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import * as loginAction from '../../../src/actions/loginAction';
import Users from '../../../src/model/users';
// import SplashScreen from 'react-native-splash-screen';
import Spinner from 'react-native-loading-spinner-overlay';
import DrawerNavigator from '../../../src/navigation/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.updateSecureTextEntry = this.updateSecureTextEntry.bind(this);
    this.loginHandle = this.loginHandle.bind(this);
  }

  state = {
    // username: '',
    // password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    email: '',
    pwd: '',
    deviceToken: '',
    lat: 0,
    lng: 0,
    location: '',
    loginState: false,
    isLoading: false,
    loginSuccess: false,
  };
  // // const {colors} = useTheme();
  //
  // // const {signIn} = React.useContext(AuthContext);
  handlePasswordChange(val) {
    if (val.trim().length >= 3) {
      this.setState({
        pwd: val,
        isValidPassword: true,
      });
    } else {
      this.setState({
        pwd: val,
        isValidPassword: false,
      });
    }
  }
  //
  updateSecureTextEntry() {
    this.setState({secureTextEntry: !this.state.secureTextEntry});
  }
  //
  handleValidUser(val) {
    if (val.trim().length >= 4) {
      this.setState({
        isValidUser: true,
      });
    } else {
      this.setState({
        isValidUser: false,
      });
    }
  }
  //
  textInputChange(val) {
    if (val.trim().length >= 4) {
      this.setState({
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      this.setState({
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  }
  //
  loginHandle(email, pwd) {
    if (this.state.email.length == 0 || this.state.pwd.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }
    let account = {
      email: this.state.email,
      pwd: this.state.pwd,
      deviceToken: '',
      lat: 0,
      lng: 0,
      location: '',
    };
    this.setState({isLoading: true});
    this.props.actions.login(account).then(async (resp) => {
      this.setState({isLoading: false});
      if (resp.data.status == 200) {
        const jsonValue = JSON.stringify(resp.data.data);
        await AsyncStorage.setItem('userData', jsonValue);
        // Alert.alert('Success!', 'Username Correct.', [{text: 'Okay'}]);
        this.setState({loginSuccess: true});
      } else {
        Alert.alert('Wrong Input!', 'Username InCorrect.', [{text: 'Okay'}]);
      }
    });
    // signIn(foundUser);
  }
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    // this.props.actions.getServerUrl();
    // SplashScreen.hide();
  }
  render() {
    return this.state.loginSuccess === true ? (
      <DrawerNavigator />
    ) : (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#FF5A60" />
        <LinearGradient
          useAngle={true}
          angle={45}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['#DB55BC', '#FF5A60']}
          style={styles.linearGradient}>
          <SafeAreaView
            style={[styles.container]}
            backgroundColor="transparent">
            <Image
              style={[styles.logo]}
              source={{uri: 'https://media.nanodot.us/img/Nano_text.png'}}
            />

            <View style={[styles.logoTxtCont]}>
              <Text style={[styles.logoTxt]}>Small deeds. Big Impact.</Text>
            </View>

            <View style={[styles.inPtxtCont]}>
              <Ionicons name="person" size={20} style={styles.inputTxtIcon} />
              <TextInput
                style={styles.inputTxt}
                underlineColorAndroid="transparent"
                placeholder="Email"
                onChangeText={(val) => this.textInputChange(val)}
                placeholderTextColor="#fff"
                autoCapitalize="none"
              />
            </View>

            <View style={[styles.inPtxtCont]}>
              <Ionicons
                name="lock-closed"
                size={20}
                style={styles.inputTxtIcon}
              />
              <TextInput
                style={styles.inputTxt}
                underlineColorAndroid="transparent"
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#fff"
                autoCapitalize="none"
                onChangeText={(val) => this.handlePasswordChange(val)}
              />
            </View>

            <View style={[styles.fpTxtCont]}>
              <TouchableOpacity>
                <Text style={[styles.fpTxt]}>Forget Your Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.buttonCont]}>
              <TouchableOpacity
                onPress={() => {
                  this.loginHandle(this.state.email, this.state.pwd);
                }}
                style={[styles.button]}>
                <Text style={[styles.buttonTxt]}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUpScreen')}
                style={[styles.button, {backgroundColor: '#6ACCB3'}]}>
                <Text style={[styles.buttonTxt, {color: '#fff'}]}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                top: '50%',
                opacity: 0.8,
              }}>
              <View style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
              <View>
                <Text style={[styles.sapTxt]}>Or</Text>
              </View>
              <View style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
            </View>

            <View style={[styles.soclBtnsCont]}>
              <TouchableOpacity style={[styles.soclBtns]}>
                <Ionicons
                  name="logo-facebook"
                  size={20}
                  style={styles.soclIcons}
                />
              </TouchableOpacity>

              <TouchableOpacity style={[styles.soclBtns]}>
                <Ionicons
                  name="logo-linkedin"
                  size={20}
                  style={styles.soclIcons}
                />
              </TouchableOpacity>

              <TouchableOpacity style={[styles.soclBtns]}>
                <Ionicons
                  name="logo-twitter"
                  size={20}
                  style={styles.soclIcons}
                />
              </TouchableOpacity>
              <Spinner
                visible={this.state.isLoading}
                textContent={'Please wait...'}
                textStyle={styles.spinnerTextStyle}
              />
            </View>
          </SafeAreaView>
        </LinearGradient>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    // login: state.login,
    // logout: state.logout,
    // menuPermissions: state.login.menuPermissions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

// export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  linearGradient: {
    flex: 1,
  },
  logo: {
    // flex: 1,
    // aspectRatio: .7,
    // backgroundColor:"red",
    height: 90,
    width: 274,
    resizeMode: 'contain',
    top: '10%',
  },
  logoTxtCont: {
    top: '11%',
  },
  logoTxt: {
    // flex:1,
    color: 'rgba(255, 255, 255, .6)',
    fontSize: 20,
    // position: 'absolute',
    // backgroundColor:"red",
  },
  inPtxtCont: {
    top: '20%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 10,
    width: '90%',
    marginBottom: 20,
    paddingLeft: 35,
  },
  inputTxt: {
    color: '#fff',
    // fontSize:14,
  },
  inputTxtIcon: {
    color: 'rgba(255, 255, 255, .8)',
    top: 10,
    position: 'absolute',
    left: 10,
  },
  fpTxtCont: {
    top: '21%',
  },
  fpTxt: {
    color: 'rgba(255, 255, 255, .6)',
    fontSize: 20,
  },
  buttonCont: {
    top: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    // borderWidth:1,
    // borderColor:'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonTxt: {
    color: '#DB55BC',
    textTransform: 'uppercase',
  },
  sapTxt: {
    width: 50,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
  soclBtnsCont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: '55%',
  },
  soclBtns: {
    borderColor: 'rgba(255,255,255,0.6)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    // backgroundColor:'#fff',
    borderRadius: 50,
    margin: 10,
  },
  soclIcons: {
    color: 'rgba(255, 255, 255, .8)',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
