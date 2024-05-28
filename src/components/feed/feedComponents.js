import React from "react";
import moment from "moment";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Modal,
  ToastAndroid,
} from "react-native";

import { Colors } from "../Colors/colors";
import { FlatList } from "react-native";

import VideoPlayer from "react-native-video-player";
import { Icon } from "../Icons/icons";
import AutoHeightImage from "react-native-auto-height-image";

// import AutoHeightImage from 'react-native-auto-height-image';
const PostImage = ({ item }) => (
  <View>
    <Image source={{ uri: item.thumbUrl }} style={[[styles.PostImage]]} />
    {/* <AutoHeightImage
      width={Dimensions.get('window').width}
      source={{uri: item.thumbUrl}}  />*/}
  </View>
);
const Span = (props) => {
  var child = props.children;
  return <Text>props.children</Text>;
};
const Img = function (props) {
  var child = props.children;
  return (
    <Image style={{ width: 50, height: 50 }} source={{ uri: props.src }} />
  );
};
const PostVideo = ({ item }) => (
  <View style={[styles.postContainer]}>
    {/* <Video
        source={{uri: item.mediaUrl}}
        style={styles.PostVideo}
        controls={true}
        playWhenInactive={false}
        resizeMode={'contain'}
      /> */}
    {
      <VideoPlayer
        style={[styles.PostImageContainer]}
        video={{ uri: item.mediaUrl }}
        thumbnail={{ uri: item.thumbUrl }}
      />
    }
  </View>
);
const postLiveYoutube = ({ item }) => (
  <View style={[styles.postContainer]}>
    <Text>Live</Text>
    <TouchableOpacity>{PostImage}</TouchableOpacity>
    <Image
      source={{ uri: "https://media.nanodot.us/img/VideoPlay.png" }}
      style={[[styles.playIcon]]}
    />
  </View>
);
const PostLiveM3U8 = ({ item }) => (
  <View>
    <Text>Live</Text>
    <TouchableOpacity>{PostImage}</TouchableOpacity>
    <Image
      source={{ uri: "https://media.nanodot.us/img/VideoPlay.png" }}
      style={[[styles.playIcon]]}
    />
  </View>
);

const PostLink = ({ item }) => {
  // *ngif="item.type =='link'"
  var urlext = item.mediaUrl.substring(
    item.mediaUrl.length - 4,
    item.mediaUrl.length,
  );
  var isImageShow = false;
  if (
    urlext === ".png" ||
    urlext === ".jpg" ||
    urlext === ".jpeg" ||
    urlext === ".gif"
  ) {
    isImageShow = true;
  }
  return (
    <View>
      <View
        style={{
          borderTopColor: Colors.lightGrey,
          borderBottomColor: Colors.lightGrey,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          padding: 5,
          position: "relative",
          minHeight: 50,
          clear: "both",
        }}
      >
        {/* *ngif="item.mediaUrl"  */}
        {isImageShow == true && (
          <View style={{ borderBottom: 1, textAlign: "center" }}>
            {item.mediaUrl && item.mediaUrl != "" ? (
              <Image
                width={Dimensions.get("window").width}
                style={{ resizeMode: "contain", width: "100%", height: 200 }}
                source={{ uri: item.mediaUrl }}
              />
            ) : (
              <Text />
            )}
            {/* <img [src]="item.mediaUrl" style={{width: 'auto', marginBottom: '-4', display: 'inline'}} onerror="this.style.display='none'" onload="this.style.display='inline'" /> */}
          </View>
        )}
        {item.title && (
          <View>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 16,
                margin: 0,

                textAlign: "left",
                padding: 5,
                color: Colors.primary,

                fontFamily: "FiraSans-Regular",
              }}
            >
              {item.title}
            </Text>
          </View>
        )}
        <View style={{ width: "100%" }}>
          {/* *ngif="item.description"  */}
          <View>
            <Text
              numberOfLines={4}
              style={{
                textAlign: "left",
                fontFamily: "FiraSans-Light",
                padding: 5,
                color: Colors.grey,
                fontSize: 15,
              }}
            >
              {item.description}
            </Text>
          </View>
          {/* *ngif="(!item.description && !item.mediaUrl && item.url)"  */}
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                flex: 1,
                right: 2,
                fontFamily: "FiraSans-Light",
                padding: 5,
                color: Colors.primary,
                textDecorationLine: "underline",
              }}
              numberOfLines={1}
            >
              {item.url}
            </Text>
            <View style={{ bottom: 2, right: 2 }}>
              <View
                /* (click)="openUrl(item.url)"  */ style={{
                  borderRadius: 4,
                  fontSize: 12,
                  backgroundColor: "white",
                  borderWidth: 2,
                  borderColor: Colors.primary,
                  color: Colors.primary,
                  padding: 5,
                  width: 80,
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <Text numberOfLines={1} style={{ color: Colors.primary }}>
                  View Link
                </Text>
              </View>
            </View>
          </View>
          {/* *ngif="item.url"           */}
        </View>
      </View>
    </View>
  );
};
const PostCommute = ({ item }) => (
  <View
    style={[
      styles.trnsPostCont,
      {
        flex: 1,
        flexDirection: "column",
      },
    ]}
  >
    <View
      style={[
        {
          flex: 1,
          flexDirection: "row",
          borderBottomColor: Colors.midGrey,
          borderBottomWidth: 1,
        },
      ]}
    >
      <View style={[{ flex: 1 }]}>
        <Text
          style={[{ color: Colors.midGrey, marginTop: 10, marginBottom: -10 }]}
        >
          Traveled by
        </Text>
        <Text
          style={[
            {
              color: Colors.blackBlue,
              fontSize: 28,
              fontFamily: "FiraSans-Bold",
            },
          ]}
        >
          {item.commute ? item.commute.travelType : ""}
        </Text>
      </View>
      {/* <SvgCssUri
          style={[styles.trvlIcn, {flex: 1, alignSelf: 'center'}]}
          uri={item.commute ? item.commute.imgUrl : ''}
          height="60"
          width="40"
        /> */}
      <Icon
        url={item.commute.imgUrl}
        height={60}
        width={40}
        color={Colors.primary}
        style={[styles.trvlIcn, { flex: 1, alignSelf: "center" }]}
      />
    </View>
    <View style={[{ flex: 1, flexDirection: "row" }]}>
      <View style={[{ flex: 1, justifyContent: "flex-end" }]}>
        <Text
          style={[{ color: Colors.midGrey, marginBottom: -10, fontSize: 14 }]}
        >
          Avoided CO2
        </Text>
        <Text
          style={[
            {
              color: Colors.primary,
              fontSize: 28,
              fontFamily: "FiraSans-Bold",
            },
          ]}
        >
          {item.commute ? item.commute.reducedCarbonInString : ""} g
        </Text>
      </View>
    </View>
    <View style={[{ flex: 1, flexDirection: "row" }]}>
      <View style={[{ flex: 1, justifyContent: "center" }]}>
        <View style={[{ marginBottom: -10 }]}>
          <Text style={[{ color: Colors.midGrey }]}>Distance</Text>
        </View>

        <Text
          style={[
            {
              color: Colors.primary,
              fontSize: 28,
              fontFamily: "FiraSans-Bold",
            },
          ]}
        >
          {item.commute.distance}
          <Text>{item.commute.ansUnit}</Text>
        </Text>
      </View>
      <View style={[{ alignSelf: "center", alignItems: "flex-start" }]}>
        <Text style={[{ color: Colors.midGrey, marginBottom: -10 }]}>Time</Text>
        <Text
          style={[
            {
              color: Colors.grey,
              fontSize: 28,
              fontFamily: "FiraSans-Bold",
            },
          ]}
        >
          {item.commute.travelTime}
        </Text>
      </View>
    </View>
    <View style={[{ flexDirection: "row" }]}>
      <View style={[{ flex: 1 }]}>
        <Text style={[{ color: Colors.midGrey }]}>
          {/* {!item.commute ? '' : item.commute.startTime} */}
          {moment(item.commute.startTime).startOf().fromNow()}
        </Text>
      </View>
      <View style={[{ flex: 1 }]}>
        <Text style={[{ color: Colors.midGrey, textAlign: "right" }]}>
          {moment(item.commute.startTime).format("MMMM Do YYYY")}
        </Text>
      </View>
    </View>
  </View>
);
const PostText = ({ item }) => {
  //console.log(preg_match('/<span[^>]*>(.*?)<\/span>/si', $string, $matches);)
  return (
    <View
      style={[
        styles.postContainer,
        {
          backgroundColor: Colors.primary,
          alignContent: "center",
          flexDirection: "column",
          justifyContent: "center",
          padding: 20,
        },
      ]}
    >
      <Text
        ellipsizeMode="tail"
        numberOfLines={8}
        style={[{ color: Colors.white, fontSize: 25 }]}
      >
        {item.text}
      </Text>
    </View>
  );
};
const ActivityLoader = ({ showLoader, text,ModalX }) => {
  console.log(showLoader);
  const { height, width } = Dimensions.get("window");
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showLoader}
      presentationStyle="fullScreen"
      statusBarTranslucent={true}
      onRequestClose={() => {
        //  Alert.alert("Modal has been closed.");
        // this.setModalVisible(!modalVisible);
      }}
    >
      <View
        style={[
          {
            flex: 1,
            justifyContent: "center",
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: "#0009",
            zIndex: 100,
          },
        ]}
      >
        <ActivityIndicator size="large" color="white" />

        <Text style={{ color: "white", textAlign: "center" }}>{text}</Text>
      </View>
    </Modal>
  );
};
const Toast = ({ visible, message }) => {
  
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      40,
      50
    );
    return null;
  }
  return null;
};
const styles = StyleSheet.create({
  avatarImage: {
    alignSelf: "center",
    resizeMode: "cover",
    borderRadius: 100,
    backgroundColor: Colors.primary,
    padding: 2,
    width: 54,
    height: 54,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  avatarContainer: {
    alignContent: "center",
    justifyContent: "center",
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
  PostImageContainer: {
    backgroundColor: Colors.lightGrey,
    height: 320,
    width: "100%",
  },
  postContainer: {
    height: 320,
    width: "100%",
    backgroundColor: Colors.lightGrey,
  },
  PostImage: {
    height: 320,
    width: "100%",
  },
  PostVideo: { width: "100%", height: "100%" },
  liveBtn: {
    position: "absolute",
    top: 60,
    right: 20,
    padding: 5,
    backgroundColor: Colors.primary,
    borderRadius: 6,
    color: Colors.white,
  },

  trnsPostCont: {
    padding: 30,
    marginTop: 0,
    backgroundColor: Colors.lightGrey,
  },
  smallText: {
    alignSelf: "center",
    paddingBottom: 10,
    paddingHorizontal: 4,
    fontSize: 14,
    fontFamily: "FiraSans-Medium",
  },
  commentText: {
    fontSize: 14,
    fontFamily: "FiraSans-Regular",
  },
  textField: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    marginLeft: 10,
    color: Colors.black,
  },
  redBorderButton: {
    height: 35,
    backgroundColor: Colors.primary,
    alignContent: "center",
    justifyContent: "center",
    width: 70,
    color: Colors.primary,
    borderColor: Colors.primary,
    alignSelf: "center",
    borderRadius: 5,
    borderWidth: 2,
    margin: 10,
  },
});
export {
  PostText,
  PostCommute,
  PostImage,
  PostLink,
  PostLiveM3U8,
  postLiveYoutube,
  PostVideo,
  Img,
  Span,
  ActivityLoader,
  Toast,
};
