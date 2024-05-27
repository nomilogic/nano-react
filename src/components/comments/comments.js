/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Component} from 'react';
import moment from 'moment';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {Colors} from '../Colors/colors';
import {nanoTaskData} from '../nanotask/nanoTaskData';
import {Icon} from '../Icons/icons';
import {
  PostCommute,
  PostVideo,
  PostImage,
  PostLink,
  PostLiveM3U8,
  postLiveYoutube,
  PostText,
} from '../feed/feedComponents';

// import Video from 'react-native-video';

class CommentsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedsData: nanoTaskData.feedArray.data,
    };
  }
  componentDidMount() {}
  postView = ({item}) => {
    console.log(item);
    var getPostItem = (item) => {
      if (
        item.type == 'video' ||
        (item.type === 'image' &&
          item.mediaUrl.substring(
            item.mediaUrl.length - 4,
            item.mediaUrl.length,
          ) === '.mp4')
      ) {
        console.log(item.type, item);
        return PostVideo({item});
      } else if (item.type === 'link') {
        return PostLink({item});
      } else if (item.type === 'image') {
        return PostImage({item});
      } else if (item.type == 'live' && item.liveFormat == 'youtube') {
        return postLiveYoutube({item});
      } else if (item.type == 'live' && item.liveFormat == 'm3u8') {
        return PostLiveM3U8({item});
      } else if (item.type == 'commute') {
        return PostCommute({item});
      } else if (
        item.type === 'text' &&
        (item.postType == 0 ||
          item.postType == 1 ||
          item.postType == 10 ||
          item.postType == 11)
      ) {
        return PostText({item});
        // return PostText(item);
      } else if (item.postType == '20') {
        return;
      }
    };
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          marginBottom: 20,
        }}>
        <View
          style={[
            {
              width: '100%',
              zIndex: 3,
              elevation: 3,
              paddingHorizontal: 10,
              flexDirection: 'row',
            },
          ]}>
          {console.log(item)}
          {item.imgUrl && item.imgUrl != '' ? (
            <View style={[styles.avatarContainer]}>
              <Image source={{uri: item.imgUrl}} style={[styles.avatarImage]} />
            </View>
          ) : (
            <View style={[styles.avatarContainer]}>
              <Image
                source={{
                  uri:
                    'https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png',
                }}
                style={[styles.avatarImage]}
              />
            </View>
          )}

          <Text
            style={[
              {
                alignSelf: 'center',
                paddingBottom: 10,
                paddingHorizontal: 10,
                fontSize: 16,
                fontFamily: 'FiraSans-Medium',
              },
            ]}>
            {item.userName}
          </Text>
        </View>
        <View style={[{height: 320, marginTop: -15}]}>{getPostItem(item)}</View>
        {item.text === '' || item.type === 'text' ? (
          <View style={{height: 14}} />
        ) : (
          <View style={[styles.topContainer]}>
            <Text>{item.text}</Text>
          </View>
        )}

        <View style={[{flexDirection: 'row'}]}>
          <View
            style={[
              {
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'row',
                height: 30,
              },
            ]}>
            <TouchableOpacity onPress={() => {}} style={{}}>
              <Icon
                name="like0"
                height={22}
                width={22}
                color={Colors.primary}
                style={[{alignSelf: 'center'}]}
              />
            </TouchableOpacity>
          </View>
          <View
            style={[
              {
                flex: 0,
                justifyContent: 'center',
                flexDirection: 'row',
                height: 0,
                width: 0,
                overflow: 'hidden',
              },
            ]}>
            <TouchableOpacity onPress={() => {}} style={{}}>
              <Icon
                name="comments"
                height={22}
                width={22}
                color={Colors.primary}
                style={[
                  {
                    alignSelf: 'center',
                  },
                ]}
              />
            </TouchableOpacity>
          </View>

          <View
            style={[
              {flex: 2, justifyContent: 'flex-start', flexDirection: 'column'},
            ]}>
            <Text style={{textAlign: 'left'}}>
              {moment(item.created).startOf().fromNow()}
            </Text>
          </View>
          <View
            style={[
              {
                flex: 2,
                alignContent: 'center',
                flexDirection: 'column',
              },
            ]}>
            <TouchableOpacity onPress={() => {}} style={{}}>
              <Text
                style={{
                  fontSize: 60,
                  textAlign: 'center',
                  justifyContent: 'flex-start',
                  padding: 0,

                  color: Colors.midGrey,
                  lineHeight: 30,
                }}>
                …
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={[]}>{this.renderComments(item.comments)}</ScrollView>
      </View>
    );
  };
  renderComments = (CommentsArray) => {
    var Comment = ({item}) => {
      var cmt = (
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={[
              {
                flex: 1,

                paddingHorizontal: 10,
                flexDirection: 'row',

                margin: 10,
              },
            ]}>
            {item.imgUrl && item.imgUrl != '' ? (
              <View style={[styles.avatarContainer, {width: 30, height: 30}]}>
                <Image
                  source={{uri: item.imgUrl}}
                  style={[styles.avatarImage, {width: 30, height: 30}]}
                />
              </View>
            ) : (
              <View style={[styles.avatarContainer, {width: 30, height: 30}]}>
                <Image
                  source={{
                    uri:
                      'https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png',
                  }}
                  style={[styles.avatarImage, {width: 30, height: 30}]}
                />
              </View>
            )}

            <View style={[{flex: 0}]}>
              <Text style={[styles.smallText]}>{item.userName + ': '}</Text>
            </View>
            <View
              style={[
                {
                  flex: 1,
                },
              ]}>
              <Text
                style={[
                  styles.commentText,
                  {
                    borderRadius: 8,
                    backgroundColor: Colors.lightGrey,
                    padding: 8,
                  },
                ]}>
                {item.comment}
              </Text>
            </View>
          </View>
        </View>
      );
      return cmt;
    };
    var nanoListArray = CommentsArray.map((item, index) => {
      console.log(index);
      //   if (index > 2) {
      //     return;
      //   }
      var TaskNode = (
        <View key={index}>
          <Comment item={item} />
        </View>
      );

      return TaskNode;
    });
    return nanoListArray;
  };

  render() {
    const postItem = this.props.route.params.postItem;
    return (
      <View style={{flex: 1, backgroundColor: Colors.white}}>
        {this.postView(postItem)}
        <View style={{height: 60}}>
          <View
            style={[
              styles.textComment,
              {
                flexDirection: 'row',
                borderTopColor: Colors.lightGrey,
                borderTopWidth: 1,
                justifyContent: 'center',
                backgroundColor: Colors.white,
              },
            ]}>
            <View
              style={{
                flex: 1,
              }}>
              <TextInput
                style={[styles.textField]}
                placeholder="Write your comment here!"
                placeholderTextColor={Colors.black}
                underlineColorAndroid="transparent"
              />
            </View>
            <View>
              <TouchableOpacity
                style={styles.redBorderButton}
                onPress={
                  () => {}
                  //   this.props.navigation.navigate('NanoTaskUpload', {
                  //     nanoTask: nanoTask,
                  //   })
                }>
                <Text
                  style={[
                    {
                      fontSize: 18,
                      color: Colors.white,
                      textAlign: 'center',
                      textAlignVertical: 'bottom',
                    },
                  ]}>
                  Send
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  avatarImage: {
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 100,
    backgroundColor: Colors.primary,
    padding: 2,
    width: 54,
    height: 54,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  avatarContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: Colors.primary,
    padding: 2,
    width: 54,
    height: 54,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  topContainer: {
    padding: 20,
  },

  postContainer: {
    height: 320,
    width: '100%',
    backgroundColor: Colors.lightGrey,
  },

  smallText: {
    alignSelf: 'center',
    paddingBottom: 10,
    paddingHorizontal: 4,
    fontSize: 14,
    fontFamily: 'FiraSans-Medium',
  },
  commentText: {
    fontSize: 14,
    fontFamily: 'FiraSans-Regular',
  },
  textField: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    marginLeft: 10,
    color: Colors.black,
  },
  redBorderButton: {
    height: 35,
    backgroundColor: Colors.primary,
    alignContent: 'center',
    justifyContent: 'center',
    width: 70,
    color: Colors.primary,
    borderColor: Colors.primary,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 2,
    margin: 10,
  },
});
export default CommentsScreen;
