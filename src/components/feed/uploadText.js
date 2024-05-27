import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colors} from '../Colors/colors';
import {PostText} from './feedComponents';
class UploadTextScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textObject: {
        id: '5f9a9847ed9f9f000102ce1f',
        userId: '5f7d7f735e60ca000103c51e',
        userName: 'Jolly',
        imgUrl:
          'https://media.nanodot.us/nano/local/user/5f7d7f735e60ca000103c51e/cover/userUpload5f7d7f735e60ca000103c51e7790952783231014186.jpg',
        eventId: 0,
        postType: 0,
        type: 'text',
        text: '',
      },
    };
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
          ]}
        />
        <View style={[{backgroundColor: Colors.grey}]}>
          <PostText item={this.state.textObject} />
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
                placeholder="Write your text here"
                placeholderTextColor={Colors.black}
                underlineColorAndroid="transparent"
                value={this.state.textObject.text}
                onChangeText={(val) => {
                  var _textObject = {...this.state.textObject};
                  console.log(_textObject);
                  _textObject.text = val;
                  this.setState({textObject: _textObject});
                  console.log(val);
                }}
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
  PostText: {width: '100%', height: '100%'},
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

export default UploadTextScreen;
