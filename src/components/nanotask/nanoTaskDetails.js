/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

class NanoTaskDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nanoTasks: nanoTaskData.tasksArray,
      taskImages: nanoTaskData.taskImages,
      showMore: false,
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
        <ScrollView>
          <View style={styles.body}>
            <StatusBar barStyle="light-content" />
            <View style={[styles.topContainer]}>
              <Image source={{uri: nanoTask.imgURL}} style={styles.topImage} />
            </View>
            <View>
              <Text
                style={[
                  {
                    color: Colors.grey,
                    textAlign: 'center',
                    fontSize: 31,
                    marginVertical: 10,
                    fontFamily: 'FiraSans-Bold',
                    fontWeight: 'bold',
                  },
                ]}>
                {this.ConvertTextToUpperCase('#' + nanoTask.title)}
              </Text>
              <TouchableOpacity
                style={styles.redBorderButton}
                onPress={() =>
                  // title
                  nanoTask.title == 'Commute'
                    ? this.props.navigation.navigate('RouteScreen', {
                        nanoTask: nanoTask,
                      })
                    : this.props.navigation.navigate('NanoTaskUpload', {
                        nanoTask: nanoTask,
                      })
                }>
                <Text
                  style={[
                    {
                      fontSize: 18,
                      color: Colors.primary,
                      textAlign: 'center',
                      textAlignVertical: 'bottom',
                    },
                  ]}>
                  Upload
                </Text>
              </TouchableOpacity>

              <Text
                style={[
                  {
                    color: Colors.grey,
                    textAlign: 'justify',
                    fontSize: 20,
                    margin: 10,
                    fontFamily: 'FiraSans-Regular',
                  },
                ]}>
                <TruncateText
                  text={nanoTask.details}
                  limit={100}
                  showMore={this.state.showMore}
                  showMoreComponent={
                    <TouchableOpacity
                      style={{height: 16}}
                      onPress={() => {
                        this.setState({showMore: true});
                        console.log(this.state.showMore);
                      }}>
                      <Text
                        style={[
                          {
                            fontSize: 18,
                            color: Colors.primary,
                            textAlign: 'center',
                          },
                        ]}>
                        show more
                      </Text>
                    </TouchableOpacity>
                  }
                  showLessComponent={
                    <TouchableOpacity
                      style={[{height: 16}]}
                      onPress={() => {
                        this.setState({showMore: false});
                      }}>
                      <Text
                        style={[
                          {
                            fontSize: 18,
                            color: Colors.primary,
                            textAlign: 'center',
                          },
                        ]}>
                        show less
                      </Text>
                    </TouchableOpacity>
                  }
                />
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
        </ScrollView>
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
  redBorderButton: {
    height: 35,
    backgroundColor: 'transparent',
    alignContent: 'center',
    justifyContent: 'center',
    width: 70,
    color: Colors.primary,
    borderColor: Colors.primary,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 2,
  },
});

export default NanoTaskDetailsScreen;
