import React, { useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

const RejectedTasks = (props) => {
    const rejectedArray = props.rejected;
    useEffect(() => {});
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.boxContainer}>
                        {rejectedArray.map((item, index) => (
                            <View style={styles.box} key={index}>
                                <View style={{flex:0.2}}>
                                    <Image
                                        style={[styles.avatar]}
                                        source={{uri: item.imgUrl}}
                                    />
                                </View>
                                <View style={{flex:0.8,flexDirection:"column"}}>
                                    <View style={{flex:1,flexDirection:"row"}}>
                                        <View style={{flex:0.8,flexDirection:"column"}}>
                                            {item.status == 1 && (
                                                <Text style={[styles.verification,{alignSelf: 'flex-start'}]}>
                                                    <Text>Under manual verification</Text>
                                                </Text>
                                            )}
                                            <Text style={styles.txtContent}>Your photo submission in #CoffeeRefill was rejected by our system AI</Text>
                                        </View>
                                        <View style={{flex:0.2}}>
                                            {item.status == 0 && (
                                                <TouchableOpacity
                                                    style={[styles.button]}
                                                    //onPress={this.onPress}
                                                >
                                                    <Text style={styles.btnTxt1}>Verify</Text>
                                                </TouchableOpacity>
                                            )}
                                        </View>
                                    </View>
                                    {index+1 <= rejectedArray.length -1 && (
                                        <View style={{height:1,backgroundColor:"#E5E5E5",marginTop:10}}></View>
                                    )}
                                </View>
                            </View>
                        ))}
                    </View>
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
        borderRadius:8,
        marginTop:5,
    },
    verification:{
        backgroundColor:"#FF585D",
        fontFamily:"FiraSans-Regular",
        color:"#fff",
        borderRadius:20,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:10,
        paddingRight:10,
        //width:"75%",
        textAlign:"center",
        textAlignVertical: "center",
    },
    txtContent:{
        marginTop:5,
        fontFamily:"FiraSans-Regular",
        color:"#656565",
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
    
  });
  

export default RejectedTasks;