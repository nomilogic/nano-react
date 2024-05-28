import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colors} from '../Colors/colors';
import {PostImage} from './feedComponents';
class UploadImageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageObject: {
        id: '5f9a72aeed9f9f000102ce1b',
        userId: '5f7d81535e60ca000103c51f',
        userName: 'Fee Zeilinger',
        imgUrl:
          'https://media.nanodot.us/nano/local/user/5f7d81535e60ca000103c51f/cover/userUpload5f7d81535e60ca000103c51f1239001191531396407.jpg',
        eventId: 0,
        postType: 0,
        type: 'image',
        text:
          'I just lowered my CO2 footprint by avoiding 80.0 grams of carbon using the WATERREFILL nano task!',
        mediaUrl:
          'https://media.nanodot.us/nano/local/useruploads/5f7d81535e60ca000103c51f/nanotask/Image/media5f7d81535e60ca000103c51f3331359204048775646.jpg',
        thumbUrl:
          'https://media.nanodot.us/nano/local/useruploads/5f7d81535e60ca000103c51f/nanotask/Image/media5f7d81535e60ca000103c51f3331359204048775646.jpg',
        liked: false,
        status: 1,
        location: 'Niederkassel,Deutschland',
        lat: 50.78295142623614,
        lng: 7.05794984934379,
        likes: [],
        comments: [],
        likesCount: 0,
        commentsCount: 0,
        created: '2020-10-29T07:43:42.569+0000',
        hashtags: [],
        usertags: [],
        total: 0,
      },
      imageData:this.props.route.params.camData[0],
    };
    console.log(this.props.route.params,'props');
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
          {console.log(this.state.imageData,"unfine")}
          <PostImage item={{thumbUrl:this.state.imageData.uri}} />
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

export default UploadImageScreen;
