// Mohsin Owais

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
  Platform,
} from 'react-native';
import {SvgCssUri} from 'react-native-svg/css';
import SimpleCarousel from './simpleCarousel';

const TeamDetails = ({navigation}) => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FF5A60" />

      <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}>
          <SafeAreaView
            style={[styles.container]}
            backgroundColor="transparent">
            <View style={{alignItems: 'center', paddingHorizontal: 20}}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <Image
                  style={{
                    height: 100,
                    width: 100,
                    resizeMode: 'contain',
                    flex: 0.3,
                  }}
                  source={{
                    uri:
                      'https://media.nanodot.us/nano/local/community/Nano-US/logo-7c4f6340.jpg',
                  }}
                />
                <View style={{flex: 0.6, margin: 10}}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontFamily: 'FiraSans-ExtraBold',
                      color: '#203541',
                    }}>
                    Deutsche Telekom Championship!
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: 'FiraSans-Regular',
                      textAlign: 'left',
                      color: '#BBBBBB',
                    }}>
                    0/15 members
                  </Text>
                </View>

                <View style={{flex: 0.1,}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Stats')}>
                    <Image
                      style={{height: 20, width: 20}}
                      source={{uri: 'https://media.nanodot.us/img/upload.png'}}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles.teamDscrp}>
                Welcome to Nano's official US Team. We have a single moto Save
                the Planet
              </Text>

              <TouchableOpacity
                style={[styles.button, {backgroundColor: '#FF5A60'}]}>
                <Text style={[styles.buttonTxt]}>Join</Text>
              </TouchableOpacity>

              <View style={styles.carbonInfo}>
                <View style={{flex: 0.2}}>
                  <SvgCssUri
                    style={styles.tSvg}
                    width="100%"
                    height="100%"
                    uri="https://media.nanodot.us/img/impact/cologo.svg"
                  />
                </View>
                <View style={{flex: 0.8, alignItems: 'flex-end'}}>
                  <Text
                    style={{
                      color: '#2AA39A',
                      fontFamily: 'FiraSans-Bold',
                      fontSize: 40,
                    }}>
                    520.43
                  </Text>
                  <Text
                    style={{
                      color: '#7B7B7B',
                      fontFamily: 'FiraSans-Regular',
                      fontSize: 14,
                    }}>
                    Grams of avoided carbon emissions
                  </Text>
                </View>
              </View>

              <View style={styles.pointCont}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-start',
                    borderRightWidth: 1,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{
                        height: 20,
                        width: 20,
                        resizeMode: 'contain',
                        marginLeft: 10,
                      }}
                      source={{
                        uri: 'https://media.nanodot.us/img/pointIcon.png',
                      }}
                    />
                    <Text
                      style={{
                        color: '#203541',
                        fontFamily: 'FiraSans-Bold',
                        fontSize: 18,
                        marginLeft: 4,
                      }}>
                      Points
                    </Text>
                  </View>

                  <Text
                    style={{
                      color: '#2AA39A',
                      fontFamily: 'FiraSans-Medium',
                      fontSize: 30,
                      marginLeft: 10,
                    }}>
                    50
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <View style={{flexDirection: 'row', marginLeft: 30}}>
                    <Image
                      style={{height: 20, width: 20, resizeMode: 'contain'}}
                      source={{
                        uri: 'https://media.nanodot.us/img/pointIcon.png',
                      }}
                    />
                    <Text
                      style={{
                        color: '#203541',
                        fontFamily: 'FiraSans-Bold',
                        fontSize: 18,
                        marginLeft: 4,
                      }}>
                      XP
                    </Text>
                  </View>

                  <Text
                    style={{
                      color: '#FF5A60',
                      fontFamily: 'FiraSans-Medium',
                      fontSize: 30,
                      marginLeft: 30,
                    }}>
                    50
                  </Text>
                </View>
              </View>

              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  margin: 20,
                  marginTop: 0,
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignSelf: 'flex-start',
                  }}>
                  <Text
                    style={{
                      color: '#203541',
                      fontFamily: 'FiraSans-Bold',
                      fontSize: 16,
                      marginLeft: 4,
                    }}>
                    Total Nano Tasks
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      paddingEnd: 10,
                    }}>
                    <Image
                      style={{height: 10, width: 10, alignSelf: 'center',marginRight:5,}}
                      source={{uri: 'https://media.nanodot.us/img/upload.png'}}
                    />
                    <Text style={styles.itemUpldTxt}>144</Text>
                  </View>
                </View>

                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View style={styles.tskBox}>
                    <Text style={{fontSize: 20, fontFamily: 'FiraSans-Medium'}}>2</Text>
                    <Text
                      style={{
                        color: '#7B7B7B',
                        fontFamily: 'FiraSans-Regular',
                        fontSize:12,
                      }}>
                      #Commute
                    </Text>
                  </View>

                  <View style={styles.tskBox}>
                    <Text style={{fontSize: 20, fontFamily: 'FiraSans-Medium'}}>1</Text>
                    <Text
                      style={{
                        color: '#7B7B7B',
                        fontFamily: 'FiraSans-Regular',
                        fontSize:12,
                      }}>
                      #CoffeeRefill
                    </Text>
                  </View>

                  <View style={styles.tskBox}>
                    <Text style={{fontSize: 20, fontFamily: 'FiraSans-Medium'}}>2</Text>
                    <Text
                      style={{
                        color: '#7B7B7B',
                        fontFamily: 'FiraSans-Regular',
                        fontSize:12,
                      }}>
                      #RECYCLE
                    </Text>
                  </View>

                  <View style={styles.tskBox}>
                    <Text style={{fontSize: 20, fontFamily: 'FiraSans-Medium'}}>0</Text>
                    <Text
                      style={{
                        color: '#7B7B7B',
                        fontFamily: 'FiraSans-Regular',
                        fontSize:12,
                      }}>
                      #TRASHPICKUP
                    </Text>
                  </View>

                  <View style={styles.tskBox}>
                    <Text style={{fontSize: 20, fontFamily: 'FiraSans-Medium'}}>0</Text>
                    <Text
                      style={{
                        color: '#7B7B7B',
                        fontFamily: 'FiraSans-Regular',
                        fontSize:12,
                      }}>
                      #TRASHPICKUP
                    </Text>
                  </View>
                </ScrollView>
              </View>

              <View
                style={{
                  alignItems: 'flex-start',
                  width: '100%',
                  margin: 20,
                  marginTop: 0,
                }}>
                <Text
                  style={{
                    color: '#203541',
                    fontFamily: 'FiraSans-Bold',
                    fontSize: 16,
                    marginLeft: 4,
                  }}>
                  Incentives
                </Text>
                <SimpleCarousel />
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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

  button: {
    // borderWidth:1,
    // borderColor:'rgba(255,255,255,1)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    // marginBottom:20,
  },
  buttonTxt: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontSize: 16,
    fontFamily: 'FiraSans-Light',
  },
  teamDscrp: {
    fontSize: 16,
    fontFamily: 'FiraSans-Regular',
    textAlign: 'left',
    color: '#7B7B7B',
    padding: 20,
  },

  carbonInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 100,
    margin: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: '#2AA39A',
    borderRadius: 10,
  },
  pointCont: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    // height: 120,
    margin: 10,
    marginTop: 0,
    padding: 10,
    backgroundColor: '#E1E1E1',
    borderRadius: 10,
  },
  tskBox: {
    backgroundColor: '#E1E1E1',
    margin: 10,
    borderRadius: 10,
    width: 110,
    alignItems: 'flex-start',
    padding: 10,
  },
  itemUpldTxt: {
    textAlignVertical: 'center',
    color: '#7B7B7B',
    fontSize: 16,
    fontFamily: 'FiraSans-Regular',
  },
});

export default TeamDetails;
