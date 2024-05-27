import React from 'react';
import {
    ScrollView,
    StyleSheet,
    StatusBar,
    View,
    Text,
    FlatList,
    Dimensions,
} from 'react-native';
  
import {TouchableOpacity} from 'react-native-gesture-handler';
import Moment from 'moment';
import AutoHeightImage from 'react-native-auto-height-image';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Approved = (props) => {
    const [imageList, setImageList] = React.useState([
        {
          imgUrl: "https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg",
        },
        {
          imgUrl: "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
        },
        {
          imgUrl: "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
        },
        {
          imgUrl: "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
        },
        {
          imgUrl: "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
        },
        {
          imgUrl: "https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg",
        },
        {
          imgUrl: "https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg",
        },
    ]);
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <View style={styles.BG}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{flex: 1,marginTop:20,marginBottom:20,marginLeft:15}}>
                            <View style={{flex:1,flexDirection:"row"}}>
                                <FlatList
                                    data={imageList}
                                    renderItem={({item,index}) => (
                                        <View style={{flex:0.4,}}>
                                            <AutoHeightImage
                                                width={Dimensions.get('window').width * 0.9}
                                                height={150}
                                                source={{
                                                    uri: item.imgUrl
                                                }}
                                                style={{borderRadius:6,width:"90%",height:150,marginBottom:10}}
                                            />
                                        </View>
                                    )}
                                    //Setting the number of column
                                    numColumns={3}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
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
    
});
export default Approved;