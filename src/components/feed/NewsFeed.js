/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Component } from "react";
import moment from "moment";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from "react-native";
import {
  PostCommute,
  PostVideo,
  PostImage,
  PostLink,
  PostLiveM3U8,
  postLiveYoutube,
  PostText,
} from "../feed/feedComponents";

import { Colors } from "../Colors/colors";
import { FlatList } from "react-native";
import { nanoTaskData } from "../nanotask/nanoTaskData";
import AutoHeightImage from "react-native-auto-height-image";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import ActionSheet from "react-native-actions-sheet";
import { Avatar } from "react-native-paper";
// import {VLCPlayer, VlCPlayerView} from 'react-native-vlc-media-player';

//import VideoPlayer from "react-native-video-player";
import { SvgCssUri } from "react-native-svg";
import { Icon } from "../Icons/icons";
import SegmentedControlTab from "react-native-segmented-control-tab";

// import Video frox 'react-native-video';
import CFAB from "../feed/fabs";
import { createRef } from "react/cjs/react.production.min";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import Camera from "../camera/camera";
import CustomActionSheet from "../camera/customActionSheet";

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedsData: nanoTaskData.feedArray.data,
      NewsData: nanoTaskData.GlobalNews.articles,
      selectedIndex: 0,
    };
  }
  imageActionSheetData = {
    mainTitle: "Select Image Source",
    showCancel: true,
    buttonsData: [
      {
        title: "Capture Image from Camera",
        action: () => {
          Camera.loadCamera("photo", "camera", (response) => {
            console.log(response);
            this.props.navigation.navigate("UploadImage", {
              camData: response.assets,
            });
          });
        },
      },
      {
        title: "Load From Library",
        action: () => {
          Camera.loadCamera("photo", "library", (response) => {
            console.log(response);
            this.props.navigation.navigate("UploadImage", {
              camData: response.assets,
            });
          });
        },
      },
    ],
  };

  imageActionSheet = new CustomActionSheet(this.imageActionSheetData);
  videoActionSheetData = {
    mainTitle: "Select Video Source",
    showCancel: false,
    buttonsData: [
      {
        title: "Capture Video From Camera",
        action: () => {
          Camera.loadCamera("video", "camera", (response) => {
            console.log(response);
            this.props.navigation.navigate("UploadVideo", {
              camData: response.assets,
            });
          });
        },
      },
      {
        title: "Load From Library",
        action: () => {
          Camera.loadCamera("video", "library", (response) => {
            console.log(response);
            this.props.navigation.navigate("UploadVideo", {
              camData: response.assets,
            });
          });
        },
      },
    ],
  };

  videoActionSheet = new CustomActionSheet(this.videoActionSheetData);

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  };
  componentDidMount() {}
  _renderListItem = ({ item, index }) => {
    //console.log(item);
    var getPostItem = (item) => {
      if (
        item.type == "video" ||
        (item.type === "image" &&
          item.mediaUrl.substring(
            item.mediaUrl.length - 4,
            item.mediaUrl.length,
          ) === ".mp4")
      ) {
        console.log(item.type, item);
        return PostVideo({ item });
      } else if (item.type === "link") {
        return PostLink({ item });
      } else if (item.type === "image") {
        return PostImage({ item });
      } else if (item.type == "live" && item.liveFormat == "youtube") {
        return postLiveYoutube({ item });
      } else if (item.type == "live" && item.liveFormat == "m3u8") {
        return PostLiveM3U8({ item });
      } else if (item.type == "commute") {
        return PostCommute({ item });
      } else if (
        item.type === "text" &&
        (item.postType == 0 ||
          item.postType == 1 ||
          item.postType == 10 ||
          item.postType == 11)
      ) {
        return PostText({ item });
        // return PostText(item);
      } else if (item.postType == "20") {
        return;
      }
    };
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          marginBottom: 20,
        }}
      >
        <View
          style={[
            {
              width: "100%",
              zIndex: 3,
              elevation: 3,
              paddingHorizontal: 10,
              flexDirection: "row",
            },
          ]}
        >
          {item.imgUrl && item.imgUrl != "" ? (
            <View style={[styles.logoContainer]}>
              <Image source={{ uri: item.imgUrl }} style={[styles.logoImage]} />
            </View>
          ) : (
            <View style={[styles.logoContainer]}>
              <Image
                source={{
                  uri:
                    "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                }}
                style={[styles.logoImage]}
              />
            </View>
          )}

          <Text
            style={[
              {
                alignSelf: "center",
                paddingBottom: 10,
                paddingHorizontal: 10,
                fontSize: 16,
                fontFamily: "FiraSans-Medium",
              },
            ]}
          >
            {item.userName}
          </Text>
        </View>
        <View style={[{ marginTop: -15 }]}>{getPostItem(item)}</View>
        {item.text === "" || item.type === "text" ? (
          <View style={{ height: 14 }} />
        ) : (
          <View style={[styles.topContainer]}>
            <Text>{item.text}</Text>
          </View>
        )}

        <View style={[{ flex: 1, flexDirection: "row" }]}>
          <View
            style={[
              {
                flex: 1,
                justifyContent: "center",
                flexDirection: "row",
                height: 50,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                // item.liked = true;
                // this.setState({feedsData: this.state.feedsData});
                // this.setState(({feedsData}) => ({
                //   feedsData: [
                //     ...feedsData.slice(0, index),
                //     {
                //       ...feedsData[index],
                //       liked: true,
                //     },
                //     ...feedsData.slice(2),
                //   ],
                // }));
                var _feed = [...this.state.feedsData];

                _feed[index].liked = true;
                this.setState({ feedsData: _feed });
                // this.setState(({_feed}) => ({
                //   feedsData: _feed,
                // }));
                // var a = item;
                // this.setState({
                //   item,
                //   liked: true,
                // });
                //item.liked = true;
                console.log(item.liked);
              }}
              style={{}}
            >
              {!item.liked ? (
                <Icon
                  name={"like0"}
                  height={22}
                  width={22}
                  color={Colors.primary}
                  style={[{ alignSelf: "center" }]}
                />
              ) : (
                <Icon
                  name={"like1"}
                  height={22}
                  width={22}
                  color={Colors.primary}
                  style={[{ alignSelf: "center" }]}
                />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={[
              {
                flex: 1,
                justifyContent: "center",
                flexDirection: "row",
              },
            ]}
          >
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Comments", {
                  postItem: { item },
                })
              }
              style={{}}
            >
              <Icon
                name="comments"
                height={22}
                width={22}
                color={Colors.primary}
                style={[{ alignSelf: "center" }]}
              />
            </TouchableOpacity>
          </View>

          <View
            style={[
              {
                flex: 2,
                justifyContent: "flex-start",
                flexDirection: "column",
              },
            ]}
          >
            <Text style={{ textAlign: "left" }}>
              {moment(item.created).startOf().fromNow()}
            </Text>
          </View>
          <View
            style={[
              { flex: 2, alignContent: "center", flexDirection: "column" },
            ]}
          >
            <TouchableOpacity onPress={() => {}} style={{}}>
              <Text
                style={{
                  fontSize: 60,
                  textAlign: "center",
                  justifyContent: "flex-start",
                  padding: 0,

                  color: Colors.midGrey,
                  lineHeight: 30,
                }}
              >
                …
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.renderComments(item.comments)}
      </View>
    );
  };
  renderComments = (CommentsArray) => {
    var Comment = ({ item }) => {
      var cmt = (
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.white,
          }}
        >
          <View
            style={[
              {
                flex: 1,

                elevation: 3,
                paddingHorizontal: 10,
                flexDirection: "row",
              },
            ]}
          >
            {item.imgUrl && item.imgUrl != "" ? (
              <View style={[styles.logoContainer, { width: 30, height: 30 }]}>
                <Image
                  source={{ uri: item.imgUrl }}
                  style={[styles.logoImage, { width: 30, height: 30 }]}
                />
              </View>
            ) : (
              <View style={[styles.logoContainer, { width: 30, height: 30 }]}>
                <Image
                  source={{
                    uri:
                      "https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png",
                  }}
                  style={[styles.logoImage, { width: 30, height: 30 }]}
                />
              </View>
            )}

            <View style={[{ flex: 0 }]}>
              <Text style={[styles.smallText]}>{item.userName + ": "}</Text>
            </View>
            <View style={[{ flex: 1 }]}>
              <Text style={[styles.commentText]}>{item.comment}</Text>
            </View>
          </View>
        </View>
      );
      return cmt;
    };
    var nanoListArray = CommentsArray.map((item, index) => {
      console.log(index);
      if (index > 2) {
        return;
      }
      var TaskNode = (
        <View key={index}>
          <Comment item={item} />
        </View>
      );

      return TaskNode;
    });
    return nanoListArray;
  };

  renderNews = (NewsArray) => {
    var newsList = NewsArray.map((item, index) => {
      var newsComp = this.TopGlobalNews(item);

      return newsComp;
    });
    return newsList;
  };
  TopGlobalNews = ({ item, index }) => {
    // var item = articles[0];
    var newsComp = (
      <View
        style={[
          {
            paddingVertical: 10,
            shadowColor: "#000",
            shadowOffset: { width: 1, height: 3 },
            shadowOpacity: 0.4,
            shadowRadius: 3,
            elevation: 4,
            backgroundColor: Colors.white,
            marginBottom: 4,
          },
        ]}
      >
        {item.socialimage != "" && (
          <AutoHeightImage
            width={Dimensions.get("window").width}
            source={{
              uri:
                item.socialimage == ""
                  ? "https://media.nanodot.us/img/default_News.png"
                  : item.socialimage,
            }}
          />
        )}

        <TouchableOpacity>
          <Text
            numberOfLines={4}
            ellipsizeMode="tail"
            style={{
              fontFamily: "FiraSans-Medium",
              fontSize: 20,
              paddingHorizontal: 10,
            }}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
        <LinearGradient
          useAngle={true}
          angle={90}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={[Colors.yellow, Colors.primary]}
          style={{ height: 3, width: "30%" }}
        />
        <View
          style={[
            {
              flexDirection: "row",
              padding: 10,
              paddingBottom: 0,
            },
          ]}
        >
          <View
            style={[
              { flex: 1, justifyContent: "center", flexDirection: "column" },
            ]}
          >
            <Text
              numberOfLines={1}
              style={[
                {
                  textAlign: "left",
                },
                styles.smallTextRegular,
              ]}
            >
              {item.domain}
            </Text>
          </View>
          <View
            style={[
              { flex: 1, justifyContent: "center", flexDirection: "column" },
            ]}
          >
            <Text
              numberOfLines={1}
              style={[
                styles.smallTextRegular,
                { textAlign: "right", textAlignVertical: "bottom" },
              ]}
            >
              {moment(item.seendate).startOf().fromNow()}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.redButton,
              { zIndex: 4, marginHorizontal: 9, alignSelf: "flex-end" },
            ]}
          >
            <Text
              numberOfLines={1}
              style={[
                {
                  color: Colors.white,
                  fontFamily: "FiraSans-Medium",
                  textAlignVertical: "center",
                },
              ]}
            >
              Share
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    return newsComp;
  };
  ItemGlobalNews = ({ item, index }) => {
    // var item = articles[0];
    if (index == 0) {
      return this.TopGlobalNews({ item }, index);
    }
    var newsComp = (
      <View
        style={[
          {
            paddingVertical: 10,
            shadowColor: "#000",
            shadowOffset: { width: 1, height: 3 },
            shadowOpacity: 0.4,
            shadowRadius: 3,
            elevation: 4,
            backgroundColor: Colors.white,
            marginBottom: 4,
          },
        ]}
      >
        <View
          style={[
            {
              flexDirection: "row",
              padding: 0,
              paddingBottom: 0,
            },
          ]}
        >
          <View
            style={[
              {
                minWidth: 56,
                flex: 0.03,
                justifyContent: "center",
                flexDirection: "column",
                alignContent: "center",
              },
            ]}
          >
            <View
              style={[
                {
                  height: 50,
                  width: 50,
                  borderRadius: 100,
                  backgroundColor: Colors.white,
                  borderColor: Colors.primary,
                  borderWidth: 2,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignSelf: "center",
                },
              ]}
            >
              <Text
                style={[
                  {
                    fontFamily: "FiraSans-Medium",
                    color: Colors.primary,
                    textAlign: "center",
                    textAlignVertical: "center",
                  },
                ]}
              >
                {index}
              </Text>
            </View>
          </View>
          <View
            style={[
              { flex: 1, justifyContent: "center", flexDirection: "column" },
            ]}
          >
            <TouchableOpacity>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={{
                  fontFamily: "FiraSans-Medium",
                  fontSize: 16,
                  paddingHorizontal: 0,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
            <View
              style={[
                {
                  flexDirection: "row",
                  paddingHorizontal: 0,
                  paddingBottom: 0,
                },
              ]}
            >
              <View
                style={[
                  {
                    flex: 1,
                    justifyContent: "center",
                    flexDirection: "column",
                  },
                ]}
              >
                <Text
                  numberOfLines={1}
                  style={[
                    {
                      textAlign: "left",
                    },
                    styles.smallTextRegular,
                  ]}
                >
                  {item.domain}
                </Text>
              </View>
              <View
                style={[
                  {
                    flex: 1,
                    justifyContent: "center",
                    flexDirection: "column",
                  },
                ]}
              >
                <Text
                  numberOfLines={1}
                  style={[
                    styles.smallTextRegular,
                    { textAlign: "right", textAlignVertical: "bottom" },
                  ]}
                >
                  {moment(item.seendate).startOf().fromNow()}
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.redButton,
                  { zIndex: 4, marginHorizontal: 9, alignSelf: "flex-end" },
                ]}
              >
                <Text
                  numberOfLines={1}
                  style={[
                    {
                      color: Colors.white,
                      fontFamily: "FiraSans-Medium",
                      textAlignVertical: "center",
                    },
                  ]}
                >
                  Share
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              {
                minWidth: 15,
                justifyContent: "center",
                flexDirection: "column",
                flex: 0.03,

                alignContent: "center",
              },
            ]}
          >
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              style={{ color: Colors.primary }}
            />
          </View>
        </View>
      </View>
    );
    return newsComp;
  };
  FabButton = () => {
    return (
      <View
        height={70}
        style={[
          styles.redButtonRound,
          {
            width: 65,
            height: 65,
            margin: 5,
          },
        ]}
      >
        <View style={[styles.redButtonRound, { width: 40, height: 40 }]}>
          <Text
            style={[
              {
                color: Colors.white,
                fontSize: 30,
                lineHeight: 35,
              },
            ]}
          >
            +
          </Text>
        </View>
      </View>
    );
  };
  ActionSheetImage = ({ ref }) => {
    console.log(ref, "ref");
    var actionSheetRef = ref;
    return (
      <ActionSheet ref={actionSheetRef}>
        <View>
          <Text
            style={[
              styles.actionSheetBtn,
              { color: Colors.midGrey, fontWeight: "bold" },
            ]}
          >
            Select Image Source
          </Text>
          <TouchableOpacity
            onPress={() => {
              actionSheetRef.current?.setModalVisible(false);
              Camera.loadCamera("photo", "camera", (response) => {
                console.log(response);
                this.props.navigation.navigate("UploadImage", {
                  camData: response.assets,
                });
              });
            }}
          >
            <Text style={[styles.actionSheetBtn]}>
              Capture Image from Camera
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              actionSheetRef.current?.setModalVisible(false);
              Camera.loadCamera("photo", "library", (response) => {
                console.log(response);
                this.props.navigation.navigate("UploadImage", {
                  camData: response.assets,
                });
              });
            }}
          >
            <Text style={[styles.actionSheetBtn]}>Load Image from Library</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              actionSheetRef.current?.setModalVisible(false);
            }}
          >
            <Text style={[styles.actionSheetBtn]}>Cancel</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={[styles.redButtonRound, { width: 40, height: 40, margin: 3 }]}
              onPress={() => { actionSheetRef.current?.setModalVisible(false); }}

            ><Text style={[{ color: Colors.white }]}>X</Text></TouchableOpacity> */}
        </View>
      </ActionSheet>
    );
  };
  render() {
    const actionSheetRef = createRef();
    const actionSheetRef2 = createRef();
    const actionSheetRef3 = createRef();
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <View
          style={[
            {
              paddingVertical: 10,
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 3 },
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 4,
              backgroundColor: Colors.white,
              marginBottom: 4,
            },
          ]}
        >
          <SegmentedControlTab
            values={["Your Feed", "Global News", "Trending"]}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
            tabStyle={{ backgroundColor: Colors.white, borderWidth: 0 }}
            activeTabStyle={{ backgroundColor: Colors.white, borderWidth: 0 }}
            activeTabTextStyle={{
              color: Colors.primary,
              fontFamily: "FiraSans-Medium",
            }}
            tabTextStyle={{
              color: Colors.grey,
              fontFamily: "FiraSans-Regular",
            }}
          />
        </View>

        {this.state.selectedIndex == 0 && (
          <View style={{ flex: 1 }}>
            <FlatList
              data={this.state.feedsData}
              renderItem={this._renderListItem}
              keyExtractor={(item, index) => item + index}
              style={{ flex: 1, backgroundColor: Colors.white }}
              showsVerticalScrollIndicator={false}
              alwaysBounceVertical
            />
            <CFAB
              totalitems={1}
              style={{ width: 40, height: 40, right: 20 }}
              fabOpenButton={this.FabButton()}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("UploadLink")}
                height={65}
                style={[styles.redButtonRound]}
              >
                <Ionicons
                  name="link"
                  size={24}
                  style={{ color: Colors.white }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("UploadText")}
                height={65}
                style={[styles.redButtonRound]}
              >
                <Icon
                  name="text"
                  height={40}
                  width={40}
                  color={Colors.white}
                  style={[{ alignSelf: "center" }]}
                  dontShowMask={true}
                />
              </TouchableOpacity>
              <TouchableOpacity
                height={65}
                style={[styles.redButtonRound]}
                // onPress={() => this.props.navigation.navigate('UploadImage')}
                // onPress={() => actionSheetRef.current?.setModalVisible()}>
                onPress={() => this.imageActionSheet.show()}
              >
                <Icon
                  name="camera"
                  height={40}
                  width={40}
                  color={Colors.white}
                  style={[{ alignSelf: "center" }]}
                  dontShowMask={true}
                />
              </TouchableOpacity>
              <TouchableOpacity
                height={65}
                style={[styles.redButtonRound]}
                onPress={() => this.videoActionSheet.show()}
                // onPress={() => actionSheetRef2.current?.setModalVisible()}
              >
                <Icon
                  name="video"
                  height={40}
                  width={40}
                  color={Colors.white}
                  style={[{ alignSelf: "center" }]}
                  dontShowMask={true}
                />
              </TouchableOpacity>
            </CFAB>
          </View>
        )}
        {
          this.state.selectedIndex == 1 && (
            <FlatList
              data={this.state.NewsData}
              renderItem={this.TopGlobalNews}
              keyExtractor={(item, index) => item + index}
              style={{ flex: 1, backgroundColor: Colors.white }}
              showsVerticalScrollIndicator={false}
              alwaysBounceVertical
            />
          )
          /* this.TopGlobalNews(this.state.NewsData) */
        }
        {
          this.state.selectedIndex == 2 && (
            <FlatList
              data={this.state.NewsData}
              renderItem={this.ItemGlobalNews}
              keyExtractor={(item, index) => item + index}
              style={{ flex: 1, backgroundColor: Colors.white }}
              showsVerticalScrollIndicator={false}
              alwaysBounceVertical
            />
          )
          /* this.TopGlobalNews(this.state.NewsData) */
        }
        <ActionSheet ref={actionSheetRef2}>
          <View>
            <TouchableOpacity
              onPress={() => {
                actionSheetRef2.current?.setModalVisible(false);
                launchCamera(
                  { mediaType: "video", durationLimit: 15 },
                  (response) => {
                    console.log(response);
                    this.props.navigation.navigate("UploadVideo", {
                      camData: response.assets,
                    });
                    console.log(response, "Video");
                  },
                );
              }}
            >
              <Text style={[styles.actionSheetBtn]}>
                Capture Video from Camera
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                actionSheetRef2.current?.setModalVisible(false);
                launchImageLibrary(
                  {
                    mediaType: "video",
                    includeBase64: false,
                  },
                  (response) => {},
                );
              }}
            >
              <Text style={[styles.actionSheetBtn]}>
                Load Video from Library
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.redButtonRound,
                { width: 40, height: 40, margin: 3 },
              ]}
              onPress={() => {
                actionSheetRef2.current?.setModalVisible(false);
              }}
            >
              <Text style={[{ color: Colors.white }]}>X</Text>
            </TouchableOpacity>
          </View>
        </ActionSheet>
        {/* <ActionSheet ref={actionSheetRef}>
          <View>
            <TouchableOpacity
              onPress={() => {
                actionSheetRef.current?.setModalVisible(false);
                launchCamera(
                  {
                    saveToPhotos: true,
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 720,
                    maxWidth: 1280,
                  },
                  (response) => {
                    console.log(response);
                    this.props.navigation.navigate('UploadImage', { camData: response.assets });
                  });
              }}><Text style={[styles.actionSheetBtn]}>Capture Image from Camera</Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                actionSheetRef.current?.setModalVisible(false);
                launchImageLibrary(
                  {
                    mediaType: 'photo',
                    includeBase64: false,
                  },
                  (response) => {
                    console.log(response);
                  },
                );

              }}><Text style={[styles.actionSheetBtn]}>Load Image from Library</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.redButtonRound, { width: 40, height: 40, margin: 3 }]}
              onPress={() => { actionSheetRef.current?.setModalVisible(false); }}

            ><Text style={[{ color: Colors.white }]}>X</Text></TouchableOpacity>

          </View>
        </ActionSheet> */}
        {this.ActionSheetImage({ ref: actionSheetRef })}
        {this.imageActionSheet.ActionSheetNode()}
        {this.videoActionSheet.ActionSheetNode()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  logoImage: {
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
  logoContainer: {
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
    height: 320,
    width: "100%",
    backgroundColor: Colors.lightGrey,
  },
  postContainer: {
    height: 320,
    width: "100%",
    backgroundColor: Colors.lightGrey,
  },
  PostImage: {
    width: "100%",
    height: "100%",
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
  smallTextRegular: {
    paddingHorizontal: 0,
    fontSize: 12,
    fontFamily: "FiraSans-Regular",
    color: Colors.grey,
  },
  commentText: {
    paddingBottom: 10,

    fontSize: 14,
    fontFamily: "FiraSans-Regular",
    marginEnd: 10,
  },
  redButton: {
    backgroundColor: Colors.primary,
    alignContent: "center",
    justifyContent: "center",
    width: 60,
    color: Colors.primary,
    borderColor: Colors.primary,
    borderRadius: 5,
    borderWidth: 2,
    alignItems: "center",
  },
  actionSheetBtn: {
    backgroundColor: Colors.white,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    color: Colors.grey,
    borderColor: "transparent",
    borderBottomColor: Colors.lightGrey,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 2,
    alignItems: "center",

    padding: 10,
  },
  redButtonRound: {
    backgroundColor: Colors.primary,
    alignContent: "center",
    justifyContent: "center",
    color: Colors.primary,
    alignItems: "center",
    width: 55,
    height: 55,
    borderRadius: 100,
    borderColor: Colors.white,
    alignSelf: "center",
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
  },
});
export default NewsFeed;
