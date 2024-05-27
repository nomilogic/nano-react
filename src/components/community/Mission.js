import React, { Component } from 'react';
import {
    ScrollView, 
    StyleSheet,
    StatusBar,
    Image,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../Colors/colors';
const Mission = (props) => {
    const mission = props.data;
    return(
        <>
            <ScrollView style={[styles.container]}>
                <View style={[styles.BG]}>
                    <View style={{flex:1, flexDirection:"row",paddingTop:15,paddingLeft:10,paddingRight:10}}>
                        <View style={{flex:0.2}}>
                            <Image
                                source={{uri: mission.logoUrl != '' ? mission.logoUrl : "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png"}}
                                style={{width:45,height:45,borderRadius:50}}
                            />
                        </View>
                        <View style={{flex:0.9}}><Text style={{fontFamily:"FiraSans-Bold",fontSize:20,marginTop:7}} numberOfLines={1}>{mission.name}</Text></View>
                        {mission.admin == true && (
                            <View style={{flex:0.2}}><Text style={{color:Colors.primary,backgroundColor:Colors.white,borderWidth:1,borderRadius:6,borderColor:Colors.primary,fontFamily:"FiraSans-Light",fontSize:15,padding:5,textAlign:"center",marginTop:10}}>LOGIN</Text></View>
                        )}
                    </View>
                    <View style={{flex:1}}>
                        <Image
                            width={Dimensions.get('window').width}
                            height={350}
                            source={{uri: mission.imgUrl}}
                            style={{width:Dimensions.get('window').width,height:350,marginTop:15}}
                        />
                    </View>
                    <View style={{flex:1,flexDirection:"column"}}>
                        <View style={{flex:1}}>
                            <Text style={styles.title}>Focus Area</Text>
                        </View>
                        <View style={{marginVertical: 5,flexWrap: 'wrap',flex: 1}}>
                            <View style={{flexDirection: 'row',justifyContent: 'flex-start',flexWrap: 'wrap'}}>
                                {mission.tracks.length > 0 && (
                                    mission.tracks.map((track, index) => (
                                        <TouchableOpacity
                                        style={[
                                            styles.sdgBtns,
                                            styles['sdgBtn'+index]
                                        ]}
                                        key={index}
                                        >
                                        <Text numberOfLines={1} style={styles.sdgTxt}>
                                            {track}
                                        </Text>
                                        </TouchableOpacity>
                                    ))
                                )}
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:"column"}}>
                        <View style={{flex:1}}>
                            <Text style={styles.title}>Our Mission</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={styles.description}>{mission.details}</Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:"column",marginBottom:20}}>
                        <View style={{flex:1}}>
                            <Text style={styles.title}>Learn More</Text>
                        </View>
                        <View style={{flex:1,flexDirection:"column",marginBottom:15}}>
                            {mission.urls.length > 0 && (
                                mission.urls.map((link, index) => (
                                    <TouchableOpacity
                                    style={{}}
                                    key={index}
                                    >
                                        <Text style={styles.description}>{link}</Text>
                                    </TouchableOpacity>
                                ))
                            )}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    BG:{
        flex: 1,
        backgroundColor: "#fff",
    },
    sdgBtns: {
        borderRadius: 20,
        borderWidth: 1,
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
        fontFamily:"FiraSans-Light",
        fontSize:14,
    },
    title:{
        fontFamily:"FiraSans-Medium",
        fontSize:18,
        color: "#203541",
        margin:15,
    },
    description:{
        fontFamily:"FiraSans-Light",
        fontSize:15,
        color: "#ADADAD",
        marginLeft:15,
        marginRight:15,
    },
    sdgBtn0:
    {
        backgroundColor: "#f58d96",
        borderColor: "#EB1C2D",
    },
    sdgBtn1:
    {
        backgroundColor: "#e9cf94",
        borderColor: "#d3a029",
    },
    sdgBtn2:
    {
        backgroundColor: "#99eab1",
        borderColor: "#279b48",
    },
    sdgBtn3:
    {
        backgroundColor: "#e18f99",
        borderColor: "#c31f33",
    },
    sdgBtn4:
    {
        backgroundColor: "#f79f95",
        borderColor: "#ef402b",
    },
    sdgBtn5:
    {
        backgroundColor: "#7fd6ec",
        borderColor: "#00aed9",
    },
    sdgBtn6:
    {
        backgroundColor: "#fedb89",
        borderColor: "#fdb713",
    },
    sdgBtn7:
    {
        backgroundColor: "#c78b9b",
        borderColor: "#8f1838",
    },
    sdgBtn8:
    {
        backgroundColor: "#f9b692",
        borderColor: "#f36d25",
    },
    sdgBtn9:
    {
        backgroundColor: "#f089c1",
        borderColor: "#e11484",
    },
    sdgBtn10:
    {
        backgroundColor: "#fcce92",
        borderColor: "#f99d26",
    },
    sdgBtn11:
    {
        backgroundColor: "#e7c694",
        borderColor: "#cf8d2a",
    },
    sdgBtn12:
    {
        backgroundColor: "#a3bb9e",
        borderColor: "#48773e",
    },
    sdgBtn13:
    {
        backgroundColor: "#7fbedd",
        borderColor: "#007dbc",
    },
    sdgBtn14:
    {
        backgroundColor: "#9ed7a4",
        borderColor: "#3eb049",
    },
    sdgBtn15:
    {
        backgroundColor: "#82aac6",
        borderColor: "#166294",
    },
    sdgBtn16:
    {
        backgroundColor: "#8b9ab3",
        borderColor: "#2a4674",
    },
    
});
export default Mission;