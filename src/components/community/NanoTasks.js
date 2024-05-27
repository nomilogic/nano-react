import React, { Component } from 'react';
import {
    ScrollView, 
    StyleSheet,
    StatusBar,
    Image,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../Colors/colors';
const NanoTasks = (props) => {
    
    const [nanoTasks, setNanoTasks] = React.useState({
        "status": 200,
        "msg": "NanoTask Found",
        "data": [
            {
                "id": "5c98971bb3ddaa0001a2a6aa",
                "title": "TRASHPICKUP",
                "details": "Welcome to the #trashpickup nano task! We are challenging you to pick up one single piece of litter and throw it where it belongs…. In the garbage! If every user participates in this tiny little micro effort, we can all create a big impact as a community! Share a photo of your litter pickup to complete this nano task!",
                "bgImg": "https://media.nanodot.us/nano/local/nanotask/TRASHPICKUP/NoPath-3a03dbee.png",
                "imgURL": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/TRASHPICKUP/trashpickup_image[1]-8809dca8.jpg",
                "contentType": "image",
                "community": "Nano",
                "points": 10,
                "xp": 10,
                "count": 454,
                "status": 1,
                "users": [],
                "priority": 11,
                "environmental": true,
                "sponsored": false,
                "timeBasedType": 0,
                "activityContentType": "both",
                "carbonMultiplier": 1.0,
                "unlocked": true,
                "maxBatch": 0,
                "dailyAvgGoal": 1,
                "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/TRASHPICKUP/trash-39c8ed2a.svg",
                "nanoTaskType": "NORMAL",
                "existIncentive": false,
                "incentives": [],
                "tracks": [],
                "userList": [],
                "taskType": "NanoTask",
                "communityTask": true,
                "privateTask": false
            },
            {
                "id": "5c9897d7b3ddaa0001a2a6ab",
                "title": "ECOLIGHTS",
                "details": "Welcome to the #EcoLights nano task! This week we are challenging every nano user to install one single energy efficient bulb in their home! Not only do they create a much more natural look compared to a filament bulb, they’re also much less of a fire hazard! Share a photo of your smart bulb to complete this nano task!",
                "bgImg": "https://s3.amazonaws.com/nanodotapp/nano/nanotask/ecolight.png",
                "imgURL": "https://s3.amazonaws.com/nanodotapp/nano/nanotask/echolight_Image.png",
                "contentType": "image",
                "community": "Nano",
                "points": 10,
                "xp": 10,
                "count": 51,
                "status": 1,
                "users": [],
                "priority": 2,
                "environmental": false,
                "sponsored": false,
                "timeBasedType": 0,
                "activityContentType": "both",
                "unlocked": true,
                "maxBatch": 0,
                "dailyAvgGoal": 0,
                "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/ECOLIGHTS/EcoLight-834064cb.png",
                "nanoTaskType": "NORMAL",
                "existIncentive": false,
                "incentives": [],
                "tracks": [],
                "userList": [],
                "taskType": "NanoTask",
                "communityTask": true,
                "privateTask": false
            },
            {
                "id": "5c9db5957e349e0001335a85",
                "title": "RECYCLE",
                "details": "Welcome to the #recycle nano task! We’re challenging you to start thinking more closely about recycling within your own home!  Think about how many pieces of recycled paper, plastic, and cardboard end up in the trash every day! Nobody is perfect, but if you start recycling in your own home, your planet and your peers will thank you! Share a photo of your recycling to complete this nano task!",
                "bgImg": "https://media.nanodot.us/nano/local/nanotask/RECYCLE/Recycle-de016016.jpg",
                "imgURL": "https://media.nanodot.us/nano/local/nanotask/RECYCLE/subway-6a27e7e5-35b89b81.png",
                "contentType": "image",
                "community": "Nano",
                "points": 10,
                "xp": 10,
                "count": 234,
                "status": 1,
                "users": [],
                "priority": 15,
                "environmental": true,
                "sponsored": false,
                "timeBasedType": 0,
                "activityContentType": "both",
                "carbonMultiplier": 710.0,
                "unlocked": true,
                "maxBatch": 0,
                "dailyAvgGoal": 1,
                "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/RECYCLE/recycle-34751365.svg",
                "nanoTaskType": "NORMAL",
                "existIncentive": false,
                "incentives": [],
                "tracks": [],
                "userList": [],
                "taskType": "NanoTask",
                "communityTask": true,
                "privateTask": false
            },
            {
                "id": "5dd7b97848b4d400017f9ed8",
                "title": "WATERREFILL",
                "details": "Drinking out of a reusable water bottle is a great way to live an eco-friendlier lifestyle. Did you know more than 60 million plastic bottles end up in landfills and incinerators every day? Don’t be part of the problem; be part of the solution! Show you’re doing your part by completing the #WaterRefill nano task. All you have to do is take a picture of your reusable water bottle at the water fountain.",
                "bgImg": "https://media.nanodot.us/nano/local/nanotask/WATERREFILL/slack-imgs-9834d667.png",
                "thumbURL": "https://media.nanodot.us/nano/local/thumbnails/nanotask/WATERREFILL/waterfill-8b3d195b-4c135680.jpg",
                "videoURL": "https://media.nanodot.us/nano/local/nanotask/WATERREFILL/waterfill-2a5a8bd9-a95010c3.mov",
                "contentType": "video",
                "community": "Nano",
                "points": 10,
                "xp": 10,
                "count": 178,
                "status": 1,
                "users": [],
                "priority": 10,
                "environmental": true,
                "sponsored": false,
                "timeBasedType": 0,
                "activityContentType": "both",
                "carbonMultiplier": 80.0,
                "unlocked": true,
                "maxBatch": 0,
                "dailyAvgGoal": 1,
                "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/WATERREFILL/waterfill-58cadec6.svg",
                "nanoTaskType": "NORMAL",
                "existIncentive": false,
                "incentives": [],
                "tracks": [],
                "userList": [],
                "taskType": "NanoTask",
                "communityTask": true,
                "privateTask": false
            },
            {
                "id": "5f8f46829aad08000184b4bd",
                "title": "PhantomEnergy",
                "details": "Phantom energy, also known as vampire power, represents a draw of electricity that electronics consume while not being actively used. The “off-but-ready” or “standby” power mode of modern electronics add to the total energy use of your office / home and may account for a significant portion of your electric bill.\r\n\r\nTo complete the #PhantomEnergy nano task, shut-down and turn off your computer and monitor completely every day before you leave the office. This small task will save 143 grams per day while you sleep, and you will quickly see your emission reduction impact!",
                "bgImg": "https://media.nanodot.us/nano/local/nanotask/PhantomEnergy/PhantomEnergy-bd35150c.jpg",
                "imgURL": "https://media.nanodot.us/nano/local/nanotask/PhantomEnergy/PHANTOM-ENERGY-5c41d60e-d10b5654.jpg",
                "contentType": "image",
                "community": "Nano",
                "points": 10,
                "xp": 10,
                "count": 25,
                "status": 1,
                "users": [],
                "priority": 1,
                "environmental": true,
                "sponsored": false,
                "timeBasedType": 0,
                "activityContentType": "both",
                "carbonMultiplier": 143.0,
                "unlocked": true,
                "maxBatch": 0,
                "dailyAvgGoal": 1,
                "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/PhantomEnergy/EcoLight@3x-17eb6f3b.png",
                "nanoTaskType": "NORMAL",
                "existIncentive": false,
                "incentives": [],
                "tracks": [],
                "userList": [],
                "taskType": "NanoTask",
                "communityTask": true,
                "privateTask": false
            }
        ]
    });
    const communityTasks = nanoTasks.data;
    const renderSponsor = (item) => {
        if (item.sponsor && item.sponsor.name) {
            return <Text>{item.sponsor.name + ' Task'}</Text>;
        }
    };
    return (
        <>
            <ScrollView style={[styles.container]}>
                <View style={[styles.BG]}>
                    <View style={{flex:1, flexDirection:"column", marginTop:20,paddingBottom:20}}>
                        {communityTasks.map((item, index) => (
                            <View key={index}>
                                <TouchableOpacity
                                    delayPressIn={50}
                                    onPress={() =>
                                    this.props.navigation.navigate('NanoTaskDetails', {
                                        nanoTask: item,
                                    })}
                                >
                                    <ImageBackground
                                        style={[styles.nanoTaskBox]}
                                        source={{uri: item.bgImg}}
                                        imageStyle={{borderRadius: 8, resizeMode: 'cover'}}>
                                        <View
                                            style={[
                                            {justifyContent: 'center', flexDirection: 'column', flex: 1},
                                            ]}>
                                            <Text
                                            style={[
                                                {
                                                color: Colors.white,
                                                fontSize: 25,
                                                textAlign: 'left',
                                                fontFamily: 'FiraSans-Regular',
                                                margin: 20,
                                                textShadowColor: '#001',
                                                textShadowOffset: {width: 1, height: 1},
                                                textShadowRadius: 5,
                                                fontWeight: '100',
                                                },
                                            ]}>
                                                {'#' + item.title}
                                            </Text>
                                            <Text style={{
                                                color: Colors.white,
                                                fontSize: 13,
                                                textAlign: 'left',
                                                fontFamily: 'FiraSans-Regular',
                                                fontWeight: '100',
                                                marginLeft:20,
                                                marginRight:20,
                                            }}>
                                                <Text>{item.count}</Text><Text> uploads</Text>
                                            </Text>
                                        </View>
                                        <View>{renderSponsor(item)}</View>
                                        <Ionicons 
                                            name="chevron-forward" 
                                            size={45} 
                                            color="#fff"
                                            style={{top:35,right:0,position:"absolute"}} 
                                        />
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        ))}
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
    button: {
        alignItems: "center",
        backgroundColor: "transparent",
        padding: 5,
        borderRadius: 50,
        height:30,
        width:30,
    },
    nanoTaskBox: {
        height: 120,
        backgroundColor: Colors.white,
        alignContent: 'center',
        color: Colors.white,
        borderRadius: 12,
        margin: 4,
      },
    
    
    
});
export default NanoTasks;