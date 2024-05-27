import React, { Component } from 'react';
import {
    ScrollView, 
    StyleSheet,
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import { SvgCssUri  } from 'react-native-svg/css';
import Moment from 'moment';

const Active = (props) =>{
    
    const [data, setData] = React.useState({
        senderImage: 'https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg',
        receiverImage: "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
        senderName:"You",
        receiverName:"Huzaifa A",
        senderPoints:50,
        receiverPoints:0,
        days:2,
        hours:13,
        minutes:3,
    });
    const [active, setActive] = React.useState({
        "status": 200,
        "msg": "Challenge(s) Found",
        "data": [
            {
                "id": "601927e1932054000184cd00",
                "sender": {
                    "id": "5c9dad7d7e349e0001335a83",
                    "name": "Farrukh Ismail",
                    "imgUrl": "https://media.nanodot.us/nano/local/user/5c9dad7d7e349e0001335a83/cover/userUpload5c9dad7d7e349e0001335a836403151137005345821.jpg",
                    "winner": false,
                    "points": 0
                },
                "receiver": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": false,
                    "points": 0
                },
                "invitationSent": "2021-02-02T10:22:25Z",
                "acceptTime": "2021-03-24T10:36:49Z",
                "startDate": "2021-03-24T00:00:00Z",
                "endDate": "2021-03-31T00:00:00Z",
                "senderPoints": 0,
                "receiverPoints": 0,
                "senderNanoTasks": 0,
                "receiverNanoTasks": 0,
                "winner": "TBD",
                "status": 2
            },
            {
                "id": "603ce3518c9a800001932e9d",
                "sender": {
                    "id": "5f7d7f735e60ca000103c51e",
                    "name": "Jolly",
                    "imgUrl": "https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg",
                    "winner": false,
                    "points": 0
                },
                "receiver": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": false,
                    "points": 0
                },
                "invitationSent": "2021-03-01T12:51:29Z",
                "acceptTime": "2021-03-24T10:36:44Z",
                "startDate": "2021-03-24T00:00:00Z",
                "endDate": "2021-03-31T00:00:00Z",
                "senderPoints": 0,
                "receiverPoints": 0,
                "senderNanoTasks": 0,
                "receiverNanoTasks": 0,
                "winner": "TBD",
                "status": 2
            }
        ]
    });
    
    const _renderItem = ({ item, index }) => (
        <>
            <View style={[styles.pointsBox,{paddingBottom:15,}]}>
                <View style={[styles.pointsBoxInner,{flex:0.5}]}>
                    <View style={styles.pointsWithImage}>
                        <View style={{flex:0.4}}>
                            {item.receiverPoints < item.senderPoints && ( 
                                <SvgCssUri
                                    width="16"
                                    height="16"
                                    uri={"https://media.nanodot.us/img/stars-big.svg"}
                                    style={[styles.pointsSenderStar,{position:"absolute",top:-1,left:-2,zIndex:1}]}
                                />
                            )}
                            <Image
                                source={{uri: item.sender.imgUrl}}
                                style={[styles.userImage,{width:50,height:50,borderWidth:0}]}
                            />
                        </View>
                        <View style={{flex:0.6,flexDirection:"column",marginLeft:5}}>
                            <Text style={{fontSize:14,marginTop:2,color:"#203541",fontFamily:"FiraSans-Bold"}} numberOfLines={1}>{item.sender.name}</Text>
                            <View style={[styles.pointsStyle,{flexDirection:"row"}]}>
                                <Text style={{fontSize:18,fontFamily:"FiraSans-Regular"}}>+{item.sender.points}</Text>
                                <SvgCssUri
                                    width="20"
                                    height="20"
                                    uri="https://media.nanodot.us/img/nano-coins.svg"
                                    style={styles.coinImage,{marginLeft:5,marginTop:2}}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.pointsBoxInner,{flex:0.4}]}>
                    <Text style={[styles.vsTimeHeadding,{marginTop:0}]}>VS</Text>
                    <View style={[styles.timeBox,{flexDirection:"row",borderWidth:1,borderColor:"#2AA39A",borderRadius:15,paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10}]}>
                        <Text style={[styles.days,{fontSize:9,color:"#2AA39A"}]}>{Moment(item.endDate).format('d')}D</Text>
                        <Text style={[styles.hours,{fontSize:9,color:"#2AA39A",top:0}]}>{Moment(item.endDate).format('h')}H</Text>
                        {/* <Text style={[styles.minutes,{fontSize:12}]}>{item.minutes}MIN</Text> */}
                    </View>
                </View>
                <View style={[styles.pointsBoxInner,{flex:0.5}]}>
                    <View style={styles.pointsWithImage}>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <View style={{flex:0.6,flexDirection:"column",marginRight:5}}>
                                <Text style={{fontSize:14,marginTop:2,color:"#203541",fontFamily:"FiraSans-Bold"}} numberOfLines={1}>{item.receiver.name}</Text>
                                <View style={[styles.pointsStyle,{flexDirection:"row"}]}>
                                    <Text style={{fontSize:18,fontFamily:"FiraSans-Regular"}}>+{item.receiverPoints}</Text>
                                    <SvgCssUri
                                        width="20"
                                        height="20"
                                        uri="https://media.nanodot.us/img/nano-coins.svg"
                                        style={[styles.coinImage,{marginLeft:5,top:2}]}
                                    />
                                </View>
                            </View>
                            <View style={{flex:0.4}}>
                                <Image
                                    source={{uri: item.receiver.imgUrl}}
                                    style={[styles.userImage,{width:50,height:50,borderWidth:0}]}
                                />
                                {item.receiverPoints >  item.senderPoints && ( 
                                    <SvgCssUri
                                        width="16"
                                        height="16"
                                        uri="https://media.nanodot.us/img/stars-big.svg"
                                        style={[styles.pointsSenderStar,{position:"absolute",top:-1,right:-2,zIndex:1}]}
                                    />
                                )}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {index+1 <= active.data.length -1 && (
                <View style={{height:1,backgroundColor:"#E1E1E1",marginTop:10,marginBottom:10}}></View>
            )}
        </>
    );
    
    return (
        <>
            {/* <StatusBar barStyle="light-content" backgroundColor="#FF5A60"/> */}
            <ScrollView>
                {/* <SafeAreaView style={[styles.container ]} backgroundColor="#F5F5F5"> */}
                    <View style={[styles.BG]}>
                        <View style={styles.topBox}>
                            <View style={styles.versusBox}>
                                <View style={[styles.imageBox,{flex: 0.4,marginTop:15}]}>
                                    <Image
                                        source={{uri: data.senderName == "You" ? data.senderImage : data.receiverImage}}
                                        style={[styles.userImage,styles.senderImage]}
                                    />
                                    <Image
                                        source={{uri: "https://media.nanodot.us/img/Vs_.png"}}
                                        style={[styles.vsImage]}
                                    />
                                    <Image
                                        source={{uri: data.receiverName != "You" ? data.receiverImage : data.senderImage}}
                                        style={[styles.userImage,styles.receiverImage]}
                                    />
                                </View>
                                <View style={{flex: 0.1,}}>
                                    <Text style={{marginTop:30,marginBottom:30,width:2,height:100,backgroundColor:"#bbb",textAlign:"center"}}></Text>
                                </View>
                                <View style={[styles.txtBoxStyle,{flex: 0.6,}]}>
                                    <View style={styles.vsTxtBox}>
                                        <Text style={[styles.userTxt,{top:35}]}>
                                            {data.senderName == "You" ? data.senderName : data.receiverName}
                                            <Text style={styles.vsTxt}> VS</Text>
                                        </Text>
                                        <Text style={[styles.userTxt,{top:25}]}>{data.receiverName != "You" ? data.receiverName : data.senderName}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.pointsBox}>
                                <View style={[styles.pointsBoxInner,{borderRightWidth:1,borderRightColor:"#E9E9E9"}]}>
                                    <View style={styles.pointsHeadingBox}>
                                        <View style={[styles.pointsTxt,{flexDirection:"row"}]}>
                                            {data.receiverPoints > data.senderPoints && (
                                                <SvgCssUri
                                                    width="12"
                                                    height="12"
                                                    uri="https://media.nanodot.us/img/stars-big.svg"
                                                    style={[styles.pointsSenderStar]}
                                                />
                                            )}
                                            <Text style={{color:"#BBBBBB",marginLeft:3,fontSize:12,fontFamily:"FiraSans-Regular"}}>{data.senderName == "You" ? data.senderName : data.receiverName}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.pointsTxtBox}>
                                        <View style={[styles.pointsStyle,{flexDirection:"row"}]}>
                                            <Text style={{marginRight:5,fontSize:20,fontFamily:"FiraSans-Regular"}}>+{data.senderName == "You" ? data.senderPoints : data.receiverPoints}</Text>
                                            <SvgCssUri
                                                width="20"
                                                height="20"
                                                uri="https://media.nanodot.us/img/nano-coins.svg"
                                                style={[styles.coinImage,{top:5,}]}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.pointsBoxInner,{borderRightWidth:1,borderRightColor:"#E9E9E9"}]}>
                                    <View style={styles.pointsHeadingBox}>
                                        <View style={[styles.pointsTxt,{flexDirection:"row"}]}>
                                            {data.receiverPoints < data.senderPoints && (
                                                <SvgCssUri
                                                    width="12"
                                                    height="12"
                                                    uri="https://media.nanodot.us/img/stars-big.svg"
                                                    style={[styles.pointsSenderStar]}
                                                />
                                            )}
                                            <Text style={{color:"#BBBBBB",marginLeft:3,fontSize:12,fontFamily:"FiraSans-Regular"}}>{data.receiverName != "You" ? data.receiverName : data.senderName}</Text>
                                        </View>
                                        {/* <Text style={styles.pointsTxt}>{this.state.receiverName != "You" ? this.state.receiverName : this.state.senderName}</Text> */}
                                    </View>
                                    <View style={styles.pointsTxtBox}>
                                        <View style={[styles.pointsStyle,{flexDirection:"row"}]}>
                                            <Text style={{marginRight:5,fontSize:20,fontFamily:"FiraSans-Regular"}}>+{data.receiverName != "You" ? data.receiverPoints : data.senderPoints}</Text>
                                            <SvgCssUri
                                                width="20"
                                                height="20"
                                                uri="https://media.nanodot.us/img/nano-coins.svg"
                                                style={styles.coinImage,{top:5,}}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.pointsBoxInner}>
                                    <View style={styles.pointsHeadingBox}>
                                        <Text style={[styles.pointsTxt,{fontSize:12,fontFamily:"FiraSans-Regular"}]}>Time Left</Text>
                                    </View>
                                    <View style={styles.pointsTxtBox}>
                                        <View style={[styles.timeBox,{flexDirection:"row"}]}>
                                            <Text style={[styles.days,{fontFamily:"FiraSans-Regular"}]}>{data.days}D</Text>
                                            <Text style={[styles.hours,{fontFamily:"FiraSans-Regular"}]}>{data.hours}H</Text>
                                            <Text style={[styles.minutes,{fontFamily:"FiraSans-Regular"}]}>{data.minutes}M</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.txtStyleBox}>
                                <Text style={styles.txtStyle}>You've started a 7 day sustainability showdown with @{data.senderName != "You" ? data.senderName : data.receiverName}! The user with the most sustainable impact over the 7 days will receive double rewards for each of their completed tasks.</Text>
                            </View>
                        </View>
                        <View style={styles.bottomBox}>
                            <FlatList
                                data={active.data}
                                renderItem={_renderItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>
                {/* </SafeAreaView> */}
            </ScrollView>
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
    topBox:{
        flex: 1,
        flexDirection:"column",
        backgroundColor: "#fff",
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },
    versusBox:{
        flex: 1,
        flexDirection:"row",
        backgroundColor:"#FF5A60",
        borderRadius:15,
        margin:15,
        position:"relative",
    },
    imageBox:{
        
        flexDirection:"row",
        height:130,
        marginBottom:15,
    },
    txtBox:{
        flex: 0.6,
        height:150,
    },
    userImage:{
        width: 56, 
        height: 56,
        borderRadius:50,
        borderWidth:5,
        borderColor:"#fff",
    },
    senderImage:{
        top:20,
        left:20,
    },
    vsImage:{
        position:"absolute",
        width: 20, 
        height: 20,
        top:48,
        left:48,
        zIndex:1,
    },
    receiverImage:{
        top:48,
        left:-10,
    },
    txtBoxStyle:{
        flexDirection:"column",
    },
    userTxt:{
        color:"#fff",
        fontSize:28,
        fontFamily:"FiraSans-Bold",
    },
    vsTxt:{
        fontFamily:"FiraSans-Italic",
        color:"#203541",
        fontStyle:"italic",
    },
    pointsBox:{
        flex: 1,
        flexDirection:"row",
        marginTop:20,
    },
    pointsBoxInner:{
        flex:0.4,
        flexDirection:"column",
        alignItems:"center",
    },
    pointsHeadingBox:{},
    pointsSenderStar:{
        width:10,
        height:10,
    },
    pointsTxt:{
        color:"#BBBBBB",
        top:5,
        fontSize:14,
    },
    pointsTxtBox:{
        marginTop:10,
    },
    pointsStyle:{
        fontSize:20,
    },
    coinImage:{
        width:20,
        height:20,
    },
    timeBox:{
        marginTop:5,
    },
    days:{
        fontSize:18,
        marginRight:5,
        fontFamily:"FiraSans-Regular"
    },
    hours:{
        fontSize:14,
        marginRight:5,
        top:5,
        fontFamily:"FiraSans-Regular"
    },
    minutes:{
        fontSize:14,
        color:"#bbb",
        top:5,
        fontFamily:"FiraSans-Regular"
    },
    txtStyleBox:{
        flex: 1,
        flexDirection:"row",
        //marginTop:10,
    },
    txtStyle:{
        margin:20,
        padding:10,
        textAlign:"center",
        fontSize:14,
        color: "#bbb",
        fontFamily:"FiraSans-Regular"
    },
    bottomBox:{
        flex: 1,
        flexDirection:"column",
        margin:15,
    },
    vsTimeHeadding:{
        marginTop:2,
        color:"#f53d3d",
        fontFamily:"FiraSans-Regular",
        fontSize:14,
        fontStyle:"italic"
    },
    pointsWithImage:{
        flex:1,
        flexDirection:"row"
    },
    
    
});
export default Active;