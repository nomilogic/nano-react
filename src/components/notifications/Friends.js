import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    LogBox,
} from 'react-native';
  
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {Colors} from '../Colors/colors';
import GroupTask from './GroupTask';
import Community from './Community';
import RejectedTasks from './RejectedTasks';

class Friends extends Component {
    constructor(props) {
        super(props);
    }
    
    state = {
        selectedIndex:0,
        setSelectedIndex:0,
        friendsArray:[],
        volunteerArray:[],
        communityArray:[],
        rejectedArray:[]
    }
    DataList= {
        "status": 200,
        "msg": "Notification Found",
        "data": [
            {
                "id": "6017f72608a8f50001ed7e29",
                "notificationDate": "2021-02-01T12:42:14.778+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "Muhammad Rizwan",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/stage/default/User.png",
                "title": "Muhammad Rizwan",
                "details": " started following you.",
                "followerId": "5e170bc8b5df7a0001f1d827",
                "carpoolRequestType": 0,
                "type": "follow",
                "status": 1,
                "notificationType": 3
            },
            {
                "id": "60083d0dbdbd8d0001aebb4b",
                "notificationDate": "2021-01-20T14:24:13.516+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/local/useruploads/5da5a6a9306c2e0001ba6f45/nanotask/Image/media5da5a6a9306c2e0001ba6f45278625258688020189.jpg",
                "title": "TRASHPICKUP",
                "details": "Your photo submission in #TRASHPICKUP was rejected by our system AI",
                "carpoolRequestType": 0,
                "nanoTaskActivityId": "5fd213f85e16e20001a42f01",
                "type": "verify",
                "status": 0,
                "notificationType": 5
            },
            {
                "id": "60083d0dbdbd8d0001aebb4a",
                "notificationDate": "2021-01-20T14:24:13.514+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/local/useruploads/5da5a6a9306c2e0001ba6f45/nanotask/Image/media5da5a6a9306c2e0001ba6f45772575799514813504.jpg",
                "title": "TRASHPICKUP",
                "details": "Your photo submission in #TRASHPICKUP was rejected by our system AI",
                "carpoolRequestType": 0,
                "nanoTaskActivityId": "5fd213ca5e16e20001a42eff",
                "type": "verify",
                "status": 0,
                "notificationType": 5
            },
            {
                "id": "60083c08bdbd8d0001aebb46",
                "notificationDate": "2021-01-20T14:19:52.396+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/local/useruploads/5da5a6a9306c2e0001ba6f45/nanotask/Image/media5da5a6a9306c2e0001ba6f459210321811819273090.jpg",
                "title": "TRASHPICKUP",
                "details": "Your photo submission in #TRASHPICKUP was rejected by our system AI",
                "carpoolRequestType": 0,
                "nanoTaskActivityId": "5fd0cb055e16e20001a42ed4",
                "type": "verify",
                "status": 0,
                "notificationType": 5
            },
            {
                "id": "60083c08bdbd8d0001aebb45",
                "notificationDate": "2021-01-20T14:19:52.394+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/local/useruploads/5da5a6a9306c2e0001ba6f45/nanotask/Image/media5da5a6a9306c2e0001ba6f456097375604952356026.jpg",
                "title": "TRASHPICKUP",
                "details": "Your photo submission in #TRASHPICKUP was rejected by our system AI",
                "carpoolRequestType": 0,
                "nanoTaskActivityId": "5fd0ca635e16e20001a42ed0",
                "type": "verify",
                "status": 0,
                "notificationType": 5
            },
            {
                "id": "5fa91688fbd64c0001851890",
                "notificationDate": "2020-11-09T10:14:32.556+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "Fahad Ali",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                "title": "Fahad Ali",
                "details": " started following you.",
                "followerId": "5fa90ad5fbd64c0001851884",
                "carpoolRequestType": 0,
                "type": "follow",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5f885d406056b10001b28ab9",
                "notificationDate": "2020-10-15T14:31:28.284+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "Hassan Mohiuddin",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
                "title": "Hassan Mohiuddin",
                "details": " started following you.",
                "followerId": "5d2745b9a7b6ee0001076395",
                "carpoolRequestType": 0,
                "type": "follow",
                "status": 1,
                "notificationType": 3
            },
            {
                "id": "5f86efc3c3a6b400015371d6",
                "notificationDate": "2020-10-14T12:32:03.270+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "Jolly",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg",
                "title": "Jolly",
                "details": " started following you.",
                "followerId": "5f7d7f735e60ca000103c51e",
                "carpoolRequestType": 0,
                "type": "follow",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5f86efbac3a6b400015371d4",
                "notificationDate": "2020-10-14T12:31:54.356+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "Jolly",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg",
                "title": "Jolly",
                "details": " started following you.",
                "followerId": "5f7d7f735e60ca000103c51e",
                "carpoolRequestType": 0,
                "type": "follow",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5f7d85465e60ca000103c523",
                "notificationDate": "2020-10-07T09:07:18.647+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "Jolly",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg",
                "title": "Jolly",
                "details": " started following you.",
                "followerId": "5f7d7f735e60ca000103c51e",
                "carpoolRequestType": 0,
                "type": "follow",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5f69d5a37198ea000196cb5a",
                "notificationDate": "2020-09-22T10:44:51.037+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "Rizwan Sardar",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/local/user/5f52127ee0900f0001d0eb01/cover/userUpload5f52127ee0900f0001d0eb017391912001112399355.jpg",
                "title": "Rizwan Sardar",
                "details": " has liked your post",
                "followerId": "5f52127ee0900f0001d0eb01",
                "carpoolRequestType": 0,
                "postId": "5f69d53c93e7a70001386a24",
                "type": "like",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5f523a466357720001339436",
                "notificationDate": "2020-09-04T12:59:50.222+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "Rizwan Sardar",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/local/user/5f52127ee0900f0001d0eb01/cover/userUpload5f52127ee0900f0001d0eb017391912001112399355.jpg",
                "title": "Rizwan Sardar",
                "details": " started following you.",
                "followerId": "5f52127ee0900f0001d0eb01",
                "carpoolRequestType": 0,
                "type": "follow",
                "status": 1,
                "notificationType": 3
            },
            {
                "id": "5f523950635772000133942c",
                "notificationDate": "2020-09-04T12:55:44.775+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                "title": "M.Rizwan",
                "details": " started following you.",
                "followerId": "5da5a6a9306c2e0001ba6f45",
                "carpoolRequestType": 0,
                "type": "follow",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e6a42d2547e8f0001229425",
                "notificationDate": "2020-03-12T14:10:26.211+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "Mohd Rizwan",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/local/user/5da01a3cb0e20a0001a92058/cover/userUpload5da01a3cb0e20a0001a920581237656305577723259.jpg",
                "title": "Mohd Rizwan",
                "details": " started following you.",
                "followerId": "5da01a3cb0e20a0001a92058",
                "carpoolRequestType": 0,
                "type": "follow",
                "status": 1,
                "notificationType": 3
            },
            {
                "id": "5e5e4a1d44f95800012a0c0a",
                "notificationDate": "2020-03-03T12:14:21.373+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "Muhammad Huzaifa Siddiqui",
                "eventId": 0,
                "imgUrl": "https://media-exp1.licdn.com/dms/image/C5103AQFDJH-3Rag14A/profile-displayphoto-shrink_100_100/0?e=1588809600&v=beta&t=cwcsmXkuKHtCicO0G2veHL54b2vUzQEHjtr3LlmDJTU",
                "title": "Muhammad Huzaifa Siddiqui",
                "details": " wants to join in Carpool Task.",
                "carpoolTaskId": "5e5e49d344f95800012a0c08",
                "carpoolPassengerRequestId": "5e5e4a1d44f95800012a0c09",
                "carpoolRequestType": 1,
                "type": "carpool",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e5e3bc2303f5300015f9183",
                "notificationDate": "2020-03-03T11:13:06.367+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                "title": "Omar",
                "details": " has approved your carpool request.",
                "carpoolTaskId": "5e57c956303f5300015f9141",
                "carpoolPassengerRequestId": "5e5e3b60303f5300015f9180",
                "carpoolRequestType": 2,
                "type": "carpool",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e5e2f2d303f5300015f9173",
                "notificationDate": "2020-03-03T10:19:25.053+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "Huzaifa A",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/stage/default/User.png",
                "title": "Huzaifa A",
                "details": " wants to join in Carpool Task.",
                "carpoolTaskId": "5e5e1b3e303f5300015f9166",
                "carpoolPassengerRequestId": "5e5e2f2d303f5300015f9172",
                "carpoolRequestType": 1,
                "type": "carpool",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e5e2ef5303f5300015f9171",
                "notificationDate": "2020-03-03T10:18:29.798+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "Muhammad Huzaifa Siddiqui",
                "eventId": 0,
                "imgUrl": "https://media-exp1.licdn.com/dms/image/C5103AQFDJH-3Rag14A/profile-displayphoto-shrink_100_100/0?e=1588809600&v=beta&t=cwcsmXkuKHtCicO0G2veHL54b2vUzQEHjtr3LlmDJTU",
                "title": "Muhammad Huzaifa Siddiqui",
                "details": " wants to join in Carpool Task.",
                "carpoolTaskId": "5e5e1b3e303f5300015f9166",
                "carpoolPassengerRequestId": "5e5e2ef5303f5300015f9170",
                "carpoolRequestType": 1,
                "type": "carpool",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e5e2179303f5300015f916a",
                "notificationDate": "2020-03-03T09:20:57.524+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "Shaban Khan",
                "eventId": 0,
                "imgUrl": "https://graph.facebook.com/374172566517129/picture?type=large",
                "title": "Shaban Khan",
                "details": " wants to join in Carpool Task.",
                "carpoolTaskId": "5e5e1b3e303f5300015f9166",
                "carpoolPassengerRequestId": "5e5e2179303f5300015f9169",
                "carpoolRequestType": 1,
                "type": "carpool",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e4fce2f1c56510001ccc86f",
                "notificationDate": "2020-02-21T12:33:51.717+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                "title": "Omar",
                "details": " has approved your carpool request.",
                "carpoolTaskId": "5e4fc7f91c56510001ccc857",
                "carpoolPassengerRequestId": "5e4fcb981c56510001ccc864",
                "carpoolRequestType": 2,
                "type": "carpool",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e4fce2d1c56510001ccc86e",
                "notificationDate": "2020-02-21T12:33:49.194+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                "title": "Omar",
                "details": " has approved your carpool request.",
                "carpoolTaskId": "5e4fc7f91c56510001ccc857",
                "carpoolPassengerRequestId": "5e4fcb971c56510001ccc862",
                "carpoolRequestType": 2,
                "type": "carpool",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e4fc2081c56510001ccc844",
                "notificationDate": "2020-02-21T11:42:00.763+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/user/5ca5f19d8459dc00013ea63c/cover/userUpload5ca5f19d8459dc00013ea63c3726474739606911968.jpg",
                "title": "mak",
                "details": " has approved your carpool request.",
                "carpoolTaskId": "5e4fb8431c56510001ccc81b",
                "carpoolPassengerRequestId": "5e4fc1971c56510001ccc839",
                "carpoolRequestType": 2,
                "type": "carpool",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e4fc2051c56510001ccc843",
                "notificationDate": "2020-02-21T11:41:57.455+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/user/5ca5f19d8459dc00013ea63c/cover/userUpload5ca5f19d8459dc00013ea63c3726474739606911968.jpg",
                "title": "mak",
                "details": " has approved your carpool request.",
                "carpoolTaskId": "5e4fb8431c56510001ccc81b",
                "carpoolPassengerRequestId": "5e4fc1971c56510001ccc837",
                "carpoolRequestType": 2,
                "type": "carpool",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e4fc1fd1c56510001ccc842",
                "notificationDate": "2020-02-21T11:41:49.799+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/user/5ca5f19d8459dc00013ea63c/cover/userUpload5ca5f19d8459dc00013ea63c3726474739606911968.jpg",
                "title": "mak",
                "details": " has approved your carpool request.",
                "carpoolTaskId": "5e4fb8431c56510001ccc81b",
                "carpoolPassengerRequestId": "5e4fc1971c56510001ccc839",
                "carpoolRequestType": 2,
                "type": "carpool",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e4fc1fb1c56510001ccc841",
                "notificationDate": "2020-02-21T11:41:47.149+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/user/5ca5f19d8459dc00013ea63c/cover/userUpload5ca5f19d8459dc00013ea63c3726474739606911968.jpg",
                "title": "mak",
                "details": " has approved your carpool request.",
                "carpoolTaskId": "5e4fb8431c56510001ccc81b",
                "carpoolPassengerRequestId": "5e4fc1971c56510001ccc837",
                "carpoolRequestType": 2,
                "type": "carpool",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e4fc1f91c56510001ccc840",
                "notificationDate": "2020-02-21T11:41:45.211+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/user/5ca5f19d8459dc00013ea63c/cover/userUpload5ca5f19d8459dc00013ea63c3726474739606911968.jpg",
                "title": "mak",
                "details": " has approved your carpool request.",
                "carpoolTaskId": "5e4fb8431c56510001ccc81b",
                "carpoolPassengerRequestId": "5e4fc1971c56510001ccc839",
                "carpoolRequestType": 2,
                "type": "carpool",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e4fc1f41c56510001ccc83f",
                "notificationDate": "2020-02-21T11:41:40.589+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/user/5ca5f19d8459dc00013ea63c/cover/userUpload5ca5f19d8459dc00013ea63c3726474739606911968.jpg",
                "title": "mak",
                "details": " has approved your carpool request.",
                "carpoolTaskId": "5e4fb8431c56510001ccc81b",
                "carpoolPassengerRequestId": "5e4fc1971c56510001ccc837",
                "carpoolRequestType": 2,
                "type": "carpool",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e4fc1f21c56510001ccc83e",
                "notificationDate": "2020-02-21T11:41:38.423+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/user/5ca5f19d8459dc00013ea63c/cover/userUpload5ca5f19d8459dc00013ea63c3726474739606911968.jpg",
                "title": "mak",
                "details": " has approved your carpool request.",
                "carpoolTaskId": "5e4fb8431c56510001ccc81b",
                "carpoolPassengerRequestId": "5e4fc1971c56510001ccc839",
                "carpoolRequestType": 2,
                "type": "carpool",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e4fc1ed1c56510001ccc83d",
                "notificationDate": "2020-02-21T11:41:33.256+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/user/5ca5f19d8459dc00013ea63c/cover/userUpload5ca5f19d8459dc00013ea63c3726474739606911968.jpg",
                "title": "mak",
                "details": " has approved your carpool request.",
                "carpoolTaskId": "5e4fb8431c56510001ccc81b",
                "carpoolPassengerRequestId": "5e4fc1971c56510001ccc839",
                "carpoolRequestType": 2,
                "type": "carpool",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e4fc1a91c56510001ccc83b",
                "notificationDate": "2020-02-21T11:40:25.229+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/user/5ca5f19d8459dc00013ea63c/cover/userUpload5ca5f19d8459dc00013ea63c3726474739606911968.jpg",
                "title": "mak",
                "details": " has approved your carpool request.",
                "carpoolTaskId": "5e4fb8431c56510001ccc81b",
                "carpoolPassengerRequestId": "5e4fc1971c56510001ccc837",
                "carpoolRequestType": 2,
                "type": "carpool",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e397315635bc000013a6b14",
                "notificationDate": "2020-02-04T13:35:17.620+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "M.Rizwan",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/local/user/5da5a6a9306c2e0001ba6f45/cover/userUpload5da5a6a9306c2e0001ba6f455851182583738513902.jpg",
                "title": "M.Rizwan",
                "details": " started following you.",
                "followerId": "5da5a6a9306c2e0001ba6f45",
                "carpoolRequestType": 0,
                "type": "follow",
                "status": 0,
                "notificationType": 3
            },
            {
                "id": "5e33dd45114c4700011c56ec",
                "notificationDate": "2020-01-31T07:54:45.106+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "Farrukh Ismail",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/local/user/5c9dad7d7e349e0001335a83/cover/userUpload5c9dad7d7e349e0001335a836403151137005345821.jpg",
                "title": "Farrukh Ismail",
                "details": " started following you.",
                "followerId": "5c9dad7d7e349e0001335a83",
                "carpoolRequestType": 0,
                "type": "follow",
                "status": 1,
                "notificationType": 3
            },
            {
                "id": "5e28118ccf33f4000102650c",
                "notificationDate": "2020-01-22T09:10:36.616+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "Mhuzaifa",
                "eventId": 0,
                "imgUrl": "https://media.nanodot.us/nano/stage/default/User.png",
                "title": "Mhuzaifa",
                "details": " started following you.",
                "followerId": "5d36f29d604e470001b75941",
                "carpoolRequestType": 0,
                "type": "follow",
                "status": 1,
                "notificationType": 3
            },
            {
                "id": "5e1c85debaae4300016a20ea",
                "notificationDate": "2020-01-13T14:59:42.014+0000",
                "userId": "5da5a6a9306c2e0001ba6f45",
                "userName": "Shaban Khan",
                "eventId": 0,
                "imgUrl": "https://graph.facebook.com/374172566517129/picture?type=large",
                "title": "Shaban Khan",
                "details": " started following you.",
                "followerId": "5cab207f2e8b9d000191b268",
                "carpoolRequestType": 0,
                "type": "follow",
                "status": 1,
                "notificationType": 3
            },
            {
                "id": "5de10fc543d73b000141ca94",
                "eventId": 107,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/Project/107/img/thumb/Project107_thumb6231213600277304811.jpg",
                "title": "Smog Control program ",
                "details": "Please reached on time at spot",
                "carpoolRequestType": 0,
                "status": 0,
                "notificationType": 2
            },
            {
                "id": "5de64843dc8167000168f48c",
                "eventId": 107,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/Project/107/img/thumb/Project107_thumb6231213600277304811.jpg",
                "title": "Smog Control program ",
                "details": "Hi ",
                "carpoolRequestType": 0,
                "status": 0,
                "notificationType": 2
            },
            {
                "id": "5dea461f0ec6920001600157",
                "eventId": 118,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/Project/118/img/thumb/Project118_thumb6201692529775367772.jpg",
                "title": "Digital Pakistan ",
                "details": "Hello guys ",
                "carpoolRequestType": 0,
                "status": 0,
                "notificationType": 2
            },
            {
                "id": "5f994979c86a9100016dcd00",
                "eventId": 129,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/Project/129/img/thumb/Project129_thumb504527656483775953.jpg",
                "title": "Stay home Stay Save",
                "details": "Please reached on time",
                "carpoolRequestType": 0,
                "status": 0,
                "notificationType": 2
            },
            {
                "id": "5faa7fc4b4f048000171d72b",
                "notificationDate": "2020-11-10T11:55:48.505+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hello ",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5faa7ce7b4f048000171d72a",
                "notificationDate": "2020-11-10T11:43:35.083+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hello ",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5e3bcae4635bc000013a6b47",
                "notificationDate": "2020-02-06T08:14:28.440+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hello ",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5e3531b25d6bab0001db71a2",
                "notificationDate": "2020-02-01T08:07:14.468+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hello Nano it’s test message ",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5e35318c5d6bab0001db71a1",
                "notificationDate": "2020-02-01T08:06:36.081+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hello Pakistan ",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5e317660575a5e000135584e",
                "notificationDate": "2020-01-29T12:11:12.751+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "hi",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2f4b290f88e80001207092",
                "notificationDate": "2019-07-17T16:22:01.121+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hi nano! ",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d248a837d1ed100011b6844",
                "notificationDate": "2019-07-09T12:37:23.302+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hello test 123",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d248a557d1ed100011b6843",
                "notificationDate": "2019-07-09T12:36:37.805+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hello",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2483927d1ed100011b683e",
                "notificationDate": "2019-07-09T12:07:46.708+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hello Nano Users",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2481b57d1ed100011b683d",
                "notificationDate": "2019-07-09T11:59:49.803+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hello nano users",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d24254a6105a600011b4b55",
                "notificationDate": "2019-07-09T05:25:30.588+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Test",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2382646105a600011b4b3c",
                "notificationDate": "2019-07-08T17:50:28.920+0000",
                "communityId": "5d168b41d5834300014f0426",
                "communityName": "24th World Scout Jamboree ",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/24th-World-Scout-Jamboree/WSJ-CREST-3X3-NEW2-55d5de49.png",
                "details": "Hi ",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2360f66105a600011b4b35",
                "notificationDate": "2019-07-08T15:27:50.441+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Tyy",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2360ed6105a600011b4b34",
                "notificationDate": "2019-07-08T15:27:41.508+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Ye",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d235c776105a600011b4b33",
                "notificationDate": "2019-07-08T15:08:39.805+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Ysy",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d235c716105a600011b4b32",
                "notificationDate": "2019-07-08T15:08:33.621+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "123",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2356b56105a600011b4b30",
                "notificationDate": "2019-07-08T14:44:05.730+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hello",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2356ac6105a600011b4b2f",
                "notificationDate": "2019-07-08T14:43:56.585+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Test 123",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2356546105a600011b4b2e",
                "notificationDate": "2019-07-08T14:42:28.397+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Test",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2355fa6105a600011b4b2d",
                "notificationDate": "2019-07-08T14:40:58.025+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Test",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2355d06105a600011b4b2c",
                "notificationDate": "2019-07-08T14:40:16.134+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Test",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2355746105a600011b4b2b",
                "notificationDate": "2019-07-08T14:38:44.506+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Test",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2355186105a600011b4b2a",
                "notificationDate": "2019-07-08T14:37:12.236+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hi",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d23550b6105a600011b4b29",
                "notificationDate": "2019-07-08T14:36:59.176+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Testing 123",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2354ca6105a600011b4b28",
                "notificationDate": "2019-07-08T14:35:54.438+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hello",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d23515e3a0436000151c976",
                "notificationDate": "2019-07-08T14:21:18.487+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "hrllo",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d234f3c3a0436000151c975",
                "notificationDate": "2019-07-08T14:12:12.313+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hello testing 123",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d234eea3a0436000151c974",
                "notificationDate": "2019-07-08T14:10:50.886+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hello testing",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d234aebded0980001c9b214",
                "notificationDate": "2019-07-08T13:53:47.305+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hello world",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d23330d6461a10001144409",
                "notificationDate": "2019-07-08T12:11:57.196+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Hello world",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d232bce37c5f60001f25b47",
                "notificationDate": "2019-07-08T11:41:02.051+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "hello 1234",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2328b837c5f60001f25b46",
                "notificationDate": "2019-07-08T11:27:52.097+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "hello 123",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2322f437c5f60001f25b44",
                "notificationDate": "2019-07-08T11:03:16.679+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            },
            {
                "id": "5d2318285f40bf00013a9ff1",
                "notificationDate": "2019-07-08T10:17:12.115+0000",
                "communityId": "5d1090feea01400001dc2776",
                "communityName": "Nano",
                "eventId": 0,
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                "details": "hello",
                "carpoolRequestType": 0,
                "type": "message",
                "status": 1,
                "notificationType": 1
            }
        ],
        "total": 0
    }
    
    handleIndexChange = (index) => {
        //setSelectedIndex(index);
        this.setState({
            selectedIndex: index,
        })
    };
    loadFallback()
    {
        return "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png";
    }
    componentDidMount() {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested inside']);
        var _communityArray = [];
        var _volunteerArray = [];
        var _friendsArray = [];
        var _rejectedArray = [];
        this.DataList.data.map((item,index) => {
            if(item.notificationType == 1)
            {
                _communityArray.push(item)
            }
            else if(item.notificationType == 2)
            {
                _volunteerArray.push(item)
            }
            else if(item.notificationType == 3)
            {
                _friendsArray.push(item);
            }
            else if(item.notificationType == 5)
            {
                _rejectedArray.push(item)
            }
        });
        this.setState({
            ...this.state,
            communityArray: _communityArray,
            volunteerArray: _volunteerArray,
            friendsArray: _friendsArray,
            rejectedArray: _rejectedArray
        });
    }
    render() {
        const communityArray = this.state.communityArray;
        const volunteerArray = this.state.volunteerArray;
        const friendsArray = this.state.friendsArray;
        const rejectedArray = this.state.rejectedArray;
        //console.log(this.state.volunteerArray);
        return (
            <>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" />
                <View style={styles.BG}>
                    <SegmentedControlTab
                        values={['FRIENDS', 'GROUP TASK', 'COMMUNITY', 'REJECTED TASKS']}
                        selectedIndex={this.state.selectedIndex}
                        onTabPress={this.handleIndexChange}
                        tabStyle={{backgroundColor: Colors.white, borderWidth: 0,marginTop:20}}
                        activeTabStyle={{backgroundColor: Colors.white, borderWidth: 0}}
                        activeTabTextStyle={{
                            color: '#203541',
                            fontFamily: 'FiraSans-Medium',
                            borderBottomWidth:4,
                            borderBottomColor:'#203541',
                        }}
                        tabTextStyle={{color: Colors.grey, fontFamily: 'FiraSans-Regular',paddingLeft:5,paddingRight:5,paddingBottom:5}}
                    />
                    {this.state.selectedIndex == 0 && (
                        <ScrollView>
                            <SafeAreaView>
                                <View style={styles.container}>
                                    <View style={styles.boxContainer}>
                                        {friendsArray.map((item,index)=>(
                                            <View style={styles.box} key={index}>
                                                <View style={{flex:0.2}}>
                                                    <Image
                                                        style={[styles.avatar]}
                                                        source={{uri: item.imgUrl}}
                                                        onError={()=> this.loadFallback()}
                                                    />
                                                </View>
                                                <View style={{flex:0.8}}>
                                                    <View style={{flex:1,flexDirection:"row",marginBottom:10}}>
                                                        <View style={{flex:0.9,flexDirection:"row"}}>
                                                            <Text style={styles.txtContent}>
                                                                <Text style={{fontFamily:"FiraSans-Bold",}}>{item.title} </Text>
                                                                <Text style={{fontFamily:"FiraSans-Regular"}}> - {item.details}</Text>
                                                            </Text>
                                                        </View>
                                                        <View style={{flex:0.3,alignItems:"flex-end"}}>
                                                            <TouchableOpacity
                                                                style={[styles.button]}
                                                                //onPress={this.onPress}
                                                            >
                                                                {(item.type == 'comment' || item.type == 'like') && ( 
                                                                    <Text style={styles.btnTxt1}>View</Text>
                                                                )}
                                                                {item.type == 'follow' && item.status == 0 && ( 
                                                                    <Text style={styles.btnTxt1}>Follow</Text>
                                                                )}
                                                                {item.type == 'follow' && item.status == 1 && ( 
                                                                    <Text style={styles.btnTxt2}>Following</Text>
                                                                )}
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                    {index+1 <= friendsArray.length -1 && (
                                                        <View style={{height:1,backgroundColor:"#E5E5E5"}}></View>
                                                    )}
                                                </View>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            </SafeAreaView>
                        </ScrollView>
                    )}
                    {this.state.selectedIndex == 1 && <GroupTask volunteer={volunteerArray}/>}
                    {this.state.selectedIndex == 2 && <Community community={communityArray}/>}
                    {this.state.selectedIndex == 3 && <RejectedTasks rejected={rejectedArray}/>}

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
    btnTxt2:{
        color:"#000",
        fontSize:12,
        backgroundColor:"#fff",
        borderRadius: 8,
        padding:10,
        fontFamily:"FiraSans-Regular",
        //borderWidth:1,
        //borderColor:"#FD7378",
    },
    
    
  });
  

export default Friends;