import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  LogBox,
  TouchableOpacity,
} from 'react-native';

import {SvgCssUri} from 'react-native-svg/css';
import RewardsAndOffers from './RewardsAndOffers';

class Reward extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested inside']);
  }
  
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#FF5A60" />
        <ScrollView>
          <SafeAreaView style={[styles.container]}>
            <View style={styles.BG}>
              <View style={styles.topContent}>
                <View style={[
                  {
                    flex: 1,
                    flexDirection: 'row',
                    // marginTop: 20,
                    // marginBottom: 10,
                    // height: 70,
                    // backgroundColor:'purple',
                  },
                ]}>

                  <View style={[
                      {
                        flex: 1,
                      },
                    ]}>

                    <Text style={{flex: 1, flexDirection: 'row', fontSize: 25,fontFamily:"FiraSans-Bold", color:'#FF5A60', position:'relative' , top:10,}}>Claim</Text>
                    <Text style={{flex: 1, flexDirection: 'row', fontSize: 25,fontFamily:"FiraSans-Bold",color:'#203541', position:'relative' , bottom:0,}}>Your Rewards</Text>

                  </View>

                  <View style={[
                      {
                        flex: 1,
                        alignItems:'flex-end',
                        justifyContent:'center'
                        
                      },
                    ]}>
                  <SvgCssUri
                  style={{top:10}}
                    width="50%"
                    height="50%"
                    uri="https://media.nanodot.us/img/Reward_icon.svg"
                  />
                  </View>

                </View>

                

                <View style={[
                    {
                      flex: 1,
                      flexDirection: 'row',
                    },
                  ]}>
                    <Text style={{flex: 1, flexDirection: 'row', fontSize: 12,fontFamily:"FiraSans-Regular",paddingTop:5,color:'#BBBBBB'}}>Congratulations! The season is over, here are some rewards that you've earned! The more nano tasks you complete, the more rewards you get!</Text>
                </View>

                
              </View>

              {/* topContent END */}


              <View style={[styles.pCardCont , {flexDirection: 'column'}]}>

              <View style={[
                      {
                        flex: 1,
                      },
                    ]}>
                      <Text style={[styles.pCardTitleTxt]}>INCENTIVES</Text>

                    </View>

                    <View style={[
                      {
                        flex: 1,
                        marginTop:5,
                      },
                    ]}>
                      <Text style={{color:'#203541',fontSize: 12,fontFamily:"FiraSans-Medium", opacity:.5,}}>NONE AVAIABLE CURRENTLY.</Text>
                    </View>                
              </View>



              <View style={[styles.pCardCont]}>
                <Text style={[styles.pCardTitleTxt]}>REWARDS & OFFERS</Text>
                <Text onPress={() => alert('This is a button!')} style={{color:'gray', textDecorationLine: 'underline', alignSelf:'center', textAlign:'right',flex:1,}}>View all</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
              <RewardsAndOffers/>
              </View>
              
              
              <View style={[styles.pCardCont , {flexDirection: 'column'}]}>

              <View style={[
                      {
                        flex: 1,
                      },
                    ]}>
                <Text style={[styles.pCardTitleTxt,{marginTop:0}]}>More rewards</Text>

              </View>

              <View style={[
                      {
                        flex: 1,
                        flexDirection:'row',
                        backgroundColor:"#fff",
                        borderRadius:10,
                        marginTop:10,
                        marginBottom:10,
                        height:120,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 2.84,
                        elevation: 3,
                      },
                    ]}>
                      <View style={[
                      {
                        flex: 1,
                        borderRightWidth:1,
                        borderColor:'gray',
                        height:100,
                        marginVertical:10,
                      },
                      ]}>
                        <View
                          style={[
                            {
                              flexDirection:'row',
                            },
                          ]}
                        >
                        <Image
                          style={{height:20,width:30,resizeMode:'contain',marginTop:15,marginLeft:15,marginRight:5}}
                          source={{uri: 'https://media.nanodot.us/img/xpIcon.png'}}
                        />
                        <Text style={{color:'#203541',textAlignVertical:'center',marginTop:15,}}>Points</Text>
                        </View>
                        
                        <Text style={{color:'#203541',fontFamily: 'FiraSans-Bold',fontSize:20,marginHorizontal:15,}}>202100</Text>
                        <Text style={{color:'#BBBBBB',fontFamily: 'FiraSans-Bold',marginHorizontal:15,fontSize:12}}>Total Points Earned</Text>

                      </View>

                      <View style={[
                      {
                        flex: 1,
                        height:100,
                        marginVertical:10,
                      },
                      ]}>
                        <View
                          style={[
                            {
                              flexDirection:'row',
                            },
                          ]}
                        >
                        <Image
                          style={{height:20,width:20,resizeMode:'contain',marginTop:15,marginLeft:15,marginRight:5}}
                          source={{uri: 'https://media.nanodot.us/img/pointIcon.png'}}
                        />
                        <Text style={{color:'#203541',textAlignVertical:'center',marginTop:15,}}>Coins</Text>
                        </View>
                        
                        <Text style={{color:'#203541',fontFamily: 'FiraSans-Bold',fontSize:20,marginHorizontal:15,}}>400 NC</Text>

                      </View>
                    

              </View>
              
              </View>

            </View>
          </SafeAreaView>
        </ScrollView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#F5F5F5',
    //alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  BG: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topContent: {
    // backgroundColor: '#f00',
    // borderBottomLeftRadius: 40,
    // borderBottomRightRadius: 40,
    // paddingTop: 20,
    // paddingBottom: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    // shadowOpacity: 0.4,
    // shadowRadius: 3,
    // elevation: 0,
    paddingHorizontal: 20 ,
  },
  pCardCont: {
    flex: 1,
    flexDirection:'row',
    // backgroundColor:"red",
    paddingHorizontal: 20 ,
    paddingTop: 10,
    // alignSelf: 'stretch',
  },
  pCardTitleTxt: {
    color: '#203541',
    fontSize: 12,
    fontFamily: 'FiraSans-Bold',
    marginTop:10,
    textTransform:'uppercase',
  },
});
export default Reward;