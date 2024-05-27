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
import {FlatList} from 'react-native';

class NanoTaskUploadConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nanoTasks: nanoTaskData.tasksArray,
      taskImages: nanoTaskData.taskImages,
    };
  }

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
        <View>
          <View style={styles.body}>
            <StatusBar barStyle="light-content" />
            <View>
              <Text
                style={[
                  {
                    color: Colors.primary,
                    textAlign: 'center',
                    fontSize: 30,
                    marginVertical: 10,
                    fontFamily: 'FiraSans-Bold',
                    fontWeight: 'bold',
                  },
                ]}>
                {this.ConvertTextToUpperCase('#' + nanoTask.title)}
              </Text>
              <TouchableOpacity
                style={styles.redButton}
                onPress={() => this.props.navigation.popToTop()}>
                <Text
                  style={[
                    {
                      fontSize: 18,
                      color: Colors.white,
                      textAlign: 'center',
                      backgroundColor: Colors.primary,
                    },
                  ]}>
                  Continue
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
                {"You've just joined thousands of other people completing the" +
                  nanoTask.title +
                  ' nano task! Small Deeds. Big Impact.'}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              {/* <View>{this.renderNanoTasks(this.state.taskImages)}</View> */}
              {/* {this.nanoListArray} */}

              <FlatList
                data={this.state.taskImages}
                renderItem={({item}) => (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      margin: 4,
                    }}>
                    <TouchableOpacity delayPressIn={50}>
                      <Image
                        style={[{height: 150}]}
                        source={{uri: item.contentThumbUrl}}
                      />
                    </TouchableOpacity>
                  </View>
                )}
                //Setting the number of column
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
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
    width: 100,
    color: Colors.primary,
    borderColor: Colors.primary,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: Colors.primary,
  },
});

export default NanoTaskUploadConfirm;
