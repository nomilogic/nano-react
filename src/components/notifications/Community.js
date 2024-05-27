import React, { useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import Moment from 'moment';
const Community = (props) => {
    const communityArray = props.community;
    useEffect(() => {});
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.boxContainer}>
                        {communityArray.map((item, index) => (
                            <View style={styles.box} key={index}>
                                <View style={{flex:0.2}}>
                                    <Image
                                        style={[styles.avatar]}
                                        source={{uri: item.imgUrl}}
                                    />
                                </View>
                                <View style={{flex:0.8}}>
                                    <View style={{flex:1,flexDirection:"column",marginBottom:10}}>
                                        <View style={{flex:1,flexDirection:"row"}}>
                                            {/* <View style={{flexDirection:"row",}}></View> */}
                                            <Text style={styles.txtContent}>
                                                <Text style={{fontFamily:"FiraSans-Bold",}}>{item.userName} </Text>
                                                <Text style={{fontFamily:"FiraSans-Regular"}}> - {item.details}</Text>
                                            </Text>
                                        </View>
                                        <View style={{flex:1,flexDirection:"row"}}>
                                            <View style={{flex:0.8}}>
                                                <Text style={{color:"#6B6B6B",marginTop:5,fontFamily:"FiraSans-Regular"}}>{Moment(item.notificationDate).startOf().fromNow()}</Text>
                                            </View>
                                            <View style={{flex:0.2}}>
                                                {item.type == 'message' && (
                                                    <TouchableOpacity
                                                        style={[styles.button]}
                                                        //onPress={this.onPress}
                                                    >
                                                        <Text style={styles.btnTxt1}>View</Text>
                                                    </TouchableOpacity>
                                                )}
                                            </View>
                                        </View>
                                    </View>
                                    {index+1 <= communityArray.length -1 && (
                                        <View style={{height:1,backgroundColor:"#E5E5E5"}}></View>
                                    )}
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    BG: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    boxContainer:{
        backgroundColor:"#F6F6F6",
        padding:20,
        flexDirection:"column",
        flex:1,
    },
    box:{
        flex:1,
        flexDirection:"row",
        marginBottom:10,
        paddingTop:10,
        paddingBottom:10,
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:50,
    },
    txtContent:{
        marginTop:5,
    },
    button: {
        alignItems: "center",
        backgroundColor: "transparent",
        
    },
    btnTxt1:{
        color:"#fff",
        fontSize:12,
        backgroundColor:"#FF5A60",
        borderRadius: 8,
        padding:10,
        fontFamily:"FiraSans-Regular",
        //borderWidth:1,
        //borderColor:"#FD7378",
    },
   
    
    
  });
  

export default Community;