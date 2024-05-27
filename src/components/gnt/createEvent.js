import 'react-native-gesture-handler';
import React, {useState} from 'react';
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
  Switch,
  Platform,
} from 'react-native';
// import {ProgressBar} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {SvgCssUri} from 'react-native-svg/css';
import NumericInput from 'react-native-numeric-input';
// const abc = ({navigation}) => {};

const createEvent = ({navigation}) => {
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);
  const showDatepicker = () => {
    setShow(true);
    // setMode('date');
  };

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

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
            <View style={{flex: 1}}>
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'flex-start',
                  padding: 20,
                }}>
                <Switch
                  trackColor={{false: '#dedede', true: '#ffdadb'}}
                  thumbColor={isEnabled ? '#FF5A60' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
                <Text
                  style={{
                    color: 'red',
                    fontSize: 8,
                    fontFamily: 'FiraSans-Regular',
                    marginVertical: 5,
                  }}>
                  Single-Day Event
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  flex: 1,
                  alignSelf: 'center',
                  // backgroundColor: 'tan',
                }}>
                <TouchableOpacity>
                  <Image
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 100,
                      borderColor: 'lightgray',
                      borderWidth: 1,
                      //   top: -50,
                      //   position: 'absolute',
                      resizeMode: 'cover',
                      margin: 10,
                    }}
                    source={{
                      uri: 'https://media.nanodot.us/img/addBtn.png',
                    }}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    color: '#FF5A60',
                    fontSize: 10,
                    fontFamily: 'FiraSans-Regular',
                  }}>
                  Logo Image
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  // paddingHorizontal: 10,
                  // backgroundColor: '#fff',
                  flex: 1,
                  // borderRadius: 15,
                  // shadowColor: '#000',
                  // shadowOffset: {
                  //   width: 0,
                  //   height: 5,
                  // },
                  // shadowOpacity: 0.5,
                  // shadowRadius: 5,
                  // elevation: 5,
                  // height: 160,
                  // top: -30,
                  width: '90%',
                  alignSelf: 'center',
                  // backgroundColor: 'tan',
                  marginVertical: 20,
                }}>
                <TextInput
                  style={styles.titleInputTxt}
                  underlineColorAndroid="transparent"
                  placeholder="Service Project Title Goes Here.."
                  //   onChangeText={(val) => this.textInputChange(val)}
                  placeholderTextColor="rgba(0, 0, 0, 0.4)"
                  autoCapitalize="none"
                />

                <View style={[styles.inPtxtCont]}>
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
                        Start Date
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
                        End Date
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
                        Start Time
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
                        End Time
                      </Text>
                      {show && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={date}
                          mode={'time'}
                          is24Hour={true}
                          display="clock"
                          onChange={onChange}
                        />
                      )}
                    </TouchableOpacity>
                  </View>

                  {/* <TextInput
                    style={styles.inputTxt}
                    // underlineColorAndroid = "transparent"
                    placeholder="End Time"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    autoCapitalize="none"
                    // onChangeText={(val) => handlePasswordChange(val)}
                  /> */}
                </View>
              </View>
              <View
                style={{
                  // alignItems: 'center',
                  flex: 1,
                  width: '90%',
                  alignSelf: 'center',
                  marginVertical: 10,
                  // backgroundColor:'tan'
                }}>
                <Text style={styles.lblText}>
                  How many volunteers do you required?
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <NumericInput
                    value={0}
                    onChange={(value) => console.log(value)}
                    onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                    totalWidth={50}
                    totalHeight={30}
                    type="up-down"
                    step={1}
                    valueType="real"
                    rounded
                    textColor="#999"
                    iconStyle={{color: '#000'}}
                  />
                  <Ionicons
                    name="person"
                    size={20}
                    style={{
                      color: '#A2A2A2',
                      // top: 10,
                      // position: 'absolute',
                      // right: 10,
                      // textAlignVertical:"center",
                      alignSelf: 'center',
                      // flex:.1,
                      // backgroundColor: '#BBB',
                      // borderRadius: 20,
                      marginLeft: 4,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  // alignItems: 'center',
                  flex: 1,
                  width: '90%',
                  alignSelf: 'center',
                  marginVertical: 10,
                  // backgroundColor:'tan'
                }}>
                <Text style={styles.lblText}>
                  Select Sustainable Development Goals
                </Text>
                <View
                  style={{
                    marginVertical: 20,
                    // flexDirection: 'row',
                    // alignContent: 'flex-start',
                    flexWrap: 'wrap',
                    flex: 1,
                  }}>
                  <View
                    style={{
                      // marginVertical: 20,
                      flexDirection: 'row',
                      // alignContent: 'stretch',
                      // flex: 1,
                      justifyContent: 'flex-start',
                      flexWrap: 'wrap',
                    }}>
                    <TouchableOpacity
                      style={[
                        styles.sdgBtns,
                        {backgroundColor: '#f58d96', borderColor: '#EB1C2D'},
                      ]}>
                      <Text numberOfLines={1} style={styles.sdgTxt}>
                        No Poverty
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.sdgBtns,
                        {backgroundColor: '#e9cf94', borderColor: '#d3a029'},
                      ]}>
                      <Text numberOfLines={1} style={styles.sdgTxt}>
                        Zero Hunger
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.sdgBtns,
                        {backgroundColor: '#99eab1', borderColor: '#279b48'},
                      ]}>
                      <Text numberOfLines={1} style={styles.sdgTxt}>
                        Good Health & Well-Being
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.sdgBtns,
                        {backgroundColor: '#e18f99', borderColor: '#c31f33'},
                      ]}>
                      <Text numberOfLines={1} style={styles.sdgTxt}>
                        Quality Education
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.sdgBtns,
                        {backgroundColor: '#7fd6ec', borderColor: '#00aed9'},
                      ]}>
                      <Text numberOfLines={1} style={styles.sdgTxt}>
                        Clean Water & Sanitation
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.sdgBtns,
                        {backgroundColor: '#c78b9b', borderColor: '#8f1838'},
                      ]}>
                      <Text numberOfLines={1} style={styles.sdgTxt}>
                        Decent Work & Evonomic Growth
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{flex: 1}}>
                  <Text style={{fontFamily: 'FiraSans-Medium', fontSize: 22}}>
                    About the organization
                  </Text>
                  <LinearGradient
                    useAngle={true}
                    angle={45}
                    angleCenter={{x: 0.5, y: 0.5}}
                    colors={['#cfd955', '#f53d3d']}
                    style={[styles.suGradient, {width: 240}]}
                  />
                  <TextInput
                    style={[styles.mInputTxt, {fontSize: 18}]}
                    // underlineColorAndroid = "transparent"
                    placeholder="Type here..."
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    // autoCapitalize = "none"
                    multiline={true}
                    numberOfLines={10}
                    onChangeText={(val) => handleBioChange(val)}
                  />
                </View>

                <View style={{flex: 1}}>
                  <Text style={{fontFamily: 'FiraSans-Medium', fontSize: 22}}>
                    Address
                  </Text>
                  <LinearGradient
                    useAngle={true}
                    angle={45}
                    angleCenter={{x: 0.5, y: 0.5}}
                    colors={['#cfd955', '#f53d3d']}
                    style={[styles.suGradient, {width: 90}]}
                  />
                  <View style={styles.sTxtCont}>
                    <Ionicons
                      name="search-outline"
                      size={20}
                      style={styles.sTxtIcon}
                    />
                    <TextInput
                      style={styles.sInputTxt}
                      underlineColorAndroid="transparent"
                      placeholder="Find Places"
                      onChangeText={(val) => this.textInputChange(val)}
                      placeholderTextColor="rgba(0, 0, 0, 0.4)"
                      autoCapitalize="none"
                    />
                  </View>
                  <View
                    style={{
                      backgroundColor: 'gray',
                      width: '100%',
                      height: 200,
                      alignSelf: 'center',
                      justifyContent: 'center',
                      marginBottom: 20,
                    }}>
                    <Text style={{textAlign: 'center'}}>Google Map</Text>
                  </View>
                </View>

                <View style={{flex: 1}}>
                  <Text style={{fontFamily: 'FiraSans-Medium', fontSize: 22}}>
                    Skills required
                  </Text>
                  <LinearGradient
                    useAngle={true}
                    angle={45}
                    angleCenter={{x: 0.5, y: 0.5}}
                    colors={['#cfd955', '#f53d3d']}
                    style={[styles.suGradient, {width: 150}]}
                  />
                  <TextInput
                    style={[styles.titleInputTxt, {marginVertical: 20}]}
                    underlineColorAndroid="transparent"
                    placeholder="+Tag"
                    //   onChangeText={(val) => this.textInputChange(val)}
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    autoCapitalize="none"
                  />
                </View>
                <View style={styles.btnCont}>
                  <TouchableOpacity
                    style={[
                      styles.cnfrmButton,
                      {backgroundColor: '#FF5A60', margin: 10},
                    ]}>
                    <Text
                      style={[
                        styles.buttonTxt,
                        {color: '#fff', fontFamily: 'FiraSans-Regular'},
                      ]}>
                      Confirm
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={[styles.rdTxtCont]}>
                  <TouchableOpacity>
                    <Text style={[styles.rdTxt]}>Policies</Text>
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
    // flex: 1,
  },

  buttonTxt: {
    color: '#FFF',
    // textTransform: 'uppercase',
    fontSize: 16,
    fontFamily: 'FiraSans-Light',
  },
  titleInputTxt: {
    color: '#000',
    fontSize: 18,
    width: '100%',
    // flex:1,
    borderColor: '#dedede',
    borderWidth: 1,
    fontFamily: 'FiraSans-Regular',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  lblText: {
    fontFamily: 'FiraSans-Regular',
    color: '#A2A2A2',
    fontSize: 14,
    // width:'90%',
    // backgroundColor:'tan'
  },

  inPtxtCont: {
    // top:"20%",
    // backgroundColor: 'rgba(0, 0, 0, 0.4)',
    // borderRadius:10,
    width: '100%',
    // height:40,
    // marginBottom:20,
    // paddingLeft:35,
    // borderBottomColor: 'red',
    // borderBottomWidth: 2,
    // marginBottom: 30,
    // backgroundColor: 'tan',
    marginTop: 20,
  },
  inputTxt: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 16,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 1,
    fontFamily: 'FiraSans-Regular',
  },
  mInputTxt: {
    color: 'rgba(0, 0, 0, 0.4)',
    // fontSize:14,
    borderColor: '#dedede',
    borderWidth: 1,
    textAlignVertical: 'top',
    borderRadius: 2,
    marginVertical: 20,
    padding: 10,
  },
  sdgBtns: {
    // backgroundColor: 'lightgray',
    borderRadius: 20,
    borderWidth: 1,
    // borderBottomColor: 'gray',
    alignSelf: 'center',
    marginHorizontal: 4,
    marginVertical: 4,
  },
  sdgTxt: {
    paddingVertical: 5,
    paddingHorizontal: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  suGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 10,
    height: 2,
  },
  btnCont: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '90%',
    // top: '20%',
  },
  cnfrmButton: {
    // borderWidth:1,
    // borderColor:'rgba(255,255,255,1)',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '70%',
    // height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    // marginBottom:20,
    paddingHorizontal: 30,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  rdTxtCont: {
    // top: '30%',
    alignSelf: 'center',
    marginBottom: 100,
    marginTop: 20,
  },
  rdTxt: {
    color: '#FF5A60',
    // fontSize: 20,
    // textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },
  sTxtCont: {
    // top: '20%',
    // backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 5,
    // width: '90%',
    marginVertical: 10,
    paddingLeft: 35,
    borderColor: '#dedede',
    borderWidth: 1,
  },
  sInputTxt: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'FiraSans-Regular',
    // paddingHorizontal: 10,
    // borderRadius: 5,
  },
  sTxtIcon: {
    // color: 'rgba(255, 255, 255, .8)',
    color: 'gray',
    top: 10,
    position: 'absolute',
    left: 10,
  },
});

export default createEvent;
