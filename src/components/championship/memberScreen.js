import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
} from 'react-native';
// import {SvgCssUri} from 'react-native-svg/css';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Hassan Mohiuddin',
    imgUrl:
      'https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'rohaan',
    imgUrl: 'https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Rizwan Sardar',
    imgUrl:
      'https://media.nanodot.us/nano/local/user/5f52127ee0900f0001d0eb01/cover/userUpload5f52127ee0900f0001d0eb017391912001112399355.jpg',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Axel',
    imgUrl:
      'https://media.nanodot.us/nano/local/user/5f7b261303112e0001feda8d/cover/userUpload5f7b261303112e0001feda8d1784522078229775416.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Laurita',
    imgUrl:
      'https://media.nanodot.us/nano/local/user/5f71b4037198ea000196cb9c/cover/userUpload5f71b4037198ea000196cb9c6520631390985017806.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fee Zeilinger',
    imgUrl:
      'https://media.nanodot.us/nano/local/user/5f7d81535e60ca000103c51f/cover/userUpload5f7d81535e60ca000103c51f1239001191531396407.jpg',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Hassan Mohiuddin',
    imgUrl:
      'https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'rohaan',
    imgUrl: 'https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Rizwan Sardar',
    imgUrl:
      'https://media.nanodot.us/nano/local/user/5f52127ee0900f0001d0eb01/cover/userUpload5f52127ee0900f0001d0eb017391912001112399355.jpg',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Axel',
    imgUrl:
      'https://media.nanodot.us/nano/local/user/5f7b261303112e0001feda8d/cover/userUpload5f7b261303112e0001feda8d1784522078229775416.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Laurita',
    imgUrl:
      'https://media.nanodot.us/nano/local/user/5f71b4037198ea000196cb9c/cover/userUpload5f71b4037198ea000196cb9c6520631390985017806.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fee Zeilinger',
    imgUrl:
      'https://media.nanodot.us/nano/local/user/5f7d81535e60ca000103c51f/cover/userUpload5f7d81535e60ca000103c51f1239001191531396407.jpg',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Hassan Mohiuddin',
    imgUrl:
      'https://media.nanodot.us/nano/local/user/5d2745b9a7b6ee0001076395/cover/userUpload5d2745b9a7b6ee00010763951582202666981670519.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'rohaan',
    imgUrl: 'https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Rizwan Sardar',
    imgUrl:
      'https://media.nanodot.us/nano/local/user/5f52127ee0900f0001d0eb01/cover/userUpload5f52127ee0900f0001d0eb017391912001112399355.jpg',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Axel',
    imgUrl:
      'https://media.nanodot.us/nano/local/user/5f7b261303112e0001feda8d/cover/userUpload5f7b261303112e0001feda8d1784522078229775416.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Laurita',
    imgUrl:
      'https://media.nanodot.us/nano/local/user/5f71b4037198ea000196cb9c/cover/userUpload5f71b4037198ea000196cb9c6520631390985017806.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fee Zeilinger',
    imgUrl:
      'https://media.nanodot.us/nano/local/user/5f7d81535e60ca000103c51f/cover/userUpload5f7d81535e60ca000103c51f1239001191531396407.jpg',
  },
];

const Teamlist = ({navigation}) => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  const renderItem = ({item}) => (
    <Item title={item.title} id={item.id} imgUrl={item.imgUrl} />
  );
  const Item = ({title, id, imgUrl}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <View style={styles.actListItem}>
        <Image style={[styles.itemImg]} source={{uri: imgUrl}} />
        <View
          style={{
            flex: 6,
            textAlignVertical: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.itemTitle}>{title}</Text>
        </View>
        <Ionicons name="person-add" size={24} style={styles.arrIcon} />
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FF5A60" />

      <View style={{flex: 1}}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}>
          <SafeAreaView
            style={[styles.container]}
            backgroundColor="transparent">
            <View style={{width: '90%', alignSelf: 'center'}}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    // marginHorizontal:20,
    // height:"100%",
    // width:"100%",
    // backgroundColor:"gray",
    // alignSelf: 'center',
    // flex:1,
  },
  contentContainer: {
    // backgroundColor:"purple",
    // justifyContent: 'center',
    // alignItems: 'center',
    // width:"100%",
    // flex: 1,
  },
  actListItem: {
    // backgroundColor: '#f9c2ff',
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
    // alignItems:"center",
    // justifyContent:"space-between",
    flexDirection: 'row',
    alignSelf: 'auto',
    // width:"90%",
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    borderBottomColor: '#dedede',
    borderBottomWidth: 2,
  },
  itemTitle: {
    textAlignVertical: 'center',
    color: '#000',
    fontSize: 18,
    fontFamily: 'FiraSans-Bold',
    // flex:8,
    // backgroundColor:"gray",
  },
  itemImg: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
    borderRadius: 50,
    // backgroundColor:"gray",
    overflow: 'hidden',
    // flex: 1.5,
    margin: 10,
    marginLeft: 0,
  },
  arrIcon: {
    color: '#FF5A60',
    // top:10,
    // position:'absolute',
    // left:10,
    textAlignVertical: 'center',
    alignItems: 'flex-end',
    // flex:.5,
  },
});

export default Teamlist;
