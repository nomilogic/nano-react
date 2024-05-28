import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  LogBox,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {Colors} from '../Colors/colors';
import Today from './Today';
import Week from './Week';
import Month from './Month';

class AllTime extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedIndex: 0,
    totalTasks:197,
    nanoTaskObject:{},
    users:[]
  };
  leaderboard = {
    "status": 200,
    "msg": "Task Found",
    "data": {
    "id": "5f31216a587716000141211c",
    "title": "Commute",
    "details": "For many people, the journey to and from work are the bookends of the daily grind. If you use a car frequently, the first step to cutting down your emissions may well be to simply consider the alternatives available to you. \r\n\r\nThe average petrol car on the road in the UK produces the equivalent of 180g of CO2 every kilometer, and in the US the average passenger car releases 650g of CO2/km. So, the way you get around each day can make a big difference to your own carbon footprint. \r\n\r\nTo complete the #Commute nano task, select your alternative commute, start your journey, and stop at your destination. We’ll do the rest and you will quickly see your emission reduction impact!\r\n",
    "bgImg": "https://media.nanodot.us/nano/local/nanotask/Clean-Transportation/Clean-Transport@2x-ea167379.jpg",
    "imgURL": "https://media.nanodot.us/nano/local/nanotask/Clean-Transportation/Clean-Transport@2x-c507ae7c.jpg",
    "contentType": "image",
    "community": "None",
    "points": 10,
    "xp": 10,
    "count": 197,
    "status": 0,
    "users": [
    {
    "id": "5f7d7f735e60ca000103c51e",
    "fbId": "",
    "profilepic": "https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg",
    "userName": "Jolly",
    "name": "Jolly",
    "imgUrl": "https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg",
    "uuid": "75a7ee31-d058-9434-cd97-cb09f68cada8",
    "points": 2340,
    "level": 2,
    "nanotaskCount": 50,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 2340,
    "walletAddress": "0x89db4CCbf7B65Aa24bDABFFF3bfFdFece1633477",
    "nanocoins": 20,
    "ownProject": [
    127,
    128,
    129,
    130,
    131,
    133,
    136,
    139,
    140,
    142,
    143,
    144,
    145,
    146,
    147,
    148,
    150
    ],
    "followProject": [
    130,
    131,
    133,
    136,
    142,
    143,
    144,
    145,
    147,
    148
    ],
    "followCommunity": [
    "5d1090feea01400001dc2776",
    "5e66b1b244f95800012a0c33",
    "5fb243b938914300016cd9bd",
    "5f50ec3aa57eff0001541add",
    "605317cfc9d7130001a1e3c0"
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
    "lat": 24.8784733,
    "lng": 67.06424319999999,
    "location": "No Location Found",
    "bio": "Social worker",
    "email": "jolly@yahoo.com",
    "role": "ROLE_USER",
    "deviceToken": "null",
    "pushNotification": true,
    "platform": "android",
    "dob": "1990-10",
    "totalCarbonfootprint": 2.4621607599323934,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": false,
    "communtyAdmin": []
    },
    {
    "id": "5d3034e20f88e800012070aa",
    "fbId": "",
    "appleId": "001410.329f752829ff43e6b3826d1632ee26a5.1548",
    "profilepic": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
    "userName": "Hassan",
    "name": "Hassan",
    "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
    "uuid": "23cb89f0-a161-497e-8771-a4e8a36bae30",
    "points": 260,
    "level": 0,
    "nanotaskCount": 18,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 260,
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
    "title": "1",
    "requiredNanoTasks": 3,
    "requiredVolunteerProjects": 0,
    "requiredOwnVolunteerProjects": 0,
    "minimumVolunteers": 0
    },
    "ownProject": [
    134
    ],
    "followProject": [
    134
    ],
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
    "lat": 24.878492391836357,
    "lng": 67.06431425634958,
    "location": "Karachi,Pakistan",
    "email": "mjyq775sei@privaterelay.appleid.com",
    "role": "ROLE_COMMUNITY_ADMIN",
    "deviceToken": "dyYNiMfdVO8:APA91bHkbzPuKa-dra8BSG8fCKuQURhlx0MSkecKhQqN6yaeIGCs7wcH_di3PMO3BspVn6VQUOht9CUQS7OC9AWCtsrXY4YYUarscRrslctQcAbiRCFJHVV0imOXDbVy8A2nzMgRDMct",
    "pushNotification": true,
    "platform": "ios",
    "totalCarbonfootprint": 20.00031264,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": true,
    "communtyAdmin": [
    "5d1090feea01400001dc2776"
    ]
    },
    {
    "id": "5f6a03be7198ea000196cb6a",
    "profilepic": "https://media.nanodot.us/nano/local/user/5f6a03be7198ea000196cb6a/cover/userUpload5f6a03be7198ea000196cb6a987089308427793044.jpg",
    "userName": "Christine Böhmer ",
    "name": "Christine Böhmer ",
    "imgUrl": "https://media.nanodot.us/nano/local/user/5f6a03be7198ea000196cb6a/cover/userUpload5f6a03be7198ea000196cb6a987089308427793044.jpg",
    "uuid": "14fc5921-3bd0-68f5-b963-237f52c3c759",
    "points": 740,
    "level": 0,
    "nanotaskCount": 17,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 740,
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
    "lat": 50.68371539193347,
    "lng": 7.163029022221217,
    "location": "Bonn,Germany",
    "bio": "",
    "email": "christine.draeger@gmx.net",
    "role": "ROLE_USER",
    "deviceToken": "eXHa9j96428:APA91bFZMxu0IXA_sngq--3yGd1XxyMv7JaQrYD7rPKvLaMtlge3hgdzwSI7uSbx0MfYa8-VJQef6xS7AczUO5M1UV7BrRvJb0UYqwRv9-jqJDJ3Gj5utY9awdQeokRpYS8QFdsZOKIv",
    "pushNotification": false,
    "dob": "1985-08",
    "totalCarbonfootprint": 20.00031264,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": true,
    "communtyAdmin": []
    },
    {
    "id": "5f7b261303112e0001feda8d",
    "profilepic": "https://media.nanodot.us/nano/local/user/5f7b261303112e0001feda8d/cover/userUpload5f7b261303112e0001feda8d1784522078229775416.jpg",
    "userName": "Axel",
    "name": "Axel",
    "imgUrl": "https://media.nanodot.us/nano/local/user/5f7b261303112e0001feda8d/cover/userUpload5f7b261303112e0001feda8d1784522078229775416.jpg",
    "uuid": "90b142c7-dfad-6685-642f-496763b6b563",
    "points": 570,
    "level": 0,
    "nanotaskCount": 12,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 570,
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
    "lat": 50.688293857124116,
    "lng": 7.183867555972546,
    "location": "Königswinter,Deutschland",
    "bio": "A curious tester from DT",
    "email": "axel.s.diehl@googlemail.com",
    "role": "ROLE_USER",
    "deviceToken": "e0DjNwbM_3w:APA91bFgaVYgcsq2tdO2jlLwUolvCd40OIY6sBDaAzJegpQSpzuZPhWKvEXxiQO4auXRgj6fRf6L2FbngsBfqNRXNslgxOvACJt6DPb3X-PtHWv5APTazx1OoGn7SiZm5eWFiULpS6i8",
    "pushNotification": false,
    "dob": "1971-10",
    "totalCarbonfootprint": 4.705000796099999,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": true,
    "communtyAdmin": []
    },
    {
    "id": "5ca5f19d8459dc00013ea63c",
    "fbId": "",
    "profilepic": "https://media.nanodot.us/nano/local/user/5ca5f19d8459dc00013ea63c/cover/userUpload5ca5f19d8459dc00013ea63c7723746154407370364.jpg",
    "userName": "mak",
    "name": "mak",
    "imgUrl": "https://media.nanodot.us/nano/local/user/5ca5f19d8459dc00013ea63c/cover/userUpload5ca5f19d8459dc00013ea63c7723746154407370364.jpg",
    "uuid": "0d580c28-6946-3069-d98b-01c4488a59f4",
    "points": 45190,
    "level": 45,
    "nanotaskCount": 11,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 45190,
    "walletAddress": "0x8dca7424da2023c46823f22b06c6cea6351614d8",
    "nanocoins": 50,
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
    "ownProject": [
    16,
    102,
    104,
    106,
    110,
    111,
    112,
    113,
    116,
    117,
    121,
    124,
    125,
    126
    ],
    "followProject": [
    23,
    24,
    106,
    107,
    115,
    121,
    124,
    125,
    129,
    133
    ],
    "followCommunity": [
    "5d168b41d5834300014f0426",
    "5d1090feea01400001dc2776",
    "5f50ec3aa57eff0001541add",
    "5fb243b938914300016cd9bd"
    ],
    "followers": [],
    "following": [],
    "blockedUsers": [],
    "blockedPost": [],
    "achievements": [],
    "isfollowing": false,
    "lastloggedIn": "2019-12-04T14:41:47.871+0000",
    "dayStreak": 0,
    "taskStreak": 0,
    "weeklyTaskRemaining": 0,
    "status": 0,
    "lat": 24.887912999999998,
    "lng": 67.0583857,
    "location": "No Location Found",
    "email": "maq@gmail.com",
    "role": "ROLE_NANO_ADMIN",
    "deviceToken": "null",
    "pushNotification": true,
    "platform": "ios",
    "totalCarbonfootprint": 0.0,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": false,
    "communtyAdmin": [
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776",
    "5d1090feea01400001dc2776"
    ]
    },
    {
    "id": "5e57f9cb303f5300015f915c",
    "fbId": "10220825645900601",
    "linkedInId": "znQuvijXIy",
    "profilepic": "https://graph.facebook.com/10220825645900601/picture?type=large",
    "userName": "Syed Abbas",
    "name": "Syed Abbas",
    "imgUrl": "https://graph.facebook.com/10220825645900601/picture?type=large",
    "uuid": "31961a1b-8bde-31bb-bd12-f8a573fd9070",
    "points": 160,
    "level": 0,
    "nanotaskCount": 11,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 160,
    "walletAddress": "0x36F2562cC27415248827e3dc873f391F1f665E18",
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
    "followProject": [
    123
    ],
    "followCommunity": [
    "5d1090feea01400001dc2776",
    "5f50ec3aa57eff0001541add"
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
    "lat": 33.107851540898025,
    "lng": -96.87463079836078,
    "location": "Frisco,United States",
    "email": "sabbas@2cimple.com",
    "role": "ROLE_USER",
    "deviceToken": "d9_1qmWA8T0:APA91bEB3iBNgF0_1VnUoCU6YuZN8HD0f-qjSYNRHSFZRK85u9Fi5Y3o6J4s_EkLMGDthiBETVFL4DCUk1vgJkz8N3nAH2B_6wdxhJIuYrhZwXL7fk1F1h9Fiz2knBwaJzwMCTrB1MyG",
    "pushNotification": true,
    "platform": "ios",
    "totalCarbonfootprint": 20.00031264,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": true,
    "communtyAdmin": []
    },
    {
    "id": "5c9df4887e349e0001335a95",
    "fbId": "10157048947663609",
    "profilepic": "https://graph.facebook.com/10157048947663609/picture?type=large",
    "userName": "Mark Terry",
    "name": "Mark Terry",
    "imgUrl": "https://graph.facebook.com/10157048947663609/picture?type=large",
    "uuid": "52591402-b162-782a-1fd0-7d4afa9c6543",
    "points": 860,
    "level": 0,
    "nanotaskCount": 9,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 860,
    "walletAddress": "0x34c913C2d2006661B3a9411feB117E1915E98518",
    "nanocoins": 20,
    "currentPlanetLevel": {
    "id": "5d149fcce2650c000128915a",
    "level": 2,
    "title": "River Master",
    "requirementtxt": "Your nano planet needs your help! Complete 10 nano tasks to reverse the dangerous chemical pollution in the rivers! ",
    "points": 250,
    "xp": 250,
    "requiredNanoTasks": 10,
    "requiredVolunteerProjects": 0,
    "requiredOwnVolunteerProjects": 0,
    "minimumVolunteers": 0,
    "achievement": {
    "id": "5d1483b2e2650c0001289120",
    "title": "River Master",
    "achievementMsg": "Complete 5 nano tasks.",
    "imgURL": "https://s3.amazonaws.com/nanodotapp/nano/local/Achievements/active/River_Master-4898097e.png",
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
    "coverImageUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/loyalty/Envionmental-II--bronze/p1-e863078b.png"
    },
    "requiredTasks": {
    "level": 2,
    "title": "Envionmental II  bronze",
    "requiredNanoTasks": 10,
    "requiredVolunteerProjects": 0,
    "requiredOwnVolunteerProjects": 0,
    "minimumVolunteers": 0
    },
    "ownProject": [
    14,
    20,
    22,
    122,
    123,
    132
    ],
    "followProject": [
    10,
    4,
    1,
    22,
    24,
    29,
    123,
    132
    ],
    "followCommunity": [
    "5d1090feea01400001dc2776",
    "5d168b41d5834300014f0426",
    "5f50ec3aa57eff0001541add",
    "5fb243b938914300016cd9bd"
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
    "lat": 32.81681688034859,
    "lng": -96.73890795161638,
    "location": "Dallas,United States",
    "email": "mterry2@gmail.com",
    "role": "ROLE_NANO_ADMIN",
    "deviceToken": "eTNIpDk8Rmo:APA91bEoBI1aZmjS4PuVyH0hG9U02w-6-6CdPRVbF0tUbnbpey3TY_fAKN-TKn0TDdOCDvDaESdBgOCqlyIOLjCqT3KQc4WhvMSBwD_CMRv02g4EXwjWu_VIc0WsvJ9zwGULkaRHf4r6",
    "pushNotification": true,
    "platform": "ios",
    "totalCarbonfootprint": 20.00031264,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": true,
    "communtyAdmin": [
    "5d1090feea01400001dc2776",
    "5d168b41d5834300014f0426",
    "5f50ec3aa57eff0001541add"
    ]
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
    "nanotaskCount": 8,
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
    "isfollowing": false,
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
    "id": "5d2745b9a7b6ee0001076395",
    "fbId": "10156823500840071",
    "linkedInId": "v9wmKg5107",
    "profilepic": "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
    "userName": "Hassan Mohiuddin",
    "name": "Hassan Mohiuddin",
    "imgUrl": "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
    "uuid": "0f69655c-b670-a7f3-22a7-1a581648f9b1",
    "points": 1400,
    "level": 1,
    "nanotaskCount": 8,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 1400,
    "walletAddress": "0x0649a56c07e44E0Baf2b91C5202EfC69Cd199A73",
    "nanocoins": 70,
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
    "followProject": [
    24,
    28,
    121,
    124,
    125,
    129
    ],
    "followCommunity": [
    "5d1090feea01400001dc2776",
    "5d168b41d5834300014f0426",
    "5f50ec3aa57eff0001541add"
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
    "status": 1,
    "lat": 24.8785931,
    "lng": 67.064236,
    "location": "Karachi,Pakistan",
    "email": "hassu_s@hotmail.com",
    "role": "ROLE_COMMUNITY_ADMIN",
    "deviceToken": "eTEFRzMIQuK95ufWRVELe5:APA91bGVdgRNIXgrnESSQu4_UdCphV2pkRYszPTUc6vN_0GNBoVkD4sdop2oUy4UsZyLay59HzuOWIqIm0c6P_Eo-mmlhJ0NY_zSpKTmhZm3FojfsOTnv1GKPfwJURbUsWm3DG9UTWaw",
    "pushNotification": true,
    "platform": "android",
    "totalCarbonfootprint": 0.51588108,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": false,
    "communtyAdmin": [
    "5d168b41d5834300014f0426"
    ]
    },
    {
    "id": "5caf1a8050322d0001d687d4",
    "fbId": "10156642500544998",
    "profilepic": "https://graph.facebook.com/10156642500544998/picture?type=large",
    "userName": "Noman Younus",
    "name": "Noman Younus",
    "imgUrl": "https://graph.facebook.com/10156642500544998/picture?type=large",
    "uuid": "bc90cac0-3fc8-3d75-b381-7ad57ee7c897",
    "points": 150,
    "level": 0,
    "nanotaskCount": 8,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 150,
    "walletAddress": "0xF902e44AE71A288F838ecf48c8cFE09D4EAb2c23",
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
    "followProject": [
    126
    ],
    "followCommunity": [
    "5d1090feea01400001dc2776",
    "5fb243b938914300016cd9bd"
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
    "lat": 24.878620445642145,
    "lng": 67.06456182315986,
    "location": "Karachi,Pakistan",
    "email": "nomilogic@gmail.com",
    "role": "ROLE_USER",
    "deviceToken": "dtHDcH5vMcQ:APA91bGpVP6KtPN4MOFthOvksNVJis_hIEyk_Q9lHupruRjL6tyESAli04wQ_m0GD1vS_yH6hj0IpTW--VEP0aUix3DE1P5DZQRB_NdSmtWgmQbd5vKcJ-inZRgA2O0u3A6UcfmgiD3d",
    "pushNotification": true,
    "platform": "ios",
    "totalCarbonfootprint": 20.00031264,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": false,
    "communtyAdmin": []
    },
    {
    "id": "5da5a6a9306c2e0001ba6f45",
    "fbId": "",
    "profilepic": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
    "userName": "M.Rizwan",
    "name": "M.Rizwan",
    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
    "uuid": "476c0475-ec63-0197-5383-a16b6dc2654f",
    "points": 1520,
    "level": 1,
    "nanotaskCount": 7,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 1520,
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
    "ownProject": [
    103,
    105,
    107,
    108,
    109,
    118
    ],
    "followProject": [
    107,
    108,
    109,
    110,
    24,
    118,
    129,
    145
    ],
    "followCommunity": [
    "5d1090feea01400001dc2776",
    "5d168b41d5834300014f0426"
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
    "lat": 24.887912999999998,
    "lng": 67.0583857,
    "location": "No Location Found",
    "bio": "Test12345",
    "email": "rizwan@2cimple.com",
    "role": "ROLE_USER",
    "deviceToken": "null",
    "pushNotification": true,
    "platform": "ios",
    "dob": "1992-02",
    "totalCarbonfootprint": 20.00031264,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": true,
    "communtyAdmin": []
    },
    {
    "id": "5c9dad7d7e349e0001335a83",
    "fbId": "817916938565778",
    "profilepic": "https://media.nanodot.us/nano/local/user/5c9dad7d7e349e0001335a83/cover/userUpload5c9dad7d7e349e0001335a836403151137005345821.jpg",
    "userName": "Farrukh Ismail",
    "name": "Farrukh Ismail",
    "imgUrl": "https://media.nanodot.us/nano/local/user/5c9dad7d7e349e0001335a83/cover/userUpload5c9dad7d7e349e0001335a836403151137005345821.jpg",
    "uuid": "f327b0df-b8cb-10bc-9700-2a959a31fba9",
    "points": 800,
    "level": 0,
    "nanotaskCount": 6,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 800,
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
    "ownProject": [
    15,
    21,
    23,
    25,
    25
    ],
    "followProject": [
    22,
    2,
    24,
    26,
    29
    ],
    "followCommunity": [
    "5d168b41d5834300014f0426",
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
    "lat": 24.87928812734397,
    "lng": 67.06246618167187,
    "location": "Karachi,Pakistan",
    "email": "adjingo.2cimple@gmail.com",
    "role": "ROLE_USER",
    "deviceToken": "ejTP-ctS42k:APA91bHEGovdpaCbDMNtdjUzoiCh8dAKgDdT2I6eCW5tIy7i1K6Gp7CNWXq_Z1dr4aZbrRw_NQzLZK65XHlbhsBgUdz4tIOHe6huC--5-AKzi03NSrnpEBNPFXQ2maKcN1ki4xg1dorq",
    "pushNotification": true,
    "platform": "ios",
    "totalCarbonfootprint": 5.9436963990831035,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": false,
    "communtyAdmin": []
    },
    {
    "id": "5fad233fdae4ea000194bedd",
    "fbId": "2796236190588282",
    "profilepic": "https://media.nanodot.us/nano/local/user/5fad233fdae4ea000194bedd/cover/userUpload5fad233fdae4ea000194bedd3760100626443594123.jpg",
    "userName": "Muhammad Taha",
    "name": "Muhammad Taha",
    "imgUrl": "https://media.nanodot.us/nano/local/user/5fad233fdae4ea000194bedd/cover/userUpload5fad233fdae4ea000194bedd3760100626443594123.jpg",
    "uuid": "781e4bf2-c8de-4539-8ba8-d4fd9ef72daa",
    "points": 70,
    "level": 0,
    "nanotaskCount": 4,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 70,
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
    "ownProject": [
    135,
    137,
    138
    ],
    "followProject": [
    134,
    136
    ],
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
    "lat": 24.9458591,
    "lng": 67.0596209,
    "location": "No Location Found",
    "email": "nightingale_96@live.com",
    "role": "ROLE_USER",
    "deviceToken": "eslCgXTmRTy_SPgRaoXO6M:APA91bEhe037ixIOVNZ3QKyrHxdwYOVikO9w3-qD2nRHsIaLKXj6m4yYAAjv4-g3iZ7hvZxuBwSqmPdL2UKAGtbDjr_AGGorsWgenx1i21h6oNLKZ_KqGl_49BnfH8aGhS2ttGX9tT7d",
    "pushNotification": true,
    "platform": "android",
    "totalCarbonfootprint": 20.00031264,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": true,
    "communtyAdmin": []
    },
    {
    "id": "60583fab7fdc540001a270fd",
    "profilepic": "https://media.nanodot.us/nano/local/user/60583fab7fdc540001a270fd/cover/userUpload60583fab7fdc540001a270fd7857505218852443278.jpg",
    "userName": "Muhammad Rizwan",
    "name": "Muhammad Rizwan",
    "imgUrl": "https://media.nanodot.us/nano/local/user/60583fab7fdc540001a270fd/cover/userUpload60583fab7fdc540001a270fd7857505218852443278.jpg",
    "uuid": "20ebe136-c69e-44ab-1638-36d88c32d9c8",
    "points": 120,
    "level": 0,
    "nanotaskCount": 4,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 120,
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
    "lat": 24.8784706,
    "lng": 67.0642317,
    "location": "Karachi,Pakistan",
    "bio": "Social worker",
    "email": "MuhammadRizwan@hotmail.com",
    "role": "ROLE_USER",
    "deviceToken": "dniX5tBFRu-9P3EeLVmlDo:APA91bHOFOC-jgRRReq7NLGXSkeP7SHMiI8kBNwfu6kqN2RQhVcsVcNZe6h7dozujaM_xW4-FyVCxL3PZxnSwuZTQlobiyZaZnsKC0iusnTCITHGMkYGOE-8jQH-hVE95bAXLsvAfzKH",
    "pushNotification": false,
    "dob": "1999-09",
    "totalCarbonfootprint": 20.00031264,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": true,
    "communtyAdmin": []
    },
    {
    "id": "5ff59d83fe76950001b44863",
    "profilepic": "https://media.nanodot.us/nano/local/user/5ff59d83fe76950001b44863/cover/userUpload5ff59d83fe76950001b4486376844843855985294.jpg",
    "userName": "Rizwan",
    "name": "Rizwan",
    "imgUrl": "https://media.nanodot.us/nano/local/user/5ff59d83fe76950001b44863/cover/userUpload5ff59d83fe76950001b4486376844843855985294.jpg",
    "uuid": "bc9ed7d8-6340-04a6-5367-2c2070b8dd72",
    "points": 50,
    "level": 0,
    "nanotaskCount": 3,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 50,
    "walletAddress": "0xB0937B85C8594cC92cbb03314c42f9E4917A5355",
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
    "lat": 24.87852153686694,
    "lng": 67.06455081734684,
    "location": "Karachi,Pakistan",
    "bio": "",
    "email": "Rizwan@yahoo.com",
    "role": "ROLE_USER",
    "deviceToken": "ejTP-ctS42k:APA91bHEGovdpaCbDMNtdjUzoiCh8dAKgDdT2I6eCW5tIy7i1K6Gp7CNWXq_Z1dr4aZbrRw_NQzLZK65XHlbhsBgUdz4tIOHe6huC--5-AKzi03NSrnpEBNPFXQ2maKcN1ki4xg1dorq",
    "pushNotification": false,
    "dob": "1995-04",
    "totalCarbonfootprint": 20.00031264,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": true,
    "communtyAdmin": []
    },
    {
    "id": "5cab207f2e8b9d000191b268",
    "fbId": "374172566517129",
    "profilepic": "https://graph.facebook.com/374172566517129/picture?type=large",
    "userName": "Shaban Khan",
    "name": "Shaban Khan",
    "imgUrl": "https://graph.facebook.com/374172566517129/picture?type=large",
    "uuid": "efe1cb99-384d-8925-013a-fb0d1a28ede5",
    "points": 50,
    "level": 0,
    "nanotaskCount": 2,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 50,
    "walletAddress": "0x8e2bf5f6c58DF414037fF9B5b67E3660Aa946b43",
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
    "lat": 24.8785901,
    "lng": 67.0642334,
    "location": "Karachi,Pakistan",
    "email": "shaban.facebook.90@gmail.com",
    "role": "ROLE_USER",
    "deviceToken": "duFG5uDfQjyCBtP8153h0p:APA91bHgU1hlNEgbzFF9kw_FUlvxaa6RWGdg02-fUVFFFgxZnZ0KE81kO7toWX6CLNOTo3dMA160W0YQPHNSVZmiEp2iPOQV5Zm9wsP1qofRLreaZSKy3Al_m-NJpIGL5YgBJ5AEzMnG",
    "pushNotification": true,
    "platform": "android",
    "totalCarbonfootprint": 20.00031264,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": false,
    "communtyAdmin": []
    },
    {
    "id": "5f4637b8ab235d0001a75dd4",
    "profilepic": "https://media.nanodot.us/nano/local/user/5f4637b8ab235d0001a75dd4/cover/userUpload5f4637b8ab235d0001a75dd47345070621211128945.jpg",
    "userName": "Er",
    "name": "Er",
    "imgUrl": "https://media.nanodot.us/nano/local/user/5f4637b8ab235d0001a75dd4/cover/userUpload5f4637b8ab235d0001a75dd47345070621211128945.jpg",
    "uuid": "5ecd48ea-dcaa-7d21-fee5-9f0dca49fd14",
    "points": 0,
    "level": 0,
    "nanotaskCount": 2,
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
    "lat": 24.9261934,
    "lng": 67.0851887,
    "location": "Karachi,Pakistan",
    "bio": "",
    "email": "er@gmail.com",
    "role": "ROLE_USER",
    "deviceToken": "null",
    "pushNotification": false,
    "dob": "1983-08",
    "totalCarbonfootprint": 0.022046200000000002,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": true,
    "communtyAdmin": []
    },
    {
    "id": "5f5226d46357720001339425",
    "fbId": "",
    "profilepic": "https://media.nanodot.us/nano/local/user/5f5226d46357720001339425/cover/userUpload5f5226d463577200013394251628384184048607318.jpg",
    "userName": "Mtest2",
    "name": "Mtest2",
    "imgUrl": "https://media.nanodot.us/nano/local/user/5f5226d46357720001339425/cover/userUpload5f5226d463577200013394251628384184048607318.jpg",
    "uuid": "4acfcc02-f208-a886-348d-9bd4a6d1b062",
    "points": 10,
    "level": 0,
    "nanotaskCount": 1,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 10,
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
    "lat": 32.81647224914217,
    "lng": -96.73865326824836,
    "location": "Dallas,United States",
    "bio": "",
    "email": "mttest@gmail.com",
    "role": "ROLE_USER",
    "deviceToken": "eSqkOj0TK7c:APA91bG1Jcbe2IjIQjY83Oiip8afd-q-kuzS2SrTqTZgWJVPJRdRm45m-rXLNNUmhjkle7i9ShqdN0SiNaNxSyMaU4we4QlvD0zpD1D4W0zl1dCG_4iGXXIw8RsjBgFbUB9J7J9EBE_t",
    "pushNotification": false,
    "platform": "ios",
    "dob": "2000-09",
    "totalCarbonfootprint": 20.00031264,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": true,
    "communtyAdmin": []
    },
    {
    "id": "5f51abc3e0900f0001d0eafc",
    "fbId": "",
    "profilepic": "https://media.nanodot.us/nano/local/user/5f51abc3e0900f0001d0eafc/cover/userUpload5f51abc3e0900f0001d0eafc8591253057418113922.jpg",
    "userName": "M",
    "name": "M",
    "imgUrl": "https://media.nanodot.us/nano/local/user/5f51abc3e0900f0001d0eafc/cover/userUpload5f51abc3e0900f0001d0eafc8591253057418113922.jpg",
    "uuid": "da3f0abb-fe12-241b-d4d9-fac9ed8e56b6",
    "points": 10,
    "level": 0,
    "nanotaskCount": 1,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 10,
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
    "lat": 32.81647350862391,
    "lng": -96.73864809831855,
    "location": "Dallas,United States",
    "bio": "M",
    "email": "m@gmail.com",
    "role": "ROLE_USER",
    "deviceToken": "eSqkOj0TK7c:APA91bG1Jcbe2IjIQjY83Oiip8afd-q-kuzS2SrTqTZgWJVPJRdRm45m-rXLNNUmhjkle7i9ShqdN0SiNaNxSyMaU4we4QlvD0zpD1D4W0zl1dCG_4iGXXIw8RsjBgFbUB9J7J9EBE_t",
    "pushNotification": false,
    "platform": "ios",
    "dob": "2000-09",
    "totalCarbonfootprint": 20.00031264,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": true,
    "communtyAdmin": []
    },
    {
    "id": "5f6a00a57198ea000196cb60",
    "profilepic": "https://media.nanodot.us/nano/local/user/5f6a00a57198ea000196cb60/cover/userUpload5f6a00a57198ea000196cb607124537509702868623.jpg",
    "userName": "Patrick",
    "name": "Patrick",
    "imgUrl": "https://media.nanodot.us/nano/local/user/5f6a00a57198ea000196cb60/cover/userUpload5f6a00a57198ea000196cb607124537509702868623.jpg",
    "uuid": "3cbed271-7042-21e6-65d0-29af4705ffe4",
    "points": 110,
    "level": 0,
    "nanotaskCount": 1,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 110,
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
    "5f50ec3aa57eff0001541add",
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
    "lat": 50.732892403193134,
    "lng": 7.123883762329862,
    "location": "Bonn,Deutschland",
    "bio": "",
    "email": "patrick.wierschem@telekom.de",
    "role": "ROLE_USER",
    "deviceToken": "f07ehNp4OJo:APA91bExMEjnqw1EUNJnVp9A5jRlqe7p8wu7DYJY_cXiqGGv7h2rf1BuSDf5jcuqcqFl9V9pasYBBHmpJBKn7ecCXNn-mbUjTipk9aeLUBV-3TI80eQs7E7Qlsjqee_SCcU7ObAKWTQo",
    "pushNotification": false,
    "dob": "1989-08",
    "totalCarbonfootprint": 20.00031264,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": true,
    "communtyAdmin": []
    },
    {
    "id": "5f71b4037198ea000196cb9c",
    "profilepic": "https://media.nanodot.us/nano/local/user/5f71b4037198ea000196cb9c/cover/userUpload5f71b4037198ea000196cb9c6520631390985017806.jpg",
    "userName": "Laurita",
    "name": "Laurita",
    "imgUrl": "https://media.nanodot.us/nano/local/user/5f71b4037198ea000196cb9c/cover/userUpload5f71b4037198ea000196cb9c6520631390985017806.jpg",
    "uuid": "d9d3eb54-a4c4-dcf2-1c38-e45e8bbe98c9",
    "points": 40,
    "level": 0,
    "nanotaskCount": 1,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 40,
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
    "5f50ec3aa57eff0001541add"
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
    "lat": 50.91731139997443,
    "lng": 6.9114258098533075,
    "location": "Köln,Deutschland",
    "bio": "Nano Tester ",
    "email": "l.mross@relekom.de",
    "role": "ROLE_USER",
    "deviceToken": "dhlRxOmssZo:APA91bG68nvdFAiEKnPKaHXEw3ADa3WyI7fr0bCbvzOIYmpEDQ5oXckPG0A-NhSs6ioodLlHi44eIUV3t5QwCWqtMzRiCrAaA8rLmmuIurIsv09AapYu207w7MOcVwVpAOyMXlJoL755",
    "pushNotification": false,
    "dob": "1988-09",
    "totalCarbonfootprint": 20.00031264,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": true,
    "communtyAdmin": []
    },
    {
    "id": "5e399c05635bc000013a6b2e",
    "profilepic": "https://media.nanodot.us/nano/local/user/5e399c05635bc000013a6b2e/cover/userUpload5e399c05635bc000013a6b2e6996931131612313742.jpg",
    "userName": "Nano",
    "name": "Nano",
    "imgUrl": "https://media.nanodot.us/nano/local/user/5e399c05635bc000013a6b2e/cover/userUpload5e399c05635bc000013a6b2e6996931131612313742.jpg",
    "uuid": "395bb7aa-fdf2-3955-5e50-05b076d7e33e",
    "points": 10,
    "level": 0,
    "nanotaskCount": 1,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 10,
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
    "location": "No Location Found",
    "bio": "Nano app",
    "email": "nanodot@nanodot.us",
    "role": "ROLE_USER",
    "deviceToken": "ePChploCTj6kNByBJdk9FL:APA91bHCdY2yCRyacG6PLKq-MtWkHWrg9bPtCO6mXu5XRud19qpG22dkbn0UCVTpf7wW3OkxxY48ZbSkbLis7aEgW7DNWYLOkxanhwOFcP0hNAHxr5p-aiWR5JC1BsfSN3S3YXA8eagY",
    "pushNotification": false,
    "dob": "1983-06",
    "totalCarbonfootprint": 0.0,
    "language": "en",
    "defaultFootprint": false,
    "communtyAdmin": []
    },
    {
    "id": "5f7d81535e60ca000103c51f",
    "profilepic": "https://media.nanodot.us/nano/local/user/5f7d81535e60ca000103c51f/cover/userUpload5f7d81535e60ca000103c51f1239001191531396407.jpg",
    "userName": "Fee Zeilinger",
    "name": "Fee Zeilinger",
    "imgUrl": "https://media.nanodot.us/nano/local/user/5f7d81535e60ca000103c51f/cover/userUpload5f7d81535e60ca000103c51f1239001191531396407.jpg",
    "uuid": "ae214e54-fbb4-035b-2d24-fad28597bba2",
    "points": 690,
    "level": 0,
    "nanotaskCount": 1,
    "volunteerprojectCount": 0,
    "postCount": 0,
    "xp": 690,
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
    "5f50ec3aa57eff0001541add"
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
    "lat": 50.72392684976843,
    "lng": 7.1445211181948505,
    "location": "Bonn,Deutschland",
    "bio": "",
    "email": "felicitas@zeilinger.net",
    "role": "ROLE_USER",
    "deviceToken": "ehiQR6qDrEY:APA91bH18LAgfuwCvkv56EmjqkPtKBk8MybxIBKgQoSsW_k_WIQpAaT4odY6j6TuFjHsogpdDHom4Kfkl0JQfL5nE8NeKDtoLS5HmzvRSy_e0__LXyWWEgrc1yKCS6v3H9ZHiHQN7p_R",
    "pushNotification": false,
    "dob": "2001-02",
    "totalCarbonfootprint": 20.00031264,
    "language": "en",
    "measuringUnit": "IMPERIAL",
    "defaultFootprint": true,
    "communtyAdmin": []
    }
    ],
    "priority": 20,
    "environmental": false,
    "sponsored": false,
    "timeBasedType": 0,
    "activityContentType": "both",
    "unlocked": false,
    "maxBatch": 0,
    "dailyAvgGoal": 1,
    "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/Commute/Commute_icon-5a4b30e2.svg",
    "nanoTaskType": "NORMAL",
    "existIncentive": false,
    "incentives": [],
    "tracks": [
    "Climate Action"
    ],
    "userList": [],
    "communityTask": false,
    "privateTask": false,
    "taskType": "NanoTask"
    }
  }
  
  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  };
  loadFallback()
  {
      return " ";
  }
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested inside']);
    this.setState({
      nanoTaskObject:this.leaderboard.data,
      users:this.leaderboard.data.users
    });
    console.log("Data Users",this.leaderboard.data.users.length);
  }
  render() {
    const nanoTaskObject = this.state.nanoTaskObject;
    const users = this.state.users;
    const totalTasks = this.state.totalTasks;
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <View style={styles.BG}>
          <SegmentedControlTab
            values={['All Time', 'Today', 'Week', 'Month']}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
            tabStyle={{backgroundColor: Colors.white, borderWidth: 0,marginTop:20}}
            activeTabStyle={{backgroundColor: Colors.white, borderWidth: 0}}
            activeTabTextStyle={{
              color: Colors.black,
              fontFamily: 'FiraSans-Medium',
              borderBottomWidth:4,
              borderBottomColor:Colors.primary,
            }}
            tabTextStyle={{color: Colors.grey, fontFamily: 'FiraSans-Regular',paddingLeft:5,paddingRight:5,paddingBottom:5}}
          />
          {this.state.selectedIndex == 0 && (
            <ScrollView>
              <View style={styles.container}>
                <Text style={styles.leaderboardDescTxt}>See who is making the biggest difference!</Text>
                <View style={styles.titleBox}>
                  <Text style={styles.leaderboardTitle}>#{nanoTaskObject.title}</Text>
                  <Text style={styles.leaderboardTxtBox}>
                    <Text style={styles.leaderboardUploadNumber}>{totalTasks}</Text>
                    <Text style={styles.leaderboardUploadTxt}> Total Uploads</Text>
                  </Text>
                </View>
                <View style={styles.leaderboardCardContainer}>
                  {users.length > 0 && (
                    <TouchableOpacity
                      style={{width:"100%", backgroundColor:"transparent"}}
                      //onPress={this.onPress}
                    >
                      <View style={{flex: 1}}>
                        <View style={styles.leaderboardCard}>
                          <View style={styles.leaderboardCardTop}>
                            <View style={{flex: 0.2}}>
                              <Text style={styles.leaderboardSubScript}>
                                <Text style={styles.leaderboardSubScriptLeft}>1</Text><Text style={styles.leaderboardSubScriptRight}>st</Text>
                              </Text>
                            </View>
                            <View style={{flex: 0.8, alignItems: 'center'}}>
                              <Image
                                style={[styles.leaderboardCardAvatar]}
                                source={{uri: users[0].imgUrl}}
                              />
                            </View>
                            <View style={{flex: 0.2}}>
                              <Image
                                style={[styles.leaderboardBedgeImg]}
                                source={{uri: users[0].currentPlanetLevel ? users[0].currentPlanetLevel.achievement.imgURL : this.loadFallback()}}
                                //onError={()=> this.loadFallback()}
                              />
                            </View>
                          </View>
                          <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={styles.leaderboardCardName}>{users[0].name}</Text>
                          </View>
                          <View style={{flex: 1,flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                            <TouchableOpacity
                              style={[styles.button]}
                              //onPress={this.onPress}
                            >
                              <Text style={{color: '#fff'}}>
                                <Ionicons
                                  name="checkmark"
                                  size={20}
                                  color="#ffffff"
                                  backgroundColor="#FF5A60"
                                  style={{}}
                                />
                              </Text>
                            </TouchableOpacity>
                            <Text style={styles.leaderboardCardRank}>{users[0].nanotaskCount}</Text>
                            <Ionicons
                              name="person-add"
                              size={30}
                              color="#FF5A60"
                              backgroundColor="#FF5A60"
                              style={{position: 'absolute', right: 10}}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                  {users.length == 2 && (
                    <TouchableOpacity
                      style={{width:"100%", backgroundColor:"transparent"}}
                      //onPress={this.onPress}
                    >
                      <View style={{flex: 1,marginTop:20}}>
                        <View style={styles.leaderboardCard}>
                          <View style={styles.leaderboardCardTop}>
                            <View style={{flex: 0.2}}>
                              <Text style={styles.leaderboardSubScript}>
                                <Text style={styles.leaderboardSubScriptLeft}>1</Text><Text style={styles.leaderboardSubScriptRight}>st</Text>
                              </Text>
                            </View>
                            <View style={{flex: 0.8, alignItems: 'center'}}>
                              <Image
                                style={[styles.leaderboardCardAvatar]}
                                source={{uri: users[1].imgUrl}}
                              />
                            </View>
                            <View style={{flex: 0.2}}>
                              <Image
                                style={[styles.leaderboardBedgeImg]}
                                source={{uri: users[1].currentPlanetLevel ? users[1].currentPlanetLevel.achievement.imgURL : this.loadFallback()}}
                              />
                            </View>
                          </View>
                          <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={styles.leaderboardCardName}>{users[1].name}</Text>
                          </View>
                          <View style={{flex: 1,flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                            <TouchableOpacity 
                              style={[styles.button]}
                              //onPress={this.onPress}
                            >
                              <Text style={{color: '#fff'}}>
                                <Ionicons
                                  name="checkmark"
                                  size={20}
                                  color="#ffffff"
                                  backgroundColor="#FF5A60"
                                  style={{}}
                                />
                              </Text>
                            </TouchableOpacity>
                            <Text style={styles.leaderboardCardRank}>{users[1].nanotaskCount}</Text>
                            <Ionicons
                              name="person-add"
                              size={30}
                              color="#FF5A60"
                              backgroundColor="#FF5A60"
                              style={{position: 'absolute', right: 10}}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                  {users.length > 2 && (
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={[styles.leaderboardCard, {flex: 0.5}]}>
                        <TouchableOpacity
                          style={{width:"100%", backgroundColor:"transparent"}}
                          //onPress={this.onPress}
                        >
                          <View style={styles.leaderboardCardTop}>
                            <View style={{flex: 0.3}}>
                              <Text style={[styles.leaderboardSubScript,{marginTop: 25}]}>
                                <Text style={[styles.leaderboardSubScriptLeft,{fontSize: 22}]}>2</Text><Text style={[styles.leaderboardSubScriptRight,{fontSize: 14}]}>nd</Text>
                              </Text>
                            </View>
                            <View style={{flex: 0.6, alignItems: 'center'}}>
                              <Image
                                style={[styles.leaderboardCardAvatar,{width: 90, height: 90, marginTop: -45}]}
                                source={{uri: users[1].imgUrl}}
                              />
                            </View>
                            <View style={{flex: 0.3}}>
                              <Image
                                style={[styles.leaderboardBedgeImg,{width: 35, height: 35, marginTop: 20}]}
                                source={{uri: users[1].currentPlanetLevel ? users[1].currentPlanetLevel.achievement.imgURL : this.loadFallback()}}
                              />
                            </View>
                          </View>
                          <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={[styles.leaderboardCardName,{fontSize: 22,textAlign:"center"}]}>{users[1].name}</Text>
                          </View>
                          <View style={{flex: 1,flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                            <TouchableOpacity
                              style={[styles.button, {width: 25, height: 25}]}
                              //onPress={this.onPress}
                            >
                              <Text style={{color: '#fff'}}>
                                <Ionicons
                                  name="checkmark"
                                  size={16}
                                  color="#ffffff"
                                  backgroundColor="#FF5A60"
                                  style={{}}
                                />
                              </Text>
                            </TouchableOpacity>
                            <Text style={[styles.leaderboardCardRank,{fontSize: 25}]}>{users[1].nanotaskCount}</Text>
                            <Ionicons
                              name="person-add"
                              size={25}
                              color="#FF5A60"
                              backgroundColor="#FF5A60"
                              style={{position: 'absolute', right: 10}}
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View style={{width: 15}} />
                      <View style={[styles.leaderboardCard, {flex: 0.5}]}>
                        <TouchableOpacity
                          style={{width:"100%", backgroundColor:"transparent"}}
                          //onPress={this.onPress}
                        >
                          <View style={styles.leaderboardCardTop}>
                            <View style={{flex: 0.3}}>
                              <Text style={[styles.leaderboardSubScript,{marginTop: 25}]}>
                                <Text style={[styles.leaderboardSubScriptLeft,{fontSize: 22}]}>3</Text><Text style={[styles.leaderboardSubScriptRight,{fontSize: 14}]}>rd</Text>
                              </Text>
                            </View>
                            <View style={{flex: 0.6, alignItems: 'center'}}>
                              <Image
                                style={[styles.leaderboardCardAvatar,{width: 90, height: 90, marginTop: -45}]}
                                source={{uri: users[2].imgUrl}}
                              />
                            </View>
                            <View style={{flex: 0.3}}>
                              <Image
                                style={[styles.leaderboardBedgeImg,{width: 35, height: 35, marginTop: 20}]}
                                source={{uri: users[2].currentPlanetLevel ? users[2].currentPlanetLevel.achievement.imgURL : this.loadFallback()}}
                              />
                            </View>
                          </View>
                          <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={[styles.leaderboardCardName,{fontSize: 22,textAlign:"center"}]}>{users[2].name}</Text>
                          </View>
                          <View style={{flex: 1,flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                            <TouchableOpacity
                              style={[styles.button, {width: 25, height: 25}]}
                              //onPress={this.onPress}
                            >
                              <Text style={{color: '#fff'}}>
                                <Ionicons
                                  name="checkmark"
                                  size={16}
                                  color="#ffffff"
                                  backgroundColor="#FF5A60"
                                  style={{}}
                                />
                              </Text>
                            </TouchableOpacity>
                            <Text style={[styles.leaderboardCardRank,{fontSize: 25}]}>{users[2].nanotaskCount}</Text>
                            <Ionicons
                              name="person-add"
                              size={25}
                              color="#FF5A60"
                              backgroundColor="#FF5A60"
                              style={{position: 'absolute', right: 10}}
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>
                {users.length > 3 && (
                  <View style={styles.listBox}>
                    <View style={styles.listHeading}>
                      <View style={{flex: 1, alignSelf: 'flex-start'}}>
                        <Text style={styles.listHeadingTopUsers}>Top Users</Text>
                      </View>
                      <View style={{flex: 1, alignSelf: 'flex-end'}}>
                        <Text style={styles.listHeadingTotal}>Total</Text>
                      </View>
                    </View>
                    <View style={styles.listTopUsers}>
                      {users.map((item, index) => (
                        item.name && index > 2 && (
                          <TouchableOpacity
                              style={{width:"100%",backgroundColor:"transparent"}}
                              //onPress={this.onPress}
                              key={index+1}
                            >
                            <View style={styles.box}>
                              <View style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{textAlign: 'center'}}>{index + 1}</Text>
                              </View>
                              <View style={{flex: 0.2, justifyContent: 'center'}}>
                                <Image style={[styles.avatar]} source={{uri: item.imgUrl}} />
                              </View>
                              <View style={{flex: 0.9, marginRight: 15}}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                  <View style={{flex: 0.8, flexDirection: 'row'}}>
                                    <Text style={styles.txtContent}><Text style={{fontFamily: 'FiraSans-Bold'}}>{item.name}</Text></Text>
                                  </View>
                                  <View style={{flex: 0.2, flexDirection: 'row', alignItems: 'center'}}>
                                    <TouchableOpacity
                                      style={[styles.button,{width: 25, height: 25, backgroundColor: 'gray'}]}
                                      //onPress={this.onPress}
                                    >
                                      <Text style={{color: '#fff'}}>
                                        <Ionicons
                                          name="checkmark"
                                          size={16}
                                          color="#ffffff"
                                          backgroundColor="#FF5A60"
                                          style={{}}
                                        />
                                      </Text>
                                    </TouchableOpacity>
                                    <Text style={{marginLeft: 5}}>{item.nanotaskCount}</Text>
                                  </View>
                                </View>
                                {index + 1 <= users.length - 1 && (
                                  <View style={{height: 1, backgroundColor: '#E5E5E5'}} />
                                )}
                              </View>
                            </View>
                          </TouchableOpacity>
                        )
                      ))}
                    </View>
                  </View>
                )}
              </View>
            </ScrollView>
          )}
          {this.state.selectedIndex == 1 && <Today nanoTaskObject={nanoTaskObject} />}
          {this.state.selectedIndex == 2 && <Week nanoTaskObject={nanoTaskObject} />}
          {this.state.selectedIndex == 3 && <Month nanoTaskObject={nanoTaskObject} />}
        </View>
      </>
    );
  }
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
  leaderboardDescTxt: {
    textAlign: 'center',
    marginTop: 20,
  },
  titleBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  leaderboardTitle: {
    color: '#a2a2a2',
    fontSize: 18,
  },
  leaderboardTxtBox: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'FiraSans-Bold',
  },
  leaderboardUploadNumber: {
    color: '#FF5A60',
  },
  leaderboardUploadTxt: {
    color: '#606060',
    marginLeft: 5,
  },
  leaderboardCardContainer: {
    flex: 1,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
  },
  leaderboardCard: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 60,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  leaderboardCardTop: {
    flexDirection: 'row',
  },
  leaderboardSubScript: {
    alignSelf: 'flex-start',
    marginTop: 30,
    marginLeft: 10,
    color: '#a2a2a2',
  },
  leaderboardSubScriptLeft: {
    fontWeight: 'bold',
    fontSize: 37,
    fontFamily: 'FiraSans-Bold',
  },
  leaderboardSubScriptRight: {
    fontSize: 18,
    fontFamily: 'FiraSans-Regular',
  },
  leaderboardCardAvatar: {
    width: 120,
    height: 120,
    marginTop: -60,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 60,
  },
  leaderboardBedgeImg: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    marginTop: 30,
    marginRight: 10,
  },
  leaderboardCardName: {
    color: '#606060',
    fontSize: 28,
    fontFamily: 'FiraSans-Bold',
    marginTop: 10,
    textAlign:"center"
  },
  leaderboardCardRank: {
    color: '#606060',
    fontSize: 30,
    fontFamily: 'FiraSans-Regular',
    marginTop: 10,
    paddingBottom: 20,
    marginLeft: 5,
    paddingTop:10,
  },
  listBox: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 15,
    marginRight: 15,
  },
  listHeading: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
    paddingBottom: 10,
  },
  listHeadingTopUsers: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#606060',
    fontFamily: 'FiraSans-Regular',
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  listHeadingTotal: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#606060',
    fontFamily: 'FiraSans-Regular',
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  listTopUsers: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    marginBottom:20,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    //marginBottom:10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  txtContent: {
    marginTop: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F85B61',
    padding: 5,
    borderRadius: 50,
    height: 30,
    width: 30,
  },
});

export default AllTime;
