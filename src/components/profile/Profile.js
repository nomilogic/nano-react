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
// import {ProgressBar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SvgCssUri} from 'react-native-svg/css';

const Profile = ({navigation}) => {
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
                alignItems: 'center',
                paddingHorizontal: 20,
                backgroundColor: '#ff5a60',
                flex: 1,
                height: 300,
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  height: 200,
                  width: 200,
                  resizeMode: 'center',
                }}
                source={{uri: 'https://media.nanodot.us/img/logo.png'}}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                paddingHorizontal: 10,
                backgroundColor: '#fff',
                flex: 1,
                borderRadius: 15,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                elevation: 5,
                height: 160,
                top: -30,
                width: '70%',
                alignSelf: 'center',
              }}>
              <Ionicons
                name="people"
                size={24}
                style={{
                  color: '#FF5A60',
                  top: 10,
                  position: 'absolute',
                  right: 10,
                  // textAlignVertical:"center",
                  alignSelf: 'flex-end',
                  // flex:.1,
                  // backgroundColor: '#BBB',
                  // borderRadius: 20,
                }}
              />
              <Image
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 100,
                  borderColor: '#fff',
                  borderWidth: 2,
                  top: -50,
                  position: 'absolute',
                }}
                source={{
                  uri:
                    'https://media.nanodot.us/nano/local/user/5f7d81535e60ca000103c51f/cover/userUpload5f7d81535e60ca000103c51f1239001191531396407.jpg',
                }}
              />
              <Text
                style={{
                  color: '#203541',
                  fontFamily: 'FiraSans-Bold',
                  fontSize: 24,
                  top: 50,
                }}>
                Fee Zeilinger
              </Text>
              <LinearGradient
                useAngle={true}
                angle={45}
                angleCenter={{x: 0.5, y: 0.5}}
                colors={['#FF5A60', '#DB55BC']}
                style={{top: 60, alignSelf: 'stretch'}}>
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: 'FiraSans-Ragular',
                    fontSize: 10,
                    // backgroundColor: 'red',
                    margin: 2,
                    // alignSelf: 'stretch',
                    textAlign: 'center',
                  }}>
                  Bonn,Deutschland
                </Text>
              </LinearGradient>
              <View
                style={{
                  alignSelf: 'flex-end',
                  flexDirection: 'row',
                  top: 65,
                }}>
                <Text
                  style={{
                    color: '#FE5B5F',
                    fontFamily: 'FiraSans-Bold',
                    fontSize: 20,
                  }}>
                  690
                </Text>
                <Image
                  style={{
                    height: 24,
                    width: 24,
                    resizeMode: 'contain',
                    marginLeft: 4,
                    alignSelf: 'center',
                    // top:3,
                  }}
                  source={{uri: 'https://media.nanodot.us/img/pointIcon.png'}}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                height: 100,
                width: '90%',
                alignItems: 'center',
                // flexDirection: 'row',
                // backgroundColor: 'tan',
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: 16, fontFamily: 'FiraSans-Bold'}}>
                My Carbon Footprint (tons): 7.12
              </Text>
              {/* <View style={[styles.buttonCont]}> */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CarbonCalculator');
                }}
                style={[
                  styles.button,
                  {backgroundColor: '#FF5A60', margin: 10},
                ]}>
                <Text
                  style={[
                    styles.buttonTxt,
                    {color: '#fff', fontFamily: 'FiraSans-Regular'},
                  ]}>
                  Carbon Calculator
                </Text>
              </TouchableOpacity>
              {/* </View> */}
            </View>
            <View
              style={{
                flex: 1,
                // height: 1000,
                alignSelf: 'center',
                flexDirection: 'row',
                marginBottom: 20,
              }}>
              <View style={{width: '90%'}}>
                <Text
                  style={{
                    color: 'black',
                    textDecorationLine: 'underline',
                    // color: '#203541',
                    fontSize: 24,
                    fontFamily: 'FiraSans-Bold',
                    // backgroundColor:"yellow",
                    // width: 120,
                    textAlign: 'center',
                    // height: 80,
                    textAlignVertical: 'center',
                    // opacity: 0.7,
                    marginBottom: 10,
                  }}>
                  Activity
                </Text>
                <View
                  style={{
                    // flex: 1,
                    // backgroundColor: 'tan',
                    // flexDirection: 'row',
                    // height: 50,
                    borderBottomColor: 'rgba(0,0,0,0.1)',
                    borderBottomWidth: 1,
                    // marginVertical: 4,
                    paddingVertical: 10,
                  }}>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                      paddingVertical: 4,
                    }}>
                    <View
                      style={{
                        flex: 0.25,
                        paddingLeft: 4,
                      }}>
                      <Text style={{fontFamily: 'FiraSans-Bold', fontSize: 12}}>
                        20 days ago
                      </Text>
                    </View>
                    <View style={{flex: 0.75}}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 12,
                        }}>
                        Earned 10 point for #COMMUTE
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                    }}>
                    <View
                      style={{
                        flex: 0.2,
                        // backgroundColor: 'lightgreen',
                        // paddingLeft: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          // flex: .8,
                          backgroundColor: '#F5F5F5',
                          borderRadius: 10,
                          width: 50,
                          height: 50,
                          // alignSelf:'center',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <SvgCssUri
                          style={{}}
                          width="30"
                          height="30"
                          uri="https://nanodotapp.s3.amazonaws.com/nano/carbonfootprint/commute/footsteps.svg"
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 0.8,
                        // backgroundColor: 'lightblue',
                        padding: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 15,
                        }}>
                        You traveled{' '}
                        <Text style={{fontFamily: 'FiraSans-Bold'}}>6.3Km</Text>{' '}
                        by Walk for 01:00:00 & avoided{' '}
                        <Text style={{fontFamily: 'FiraSans-Bold'}}>
                          1972800g CO2.
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    // flex: 1,
                    // backgroundColor: 'tan',
                    // flexDirection: 'row',
                    // height: 50,
                    borderBottomColor: 'rgba(0,0,0,0.1)',
                    borderBottomWidth: 1,
                    // marginVertical: 4,
                    paddingVertical: 10,
                  }}>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                      paddingVertical: 4,
                    }}>
                    <View
                      style={{
                        flex: 0.25,
                        paddingLeft: 4,
                      }}>
                      <Text style={{fontFamily: 'FiraSans-Bold', fontSize: 12}}>
                        30 days ago
                      </Text>
                    </View>
                    <View style={{flex: 0.75}}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 12,
                        }}>
                        Posted a status.
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        // backgroundColor: 'lightblue',
                        padding: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 15,
                        }}>
                        Holding an event on beach on #EarthDay, DM your contact
                        info if you are interested in joining. Peace ✌
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    // flex: 1,
                    // backgroundColor: 'tan',
                    // flexDirection: 'row',
                    // height: 50,
                    borderBottomColor: 'rgba(0,0,0,0.1)',
                    borderBottomWidth: 1,
                    // marginVertical: 4,
                    paddingVertical: 10,
                  }}>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                      paddingVertical: 4,
                    }}>
                    <View
                      style={{
                        flex: 0.25,
                        paddingLeft: 4,
                      }}>
                      <Text style={{fontFamily: 'FiraSans-Bold', fontSize: 12}}>
                        1 month ago
                      </Text>
                    </View>
                    <View style={{flex: 0.75}}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 12,
                        }}>
                        Shared a link.
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                    }}>
                    <View
                      style={{
                        flex: 0.2,
                        // backgroundColor: 'lightgreen',
                        // paddingLeft: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          // flex: .8,
                          backgroundColor: '#F5F5F5',
                          borderRadius: 10,
                          width: 50,
                          height: 50,
                          // alignSelf:'center',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Ionicons
                          name="link-outline"
                          size={30}
                          style={{
                            color: '#7B7B7B',
                            opacity: 0.5,
                            // top: 10,
                            // position: 'absolute',
                            // right: 10,
                            // textAlignVertical:"center",
                            // alignSelf: 'flex-end',
                            // flex:.1,
                            // backgroundColor: '#BBB',
                            // borderRadius: 20,
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 0.8,
                        // backgroundColor: 'lightblue',
                        padding: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 15,
                        }}>
                        https://play.google.com/store/apps/details?
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    // flex: 1,
                    // backgroundColor: 'tan',
                    // flexDirection: 'row',
                    // height: 50,
                    borderBottomColor: 'rgba(0,0,0,0.1)',
                    borderBottomWidth: 1,
                    // marginVertical: 4,
                    paddingVertical: 10,
                  }}>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                      paddingVertical: 4,
                    }}>
                    <View
                      style={{
                        flex: 0.25,
                        paddingLeft: 4,
                      }}>
                      <Text style={{fontFamily: 'FiraSans-Bold', fontSize: 12}}>
                        30 days ago
                      </Text>
                    </View>
                    <View style={{flex: 0.75}}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 12,
                        }}>
                        Posted a status.
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        // backgroundColor: 'lightblue',
                        padding: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 15,
                        }}>
                        Holding an event on beach on #EarthDay, DM your contact
                        info if you are interested in joining. Peace ✌
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    // flex: 1,
                    // backgroundColor: 'tan',
                    // flexDirection: 'row',
                    // height: 50,
                    borderBottomColor: 'rgba(0,0,0,0.1)',
                    borderBottomWidth: 1,
                    // marginVertical: 4,
                    paddingVertical: 10,
                  }}>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                      paddingVertical: 4,
                    }}>
                    <View
                      style={{
                        flex: 0.25,
                        paddingLeft: 4,
                      }}>
                      <Text style={{fontFamily: 'FiraSans-Bold', fontSize: 12}}>
                        1 month ago
                      </Text>
                    </View>
                    <View style={{flex: 0.75}}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 12,
                        }}>
                        Commented on a post.
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                    }}>
                    <View
                      style={{
                        flex: 0.2,
                        // backgroundColor: 'lightgreen',
                        // paddingLeft: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          // flex: .8,
                          backgroundColor: '#F5F5F5',
                          borderRadius: 10,
                          width: 50,
                          height: 50,
                          // alignSelf:'center',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                        }}>
                        <Image
                          style={{
                            height: 50,
                            width: 50,
                            resizeMode: 'contain',
                            // marginLeft: 4,
                            // alignSelf: 'center',
                            // top:3,
                          }}
                          source={{
                            uri: 'https://picsum.photos/400',
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 0.8,
                        // backgroundColor: 'lightblue',
                        padding: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 15,
                        }}>
                        You commented on{' '}
                        <Text style={{color: '#FE5B5F'}}>Maqbool Shah's</Text>{' '}
                        photo.
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    // flex: 1,
                    // backgroundColor: 'tan',
                    // flexDirection: 'row',
                    // height: 50,
                    borderBottomColor: 'rgba(0,0,0,0.1)',
                    borderBottomWidth: 1,
                    // marginVertical: 4,
                    paddingVertical: 10,
                  }}>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                      paddingVertical: 4,
                    }}>
                    <View
                      style={{
                        flex: 0.25,
                        paddingLeft: 4,
                      }}>
                      <Text style={{fontFamily: 'FiraSans-Bold', fontSize: 12}}>
                        1 month ago
                      </Text>
                    </View>
                    <View style={{flex: 0.75}}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 12,
                        }}>
                        Liked a post.
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                    }}>
                    <View
                      style={{
                        flex: 0.2,
                        // backgroundColor: 'lightgreen',
                        // paddingLeft: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          // flex: .8,
                          backgroundColor: '#F5F5F5',
                          borderRadius: 10,
                          width: 50,
                          height: 50,
                          // alignSelf:'center',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                        }}>
                        <Image
                          style={{
                            height: 50,
                            width: 50,
                            resizeMode: 'contain',
                            // marginLeft: 4,
                            // alignSelf: 'center',
                            // top:3,
                          }}
                          source={{
                            uri: 'https://picsum.photos/400',
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 0.8,
                        // backgroundColor: 'lightblue',
                        padding: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 15,
                        }}>
                        You liked
                        <Text style={{color: '#FE5B5F'}}>
                          {' '}
                          Noman Younus's
                        </Text>{' '}
                        photo.
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    // flex: 1,
                    // backgroundColor: 'tan',
                    // flexDirection: 'row',
                    // height: 50,
                    borderBottomColor: 'rgba(0,0,0,0.1)',
                    borderBottomWidth: 1,
                    // marginVertical: 4,
                    paddingVertical: 10,
                  }}>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                      paddingVertical: 4,
                    }}>
                    <View
                      style={{
                        flex: 0.25,
                        paddingLeft: 4,
                      }}>
                      <Text style={{fontFamily: 'FiraSans-Bold', fontSize: 12}}>
                        40 days ago
                      </Text>
                    </View>
                    <View style={{flex: 0.75}}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 12,
                        }}>
                        Calculated carbon.
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                    }}>
                    <View
                      style={{
                        flex: 0.2,
                        // backgroundColor: 'lightgreen',
                        // paddingLeft: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          // flex: .8,
                          backgroundColor: '#F5F5F5',
                          borderRadius: 10,
                          width: 50,
                          height: 50,
                          // alignSelf:'center',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                        }}>
                        <SvgCssUri
                          style={{}}
                          width="30"
                          height="30"
                          uri="https://media.nanodot.us/img/impact/cologo.svg"
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 0.8,
                        // backgroundColor: 'lightblue',
                        padding: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 15,
                        }}>
                        You calculated your carbon footprints of
                        <Text style={{fontFamily: 'FiraSans-Bold'}}>
                          {' '}
                          20.00 Tons.
                        </Text>{' '}
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    // flex: 1,
                    // backgroundColor: 'tan',
                    // flexDirection: 'row',
                    // height: 50,
                    borderBottomColor: 'rgba(0,0,0,0.1)',
                    borderBottomWidth: 1,
                    // marginVertical: 4,
                    paddingVertical: 10,
                  }}>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                      paddingVertical: 4,
                    }}>
                    <View
                      style={{
                        flex: 0.25,
                        paddingLeft: 4,
                      }}>
                      <Text style={{fontFamily: 'FiraSans-Bold', fontSize: 12}}>
                        2 month ago
                      </Text>
                    </View>
                    <View style={{flex: 0.75}}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 12,
                        }}>
                        Completed versus challenge.
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                    }}>
                    <View
                      style={{
                        flex: 0.45,
                        // backgroundColor: 'lightgreen',
                        // paddingLeft: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          flex: 0.4,
                          // backgroundColor: 'dimgray',
                          // borderRadius: 50,
                          // width: 50,
                          // height: 50,
                          // alignSelf:'center',
                          // alignSelf: 'flex-start',
                          // justifyContent: 'center',
                          // overflow: 'hidden',
                        }}>
                        <Image
                          style={{
                            height: 50,
                            width: 50,
                            resizeMode: 'cover',
                            borderRadius: 50,
                          }}
                          source={{
                            uri:
                              'https://media.nanodot.us/nano/local/user/5f52127ee0900f0001d0eb01/cover/userUpload5f52127ee0900f0001d0eb017391912001112399355.jpg',
                          }}
                        />
                      </View>
                      <View
                        style={{
                          flex: 0.6,
                          // backgroundColor: 'lightgray',
                          // borderRadius: 50,
                          // width: 50,
                          // height: 50,
                          // alignSelf:'center',
                          // alignSelf: 'flex-start',
                          // justifyContent: 'center',
                          // overflow: 'hidden',
                        }}>
                        <View>
                          <Text
                            style={{
                              color: '#203541',
                              fontFamily: 'FiraSans-Bold',
                            }}>
                            Jude Frami
                          </Text>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                color: '#203541',
                                fontFamily: 'FiraSans-Medium',
                              }}>
                              +150
                            </Text>
                            <Image
                              style={{
                                height: 20,
                                width: 20,
                                resizeMode: 'contain',
                                marginLeft: 4,
                                // alignSelf: 'center',
                                // top:3,
                              }}
                              source={{
                                uri:
                                  'https://media.nanodot.us/img/pointIcon.png',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 0.1,
                        // backgroundColor: 'yellow',
                        padding: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: '#FF5A60',
                          fontSize: 14,
                          fontStyle: 'italic',
                          // alignSelf:'center',
                          // justifyContent:'center'
                        }}>
                        Vs
                      </Text>
                      <View
                        style={{
                          backgroundColor: '#2AA39A',
                          borderRadius: 20,
                          width: 50,
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: '#fff',
                            fontFamily: 'FiraSans-Medium',
                            fontSize: 10,
                            padding: 4,
                          }}>
                          WON
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 0.45,
                        // backgroundColor: 'lightgreen',
                        // paddingLeft: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          flex: 0.6,
                          // backgroundColor: 'lightgray',
                          // borderRadius: 50,
                          // width: 50,
                          // height: 50,
                          // alignSelf:'center',
                          // alignSelf: 'flex-start',
                          // justifyContent: 'center',
                          // overflow: 'hidden',
                        }}>
                        <View style={{alignSelf: 'flex-end'}}>
                          <Text
                            style={{
                              color: '#203541',
                              fontFamily: 'FiraSans-Bold',
                            }}>
                            You
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignSelf: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: '#203541',
                                fontFamily: 'FiraSans-Medium',
                              }}>
                              +200
                            </Text>
                            <Image
                              style={{
                                height: 20,
                                width: 20,
                                resizeMode: 'contain',
                                marginLeft: 4,
                                // alignSelf: 'center',
                                // top:3,
                              }}
                              source={{
                                uri:
                                  'https://media.nanodot.us/img/pointIcon.png',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          flex: 0.4,
                          // backgroundColor: 'dimgray',
                          // borderRadius: 50,
                          // width: 50,
                          // height: 50,
                          // alignSelf:'center',
                          // alignSelf: 'flex-start',
                          // justifyContent: 'center',
                          // overflow: 'hidden',
                        }}>
                        <Image
                          style={{
                            height: 50,
                            width: 50,
                            resizeMode: 'cover',
                            borderRadius: 50,
                            alignSelf: 'flex-end',
                          }}
                          source={{
                            uri:
                              'https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg',
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    // flex: 1,
                    // backgroundColor: 'tan',
                    // flexDirection: 'row',
                    // height: 50,
                    borderBottomColor: 'rgba(0,0,0,0.1)',
                    borderBottomWidth: 1,
                    // marginVertical: 4,
                    paddingVertical: 10,
                  }}>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                      paddingVertical: 4,
                    }}>
                    <View
                      style={{
                        flex: 0.25,
                        paddingLeft: 4,
                      }}>
                      <Text style={{fontFamily: 'FiraSans-Bold', fontSize: 12}}>
                        14 Aug
                      </Text>
                    </View>
                    <View style={{flex: 0.75}}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 12,
                        }}>
                        Joined a championship.
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      // flex: 1,
                      // backgroundColor: 'tan',
                      flexDirection: 'row',
                      // height: 50,
                    }}>
                    <View
                      style={{
                        flex: 0.2,
                        // backgroundColor: 'lightgreen',
                        // paddingLeft: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          // flex: .8,
                          backgroundColor: '#F5F5F5',
                          borderRadius: 10,
                          width: 50,
                          height: 50,
                          // alignSelf:'center',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                        }}>
                        <Image
                          style={{
                            height: 50,
                            width: 50,
                            resizeMode: 'contain',
                            // marginLeft: 4,
                            // alignSelf: 'center',
                            // top:3,
                          }}
                          source={{
                            uri:
                              'https://media.nanodot.us/nano/local/community/Barcelona/bc-6b72d86a.png',
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 0.8,
                        // backgroundColor: 'lightblue',
                        padding: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'FiraSans-Regular',
                          color: 'gray',
                          fontSize: 15,
                        }}>
                        You joined team{' '}
                        <Text style={{fontFamily: 'FiraSans-Bold'}}>
                          "Barcelona"
                        </Text>{' '}
                        in "Earth X 2020 Championship"
                      </Text>
                    </View>
                  </View>
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

  button: {
    // borderWidth:1,
    // borderColor:'rgba(255,255,255,1)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    // marginBottom:20,
  },
  buttonTxt: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontSize: 20,
    fontFamily: 'FiraSans-Light',
  },
});

export default Profile;
