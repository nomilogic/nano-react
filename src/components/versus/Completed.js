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

const Completed = (props) => {
    const [userId, setUserId] = React.useState("5da5a6a9306c2e0001ba6f45");
    const [completed, setCompleted] = React.useState({
        "status": 200,
        "msg": "Challenge(s) Found",
        "data": [
            {
                "id": "5dd7db223a36bb0001c8ecdd",
                "sender": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": true,
                    "points": 90
                },
                "receiver": {
                    "id": "5d26f2084af97b00018be666",
                    "name": "Muhammad Huzaifa Siddiqui",
                    "imgUrl": "https://media-exp1.licdn.com/dms/image/C5103AQFDJH-3Rag14A/profile-displayphoto-shrink_100_100/0?e=1589414400&v=beta&t=NSghWOvaEy5ts2wBDexTBGdXuTq8zaLVMMzUbDH6l-s",
                    "winner": false,
                    "points": 60
                },
                "invitationSent": "2019-11-22T12:57:06Z",
                "acceptTime": "2020-02-01T10:37:00Z",
                "startDate": "2020-02-01T00:00:00Z",
                "endDate": "2020-02-08T00:00:00Z",
                "senderPoints": 90,
                "receiverPoints": 60,
                "senderNanoTasks": 9,
                "receiverNanoTasks": 6,
                "winner": "5da5a6a9306c2e0001ba6f45",
                "status": 3
            },
            {
                "id": "5dd7db363a36bb0001c8ecde",
                "sender": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": true,
                    "points": 50
                },
                "receiver": {
                    "id": "5cb05dc450322d0001d687e2",
                    "name": "Maqbool Shah",
                    "imgUrl": "https://graph.facebook.com/10155980913126319/picture?type=large",
                    "winner": false,
                    "points": 10
                },
                "invitationSent": "2019-11-22T12:57:26Z",
                "acceptTime": "2020-03-12T09:12:17Z",
                "startDate": "2020-03-12T00:00:00Z",
                "endDate": "2020-03-19T00:00:00Z",
                "senderPoints": 50,
                "receiverPoints": 10,
                "senderNanoTasks": 5,
                "receiverNanoTasks": 1,
                "winner": "5da5a6a9306c2e0001ba6f45",
                "status": 3
            },
            {
                "id": "5dd7db3b3a36bb0001c8ecdf",
                "sender": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": false,
                    "points": 0
                },
                "receiver": {
                    "id": "5c9dad7d7e349e0001335a83",
                    "name": "Farrukh Ismail",
                    "imgUrl": "https://media.nanodot.us/nano/local/user/5c9dad7d7e349e0001335a83/cover/userUpload5c9dad7d7e349e0001335a836403151137005345821.jpg",
                    "winner": true,
                    "points": 20
                },
                "invitationSent": "2019-11-22T12:57:31Z",
                "acceptTime": "2019-11-22T12:58:44Z",
                "startDate": "2019-11-22T00:00:00Z",
                "endDate": "2019-11-29T00:00:00Z",
                "senderPoints": 0,
                "receiverPoints": 20,
                "senderNanoTasks": 0,
                "receiverNanoTasks": 2,
                "winner": "5c9dad7d7e349e0001335a83",
                "status": 3
            },
            {
                "id": "5dd7db423a36bb0001c8ece0",
                "sender": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": false,
                    "points": 0
                },
                "receiver": {
                    "id": "5d36f29d604e470001b75941",
                    "name": "Huzaifa A",
                    "imgUrl": "https://media.nanodot.us/nano/stage/default/User.png",
                    "winner": true,
                    "points": 10
                },
                "invitationSent": "2019-11-22T12:57:38Z",
                "acceptTime": "2019-11-27T10:23:13Z",
                "startDate": "2019-11-27T00:00:00Z",
                "endDate": "2019-12-04T00:00:00Z",
                "senderPoints": 0,
                "receiverPoints": 10,
                "senderNanoTasks": 0,
                "receiverNanoTasks": 1,
                "winner": "5d36f29d604e470001b75941",
                "status": 3
            },
            {
                "id": "5dee05ed0ec692000160015e",
                "sender": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": true,
                    "points": 50
                },
                "receiver": {
                    "id": "5c9dad7d7e349e0001335a83",
                    "name": "Farrukh Ismail",
                    "imgUrl": "https://media.nanodot.us/nano/local/user/5c9dad7d7e349e0001335a83/cover/userUpload5c9dad7d7e349e0001335a836403151137005345821.jpg",
                    "winner": false,
                    "points": 20
                },
                "invitationSent": "2019-12-09T08:29:33Z",
                "acceptTime": "2020-09-01T21:44:42Z",
                "startDate": "2020-09-01T00:00:00Z",
                "endDate": "2020-09-08T00:00:00Z",
                "senderPoints": 50,
                "receiverPoints": 20,
                "senderNanoTasks": 5,
                "receiverNanoTasks": 2,
                "winner": "5da5a6a9306c2e0001ba6f45",
                "status": 3
            },
            {
                "id": "5dee05f10ec692000160015f",
                "sender": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": true,
                    "points": 180
                },
                "receiver": {
                    "id": "5d36f29d604e470001b75941",
                    "name": "Huzaifa A",
                    "imgUrl": "https://media.nanodot.us/nano/stage/default/User.png",
                    "winner": false,
                    "points": 130
                },
                "invitationSent": "2019-12-09T08:29:37Z",
                "acceptTime": "2020-01-22T09:02:08Z",
                "startDate": "2020-01-22T00:00:00Z",
                "endDate": "2020-01-29T00:00:00Z",
                "senderPoints": 180,
                "receiverPoints": 130,
                "senderNanoTasks": 18,
                "receiverNanoTasks": 13,
                "winner": "5da5a6a9306c2e0001ba6f45",
                "status": 3
            },
            {
                "id": "5e1d8632baae4300016a20fa",
                "sender": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": false,
                    "points": 0
                },
                "receiver": {
                    "id": "5ca5f19d8459dc00013ea63c",
                    "name": "mak",
                    "imgUrl": "https://media.nanodot.us/nano/local/user/5ca5f19d8459dc00013ea63c/cover/userUpload5ca5f19d8459dc00013ea63c7723746154407370364.jpg",
                    "winner": false,
                    "points": 0
                },
                "invitationSent": "2020-01-14T09:13:22Z",
                "acceptTime": "2020-01-15T07:23:28Z",
                "startDate": "2020-01-15T00:00:00Z",
                "endDate": "2020-01-22T00:00:00Z",
                "senderPoints": 0,
                "receiverPoints": 0,
                "senderNanoTasks": 0,
                "receiverNanoTasks": 0,
                "winner": "DRAW",
                "status": 3
            },
            {
                "id": "5e1d9b9dbaae4300016a2107",
                "sender": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": true,
                    "points": 130
                },
                "receiver": {
                    "id": "5cab207f2e8b9d000191b268",
                    "name": "Shaban Khan",
                    "imgUrl": "https://graph.facebook.com/374172566517129/picture?type=large",
                    "winner": false,
                    "points": 0
                },
                "invitationSent": "2020-01-14T10:44:45Z",
                "acceptTime": "2020-01-16T23:55:44Z",
                "startDate": "2020-01-16T00:00:00Z",
                "endDate": "2020-01-23T00:00:00Z",
                "senderPoints": 130,
                "receiverPoints": 0,
                "senderNanoTasks": 13,
                "receiverNanoTasks": 0,
                "winner": "5da5a6a9306c2e0001ba6f45",
                "status": 3
            },
            {
                "id": "5e282c3ecf33f40001026524",
                "sender": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": true,
                    "points": 170
                },
                "receiver": {
                    "id": "5d2745b9a7b6ee0001076395",
                    "name": "Hassan Mohiuddin",
                    "imgUrl": "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
                    "winner": false,
                    "points": 0
                },
                "invitationSent": "2020-01-22T11:04:30Z",
                "acceptTime": "2020-01-31T13:30:12Z",
                "startDate": "2020-01-31T00:00:00Z",
                "endDate": "2020-02-07T00:00:00Z",
                "senderPoints": 170,
                "receiverPoints": 0,
                "senderNanoTasks": 17,
                "receiverNanoTasks": 0,
                "winner": "5da5a6a9306c2e0001ba6f45",
                "status": 3
            },
            {
                "id": "5e342cbe5d6bab0001db7158",
                "sender": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": false,
                    "points": 0
                },
                "receiver": {
                    "id": "5ca5f19d8459dc00013ea63c",
                    "name": "mak",
                    "imgUrl": "https://media.nanodot.us/nano/local/user/5ca5f19d8459dc00013ea63c/cover/userUpload5ca5f19d8459dc00013ea63c7723746154407370364.jpg",
                    "winner": true,
                    "points": 10
                },
                "invitationSent": "2020-01-31T13:33:50Z",
                "acceptTime": "2020-02-03T12:33:39Z",
                "startDate": "2020-02-03T00:00:00Z",
                "endDate": "2020-02-10T00:00:00Z",
                "senderPoints": 0,
                "receiverPoints": 10,
                "senderNanoTasks": 0,
                "receiverNanoTasks": 1,
                "winner": "5ca5f19d8459dc00013ea63c",
                "status": 3
            },
            {
                "id": "5e68e8f144f95800012a0c37",
                "sender": {
                    "id": "5cab207f2e8b9d000191b268",
                    "name": "Shaban Khan",
                    "imgUrl": "https://graph.facebook.com/374172566517129/picture?type=large",
                    "winner": false,
                    "points": 0
                },
                "receiver": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": true,
                    "points": 50
                },
                "invitationSent": "2020-03-11T13:34:41Z",
                "acceptTime": "2020-03-13T09:49:42Z",
                "startDate": "2020-03-13T00:00:00Z",
                "endDate": "2020-03-20T00:00:00Z",
                "senderPoints": 0,
                "receiverPoints": 50,
                "senderNanoTasks": 0,
                "receiverNanoTasks": 5,
                "winner": "5da5a6a9306c2e0001ba6f45",
                "status": 3
            },
            {
                "id": "5e6a50f6547e8f0001229460",
                "sender": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": true,
                    "points": 50
                },
                "receiver": {
                    "id": "5e6a4088547e8f0001229423",
                    "name": "Huzaifa10",
                    "imgUrl": "https://media.nanodot.us/nano/local/user/5e6a4088547e8f0001229423/cover/userUpload5e6a4088547e8f00012294238996996715627360165.jpg",
                    "winner": false,
                    "points": 20
                },
                "invitationSent": "2020-03-12T15:10:46Z",
                "acceptTime": "2020-03-13T11:43:58Z",
                "startDate": "2020-03-13T00:00:00Z",
                "endDate": "2020-03-20T00:00:00Z",
                "senderPoints": 50,
                "receiverPoints": 20,
                "senderNanoTasks": 5,
                "receiverNanoTasks": 2,
                "winner": "5da5a6a9306c2e0001ba6f45",
                "status": 3
            },
            {
                "id": "5e6f3594547e8f000122947a",
                "sender": {
                    "id": "5d36f29d604e470001b75941",
                    "name": "Huzaifa A",
                    "imgUrl": "https://media.nanodot.us/nano/stage/default/User.png",
                    "winner": false,
                    "points": 0
                },
                "receiver": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": true,
                    "points": 50
                },
                "invitationSent": "2020-03-16T08:15:16Z",
                "acceptTime": "2020-09-04T11:19:31Z",
                "startDate": "2020-09-04T00:00:00Z",
                "endDate": "2020-09-11T00:00:00Z",
                "senderPoints": 0,
                "receiverPoints": 50,
                "senderNanoTasks": 0,
                "receiverNanoTasks": 5,
                "winner": "5da5a6a9306c2e0001ba6f45",
                "status": 3
            },
            {
                "id": "5e7e120f9a335f0001671e7f",
                "sender": {
                    "id": "5cab207f2e8b9d000191b268",
                    "name": "Shaban Khan",
                    "imgUrl": "https://graph.facebook.com/374172566517129/picture?type=large",
                    "winner": false,
                    "points": 0
                },
                "receiver": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": true,
                    "points": 50
                },
                "invitationSent": "2020-03-27T14:47:43Z",
                "acceptTime": "2020-09-04T11:19:29Z",
                "startDate": "2020-09-04T00:00:00Z",
                "endDate": "2020-09-11T00:00:00Z",
                "senderPoints": 0,
                "receiverPoints": 50,
                "senderNanoTasks": 0,
                "receiverNanoTasks": 5,
                "winner": "5da5a6a9306c2e0001ba6f45",
                "status": 3
            },
            {
                "id": "5f523a736357720001339443",
                "sender": {
                    "id": "5f52127ee0900f0001d0eb01",
                    "name": "Rizwan Sardar",
                    "imgUrl": "https://media.nanodot.us/nano/local/user/5f52127ee0900f0001d0eb01/cover/userUpload5f52127ee0900f0001d0eb017391912001112399355.jpg",
                    "winner": false,
                    "points": 30
                },
                "receiver": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": true,
                    "points": 50
                },
                "invitationSent": "2020-09-04T13:00:35Z",
                "acceptTime": "2020-09-04T13:01:18Z",
                "startDate": "2020-09-04T00:00:00Z",
                "endDate": "2020-09-11T00:00:00Z",
                "senderPoints": 30,
                "receiverPoints": 50,
                "senderNanoTasks": 3,
                "receiverNanoTasks": 5,
                "winner": "5da5a6a9306c2e0001ba6f45",
                "status": 3
            },
            {
                "id": "5f57802b635772000133946e",
                "sender": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": false,
                    "points": 40
                },
                "receiver": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": false,
                    "points": 40
                },
                "invitationSent": "2020-09-08T12:59:23Z",
                "acceptTime": "2020-09-14T10:55:51Z",
                "startDate": "2020-09-14T00:00:00Z",
                "endDate": "2020-09-21T00:00:00Z",
                "senderPoints": 40,
                "receiverPoints": 40,
                "senderNanoTasks": 4,
                "receiverNanoTasks": 4,
                "winner": "DRAW",
                "status": 3
            },
            {
                "id": "5f5f4d277198ea000196caf4",
                "sender": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": true,
                    "points": 80
                },
                "receiver": {
                    "id": "5f52127ee0900f0001d0eb01",
                    "name": "Rizwan Sardar",
                    "imgUrl": "https://media.nanodot.us/nano/local/user/5f52127ee0900f0001d0eb01/cover/userUpload5f52127ee0900f0001d0eb017391912001112399355.jpg",
                    "winner": false,
                    "points": 0
                },
                "invitationSent": "2020-09-14T10:59:51Z",
                "acceptTime": "2020-09-22T10:20:03Z",
                "startDate": "2020-09-22T00:00:00Z",
                "endDate": "2020-09-29T00:00:00Z",
                "senderPoints": 80,
                "receiverPoints": 0,
                "senderNanoTasks": 8,
                "receiverNanoTasks": 0,
                "winner": "5da5a6a9306c2e0001ba6f45",
                "status": 3
            },
            {
                "id": "5f7dc8ee5e60ca000103c556",
                "sender": {
                    "id": "5f7d7f735e60ca000103c51e",
                    "name": "Jolly",
                    "imgUrl": "https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg",
                    "winner": true,
                    "points": 190
                },
                "receiver": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": false,
                    "points": 0
                },
                "invitationSent": "2020-10-07T13:55:58Z",
                "acceptTime": "2020-10-08T11:09:06Z",
                "startDate": "2020-10-08T00:00:00Z",
                "endDate": "2020-10-15T00:00:00Z",
                "senderPoints": 190,
                "receiverPoints": 0,
                "senderNanoTasks": 19,
                "receiverNanoTasks": 0,
                "winner": "5f7d7f735e60ca000103c51e",
                "status": 3
            },
            {
                "id": "5f981f6d3134500001725687",
                "sender": {
                    "id": "5f7d7f735e60ca000103c51e",
                    "name": "Jolly",
                    "imgUrl": "https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg",
                    "winner": true,
                    "points": 230
                },
                "receiver": {
                    "id": "5da5a6a9306c2e0001ba6f45",
                    "name": "M.Rizwan",
                    "imgUrl": "https://media.nanodot.us/nano/local/nanotask/476c0475-ec63-0197-5383-a16b6dc2654f/profile-image-76b4cdee.jpg",
                    "winner": false,
                    "points": 0
                },
                "invitationSent": "2020-10-27T13:23:57Z",
                "acceptTime": "2020-10-28T11:49:09Z",
                "startDate": "2020-10-28T00:00:00Z",
                "endDate": "2020-11-04T00:00:00Z",
                "senderPoints": 230,
                "receiverPoints": 0,
                "senderNanoTasks": 23,
                "receiverNanoTasks": 0,
                "winner": "5f7d7f735e60ca000103c51e",
                "status": 3
            },
            {
                "id": "5fd76b093c75ff0001c4dfe3",
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
                    "winner": true,
                    "points": 10
                },
                "invitationSent": "2020-12-14T13:39:21Z",
                "acceptTime": "2021-02-18T08:28:19Z",
                "startDate": "2021-02-18T00:00:00Z",
                "endDate": "2021-02-25T00:00:00Z",
                "senderPoints": 0,
                "receiverPoints": 10,
                "senderNanoTasks": 0,
                "receiverNanoTasks": 1,
                "winner": "5da5a6a9306c2e0001ba6f45",
                "status": 3
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
                                    uri="https://media.nanodot.us/img/stars-big.svg"
                                    style={[styles.pointsSenderStar,{position:"absolute",top:-1,left:-2,zIndex:1}]}
                                />
                            )}
                            <Image
                                source={{uri: item.sender.imgUrl}}
                                style={styles.otherUserImg}
                            />
                        </View>
                        <View style={{flex:0.6,flexDirection:"column",marginLeft:5}}>
                            <Text style={{fontSize:14,marginTop:2,fontFamily:"FiraSans-Bold",}} numberOfLines={1}>{item.sender.name}</Text>
                            <View style={[styles.pointsStyle,{flexDirection:"row"}]}>
                                <Text style={{fontSize:18,fontFamily:"FiraSans-Regular",}}>+{item.sender.points}</Text>
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
                    <Text style={[styles.vsTimeHeadding,{marginTop:0}]}>Vs</Text>
                    {item.winner != 'DRAW'?item.winner != userId?
                        <View style={[styles.timeBox,{flexDirection:"row",backgroundColor:"#E1E1E1",borderWidth:1,borderColor:"#E1E1E1",borderRadius:15,paddingTop:5,paddingBottom:5,paddingLeft:20,paddingRight:20,}]}>
                            <Text style={[styles.lostTxt,{color:"#7B7B7B",textAlignVertical: "center"}]}>LOST</Text>
                        </View>
                    :
                        <View style={[styles.timeBox,{flexDirection:"row",backgroundColor:"#2AA39A",borderWidth:1,borderColor:"#2AA39A",borderRadius:15,paddingTop:5,paddingBottom:5,paddingLeft:20,paddingRight:20,}]}>
                            <Text style={[styles.wonTxt,{color:"#FFFFFF",textAlignVertical: "center"}]}>WON</Text>
                        </View>
                    :
                        <View style={[styles.timeBox,{flexDirection:"row",backgroundColor:"#2AA39A",borderWidth:1,borderColor:"#2AA39A",borderRadius:15,paddingTop:5,paddingBottom:5,paddingLeft:20,paddingRight:20,}]}>
                            <Text style={[styles.wonTxt,{color:"#FFFFFF",textAlignVertical: "center"}]}>DRAW</Text>
                        </View>
                    }
                </View>
                <View style={[styles.pointsBoxInner,{flex:0.5}]}>
                    <View style={styles.pointsWithImage}>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <View style={{flex:0.6,flexDirection:"column",marginRight:5}}>
                                <Text style={{fontSize:14,marginTop:2,fontFamily:"FiraSans-Bold",}} numberOfLines={1}>{item.receiver.name}</Text>
                                <View style={[styles.pointsStyle,{flexDirection:"row"}]}>
                                    <Text style={{fontSize:18,fontFamily:"FiraSans-Regular",}}>+{item.receiver.points}</Text>
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
                                    style={[styles.userImage]}
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
            {index+1 <= completed.data.length -1 && (
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
                        <View style={styles.listBox}>
                            <FlatList
                                data={completed.data}
                                renderItem={_renderItem}
                                keyExtractor={(item,index) => index.toString()}
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
    listBox:{
        flex: 1,
        flexDirection:"column",
        margin:15,
    },
    userImage:{
        width: 50, 
        height: 50,
        borderRadius:50,
    },
    senderImage:{
        top:20,
        left:20,
    },
    receiverImage:{
        top:55,
        left:-12,
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
    lostTxt:{
        fontSize:9,
        fontFamily:"FiraSans-Regular",
    },
    wonTxt:{
        fontSize:9,
        fontFamily:"FiraSans-Regular",
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
        flexDirection:"row",
    },
    otherUserImg:{
        width:50,
        height:50,
        borderRadius:50,
    }
    
    
});
export default Completed;