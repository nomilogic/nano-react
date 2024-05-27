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
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {Colors} from '../Colors/colors';
import Active from './Active';
import Completed from './Completed';
import Teams from './Teams';

class Invited extends Component{
    
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested inside']);
    }
    state = {
        selectedIndex:0,
        invited : {
            "status": 200,
            "msg": "List Found",
            "data": [
                {
                    "frnd": {
                        "id": "5f7d7f735e60ca000103c51e",
                        "name": "Jolly",
                        "imgUrl": "https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 2
                },
                {
                    "frnd": {
                        "id": "5c9df4887e349e0001335a95",
                        "name": "Mark Terry",
                        "imgUrl": "https://graph.facebook.com/10157048947663609/picture?type=large",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5c9df5e37e349e0001335a98",
                        "name": "Alexander Terry",
                        "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/user/5c9df5e37e349e0001335a98/cover/userUpload5c9df5e37e349e0001335a987636787323445854350.jpg",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5cb22a7c6130b300017ae699",
                        "name": "Yagottawanna",
                        "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/user/5cb22a7c6130b300017ae699/cover/userUpload5cb22a7c6130b300017ae6996993321560670190030.jpg",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5d2745b9a7b6ee0001076395",
                        "name": "Hassan Mohiuddin",
                        "imgUrl": "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5d36f29d604e470001b75941",
                        "name": "Huzaifa A",
                        "imgUrl": "https://media.nanodot.us/nano/stage/default/User.png",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5dce997240af4b0001e9c658",
                        "name": "rohaan",
                        "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5dd28b23e49f900001fabe6e",
                        "name": "m",
                        "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5ddf7a14b7c7aa00016f5ceb",
                        "name": "Maqbo",
                        "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5e0dea31bbf69600019c0e1e",
                        "name": "Farrukh Ismail",
                        "imgUrl": "https://graph.facebook.com/404341726824453/picture?type=large",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5e4befb73e96a9000177e757",
                        "name": "Sameer",
                        "imgUrl": "https://media.nanodot.us/nano/local/user/5e4befb73e96a9000177e757/cover/userUpload5e4befb73e96a9000177e7578790353509784524978.jpg",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5e57f9cb303f5300015f915c",
                        "name": "Syed Abbas",
                        "imgUrl": "https://graph.facebook.com/10220825645900601/picture?type=large",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5f69f4127198ea000196cb5e",
                        "name": "Flora Kis",
                        "imgUrl": "https://graph.facebook.com/10220810151637609/picture?type=large",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5f6a00a57198ea000196cb60",
                        "name": "Patrick",
                        "imgUrl": "https://media.nanodot.us/nano/local/user/5f6a00a57198ea000196cb60/cover/userUpload5f6a00a57198ea000196cb607124537509702868623.jpg",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5f6a03be7198ea000196cb6a",
                        "name": "Christine Böhmer ",
                        "imgUrl": "https://media.nanodot.us/nano/local/user/5f6a03be7198ea000196cb6a/cover/userUpload5f6a03be7198ea000196cb6a987089308427793044.jpg",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5f6a03fd7198ea000196cb6b",
                        "name": "AntjeSusan",
                        "imgUrl": "https://media.nanodot.us/nano/local/user/5f6a03fd7198ea000196cb6b/cover/userUpload5f6a03fd7198ea000196cb6b2039285067624450138.jpg",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5f71b4037198ea000196cb9c",
                        "name": "Laurita",
                        "imgUrl": "https://media.nanodot.us/nano/local/user/5f71b4037198ea000196cb9c/cover/userUpload5f71b4037198ea000196cb9c6520631390985017806.jpg",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5f73347f7198ea000196cbb3",
                        "name": "Kattrin",
                        "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5f7b261303112e0001feda8d",
                        "name": "Axel",
                        "imgUrl": "https://media.nanodot.us/nano/local/user/5f7b261303112e0001feda8d/cover/userUpload5f7b261303112e0001feda8d1784522078229775416.jpg",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5f7b2acb03112e0001feda94",
                        "name": "Steven",
                        "imgUrl": "https://media.nanodot.us/nano/local/user/5f7b2acb03112e0001feda94/cover/userUpload5f7b2acb03112e0001feda945934120572096650078.jpg",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5f7d81535e60ca000103c51f",
                        "name": "Fee Zeilinger",
                        "imgUrl": "https://media.nanodot.us/nano/local/user/5f7d81535e60ca000103c51f/cover/userUpload5f7d81535e60ca000103c51f1239001191531396407.jpg",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 0
                },
                {
                    "frnd": {
                        "id": "5c9c96fcccb1b70001aa5e06",
                        "name": "Nomi",
                        "imgUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=817916938565778&height=200&width=200&ext=1556359022&hash=AeRw_gCBKMpZ3kAG",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 1
                },
                {
                    "frnd": {
                        "id": "5c9cb5ed3f7b120001c144fb",
                        "name": "Turab",
                        "imgUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2233069256944629&height=200&width=200&ext=1556366146&hash=AeRgj51QavduF3zE",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 1
                },
                {
                    "frnd": {
                        "id": "5c9cd1623f7b120001c14504",
                        "name": "Alex",
                        "imgUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10114809113599514&height=200&width=200&ext=1556373158&hash=AeSXkLvR4wvhfrH9",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 1
                },
                {
                    "frnd": {
                        "id": "5c9dad7d7e349e0001335a83",
                        "name": "Farrukh Ismail",
                        "imgUrl": "https://media.nanodot.us/nano/local/user/5c9dad7d7e349e0001335a83/cover/userUpload5c9dad7d7e349e0001335a836403151137005345821.jpg",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 1
                },
                {
                    "frnd": {
                        "id": "5ca262b34734320001c0ee9d",
                        "name": "Mathilde.savi",
                        "imgUrl": "http://graph.facebook.com/658272664602760/picture?type=large",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 1
                },
                {
                    "frnd": {
                        "id": "5cab659a0a1a8d00010a6654",
                        "name": "Larger",
                        "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 1
                },
                {
                    "frnd": {
                        "id": "5cb22a1e6130b300017ae698",
                        "name": "Cat",
                        "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 1
                },
                {
                    "frnd": {
                        "id": "5d134c053cd3040001863277",
                        "name": "HuzaifaTestAlpha",
                        "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 1
                },
                {
                    "frnd": {
                        "id": "5d1e0968b9f0a3000176632f",
                        "name": "Syed Taqiuddin",
                        "imgUrl": "http://graph.facebook.com/10158596316943272/picture?type=large",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 1
                },
                {
                    "frnd": {
                        "id": "5d2bb0aba7b6ee00010763c1",
                        "name": "Eric Moore",
                        "imgUrl": "https://graph.facebook.com/2267256073533876/picture?type=large",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 1
                },
                {
                    "frnd": {
                        "id": "5d9d81e5e88be80001d364f8",
                        "name": "Rohaan",
                        "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 1
                },
                {
                    "frnd": {
                        "id": "5db83e7d9107d700010976b1",
                        "name": "Syed Taqiuddin",
                        "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                        "eventId": 0,
                        "currentPlanetlvl": 0,
                        "nextPlanetlvl": 0,
                        "upgrade": false,
                        "completedTasks": 0,
                        "requiredTasks": 0
                    },
                    "status": 1
                }
            ]
        }
    };
    _renderItem = ({ item }) => (
        <View style={{marginTop:20,flex:1,flexDirection:"row"}}>
            <View style={{flex:0.2,alignItems: "center",}}>
                <Image
                    source={{uri: item.frnd.imgUrl}}
                    style={[styles.userImage,{top:-5}]}
                />
            </View>
            <View style={{flex:0.5}}>
                <Text style={[styles.userTxt,{fontSize:14,fontFamily:"FiraSans-Bold"}]} numberOfLines={1}>{item.frnd.name}</Text>
            </View>
            <View style={{flex:0.3,alignItems: "center"}}>
                <TouchableOpacity
                    style={[styles.button]}
                    //onPress={this.onPress}
                >
                    {item.status == 0 && (
                        <Text style={styles.btnTxt0}>Accept</Text>
                    )}
                    {item.status == 1 && (
                        <Text style={styles.btnTxt1}>Sent</Text>
                    )}
                    {item.status == 2 && (
                        <Text style={styles.btnTxt2}>Challenge</Text>
                    )}
                    
                </TouchableOpacity>
            </View>
        </View>
    );
    handleIndexChange = (index) => {
        this.setState({
          ...this.state,
          selectedIndex: index,
        });
      };
    render() {
        const { modalVisible } = this.state;
        const invited = this.state.invited.data;
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor="#FF5A60"/>
                <SegmentedControlTab
                    values={['Invited', 'Active', 'Completed', 'Teams']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    tabStyle={{backgroundColor: Colors.white, borderWidth: 0,paddingTop:20}}
                    activeTabStyle={{backgroundColor: Colors.white, borderWidth: 0}}
                    activeTabTextStyle={{
                    color: '#203541',
                    fontFamily: 'FiraSans-Medium',
                    borderBottomWidth:2,
                    borderBottomColor:'#203541',
                    }}
                    tabTextStyle={{color: Colors.grey, fontFamily: 'FiraSans-Regular',paddingLeft:5,paddingRight:5,paddingBottom:5}}
                />
                {this.state.selectedIndex == 0 && (
                    <ScrollView>
                        <SafeAreaView style={[styles.container ]} backgroundColor="#F5F5F5">
                            <View style={[styles.BG]}>
                                <View style={{flex:1,backgroundColor:"#F5F5F5"}}>
                                    <View style={{alignItems:"flex-start",top:20,left:20,}}>
                                        <Image
                                            source={{uri: "https://media.nanodot.us/img/Vs_.png"}}
                                            style={[styles.vsImage]}
                                        />
                                    </View>
                                    <View style={{alignItems:"flex-end",top:20,position:"absolute",right:-10,}}>
                                        <SvgCssUri
                                            width="100"
                                            height="100"
                                            uri="https://media.nanodot.us/img/Versus_invited.svg"
                                            style={styles.star2Image}
                                        />
                                    </View>
                                    <View style={{alignItems:"flex-start",marginTop:50,left:20,flexDiretion:"column",}}>
                                        <Text style={styles.heading}>Welcome to</Text>
                                        <Text style={styles.heading}>Versus!</Text>
                                    </View>
                                    <View style={{marginLeft:15,marginRight:15,marginTop:20}}>
                                        <Text style={styles.paragraph}>Challange a friend to a sustainability showdown! The user with the most sustainable impact after 7 days wins!</Text>
                                    </View>
                                </View>
                                <View style={{flex:1,backgroundColor:"#F5F5F5"}}>
                                    <View style={styles.inputParentBox}>
                                        <Ionicons 
                                            name="search" 
                                            size={20} 
                                            color="#858585"
                                            style={{top:8,left:10}} 
                                        />
                                        <TextInput
                                            placeholder="Search"
                                            style={[styles.textInput,{top:2,left:10}]}
                                            placeholderTextColor="#D0D0D5"
                                            
                                        />
                                    </View>
                                    <View style={{flexDirection:"column",marginTop:20,paddingBottom:20}}>
                                        <FlatList
                                            data={invited}
                                            renderItem={this._renderItem}
                                            keyExtractor={(item,index) => index.toString()}
                                        />
                                    </View>
                                </View>
                            </View>
                        </SafeAreaView>
                    </ScrollView>
                )}
                {this.state.selectedIndex == 1 && <Active />}
                {this.state.selectedIndex == 2 && <Completed />}
                {this.state.selectedIndex == 3 && <Teams />}
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    BG:{
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    vsImage:{
        width: 25, 
        height: 25,
    },
    star2Image:{
        top:5,
        right:0,
        alignItems:"flex-end"
    },
    heading:{
        fontSize:28,
        color:"#203541",
        fontFamily:"FiraSans-Bold",
    },
    paragraph:{
        color:"#BBBBBB",
        fontSize:16,
        fontFamily:"FiraSans-Regular",
        paddingLeft:10,
        paddingRight:10,
    },
    inputParentBox:{
        flexDirection: "row",
        backgroundColor: '#E1E1E1',
        borderRadius: 5,
        marginTop: 20,
        marginLeft:15,
        marginRight:15,
    },
    textInput: {
        width: "90%",
        height: 40,
        backgroundColor: 'transparent',
        fontSize: 16,
        padding: 10,
        color: '#D0D0D5',
        fontFamily:"FiraSans-Regular"
    },
    userImage: {
        width: 50, 
        height: 50,
        borderRadius:50,
    },
    button: {
        alignItems: "center",
        backgroundColor: "transparent",
        
    },
    btnTxt0:{
        color:"#fff",
        padding: 5,
        fontSize:9,
        backgroundColor:"#2AA39A",
        borderRadius: 25,
        fontFamily:"FiraSans-Light",
        paddingLeft:20,
        paddingRight:20,
        textTransform:"uppercase",
        textAlignVertical: "center"
    },
    btnTxt1:{
        color:"#2AA39A",
        padding: 5,
        fontSize:9,
        borderWidth:2,
        borderColor:"#2AA39A",
        borderRadius: 25,
        fontFamily:"FiraSans-Light",
        paddingLeft:20,
        paddingRight:20,
        textTransform:"uppercase",
        textAlignVertical: "center"
    },
    btnTxt2:{
        color:"#FF5A60",
        padding: 5,
        fontSize:9,
        borderWidth:2,
        borderColor:"#FF5A60",
        borderRadius: 25,
        fontFamily:"FiraSans-Light",
        paddingLeft:20,
        paddingRight:20,
        textTransform:"uppercase",
        textAlignVertical: "center"
    },
    
    
});
export default Invited;