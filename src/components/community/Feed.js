import React, { Component } from 'react';
import {
    ScrollView, 
    StyleSheet,
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TextInput,
    Switch,
    Modal,
    Animated,
    Image,
    FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {Colors} from '../Colors/colors';
import CFAB from './Fabs';
import {
    PostCommute,
    PostVideo,
    PostImage,
    PostLink,
    PostLiveM3U8,
    postLiveYoutube,
    PostText,
  } from '../feed/feedComponents';
import moment from 'moment';
import {Icon} from '../Icons/icons';
import Achievements from './Achievements';
import Mission from './Mission';
import Followers from './Followers';
import NanoTasks from './NanoTasks';
import Projects from './Projects';

class Feed extends Component{
    constructor(props) {
        super(props);
    }
    state = {
        selectedIndex:0,
        selectedIndex2:0,
        showMore: false,
        CFABPosition:0,
        users:{
            "status": 200,
            "msg": "Post Found",
            "data": [
                {
                    "id": "5d3a3d70441b5d00014fa3d0",
                    "userId": "5d168b41d5834300014f0426",
                    "userName": "24th World Scout Jamboree ",
                    "communityId": "5d168b41d5834300014f0426",
                    "communityName": "24th World Scout Jamboree ",
                    "eventId": 0,
                    "postType": 0,
                    "type": "live",
                    "mediaUrl": "https://d3qw2m96upbbqj.cloudfront.net/out/v1/88d89032beb04907889acc62363a1b13/index.m3u8",
                    "thumbUrl": "https://media.nanodot.us/nano/local/community/livePost/Background-7ab123c0.png",
                    "liked": false,
                    "status": 1,
                    "lat": 0.0,
                    "lng": 0.0,
                    "likes": [],
                    "comments": [],
                    "likesCount": 0,
                    "commentsCount": 0,
                    "created": "2019-07-25T23:38:24.530+0000",
                    "liveFormat": "m3u8",
                    "hashtags": [],
                    "usertags": [],
                    "total": 0
                }
            ]
        },
        userProfile:{
            "status": 200,
            "msg": "Profile Found",
            "data": {
                "isfollowing": false,
            }
        },
        community:{
            "status": 200,
            "msg": "Community Found",
            "data": {
                "id": "5d168b41d5834300014f0426",
                "name": "24th World Scout Jamboree",
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/24th-World-Scout-Jamboree/11665587_510291395789698_20937029673382754_n-be4b620d.jpg",
                "details": "Boy Scouts of America along with Scouts Canada and Asociación de Scouts de México are proud to host the 24th World Scout Jamboree at the Summit Bechtel Reserve in West Virginia.\r\n \r\nThe World Scout Jamboree is above all an educational event that brings together the world’s young people to promote peace and mutual understanding and to develop leadership and life skills. The 24th World Scout Jamboree will feature the hallmarks of past world jamboree programs, such as the Global Development Village, the World Scout Centre, a special sustainability initiative, and the socialization elements that allow participants to make lifelong friends from around the world. Daily life at the jamboree will be filled with adventure, new friendship, and cultural experiences as Scouts meet fellow Scouts from around the world. Situated in the wilds of West Virginia, The Summit Bechtel Reserve is one of the most advanced and sustainable adventure bases for youth in the world.\r\n \r\n\r\nOver 50,000 Scouting youth and leaders from over 133 National Scout Organizations.\r\n",
                "inviteOnly": false,
                "status": 1,
                "nanotasks": 0,
                "projects": 0,
                "activeProjects": 1,
                "logoUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/24th-World-Scout-Jamboree/WSJ-CREST-3X3-NEW2-55d5de49.png",
                "urls": [
                    "https://www.2019wsj.org/"
                ],
                "tracks": [
                    "Good Health & Well-Being",
                    "Quality Education",
                    "Gender Equality",
                    "Clean Water & Sanitation",
                    "Affordable & Clean Energy",
                    "Decent Work & Evonomic Growth",
                    "Industry, Innovation & Infrastructure",
                    "Reduced Inequalities",
                    "Sustainable Cities & Communities",
                    "Responsible Consumption & Production"
                ],
                "admins": [
                    "5c9df4887e349e0001335a95",
                    "5d2745b9a7b6ee0001076395",
                    "5ca1d6cb4734320001c0ee99"
                ],
                "followers": [
                    "5ca5f19d8459dc00013ea63c",
                    "5c9df4887e349e0001335a95",
                    "5c9d9f307e349e0001335a7a",
                    "5c9df5e37e349e0001335a98",
                    "5c9dad7d7e349e0001335a83",
                    "5d156f66cc88a300010f9396",
                    "5d24c9747d1ed100011b6846",
                    "5d2deef2a86655000196ae89",
                    "5d2745b9a7b6ee0001076395",
                    "5d36f29d604e470001b75941",
                    "5d9d9661e88be80001d364fa",
                    "5da01a3cb0e20a0001a92058",
                    "5da5a6a9306c2e0001ba6f45",
                    "5f5b56136d9788000160ee9e"
                ],
                "following": true,
                "autoFollow": false,
                "admin": true
            }
        },
        postData:{
            "status": 200,
            "msg": "Post Found",
            "data": [
                {
                    "id": "5d88ac1a45e6740001784614",
                    "userId": "5d1090feea01400001dc2776",
                    "userName": "Nano",
                    "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                    "communityId": "5d1090feea01400001dc2776",
                    "communityName": "Nano",
                    "eventId": 0,
                    "postType": 10,
                    "type": "link",
                    "title": "Young Pakistan",
                    "description": "🤣🤣",
                    "url": "https://www.facebook.com/TheYoungPakistani/photos/a.10151454980339243/10157528748429243/?type=3&theater",
                    "text": "Sample working link&nbsp;",
                    "mediaUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/70589901_10157528748434243_8456064305379409920_n.jpg?_nc_cat=102&_nc_oc=AQk6-clZvUg2TqbyFEsniculFDniNfseDfiodbtXGC7u06JFgfaB2EkwZWuWDLI48Hc&_nc_ht=scontent-iad3-1.xx&oh=b2b9defd04cabcb539a559cf13e41784&oe=5DFCC849",
                    "liked": false,
                    "status": 1,
                    "location": "Karachi,Pakistan",
                    "lat": 24.8785415,
                    "lng": 67.0642153,
                    "likes": [
                        {
                            "id": "5fabecbded9f9f000102ce9b",
                            "userId": "5fabe152b4f048000171d754",
                            "imgUrl": "https://media.nanodot.us/nano/local/user/5fabe152b4f048000171d754/cover/userUpload5fabe152b4f048000171d7541170639162972417767.jpg",
                            "liked": "2020-11-11T13:53:01.592+0000",
                            "postId": "5d88ac1a45e6740001784614",
                            "friendId": "5d1090feea01400001dc2776"
                        }
                    ],
                    "comments": [],
                    "likesCount": 1,
                    "commentsCount": 0,
                    "created": "2019-09-23T11:27:22.610+0000",
                    "hashtags": [],
                    "usertags": [],
                    "total": 0
                },
                {
                    "id": "5d88aa2245e6740001784613",
                    "userId": "5d1090feea01400001dc2776",
                    "userName": "Nano",
                    "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                    "communityId": "5d1090feea01400001dc2776",
                    "communityName": "Nano",
                    "eventId": 0,
                    "postType": 10,
                    "type": "link",
                    "description": "",
                    "url": "https://chisel-motorcycle.glitch.me/getMeta?url=https://www.facebook.com/TheYoungPakistani/photos/a.10151454980339243/10157528748429243/?type=3&theater",
                    "mediaUrl": "",
                    "liked": false,
                    "status": 1,
                    "location": "Karachi,Pakistan",
                    "lat": 24.8785404,
                    "lng": 67.0642144,
                    "likes": [],
                    "comments": [],
                    "likesCount": 0,
                    "commentsCount": 0,
                    "created": "2019-09-23T11:18:58.261+0000",
                    "hashtags": [],
                    "usertags": [],
                    "total": 0
                },
                {
                    "id": "5d8891cf6516490001c8a2ee",
                    "userId": "5d1090feea01400001dc2776",
                    "userName": "Nano",
                    "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                    "communityId": "5d1090feea01400001dc2776",
                    "communityName": "Nano",
                    "eventId": 0,
                    "postType": 10,
                    "type": "link",
                    "title": "Outlook – free personal email and calendar from Microsoft",
                    "description": "Get free Outlook email and calendar, plus Office Online apps like Word, Excel and PowerPoint. Sign in to access your Outlook, Hotmail or Live email account.",
                    "url": "https://outlook.live.com/owa/",
                    "mediaUrl": "https://ow2.res.office365.com/owalanding/2019.9.10.02/images/opengraph.jpg",
                    "liked": false,
                    "status": 1,
                    "location": "No Location Found",
                    "lat": 0.0,
                    "lng": 0.0,
                    "likes": [
                        {
                            "id": "5fabee33ed9f9f000102ce9c",
                            "userId": "5fabe152b4f048000171d754",
                            "imgUrl": "https://media.nanodot.us/nano/local/user/5fabe152b4f048000171d754/cover/userUpload5fabe152b4f048000171d7541170639162972417767.jpg",
                            "liked": "2020-11-11T13:59:15.163+0000",
                            "postId": "5d8891cf6516490001c8a2ee",
                            "friendId": "5d1090feea01400001dc2776"
                        }
                    ],
                    "comments": [],
                    "likesCount": 1,
                    "commentsCount": 0,
                    "created": "2019-09-23T09:35:11.429+0000",
                    "hashtags": [],
                    "usertags": [],
                    "total": 0
                },
                {
                    "id": "5d887adf53fcff00017b3468",
                    "userId": "5d1090feea01400001dc2776",
                    "userName": "Nano",
                    "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                    "communityId": "5d1090feea01400001dc2776",
                    "communityName": "Nano",
                    "eventId": 0,
                    "postType": 10,
                    "type": "link",
                    "title": "Shor&apos;s algorithm - Wikipedia",
                    "description": "",
                    "url": "https://en.wikipedia.org/wiki/Shor%27s_algorithm",
                    "text": "Sample link&nbsp;",
                    "mediaUrl": "",
                    "liked": false,
                    "status": 1,
                    "location": "Karachi,Pakistan",
                    "lat": 24.8785233,
                    "lng": 67.064206,
                    "likes": [],
                    "comments": [],
                    "likesCount": 0,
                    "commentsCount": 0,
                    "created": "2019-09-23T07:57:19.840+0000",
                    "hashtags": [],
                    "usertags": [],
                    "total": 0
                },
                {
                    "id": "5d39c279028c2b000144e0e0",
                    "userId": "5d1090feea01400001dc2776",
                    "userName": "Nano",
                    "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                    "communityId": "5d1090feea01400001dc2776",
                    "communityName": "Nano",
                    "eventId": 0,
                    "postType": 10,
                    "type": "image",
                    "text": "Atest",
                    "mediaUrl": "https://media.nanodot.us/nano/local/communityuploads/5d1090feea01400001dc2776/Image/media5d1090feea01400001dc27766629822315540846605.jpg",
                    "thumbUrl": "https://media.nanodot.us/nano/local/communityuploads/5d1090feea01400001dc2776/Image/Thumb/media5d1090feea01400001dc27766629822315540846605.jpg",
                    "liked": false,
                    "status": 1,
                    "location": "Karachi,Pakistan",
                    "lat": 24.8785827,
                    "lng": 67.0641916,
                    "likes": [
                        {
                            "id": "5d39c280028c2b000144e0e1",
                            "userId": "5d26f2084af97b00018be666",
                            "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                            "liked": "2019-07-25T14:53:52.880+0000",
                            "postId": "5d39c279028c2b000144e0e0",
                            "friendId": "5d1090feea01400001dc2776"
                        }
                    ],
                    "comments": [],
                    "likesCount": 1,
                    "commentsCount": 0,
                    "created": "2019-07-25T14:53:45.796+0000",
                    "hashtags": [],
                    "usertags": [],
                    "total": 0
                },
                {
                    "id": "5d39ba9d3a59a00001de52c1",
                    "userId": "5d1090feea01400001dc2776",
                    "userName": "Nano",
                    "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                    "communityId": "5d1090feea01400001dc2776",
                    "communityName": "Nano",
                    "eventId": 0,
                    "postType": 10,
                    "type": "text",
                    "text": "This is test",
                    "mediaUrl": "",
                    "thumbUrl": "",
                    "liked": false,
                    "status": 1,
                    "location": "Karachi,Pakistan",
                    "lat": 24.8785901,
                    "lng": 67.0641987,
                    "likes": [
                        {
                            "id": "5d39c281441b5d00014fa3cf",
                            "userId": "5d26f2084af97b00018be666",
                            "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                            "liked": "2019-07-25T14:53:53.375+0000",
                            "postId": "5d39ba9d3a59a00001de52c1",
                            "friendId": "5d1090feea01400001dc2776"
                        }
                    ],
                    "comments": [],
                    "likesCount": 1,
                    "commentsCount": 0,
                    "created": "2019-07-25T14:20:13.909+0000",
                    "hashtags": [],
                    "usertags": [],
                    "total": 0
                },
                {
                    "id": "5d39b5bd6226450001d46eb0",
                    "userId": "5d1090feea01400001dc2776",
                    "userName": "Nano",
                    "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/Nano/Social-icon-9a6489db.png",
                    "communityId": "5d1090feea01400001dc2776",
                    "communityName": "Nano",
                    "eventId": 0,
                    "postType": 10,
                    "type": "video",
                    "text": "Test post",
                    "mediaUrl": "https://media.nanodot.us/nano/local/useruploads/users/nanotask/Video/VID_20190725_185846.mp4",
                    "thumbUrl": "https://media.nanodot.us/thumbnails/nano/local/useruploads/users/nanotask/Video/VID_20190725_185846.jpg",
                    "liked": false,
                    "status": 1,
                    "location": "Karachi,Pakistan",
                    "lat": 24.8785847,
                    "lng": 67.0641873,
                    "likes": [
                        {
                            "id": "5d39c282028c2b000144e0e2",
                            "userId": "5d26f2084af97b00018be666",
                            "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                            "liked": "2019-07-25T14:53:54.739+0000",
                            "postId": "5d39b5bd6226450001d46eb0",
                            "friendId": "5d1090feea01400001dc2776"
                        }
                    ],
                    "comments": [],
                    "likesCount": 1,
                    "commentsCount": 0,
                    "created": "2019-07-25T13:59:25.663+0000",
                    "hashtags": [],
                    "usertags": [],
                    "total": 0
                }
            ]
        },
    };
    componentDidMount() {
        console.log("Position >>> ", this.state.CFABPosition);
    }
    
    handleIndexChange = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index,
        });
    };
    handleIndexChange2 = (index) => {
        this.setState({
            ...this.state,
            selectedIndex2: index,
        });
    };
    _renderListItem = ({item, index}) => {
        //console.log(item);
        var getPostItem = (item) => {
          if (
            item.type == 'video' ||
            (item.type === 'image' &&
              item.mediaUrl.substring(
                item.mediaUrl.length - 4,
                item.mediaUrl.length,
              ) === '.mp4')
          ) {
            //console.log(item.type, item);
            return PostVideo({item});
          } else if (item.type === 'link') {
            return PostLink({item});
          } else if (item.type === 'image') {
            return PostImage({item});
          } else if (item.type == 'live' && item.liveFormat == 'youtube') {
            return postLiveYoutube({item});
          } else if (item.type == 'live' && item.liveFormat == 'm3u8') {
            return PostLiveM3U8({item});
          } else if (item.type == 'commute') {
            return PostCommute({item});
          } else if (
            item.type === 'text' &&
            (item.postType == 0 ||
              item.postType == 1 ||
              item.postType == 10 ||
              item.postType == 11)
          ) {
            return PostText({item});
            // return PostText(item);
          } else if (item.postType == '20') {
            return;
          }
        };
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.white,
              marginBottom: 20,
            }}>
            
            <View style={[{marginTop: -15}]}>{getPostItem(item)}</View>
            {item.text === '' || item.type === 'text' ? (
              <View style={{height: 14}} />
            ) : (
              <View style={[styles.topContainer]}>
                <Text>{item.text}</Text>
              </View>
            )}
    
            <View style={[{flex: 1, flexDirection: 'row'}]}>
              <View
                style={[
                  {
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    height: 50,
                  },
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    var _feed = [...this.state.postData.data];
    
                    _feed[index].liked = true;
                    //this.setState({feedsData: _feed});
                  }}
                  style={{}}>
                  {!item.liked ? (
                    <Icon
                      name={'like0'}
                      height={22}
                      width={22}
                      color={Colors.primary}
                      style={[{alignSelf: 'center'}]}
                    />
                  ) : (
                    <Icon
                      name={'like1'}
                      height={22}
                      width={22}
                      color={Colors.primary}
                      style={[{alignSelf: 'center'}]}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <View
                style={[
                  {
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'row',
                  },
                ]}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Comments', {
                      postItem: {item},
                    })
                  }
                  style={{}}>
                  <Icon
                    name="comments"
                    height={22}
                    width={22}
                    color={Colors.primary}
                    style={[{alignSelf: 'center'}]}
                  />
                </TouchableOpacity>
              </View>
    
              <View
                style={[
                  {flex: 2, justifyContent: 'flex-start', flexDirection: 'column'},
                ]}>
                <Text style={{textAlign: 'left'}}>
                  {moment(item.created).startOf().fromNow()}
                </Text>
              </View>
              <View
                style={[
                  {flex: 2, alignContent: 'center', flexDirection: 'column'},
                ]}>
                <TouchableOpacity onPress={() => {}} style={{}}>
                  <Text
                    style={{
                      fontSize: 60,
                      textAlign: 'center',
                      justifyContent: 'flex-start',
                      padding: 0,
    
                      color: Colors.midGrey,
                      lineHeight: 30,
                    }}>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
    };
    FabButton = () => {
        return (
          <View
            height={70}
            style={[
              styles.redButtonRound,
              {
                width: 65,
                height: 65,
                margin: 5,
              },
            ]}>
            <View style={[styles.redButtonRound, {width: 40, height: 40}]}>
              <Text
                style={[
                  {
                    color: Colors.white,
                    fontSize: 30,
                    lineHeight: 35,
                  },
                ]}>
                +
              </Text>
            </View>
          </View>
        );
    };
    render() {
        const users = this.state.users.data;
        const userProfile = this.state.userProfile.data;
        const community = this.state.community.data;
        const postData = this.state.postData.data;
        const TruncateText = (props) => {
            var txt = props.text;
            var limit = props.limit;
            var ShowMoreComponent = () => {
                return props.showMoreComponent;
            };
    
            var ShowLessComponent = () => {
                return props.showLessComponent;
            };
            var showMore = props.showMore;
    
            txt = txt.trim();
            
            if (!showMore) {
                txt = (txt.trim().substring(0, Number(limit)) + '...').trim();
                if (!ShowMoreComponent) {
                    return <Text style={{padding:5}}>{txt} </Text>;
                } else {
                    return (
                        <Text>
                        <Text style={{padding:5}}>{txt} </Text>
                        <ShowMoreComponent />
                        </Text>
                    );
                }
            } else {
                if (!ShowLessComponent) {
                    return <Text style={{padding:5}}>{txt} </Text>;
                } else {
                    return (
                        <Text>
                        <Text style={{padding:5}}>{txt} </Text>
                        <ShowLessComponent />
                        </Text>
                    );
                }
            }
        };
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor="#FF5A60"/>
                <SegmentedControlTab
                    values={['Feed', 'Achievements', 'Mission']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    tabStyle={{backgroundColor: Colors.white, borderWidth: 0,paddingTop:20}}
                    activeTabStyle={{backgroundColor: Colors.white, borderWidth: 0}}
                    activeTabTextStyle={{
                      color: Colors.primary,
                      fontFamily: 'FiraSans-Regular',
                      borderBottomWidth:2,
                      borderBottomColor:Colors.primary,
                    }}
                    tabTextStyle={{color: Colors.grey, fontFamily: 'FiraSans-Regular',paddingLeft:5,paddingRight:5,paddingBottom:5,borderRightWidth:0}}
                />
                {this.state.selectedIndex == 0 && (
                    <ScrollView style={[styles.container]}>
                        <View style={[styles.BG]}>
                            <View style={{flex:1}}>
                                <View style={{flex:1,flexDirection:"column"}}>
                                    <View style={{flex:1, flexDirection:"row", marginTop:20,paddingBottom:20}}>
                                        <View style={{flex:0.8,flexDirection:"row"}}>
                                            <View style={{alignSelf:"flex-start"}}>
                                                <Image
                                                    source={{uri: community.logoUrl != '' ? community.logoUrl : "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png"}}
                                                    style={{width:100,height:100,borderRadius:50}}
                                                />
                                            </View>
                                            {users.userName != '' && (
                                                <View style={{top:72,right:25}}>
                                                    <TouchableOpacity style={{backgroundColor:"transparent",flex:1}}>  
                                                        <Icon
                                                            name="customEdit"
                                                            height={28}
                                                            width={23}
                                                            color={Colors.primary}
                                                            style={[{width:23,height:28}]}
                                                            dontShowMask={true}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            )}
                                        </View>
                                        <View style={{flex:0.2}}>
                                            <View style={{flex:1,flexDirection:"column",paddingTop:0}}>
                                                {community.following == false ? (
                                                    <TouchableOpacity style={{backgroundColor:"transparent",flex:1,marginBottom:5}}>  
                                                        <Text style={{borderWidth:1,borderColor:Colors.primary,color:Colors.primary,fontFamily:"FiraSans-Regular",textAlign:"center",padding:8,borderRadius:8,backgroundColor:Colors.white}}>Follow</Text>
                                                    </TouchableOpacity>
                                                ) : (
                                                    <TouchableOpacity style={{backgroundColor:"transparent",flex:1,marginBottom:5}}>  
                                                        <Text style={{borderWidth:1,borderColor:Colors.primary,color:Colors.primary,fontFamily:"FiraSans-Regular",textAlign:"center",padding:8,borderRadius:8,backgroundColor:Colors.white}}>Unfollow</Text>
                                                    </TouchableOpacity>
                                                    
                                                )}
                                                {community.admin && (
                                                    <TouchableOpacity style={{backgroundColor:"transparent",flex:1,marginBottom:5}}>  
                                                        <Text style={{borderWidth:1,borderColor:Colors.primary,color:Colors.primary,fontFamily:"FiraSans-Regular",textAlign:"center",padding:8,borderRadius:8,backgroundColor:Colors.white}}>Message</Text>
                                                    </TouchableOpacity>
                                                )}
                                                
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{flex:1,flexDirection:"row",paddingTop:25}}>
                                        <View style={{marginLeft:15,flex:0.9,flexDirection:"row"}}>
                                          <Text style={{fontFamily:"FiraSans-Bold",fontSize:22}} numberOfLines={1}>{community.name}</Text>
                                          <Text style={{marginLeft:2,paddingTop:10}}>
                                              <Icon
                                                  name="customVerified"
                                                  height={28}
                                                  width={23}
                                                  color={Colors.primary}
                                                  style={[{verticalAlign:"center"}]}
                                              />
                                          </Text>
                                        </View>
                                        {community.admin && (
                                          <View style={{flex:0.4}}>
                                            {community.admin && (
                                              <CFAB
                                                  totalitems={1}
                                                  style={{width: 40, height: 40, right: -1,top:-15,flexDirection:"column"}}
                                                  fabOpenButton={this.FabButton()}>
                                                  <TouchableOpacity
                                                  onPress={() => this.props.navigation.navigate('UploadLink')}
                                                  height={65}
                                                  style={[styles.redButtonRound]}>
                                                  <Ionicons name="link" size={24} style={{color: Colors.white}} />
                                                  </TouchableOpacity>
                                                  <TouchableOpacity
                                                  onPress={() => this.props.navigation.navigate('UploadText')}
                                                  height={65}
                                                  style={[styles.redButtonRound]}>
                                                  <Icon
                                                      name="text"
                                                      height={40}
                                                      width={40}
                                                      color={Colors.white}
                                                      style={[{alignSelf: 'center'}]}
                                                      dontShowMask={true}
                                                  />
                                                  </TouchableOpacity>
                                                  <TouchableOpacity
                                                  height={65}
                                                  style={[styles.redButtonRound]}
                                                  onPress={() => this.props.navigation.navigate('UploadImage')}>
                                                  <Icon
                                                      name="camera"
                                                      height={40}
                                                      width={40}
                                                      color={Colors.white}
                                                      style={[{alignSelf: 'center'}]}
                                                      dontShowMask={true}
                                                  />
                                                  </TouchableOpacity>
                                                  <TouchableOpacity
                                                  height={65}
                                                  style={[styles.redButtonRound]}
                                                  onPress={() => this.props.navigation.navigate('UploadVideo')}>
                                                  <Icon
                                                      name="video"
                                                      height={40}
                                                      width={40}
                                                      color={Colors.white}
                                                      style={[{alignSelf: 'center'}]}
                                                      dontShowMask={true}
                                                  />
                                                  </TouchableOpacity>
                                              </CFAB>
                                            )}
                                          </View>
                                        )}
                                    </View>
                                </View>
                                <View style={{flex:1}}>
                                    <Text style={{marginTop:40,marginBottom:40,paddingLeft:15,paddingRight:15,color:"#4447",fontSize:15,fontFamily:"FiraSans-Medium"}}>
                                        <TruncateText
                                            text={community.details}
                                            limit={400}
                                            showMore={this.state.showMore}
                                            showMoreComponent={
                                                <TouchableOpacity 
                                                style={{height: 16}}
                                                onPress={() => {
                                                    this.setState({showMore: true});
                                                    console.log(this.state.showMore);
                                                }}>
                                                <Text
                                                    style={[
                                                    {
                                                        fontSize: 18,
                                                        color: Colors.primary,
                                                        textAlign: 'center',
                                                    },
                                                    ]}>
                                                    show more
                                                </Text>
                                                </TouchableOpacity>
                                            }
                                            showLessComponent={
                                                <TouchableOpacity
                                                style={[{height: 16}]}
                                                onPress={() => {
                                                    this.setState({showMore: false});
                                                }}>
                                                <Text
                                                    style={[
                                                    {
                                                        fontSize: 18,
                                                        color: Colors.primary,
                                                        textAlign: 'center',
                                                    },
                                                    ]}>
                                                    show less
                                                </Text>
                                                </TouchableOpacity>
                                            }
                                        />
                                    </Text>
                                </View>
                                <View style={{flex:1}}>
                                    <View style={{flex:1,paddingTop:40}}>
                                        <SegmentedControlTab
                                            badges={[
                                                <Image
                                                    source={{uri: "https://media.nanodot.us/img/Home.png"}}
                                                    style={{width:28,height:28,marginTop:0}}
                                                />, 
                                                <Text style={styles.followFig}>{community.followers.length}</Text>,
                                                <Text style={styles.followFig}>{community.nanotasks}</Text>,
                                                <Text style={styles.followFig}>{community.projects}</Text>
                                            ]}
                                            values={['Home', 'Followers', 'Nano Tasks', 'Events']}
                                            selectedIndex={this.state.selectedIndex2}
                                            onTabPress={this.handleIndexChange2}
                                            tabStyle={{backgroundColor: Colors.white, borderWidth: 0,paddingTop:20}}
                                            activeTabStyle={{backgroundColor: Colors.white, borderWidth: 0}}
                                            activeTabTextStyle={{
                                            color: Colors.primary,
                                            fontFamily: 'FiraSans-Regular',
                                            borderBottomWidth:2,
                                            borderBottomColor:Colors.primary,
                                            
                                            }}
                                            tabTextStyle={{color: Colors.grey, fontFamily: 'FiraSans-Regular',paddingLeft:5,paddingRight:5,paddingBottom:5,fontSize:16}}
                                            tabBadgeContainerStyle={{position:"absolute",top:-50,backgroundColor:"transparent",left:0,right:0}}
                                            //activeTabBadgeContainerStyle={{}}
                                            tabBadgeStyle={{height:50,textAlign:"center",backgroundColor:"transparent"}}
                                            //activeTabBadgeStyle={{}}
                                        />
                                        {this.state.selectedIndex2 == 0 && (
                                            <View styles={{flex:1}}>
                                                <FlatList
                                                    data={postData}
                                                    renderItem={this._renderListItem}
                                                    keyExtractor={(item, index) => item + index}
                                                    style={{flex: 1, backgroundColor: Colors.white}}
                                                    showsVerticalScrollIndicator={false}
                                                    alwaysBounceVertical
                                                    style={{marginTop:20}}
                                                />
                                            </View>
                                        )}
                                        {this.state.selectedIndex2 == 1 && <Followers />}
                                        {this.state.selectedIndex2 == 2 && <NanoTasks />}
                                        {this.state.selectedIndex2 == 3 && <Projects />}
                                    </View>
                                </View>
                                {/* <View style={{flex:1}}>
                                    <TouchableOpacity style={{flexDirection:"row"}}>
                                        <Text style={{}}>Add friend</Text>
                                        <Ionicons 
                                            name="person-add"
                                            size={22} 
                                            color="#F85B61"
                                            backgroundColor="#FF5A60"
                                            style={{}}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Ionicons 
                                            name="call"
                                            size={22} 
                                            color="#F85B61"
                                            backgroundColor="#FF5A60"
                                            style={{}}
                                        />
                                    </TouchableOpacity>
                                </View> */}
                            </View>
                        </View>
                    </ScrollView>
                )}
                {this.state.selectedIndex == 1 && (
                    <Achievements 
                        users={users}
                        community={community}
                    />
                )}
                {this.state.selectedIndex == 2 && <Mission data={community} />}
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
        padding:15,
    },
    followFig:{
        fontFamily: "FiraSans-Bold",
        color: "#f75a5f",
        fontSize: 28,
        alignItems:"center"
        
    },
    followTitle:{
        fontFamily:"FiraSans-Regular",
        fontSize:20,
        textAlign:"center",
        flexWrap: 'wrap',
        marginTop:5
        
    },
    card:{
        flex:1,
        flexDirection:"column",
    },
    logoImage: {
        alignSelf: 'center',
        resizeMode: 'cover',
        borderRadius: 100,
        backgroundColor: Colors.primary,
        padding: 2,
        width: 54,
        height: 54,
        borderWidth: 2,
        borderColor: Colors.white,
      },
      logoContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: Colors.primary,
        padding: 2,
        width: 54,
        height: 54,
        borderWidth: 2,
        borderColor: Colors.white,
      },
      topContainer: {
        padding: 20,
      },
      PostImageContainer: {
        height: 320,
        width: '100%',
        backgroundColor: Colors.lightGrey,
      },
      postContainer: {
        height: 320,
        width: '100%',
        backgroundColor: Colors.lightGrey,
      },
      PostImage: {
        width: '100%',
        height: '100%',
      },
      PostVideo: {width: '100%', height: '100%'},
      liveBtn: {
        position: 'absolute',
        top: 60,
        right: 20,
        padding: 5,
        backgroundColor: Colors.primary,
        borderRadius: 6,
        color: Colors.white,
      },
    
      trnsPostCont: {
        padding: 30,
        marginTop: 0,
        backgroundColor: Colors.lightGrey,
      },
      smallText: {
        alignSelf: 'center',
        paddingBottom: 10,
        paddingHorizontal: 4,
        fontSize: 14,
        fontFamily: 'FiraSans-Medium',
      },
      smallTextRegular: {
        paddingHorizontal: 0,
        fontSize: 12,
        fontFamily: 'FiraSans-Regular',
        color: Colors.grey,
      },
      commentText: {
        paddingBottom: 10,
    
        fontSize: 14,
        fontFamily: 'FiraSans-Regular',
        marginEnd: 10,
      },
      redButton: {
        backgroundColor: Colors.primary,
        alignContent: 'center',
        justifyContent: 'center',
        width: 60,
        color: Colors.primary,
        borderColor: Colors.primary,
        borderRadius: 5,
        borderWidth: 2,
        alignItems: 'center',
      },
      redButtonRound: {
        backgroundColor: Colors.primary,
        alignContent: 'center',
        justifyContent: 'center',
        color: Colors.primary,
        alignItems: 'center',
        width: 55,
        height: 55,
        borderRadius: 100,
        borderColor: Colors.white,
        alignSelf: 'center',
        borderWidth: 2,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 3,
      },
    
});
export default Feed;