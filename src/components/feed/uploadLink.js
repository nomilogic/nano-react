import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colors} from '../Colors/colors';
import {PostLink} from './feedComponents';
class UploadLinkScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkObject: {
        id: '5fb2378fed9f9f000102ceda',
        userId: '5f7d7f735e60ca000103c51e',
        userName: 'Jolly',
        imgUrl:
          'https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg',
        eventId: 0,
        postType: 0,
        type: 'link',
        title: 'hawaii.edu',
        description:
          '$600K to develop local farmers , food supply | University of Hawaiʻi System News',
        url:
          'https://www.hawaii.edu/news/2020/11/05/600k-to-develop-local-food-supply/',
        mediaUrl:
          'https://www.hawaii.edu/news/wp-content/uploads/2020/11/manoa-ctahr-gofarm.jpg',
        liked: false,
        status: 1,
        location: 'Karachi,Pakistan',
        lat: 24.878735637314975,
        lng: 67.06431951987784,
        likes: [],
        comments: [],
        likesCount: 0,
        commentsCount: 0,
        created: '2020-11-16T08:25:51.120+0000',
        hashtags: [],
        usertags: [],
        total: 0,
      },
    };
  }

  render() {
    return (
      <View style={[{flex: 1, backgroundColor: Colors.white}]}>
        <View style={[{backgroundColor: Colors.white}]}>
          <PostLink item={this.state.linkObject} />
        </View>
        <View style={{height: 80}}>
          <View style={[styles.textComment, styles.textField]}>
            <View
              style={{
                flex: 1,
              }}>
              <TextInput
                placeholder="Enter your link here"
                placeholderTextColor={Colors.black}
                underlineColorAndroid="transparent"
              />
            </View>
            <View>
              <TouchableOpacity
                style={[
                  styles.redButton,
                  {
                    padding: 5,
                    margin: 5,
                    backgroundColor: Colors.blue,
                    borderWidth: 0,
                  },
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
                      fontSize: 16,
                      color: Colors.white,
                      textAlign: 'center',
                      textAlignVertical: 'bottom',
                      fontFamily: 'FiraSans-Medium',
                    },
                  ]}>
                  Add Link
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{height: 80}}>
          <View style={[styles.textComment, styles.textField]}>
            <View
              style={{
                flex: 1,
              }}>
              <TextInput
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
  textField: {
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
});

export default UploadLinkScreen;
