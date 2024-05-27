import React, { Component } from 'react';
import {
    ScrollView, 
    StyleSheet,
    StatusBar,
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {Colors} from '../Colors/colors';
import Community from './Community';
class Friends extends Component{
    
    constructor(props) {
        super(props);
    }
    state = {
        selectedIndex:0,
        userList : {
            "status": 200,
            "msg": "Users Found",
            "data": [
                {
                "id": "5ddf7a14b7c7aa00016f5ceb",
                "profilepic": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                "userName": "Maqbo",
                "name": "Maqbo",
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                "uuid": "e94f0f14-da72-6d3f-d50a-14ac7fc6408c",
                "points": 0,
                "level": 0,
                "nanotaskCount": 1,
                "volunteerprojectCount": 0,
                "postCount": 0,
                "xp": 0,
                "nanocoins": 0,
                "currentPlanetLevel": {
                "id": "5d149face2650c0001289159",
                "level": 1,
                "title": "Garbage guru",
                "requirementtxt": "Your nano planet needs your help! Complete 3 nano tasks to remove those nasty trash heaps! ",
                "points": 250,
                "xp": 250,
                "requiredNanoTasks": 3,
                "requiredVolunteerProjects": 0,
                "requiredOwnVolunteerProjects": 0,
                "minimumVolunteers": 0,
                "achievement": {
                "id": "5d148361e2650c000128911d",
                "title": "Garbage guru",
                "achievementMsg": "Complete 3 nano tasks.",
                "imgURL": "https://s3.amazonaws.com/nanodotapp/nano/local/Achievements/active/imageFile-519cf653",
                "status": 0,
                "type": 0,
                "requires": 2
                },
                "type": "Environmental",
                "status": 0,
                "planetleveltype": {
                "id": "5d14814fe2650c0001289119",
                "name": "Environmental",
                "bgurl": "https://s3.amazonaws.com/nanodotapp/nano/local/loyalty/Environmental/imageFile-e6952eed",
                "status": 0
                },
                "coverImageUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/loyalty/Envionmental-I-bronze/p0-71b29f68.png"
                },
                "requiredTasks": {
                "level": 1,
                "title": "Garbage guru",
                "requiredNanoTasks": 3,
                "requiredVolunteerProjects": 0,
                "requiredOwnVolunteerProjects": 0,
                "minimumVolunteers": 0
                },
                "ownProject": [],
                "followProject": [],
                "followCommunity": [],
                "followers": [],
                "following": [],
                "blockedUsers": [],
                "blockedPost": [],
                "achievements": [],
                "isfollowing": false,
                "dayStreak": 0,
                "taskStreak": 0,
                "weeklyTaskRemaining": 0,
                "status": 0,
                "lat": 0.0,
                "lng": 0.0,
                "bio": "",
                "email": "maqbo@gmail.com",
                "role": "ROLE_USER",
                "deviceToken": "null",
                "pushNotification": false,
                "dob": "1989-11",
                "totalCarbonfootprint": 0.0,
                "defaultFootprint": false,
                "communtyAdmin": []
                },
                {
                "id": "5dc03369b0ccff00019939bc",
                "profilepic": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                "userName": "Maqbool",
                "name": "Maqbool",
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                "uuid": "cef507d9-bcce-33cf-4f18-2e106e44ed69",
                "points": 0,
                "level": 0,
                "nanotaskCount": 0,
                "volunteerprojectCount": 0,
                "postCount": 0,
                "xp": 0,
                "nanocoins": 0,
                "currentPlanetLevel": {
                "id": "5d149face2650c0001289159",
                "level": 1,
                "title": "Garbage guru",
                "requirementtxt": "Your nano planet needs your help! Complete 3 nano tasks to remove those nasty trash heaps! ",
                "points": 250,
                "xp": 250,
                "requiredNanoTasks": 3,
                "requiredVolunteerProjects": 0,
                "requiredOwnVolunteerProjects": 0,
                "minimumVolunteers": 0,
                "achievement": {
                "id": "5d148361e2650c000128911d",
                "title": "Garbage guru",
                "achievementMsg": "Complete 3 nano tasks.",
                "imgURL": "https://s3.amazonaws.com/nanodotapp/nano/local/Achievements/active/imageFile-519cf653",
                "status": 0,
                "type": 0,
                "requires": 2
                },
                "type": "Environmental",
                "status": 0,
                "planetleveltype": {
                "id": "5d14814fe2650c0001289119",
                "name": "Environmental",
                "bgurl": "https://s3.amazonaws.com/nanodotapp/nano/local/loyalty/Environmental/imageFile-e6952eed",
                "status": 0
                },
                "coverImageUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/loyalty/Envionmental-I-bronze/p0-71b29f68.png"
                },
                "requiredTasks": {
                "level": 1,
                "title": "Garbage guru",
                "requiredNanoTasks": 3,
                "requiredVolunteerProjects": 0,
                "requiredOwnVolunteerProjects": 0,
                "minimumVolunteers": 0
                },
                "ownProject": [],
                "followProject": [],
                "followCommunity": [],
                "followers": [],
                "following": [],
                "blockedUsers": [],
                "blockedPost": [],
                "achievements": [],
                "isfollowing": true,
                "dayStreak": 0,
                "taskStreak": 0,
                "weeklyTaskRemaining": 0,
                "status": 0,
                "lat": 0.0,
                "lng": 0.0,
                "bio": "",
                "email": "maqbool.shah@2cimple.com",
                "role": "ROLE_USER",
                "deviceToken": "eunmFeelwfc:APA91bEIHewuHeANs44Sb49gyQ2LuU8ovG3fWfbjIdL2og2RTBqAChV7tNspboWJAGtBX7uZy6xmUnIMP0yPo_WVqTrke9-KEsNNFtd1BGiPxQi1dl1u5D5vjoMj8NkvhU48u65j9oY9",
                "pushNotification": false,
                "dob": "1993-11",
                "totalCarbonfootprint": 0.0,
                "defaultFootprint": false,
                "communtyAdmin": []
                },
                {
                "id": "5f3e235f011f7100012cf13c",
                "profilepic": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                "userName": "Maqbool",
                "name": "Maqbool",
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                "uuid": "f37a7b85-8047-c78b-6b01-1fb74347a7a3",
                "points": 0,
                "level": 0,
                "nanotaskCount": 0,
                "volunteerprojectCount": 0,
                "postCount": 0,
                "xp": 0,
                "nanocoins": 0,
                "currentPlanetLevel": {
                "id": "5d149face2650c0001289159",
                "level": 1,
                "title": "Garbage guru",
                "requirementtxt": "Your nano planet needs your help! Complete 3 nano tasks to remove those nasty trash heaps! ",
                "points": 250,
                "xp": 250,
                "requiredNanoTasks": 3,
                "requiredVolunteerProjects": 0,
                "requiredOwnVolunteerProjects": 0,
                "minimumVolunteers": 0,
                "achievement": {
                "id": "5d148361e2650c000128911d",
                "title": "Garbage guru",
                "achievementMsg": "Complete 3 nano tasks.",
                "imgURL": "https://s3.amazonaws.com/nanodotapp/nano/local/Achievements/active/imageFile-519cf653",
                "status": 0,
                "type": 0,
                "requires": 2
                },
                "type": "Environmental",
                "status": 0,
                "planetleveltype": {
                "id": "5d14814fe2650c0001289119",
                "name": "Environmental",
                "bgurl": "https://s3.amazonaws.com/nanodotapp/nano/local/loyalty/Environmental/imageFile-e6952eed",
                "status": 0
                },
                "coverImageUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/loyalty/Envionmental-I-bronze/p0-71b29f68.png"
                },
                "requiredTasks": {
                "level": 1,
                "title": "Garbage guru",
                "requiredNanoTasks": 3,
                "requiredVolunteerProjects": 0,
                "requiredOwnVolunteerProjects": 0,
                "minimumVolunteers": 0
                },
                "ownProject": [],
                "followProject": [],
                "followCommunity": [],
                "followers": [],
                "following": [],
                "blockedUsers": [],
                "blockedPost": [],
                "achievements": [],
                "isfollowing": false,
                "dayStreak": 0,
                "taskStreak": 0,
                "weeklyTaskRemaining": 0,
                "status": 0,
                "lat": 0.0,
                "lng": 0.0,
                "bio": "",
                "email": "maqshah@gmail.com",
                "role": "ROLE_USER",
                "deviceToken": "null",
                "pushNotification": false,
                "dob": "1981-08",
                "totalCarbonfootprint": 0.022046200000000002,
                "language": "en",
                "measuringUnit": "IMPERIAL",
                "defaultFootprint": true,
                "communtyAdmin": []
                },
                {
                "id": "5cb05dc450322d0001d687e2",
                "fbId": "10155980913126319",
                "profilepic": "https://graph.facebook.com/10155980913126319/picture?type=large",
                "userName": "Maqbool Shah",
                "name": "Maqbool Shah",
                "imgUrl": "https://graph.facebook.com/10155980913126319/picture?type=large",
                "uuid": "56ef7605-8982-5040-6515-8a8836425a9e",
                "points": 200,
                "level": 0,
                "nanotaskCount": 46,
                "volunteerprojectCount": 0,
                "postCount": 0,
                "xp": 200,
                "walletAddress": "0xeA8a51649893B7F0e7B069C794561B7018d0D7cE",
                "nanocoins": 20,
                "currentPlanetLevel": {
                "id": "5d149face2650c0001289159",
                "level": 1,
                "title": "Garbage guru",
                "requirementtxt": "Your nano planet needs your help! Complete 3 nano tasks to remove those nasty trash heaps! ",
                "points": 250,
                "xp": 250,
                "requiredNanoTasks": 3,
                "requiredVolunteerProjects": 0,
                "requiredOwnVolunteerProjects": 0,
                "minimumVolunteers": 0,
                "achievement": {
                "id": "5d148361e2650c000128911d",
                "title": "Garbage guru",
                "achievementMsg": "Complete 3 nano tasks.",
                "imgURL": "https://s3.amazonaws.com/nanodotapp/nano/local/Achievements/active/imageFile-519cf653",
                "status": 0,
                "type": 0,
                "requires": 2
                },
                "type": "Environmental",
                "status": 0,
                "planetleveltype": {
                "id": "5d14814fe2650c0001289119",
                "name": "Environmental",
                "bgurl": "https://s3.amazonaws.com/nanodotapp/nano/local/loyalty/Environmental/imageFile-e6952eed",
                "status": 0
                },
                "coverImageUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/loyalty/Envionmental-I-bronze/p0-71b29f68.png"
                },
                "requiredTasks": {
                "level": 1,
                "title": "Envionmental I bronze",
                "requiredNanoTasks": 3,
                "requiredVolunteerProjects": 0,
                "requiredOwnVolunteerProjects": 0,
                "minimumVolunteers": 0
                },
                "ownProject": [
                120
                ],
                "followProject": [
                28,
                24
                ],
                "followCommunity": [
                "5d1090feea01400001dc2776"
                ],
                "followers": [],
                "following": [],
                "blockedUsers": [],
                "blockedPost": [],
                "achievements": [],
                "isfollowing": true,
                "dayStreak": 0,
                "taskStreak": 0,
                "weeklyTaskRemaining": 0,
                "status": 0,
                "lat": 24.8784474,
                "lng": 67.0642349,
                "location": "Karachi,Pakistan",
                "email": "maqbool_87@yahoo.com",
                "role": "ROLE_USER",
                "deviceToken": "fNjgk9fWTUiY1lDYcYYSqd:APA91bFx_D5WQdn_mxXEzeFype6JXZ8VgFJnV2Uld12z3cf4deLNZ8wQjNigfveSwfOGcfCXvyWsPzhc8q3ENuh04S3yA13oBAl0FDorCBO4IKGII569BJkvF4Th6RIHS88mZRYJwkAc",
                "pushNotification": true,
                "platform": "android",
                "totalCarbonfootprint": 0.16240688836034936,
                "language": "en",
                "measuringUnit": "IMPERIAL",
                "defaultFootprint": false,
                "communtyAdmin": []
                },
                {
                "id": "5d25a14c7ce9290001e7e61a",
                "linkedInId": "UlkzDtRPtK",
                "profilepic": "https://media-exp1.licdn.com/dms/image/C4E03AQEmrTzupYVloQ/profile-displayphoto-shrink_100_100/0?e=1585785600&v=beta&t=6ZmpHCqCiLVVFgMFJfL6fr7ZfzmICRjnIV46veIH71Q",
                "userName": "Syed Maqbool Shah",
                "name": "Syed Maqbool Shah",
                "imgUrl": "https://media-exp1.licdn.com/dms/image/C4E03AQEmrTzupYVloQ/profile-displayphoto-shrink_100_100/0?e=1585785600&v=beta&t=6ZmpHCqCiLVVFgMFJfL6fr7ZfzmICRjnIV46veIH71Q",
                "uuid": "1d852233-9cab-0616-2a8a-f7638fa4536a",
                "points": 0,
                "level": 0,
                "nanotaskCount": 3,
                "volunteerprojectCount": 0,
                "postCount": 0,
                "xp": 0,
                "nanocoins": 0,
                "currentPlanetLevel": {
                "id": "5d149face2650c0001289159",
                "level": 1,
                "title": "Garbage guru",
                "requirementtxt": "Your nano planet needs your help! Complete 3 nano tasks to remove those nasty trash heaps! ",
                "points": 250,
                "xp": 250,
                "requiredNanoTasks": 3,
                "requiredVolunteerProjects": 0,
                "requiredOwnVolunteerProjects": 0,
                "minimumVolunteers": 0,
                "achievement": {
                "id": "5d148361e2650c000128911d",
                "title": "Garbage guru",
                "achievementMsg": "Complete 3 nano tasks.",
                "imgURL": "https://s3.amazonaws.com/nanodotapp/nano/local/Achievements/active/imageFile-519cf653",
                "status": 0,
                "type": 0,
                "requires": 2
                },
                "type": "Environmental",
                "status": 0,
                "planetleveltype": {
                "id": "5d14814fe2650c0001289119",
                "name": "Environmental",
                "bgurl": "https://s3.amazonaws.com/nanodotapp/nano/local/loyalty/Environmental/imageFile-e6952eed",
                "status": 0
                },
                "coverImageUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/loyalty/Envionmental-I-bronze/p0-71b29f68.png"
                },
                "requiredTasks": {
                "level": 1,
                "title": "Envionmental I bronze",
                "requiredNanoTasks": 3,
                "requiredVolunteerProjects": 0,
                "requiredOwnVolunteerProjects": 0,
                "minimumVolunteers": 0
                },
                "ownProject": [],
                "followProject": [],
                "followCommunity": [],
                "followers": [],
                "following": [],
                "blockedUsers": [],
                "blockedPost": [],
                "achievements": [],
                "isfollowing": true,
                "dayStreak": 0,
                "taskStreak": 0,
                "weeklyTaskRemaining": 0,
                "status": 0,
                "lat": 0.0,
                "lng": 0.0,
                "email": "syedshah88@hotmail.com",
                "role": "ROLE_USER",
                "deviceToken": "cZndXoyXPiU:APA91bGWQZLbbBTREidYSbnALrOu0q3yGm7UqxrFMUzuyhdTHmpb6eqzTqiu4jwiSyCNJJVzXCWgzNedIEPpnH0iYyYL_rVnH5srJg40hLhIrisqKTLciwgj2QkmltcSk9E3mH-qwIEg",
                "pushNotification": true,
                "platform": "android",
                "totalCarbonfootprint": 0.0,
                "defaultFootprint": false,
                "communtyAdmin": []
                },
                {
                "id": "6038f71ba212b10001ddd648",
                "profilepic": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                "userName": "maq",
                "name": "maq",
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                "uuid": "5667822a-cfc5-49b1-915e-4b45446e3fab",
                "points": 0,
                "level": 0,
                "nanotaskCount": 0,
                "volunteerprojectCount": 0,
                "postCount": 0,
                "xp": 0,
                "nanocoins": 0,
                "currentPlanetLevel": {
                "id": "5d149face2650c0001289159",
                "level": 1,
                "title": "Garbage guru",
                "requirementtxt": "Your nano planet needs your help! Complete 3 nano tasks to remove those nasty trash heaps! ",
                "points": 250,
                "xp": 250,
                "requiredNanoTasks": 3,
                "requiredVolunteerProjects": 0,
                "requiredOwnVolunteerProjects": 0,
                "minimumVolunteers": 0,
                "achievement": {
                "id": "5d148361e2650c000128911d",
                "title": "Garbage guru",
                "achievementMsg": "Complete 3 nano tasks.",
                "imgURL": "https://s3.amazonaws.com/nanodotapp/nano/local/Achievements/active/imageFile-519cf653",
                "status": 0,
                "type": 0,
                "requires": 2
                },
                "type": "Environmental",
                "status": 0,
                "planetleveltype": {
                "id": "5d14814fe2650c0001289119",
                "name": "Environmental",
                "bgurl": "https://s3.amazonaws.com/nanodotapp/nano/local/loyalty/Environmental/imageFile-e6952eed",
                "status": 0
                },
                "coverImageUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/loyalty/Envionmental-I-bronze/p0-71b29f68.png"
                },
                "requiredTasks": {
                "level": 1,
                "title": "Garbage guru",
                "requiredNanoTasks": 3,
                "requiredVolunteerProjects": 0,
                "requiredOwnVolunteerProjects": 0,
                "minimumVolunteers": 0
                },
                "ownProject": [],
                "followProject": [],
                "followCommunity": [
                "5d1090feea01400001dc2776"
                ],
                "followers": [],
                "following": [],
                "blockedUsers": [],
                "blockedPost": [],
                "achievements": [],
                "isfollowing": false,
                "dayStreak": 0,
                "taskStreak": 0,
                "weeklyTaskRemaining": 0,
                "status": 0,
                "lat": 24.9261914,
                "lng": 67.0852849,
                "location": "Pakistan,Karachi City",
                "bio": "",
                "email": "maq@gmail.qwe",
                "role": "ROLE_USER",
                "deviceToken": "dARG31Y-SfqsQUrLJ4tDc9:APA91bEbpGK_Y0FE1VVkScHoUc6IS3tHLYvzVetFXoU7Dmc-u9Kwi7EmdZ30lBd387q6ebG9z3xX4ovnpD5n5PlQwWgQfvAR8ntO5hhEY9tSUFJlIvpxo3JIEKLzrOhJ9Y3anpCkeP_2",
                "pushNotification": false,
                "dob": "1999-02-26T13:38:21.847Z",
                "totalCarbonfootprint": 20.00031264,
                "language": "en",
                "measuringUnit": "IMPERIAL",
                "defaultFootprint": true,
                "communtyAdmin": []
                },
                {
                "id": "5e37f821f4563300013ab264",
                "profilepic": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                "userName": "syed maqbool shah",
                "name": "syed maqbool shah",
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                "uuid": "0d24f3d0-3e91-52f9-2f72-907a5b5932e7",
                "points": 0,
                "level": 0,
                "nanotaskCount": 0,
                "volunteerprojectCount": 0,
                "postCount": 0,
                "xp": 0,
                "nanocoins": 0,
                "currentPlanetLevel": {
                "id": "5d149face2650c0001289159",
                "level": 1,
                "title": "Garbage guru",
                "requirementtxt": "Your nano planet needs your help! Complete 3 nano tasks to remove those nasty trash heaps! ",
                "points": 250,
                "xp": 250,
                "requiredNanoTasks": 3,
                "requiredVolunteerProjects": 0,
                "requiredOwnVolunteerProjects": 0,
                "minimumVolunteers": 0,
                "achievement": {
                "id": "5d148361e2650c000128911d",
                "title": "Garbage guru",
                "achievementMsg": "Complete 3 nano tasks.",
                "imgURL": "https://s3.amazonaws.com/nanodotapp/nano/local/Achievements/active/imageFile-519cf653",
                "status": 0,
                "type": 0,
                "requires": 2
                },
                "type": "Environmental",
                "status": 0,
                "planetleveltype": {
                "id": "5d14814fe2650c0001289119",
                "name": "Environmental",
                "bgurl": "https://s3.amazonaws.com/nanodotapp/nano/local/loyalty/Environmental/imageFile-e6952eed",
                "status": 0
                },
                "coverImageUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/loyalty/Envionmental-I-bronze/p0-71b29f68.png"
                },
                "requiredTasks": {
                "level": 1,
                "title": "Garbage guru",
                "requiredNanoTasks": 3,
                "requiredVolunteerProjects": 0,
                "requiredOwnVolunteerProjects": 0,
                "minimumVolunteers": 0
                },
                "ownProject": [],
                "followProject": [],
                "followCommunity": [],
                "followers": [],
                "following": [],
                "blockedUsers": [],
                "blockedPost": [],
                "achievements": [],
                "isfollowing": false,
                "dayStreak": 0,
                "taskStreak": 0,
                "weeklyTaskRemaining": 0,
                "status": 0,
                "lat": 0.0,
                "lng": 0.0,
                "bio": "",
                "email": "smshah@gmail.com",
                "role": "ROLE_USER",
                "deviceToken": "null",
                "pushNotification": false,
                "dob": "1982-02",
                "totalCarbonfootprint": 0.0,
                "defaultFootprint": false,
                "communtyAdmin": []
                }
            ]
        }
    };
    componentDidMount() {}
    handleIndexChange = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index,
        });
    };
    loadFallback()
    {
        return "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png";
    }
    render() {
        const users = this.state.userList.data;
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor="#FF5A60"/>
                <SegmentedControlTab
                    values={['Friends', 'Community']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    tabStyle={{backgroundColor: Colors.white, borderWidth: 0,paddingTop:20}}
                    activeTabStyle={{backgroundColor: Colors.white, borderWidth: 0}}
                    activeTabTextStyle={{
                      color: Colors.primary,
                      fontFamily: 'FiraSans-Medium',
                      borderBottomWidth:2,
                      borderBottomColor:Colors.primary,
                    }}
                    tabTextStyle={{color: Colors.primary, fontFamily: 'FiraSans-Regular',paddingLeft:5,paddingRight:5,paddingBottom:5,borderRightWidth:0}}
                />
                {this.state.selectedIndex == 0 && (
                    <ScrollView style={[styles.container]}>
                        <View style={[styles.BG]}>
                            <View style={{flex:1, flexDirection:"column", marginTop:20,paddingBottom:20}}>
                                {users.map((item, index)=>(
                                    <View style={{marginBottom:10,marginTop:10,flex:1,flexDirection:"row"}} key={index}>
                                        <View style={{flex:0.2,alignItems: "center",}}>
                                            <Image
                                                source={{uri: item.profilepic}}
                                                style={[styles.userImage,{top:-5}]}
                                                onError={()=> this.loadFallback()}
                                            />
                                        </View>
                                        <View style={{flex:0.8}}>
                                            <View style={{flex:1,flexDirection:"row"}}>
                                                <View style={{flex:0.8}}>
                                                    <Text style={[styles.userTxt,{fontSize:18,fontFamily:"FiraSans-Regular"}]}>{item.userName}</Text>
                                                </View>
                                                <View style={{flex:0.2,alignItems: "center",}}>
                                                    {item.isfollowing == true ? (
                                                        <TouchableOpacity
                                                            style={{}}
                                                            //onPress={this.onPress}
                                                        >
                                                            <Ionicons 
                                                                name="people"
                                                                size={32} 
                                                                color="#F85B61"
                                                                backgroundColor="#FF5A60"
                                                                style={{}}
                                                            />
                                                        </TouchableOpacity>
                                                    ) : (
                                                        <TouchableOpacity
                                                            style={{}}
                                                            //onPress={this.onPress}
                                                        >
                                                            <Ionicons 
                                                                name="person-add"
                                                                size={32} 
                                                                color="#F85B61"
                                                                backgroundColor="#FF5A60"
                                                                style={{}}
                                                            />
                                                        </TouchableOpacity>
                                                    )}
                                                </View>
                                            </View>
                                            {index+1 <= users.length -1 && (
                                                <View style={{height:2,backgroundColor:"#E5E5E5"}}></View>
                                            )}
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </ScrollView>
                )}
                {this.state.selectedIndex == 1 && <Community />}
            </>
        );
    }
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
    userImage: {
        width: 45, 
        height: 45,
        borderRadius:50,
    },
    
    
});
export default Friends;