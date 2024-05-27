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
  FlatList,
} from 'react-native';
import {ProgressBar} from 'react-native-paper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    user: 'Alex',
    co2: '380,264.43 CO2',
    imgUrl: 'https://picsum.photos/200',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    user: 'Shaban',
    co2: '380,264.43 CO2',
    imgUrl: 'https://picsum.photos/200',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    user: 'Maqbool',
    co2: '380,264.43 CO2',
    imgUrl: 'https://picsum.photos/200',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    user: 'Hassan',
    co2: '380,264.43 CO2',
    imgUrl: 'https://picsum.photos/200',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    user: 'Noman',
    co2: '380,264.43 CO2',
    imgUrl: 'https://picsum.photos/200',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    user: 'Taqi',
    co2: '380,264.43 CO2',
    imgUrl: 'https://picsum.photos/200',
  },
];

const Item = ({user, id, co2, imgUrl}) => (
  <TouchableOpacity>
    <View style={styles.actListItem}>
      <Image style={[styles.itemImg]} source={{uri: imgUrl}} />
      <View
        style={{
          flex: 6,
          textAlignVertical: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.itemTitle}>{user}</Text>
        <Text style={styles.itemCoTxt}>{co2}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.ptsTxt}>999</Text>
        <Text style={[styles.ptsTxt, {fontSize: 12}]}>pts</Text>
      </View>
      {/* <Text style={styles.itemId}>{id}</Text> */}
    </View>
  </TouchableOpacity>
);

const TeamStats = ({navigation}) => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  const renderItem = ({item}) => (
    <Item user={item.user} id={item.id} co2={item.co2} imgUrl={item.imgUrl} />
  );
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
            <View
              style={{
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  // flexDirection: 'row',
                  width: '100%',
                  // backgroundColor: 'tan',
                  flex: 1,
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
                      'https://media.nanodot.us/nano/local/community/Climate-Warriorsss/Climate-Warriors-0cb4de73.png',
                  }}
                />

                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'FiraSans-ExtraBold',
                      color: '#203541',
                      margin: 5,
                    }}>
                    Climate Warriors
                  </Text>
                </View>
                <View style={{flexDirection: 'row', margin: 5}}>
                  <Image
                    style={[styles.memImg, {alignSelf: 'center'}]}
                    source={{uri: 'https://picsum.photos/200'}}
                  />
                  <Image
                    style={[styles.memImg, {alignSelf: 'center'}]}
                    source={{uri: 'https://picsum.photos/200'}}
                  />
                  <Text style={[styles.lblTxt, {alignSelf: 'center'}]}>
                    + 1 members
                  </Text>
                </View>

                <View style={styles.upldCont}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-start',
                      borderRightWidth: 1,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          color: '#203541',
                          fontFamily: 'FiraSans-Bold',
                          fontSize: 16,
                          marginLeft: 4,
                        }}>
                        Total Uploads
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: '#2AA39A',
                        fontFamily: 'FiraSans-Bold',
                        fontSize: 40,
                        marginLeft: 10,
                        lineHeight: 50,
                      }}>
                      90
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', marginLeft: 20}}>
                      <Text
                        style={{
                          color: '#203541',
                          fontFamily: 'FiraSans-Bold',
                          fontSize: 16,
                          marginLeft: 4,
                        }}>
                        Weekly Uploads
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: '#FF5A60',
                        fontFamily: 'FiraSans-Bold',
                        fontSize: 40,
                        marginLeft: 20,
                        lineHeight: 50,
                      }}>
                      0
                    </Text>
                  </View>
                </View>

                <View style={styles.tskCont}>
                  <Text
                    style={{
                      color: '#203541',
                      fontFamily: 'FiraSans-Bold',
                      fontSize: 16,
                      // marginLeft: 4,
                      alignSelf: 'flex-start',
                      // backgroundColor: 'tan',
                    }}>
                    Tasks
                  </Text>
                  <View style={styles.prgsCont}>
                    <View
                      style={{
                        flex: 0.1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>M</Text>
                    </View>
                    <View style={styles.prgsBars}>
                      <ProgressBar
                        progress={0.5}
                        color="#FF5A60"
                        style={{borderRadius: 4, height: 10}}
                      />
                    </View>
                    <View
                      style={{
                        flex: 0.1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>0</Text>
                    </View>
                  </View>
                  <View style={styles.prgsCont}>
                    <View
                      style={{
                        flex: 0.1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>T</Text>
                    </View>
                    <View style={styles.prgsBars}>
                      <ProgressBar
                        progress={0.5}
                        color="#FF5A60"
                        style={{borderRadius: 4, height: 10}}
                      />
                    </View>
                    <View
                      style={{
                        flex: 0.1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>0</Text>
                    </View>
                  </View>
                  <View style={styles.prgsCont}>
                    <View
                      style={{
                        flex: 0.1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>W</Text>
                    </View>
                    <View style={styles.prgsBars}>
                      <ProgressBar
                        progress={0.5}
                        color="#FF5A60"
                        style={{borderRadius: 4, height: 10}}
                      />
                    </View>
                    <View
                      style={{
                        flex: 0.1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>0</Text>
                    </View>
                  </View>
                  <View style={styles.prgsCont}>
                    <View
                      style={{
                        flex: 0.1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>T</Text>
                    </View>
                    <View style={styles.prgsBars}>
                      <ProgressBar
                        progress={0.5}
                        color="#FF5A60"
                        style={{borderRadius: 4, height: 10}}
                      />
                    </View>
                    <View
                      style={{
                        flex: 0.1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>0</Text>
                    </View>
                  </View>
                  <View style={styles.prgsCont}>
                    <View
                      style={{
                        flex: 0.1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>F</Text>
                    </View>
                    <View style={styles.prgsBars}>
                      <ProgressBar
                        progress={0.5}
                        color="#FF5A60"
                        style={{borderRadius: 4, height: 10}}
                      />
                    </View>
                    <View
                      style={{
                        flex: 0.1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>0</Text>
                    </View>
                  </View>
                  <View style={styles.prgsCont}>
                    <View
                      style={{
                        flex: 0.1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>S</Text>
                    </View>
                    <View style={styles.prgsBars}>
                      <ProgressBar
                        progress={0.5}
                        color="#FF5A60"
                        style={{borderRadius: 4, height: 10}}
                      />
                    </View>
                    <View
                      style={{
                        flex: 0.1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>0</Text>
                    </View>
                  </View>
                  <View style={styles.prgsCont}>
                    <View
                      style={{
                        flex: 0.1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>S</Text>
                    </View>
                    <View style={styles.prgsBars}>
                      <ProgressBar
                        progress={0.5}
                        color="#FF5A60"
                        style={{borderRadius: 4, height: 10}}
                      />
                    </View>
                    <View
                      style={{
                        flex: 0.1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>0</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.tpUsrCont}>
                  <Text
                    style={{
                      color: '#203541',
                      fontFamily: 'FiraSans-Bold',
                      fontSize: 16,
                      // marginLeft: 4,
                      alignSelf: 'flex-start',
                      // backgroundColor: 'tan',
                    }}>
                    Top Users
                  </Text>
                  <View
                    style={{
                      // backgroundColor: 'tan',
                      // flex: 1,
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        // backgroundColor: 'lightgray',
                        flex: 1,
                      }}>
                      <View style={styles.tpUsrBox}>
                        <View style={{flex: 1, height: 40}}>
                          <Text style={[styles.rankTxt]}>1</Text>
                          <Image
                            style={{
                              height: 70,
                              width: 70,
                              resizeMode: 'contain',
                              top: -40,
                              borderRadius: 100,
                              alignSelf: 'center',
                              // flex: 0.3,
                            }}
                            source={{
                              uri: 'https://picsum.photos/200',
                            }}
                          />
                        </View>
                        <View
                          style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              color: '#203541',
                              fontFamily: 'FiraSans-Bold',
                              textAlign: 'center',
                              fontSize: 14,
                              marginBottom: 10,
                            }}>
                            Fee Zeilinger
                          </Text>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                color: '#BBBBBB',
                                fontFamily: 'FiraSans-Regular',
                                fontSize: 24,
                              }}>
                              20
                            </Text>
                            <Text
                              style={{
                                color: '#BBBBBB',
                                fontFamily: 'FiraSans-Regular',
                                fontSize: 12,
                                top: 12,
                              }}>
                              pts
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            backgroundColor: '#2AA39A',
                            padding: 4,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                          }}>
                          <Text
                            style={{
                              color: '#fff',
                              fontFamily: 'FiraSans-Regular',
                              textAlign: 'center',
                              fontSize: 14,
                            }}>
                            1481642.7325 co2
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        // backgroundColor: 'lightgray',
                        flex: 1,
                      }}>
                      <View style={styles.tpUsrBox}>
                        <View style={{flex: 1, height: 40}}>
                          <Text style={[styles.rankTxt]}>2</Text>
                          <Image
                            style={{
                              height: 70,
                              width: 70,
                              resizeMode: 'contain',
                              top: -40,
                              borderRadius: 100,
                              alignSelf: 'center',
                              // flex: 0.3,
                            }}
                            source={{
                              uri: 'https://picsum.photos/200',
                            }}
                          />
                        </View>
                        <View
                          style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              color: '#203541',
                              fontFamily: 'FiraSans-Bold',
                              textAlign: 'center',
                              fontSize: 14,
                              marginBottom: 10,
                            }}>
                            Mak
                          </Text>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                color: '#BBBBBB',
                                fontFamily: 'FiraSans-Regular',
                                fontSize: 24,
                              }}>
                              20
                            </Text>
                            <Text
                              style={{
                                color: '#BBBBBB',
                                fontFamily: 'FiraSans-Regular',
                                fontSize: 12,
                                top: 12,
                              }}>
                              pts
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            backgroundColor: '#2AA39A',
                            padding: 4,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                          }}>
                          <Text
                            style={{
                              color: '#fff',
                              fontFamily: 'FiraSans-Regular',
                              textAlign: 'center',
                              fontSize: 14,
                            }}>
                            83.645132944 co2
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        // backgroundColor: 'lightgray',
                        flex: 1,
                      }}>
                      <View style={styles.tpUsrBox}>
                        <View style={{flex: 1, height: 40}}>
                          <Text style={[styles.rankTxt]}>3</Text>
                          <Image
                            style={{
                              height: 70,
                              width: 70,
                              resizeMode: 'contain',
                              top: -40,
                              borderRadius: 100,
                              alignSelf: 'center',
                              // flex: 0.3,
                            }}
                            source={{
                              uri: 'https://picsum.photos/200',
                            }}
                          />
                        </View>
                        <View
                          style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              color: '#203541',
                              fontFamily: 'FiraSans-Bold',
                              textAlign: 'center',
                              fontSize: 14,
                              marginBottom: 10,
                            }}>
                            Noman Younus
                          </Text>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                color: '#BBBBBB',
                                fontFamily: 'FiraSans-Regular',
                                fontSize: 24,
                              }}>
                              10
                            </Text>
                            <Text
                              style={{
                                color: '#BBBBBB',
                                fontFamily: 'FiraSans-Regular',
                                fontSize: 12,
                                top: 12,
                              }}>
                              pts
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            backgroundColor: '#2AA39A',
                            padding: 4,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                          }}>
                          <Text
                            style={{
                              color: '#fff',
                              fontFamily: 'FiraSans-Regular',
                              textAlign: 'center',
                              fontSize: 14,
                            }}>
                            .8093188863999 co2
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{flex: 1}}>
                    {/* <Text>List</Text> */}
                    <FlatList
                      data={DATA}
                      renderItem={renderItem}
                      keyExtractor={(item) => item.id}
                    />
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
  pointCont: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 100,
    margin: 20,
    marginTop: 0,
    padding: 20,
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

  memImg: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    borderRadius: 100,
    // backgroundColor:"gray",
    overflow: 'hidden',
    // flex:.2,
    // margin: -5,
    // marginLeft:0,
    // backgroundColor:"red",
  },
  lblTxt: {
    color: '#BBB',
    textTransform: 'uppercase',
    fontFamily: 'FiraSans-Regular',
    fontSize: 12,
    marginLeft: 4,
  },
  upldCont: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    // height: 100,
    margin: 10,
    // marginTop: 0,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 5,
  },
  tskCont: {
    // alignItems: 'center',
    // flexDirection: 'row',
    width: '100%',
    // height: 100,
    margin: 10,
    // marginTop: 0,
    padding: 20,
    paddingTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 5,
  },
  prgsCont: {
    flex: 1,
    // width:100,
    flexDirection: 'row',
    marginVertical: 5,
  },
  prgsBars: {
    flex: 0.8,
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
  },

  tpUsrCont: {
    // alignItems: 'center',
    // flexDirection: 'row',
    width: '100%',
    // height: 100,
    // margin: 10,
    // marginTop: 0,
    padding: 0,
    paddingTop: 10,
    // backgroundColor: 'red',
    // backgroundColor: '#fff',
    // borderRadius: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 5,

    // elevation: 5,
  },
  tpUsrBox: {
    // flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    // height: 100,
    margin: 5,
    marginTop: 60,
  },

  rankTxt: {
    backgroundColor: '#E1E1E1',
    fontSize: 12,
    color: '#7B7B7B',
    borderRadius: 10,
    height: 16,
    width: 16,
    textAlignVertical: 'center',
    textAlign: 'center',
    position: 'absolute',
    zIndex: 99,
    top: 4,
    left: 4,
  },
  actListItem: {
    // backgroundColor: '#f9c2ff',
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
    // alignItems:"center",
    // justifyContent:"space-between",
    flexDirection: 'row',
    alignSelf: 'auto',
    // width:"90%",
  },
  itemImg: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    borderRadius: 100,
    // backgroundColor:"gray",
    overflow: 'hidden',
    flex: 1.5,
    margin: 10,
    marginLeft: 0,
  },
  itemTitle: {
    textAlignVertical: 'center',
    color: '#203541',
    fontSize: 16,
    fontFamily: 'FiraSans-Regular',
    // flex:8,
    // backgroundColor:"gray",
  },
  itemCoTxt: {
    textAlignVertical: 'center',
    color: '#BABABA',
    fontSize: 14,
    fontFamily: 'FiraSans-Regular',
  },
  ptsTxt: {
    textAlignVertical: 'center',
    color: '#203541',
    fontSize: 16,
    fontFamily: 'FiraSans-Regular',
  },
});

export default TeamStats;
