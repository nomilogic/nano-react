/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Animated,
  Platform,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../Colors/colors';
import {Icon} from '../Icons/icons';

class Feedback extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    boxAnimation: new Animated.Value(0),
    animationHeight: new Animated.Value(0),
    report: [
      {
        title: 'General feedback',
        page: 'GeneralFeedback',
        val: 0,
      },
      {
        title: 'Nano app support',
        page: 'NanoAppSupport',
        val: 1,
      },
      {
        title: 'An inappropriate user',
        page: 'AnInappropriateUser',
        val: 2,
      },
    ],
    device: '',
    feedback: '',
    checked: 0,
    isChecked: false,
    elevation: 0,
    selectedTitle: '',
    selectedImage: '',
  };
  animateBox = () => {
    if (this.state.boxAnimation._value == 0) {
      this.setState({elevation: 4});
      Animated.timing(this.state.boxAnimation, {
        toValue: 250,
        duration: 200,
        useNativeDriver: false,
      }).start();
      Animated.timing(this.state.animationHeight, {
        toValue: 160,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else if (this.state.boxAnimation._value > 0) {
      this.setState({elevation: 0});
      Animated.timing(this.state.boxAnimation, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
      Animated.timing(this.state.animationHeight, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
    }
  };
  checked(checked, selectedTitle) {
    if (this.state.isChecked == false) {
      this.setState({
        isChecked: true,
      });
    }
    this.setState({
      selectedTitle: selectedTitle,
    });
    this.setState({
      checked: checked,
    });
    this.setState({elevation: 0});
    setTimeout(() => {
      if (this.state.boxAnimation._value > 0) {
        Animated.timing(this.state.boxAnimation, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start();
        Animated.timing(this.state.animationHeight, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start();
      }
    }, 200);
  }
  componentDidMount() {
    console.log(this.state.isChecked);
  }
  render() {
    const boxAnimated = {
      width: this.state.boxAnimation,
      height: this.state.animationHeight,
    };
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#FF5A60" />
        <ScrollView style={[styles.container]}>
          <View style={[styles.BG]}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: 20,
                padding: 20,
              }}>
              <View style={{backgroundColor: 'transparent', zIndex: 1}}>
                <TouchableOpacity
                  style={[{flex: 1, flexDirecrion: 'column', padding: 10,  borderRadius: 10,
                        backgroundColor: !this.state.selectedTitle? Colors.fieldGrey:'transparent',
                        borderStyle:'solid',
                        borderWidth:1,
                        borderColor: this.state.selectedTitle? Colors.grey:'transparent',
                }]}
                  onPress={() => this.animateBox()}>
                  <View style={{flex: 1, flexDirection: 'row', }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection:"row"

                      }}>
                      <Text style={[styles.font16, {color: Colors.darkGrey, flex:1}]}>{!this.state.selectedTitle? 'Report a problem':this.state.selectedTitle} </Text>
                   <Ionicons
                        name="caret-down"
                        size={16}
                        color="#989898"
                        style={{top: 0, alignSelf: 'flex-end',}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <Animated.View
                  style={[
                    boxAnimated,
                    {
                      backgroundColor: '#fff',
                      //width:250,
                      //height:160,
                      flex: 1,
                      position: 'relative',
                      alignSelf: 'flex-end',
                      zIndex: 10,
                      top: -30,
                      right: -15,
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
                    },
                  ]}>
                  {this.state.report.map((item, index) => (
                    <View
                      style={{paddingLeft: 15, paddingRight: 15, flex: 1}}
                      key={index}>
                      <TouchableOpacity
                        style={[{flexDirection: 'row', paddingTop: 10}]}
                        onPress={() => this.checked(item.val, item.title)}>
                        <View style={{flex: 0.8}}>
                          <Text
                            style={{
                              color:
                                this.state.checked === item.val &&
                                this.state.isChecked == true
                                  ? Colors.primary
                                  : Colors.grey,
                              paddingTop: 1,
                              fontFamily: 'FiraSans-Regular',
                              fontSize: 16,
                            }}>
                            {item.title}
                          </Text>
                        </View>
                        <View style={{flex: 0.2}}>
                          <View
                            style={{
                              alignSelf: 'center',
                              alignItems: 'flex-end',
                              marginTop: -5,
                            }}>
                            <RadioButton
                              value={item.val}
                              status={
                                this.state.checked === item.val &&
                                this.state.isChecked == true
                                  ? 'checked'
                                  : 'unchecked'
                              }
                              unCheckedColor="black"
                              color="#FF5A60"
                              width={5}
                              height={5}
                              onPress={() => this.checked(item.val, item.title)}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                      {index + 1 <= this.state.report.length - 1 && (
                        <View
                          style={{
                            height: 1,
                            backgroundColor: '#E5E5E5',
                            marginTop: 10,
                          }}
                        />
                      )}
                    </View>
                  ))}
                </Animated.View>
              </View>

              <TextInput
                style={[
                  styles.textInput,
                  styles.font16,
                  {
                    color: Colors.darkGrey,
                    textAlignVertical: 'top',
                    height: 50,
                    marginTop: 20,
                    fontSize:16,
                    borderRadius:10,
                    borderStyle:'solid',
                    borderWidth:1,
                    borderColor:Colors.grey,
                  },
                ]}
                // underlineColorAndroid = "transparent"
                placeholder="What phone device are you using"
                placeholderTextColor="#989898"
                // autoCapitalize = "none"
                multiline={true}
                numberOfLines={5}
                onChangeText={(value) => this.setState({device: value})}
                value={this.state.device}
              />
               <TouchableOpacity
                 
                  >
                  <View style={{flex: 1, flexDirection: 'row', marginTop: 20,}}>
                    <View
                       style={[{flex: 1, flexDirecrion: 'row', padding: 10,  borderRadius: 10,
                        backgroundColor: !this.state.selectedImage? Colors.fieldGrey:'transparent',
                        borderStyle:'solid',
                        borderWidth:1,
                        borderColor:this.state.selectedImage? Colors.grey:'transparent',
                         
                }]}>
                      <Text style={[styles.font16, {color: Colors.darkGrey, flex:1}]}>{!this.state.selectedImage? 'Upload Image (optional)':this.state.selectedImage} </Text>
                  
                    </View>
                    <View style={[{width:50,backgroundColor:Colors.primary, marginLeft:5,borderRadius:10,  alignItems: 'center',
                justifyContent: 'center'}]}>
                
                       <Icon
                  url={'https://nanodotapp.s3.amazonaws.com/img/svg/Add.svg'}
                  width={40}
                  height={40}
                  dontShowMask={true}
                  style={{alignSelf:"center"}}
                />
                      
                    </View>
                    
                  </View>
                </TouchableOpacity>

              <TextInput
                style={[
                  styles.textInput,
                  styles.font16,    
                  {
                    color: Colors.darkGrey,
                    textAlignVertical: 'top',
                    height: 250,
                    marginTop: 20,
                    borderRadius:10,
                    borderStyle:'solid',
                    borderWidth:1,
                    borderColor:Colors.grey,
                  },
                ]}
                // underlineColorAndroid = "transparent"
                placeholder="Type Feedback Here"
                placeholderTextColor="#989898"
                // autoCapitalize = "none"
                multiline={true}
                numberOfLines={10}
                onChangeText={(value) => this.setState({feedback: value})}
                value={this.state.feedback}
              />
              <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
                <TouchableOpacity
                  style={[styles.button, {marginTop: 15}]}
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
    backgroundColor: Colors.lightGrey,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  BG: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'transparent',
    padding: 10,
    color: '#ffffff',
    marginTop: 10,
    fontFamily: 'FiraSans-Regular',
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F85B61',
    padding: 30,
    borderRadius: 10,
    paddingHorizontal:50,
  },
  buttonTxt: {
    fontFamily: 'FiraSans-Regular',
    fontSize: 22,
    color: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  box: {
    backgroundColor: Colors.lightGrey,
    flex: 1,
    margin: 5,
    borderRadius: 12,
    paddingLeft: 10,
    elevation: 4,
  },
  boxRow: {margin: 2},
  font16: {fontSize: 18, fontFamily: 'FiraSans-Regular'},
});
export default Feedback;
