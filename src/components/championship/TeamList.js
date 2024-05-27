import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
  Platform,
} from 'react-native';
import {SvgCssUri} from 'react-native-svg/css';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Green Mavericks',
    co2: '380,264.43 CO2',
    imgUrl:
      'https://media.nanodot.us/nano/local/community/Green-Mavericks/Green-Mavericks-5e6c1b93.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    co2: '380,264.43 CO2',
    imgUrl:
      'https://media.nanodot.us/nano/local/community/Green-Mavericks/Green-Mavericks-5e6c1b93.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    co2: '380,264.43 CO2',
    imgUrl:
      'https://media.nanodot.us/nano/local/community/Green-Mavericks/Green-Mavericks-5e6c1b93.png',
  },

];

const Teamlist = ({navigation}) => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  const renderItem = ({item}) => (
    <Item title={item.title} id={item.id} co2={item.co2} imgUrl={item.imgUrl} />
  );
  const Item = ({title, id, co2, imgUrl}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <View style={styles.actListItem}>
        <Text style={[styles.rankTxt]}>1</Text>
        <Image style={[styles.itemImg]} source={{uri: imgUrl}} />
        <View
          style={{
            flex: 6,
            textAlignVertical: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemCoTxt}>{co2}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            style={{height: 10, width: 10, alignSelf: 'center'}}
            source={{uri: 'https://media.nanodot.us/img/uploadIcon.png'}}
          />
          <Text style={styles.itemUpldTxt}>144</Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          style={styles.arrIcon}
        />
        {/* <Text style={styles.itemId}>{id}</Text> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FF5A60" />

      <View style={{flex: 1}}>
        <ImageBackground
          source={{uri: 'https://media.nanodot.us/img/Champ_bg.png'}}
          style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}>
            <SafeAreaView
              style={[styles.container]}
              backgroundColor="transparent">
              <View style={{height: 500, alignItems: 'center'}}>
                <Image
                  style={{
                    height: 100,
                    width: 100,
                    resizeMode: 'center',
                    borderRadius: 150,
                  }}
                  source={{
                    uri:
                      'https://media.nanodot.us/nano/local/community/Deutsche-Telekom/Asset-3-c5908724.png',
                  }}
                />
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: 'FiraSans-ExtraBold',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  Deutsche Telekom Championship!
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'FiraSans-BoldItalic',
                    color: 'white',
                    textAlign: 'center',
                    padding: 40,
                    maxHeightheight: 200,
                    // backgroundColor:'tan'
                  }}>
                  Nano is proud to partner with Deutsche Telekom! Below are a
                  list of teams competing in the championship. If your current
                  team isn't listed join one that is! After the championship you
                  can choose to stick with the new team or revert to your old
                  one.
                </Text>

                <TouchableOpacity
                  style={[styles.button, {backgroundColor: 'transparant'}]}>
                  <Text style={[styles.buttonTxt]}>Join this Championship</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  backgroundColor: 'white',
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30,
                  paddingHorizontal: 20,
                }}>
                <Text style={[styles.listHdTxt]}>Teams</Text>
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </SafeAreaView>
          </ScrollView>
        </ImageBackground>
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

  button: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,1)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    // marginBottom:20,
  },
  buttonTxt: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontSize: 18,
    fontFamily: 'FiraSans-Light',
  },

  listHdTxt: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'FiraSans-Bold',
    // backgroundColor:"yellow",
    // width:120,
    textAlign: 'center',
    // height:80,
    // textAlignVertical:"center",
    // opacity:0.7,
    textDecorationLine: 'underline',
    padding: 20,
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
  },
  itemTitle: {
    textAlignVertical: 'center',
    color: '#000',
    fontSize: 18,
    fontFamily: 'FiraSans-Bold',
    // flex:8,
    // backgroundColor:"gray",
  },
  itemCoTxt: {
    textAlignVertical: 'center',
    color: '#7B7B7B',
    fontSize: 12,
    fontFamily: 'FiraSans-Regular',
  },
  itemUpldTxt: {
    textAlignVertical: 'center',
    color: '#7B7B7B',
    fontSize: 16,
    fontFamily: 'FiraSans-Regular',
  },
  itemId: {
    fontSize: 20,
  },
  itemImg: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    borderRadius: 50,
    // backgroundColor:"gray",
    overflow: 'hidden',
    flex: 1.5,
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
  rankTxt: {
    backgroundColor: '#E1E1E1',
    fontSize: 16,
    color: '#7B7B7B',
    borderRadius: 10,
    height: 20,
    width: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
    position: 'absolute',
    zIndex: 99,
  },
});

export default Teamlist;
