/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Toast } from "../feed/feedComponents";


import { Colors } from '../Colors/colors';
import { nanoTaskData } from './nanoTaskData';
import { FlatList } from 'react-native';
import CustomActionSheet from '../camera/customActionSheet';
import Camera from '../camera/camera';
import * as loginApi from '../../api/loginApi';

class NanoTaskDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nanoTasks: nanoTaskData.tasksArray,
      taskImages: [],
      showMore: false,
      nanoTask : this.props.route.params.nanoTask,
      toastMessage: { visible: false, message: "" },

    };
    console.log(this.state.nanoTask.id,"tid")
   // loginApi.getNanoTask(this.state.nanoTask.id).then(res=>{console.log(res,"resp")});
    loginApi.getNanoTaskImages(this.state.nanoTask.title).then(res=>{console.log(res.data,"resp")
    this.setState({taskImages:res.data.data})
  
  });
    
  }
  componentDidMount() {
    this.setState({});
    setTimeout(() => {
      this.forceUpdate();
    }, 8000);
  }
imageActionSheetData = {
    mainTitle: 'Select Image Source',
    showCancel: true,
    buttonsData: [
      {
        title: 'Shoot Photo',
        action: () => {
          Camera.loadCamera('photo', 'camera', (response) => {
            console.log(response);
           if (response.didCancel) {
              this.setState({
                toastMessage: { visible: true, message: "Image not selected" },
              });
            } else {
              this.props.navigation.navigate("NanoTaskUpload", {
                camData: response.assets,
                nanoTask: this.state.nanoTask,
      
              });
            }
          });
        },
      },
      {
        title: 'Load Photo',
        action: () => {
          Camera.loadCamera('photo', 'library', (response) => {
            console.log(response);
             if (response.didCancel) {
              this.setState({
                toastMessage: { visible: true, message: "Image not selected" },
              });
            } else {
              this.props.navigation.navigate("NanoTaskUpload", {
                camData: response.assets,
                nanoTask: this.state.nanoTask,
      
              });
            }
          });
        },
      },
    ],
  };

  imageActionSheet = new CustomActionSheet(this.imageActionSheetData);
  ConvertTextToUpperCase = (A) => {
    var B = A.toUpperCase();
    return B;
  };

  renderNanoTasks = (taskArray) => {
    var nanoListArray = taskArray.map((item, index) => {
      var TaskNode = (
        <View key={index}>
          <TouchableOpacity delayPressIn={50}>
            <Image
              style={[styles.gridImage]}
              source={{ uri: item.contentThumbUrl }}
            />
          </TouchableOpacity>
        </View>
      );

      return TaskNode;
    });
    return nanoListArray;
  };

  render() {
    const nanoTask = this.props.route.params.nanoTask;
//    console.log(this.state.taskImages, 'nano');
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

      if (limit !== 0) {
      }
      txt = txt.trim();
      if (!showMore) {
        txt = (txt.trim().substring(0, Number(limit)) + '...').trim();
        if (!ShowMoreComponent) {
          return <Text>{txt} </Text>;
        } else {
          return (
            <Text>
              <Text>{txt} </Text>
              
              <ShowMoreComponent />
              
            </Text>
          );
        }
      } else {
        if (!ShowLessComponent) {
          return <Text>{txt} </Text>;
        } else {
          return (
            <Text>
              <Text>{txt} </Text>
              <ShowLessComponent />
            </Text>
          );
        }
      }
    };
    return (
      <View style={styles.container}>
        <Toast
          visible={this.state.toastMessage.visible}
          message={this.state.toastMessage.message}
        />
        <ScrollView style={{height:"100%"}}>
          <View style={styles.body}>
            <StatusBar barStyle="light-content" />
            <View style={[styles.topContainer]}>
              <Image
                source={{ uri: nanoTask.imgURL }}
                style={styles.topImage}
              />
            </View>
            <View>
              <Text
                style={[
                  {
                    color: Colors.grey,
                    textAlign: 'left',
                    fontSize: 31,
                    marginLeft: 20,
                    fontFamily: 'FiraSans-Bold',
                    height:40,



                  },
                ]}
              >
                {'#' + nanoTask.title}
              </Text>
              {nanoTask.carbonMultiplier && <Text style={[{marginHorizontal:20, color:Colors.primary,  fontFamily: 'FiraSans-Bold',marginBottom:2}]}>{nanoTask.carbonMultiplier}{console.log(nanoTask,"carbo")} gram(s) CO<Text>2</Text>e<Text>/task</Text></Text>}
              <TouchableOpacity
                style={styles.redBorderButton}
                onPress={() =>
                  // title
                  nanoTask.title == 'Commute'
                    ? this.props.navigation.navigate('RouteScreen', {
                        nanoTask: nanoTask,
                      })
                    : this.imageActionSheet.show()
                }
              >
                <Text
                  style={[
                    {
                      fontSize: 16,
                      color: Colors.primary,
                      textAlign: 'center',
                      textAlignVertical: 'bottom',
                       fontFamily: 'FiraSans-Bold',
                    },
                  ]}
                >
                  {nanoTask.title == 'Commute' ? 'Start' : 'Upload'}
                </Text>
              </TouchableOpacity>
<View>
              <Text
                style={[
                  {
                    color: Colors.midGrey,
                    textAlign: 'left',
                    fontSize: 16,
                    margin: 20,
                    marginTop:5,
                    fontFamily: 'FiraSans-Regular',
                  },
                ]}
              >
                <TruncateText
                  text={nanoTask.details}
                  limit={200}
                  showMore={this.state.showMore}
                  showMoreComponent={
                    <Text
                      style={{ height: 16 }}
                      onPress={() => {
                        this.setState({ showMore: true });
                        console.log(this.state.showMore);
                      }}
                    >
                      <Text
                        style={[
                          {
                            fontSize: 16,
                            color: Colors.primary,
                            textAlign: 'center',
                            fontFamily: 'FiraSans-Regular',
                          },
                        ]}
                      >
                        show more
                      </Text>
                    </Text>
                  }
                  showLessComponent={
                    <Text
                      style={[{ height: 16 }]}
                      onPress={() => {
                        this.setState({ showMore: false });
                      }}
                    >
                      <Text
                        style={[
                          {
                           fontSize: 16,
                            color: Colors.primary,
                            textAlign: 'center',
                            fontFamily: 'FiraSans-Regular',
                          },
                        ]}
                      >
                        show less
                      </Text>
                    </Text>
                  }
                />
              </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,

              }}
            >
              {/* <View>{this.renderNanoTasks(this.state.taskImages)}</View> */}
              {/* {this.nanoListArray} */}

              {<FlatList
                data={this.state.taskImages}
                renderItem={({ item }) => (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      margin: 4,
                    }}
                  >
                    <TouchableOpacity delayPressIn={50}>
                      <Image
                        style={[{ height: 120, borderRadius:12}]}
                        source={{ uri: item.contentThumbUrl }}
                      />
                    </TouchableOpacity>
                  </View>
                )}
                //Setting the number of column
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled={false}
              />}
            </View>
            <View style={{height:60}}></View>
          </View>
        </ScrollView>
         {this.imageActionSheet.ActionSheetNode()}
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {},
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  topBox: {
    height: 80,
    backgroundColor: Colors.white,
    alignContent: 'center',
    color: Colors.white,
    marginTop: -50,
    borderRadius: 8,
    marginHorizontal: '10%',
    shadowColor: '#000',

    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 30,
    marginBottom: 5,
  },
  nanoTaskBox: {
    height: 80,
    backgroundColor: Colors.white,
    alignContent: 'center',
    color: Colors.white,
    borderRadius: 12,
    margin: 4,
  },
  gridImage: {
    height: 100,
    flex: 1,
    margin: 4,
  },
  body: {
 

    height:"100%"

  },

  topImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  logoContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    alignContent: 'center',
    justifyContent: 'flex-start',
    height: 200,
    minHeight: 250,
    
  },
  taskBox: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 100,
    width: '100%',
  },
  outerContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 4,
  },
  innerContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blackTransparent,
  },
  redBorderButton: {
    height: 35,
    backgroundColor: 'transparent',
    alignContent: 'center',
    justifyContent: 'center',
    width: '90%',
    color: Colors.primary,
    borderColor: Colors.primary,
    alignSelf: 'center',
    borderRadius: 8,
    borderWidth: 2,

  },
});

export default NanoTaskDetailsScreen;
