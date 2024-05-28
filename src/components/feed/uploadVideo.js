import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colors} from '../Colors/colors';
import {PostVideo} from '../feed/feedComponents';
class UploadVideoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoObject: {
        userId: '5ca5f19d8459dc00013ea63c',
        userName: 'mak',
        imgUrl: '',
        eventId: 0,
        postType: 0,
        type: 'video',
        text: 'I have uploaded RECYCLE NanoTask Activity.',
        mediaUrl:
          'https://media.nanodot.us/nano/local/useruploads/users/nanotask/Video/20200201_014102.mp4',
        thumbUrl:
          'https://media.nanodot.us/thumbnails/nano/local/useruploads/users/nanotask/Video/20200201_014102.jpg',
      },
      videoData:this.props.route.params.camData[0],
    }
    console.log(this.state.videoData.uri)
  }

  render() {
    return (
      <View style={[{flex: 1, backgroundColor: Colors.white}]}>
        <View
          style={[
            {
              justifyContent: 'flex-start',
              flexDirection: 'row',
              padding: 10,
              paddingBottom: 0,
            },
          ]}>
          <TouchableOpacity
            style={[
              styles.redButton,
              {borderBottomLeftRadius: 0, borderBottomRightRadius: 0},
            ]}
            onPress={
              () => {}
              //   this.props.navigation.navigate('NanoTaskUpload', {
              //     nanoTask: nanoTask,
              //   })
            }>
            <Text
              style={[
                {
                  fontSize: 12,
                  color: Colors.white,
                  textAlign: 'center',
                  textAlignVertical: 'bottom',
                  fontFamily: 'FiraSans-Medium',
                },
              ]}>
              Retake
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[{backgroundColor: Colors.grey}]}>
          {console.log(this.state.videoData.uri)}
          <PostVideo  item={{mediaUrl:this.state.videoData.uri,thumbUrl:this.state.videoData.uri}} />
        </View>
        <View style={{height: 80}}>
          <View
            style={[
              styles.textComment,
              {
                flexDirection: 'row',
                borderTopColor: Colors.lightGrey,
                borderBottomColor: Colors.lightGrey,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                justifyContent: 'center',
                backgroundColor: Colors.white,
                marginVertical: 10,
                padding: 10,
              },
            ]}>
            <View
              style={{
                flex: 1,
              }}>
              <TextInput
                style={[styles.textField]}
                placeholder="Write something about your post!"
                placeholderTextColor={Colors.black}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <View
            style={[
              {justifyContent: 'center', flexDirection: 'row', margin: 10},
            ]}>
            <TouchableOpacity
              style={[styles.redButton, {paddingHorizontal: 40}]}
              onPress={
                () => {}
                //   this.props.navigation.navigate('NanoTaskUpload', {
                //     nanoTask: nanoTask,
                //   })
              }>
              <Text
                style={[
                  {
                    fontSize: 16,
                    color: Colors.white,
                    textAlign: 'center',
                    textAlignVertical: 'bottom',
                    fontFamily: 'FiraSans-Medium',
                  },
                ]}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  topContainer: {
    padding: 20,
  },

  postContainer: {
    height: 320,
    width: '100%',
    backgroundColor: Colors.lightGrey,
  },
  PostImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  PostVideo: {width: '100%', height: '100%'},
  smallText: {
    alignSelf: 'center',
    paddingBottom: 10,
    paddingHorizontal: 4,
    fontSize: 14,
    fontFamily: 'FiraSans-Medium',
  },
  smallTextRegular: {
    paddingHorizontal: 0,
    fontSize: 12,
    fontFamily: 'FiraSans-Regular',
    color: Colors.grey,
  },
  commentText: {
    paddingBottom: 10,
    fontSize: 14,
    fontFamily: 'FiraSans-Regular',
    marginEnd: 10,
  },
  redButton: {
    backgroundColor: Colors.primary,
    alignContent: 'center',
    justifyContent: 'center',

    color: Colors.primary,
    borderColor: Colors.primary,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default UploadVideoScreen;
