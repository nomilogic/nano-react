/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { Colors } from "../Colors/colors";
import { nanoTaskData } from "./nanoTaskData";
import { SvgCssUri } from "react-native-svg";
import MaskedView from "@react-native-community/masked-view";
import LinearGradient from "react-native-linear-gradient";
import Camera from "../camera/camera";
import CustomActionSheet from "../camera/customActionSheet";
import { bindActionCreators } from "redux";
import * as loginAction from "../../../src/actions/loginAction";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import { Toast } from "../feed/feedComponents";

class NanoTaskScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nanoTasks: [],
      userData: {},
      toastMessage: { visible: false, message: "" },
    };
    this.loadTaskList();
  }

  async loadTaskList() {
    let udata = await this.GetUserData();
    this.GetNanoTaskList();
  }

  coinIcon = "https://media.nanodot.us/img/nano coins.svg";

  imageActionSheetData = {
    mainTitle: "Select Image Source",
    showCancel: true,
    buttonsData: [
      {
        title: "Shoot Photo",
        action: () => {
          Camera.loadCamera("photo", "camera", (response) => {
            //console.log(response);
             console.log(response);
            if (response.didCancel) {
              this.setState({
                toastMessage: { visible: true, message: "Image not selected" },
              });
            } else {
              this.props.navigation.navigate("NanoTaskUpload", {
                camData: response.assets,
                nanoTask: this.state.nanoTasks[0],
                nanoTasks: this.state.nanoTasks,
              });
            }
          });
        },
      },
      {
        title: "Load Photo",
        action: () => {
          Camera.loadCamera("photo", "library", (response) => {
            console.log(response);
            if (response.didCancel) {
              this.setState({
                toastMessage: { visible: true, message: "Image not selected" },
              });
            } else {
              this.props.navigation.navigate("NanoTaskUpload", {
                camData: response.assets,
                nanoTask: this.state.nanoTasks[0],
                nanoTasks: this.state.nanoTasks,
              });
            }
          });
        },
      },
    ],
  };

  imageActionSheet = new CustomActionSheet(this.imageActionSheetData);
  GetUserData = async () => {
    let udata = await AsyncStorage.getItem("userData");
    // Alert.alert('Success!', 'Username Correct.', [{text: 'Okay'}]);
    this.setState({ userData: JSON.parse(udata) });
    return udata;
  };

  GetNanoTaskList = () => {
    console.log(this.state.userData.id);
    this.props.actions
      .getNanoTaskList(this.state.userData.id)
      .then(async (resp) => {
        console.log(resp, "TaskData");

        if (resp.status == 200) {
          this.setState({ nanoTasks: resp.data });
          //const jsonValue = JSON.stringify(resp.data.data);
          //console.log(resp,"TaskData")
          //await AsyncStorage.setItem('userData', jsonValue);
          // Alert.alert('Success!', 'Username Correct.', [{text: 'Okay'}]);
          //this.setState({loginSuccess: true});
        } else {
          Alert.alert("Wrong Input!", "Username InCorrect.", [
            { text: "Okay" },
          ]);
      }
      });
  };

  renderNanoTasks = (taskArray) => {
    //  console.log(this.state.userData? JSON.parse(this.state.userData).id:"","usa");
    var renderSponsor = (item) => {
      if (item.sponsor && item.sponsor.name) {
        return <Text>{item.sponsor.name + " Task"}</Text>;
      }
    };
    var nanoListArray = taskArray.map((item, index) => {
      console.log(index);
      if (index === 0) {
        return;
      }
      var TaskNode = (
        <View key={index}>
          <TouchableOpacity
            delayPressIn={50}
            onPress={() =>
              this.props.navigation.navigate("NanoTaskDetails", {
                nanoTask: item,
              })
            }
          >
            <ImageBackground
              style={[styles.nanoTaskBox]}
              source={{ uri: item.bgImg }}
              imageStyle={{ borderRadius: 8, resizeMode: "cover" }}
            >
              <View
                style={[
                  {
                    justifyContent: "center",
                    flexDirection: "column",
                    flex: 1,
                  },
                ]}
              >
                <Text
                  style={[
                    {
                      color: Colors.white,
                      fontSize: 25,
                      textAlign: "left",
                      fontFamily: "FiraSans-Regular",
                      margin: 20,
                      textShadowColor: "#001",
                      textShadowOffset: { width: 1, height: 1 },
                      textShadowRadius: 5,
                      fontWeight: "100",
                    },
                  ]}
                >
                  {"#" + item.title}
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  {
                    position: "absolute",
                    right: 10,
                    top: 6,
                    width: 30,
                    height: 30,
                  },
                ]}
              >
                <Image
                  source={{ uri: "https://media.nanodot.us/img/trophy.png" }}
                  style={[
                    {
                      width: 30,
                      height: 30,
                    },
                  ]}
                />
              </TouchableOpacity>
              <View>{renderSponsor(item)}</View>
              <View
                style={[
                  {
                    position: "absolute",
                    right: 10,
                    bottom: 5,
                    flexDirection: "row-reverse",
                    backgroundColor: Colors.lightGrey,
                    borderRadius:12,
                  },
                ]}
              >
            
              {item.carbonMultiplier && <Text style={[{fontSize:12,marginHorizontal:20, color:Colors.black,  fontFamily: 'FiraSans-Bold',marginBottom:2}]}>{item.carbonMultiplier}{console.log(item,"carbo")} gram(s) CO<Text>2</Text>e<Text style={{color:Colors.darkGrey}}>/task</Text></Text>}
                
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      );

      return TaskNode;
    });
    return nanoListArray;
  };
  render() {
    return this.state.nanoTasks.length != 0 ? (
      <View style={styles.container}>
        <Toast
          visible={this.state.toastMessage.visible}
          message={this.state.toastMessage.message}
        />
        <View style={styles.body}>
          <StatusBar barStyle="light-content" />
          <View style={[styles.topContainer]}>
            <Image
              source={{ uri: this.state.nanoTasks[0].imgURL }}
              style={styles.logoImage}
            />
          </View>
          <View style={styles.topBox}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("NanoTaskDetails", {
                  nanoTask: this.state.nanoTasks[0],
                })
              }
            >
              <Text
                style={[
                  {
                    color: Colors.black,
                    textAlign: "center",
                    fontSize: 28,
                    marginVertical: 10,
                    fontFamily: "FiraSans-SemiBold",
                  },
                ]}
              >
                {("#" + this.state.nanoTasks[0].title).toUpperCase()}
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Leaderboard')}
              style={[
                {
                  position: 'absolute',
                  right: 10,
                  top: 6,
                  width: 30,
                  height: 30,
                },
              ]}>
              <MaskedView
                style={{width: 30, height: 30}}
                maskElement={
                  <Image
                    source={{uri: 'https://media.nanodot.us/img/trophy.png'}}
                    style={[
                      {
                        width: 30,
                        height: 30,
                      },
                    ]}
                  />
                }>
                <View
                  style={[
                    {width: 30, height: 30, backgroundColor: Colors.black},
                  ]}
                />
              </MaskedView>
            </TouchableOpacity> */}
            <LinearGradient
              useAngle={true}
              angle={45}
              angleCenter={{ x: 0.5, y: 0.5 }}
              style={[
                styles.redBorderButton,
                {
                  height: 30,
                  borderWidth: 0,
                  backgroundColor: "transparent",
                  borderRadius: 50,
                  width: 100,
                },
              ]}
              colors={["#FF5A60", "#DB55BC"]}
            >
              <TouchableOpacity onPress={() => this.imageActionSheet.show()}>
                <Text
                  style={[
                    {
                      fontSize: 14,
                      color: Colors.white,
                      textAlign: "center",
                      fontFamily: "FiraSans-Bold",
                    },
                  ]}
                >
                  Upload
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            {/* <View
              style={[
                {
                  position: 'absolute',
                  right: 10,
                  bottom: 5,
                  flexDirection: 'row-reverse',
                },
              ]}>
              <Text
                style={[
                  {
                    paddingTop: 2,
                  },
                ]}>
                <SvgCssUri
                  width="22"
                  height="22"
                  uri="https://media.nanodot.us/img/nano coins.svg"
                />
              </Text>
              <Text
                style={[
                  {
                    color: Colors.primary,
                    fontSize: 20,
                    marginHorizontal: 2,
                    fontFamily: 'FiraSans-Bold',
                  },
                ]}>
                {this.state.nanoTasks[0].points}
              </Text>
            </View> */}
          </View>
          <View style={[{ flex: 5 }]}>
            <ScrollView>
              <View>{this.renderNanoTasks(this.state.nanoTasks)}</View>
              {/* {this.nanoListArray} */}
            </ScrollView>
          </View>
        </View>
        {this.imageActionSheet.ActionSheetNode()}
      </View>
    ) : (
      <View />
    );
  }
}

function mapStateToProps(state) {
  return {
    // login: state.login,
    // logout: state.logout,
    // menuPermissions: state.login.menuPermissions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NanoTaskScreen);
const styles = StyleSheet.create({
  scrollView: {},
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    // justifyContent: 'center',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width: "100%",

    justifyContent: "space-around",
    flexDirection: "row",
  },
  topBox: {
    height: 100,
    backgroundColor: Colors.white,
    alignContent: "center",
    color: Colors.orange,
    marginTop: -50,
    borderRadius: 15,
    marginHorizontal: "10%",
    shadowColor: "#000",
    zIndex:2,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 30,
    marginBottom: -20,
  },
  nanoTaskBox: {
    height: 100,
    backgroundColor: Colors.white,
    alignContent: "center",
    color: Colors.white,
    borderRadius: 12,
    margin: 4,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    flex: 1,
  },

  logoImage: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    resizeMode: "cover",
  },
  logoContainer: {
    alignContent: "center",
    justifyContent: "center",
  },
  topContainer: {
    alignContent: "center",
    justifyContent: "center",
    flex: 4,
  },
  taskBox: {
    alignContent: "center",
    justifyContent: "center",
    height: 100,
    width: "100%",
  },
  outerContainer: {
    alignContent: "center",
    justifyContent: "center",
    flex: 4,
  },
  innerContainer: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: Colors.blackTransparent,
  },
  redBorderButton: {
    height: 26,
    backgroundColor: "transparent",
    alignContent: "center",
    justifyContent: "center",
    width: 70,
    color: Colors.primary,
    borderColor: Colors.primary,
    alignSelf: "center",
    borderRadius: 5,
    borderWidth: 2,
  },
});

//export default NanoTaskScreen;
