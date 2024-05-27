import React, { Component } from 'react';
import {
    ScrollView, 
    StyleSheet,
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Animated,
    
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
class Feedback extends Component{
    
    constructor(props) {
        super(props);
    }
    state = {
        boxAnimation:new Animated.Value(0),
        animationHeight:new Animated.Value(0),
        report: [
            {
                title:"General feedback",
                page:"GeneralFeedback",
                val:0
            },
            {
                title:"Nano app support",
                page:"NanoAppSupport",
                val:1
            },
            {
                title:"An inappropriate user",
                page:"AnInappropriateUser",
                val:2
            },
        ],
        device:"",
        feedback:"",
        checked:0,
        isChecked:false,
        elevation:0,
        selectedTitle:"",
    };
    animateBox = () => {
        if(this.state.boxAnimation._value == 0)
        {
            this.setState({elevation:4});
            Animated.timing(this.state.boxAnimation,{
                toValue:250,
                duration:200,
                useNativeDriver:false,
            }).start();
            Animated.timing(this.state.animationHeight,{
                toValue:160,
                duration:200,
                useNativeDriver:false,
            }).start();
        }
        else if(this.state.boxAnimation._value > 0)
        {
            this.setState({elevation:0});
            Animated.timing(this.state.boxAnimation,{
                toValue:0,
                duration:0,
                useNativeDriver:false,
            }).start();
            Animated.timing(this.state.animationHeight,{
                toValue:0,
                duration:0,
                useNativeDriver:false,
            }).start();
        }
    }
    checked(checked,selectedTitle){
        if(this.state.isChecked == false)
        {
            this.setState({
                isChecked:true
            });
        }
        this.setState({
            selectedTitle:selectedTitle
        });
        this.setState({
            checked:checked
        });
        this.setState({elevation:0});
        setTimeout(()=>{
            if(this.state.boxAnimation._value > 0)
            {
                Animated.timing(this.state.boxAnimation,{
                    toValue:0,
                    duration:0,
                    useNativeDriver:false,
                }).start();
                Animated.timing(this.state.animationHeight,{
                    toValue:0,
                    duration:0,
                    useNativeDriver:false,
                }).start();
            }
        }, 200);
    }
    componentDidMount() {
        console.log(this.state.isChecked);
    }
    render() {
        const boxAnimated = {
            width:this.state.boxAnimation,
            height:this.state.animationHeight,
        }
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor="#FF5A60"/>
                <ScrollView style={[styles.container]}>
                    <View style={[styles.BG]}>
                        <View style={{flex:1, flexDirection:"column", marginTop:40,padding:20}}>
                        
                            <View style={{backgroundColor:"transparent",zIndex:1}}>
                            
                                <TouchableOpacity
                                    style={[{flex:1,flexDirecrion:"column",padding:10}]}
                                    onPress={() => this.animateBox()}
                                >
                                    <View style={{flex:1,flexDirection:"row"}}>
                                        <View style={{flex:0.7}}><Text style={{color:"#989898"}}>Report a problem</Text></View>
                                        <View style={{flex:0.4}}><Text style={{color:"#000"}} numberOfLines={1}>{this.state.selectedTitle}</Text></View>
                                        <View style={{flex:0.1}}>
                                            <Ionicons 
                                                name="caret-down" 
                                                size={16} 
                                                color="#989898"
                                                style={{top:2,alignSelf:"flex-end"}} 
                                            />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <Animated.View style={[boxAnimated,{
                                    backgroundColor:"#fff",
                                    //width:250,
                                    //height:160,
                                    flex:1,
                                    position:"relative",
                                    alignSelf:"flex-end",
                                    zIndex:10,
                                    top:-30,
                                    right:-15,
                                    //padding:10,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                    width: 1,
                                    height: 1,
                                    },
                                    shadowOpacity: 0.4,
                                    shadowRadius: 3,
                                    //elevation: this.state.elevation,
                                    elevation: 5,
                                    //padding:10,
                                }]}>
                                    
                                    
                                    {this.state.report.map((item, index) => (
                                        <View style={{paddingLeft:15,paddingRight:15,flex:1}} key={index}>
                                            <TouchableOpacity
                                                style={[{flexDirection:"row",paddingTop:10}]}
                                                onPress={() => this.checked(item.val,item.title)}
                                            >
                                                <View style={{flex:0.8}}><Text style={{color:this.state.checked === item.val && this.state.isChecked == true ? '#FF5A60' : '#000',paddingTop:1,fontFamily:"FiraSans-Regular",fontSize:16}}>{item.title}</Text></View>
                                                <View style={{flex:0.2}}>
                                                    <View style={{alignSelf: 'center',alignItems:"flex-end",marginTop:-5}}>
                                                        <RadioButton
                                                            value={item.val}
                                                            status={ this.state.checked === item.val && this.state.isChecked == true ? 'checked' : 'unchecked' }
                                                            unCheckedColor="black"
                                                            color="#FF5A60"
                                                            width={5}
                                                            height={5}
                                                            onPress={() => this.checked(item.val,item.title)}
                                                        />
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            {index + 1 <= this.state.report.length - 1 && (
                                                <View style={{height: 1, backgroundColor: '#E5E5E5',marginTop:10,}} />
                                            )}
                                        </View>
                                    ))}
                                </Animated.View>
                                
                            </View>
                            
                             <TextInput style = {[styles.textInput,{color:"#989898",borderBottomWidth:1,borderBottomColor:"#E4E4E4",textAlignVertical: 'top',height:80,marginTop:20}]}
                                // underlineColorAndroid = "transparent"
                                placeholder = "What phone device are you using"
                                placeholderTextColor = '#989898'
                                // autoCapitalize = "none"
                                multiline={true}
                                numberOfLines={5}
                                onChangeText={(value) => this.setState({device: value})}
                                value={this.state.device}
                            />
                            <TextInput style = {[styles.textInput,{color:"#989898",borderBottomWidth:1,borderBottomColor:"#E4E4E4",textAlignVertical: 'top',height:150}]}
                                // underlineColorAndroid = "transparent"
                                placeholder = "Type Feedback Here"
                                placeholderTextColor = '#989898'
                                // autoCapitalize = "none"
                                multiline={true}
                                numberOfLines={10}
                                onChangeText={(value) => this.setState({feedback: value})}
                                value={this.state.feedback}
                            />
                            <View style={{alignItems:"center",justifyContent:"center"}}>
                                <TouchableOpacity
                                    style={[styles.button,{marginTop:15,}]}
                                    //onPress={this.onPress}
                                >
                                    <Text style={styles.buttonTxt}>SUBMIT</Text>
                                </TouchableOpacity>
                            </View>
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
    textInput: {
        width: "100%",
        height: 40,
        backgroundColor: 'transparent',
        fontSize: 12,
        padding: 10,
        color: '#ffffff',
        marginTop:10,
        fontFamily:"FiraSans-Regular",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#F85B61",
        padding: 10,
        borderRadius:5,
       
    },
    buttonTxt:{
        fontFamily:"FiraSans-Regular",
        fontSize:22,
        color:"#fff",
        paddingLeft:10,
        paddingRight:10
        
    }
    
    
});
export default Feedback;