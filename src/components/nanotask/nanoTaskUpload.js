/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  Modal,
  Alert,
} from 'react-native';

import { Colors } from '../Colors/colors';
import { nanoTaskData } from './nanoTaskData';
import * as nanoTaskApi from '../../api/nanoTaskApi';
import { ActivityLoader } from '../feed/feedComponents';
import { Toast } from "../feed/feedComponents";


class NanoTaskUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //  nanoTasks: nanoTaskData.tasksArray,
    //  taskImages: nanoTaskData.taskImages,
      userData: this.GetUserData(),
      imageData: this.props.route.params.camData[0],
      nanoTask:this.props.route.params.nanoTask,
      showLoader:false,
      toastMessage: { visible: false, message: "" },

    };
    this.GetUserData();
  }
  GetUserData = async () => {
    let udata = await AsyncStorage.getItem('userData');

    // Alert.alert('Success!', 'Username Correct.', [{text: 'Okay'}]);
    this.setState({ userData: JSON.parse(udata) });
    return udata;
  };

  ConvertTextToUpperCase = (A) => {
    var B = A.toUpperCase();
    return B;
  };
  async uploadNanoTask() {
    this.setState({showLoader:true})
    let udata = await this.GetUserData();
    let Uuid = await AsyncStorage.getItem('Uuid');
    console.log(udata,'uuid');

    let obj = {
      userId: this.state.userData.id,
      nanoTaskId: this.state.nanoTask.id,
      type: 'image',
      uuid:udata.uuid,
      contentdata: this.state.imageData.base64,
    };

    nanoTaskApi.uploadNanoImage(obj).then((resp) => {
      let thumbUrl = resp.data.data.thumbURL;
      
      console.log(resp.data, 'upload Nano Image Response');
          let objAdd = {
            nanoTaskId: this.state.nanoTask.id,
            userId: this.state.userData.id,
            contentUrl:thumbUrl,
            contentThumbUrl:thumbUrl,
            contentType:'image',
            type:this.state.nanoTask.title,
            location:'no location found',
            lat:0,
            lng:0,
          };
          nanoTaskApi.addActivity(objAdd).then((actResp) => {
        this.props.navigation.navigate('NanoTaskUploadConfirm', {
        nanoTask: this.state.nanoTask,
      });
        console.log(actResp,'activity Response');
        this.setState({showLoader:false})
          });

    }).catch(e=>console.log(e));
  }
 
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
    //  console.log(this.state.taskImages, 'nano');
    console.log(Object.keys(this.state.imageData, 'keys'));

    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <StatusBar barStyle="light-content" />
          <View
            style={[
              {
                flex: 1,
              },
            ]}
          >
            <Image
              source={{ uri: this.state.imageData.uri }}
              style={styles.topImage}
            />
          </View>
          <View
            style={[
              {
                flex: 1,
              },
            ]}
          >
            <Text
              style={[
                {
                  color: Colors.primary,
                  textAlign: 'center',
                  fontSize: 35,
                  marginVertical: 10,
                  fontFamily: 'FiraSans-Bold',
                  fontWeight: 'bold',
                },
              ]}
            >
              {'Show us the\n' +
                this.ConvertTextToUpperCase(nanoTask.title) +
                '!'}
            </Text>
            <TouchableOpacity
              style={[styles.redButton,{ width:"90%",}]}
              onPress={() =>
              { this.uploadNanoTask();}
              }
            >
              <Text
                style={[
                  {
                    fontSize: 18,
                    color: Colors.white,
                    textAlign: 'center',
                   
                  },
                ]}
              >
                Submit your photo
              </Text>
            </TouchableOpacity>

            <Text
              style={[
                {
                  color: Colors.grey,
                  textAlign: 'center',
                  fontSize: 20,
                  margin: 10,
                  fontFamily: 'FiraSans-Regular',
                },
              ]}
            >
              Submit it for approval from nano users just like you to complete
              this week's nano task.
            </Text>
          </View>

          {/* <View>{this.renderNanoTasks(this.state.taskImages)}</View> */}
          {/* {this.nanoListArray} */}
        </View>
      <ActivityLoader showLoader={this.state.showLoader} text="Please Wait..." />
        
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
    flex: 1,
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
  redButton: {
    height: 35,
    alignContent: 'center',
    justifyContent: 'center',
    width: 160,
    color: Colors.primary,
    borderColor: Colors.primary,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: Colors.primary,
  },
});

export default NanoTaskUpload;
