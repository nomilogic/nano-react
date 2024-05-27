import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
// import {ProgressBar} from 'react-native-paper';
// import LinearGradient from 'react-native-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {SvgCssUri} from 'react-native-svg/css';

const ActivityScreen = ({navigation}) => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FF5A60" />

      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}>
          <SafeAreaView
            style={[styles.container]}
            backgroundColor="transparent">
            <View
              style={{
                flex: 1,
                backgroundColor: 'gray',
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>Google Map</Text>
            </View>
            <View style={{flex: 1}}>
              <View
                style={{
                  flex: 1,
                  //   alignItems: 'center',
                  //   justifyContent: 'space-evenly',
                  flexDirection: 'row',
                  //   backgroundColor: 'tan',
                }}>
                <View style={{flex: 1, paddingLeft: 30}}>
                  <Text
                    style={{
                      flex: 1,
                      textAlignVertical: 'bottom',
                      fontFamily: 'FiraSans-Bold',
                      fontSize: 18,
                    }}>
                    Bicycle
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      textAlignVertical: 'bottom',
                      fontFamily: 'FiraSans-Regular',
                      color: '#BBBBBB',
                      fontSize: 18,
                    }}>
                    Distance
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      textAlignVertical: 'bottom',
                      fontFamily: 'FiraSans-Regular',
                      color: '#BBBBBB',
                      fontSize: 18,
                    }}>
                    Avoided CO2
                  </Text>
                </View>
                <View style={{flex: 1, paddingRight: 30}}>
                  <Text
                    style={{
                      flex: 1,
                      textAlignVertical: 'bottom',
                      textAlign: 'right',
                      fontFamily: 'FiraSans-Bold',
                      color: '#FF5A60',
                      fontSize: 18,
                    }}>
                    00:00.000
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      textAlignVertical: 'bottom',
                      textAlign: 'right',
                      fontFamily: 'FiraSans-Medium',
                      fontSize: 16,
                    }}>
                    Calculating...
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      textAlignVertical: 'bottom',
                      textAlign: 'right',
                      fontFamily: 'FiraSans-Medium',
                      fontSize: 16,
                      color: '#BBBBBB',
                    }}>
                    Calculating...
                  </Text>
                </View>
              </View>
              <View style={{flex: 1}}>
                <View style={[styles.buttonCont]}>
                  <TouchableOpacity
                    style={[styles.button, {backgroundColor: '#FF5A60'}]}>
                    <Text style={[styles.buttonTxt, {color: '#fff'}]}>
                      Stop
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    // justifyContent: 'center',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    // marginHorizontal:20,
    // height:"100%",
    // width:"100%",
    // backgroundColor:"gray",
    // alignSelf: 'center',
    // flex:1,
  },
  contentContainer: {
    // backgroundColor:"purple",
    // justifyContent: 'center',
    // alignItems: 'center',
    // width:"100%",
    flex: 1,
  },
  buttonCont: {
    // top: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    // marginVertical:20,
  },
  button: {
    // borderWidth:1,
    // borderColor:'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    // marginBottom: 20,
    marginHorizontal: 10,
    // flex:1
  },
  buttonTxt: {
    color: '#DB55BC',
    textTransform: 'uppercase',
    fontFamily: 'FiraSans-Bold',
    fontSize: 16,
  },
});

export default ActivityScreen;
