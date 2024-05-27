import React, { Component } from 'react';
import {
    ScrollView, 
    StyleSheet,
    StatusBar,
    Image,
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../Colors/colors';
import {Icon} from '../Icons/icons';
import CFAB from './Fabs';
const Achievements = (props) => {
    const [showMore, setShowMore] = React.useState(false);
    const users = props.users;
    const community = props.community;
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
    const FabButton = () => {
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
    return(
        <>
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
                                            fabOpenButton={FabButton()}>
                                            <TouchableOpacity
                                            onPress={() => props.navigation.navigate('UploadLink')}
                                            height={65}
                                            style={[styles.redButtonRound]}>
                                            <Ionicons name="link" size={24} style={{color: Colors.white}} />
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                            onPress={() => props.navigation.navigate('UploadText')}
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
                                            onPress={() => props.navigation.navigate('UploadImage')}>
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
                                            onPress={() => props.navigation.navigate('UploadVideo')}>
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
                                    showMore={showMore}
                                    showMoreComponent={
                                        <TouchableOpacity 
                                        style={{height: 16}}
                                        onPress={() => {
                                            setShowMore(true);
                                            //console.log(showMore);
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
                                            setShowMore(false);
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
                            <View style={{flex:1,flexDirection:"row",marginBottom:20}}>
                                <View style={{flex:0.3,alignItems:"center",flexDirection:"column"}}>
                                    <Image
                                        source={{uri: "https://media.nanodot.us/img/Home.png"}}
                                        style={{width:28,height:28,marginBottom:9,marginTop:6}}
                                    />
                                    <Text style={styles.followTitle}>Home</Text>
                                </View>
                                <View style={{flex:0.3,alignItems:"center",flexDirection:"column"}}>
                                    <Text style={styles.followFig}>{community.followers.length}</Text>
                                    <Text style={styles.followTitle}>Followers</Text>
                                </View>
                                <View style={{flex:0.3,alignItems:"center",flexDirection:"column"}}>
                                    <Text style={styles.followFig}>{community.nanotasks}</Text>
                                    <Text style={styles.followTitle}>Nano Tasks</Text>
                                </View>
                                <View style={{flex:0.3,alignItems:"center",flexDirection:"column"}}>
                                    <Text style={styles.followFig}>{community.projects}</Text>
                                    <Text style={styles.followTitle}>Projects</Text>
                                </View>
                            </View>
                        </View>
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
        fontSize:22,
        textAlign:"center",
        flexWrap: 'wrap',
        marginTop:5
        
    },
    card:{
        flex:1,
        flexDirection:"column",
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
export default Achievements;