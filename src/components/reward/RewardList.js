import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity,StatusBar,ScrollView,SafeAreaView,} from 'react-native';


class RewardList extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <>
            <StatusBar barStyle="light-content" backgroundColor="#FF5A60" />
            <ScrollView>
                <SafeAreaView style={[styles.container]}>
                    <Text style={[styles.TitleTxt]}>REWARDS & OFFERS</Text>

                    <View style={[
                      {
                        flex: 1,
                        flexDirection:'row',
                        backgroundColor:"#fff",
                        borderRadius:10,
                        marginTop:10,
                        marginBottom:10,
                        height:200,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 2.84,
                        elevation: 3,
                        overflow:'hidden',
                      },
                    ]}>
                        <Image
                            style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                            source={{
                            uri:
                                'https://media.nanodot.us/nano/rewards/prod/event/ArtboardS5W1.png',
                            }}
                        />

                    </View>
                    
                    <View style={[
                      {
                        flex: 1,
                        flexDirection:'row',
                        backgroundColor:"#fff",
                        borderRadius:10,
                        marginTop:10,
                        marginBottom:10,
                        height:200,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 2.84,
                        elevation: 3,
                        overflow:'hidden',
                      },
                    ]}>
                        <Image
                            style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                            source={{
                            uri:
                                'https://media.nanodot.us/nano/rewards/prod/event/ArtboardS5W1.png',
                            }}
                        />

                    </View>
                    
                    <View style={[
                      {
                        flex: 1,
                        flexDirection:'row',
                        backgroundColor:"#fff",
                        borderRadius:10,
                        marginTop:10,
                        marginBottom:10,
                        height:200,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 2.84,
                        elevation: 3,
                        overflow:'hidden',
                      },
                    ]}
                    onPress={() => alert('This is a button!')}>
                        <Image
                            style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                            source={{
                            uri:
                                'https://media.nanodot.us/nano/rewards/prod/event/ArtboardS5W1.png',
                            }}
                        />

                    </View>

                    <View style={[
                      {
                        flex: 1,
                        flexDirection:'row',
                        backgroundColor:"#fff",
                        borderRadius:10,
                        marginTop:10,
                        marginBottom:10,
                        height:200,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 2.84,
                        elevation: 3,
                        overflow:'hidden',
                      },
                    ]}>
                        <Image
                            style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                            source={{
                            uri:
                                'https://nanodotapp.s3.amazonaws.com/nano/rewards/prod/event/april2021.png',
                            }}
                        />

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
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },

      TitleTxt: {
        color: '#203541',
        fontSize: 12,
        fontFamily: 'FiraSans-Bold',
        textTransform:'uppercase',
      },

});

export default RewardList;