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
  ImageBackground,
} from 'react-native';
import {Colors} from '../Colors/colors';
import {nanoTaskData} from './nanoTaskData';
import {SvgCssUri} from 'react-native-svg/css';
import MaskedView from '@react-native-community/masked-view';

class NanoTaskScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nanoTasks: nanoTaskData.tasksArray,
    };
  }

  ConvertTextToUpperCase = (A) => {
    var B = A.toUpperCase();
    return B;
  };

  renderNanoTasks = (taskArray) => {
    var renderSponsor = (item) => {
      if (item.sponsor && item.sponsor.name) {
        return <Text>{item.sponsor.name + ' Task'}</Text>;
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
              this.props.navigation.navigate('NanoTaskDetails', {
                nanoTask: item,
              })
            }>
            <ImageBackground
              style={[styles.nanoTaskBox]}
              source={{uri: item.bgImg}}
              imageStyle={{borderRadius: 8, resizeMode: 'cover'}}>
              <View
                style={[
                  {justifyContent: 'center', flexDirection: 'column', flex: 1},
                ]}>
                <Text
                  style={[
                    {
                      color: Colors.white,
                      fontSize: 25,
                      textAlign: 'left',
                      fontFamily: 'FiraSans-Regular',
                      margin: 20,
                      textShadowColor: '#001',
                      textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 5,
                      fontWeight: '100',
                    },
                  ]}>
                  {'#' + item.title}
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  {
                    position: 'absolute',
                    right: 10,
                    top: 6,
                    width: 30,
                    height: 30,
                  },
                ]}>
                <Image
                  source={{uri: 'https://media.nanodot.us/img/trophy.png'}}
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
                      color: Colors.white,
                      fontSize: 20,
                      marginHorizontal: 2,
                      fontFamily: 'FiraSans-Bold',
                    },
                  ]}>
                  {item.points}
                </Text>
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
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <StatusBar barStyle="light-content" />
          <View style={[styles.topContainer]}>
            <Image
              source={{uri: this.state.nanoTasks[0].imgURL}}
              style={styles.logoImage}
            />
          </View>
          <View style={styles.topBox}>
            <Text
              style={[
                {
                  color: Colors.black,
                  textAlign: 'center',
                  fontSize: 24,
                  marginVertical: 10,
                  fontFamily: 'FiraSans-Regular',
                  fontWeight: 'bold',
                },
              ]}>
              {this.ConvertTextToUpperCase('#' + this.state.nanoTasks[0].title)}
            </Text>
            <TouchableOpacity
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
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('NanoTaskDetails', {
                  nanoTask: this.state.nanoTasks[0],
                })
              }
              style={styles.redBorderButton}>
              <Text
                style={[
                  {
                    fontSize: 14,
                    color: Colors.primary,
                    textAlign: 'center',
                  },
                ]}>
                Start
              </Text>
            </TouchableOpacity>
            <View
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
            </View>
          </View>
          <View style={[{flex: 5}]}>
            <ScrollView>
              <View>{this.renderNanoTasks(this.state.nanoTasks)}</View>
              {/* {this.nanoListArray} */}
            </ScrollView>
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
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
  },

  logoImage: {
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
    justifyContent: 'center',
    flex: 4,
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
    height: 26,
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

export default NanoTaskScreen;
