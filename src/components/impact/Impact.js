import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  LogBox,
  TouchableOpacity,
} from 'react-native';

import {SvgCssUri} from 'react-native-svg/css';
import {Icon} from '../Icons/icons';
import TaskGoal from './TaskGoal';
import FunFacts from './FunFacts';
import {ProgressBar} from 'react-native-paper';

class Impact extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    currentCity:"Karachi",
    measurements:25,
    myTons:"7.188",
    myImpact:{
      "status": 200,
      "msg": "MyImpact",
      "data": {
          "id": "5ca5f19d8459dc00013ea63c",
          "name": "mak",
          "imgUrl": "https://media.nanodot.us/nano/local/user/5ca5f19d8459dc00013ea63c/cover/userUpload5ca5f19d8459dc00013ea63c7723746154407370364.jpg",
          "myImpact": 17306.457383664,
          "weeklyTaskCompleted": 0,
          "weeklyTaskRequired": 10,
          "weeklyTaskPercent": 0,
          "globalImpact": 1.5911297034232268,
          "nanoTaskPercent": 8.0,
          "communityNanoTaskPercent": 9.0,
          "globalNanoTaskCompleted": 743,
          "globalCommunityNanoTaskCompleted": 502,
          "completedNanotask": 60,
          "completedCommunityTask": 47,
          "currentBadge": {
              "id": "5d148361e2650c000128911d",
              "title": "Garbage guru",
              "achievementMsg": "Complete 3 nano tasks.",
              "imgURL": "https://s3.amazonaws.com/nanodotapp/nano/local/Achievements/active/imageFile-519cf653",
              "status": 0,
              "type": 0,
              "requires": 2
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
                  "dailygoal": 1,
                  "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/TRASHPICKUP/trash-39c8ed2a.svg"
              },
              {
                  "total": 0,
                  "type": "RECYCLE",
                  "rejected": 0,
                  "approve": 0,
                  "pending": 0,
                  "systemRejected": 0,
                  "impact": 0.0,
                  "dailygoal": 1,
                  "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/RECYCLE/recycle-34751365.svg"
              },
              {
                  "total": 0,
                  "type": "WATERREFILL",
                  "rejected": 0,
                  "approve": 0,
                  "pending": 0,
                  "systemRejected": 0,
                  "impact": 0.0,
                  "dailygoal": 1,
                  "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/WATERREFILL/waterfill-58cadec6.svg"
              },
              {
                  "total": 0,
                  "type": "TREEPLANTING",
                  "rejected": 0,
                  "approve": 0,
                  "pending": 0,
                  "systemRejected": 0,
                  "impact": 0.0,
                  "dailygoal": 1,
                  "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/TREEPLANTING/treeplant-6f32f495.svg"
              },
              {
                  "total": 0,
                  "type": "Commute",
                  "rejected": 0,
                  "approve": 0,
                  "pending": 0,
                  "systemRejected": 0,
                  "impact": 0.0,
                  "dailygoal": 1,
                  "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/Commute/Commute_icon-5a4b30e2.svg"
              },
              {
                  "total": 0,
                  "type": "CoffeeRefill",
                  "rejected": 0,
                  "approve": 0,
                  "pending": 0,
                  "systemRejected": 0,
                  "impact": 0.0,
                  "dailygoal": 1,
                  "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/CoffeeRefill/coffee-f50506a3.svg"
              },
              {
                  "total": 0,
                  "type": "PhantomEnergy",
                  "rejected": 0,
                  "approve": 0,
                  "pending": 0,
                  "systemRejected": 0,
                  "impact": 0.0,
                  "dailygoal": 1,
                  "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/PhantomEnergy/EcoLight@3x-17eb6f3b.png"
              },
              {
                  "total": 0,
                  "type": "PlantBased",
                  "rejected": 0,
                  "approve": 0,
                  "pending": 0,
                  "systemRejected": 0,
                  "impact": 0.0,
                  "dailygoal": 1,
                  "logo": "https://media.nanodot.us/nano/local/thumbnails/nanotask/PlantBased/PlantBased-2840f9df.png"
              }
          ],
          "funfacts": [
              {
                  "id": "5d247b1036b2cb0001f2aac5",
                  "priority": 5,
                  "text": "Sea turtles can stay underwater for up to 5 hours. Let's make sure its clean water!",
                  "factType": 2,
                  "imageUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/fact/SeaTurtle_White-2b739a89.gif",
                  "created": "2019-07-12T05:57:14.500+0000"
              },
              {
                  "id": "5f33f85d5877160001412142",
                  "priority": 5,
                  "text": "Recycling one aluminum can saves enough energy to run a TV for three hours.",
                  "factType": 2,
                  "imageUrl": "https://media.nanodot.us/nano/local/fact/aluminum-can-9d8736b4.jpeg",
                  "created": "2020-08-12T14:14:29.265+0000"
              },
              {
                  "id": "5f4e729da57eff0001541abd",
                  "priority": 5,
                  "text": "We consume over 80 trillion aluminum cans every year.",
                  "factType": 2,
                  "imageUrl": "https://media.nanodot.us/nano/local/fact/Cans-72876959.jpg",
                  "created": "2020-09-01T16:11:09.286+0000"
              },
              {
                  "id": "5f4e72c4a57eff0001541abe",
                  "priority": 5,
                  "text": "The world's tallest tree is a coast redwood in California, measuring more than 360 feet or 110 meters.",
                  "factType": 2,
                  "imageUrl": "https://media.nanodot.us/nano/local/fact/Tallest-Tree-1e094145.jpg",
                  "created": "2020-09-01T16:11:48.998+0000"
              }
          ],
          "sciencefacts": [
              {
                  "id": "5d281fb7a7b6ee00010763b3",
                  "priority": 10,
                  "text": "Nano is committed to empowering users and || Reducing Carbon Emissions || by creating simple and doable tasks! ",
                  "factType": 1,
                  "created": "2019-07-12T05:52:23.843+0000"
              },
              {
                  "id": "5d241e7a6105a600011b4b46",
                  "priority": 9,
                  "text": "Last month Nano’s community removed an equivalent of  || 500 cars from the road || That's a lot of cars! ",
                  "factType": 1,
                  "created": "2019-07-12T05:52:56.283+0000"
              }
          ],
          "friends": [
              {
                  "id": "5f7d7f735e60ca000103c51e",
                  "name": "Jolly",
                  "imgUrl": "https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg",
                  "completedNanotask": 115,
                  "completedCommunityTask": 52
              },
              {
                  "id": "5f6a03be7198ea000196cb6a",
                  "name": "Christine Böhmer ",
                  "imgUrl": "https://media.nanodot.us/nano/local/user/5f6a03be7198ea000196cb6a/cover/userUpload5f6a03be7198ea000196cb6a987089308427793044.jpg",
                  "completedNanotask": 74,
                  "completedCommunityTask": 44
              },
              {
                  "id": "5f7d81535e60ca000103c51f",
                  "name": "Fee Zeilinger",
                  "imgUrl": "https://media.nanodot.us/nano/local/user/5f7d81535e60ca000103c51f/cover/userUpload5f7d81535e60ca000103c51f1239001191531396407.jpg",
                  "completedNanotask": 69,
                  "completedCommunityTask": 35
              },
              {
                  "id": "5f7b261303112e0001feda8d",
                  "name": "Axel",
                  "imgUrl": "https://media.nanodot.us/nano/local/user/5f7b261303112e0001feda8d/cover/userUpload5f7b261303112e0001feda8d1784522078229775416.jpg",
                  "completedNanotask": 57,
                  "completedCommunityTask": 44
              },
              {
                  "id": "5c9df4887e349e0001335a95",
                  "name": "Mark Terry",
                  "imgUrl": "https://graph.facebook.com/10157048947663609/picture?type=large",
                  "completedNanotask": 41,
                  "completedCommunityTask": 27
              },
              {
                  "id": "5d2745b9a7b6ee0001076395",
                  "name": "Hassan Mohiuddin",
                  "imgUrl": "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
                  "completedNanotask": 31,
                  "completedCommunityTask": 20
              },
              {
                  "id": "5c9df5e37e349e0001335a98",
                  "name": "Alexander Terry",
                  "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/user/5c9df5e37e349e0001335a98/cover/userUpload5c9df5e37e349e0001335a987636787323445854350.jpg",
                  "completedNanotask": 16,
                  "completedCommunityTask": 16
              },
              {
                  "id": "5e57f9cb303f5300015f915c",
                  "name": "Syed Abbas",
                  "imgUrl": "https://graph.facebook.com/10220825645900601/picture?type=large",
                  "completedNanotask": 16,
                  "completedCommunityTask": 4
              },
              {
                  "id": "5c9dad7d7e349e0001335a83",
                  "name": "Farrukh Ismail",
                  "imgUrl": "https://media.nanodot.us/nano/local/user/5c9dad7d7e349e0001335a83/cover/userUpload5c9dad7d7e349e0001335a836403151137005345821.jpg",
                  "completedNanotask": 15,
                  "completedCommunityTask": 8
              },
              {
                  "id": "5f6a00a57198ea000196cb60",
                  "name": "Patrick",
                  "imgUrl": "https://media.nanodot.us/nano/local/user/5f6a00a57198ea000196cb60/cover/userUpload5f6a00a57198ea000196cb607124537509702868623.jpg",
                  "completedNanotask": 10,
                  "completedCommunityTask": 9
              },
              {
                  "id": "5d36f29d604e470001b75941",
                  "name": "Huzaifa A",
                  "imgUrl": "https://media.nanodot.us/nano/stage/default/User.png",
                  "completedNanotask": 9,
                  "completedCommunityTask": 9
              },
              {
                  "id": "5d134c053cd3040001863277",
                  "name": "HuzaifaTestAlpha",
                  "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                  "completedNanotask": 8,
                  "completedCommunityTask": 8
              },
              {
                  "id": "5f6a03fd7198ea000196cb6b",
                  "name": "AntjeSusan",
                  "imgUrl": "https://media.nanodot.us/nano/local/user/5f6a03fd7198ea000196cb6b/cover/userUpload5f6a03fd7198ea000196cb6b2039285067624450138.jpg",
                  "completedNanotask": 6,
                  "completedCommunityTask": 5
              },
              {
                  "id": "5f71b4037198ea000196cb9c",
                  "name": "Laurita",
                  "imgUrl": "https://media.nanodot.us/nano/local/user/5f71b4037198ea000196cb9c/cover/userUpload5f71b4037198ea000196cb9c6520631390985017806.jpg",
                  "completedNanotask": 4,
                  "completedCommunityTask": 3
              },
              {
                  "id": "5cb22a7c6130b300017ae699",
                  "name": "Yagottawanna",
                  "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/user/5cb22a7c6130b300017ae699/cover/userUpload5cb22a7c6130b300017ae6996993321560670190030.jpg",
                  "completedNanotask": 2,
                  "completedCommunityTask": 2
              },
              {
                  "id": "5f7b2acb03112e0001feda94",
                  "name": "Steven",
                  "imgUrl": "https://media.nanodot.us/nano/local/user/5f7b2acb03112e0001feda94/cover/userUpload5f7b2acb03112e0001feda945934120572096650078.jpg",
                  "completedNanotask": 1,
                  "completedCommunityTask": 0
              },
              {
                  "id": "5f73347f7198ea000196cbb3",
                  "name": "Kattrin",
                  "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                  "completedNanotask": 1,
                  "completedCommunityTask": 0
              }
          ],
          "totalCarbonfootprint": 7.206930933750497
      }
    }
  };
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested inside']);
  }
  
  render() {
    const impact = this.state.myImpact.data;
    const myTons = this.state.myTons;
    const currentCity = this.state.currentCity;
    const measurements = this.state.measurements;
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#FF5A60" />
        <ScrollView>
          <SafeAreaView style={[styles.container]} backgroundColor="white">
            <View style={styles.BG}>
              <View style={styles.topContent}>
                <View style={styles.userImageBox}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Profile')}>
                    <Image
                      source={{uri: impact.imgUrl}}
                      style={[styles.userImage]}
                    />
                  </TouchableOpacity>
                  <Text style={styles.userTxt}>{impact.name}</Text>
                  <View style={{flex:1,flexDirection:"row"}}>
                    <View style={{flexDirection:"row",marginLeft:5}}>
                      <View style={{flexDirection:"row",paddingTop:3}}>
                        <Text style={{color:"#BBBBBB",fontSize:12,fontFamily:"FiraSans-Regular"}}>Your Location </Text>
                        <Image
                          source={{uri:"https://media.nanodot.us/img/arrowIcon.png"}}
                          style={{width:12,height:12,marginTop:4}}
                        />
                      </View>
                      <Text style={{color:"#203541",fontSize:18,fontFamily:"FiraSans-Regular",marginLeft:5}}>{currentCity}</Text>
                    </View>
                    <View style={{marginLeft:5}}>
                      {measurements < 25 && (
                        <Text style={[styles.measurementsTxt,{backgroundColor:"#0b75a9"}]}>Good </Text>
                      )}
                      {measurements > 24 && (
                        measurements < 50 && (
                          <Text style={[styles.measurementsTxt,{backgroundColor:"#2AA39A"}]}>Moderate </Text>
                        )
                      )}
                      {measurements > 49 && (
                        measurements < 74 && (
                          <Text style={[styles.measurementsTxt,{backgroundColor:"#f36d3c"}]}>Unhealthy </Text>
                        )
                      )}
                      {measurements > 73 && (
                        measurements < 99 && (
                          <Text style={[styles.measurementsTxt,{backgroundColor:"#d93127"}]}>Very Unhealthy </Text>
                        )
                      )}
                      {measurements > 98 && (
                        <Text style={[styles.measurementsTxt,{backgroundColor:"#98004b"}]}>Hazardous </Text>
                      )}
                    </View>
                    <View style={{marginLeft:5}}>
                      <Image
                        source={{uri:"https://media.nanodot.us/img/airIcon.png"}}
                        style={{width:12,height:12,marginRight:5,marginTop:8}}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.carbonEmission}>
                  <View style={{flex: 0.3, left: 0}}>
                    <SvgCssUri
                      width="60"
                      height="60"
                      uri="https://media.nanodot.us/img/impact/cologo.svg"
                      style={styles.cologo}
                    />
                  </View>
                  <View style={{flex: 0.7, right: 0}}>
                    <Text style={styles.carbonNumber}>{impact.myImpact.toFixed(3)}</Text>
                    <Text style={styles.carbonTxt}>Grams of avoided carbon emissions</Text>
                  </View>
                </View>
                <View style={[styles.carbonEmission, {marginTop: 10}]}>
                  <View style={{flex: 1}}>
                    <Text style={styles.footPrintNumb}>{myTons}</Text>
                    <Text style={styles.footPrintTxt}>Tons To Go to reduce your carbon footprint</Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TaskGoal impact={impact}/>
              </View>
              <View style={[styles.taskContent, {marginTop: 0}]}>
                <Text style={{flex: 1, flexDirection: 'row', fontSize: 15,fontFamily:"FiraSans-Bold",paddingTop:5}}>Tasks</Text>
                <View
                  style={[
                    {
                      flex: 1,
                      flexDirection: 'column',
                      marginTop: 20,
                      marginBottom: 10,
                    },
                  ]}>
                    {impact.taskActivity.map((item, index)=>(
                      <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}} key={index}>
                        <View style={[{flex: 0.3}]}>
                          <Icon
                            url={item.logo}
                            height={55}
                            width={55}
                            style={[{width:55,height:55,borderRadius:50}]}
                            dontShowMask={true}
                          />
                        </View>
                        <View style={[{flex: 0.9}]}>
                          <Text style={[styles['fontColor'+index],{fontFamily:"FiraSans-Regular",fontSize:14}]}>#{item.type}</Text>
                          <ProgressBar
                            progress={(item.approve/item.dailygoal*100) >100?1:(item.approve/item.dailygoal*100) == 0 ? 0.01 : (item.approve/item.dailygoal*100)}
                            color={styles['activityCard'+index].color}
                            height={10}
                            style={{borderRadius: 5, backgroundColor: '#F4F4F4', height: 16,color:"#DC59A7"}}
                          />
                        </View>
                        <View style={[{flex: 0.2}]}>
                          <Text style={{textAlign: 'center', top: 18,fontFamily:"FiraSans-Regular",fontSize:14}}>{item.approve+"/"+item.dailygoal}</Text>
                        </View>
                      </View>
                    ))}
                </View>
              </View>
              <Text style={styles.funFacts}>Fun Facts</Text>
              <View style={{flexDirection: 'row', marginBottom: 20}}>
                <FunFacts impact={impact.funfacts}/>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  BG: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  topContent: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: 20,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 0,
  },
  userImageBox: {
    alignItems: 'center',
    //backgroundColor: "#000000",
  },
  userImage: {
    width: 120,
    height: 120,
    borderRadius: 65,
  },
  userTxt: {
    color: '#203541',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 15,
    fontFamily: "FiraSans-Bold",
  },
  carbonEmission: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    //backgroundColor: "green",
    minHeight: '10%',
    color: '#2AA39A',
    borderRadius: 20,
    margin: 20,
    padding: 15,
  },
  cologo:{
    marginTop:15,
  },
  carbonNumber: {
    color: '#2AA39A',
    fontSize: 40,
    right: 0,
    textAlign: 'right',
    fontFamily:"FiraSans-Bold",
  },
  carbonTxt: {
    color: '#A2A2A2',
    fontSize: 14,
    textAlign: 'right',
    top: 5,
    fontFamily:"FiraSans-Medium",
  },
  footPrintNumb: {
    color: '#FF5A5E',
    fontSize: 40,
    right: 0,
    textAlign: 'right',
    fontFamily:"FiraSans-Bold",
  },
  footPrintTxt: {
    color: '#A2A2A2',
    fontSize: 14,
    textAlign: 'right',
    top: 5,
    fontFamily:"FiraSans-Medium",
  },
  taskContent: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
  },
  funFacts: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontFamily:"FiraSans-Bold",
  },
  measurementsTxt:{
    fontFamily:"FiraSans-Regular",
    color:"#fff",
    borderRadius:20,
    fontSize:10,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:20,
    paddingRight:20,
    marginTop:2,
  },
  fontColor0:{
    color: '#F4597C' ,
  },
  fontColor1:{
    color: '#E256A9' ,
  },
  fontColor2:{
    color: '#FF7479' ,
  },
  fontColor3:{
    color: '#69CCB3' ,
  },
  fontColor4:{
    color: '#F4597C' ,
  },
  fontColor5:{
    color: '#E256A9' ,
  },
  fontColor6:{
    color: '#FF7479' ,
  },
  fontColor7:{
    color: '#69CCB3' ,
  },
  fontColor8:{
    color: '#F4597C' ,
  },
  fontColor9:{
    color: '#E256A9' ,
  },
  fontColor10:{
    color: '#FF7479' ,
  },
  fontColor11:{
    color: '#69CCB3' ,
  },
  fontColor12:{
    color: '#F4597C' ,
  },
  fontColor13:{
    color: '#E256A9' ,
  },
  fontColor14:{
    color: '#FF7479' ,
  },
  fontColor15:{
    color: '#69CCB3' ,
  },
  fontColor16:{
    color: '#FF5A60' ,
  },
  activityCard0: {
      color: '#F4597C' ,
  },
  activityCard1: {
      color: '#E256A9' ,
  },
  activityCard2: {
      color: '#FF7479' ,
  },
  activityCard3: {
      color: '#69CCB3' ,
  },
  activityCard4: {
      color: '#F4597C' ,
  },
  activityCard5: {
      color: '#E256A9' ,
  },
  activityCard6: {
      color: '#FF7479' ,
  },
  activityCard7: {
      color: '#69CCB3' ,
  },
  activityCard8: {
      color: '#F4597C' ,
  },
  activityCard9: {
      color: '#E256A9' ,
  },
  activityCard10: {
      color: '#FF7479' ,
  },
  activityCard11: {
      color: '#69CCB3' ,
  },
  activityCard12: {
      color: '#F4597C' ,
  },
  activityCard13: {
      color: '#E256A9' ,
  },
  activityCard14: {
      color: '#FF7479' ,
  },
  activityCard15: {
      color: '#69CCB3' ,
  },
  activityCard16: {
      color: '#FF5A60' ,
  },
});
export default Impact;

// shadowColor: "#000",
// shadowOffset: {
//     width: 0,
//     height: 2,
// },
// shadowOpacity: 0.25,
// shadowRadius: 3.84,

// elevation: 5,
