import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity,StatusBar,ScrollView,SafeAreaView,} from 'react-native';


class RewardDetails extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <>
              <StatusBar barStyle="light-content" backgroundColor="#FF5A60" />
              <ScrollView>
                    <View style={[
                        {
                        flex: 1,
                        flexDirection:'row',
                        height:250,
                        },
                    ]}>
                        <Image
                            style={{height: '100%', width: '100%'}}
                            source={{
                            uri:
                                'https://media.nanodot.us/nano/rewards/prod/event/ArtboardS5W1.png',
                            }}
                        />
                    </View>
                  <SafeAreaView style={[styles.container]}>
                  
                    <Text style={{color: '#adadad', fontSize: 14,marginVertical:10,}}>The more nano tasks you complete, the more you get a chance to win exciting prizes</Text>
                    <Text style={{color: '#203541', fontSize: 14,marginTop:10, fontFamily: 'FiraSans-Bold', textTransform:'uppercase',}}>Rules</Text>
                    <Text style={{color: '#adadad', fontSize: 14,}}>The more nano tasks you complete, the more you get a chance to win exciting prizes</Text>
                    <Text style={{color: '#203541', fontSize: 14,marginTop:10, fontFamily: 'FiraSans-Bold', textTransform:'uppercase',}}>Prizes</Text>

                    <View style={[
                      {
                        flex: 1,
                        // flexDirection:'row',
                      }]}>

                        <View style={[
                            {
                                flex: 1,
                                flexDirection:'row',
                                marginVertical:10,
                                
                            }]}>

                            <View style={[
                                {
                                    flex: 1,
                                    
                                }]}>
                                    <View style={[
                                    {
                                        flex: 1,
                                        height:50,
                                        width:50,
                                        borderRadius:"50%",
                                    }]}>
                                        <Image
                                            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
                                            source={{
                                            uri:
                                                'https://nanodotapp.s3.amazonaws.com/img/icon1.png',
                                            }}
                                        />
                                    </View>
                                    
                            </View>

                            <View style={[
                                {
                                    flex: 4,
                                }]}>
                                
                                <Text style={{color: '#7B7B7B', fontSize: 12,marginVertical:15,paddingLeft:10, fontFamily: 'FiraSans-Regular',}}>$150 Amazon Gift Card</Text>

                            </View>

                            <View style={[
                                {
                                    flex: 1,
                                }]}>

                                    <View style={[
                                    {
                                        flex: 1,
                                        height:50,
                                        width:50,
                                        borderRadius:"50%",
                                    }]}>
                                        <Image
                                            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
                                            source={{
                                            uri:
                                                'https://nanodotapp.s3.amazonaws.com/nano/rewards/cash.png',
                                            }}
                                        />
                                    </View>
                            </View>

                         </View>






                         <View style={[
                            {
                                flex: 1,
                                flexDirection:'row',
                                marginVertical:10,
                                
                            }]}>

                            <View style={[
                                {
                                    flex: 1,
                                    
                                }]}>
                                    <View style={[
                                    {
                                        flex: 1,
                                        height:50,
                                        width:50,
                                        borderRadius:"50%",
                                    }]}>
                                        <Image
                                            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
                                            source={{
                                            uri:
                                                'https://nanodotapp.s3.amazonaws.com/img/icon2.png',
                                            }}
                                        />
                                    </View>
                                    
                            </View>

                            <View style={[
                                {
                                    flex: 4,
                                }]}>
                                
                                <Text style={{color: '#7B7B7B', fontSize: 12,marginVertical:15,paddingLeft:10, fontFamily: 'FiraSans-Regular',}}>$150 Amazon Gift Card</Text>

                            </View>

                            <View style={[
                                {
                                    flex: 1,
                                }]}>

                                    <View style={[
                                    {
                                        flex: 1,
                                        height:50,
                                        width:50,
                                        borderRadius:"50%",
                                    }]}>
                                        <Image
                                            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
                                            source={{
                                            uri:
                                                'https://nanodotapp.s3.amazonaws.com/nano/rewards/cash.png',
                                            }}
                                        />
                                    </View>
                            </View>

                         </View>

                         <View style={[
                            {
                                flex: 1,
                                flexDirection:'row',
                                marginVertical:10,
                                
                            }]}>

                            <View style={[
                                {
                                    flex: 1,
                                    
                                }]}>
                                    <View style={[
                                    {
                                        flex: 1,
                                        height:50,
                                        width:50,
                                        borderRadius:"50%",
                                    }]}>
                                        <Image
                                            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
                                            source={{
                                            uri:
                                                'https://nanodotapp.s3.amazonaws.com/img/icon3.png',
                                            }}
                                        />
                                    </View>
                                    
                            </View>

                            <View style={[
                                {
                                    flex: 4,
                                }]}>
                                
                                <Text style={{color: '#7B7B7B', fontSize: 12,marginVertical:15,paddingLeft:10, fontFamily: 'FiraSans-Regular',}}>$150 Amazon Gift Card</Text>

                            </View>

                            <View style={[
                                {
                                    flex: 1,
                                }]}>

                                    <View style={[
                                    {
                                        flex: 1,
                                        height:50,
                                        width:50,
                                        borderRadius:"50%",
                                    }]}>
                                        <Image
                                            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
                                            source={{
                                            uri:
                                                'https://nanodotapp.s3.amazonaws.com/nano/rewards/cash.png',
                                            }}
                                        />
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
    marginHorizontal:20,
    marginBottom:10,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

});

export default RewardDetails;