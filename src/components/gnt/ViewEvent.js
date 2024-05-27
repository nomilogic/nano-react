import React from 'react';
import {
    ScrollView, 
    StyleSheet,
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Animated,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import AutoHeightImage from 'react-native-auto-height-image';

const ViewEvent = (props) => {
    const [boxAnimation, setBoxAnimation] = React.useState(new Animated.Value(200));
    const [rotationValue, setRotationValue] = React.useState(new Animated.Value(0));
    const [imageHeight, setImageHeight] = React.useState(0);
    const animateBox = () => {
        var imageHeightChange = imageHeight;
        if(boxAnimation._value < imageHeightChange)
        {
            Animated.timing(boxAnimation,{
                toValue:imageHeightChange,
                duration:200,
                useNativeDriver:false,
            }).start();
            Animated.timing(rotationValue,{
                toValue:180,
                duration:250,
                useNativeDriver:false,
            }).start();
        }
        else if(boxAnimation._value > 200)
        {
            Animated.timing(boxAnimation,{
                toValue:200,
                duration:200,
                useNativeDriver:false,
            }).start();
            Animated.timing(rotationValue,{
                toValue:0,
                duration:250,
                useNativeDriver:false,
            }).start();
        }
    }
    const imageHeightSet = (totalHeight) => {
        if(imageHeight == 0)
        {
            setImageHeight(totalHeight);
        }
    }
    const boxAnimated = {
      marginTop:boxAnimation,
    }
    const [eventData, setEventData] = React.useState({
      "status": 200,
      "msg": "Event Found",
      "data": {
          "id": "5d168b41d5834300014f0426",
          "name": "24th World Scout Jamboree",
          "title": "Save Energy",
          "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/24th-World-Scout-Jamboree/11665587_510291395789698_20937029673382754_n-be4b620d.jpg",
          "details": "Awareness program.",
          "inviteOnly": false,
          "status": 2,
          "nanotasks": 0,
          "projects": 0,
          "activeProjects": 1,
          "logoUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/nanotask/24th-World-Scout-Jamboree/WSJ-CREST-3X3-NEW2-55d5de49.png",
          "urls": [
              "https://www.2019wsj.org/"
          ],
          "tracks": [
              "Zero Hunger",
              "Clean Water & Sanitation",
              "Affordable & Clean Energy",
              "Good Health & Well-Being",
              "Gender Equality",
              "Quality Education",
              "Decent Work & Evonomic Growth",
              "No Poverty"
          ],
          "skills": [
            "Zero Hunger",
            "Clean Water & Sanitation",
            "Affordable & Clean Energy",
            "Good Health & Well-Being",
            "Gender Equality",
            "Quality Education",
            "Decent Work & Evonomic Growth",
            "No Poverty"
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
          "volunteers":[
            {
              imgUrl: "https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg",
              title: "Jolly",
              status: 0
            },
            {
              imgUrl: "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
              title: "Hassan Mohiuddin",
              status: 1
            },
            {
              imgUrl: "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
              title: "Rohaan",
              status: 2
            }
          ],
          "submissions": [
            "https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg",
            "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
            "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
            "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
            "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
            "https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg",
            "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg"
          ],
          "wosm":false,
          "location": "Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan",
          "following": true,
          "autoFollow": false,
          "admin": true
      }
    });
    const event = eventData.data;
    return (
      
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <View style={styles.BG}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.imageBox}>
                            <AutoHeightImage
                                width={Dimensions.get('window').width}
                                source={{
                                    uri: event.imgUrl
                                }}
                                onHeightChange={checkHeight => {imageHeightSet(Math.round(checkHeight))}}
                                style={{minHeight:220}}
                            />
                        </View>
                        <Animated.View style={[styles.contentBox, boxAnimated]}>
                            <TouchableOpacity
                                style={[styles.button]}
                                onPress={() => animateBox()}
                            >
                                <Animated.View style={[{justifyContent:"center",rotation: rotationValue}]}>
                                    <AutoHeightImage
                                        width={50}
                                        height={50}
                                        source={{
                                            uri: 'https://media.nanodot.us/img/expendIcon.png'
                                        }}
                                    />
                                </Animated.View>
                            </TouchableOpacity>
                            <Text style={styles.title}>{event.title}</Text>
                            <View style={{flex:1}}>
                                <LinearGradient
                                    useAngle={false}
                                    start={{x: 0, y: 0.75}} 
                                    end={{x: 1, y: 0.25}}
                                    colors={['#cfd955', '#f53d3d']}
                                    style={{width:"25%",height:2}}
                                />
                            </View>
                            <View style={{marginVertical: 20,flexWrap: 'wrap',flex: 1}}>
                              <View style={{flexDirection: 'row',justifyContent: 'flex-start',flexWrap: 'wrap'}}>
                                  {event.tracks.length > 0 && (
                                      event.tracks.map((track, index) => (
                                        <TouchableOpacity
                                          style={[
                                            styles.sdgBtns,
                                            styles['sdgBtn'+index]
                                          ]}
                                          key={index}
                                        >
                                          <Text numberOfLines={1} style={styles.sdgTxt}>
                                            {track}
                                          </Text>
                                        </TouchableOpacity>
                                    ))
                                  )}
                              </View>
                            </View>
                            <View style={{flex:1,flexDirection:"column"}}>
                              <View style={{flexDirection:"row",marginBottom:5}}>
                                <View style={{flexDirection:"column"}}>
                                  <Text style={{paddingBottom:2,paddingLeft:15,fontSize:25,fontFamily:"FiraSans-Regular"}}>About the Project </Text>
                                  <LinearGradient
                                    useAngle={true}
                                    angle={45}
                                    angleCenter={{x: 0.5, y: 0.5}}
                                    colors={['#cfd955', '#f53d3d']}
                                    style={[styles.suGradient]}
                                  />
                                </View>
                                <View style={{flexDirection:"column"}}>
                                  <Ionicons 
                                    name="information-circle" 
                                    size={22} 
                                    color="#333333"
                                    style={{paddingTop:10,paddingBottom:5}} 
                                  />
                                  <LinearGradient
                                    useAngle={true}
                                    angle={45}
                                    angleCenter={{x: 0.5, y: 0.5}}
                                    colors={['#cfd955', '#f53d3d']}
                                    style={[styles.suGradient]}
                                  />
                                </View>
                              </View>
                              <View style={{flexDirection:"row"}}>
                                <Text style={{color:"#203541",fontFamily:"FiraSans-Light",fontSize:14,padding:10}}>{event.details}</Text>
                              </View>
                            </View>
                            <View style={{flex:1,flexDirection:"column",marginTop:10}}>
                              <View style={{flexDirection:"row",marginBottom:5}}>
                                <View style={{flexDirection:"column"}}>
                                  <Text style={{paddingBottom:2,paddingLeft:15,fontSize:25,fontFamily:"FiraSans-Regular"}}>Address</Text>
                                  <LinearGradient
                                    useAngle={true}
                                    angle={45}
                                    angleCenter={{x: 0.5, y: 0.5}}
                                    colors={['#cfd955', '#f53d3d']}
                                    style={[styles.suGradient]}
                                  />
                                </View>
                              </View>
                              <View style={{flexDirection:"row"}}>
                                <Text style={{color:"#203541",fontFamily:"FiraSans-Light",fontSize:14,padding:10}}>{event.location}</Text>
                              </View>
                            </View>
                            <View style={{flex:1,flexDirection:"column",marginTop:10}}>
                              <View style={{flexDirection:"row",marginBottom:5}}>
                                <View style={{flexDirection:"column"}}>
                                  <Text style={{paddingBottom:2,paddingLeft:15,fontSize:25,fontFamily:"FiraSans-Regular"}}>Skills required</Text>
                                  <LinearGradient
                                    useAngle={true}
                                    angle={45}
                                    angleCenter={{x: 0.5, y: 0.5}}
                                    colors={['#cfd955', '#f53d3d']}
                                    style={[styles.suGradient]}
                                  />
                                </View>
                              </View>
                              <View style={{marginVertical: 20,flexWrap: 'wrap',flex: 1}}>
                                <View style={{flexDirection: 'row',justifyContent: 'flex-start',flexWrap: 'wrap'}}>
                                    {event.skills.length > 0 && ( 
                                      event.skills.map((skill, index) => (
                                        <TouchableOpacity
                                          style={[
                                            styles.skillsBtns,
                                          ]}
                                          key={index}
                                        >
                                          <Text numberOfLines={1} style={styles.skillsTxt}>
                                            {skill}
                                          </Text>
                                        </TouchableOpacity>
                                      ))
                                    )}
                                </View>
                              </View>
                            </View>
                            <View style={{flex:1,flexDirection:"column",marginTop:10}}>
                              <View style={{flexDirection:"row",marginBottom:5}}>
                                <View style={{flexDirection:"column"}}>
                                  <Text style={{paddingBottom:2,paddingLeft:15,fontSize:25,fontFamily:"FiraSans-Regular"}}>Other Volunteers</Text>
                                  <LinearGradient
                                    useAngle={true}
                                    angle={45}
                                    angleCenter={{x: 0.5, y: 0.5}}
                                    colors={['#cfd955', '#f53d3d']}
                                    style={[styles.suGradient]}
                                  />
                                </View>
                              </View>
                              <View style={{flex: 1}}>
                                <View style={{flex:1,flexDirection:'column',padding:10}}>
                                    {event.volunteers.length == 0 && (
                                      <AutoHeightImage
                                        width={50}
                                        height={50}
                                        source={{
                                            uri: 'https://media.nanodot.us/imgs/noneIcon.png'
                                        }}
                                        style={{borderRadius:6}}
                                      />
                                    )}
                                    {event.volunteers.length > 0 && (
                                      event.volunteers.map((item, index) => (
                                        <TouchableOpacity style={{backgroundColor:"transparent",marginBottom:20}} key={index}>
                                            <View style={{flex:1,flexDirection:"row"}}>
                                              <View style={{flex:0.2,alignItems:"center"}}>
                                                <AutoHeightImage
                                                  width={60}
                                                  height={60}
                                                  source={{
                                                      uri: item.imgUrl
                                                  }}
                                                  style={{borderRadius:50,width:60,height:60}}
                                                />
                                              </View>
                                              <View style={{flex:0.8,flexDirection:"column",paddingLeft:10,paddingRight:10}}>
                                                <Text style={{fontSize:18,fontFamily:"FiraSans-Regular"}}>{item.title}</Text>
                                                {item.status == 0 && (
                                                  <Text style={{fontSize:16,fontFamily:"FiraSans-Regular",paddingTop:8}}>Signed Up</Text>
                                                )}
                                                {item.status == 1 && (
                                                  <Text style={{fontSize:16,fontFamily:"FiraSans-Regular",paddingTop:8}}>Checked Out</Text>
                                                )}
                                                {item.status == 2 && (
                                                  <Text style={{fontSize:16,fontFamily:"FiraSans-Regular",paddingTop:8}}>Checked In</Text>
                                                )}
                                              </View>
                                            </View>
                                          </TouchableOpacity>
                                      ))
                                    )}
                                </View>
                              </View>
                            </View>
                            <View style={{flex:1,flexDirection:"column",marginTop:10}}>
                              <View style={{flexDirection:"row",marginBottom:5}}>
                                <View style={{flexDirection:"column"}}>
                                  <Text style={{paddingBottom:2,paddingLeft:15,fontSize:25,fontFamily:"FiraSans-Regular"}}>Submissions</Text>
                                  <LinearGradient
                                    useAngle={true}
                                    angle={45}
                                    angleCenter={{x: 0.5, y: 0.5}}
                                    colors={['#cfd955', '#f53d3d']}
                                    style={[styles.suGradient]}
                                  />
                                </View>
                              </View>
                              <View style={{flex: 1}}>
                                <View style={{flex:1,flexDirection:"row",padding:10}}>
                                    {event.submissions.length == 0 && (
                                      <AutoHeightImage
                                        width={50}
                                        height={50}
                                        source={{
                                            uri: 'https://media.nanodot.us/imgs/noneIcon.png'
                                        }}
                                        style={{borderRadius:6}}
                                      />
                                    )}
                                    {event.submissions.length > 0 && (
                                      <FlatList
                                        data={event.submissions}
                                        renderItem={({item,index}) => {
                                          if(index < 6)
                                          {
                                            return (
                                              <View style={{flex:0.4,}}>
                                                <AutoHeightImage
                                                  width={Dimensions.get('window').width * 0.9}
                                                  height={150}
                                                  source={{
                                                      uri: item
                                                  }}
                                                  style={{borderRadius:6,width:"90%",height:150,marginBottom:10}}
                                                />
                                                {index == 5 && (
                                                  <TouchableOpacity
                                                    style={styles.viewAllBox}>
                                                    <Text style={styles.viewAllTxt}>View All</Text>
                                                  </TouchableOpacity>
                                                )}
                                              </View>
                                            )  
                                          }
                                        }}
                                        //Setting the number of column
                                        numColumns={3}
                                        keyExtractor={(item, index) => index.toString()}
                                      />
                                    )}
                                </View>
                              </View>
                            </View>
                            <View style={{flex:1,alignItems:"center",justifyContent:"center",paddingTop:10,paddingBottom:20}}>
                              {event.status == 1 && (
                                event.wosm == false && (
                                  <TouchableOpacity
                                    style={{backgroundColor:"transparent"}}
                                  >
                                    <Text style={styles.btn}>Check In</Text>
                                  </TouchableOpacity>
                                )
                              )}
                              {event.status == 0 && (
                                <TouchableOpacity
                                  style={{backgroundColor:"transparent"}}
                                >
                                  <Text style={styles.btn}>Sign Up</Text>
                                </TouchableOpacity>
                              )}
                              {event.status == 1 && (
                                event.wosm == true && (
                                  <TouchableOpacity
                                    style={{backgroundColor:"transparent"}}
                                  >
                                    <Text style={styles.btn}>Signed Up</Text>
                                  </TouchableOpacity>
                                )
                              )}
                              {event.status == 2 && (
                                <TouchableOpacity
                                    style={{backgroundColor:"transparent"}}
                                >
                                  <Text style={styles.btn}>Checkout</Text>
                                </TouchableOpacity>
                              )}
                              {event.status == 2 && (
                                event.wosm == false && (
                                  <TouchableOpacity
                                    style={{backgroundColor:"transparent",marginTop:10}}
                                  >
                                    <Text style={styles.btn}>Upload</Text>
                                  </TouchableOpacity>
                                )
                              )}
                            </View>
                        </Animated.View>
                    </View>
                </ScrollView>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    BG:{
        flex: 1,
        backgroundColor:"black",
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    imageBox:{
        flex:1,
        position:"absolute",
        zIndex:0,
    },
    contentBox:{
        flex:1,
        position:"relative",
        zIndex:1,
        backgroundColor:"#fff",
        paddingBottom:20,
    },
    button: {
        width:50,
        height:50,
        alignItems: "center",
        backgroundColor: "transparent",
        position:"absolute",
        top:-25,
        right:15,
        zIndex:10,
        justifyContent:"center",
        flex:1,
    },
    title:{
        fontSize:25,
        fontFamily:"FiraSans-Medium",
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10,
        color:"#262626",
    },
    suGradient: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 2,
    },
    sdgBtns: {
        borderRadius: 20,
        borderWidth: 1,
        alignSelf: 'center',
        marginHorizontal: 4,
        marginVertical: 4,
      },
      sdgTxt: {
        paddingVertical: 5,
        paddingHorizontal: 14,
        color: 'rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily:"FiraSans-Light",
        fontSize:14,
      },
      skillsBtns:{
        borderRadius: 20,
        borderWidth: 1,
        alignSelf: 'center',
        marginHorizontal: 4,
        marginVertical: 4,
        backgroundColor: '#ADADAD', 
        borderColor: '#ADADAD',
      },
      skillsTxt:{
        paddingVertical: 5,
        paddingHorizontal: 14,
        fontFamily:"FiraSans-Light",
        fontSize:14,
        color:"#fff",
        textAlign: 'center',
        textAlignVertical: 'center',
      },
      btn:{
        backgroundColor:"#ff5a60",
        color:"#fff",
        fontFamily:"FiraSans-Light",
        fontSize:15,
        borderRadius:20,
        width:220,
        height:35,
        padding:8,
        textAlign:"center",
        textAlignVertical: 'center',
      },
      viewAllBox:{
        position:"absolute",
        zIndex:2,
        top:"20%",
        left:"15%",
      },
      viewAllTxt:{
        backgroundColor:"rgba(0,0,0, 0.4)",
        color:"#fff",
        borderWidth:3,
        borderColor:"#f1f1f1",
        width: "80%",
        padding:20,
        textAlign:"center",
        fontFamily:"FiraSans-Light",
      },
      sdgBtn0:
      {
          backgroundColor: "#f58d96",
          borderColor: "#EB1C2D",
      },
      sdgBtn1:
      {
          backgroundColor: "#e9cf94",
          borderColor: "#d3a029",
      },
      sdgBtn2:
      {
          backgroundColor: "#99eab1",
          borderColor: "#279b48",
      },
      sdgBtn3:
      {
          backgroundColor: "#e18f99",
          borderColor: "#c31f33",
      },
      sdgBtn4:
      {
          backgroundColor: "#f79f95",
          borderColor: "#ef402b",
      },
      sdgBtn5:
      {
          backgroundColor: "#7fd6ec",
          borderColor: "#00aed9",
      },
      sdgBtn6:
      {
          backgroundColor: "#fedb89",
          borderColor: "#fdb713",
      },
      sdgBtn7:
      {
          backgroundColor: "#c78b9b",
          borderColor: "#8f1838",
      },
      sdgBtn8:
      {
          backgroundColor: "#f9b692",
          borderColor: "#f36d25",
      },
      sdgBtn9:
      {
          backgroundColor: "#f089c1",
          borderColor: "#e11484",
      },
      sdgBtn10:
      {
          backgroundColor: "#fcce92",
          borderColor: "#f99d26",
      },
      sdgBtn11:
      {
          backgroundColor: "#e7c694",
          borderColor: "#cf8d2a",
      },
      sdgBtn12:
      {
          backgroundColor: "#a3bb9e",
          borderColor: "#48773e",
      },
      sdgBtn13:
      {
          backgroundColor: "#7fbedd",
          borderColor: "#007dbc",
      },
      sdgBtn14:
      {
          backgroundColor: "#9ed7a4",
          borderColor: "#3eb049",
      },
      sdgBtn15:
      {
          backgroundColor: "#82aac6",
          borderColor: "#166294",
      },
      sdgBtn16:
      {
          backgroundColor: "#8b9ab3",
          borderColor: "#2a4674",
      },
});
export default ViewEvent;