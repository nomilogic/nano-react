import React, { Component } from 'react';
import {
    ScrollView, 
    StyleSheet,
    StatusBar,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    LogBox,
} from 'react-native';
import { SvgCssUri  } from 'react-native-svg/css';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Moment from 'moment';

const ListView = (props) => {
    const [listView, setListView] = React.useState({
        "status": 200,
        "msg": "Event Found",
        "data":{
            "cards":[
                {
                    imgUrl: 'https://media.nanodot.us/img/Vs_.png',
                    title:'Save Water',
                    totalHoursCompleted: 0,
                    date: "2020-10-19T18:42:28.191+0000",
                    distance: 1,
                    totalHours:0,
                },
                {
                    imgUrl: 'https://media.nanodot.us/img/Vs_.png',
                    title:'Save Water',
                    totalHoursCompleted: 0,
                    date: "2020-10-19T18:42:28.191+0000",
                    distance: 1,
                    totalHours:0,
                },
                {
                    imgUrl: 'https://media.nanodot.us/img/Vs_.png',
                    title:'Save Water',
                    totalHoursCompleted: 0,
                    date: "2020-10-19T18:42:28.191+0000",
                    distance: 1,
                    totalHours:0,
                }
            ]
        }
    });
    const list = listView.data;
    const _renderItem = ({ item, index }) => (
        <>
            <View style={styles.card}>
                <View style={styles.imageBox}>
                    <Image
                        source={{uri: item.imgUrl}}
                        style={[styles.image]}
                    />
                </View>
                <View style={styles.contentBox}>
                    <View style={styles.titleBox}>
                        <View style={{flex:0.9}}>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                        <View style={{flex:0.1}}>
                            <Ionicons 
                                name="heart" 
                                size={20} 
                                color="#FF575F"
                                style={{top:20,right:5}} 
                            />
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <LinearGradient
                            useAngle={false}
                            start={{x: 0, y: 0.75}} 
                            end={{x: 1, y: 0.25}}
                            //angle={0}
                            //angleCenter={{x: 0.5, y: 0.5}}
                            colors={['#cfd955', '#f53d3d']}
                            style={{width:"25%",height:2}}
                        >
                        </LinearGradient>
                    </View>
                    <View style={styles.dateBox}>
                        <View style={{flex:0.2,alignItems:"center"}}>
                            <Ionicons 
                                name="time-outline" 
                                size={20} 
                                color="#FF575F"
                                style={{top:20}} 
                            />
                        </View>
                        <View style={{flex:0.5,paddingTop:15,paddingBottom:15}}>
                            <Text style={{fontSize:10,color:"#646464"}}>
                                {Moment(item.date).format('MMMM Do YYYY')} {Moment(item.date).format("hh:mm:ss a")}
                            </Text>
                            <Text style={{marginTop:5,fontSize:9,color:"#646464"}}>{item.distance} Way</Text>
                        </View>
                        <View style={{flex:0.4,paddingTop:15,paddingBottom:15}}>
                            <Text style={{fontSize:10,color:"#646464"}}>Total Hours Completed : {item.totalHours}</Text>
                        </View>
                   </View>
                </View>
            </View>
        </>
    );
    
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <View style={styles.BG}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.messageBoxContainer}>
                            <LinearGradient
                                useAngle={false}
                                start={{x: 0, y: 0.75}} 
                                end={{x: 1, y: 0.25}}
                                //angle={0}
                                //angleCenter={{x: 0.5, y: 0.5}}
                                colors={['#8f9553', '#ceda55']}
                                style={styles.linearGradient}
                            >
                                <Text style={styles.messageBox}>Volunteering Objective: 1/2 Environmental Projects</Text>
                            </LinearGradient>
                        </View>
                        <View style={styles.cardContainer}>
                            <FlatList
                                data={list.cards}
                                renderItem={_renderItem}
                                keyExtractor={(item,index) => index.toString()}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    BG:{
        flex: 1,
        //backgroundColor: "#F5F5F5",
    },
    messageBoxContainer:{
        flex:1,
    },
    linearGradient: {
        flex: 1,
        padding:10,
    },
    messageBox:{
        textAlign:"center",
        color:"#fff",
        fontSize:12,
        fontFamily:"FiraSans-Medium",
    },
    cardContainer:{
        flex:1,
        flexDirection:"column",
        marginTop:20,
    },
    card:{
        flex:1,
        flexDirection:"column",
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 1,
        marginBottom:20,
        marginLeft:15,
        marginRight:15,
    },
    imageBox:{
        flex:1,
        alignItems:"center",
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    image:{
        flex:1,
        width:"100%",
        height:200,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    titleBox:{
        flex:1,
        flexDirection:"row",
    },
    title:{
        fontSize:25,
        fontFamily:"FiraSans-Medium",
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10,
        color:"#262626",
        
    },
    dateBox:{
        flex:1,
        flexDirection:"row",
    },
    
    
});
export default ListView;