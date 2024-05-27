import React from 'react';
import {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Colors} from '../Colors/colors';
import {nanoTaskData} from './nanoTaskData';

class NanoTaskUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nanoTasks: nanoTaskData.tasksArray,
      taskImages: nanoTaskData.taskImages,
    };
  }

  ConvertTextToUpperCase = A => {
    var B = A.toUpperCase();
    return B;
  };

  renderNanoTasks = taskArray => {
    var nanoListArray = taskArray.map((item, index) => {
      var TaskNode = (
        <View key={index}>
          <TouchableOpacity delayPressIn={50}>
            <Image
              style={[styles.gridImage]}
              source={{uri: item.contentThumbUrl}}
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
    console.log(this.state.taskImages, 'nano');

    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <StatusBar barStyle="light-content" />
          <View
            style={[
              {
                flex: 1,
              },
            ]}>
            <Image source={{uri: nanoTask.imgURL}} style={styles.topImage} />
          </View>
          <View
            style={[
              {
                flex: 1,
              },
            ]}>
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
              ]}>
              {'Show us the\n' +
                this.ConvertTextToUpperCase(nanoTask.title) +
                '!'}
            </Text>
            <TouchableOpacity
              style={styles.redButton}
              onPress={() =>
                this.props.navigation.navigate('NanoTaskUploadConfirm', {
                  nanoTask: nanoTask,
                })
              }>
              <Text
                style={[
                  {
                    fontSize: 18,
                    color: Colors.white,
                    textAlign: 'center',
                  },
                ]}>
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
              ]}>
              Submit it for approval from nano users just like you to complete
              this week's nano task.
            </Text>
          </View>

          {/* <View>{this.renderNanoTasks(this.state.taskImages)}</View> */}
          {/* {this.nanoListArray} */}
        </View>
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
