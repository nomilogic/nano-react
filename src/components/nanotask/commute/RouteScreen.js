import 'react-native-gesture-handler';
import React, {useEffect, useRef} from 'react';

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
  Dimensions,
} from 'react-native';
// import {ProgressBar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SvgCssUri} from 'react-native-svg/css';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import MapViewDirections from 'react-native-maps-directions';
// import MapView from 'react-native-maps';

// const {width, height} = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const origin = {latitude: 37.3318456, longitude: -122.0296002};
// const destination = {latitude: 37.771707, longitude: -122.4053769};
// const GOOGLE_MAPS_APIKEY = 'AIzaSyCQ_g14OfzLkLOD6MGp4iJPuau2mbnjwvw';
// const LATITUDE = 37.771707;
// const LONGITUDE = -122.4053769;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const RouteScreen = ({navigation}) => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  // const ref = useRef();
  //
  // useEffect(() => {
  //   ref.current?.setAddressText('Some Text');
  // }, []);

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
            <View style={{flex: 0.3}}>
              <View
                style={{
                  flex: 0.6,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <View style={[styles.inPtxtCont, {backgroundColor: '#203541'}]}>
                  {/*<Ionicons*/}
                  {/*  name="search-outline"*/}
                  {/*  size={20}*/}
                  {/*  style={styles.inputTxtIcon}*/}
                  {/*/>*/}
                  {/*<TextInput*/}
                  {/*  style={styles.inputTxt}*/}
                  {/*  underlineColorAndroid="transparent"*/}
                  {/*  placeholder="Where From?"*/}
                  {/*  onChangeText={(val) => this.textInputChange(val)}*/}
                  {/*  placeholderTextColor="#E1E1E1"*/}
                  {/*  autoCapitalize="none"*/}
                  {/*/>*/}
                  <GooglePlacesAutocomplete
                    style={styles.inputTxt}
                    keyboardShouldPersistTaps="handled"
                    textInputProps={{}}
                    minLength={1}
                    placeholder="Wheres t"
                    onPress={(data, details = null) => {
                      // 'details' is provided when fetchDetails = true
                      console.log(data, details);
                    }}
                    onFail={(error) => console.error('ERROR:', error)}
                    query={{
                      key: 'AIzaSyAYGdj_lE7TlDjxgzKRBXvTvAE4zaN88XA',
                      language: 'en',
                    }}
                    currentLocation={true}
                    currentLocationLabel="Current location"
                  />
                </View>
                <View style={[styles.inPtxtCont, {backgroundColor: '#E1E1E1'}]}>
                  {/*<Ionicons*/}
                  {/*  name="search-outline"*/}
                  {/*  size={20}*/}
                  {/*  style={styles.inputTxtIcon}*/}
                  {/*/>*/}
                  {/*<TextInput*/}
                  {/*  style={styles.inputTxt}*/}
                  {/*  underlineColorAndroid="transparent"*/}
                  {/*  placeholder="Where To?"*/}
                  {/*  onChangeText={(val) => this.textInputChange(val)}*/}
                  {/*  placeholderTextColor="#203541"*/}
                  {/*  autoCapitalize="none"*/}
                  {/*/>*/}
                  {/*<GooglePlacesAutocomplete*/}
                  {/*  placeholder="Where To?"*/}
                  {/*  onPress={(data, details = null) => {*/}
                  {/*    // 'details' is provided when fetchDetails = true*/}
                  {/*    console.log('WhereTO', data, details);*/}
                  {/*  }}*/}
                  {/*  query={{*/}
                  {/*    key: 'AIzaSyCQ_g14OfzLkLOD6MGp4iJPuau2mbnjwvw',*/}
                  {/*    language: 'en',*/}
                  {/*  }}*/}
                  {/*/>*/}
                </View>
              </View>
              <View style={{flex: 0.4}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',

                    // top: '50%',
                    opacity: 1,
                  }}>
                  <View
                    style={{flex: 0.8, height: 2, backgroundColor: '#E1E1E1'}}
                  />
                </View>
                <View style={[styles.buttonCont]}>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      {
                        color: '#fff',
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,1)',
                      },
                    ]}>
                    <Text style={[styles.buttonTxt, {color: 'gray'}]}>
                      Cancel
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('SelectScreen')}
                    style={[styles.button, {backgroundColor: '#FF5A60'}]}>
                    <Text style={[styles.buttonTxt, {color: '#fff'}]}>
                      Done
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 0.7,
                backgroundColor: 'gray',
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>Google Map</Text>
              {/*<MapView*/}
              {/*  initialRegion={{*/}
              {/*    latitude: LATITUDE,*/}
              {/*    longitude: LONGITUDE,*/}
              {/*    latitudeDelta: LATITUDE_DELTA,*/}
              {/*    longitudeDelta: LONGITUDE_DELTA,*/}
              {/*  }}>*/}
              {/*  <MapViewDirections*/}
              {/*    origin={origin}*/}
              {/*    destination={destination}*/}
              {/*    apikey={GOOGLE_MAPS_APIKEY}*/}
              {/*  />*/}
              {/*</MapView>*/}
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
    width: 160,
    height: '50%',
    backgroundColor: '#fff',
    borderRadius: 10,
    // marginBottom: 20,
    marginHorizontal: 10,
    // flex:1
  },
  buttonTxt: {
    color: '#DB55BC',
    textTransform: 'uppercase',
    fontFamily: 'FiraSans-Light',
  },
  inPtxtCont: {
    // top: '20%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 10,
    width: '90%',
    marginVertical: 10,
    paddingLeft: 35,
  },
  inputTxt: {
    color: '#fff',
    // fontSize:14,
  },
  inputTxtIcon: {
    // color: 'rgba(255, 255, 255, .8)',
    color: '#FF5A60',
    top: 10,
    position: 'absolute',
    left: 10,
  },
});

export default RouteScreen;
