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

class Blocked extends Component{
    
    constructor(props) {
        super(props);
    }
    state = {
        blockedUsers:{
            "status": 200,
            "msg": "List of BlockedUsers",
            "data": [
                {
                    "id": "5f7d7f735e60ca000103c51e",
                    "fbId": "",
                    "profilepic": "https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg",
                    "userName": "Jolly",
                    "uuid": "75a7ee31-d058-9434-cd97-cb09f68cada8",
                    "points": 2340,
                    "level": 2,
                    "nanotaskCount": 127,
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
                    "followers": [
                        "5d2745b9a7b6ee0001076395",
                        "5fa90ad5fbd64c0001851884",
                        "5ca5f19d8459dc00013ea63c",
                        "5cb05dc450322d0001d687e2",
                        "5ff59d83fe76950001b44863",
                        "5e170bc8b5df7a0001f1d827",
                        "5da5a6a9306c2e0001ba6f45"
                    ],
                    "following": [
                        "5da01a3cb0e20a0001a92058",
                        "5e170bc8b5df7a0001f1d827",
                        "5f52127ee0900f0001d0eb01",
                        "5da5a6a9306c2e0001ba6f45",
                        "5d2745b9a7b6ee0001076395",
                        "5caf1a8050322d0001d687d4",
                        "5fa90ad5fbd64c0001851884",
                        "5cb05dc450322d0001d687e2",
                        "5e6a4e35547e8f000122942c",
                        "5fa5309a64cb830001891730",
                        "5ff59d83fe76950001b44863",
                        "5ddf707ab7c7aa00016f5cdc",
                        "5ddf70f2b7c7aa00016f5cdf",
                        "5c9dad7d7e349e0001335a83",
                        "5ca5f19d8459dc00013ea63c"
                    ],
                    "blockedUsers": [],
                    "blockedPost": [
                        "5fd213f8ed9f9f000102cf07",
                        "604f622eed9f9f000102cfba"
                    ],
                    "communtyAdmin": [],
                    "achievements": [
                        "5d148322e2650c000128911c"
                    ],
                    "createdOn": "2020-10-07T08:47:37.686+0000",
                    "weeklyTaskRemaining": 0,
                    "lastNotificationRead": "2021-03-19T11:20:20.564+0000",
                    "teamId": "5fb2451738914300016cd9c0",
                    "lastWarnedDate": "2021-03-18T12:25:01.474+0000",
                    "warningStatus": true,
                    "status": 0,
                    "lat": 24.8784733,
                    "lng": 67.06424319999999,
                    "location": "No Location Found",
                    "bio": "Social worker",
                    "email": "jolly@yahoo.com",
                    "pwd": "Rizwan",
                    "role": "ROLE_USER",
                    "deviceToken": "null",
                    "pushNotification": true,
                    "platform": "android",
                    "dob": "1990-10",
                    "actviceChampionship": {
                        "id": "5fb2465c38914300016cd9c2",
                        "title": "2cimple ",
                        "description": "2cimple Championship",
                        "communityId": "5fb243b938914300016cd9bd",
                        "teamIds": [
                            "5fb245a838914300016cd9c1",
                            "5fb2451738914300016cd9c0",
                            "5fb244cd38914300016cd9be",
                            "5fb244ec38914300016cd9bf"
                        ],
                        "nanoTaskIds": [
                            "5c98971bb3ddaa0001a2a6aa",
                            "5c9897d7b3ddaa0001a2a6ab",
                            "5c9db5957e349e0001335a85",
                            "5dd7b97848b4d400017f9ed8",
                            "5e301701575a5e000135580c",
                            "5f31216a587716000141211c",
                            "5f329f455877160001412129",
                            "5f8f46829aad08000184b4bd",
                            "5f984d39c86a9100016dccde"
                        ],
                        "taskIncentiveIds": [],
                        "seasons": [],
                        "status": 1,
                        "individual": false,
                        "event": true,
                        "imageUrl": "https://media.nanodot.us/nano/local/community/2cimple-Championship/01--05648086.jpg",
                        "startDate": "2020-11-16T00:00:00.000+0000",
                        "endDate": "2021-11-16T00:00:00.000+0000",
                        "participantCount": 10,
                        "uploads": 0,
                        "privateChampionship": false,
                        "usersAllowed": [],
                        "code": "",
                        "playerLimit": 0
                    },
                    "previousChampionships": [
                        "5fa42c89a31d480001a5c3eb",
                        "5fa42c89a31d480001a5c3eb",
                        "5fa2905f66d9380001140067",
                        "5fa42c89a31d480001a5c3eb",
                        "5fa2905f66d9380001140067",
                        "5fa42c89a31d480001a5c3eb",
                        "5fa2905f66d9380001140067",
                        "5fa42c89a31d480001a5c3eb",
                        "5fa2905f66d9380001140067",
                        "5fa42c89a31d480001a5c3eb",
                        "5fb262db38914300016cd9c6",
                        "5fb262db38914300016cd9c6",
                        "5fce0b904636bc0001d03526",
                        "5fa42c89a31d480001a5c3eb",
                        "5fb2465c38914300016cd9c2",
                        "5fb2465c38914300016cd9c2",
                        "5fb2465c38914300016cd9c2",
                        "5fb2465c38914300016cd9c2",
                        "5fb2465c38914300016cd9c2",
                        "5fa2905f66d9380001140067",
                        "5fa2905f66d9380001140067",
                        "5fb266c738914300016cd9cf",
                        "5fb266c738914300016cd9cf",
                        "5f69ba507198ea000196cb39",
                        "5fb2465c38914300016cd9c2",
                        "5fb2465c38914300016cd9c2",
                        "5f69ba507198ea000196cb39",
                        "5f69ba507198ea000196cb39",
                        "5f69ba507198ea000196cb39",
                        "5f69ba507198ea000196cb39",
                        "5fa2905f66d9380001140067",
                        "5fa2905f66d9380001140067",
                        "6042257ada41bb0001414227",
                        "6042257ada41bb0001414227",
                        "6042257ada41bb0001414227",
                        "5fce0b904636bc0001d03526",
                        "5fa2905f66d9380001140067",
                        "5f69ba507198ea000196cb39",
                        "5fb2465c38914300016cd9c2"
                    ],
                    "totalCarbonfootprint": 2.4621607599323934,
                    "carbonfootprint": [
                        {
                            "carbonfootprintId": "5ef2417ef28c510001afbc0b",
                            "quantity": 20.0,
                            "unit": {
                                "unit": "kWh",
                                "factor": 0.39,
                                "conversionRate": 1.0,
                                "type": 12.0
                            },
                            "emission": 93.60000000000001
                        },
                            {
                                "carbonfootprintId": "5ef241aef28c510001afbc0c",
                                "quantity": 30.0,
                                "unit": {
                                "unit": "Ccf",
                                "factor": 2.09672,
                                "conversionRate": 2.832,
                                "type": 12.0
                            },
                            "emission": 2137.6479744
                        },
                        {
                            "carbonfootprintId": "5ef243edf28c510001afbc19",
                            "quantity": 50.0,
                            "unit": {
                                "unit": "gallon(s)",
                                "factor": 1.052,
                                "conversionRate": 0.00378541,
                                "type": 12.0
                            },
                            "emission": 2.389350792
                        },
                        {
                            "carbonfootprintId": "5ef2426ef28c510001afbc11",
                            "quantity": 0.0,
                            "unit": {
                                "unit": "miles",
                                "factor": 0.1949,
                                "conversionRate": 1.609344,
                                "type": 365.0
                            },
                            "emission": 0.0
                        },
                        {
                            "carbonfootprintId": "5ef242a0f28c510001afbc12",
                            "quantity": 0.0,
                            "unit": {
                                "unit": "mile(s)",
                                "factor": 0.11662,
                                "conversionRate": 1.609344,
                                "type": 365.0
                            },
                            "emission": 0.0
                        },
                        {
                            "carbonfootprintId": "5ef242c6f28c510001afbc13",
                            "quantity": 0.0,
                            "unit": {
                                "unit": "mile(s)",
                                "factor": 0.04678,
                                "conversionRate": 1.609344,
                                "type": 365.0
                            },
                            "emission": 0.0
                        },
                        {
                            "carbonfootprintId": "5ef242e7f28c510001afbc14",
                            "quantity": 0.0,
                            "unit": {
                                "unit": "mile(s)",
                                "factor": 0.12259,
                                "conversionRate": 1.609344,
                                "type": 365.0
                            },
                            "emission": 0.0
                        },
                        {
                            "carbonfootprintId": "5ef2437cf28c510001afbc16",
                            "quantity": 0.0,
                            "unit": {
                                "unit": "mile(s)",
                                "factor": 0.21863,
                                "conversionRate": 1.609344,
                                "type": 365.0
                            },
                            "emission": 0.0
                        },
                        {
                            "carbonfootprintId": "5ef2439cf28c510001afbc18",
                            "quantity": 0.0,
                            "unit": {
                                "unit": "mile(s)",
                                "factor": 0.12565,
                                "conversionRate": 1.609344,
                                "type": 12.0
                            },
                            "emission": 0.0
                        },
                        {
                            "carbonfootprintId": "5f04917458771600014120fc",
                            "quantity": 0.0,
                            "unit": {
                                "unit": "mile(s)",
                                "factor": 0.08378,
                                "conversionRate": 1.609344,
                                "type": 12.0
                            },
                            "emission": 0.0
                        },
                        {
                            "carbonfootprintId": "5ef24461f28c510001afbc1a",
                            "quantity": 0.0,
                            "unit": {
                                "unit": "lbs",
                                "factor": 0.5889,
                                "conversionRate": 0.453592,
                                "type": 12.0
                            },
                            "emission": 0.0
                        },
                        {
                            "carbonfootprintId": "5ef24472f28c510001afbc1b",
                            "quantity": 0.0,
                            "unit": {
                                "unit": "lbs",
                                "factor": 0.0218,
                                "conversionRate": 0.453592,
                                "type": 12.0
                            },
                            "emission": 0.0
                        },
                        {
                            "carbonfootprintId": "5ef2448bf28c510001afbc1c",
                            "quantity": 0.0,
                            "unit": {
                                "unit": "lbs",
                                "factor": 0.021,
                                "conversionRate": 0.453592,
                                "type": 12.0
                            },
                            "emission": 0.0
                        },
                        {
                            "carbonfootprintId": "5ef2449af28c510001afbc1d",
                            "quantity": 0.0,
                            "unit": {
                                "unit": "lbs",
                                "factor": 0.0218,
                                "conversionRate": 0.453592,
                                "type": 12.0
                            },
                            "emission": 0.0
                        },
                        {
                            "carbonfootprintId": "5ef244c0f28c510001afbc1e",
                            "quantity": 0.0,
                            "unit": {
                                "unit": "Pcs",
                                "factor": 0.19,
                                "conversionRate": 1.0,
                                "type": 365.0
                            },
                            "emission": 0.0
                        },
                        {
                            "carbonfootprintId": "5ef244e6f28c510001afbc1f",
                            "quantity": 0.0,
                            "unit": {
                                "unit": "Pcs",
                                "factor": 1.4E-5,
                                "conversionRate": 1.0,
                                "type": 365.0
                            },
                            "emission": 0.0
                        },
                        {
                            "carbonfootprintId": "5ef24501f28c510001afbc20",
                            "quantity": 0.0,
                            "unit": {
                                "unit": "Pcs",
                                "factor": 0.004,
                                "conversionRate": 1.0,
                                "type": 365.0
                            },
                            "emission": 0.0
                        },
                        {
                            "carbonfootprintId": "5ef24524f28c510001afbc21",
                            "quantity": 0.0,
                            "unit": {
                                "unit": "Pcs",
                                "factor": 0.05,
                                "conversionRate": 1.0,
                                "type": 365.0
                            },
                            "emission": 0.0
                        },
                        {
                            "carbonfootprintId": "5ef2469ff28c510001afbc22",
                            "quantity": 0.0,
                            "unit": {
                                "unit": "Pcs",
                                "factor": 3.0E-5,
                                "conversionRate": 1.0,
                                "type": 365.0
                            },
                            "emission": 0.0
                        }
                    ],
                    "language": "en",
                    "measuringUnit": "IMPERIAL",
                    "defaultFootprint": false,
                    "carpoolUser": false
                }
            ]
        }
    };
    componentDidMount() {}

    render() {
        const blockedUsersList = this.state.blockedUsers.data;
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor="#FF5A60"/>
                <ScrollView style={[styles.container]}>
                    <View style={[styles.BG]}>
                        <View style={{flex:1, flexDirection:"column", marginTop:10,paddingBottom:20}}>
                            {blockedUsersList.map((item, index)=>(
                                <View style={{marginTop:10,flex:1,flexDirection:"row"}} key={index}>
                                    <View style={{flex:0.3,alignItems: "center",}}>
                                        <Image
                                            source={{uri: item.profilepic}}
                                            style={[styles.userImage]}
                                        />
                                    </View>
                                    <View style={{flex:0.5}}>
                                        <Text style={[styles.userTxt,{fontSize:18,fontFamily:"FiraSans-Bold"}]}>{item.userName}</Text>
                                    </View>
                                    <View style={{flex:0.2,alignItems: "center",}}>
                                        <TouchableOpacity
                                            style={{}}
                                            //onPress={this.onPress}
                                        >
                                            <Ionicons 
                                                name="checkmark-circle-outline"
                                                size={34} 
                                                color="#FF5A60"
                                                backgroundColor="#FF5A60"
                                                style={{top:15}}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                       </View>
                    </View>
                </ScrollView>
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
        backgroundColor: "#F85B61",
        padding: 5,
        borderRadius: 50,
        height:30,
        width:30,
    },
    userImage: {
        width: 70, 
        height: 45,
    },
    
    
});
export default Blocked;