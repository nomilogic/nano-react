import React, { Component } from 'react';
import {
    ScrollView, 
    StyleSheet,
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Switch,
    Modal,
    Animated,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
class Account extends Component{
    
    constructor(props) {
        super(props);
    }
    state = {
        name: "Jolly",
        email:"jolly@yahoo.com",
        description:"Social Worker",
        isEnabled:true,
        setIsEnabled:false,
        boxAnimation:new Animated.Value(0),
        animationHeight:new Animated.Value(0),
        checked:0,
        isChecked:false,
        elevation:0,
        selectedTitle:"English",
        language: [
            {
                title:"English",
                page:"English",
                val:0
            },
            {
                title:"Español",
                page:"Esponal",
                val:1
            },
            {
                title:"Français",
                page:"Francais",
                val:2
            },
            {
                title:"German",
                page:"German",
                val:3
            },
        ],
        boxAnimation2:new Animated.Value(0),
        animationHeight2:new Animated.Value(0),
        checked2:0,
        isChecked2:false,
        elevation2:0,
        selectedTitle2:"Imperial",
        system: [
            {
                title:"Imperial",
                page:"Imperial",
                val:0
            },
            {
                title:"Metric",
                page:"Metric",
                val:1
            },
        ],
        modalVisible: false,
        oldPassword: "",
        newPassword: "",
    };
    animateBox = () => {
        if(this.state.boxAnimation._value == 0)
        {
            this.setState({elevation:4});
            Animated.timing(this.state.boxAnimation,{
                toValue:150,
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
    animateBox2 = () => {
        if(this.state.boxAnimation2._value == 0)
        {
            this.setState({elevation2:4});
            Animated.timing(this.state.boxAnimation2,{
                toValue:150,
                duration:200,
                useNativeDriver:false,
            }).start();
            Animated.timing(this.state.animationHeight2,{
                toValue:80,
                duration:200,
                useNativeDriver:false,
            }).start();
        }
        else if(this.state.boxAnimation2._value > 0)
        {
            this.setState({elevation2:0});
            Animated.timing(this.state.boxAnimation2,{
                toValue:0,
                duration:0,
                useNativeDriver:false,
            }).start();
            Animated.timing(this.state.animationHeight2,{
                toValue:0,
                duration:0,
                useNativeDriver:false,
            }).start();
        }
    }
    checked2(checked,selectedTitle){
        if(this.state.isChecked2 == false)
        {
            this.setState({
                isChecked2:true
            });
        }
        this.setState({
            selectedTitle2:selectedTitle
        });
        this.setState({
            checked2:checked
        });
        this.setState({elevation2:0});
        setTimeout(()=>{
            if(this.state.boxAnimation2._value > 0)
            {
                Animated.timing(this.state.boxAnimation2,{
                    toValue:0,
                    duration:0,
                    useNativeDriver:false,
                }).start();
                Animated.timing(this.state.animationHeight2,{
                    toValue:0,
                    duration:0,
                    useNativeDriver:false,
                }).start();
            }
        }, 200);
    }
    toggleSwitch = (value) => {
        if(value == true)
        {
            this.setState({isEnabled: false});
        }
        else
        {
            this.setState({isEnabled: true});
        }
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    formSubmit = () => {
        this.setModalVisible(false);
        alert(this.state.oldPassword,this.state.newPassword);
    }
    render() {
        const { modalVisible } = this.state;
        const boxAnimated = {
            width:this.state.boxAnimation,
            height:this.state.animationHeight,
        }
        const boxAnimated2 = {
            width:this.state.boxAnimation2,
            height:this.state.animationHeight2,
        }
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor="#FF5A60"/>
                <ScrollView style={[styles.container]}>
                    <View style={[styles.BG]}>
                        <View style={{flex:1,flexDirection:"column"}}>
                            <TextInput
                                placeholder="Username"
                                style={[styles.textInput,
                                    {width:"85%",top:2,left:10,color:"#1B1B1B",borderBottomWidth:1,borderBottomColor:"#74B789"}]}
                                placeholderTextColor="#1B1B1B"
                                onChangeText={(value) => this.setState({name: value})}
                                value={this.state.name}
                            />
                            <TextInput
                                placeholder="Email"
                                style={[styles.textInput,{width:"85%",top:2,left:10,color:"#A1A1A1",borderBottomWidth:1,borderBottomColor:"#E2E2E2"}]}
                                placeholderTextColor="#A1A1A1"
                                onChangeText={(value) => this.setState({email: value})}
                                value={this.state.email}
                            />
                            <TextInput style = {[styles.textInput,{color:"#1B1B1B",borderBottomWidth:1,borderBottomColor:"#62BE87",textAlignVertical: 'top',height:80}]}
                                // underlineColorAndroid = "transparent"
                                placeholder = "Description"
                                placeholderTextColor = '#1B1B1B'
                                // autoCapitalize = "none"
                                multiline={true}
                                numberOfLines={5}
                                onChangeText={(value) => this.setState({description: value})}
                                value={this.state.description}
                            />
                            <TouchableOpacity
                                style={[styles.button,{width: 150,marginTop:15,}]}
                                //onPress={this.onPress}
                                onPress={() => this.setModalVisible(true)}
                            >
                                <Text style={styles.buttonTxt}>RESET PASSWORD</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1,flexDirection:"column",marginTop:80,}}>
                            <View style={{flex:1,flexDirection:"row"}}>
                                <Text style={{flex:0.7,top:4,color:"#CBCBCB",fontSize:18,fontFamily:"FiraSans-Light"}}>Allow Push-notifications</Text>
                                <Switch
                                    trackColor={{ false: "#BDBDBD", true: "#FF949820" }}
                                    thumbColor={this.state.isEnabled == true ? "#FF5A60" : "#fff"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={this.toggleSwitch}
                                    value={this.state.isEnabled}
                                    style={{flex:0.4,alignItems:'flex-end'}}
                                />
                            </View>
                            <View style={{flex:1,flexDirection:"column",marginTop:20}}>
                                <TouchableOpacity
                                    style={[{flex:1,flexDirecrion:"column"}]}
                                    onPress={() => this.animateBox()}
                                >
                                    <View style={{flex:1,flexDirection:"row"}}>
                                        <View style={{flex:0.9}}><Text style={{color:"#CBCBCB",fontSize:18}}>Select your language</Text></View>
                                        <View style={{flex:0.2}}><Text style={{color:"#000"}} numberOfLines={1}>{this.state.selectedTitle}</Text></View>
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
                                    
                                    
                                    {this.state.language.map((item, index) => (
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
                                            {index + 1 <= this.state.language.length - 1 && (
                                                <View style={{height: 1, backgroundColor: '#E5E5E5'}} />
                                            )}
                                        </View>
                                    ))}
                                </Animated.View>
                            </View>
                            <View style={{flex:1,flexDirection:"column",marginTop:20}}>
                                <TouchableOpacity
                                    style={[{flex:1,flexDirecrion:"column"}]}
                                    onPress={() => this.animateBox2()}
                                >
                                    <View style={{flex:1,flexDirection:"row"}}>
                                        <View style={{flex:0.9}}><Text style={{color:"#CBCBCB",fontSize:18}}>Select your unit system</Text></View>
                                        <View style={{flex:0.2}}><Text style={{color:"#000"}} numberOfLines={1}>{this.state.selectedTitle2}</Text></View>
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
                                <Animated.View style={[boxAnimated2,{
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
                                    
                                    
                                    {this.state.system.map((item, index) => (
                                        <View style={{paddingLeft:15,paddingRight:15,flex:1}} key={index}>
                                            <TouchableOpacity
                                                style={[{flexDirection:"row",paddingTop:10}]}
                                                onPress={() => this.checked2(item.val,item.title)}
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
                                                            onPress={() => this.checked2(item.val,item.title)}
                                                        />
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            {index + 1 <= this.state.system.length - 1 && (
                                                <View style={{height: 1, backgroundColor: '#E5E5E5'}} />
                                            )}
                                        </View>
                                    ))}
                                </Animated.View>
                            </View>
                            <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItem:"center",marginTop:30}}>
                                <TouchableOpacity
                                    style={[styles.button,{width: 150}]}
                                    //onPress={this.onPress}
                                >
                                    <Text style={styles.buttonTxt}>SAVE SETTINGS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            this.setModalVisible(!modalVisible);
                        }}
                        >
                        <View style={styles.centeredView}>
                            <View style={[styles.modalView, {width:"80%"}]}>
                                <View style={{backgroundColor:"transparent"}}>
                                    <Text style={{marginLeft:10,color:"#000",fontFamily:"FiraSans-Regular",fontSize:20}}>Enter Password</Text>
                                </View>
                                <View style={{width:"100%"}}>
                                    <TextInput
                                        placeholder="Current Password"
                                        style={[styles.textInput,
                                            {marginTop:20,color:"#A1A1A1",borderBottomWidth:1,borderBottomColor:"#E2E2E2",width:"100%",fontSize:14,fontFamily:"FiraSans-Regular"}]}
                                        placeholderTextColor="#A1A1A1"
                                        onChangeText={(value) => this.setState({oldPassword: value})}
                                        value={this.state.oldPassword}
                                    />
                                    <TextInput
                                        placeholder="New Password"
                                        style={[styles.textInput,{marginTop:10,color:"#A1A1A1",borderBottomWidth:1,borderBottomColor:"#E2E2E2",width:"100%",fontSize:14,fontFamily:"FiraSans-Regular"}]}
                                        placeholderTextColor="#A1A1A1"
                                        onChangeText={(value) => this.setState({newPassword: value})}
                                        value={this.state.newPassword}
                                    />
                                    <View style={{backgroundColor:"transparent"}}>
                                        <View style={{flexDirection:"row",alignItems:"flex-end",justifyContent:"flex-end",marginTop:50}}>
                                            <TouchableOpacity
                                                style={[{width: 60}]}
                                                //onPress={() => this.formSubmit()}
                                                onPress={() => {
                                                    this.setModalVisible(!modalVisible);
                                                }}
                                            >
                                                <Text style={{color:"#F85B61",fontFamily:"FiraSans-Regular",fontSize:16,textAlign:"right"}}>CANCEL</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={[{width: 60}]}
                                                //onPress={() => this.formSubmit()}
                                            >
                                                <Text style={{color:"#F85B61",fontFamily:"FiraSans-Regular",fontSize:16,textAlign:"right"}}>SAVE</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
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
        padding:15,
    },
    textInput: {
        width: "90%",
        height: 40,
        backgroundColor: 'transparent',
        fontSize: 18,
        padding: 8,
        color: '#ffffff',
        marginTop:10,
        fontFamily:"FiraSans-Regular"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#F85B61",
        padding: 10,
        borderRadius:5,
        
    },
    buttonTxt:{
        fontFamily:"FiraSans-Regular",
        fontSize:14,
        color:"#fff"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    
    
    
});
export default Account;