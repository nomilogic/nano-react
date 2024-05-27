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
const Followers = (props) => {
    
    const [followers, setFollowers] = React.useState({
        "status": 200,
        "msg": "Members found",
        "data": [
            {
                "userId": "5c9d9f307e349e0001335a7a",
                "userName": "Matt Sullivan",
                "imgUrl": "https://graph.facebook.com/10213364308122405/picture?type=large",
                "following": false
            },
            {
                "userId": "5c9dad7d7e349e0001335a83",
                "userName": "Farrukh Ismail",
                "imgUrl": "https://media.nanodot.us/nano/local/user/5c9dad7d7e349e0001335a83/cover/userUpload5c9dad7d7e349e0001335a836403151137005345821.jpg",
                "following": true
            },
            {
                "userId": "5c9df4887e349e0001335a95",
                "userName": "Mark Terry",
                "imgUrl": "https://graph.facebook.com/10157048947663609/picture?type=large",
                "following": true
            },
            {
                "userId": "5c9df5e37e349e0001335a98",
                "userName": "Alexander Terry",
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/user/5c9df5e37e349e0001335a98/cover/userUpload5c9df5e37e349e0001335a987636787323445854350.jpg",
                "following": true
            },
            {
                "userId": "5ca5f19d8459dc00013ea63c",
                "userName": "mak",
                "imgUrl": "https://media.nanodot.us/nano/local/user/5ca5f19d8459dc00013ea63c/cover/userUpload5ca5f19d8459dc00013ea63c7723746154407370364.jpg",
                "following": false
            },
            {
                "userId": "5cab207f2e8b9d000191b268",
                "userName": "Shaban Khan",
                "imgUrl": "https://graph.facebook.com/374172566517129/picture?type=large",
                "following": false
            },
            {
                "userId": "5caf1a8050322d0001d687d4",
                "userName": "Noman Younus",
                "imgUrl": "https://graph.facebook.com/10156642500544998/picture?type=large",
                "following": false
            },
            {
                "userId": "5cb05dc450322d0001d687e2",
                "userName": "Maqbool Shah",
                "imgUrl": "https://graph.facebook.com/10155980913126319/picture?type=large",
                "following": false
            },
            {
                "userId": "5d134aeb3cd3040001863272",
                "userName": "HuzaifaTest",
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/user/5d134aeb3cd3040001863272/cover/userUpload5d134aeb3cd30400018632722861076908262147331.jpg",
                "following": false
            },
            {
                "userId": "5d156f66cc88a300010f9396",
                "userName": "Joe Ringle",
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/user/5d156f66cc88a300010f9396/cover/userUpload5d156f66cc88a300010f93963403050992518429965.jpg",
                "following": false
            },
            {
                "userId": "5d24c9747d1ed100011b6846",
                "userName": "Willie Tighe",
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/local/user/5d24c9747d1ed100011b6846/cover/userUpload5d24c9747d1ed100011b68468096319602956306225.jpg",
                "following": false
            },
            {
                "userId": "5d26f2084af97b00018be666",
                "userName": "Muhammad Huzaifa Siddiqui",
                "imgUrl": "https://media-exp1.licdn.com/dms/image/C5103AQFDJH-3Rag14A/profile-displayphoto-shrink_100_100/0?e=1589414400&v=beta&t=NSghWOvaEy5ts2wBDexTBGdXuTq8zaLVMMzUbDH6l-s",
                "following": false
            },
            {
                "userId": "5d2745b9a7b6ee0001076395",
                "userName": "Hassan Mohiuddin",
                "imgUrl": "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
                "following": true
            },
            {
                "userId": "5d2deef2a86655000196ae89",
                "userName": "Joseph Ringle",
                "imgUrl": "https://graph.facebook.com/2162467100504201/picture?type=large",
                "following": false
            },
            {
                "userId": "5d3034e20f88e800012070aa",
                "userName": "Hassan",
                "imgUrl": "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                "following": false
            }
        ],
        "total": 4
    });
    const members = followers.data;
    const _renderItem = ({ item, index }) => (
        <View style={{marginBottom:10,marginTop:10,flex:1,flexDirection:"row"}}>
            <View style={{flex:0.2,alignItems: "center",}}>
                <Image
                    source={{uri: item.imgUrl}}
                    style={[styles.userImage,{top:-5}]}
                />
            </View>
            <View style={{flex:0.8}}>
                <View style={{flex:1,flexDirection:"row"}}>
                    <View style={{flex:0.8}}>
                        <Text style={[styles.userTxt,{fontSize:18,fontFamily:"FiraSans-Regular"}]}>{item.userName}</Text>
                    </View>
                    <View style={{flex:0.2,alignItems: "center",}}>
                        <TouchableOpacity
                            style={[styles.button]}
                            //onPress={this.onPress}
                        >
                            <Text style={{color:"#fff"}}>
                                {item.following == true ? (
                                    <Ionicons 
                                        name="people"
                                        size={22} 
                                        color="#F85B61"
                                        backgroundColor="#FF5A60"
                                        style={{}}
                                    />
                                ):(
                                    <Ionicons 
                                        name="person-add"
                                        size={22} 
                                        color="#F85B61"
                                        backgroundColor="#FF5A60"
                                        style={{}}
                                    />
                                )}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {index+1 <= members.length -1 && (
                    <View style={{height:2,backgroundColor:"#E5E5E5"}}></View>
                )}
            </View>
        </View>
    );
    return (
        <>
            <ScrollView style={[styles.container]}>
                <View style={[styles.BG]}>
                    <View style={{flex:1, flexDirection:"column", marginTop:20,paddingBottom:20}}>
                        <FlatList
                            data={members}
                            initialNumToRender={20}
                            renderItem={_renderItem}
                            keyExtractor={(item, index) => item + index}
                            showsVerticalScrollIndicator={false}
                            alwaysBounceVertical
                        />
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
export default Followers;