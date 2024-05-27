import React, { useEffect } from 'react';
import {
    ScrollView, 
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Week = (props) =>{
  const nanoTaskObject = props.nanoTaskObject;
  const [totalTasks, setTotalTasks] = React.useState(197);
  const [users, setUsers] = React.useState([]);
  function loadFallback(){
      return " ";
  }
  useEffect(() => {
    setUsers(nanoTaskObject.users)
  });
  return (
      <>
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
                                source={{uri: users[0].currentPlanetLevel ? users[0].currentPlanetLevel.achievement.imgURL : loadFallback()}}
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
                                source={{uri: users[1].currentPlanetLevel ? users[1].currentPlanetLevel.achievement.imgURL : loadFallback()}}
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
                                source={{uri: users[1].currentPlanetLevel ? users[1].currentPlanetLevel.achievement.imgURL : loadFallback()}}
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
                                source={{uri: users[2].currentPlanetLevel ? users[2].currentPlanetLevel.achievement.imgURL : loadFallback()}}
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
      </>
  );
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
  

export default Week;