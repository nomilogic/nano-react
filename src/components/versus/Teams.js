import React, { useEffect } from 'react';
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
const Teams = (props) =>{
    const [search, setSearch] = React.useState("");
    const [msg, setMsg] = React.useState("Status 500 error");
    const [inTeam, setInTeam] = React.useState(true);
    const [team, setTeam] = React.useState({
        "id": "",
        "title": "",
        "description": "",
        "imgUrl": "",
        "communityId": "",
        "members": [],
        "teamMembers": [],
        "uploads": 0,
        "impact": 0.0,
        "status": 0,
        "totalmembers": 0,
        "existIncentive": false,
        "incentives": [],
        "joined": false
    });
    const [getData, setGetData] = React.useState({
        "status": 200,
        "data": {
            "id": "6042394bda41bb0001414235",
            "title": "Forest Saver",
            "description": "Test championship",
            "teamIds": [
                "5de8f288b8f1f40001b1c444",
                "5de8f20eb8f1f40001b1c443",
                "5e2fed8b575a5e00013557f7"
            ],
            "nanoTaskIds": [
                "5c98971bb3ddaa0001a2a6aa",
                "5c9897d7b3ddaa0001a2a6ab",
                "5c9db5957e349e0001335a85",
                "5dd7b97848b4d400017f9ed8",
                "5e301701575a5e000135580c"
            ],
            "taskIncentiveIds": [],
            "seasonIds": [],
            "status": 1,
            "individual": false,
            "event": true,
            "imageUrl": "https://media.nanodot.us/nano/local/community/Forest-Saver/d2ebxoq-28738206-3173-45e2-a78a-ff853fa69f4f-458316b3.jpg",
            "communityId": "5d1090feea01400001dc2776",
            "privateChampionship": false,
            "code": "",
            "playerLimit": 0,
            "usersAllowed": [],
            "teams": [
                {
                    "id": "5de8f20eb8f1f40001b1c443",
                    "title": "Nano US",
                    "description": "Welcome to Nano's official US Team. We have a single moto Save the Planet",
                    "imgUrl": "https://media.nanodot.us/nano/local/community/Nano-US/logo-7c4f6340.jpg",
                    "communityId": "5d1090feea01400001dc2776",
                    "members": [
                        "5c9df5e37e349e0001335a98",
                        "5dce997240af4b0001e9c658",
                        "5d2745b9a7b6ee0001076395",
                        "5c9d9f307e349e0001335a7a",
                        "5c9df4887e349e0001335a95",
                        "5ca5f19d8459dc00013ea63c",
                        "5e57f9cb303f5300015f915c"
                    ],
                    "teamMembers": [],
                    "uploads": 0,
                    "impact": 0.0,
                    "status": 1,
                    "totalmembers": 0,
                    "existIncentive": false,
                    "incentives": [],
                    "teamActivityMap": {
                        "WATERREFILL": {
                            "rejected": 0,
                            "approve": 0,
                            "impact": 0.0
                        },
                        "RECYCLE": {
                            "rejected": 0,
                            "approve": 0,
                            "impact": 0.0
                        },
                        "TREEPLANTING": {
                            "rejected": 0,
                            "approve": 0,
                            "impact": 0.0
                        },
                        "ECOLIGHTS": {
                            "rejected": 0,
                            "approve": 0,
                            "impact": 0.0
                        },
                        "TRASHPICKUP": {
                            "rejected": 0,
                            "approve": 0,
                            "impact": 0.0
                        }
                    },
                    "taskActivity": [
                        {
                            "total": 0,
                            "type": "TRASHPICKUP",
                            "rejected": 0,
                            "approve": 0,
                            "pending": 0,
                            "systemRejected": 0,
                            "impact": 0.0,
                            "dailygoal": 0
                        },
                        {
                            "total": 0,
                            "type": "ECOLIGHTS",
                            "rejected": 0,
                            "approve": 0,
                            "pending": 0,
                            "systemRejected": 0,
                            "impact": 0.0,
                            "dailygoal": 0
                        },
                        {
                            "total": 0,
                            "type": "RECYCLE",
                            "rejected": 0,
                            "approve": 0,
                            "pending": 0,
                            "systemRejected": 0,
                            "impact": 0.0,
                            "dailygoal": 0
                        },
                        {
                            "total": 0,
                            "type": "WATERREFILL",
                            "rejected": 0,
                            "approve": 0,
                            "pending": 0,
                            "systemRejected": 0,
                            "impact": 0.0,
                            "dailygoal": 0
                        },
                        {
                            "total": 0,
                            "type": "TREEPLANTING",
                            "rejected": 0,
                            "approve": 0,
                            "pending": 0,
                            "systemRejected": 0,
                            "impact": 0.0,
                            "dailygoal": 0
                        }
                    ],
                    "joined": false
                },
                {
                    "id": "5de8f288b8f1f40001b1c444",
                    "title": "Nano Global",
                    "description": "Small deeds big Impact..",
                    "imgUrl": "https://media.nanodot.us/nano/local/community/Nano-Global/Screenshot-2019-07-19-at-10.44.33-AM-f0bc7444.png",
                    "communityId": "5d1090feea01400001dc2776",
                    "members": [
                        "5c9df5e37e349e0001335a98",
                        "5da5a6a9306c2e0001ba6f45",
                        "5d2745b9a7b6ee0001076395",
                        "5ca5f19d8459dc00013ea63c"
                    ],
                    "teamMembers": [],
                    "uploads": 0,
                    "impact": 0.0,
                    "status": 1,
                    "totalmembers": 0,
                    "existIncentive": true,
                    "incentives": [
                        {
                            "id": "5e32d195d19db60001b2dd14",
                            "imgUrl": "https://media.nanodot.us/nano/local/nanotask/Nano-Global-Incentive/nano-fd07c3a1.png",
                            "title": "Nano Global Incentive",
                            "details": "Nano Global Team Incentive",
                            "total": 2500,
                            "consumed": 0,
                            "individual": false,
                            "status": 0,
                            "quantity": 0,
                            "amnt": 100
                        },
                        {
                            "id": "5e33a764114c4700011c56d8",
                            "imgUrl": "https://media.nanodot.us/nano/local/nanotask/Plant-Tree/nano-2cfd8a76.png",
                            "title": "Plant Tree ",
                            "details": "On every 5000 task completed we are going to plant a tree",
                            "total": 5000,
                            "consumed": 0,
                            "individual": false,
                            "status": 0,
                            "quantity": 0,
                            "amnt": 1
                        }
                    ],
                    "teamActivityMap": {
                        "WATERREFILL": {
                            "rejected": 0,
                            "approve": 0,
                            "impact": 0.0
                        },
                            "RECYCLE": {
                            "rejected": 0,
                            "approve": 0,
                            "impact": 0.0
                        },
                        "TREEPLANTING": {
                            "rejected": 0,
                            "approve": 0,
                            "impact": 0.0
                        },
                        "ECOLIGHTS": {
                            "rejected": 0,
                            "approve": 0,
                            "impact": 0.0
                        },
                        "TRASHPICKUP": {
                            "rejected": 0,
                            "approve": 0,
                            "impact": 0.0
                        }
                    },
                    "taskActivity": [
                        {
                            "total": 0,
                            "type": "TRASHPICKUP",
                            "rejected": 0,
                            "approve": 0,
                            "pending": 0,
                            "systemRejected": 0,
                            "impact": 0.0,
                            "dailygoal": 0
                        },
                        {
                            "total": 0,
                            "type": "ECOLIGHTS",
                            "rejected": 0,
                            "approve": 0,
                            "pending": 0,
                            "systemRejected": 0,
                            "impact": 0.0,
                            "dailygoal": 0
                        },
                        {
                            "total": 0,
                            "type": "RECYCLE",
                            "rejected": 0,
                            "approve": 0,
                            "pending": 0,
                            "systemRejected": 0,
                            "impact": 0.0,
                            "dailygoal": 0
                        },
                        {
                            "total": 0,
                            "type": "WATERREFILL",
                            "rejected": 0,
                            "approve": 0,
                            "pending": 0,
                            "systemRejected": 0,
                            "impact": 0.0,
                            "dailygoal": 0
                        },
                        {
                            "total": 0,
                            "type": "TREEPLANTING",
                            "rejected": 0,
                            "approve": 0,
                            "pending": 0,
                            "systemRejected": 0,
                            "impact": 0.0,
                            "dailygoal": 0
                        }
                    ],
                    "joined": true
                },
                {
                    "id": "5e2fed8b575a5e00013557f7",
                    "title": "Real Madrid",
                    "description": "Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a Spanish professional football club based in Madrid. Founded on 6 March 1902 as Madrid Football Club, the club has traditionally worn a white home kit since inception",
                    "imgUrl": "https://media.nanodot.us/nano/local/community/Real-Madrid/rm-7301ffa0.png",
                    "communityId": "5d1090feea01400001dc2776",
                    "members": [
                        "5c9df5e37e349e0001335a98",
                        "5c9dad7d7e349e0001335a83",
                        "5d2745b9a7b6ee0001076395",
                        "5c9d9f307e349e0001335a7a",
                        "5d26f2084af97b00018be666",
                        "5ddf6ae9b7c7aa00016f5cd7",
                        "5e3469435d6bab0001db716f",
                        "5c9df4887e349e0001335a95",
                        "5f3b903f9461bc000188ae0c",
                        "5e57f9cb303f5300015f915c",
                        "5d36f29d604e470001b75941",
                        "5e170bc8b5df7a0001f1d827"
                    ],
                    "teamMembers": [],
                    "uploads": 0,
                    "impact": 0.0,
                    "status": 1,
                    "totalmembers": 0,
                    "existIncentive": true,
                    "incentives": [
                        {
                            "id": "5e34123e76850c000169f2ac",
                            "imgUrl": "https://media.nanodot.us/nano/local/nanotask/Real-Madrid-Incentive/nano-583cf627.png",
                            "title": "Real Madrid Incentive",
                            "details": "Real Madrid Incentive",
                            "total": 500,
                            "consumed": 0,
                            "individual": false,
                            "status": 0,
                            "quantity": 0,
                            "amnt": 10
                        }
                    ],
                    "teamActivityMap": {
                        "WATERREFILL": {
                            "rejected": 0,
                            "approve": 0,
                            "impact": 0.0
                        },
                            "RECYCLE": {
                            "rejected": 0,
                            "approve": 0,
                            "impact": 0.0
                        },
                        "TREEPLANTING": {
                            "rejected": 0,
                            "approve": 0,
                            "impact": 0.0
                        },
                        "ECOLIGHTS": {
                            "rejected": 0,
                            "approve": 0,
                            "impact": 0.0
                        },
                        "TRASHPICKUP": {
                            "rejected": 0,
                            "approve": 0,
                            "impact": 0.0
                        }
                    },
                    "taskActivity": [
                        {
                            "total": 0,
                            "type": "TRASHPICKUP",
                            "rejected": 0,
                            "approve": 0,
                            "pending": 0,
                            "systemRejected": 0,
                            "impact": 0.0,
                            "dailygoal": 0
                        },
                        {
                            "total": 0,
                            "type": "ECOLIGHTS",
                            "rejected": 0,
                            "approve": 0,
                            "pending": 0,
                            "systemRejected": 0,
                            "impact": 0.0,
                            "dailygoal": 0
                        },
                        {
                            "total": 0,
                            "type": "RECYCLE",
                            "rejected": 0,
                            "approve": 0,
                            "pending": 0,
                            "systemRejected": 0,
                            "impact": 0.0,
                            "dailygoal": 0
                        },
                        {
                            "total": 0,
                            "type": "WATERREFILL",
                            "rejected": 0,
                            "approve": 0,
                            "pending": 0,
                            "systemRejected": 0,
                            "impact": 0.0,
                            "dailygoal": 0
                        },
                        {
                            "total": 0,
                            "type": "TREEPLANTING",
                            "rejected": 0,
                            "approve": 0,
                            "pending": 0,
                            "systemRejected": 0,
                            "impact": 0.0,
                            "dailygoal": 0
                        }
                    ],
                    "joined": false
                }
            ],
            "nanoTasks": [
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
                    "count": 456,
                    "status": 1,
                    "users": [],
                    "priority": 11,
                    "environmental": true,
                    "sponsored": false,
                    "timeBasedType": 0,
                    "activityContentType": "both",
                    "carbonMultiplier": 1.0,
                    "unlocked": false,
                    "maxBatch": 0,
                    "dailyAvgGoal": 1,
                    "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/TRASHPICKUP/trash-39c8ed2a.svg",
                    "nanoTaskType": "NORMAL",
                    "existIncentive": false,
                    "incentives": [],
                    "tracks": [],
                    "userList": [],
                    "communityTask": true,
                    "privateTask": false,
                    "taskType": "NanoTask"
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
                    "count": 53,
                    "status": 1,
                    "users": [],
                    "priority": 2,
                    "environmental": false,
                    "sponsored": false,
                    "timeBasedType": 0,
                    "activityContentType": "both",
                    "unlocked": false,
                    "maxBatch": 0,
                    "dailyAvgGoal": 0,
                    "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/ECOLIGHTS/EcoLight-834064cb.png",
                    "nanoTaskType": "NORMAL",
                    "existIncentive": false,
                    "incentives": [],
                    "tracks": [],
                    "userList": [],
                    "communityTask": true,
                    "privateTask": false,
                    "taskType": "NanoTask"
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
                    "count": 236,
                    "status": 1,
                    "users": [],
                    "priority": 15,
                    "environmental": true,
                    "sponsored": false,
                    "timeBasedType": 0,
                    "activityContentType": "both",
                    "carbonMultiplier": 710.0,
                    "unlocked": false,
                    "maxBatch": 0,
                    "dailyAvgGoal": 1,
                    "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/RECYCLE/recycle-34751365.svg",
                    "nanoTaskType": "NORMAL",
                    "existIncentive": false,
                    "incentives": [],
                    "tracks": [],
                    "userList": [],
                    "communityTask": true,
                    "privateTask": false,
                    "taskType": "NanoTask"
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
                    "count": 181,
                    "status": 1,
                    "users": [],
                    "priority": 10,
                    "environmental": true,
                    "sponsored": false,
                    "timeBasedType": 0,
                    "activityContentType": "both",
                    "carbonMultiplier": 80.0,
                    "unlocked": false,
                    "maxBatch": 0,
                    "dailyAvgGoal": 1,
                    "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/WATERREFILL/waterfill-58cadec6.svg",
                    "nanoTaskType": "NORMAL",
                    "existIncentive": false,
                    "incentives": [],
                    "tracks": [
                        "Clean Water & Sanitation"
                    ],
                    "userList": [],
                    "communityTask": true,
                    "privateTask": false,
                    "taskType": "NanoTask"
                },
                {
                    "id": "5e301701575a5e000135580c",
                    "title": "TREEPLANTING",
                    "details": "To complete this nano task: plant a seed and take a photo of it in the ground!\r\n\r\nTrees are vitally important to the health of the planet with an extraordinary list of benefits.\r\n\r\nTrees provide food, energy and income to help communities achieving long-term economic and environmental sustainability. Trees also filter the air and help reverse the impacts of climate change. In just one year, a mature leafy tree produces as much oxygen as 10 people inhale! Our goal is to plant 7.8 billion trees, one for every person on earth. Do your part and complete this nano task today! ",
                    "bgImg": "https://media.nanodot.us/nano/local/nanotask/TREEPLANTING/bg-dd734ac8.jpg",
                    "imgURL": "https://media.nanodot.us/nano/local/nanotask/TREEPLANTING/NanoTasks4-ab8b291b-73de2fb6.jpg",
                    "contentType": "image",
                    "community": "None",
                    "points": 10,
                    "xp": 10,
                    "count": 33,
                    "status": 1,
                    "users": [],
                    "priority": 2,
                    "environmental": true,
                    "sponsored": false,
                    "timeBasedType": 1,
                    "activityContentType": "both",
                    "carbonMultiplier": 25147.0,
                    "unlocked": false,
                    "maxBatch": 0,
                    "dailyAvgGoal": 1,
                    "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/TREEPLANTING/treeplant-6f32f495.svg",
                    "nanoTaskType": "NORMAL",
                    "existIncentive": false,
                    "incentives": [],
                    "tracks": [
                        "No Poverty"
                    ],
                    "userList": [],
                    "communityTask": false,
                    "privateTask": false,
                    "taskType": "NanoTask"
                }
            ],
            "taskIncentives": [],
            "participants": [],
            "members": [],
            "startDate": "2021-03-05T00:00:00.000+0000",
            "endDate": "2021-04-20T00:00:00.000+0000",
            "participantCount": 1,
            "joined": false,
            "uploads": 0
        }
    });
    
    const championship = getData.data;
    const teams = getData.data.teams;
    useEffect(() => {
        championship.teams.map((data) => {
            if(inTeam ==true && data.joined ===true){
                if(team.id == "")
                {
                    setTeam(data);
                }
            }
        });
    });
    return (
        <>
            <ScrollView>
                <View style={[styles.BG]}>
                    {inTeam == false && (
                        <View style={{flex:1}}>
                            <Text style={{padding:15,fontFamily:"FiraSans-Bold",fontSize:12}}>{msg}</Text>
                        </View>
                    )}
                    {team.id != '' && inTeam ==true && (
                        <View style={styles.topContent}>
                            <View style={styles.imageBox}>
                                <Image
                                    source={{uri: team.imgUrl}}
                                    style={[styles.teamImage]}
                                />
                                <Text style={styles.teamTitle}>{team.title}</Text>
                                <Text style={[styles.activeTxt,{textAlignVertical: "center"}]}>My Active Team</Text>
                            </View>
                            <View style={styles.carbonEmission}>
                                <View style={{flex:0.3, left:0}}>
                                    <SvgCssUri
                                        width="60"
                                        height="60"
                                        uri="https://media.nanodot.us/img/impact/cologo.svg"
                                        style={{marginTop:10}}
                                    />
                                </View>
                                <View style={{flex:0.7, right:0}}>
                                    <Text style={styles.carbonNumber}>{team.impact}</Text>
                                    <Text style={styles.carbonTxt}>Grams of avoided carbon emissions</Text>
                                </View>
                            </View>
                        </View>
                    )}
                    {team.id != '' && inTeam ==true && (
                        <View style={{flex:1,backgroundColor:"#F5F5F5"}}>
                            <View style={styles.inputParentBox}>
                                <Ionicons 
                                    name="search" 
                                    size={20} 
                                    color="#BBBBBB"
                                    style={{top:15,left:10}} 
                                />
                                <TextInput
                                    placeholder="Search teams…"
                                    style={[styles.textInput,{left:10}]}
                                    placeholderTextColor="#BBBBBB"
                                    onChangeText={(value) => setSearch(value)}
                                    value={search}
                                />
                            </View>
                            <View style={{flexDirection:"column",margin:20}}>
                                {teams.map((item, index) => (
                                    item.joined != true && (
                                        <View style={styles.listBox} key={index}>
                                            <TouchableOpacity style={[styles.button,styles.touchableBtn,{flexDirection:"row"}]}
                                                //onPress={() => this.props.navigation.navigate("SignupScreen")}
                                            >
                                                <View style={{flex:0.2,alignItems:"center"}}>
                                                    <Image
                                                        source={{uri: item.imgUrl}}
                                                        style={[styles.listTeamImage]}
                                                    />
                                                </View>
                                                <View style={{flex:0.9}}>
                                                    <View style={{flex:1,flexDirection:"row"}}>
                                                        <View style={{flex:0.6}}>
                                                            <Text style={styles.listTeamTitle} numberOfLines={1}>{item.title}</Text>
                                                        </View>
                                                        <View style={{flex:0.2}}>
                                                            {item.isJoined == true && (
                                                                <Text style={styles.listJoinedBtn}>Joined</Text>
                                                            )}
                                                        </View>
                                                        <View style={{flex:0.2,alignItems:"center"}}>
                                                            <Ionicons 
                                                                name="chevron-forward-outline" 
                                                                size={30} 
                                                                color="#FF5A60"
                                                                style={{top:5,left:10}}
                                                            />
                                                        </View>
                                                    </View>
                                                    {index+1 <= teams.length -1 && (
                                                        <View style={{height:1,backgroundColor:"#E1E1E1",marginTop:15,marginBottom:15}}></View>
                                                    )}
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                ))}
                            </View>
                        </View>
                    )}
                </View>
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
    topContent: {
        backgroundColor: "#fff",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingTop:20,
        paddingBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 0,
    },
    imageBox:{
        alignItems: 'center',
        marginTop:20,
        //backgroundColor: "#000000",
    },
    teamImage: {
        width: 90, 
        height: 90,
    },
    teamTitle:{
        color: '#203541',
        fontFamily:"FiraSans-Bold",
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
    },
    activeTxt:{
        backgroundColor:"#fe5b60",
        color: '#fff',
        fontSize: 14,
        fontWeight:"bold",
        borderRadius:14,
        textAlign: 'center',
        marginTop: 10,
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:15,
        paddingRight:15,
        fontFamily:"FiraSans-Bold",
    },
    carbonEmission:{
        flexDirection: 'row',
        backgroundColor: "#F5F5F5",
        minHeight: '10%',
        color: "#2AA39A",
        borderRadius: 20,
        margin:20,
        padding: 15,
        marginTop:40,
    },
    carbonNumber:{
        color: "#2AA39A",
        fontSize: 40,
        right:0,
        textAlign:"right",
        fontFamily:"FiraSans-Bold",
    },
    carbonTxt:{
        color: "#BBBBBB",
        fontSize: 14,
        textAlign:"right",
        fontFamily:"FiraSans-Medium",
        top:5
    },
    inputParentBox:{
        flexDirection: "row",
        backgroundColor: '#E1E1E1',
        borderRadius: 10,
        marginTop: 40,
        marginLeft:25,
        marginRight:25,
    },
    textInput: {
        width: "90%",
        height: 50,
        backgroundColor: 'transparent',
        fontSize: 16,
        padding: 10,
        color: '#BBBBBB',
        fontFamily:"FiraSans-Regular",
    },
    touchableBtn:{
        width:"100%",
        backgroundColor:"transparent",
    },
    button: {
        width: '100%',
        backgroundColor: "transparent",
        //marginBottom:5,
    },
    listBox:{
        flex:1,
        //marginBottom:20
    },
    listTeamImage:{
        width:35,
        height:35,
        borderWidth:3,
        borderRadius:50,
        borderColor:"#fff",
    },
    listTeamTitle:{
        top:2,
        fontFamily:"FiraSans-Bold",
        fontSize:18,
    },
    listJoinedBtn:{
        top:8,
        fontFamily:"FiraSans-Bold",
        fontSize:12,
        backgroundColor:"#2AA39A",
        color:"#fff",
        textAlign:"center",
        borderRadius:15,
        padding:5,
    },
    
    
});
export default Teams;