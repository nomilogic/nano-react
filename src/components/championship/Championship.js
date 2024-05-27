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
  Platform,
} from 'react-native';
import {SvgCssUri} from 'react-native-svg/css';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CarouselScreen from '../../../src/components/championship/carouselComponent';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b2-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c606-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da2-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b3-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c607-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da3-471f-bd96-145571e29d72',
    title: 'Third Item',
  }
];

const Item = ({title, id}) => (
  <TouchableOpacity>
    <View style={styles.actListItem}>
      <Image
        style={[styles.itemImg]}
        source={{uri: 'https://picsum.photos/200'}}
      />
      <Text style={styles.itemTitle}>{title}</Text>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: '#2AA39A',
            height: 24,
            width: 70,
            alignSelf: 'center',
            right: 10,
          },
        ]}>
        <Text
          style={[
            styles.buttonTxt,
            {
              color: '#fff',
              textAlign: 'center',
              fontFamily: 'FiraSans-Regular',
              fontSize: 12,
              textTransform: 'none',
            },
          ]}>
          Joined
        </Text>
      </TouchableOpacity>
      <Ionicons
        name="chevron-forward-outline"
        size={20}
        style={styles.inputTxtIcon}
      />
      {/* <Text style={styles.itemId}>{id}</Text> */}
    </View>
  </TouchableOpacity>
);

const ChampionshipScreen = ({navigation}) => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  const renderItem = ({item}) => <Item title={item.title} id={item.id} />;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FF5A60" />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>
        <SafeAreaView style={[styles.container]} backgroundColor="transparent">
          <View style={[styles.titleBoxCont]}>
            <View style={[styles.lCont]}>
              <Image
                style={[styles.logo]}
                source={{
                  uri: 'https://media.nanodot.us/img/nano_colord_logo.png',
                }}
              />
              <Text style={[styles.logoTxt]}>Choose your Championship!</Text>
            </View>

            <View style={[styles.rCont]}>
              <SvgCssUri
                style={styles.tSvg}
                width="100%"
                height="100%"
                uri="https://media.nanodot.us/img/trophy_champ.svg"
              />
            </View>
          </View>

          <View style={[styles.pCardCont]}>
            <Text style={[styles.pCardTitleTxt]}>POPULAR</Text>
            <CarouselScreen navigation={navigation} />
          </View>

          <View style={[styles.tabsContentCont]}>
            <View style={[styles.tabsCont]}>
              <Text style={[styles.tabhdTxt, styles.actvTabhdTxt]}>Active</Text>
              <Text style={[styles.tabhdTxt]}>Completed</Text>
            </View>
            <View style={[styles.tabList]}>
              <ScrollView>
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
  },
  contentContainer: {
    // backgroundColor:"purple",
    justifyContent: 'center',
    alignItems: 'center',
    // width:"100%",
    // // flexGrow: 1,
  },

  titleBoxCont: {
    height: 130,
    width: '90%',
    flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor:"purple",
  },
  lCont: {
    flex: 0.7,
    // width:"70%",
    // backgroundColor:"red",
  },
  logo: {
    // aspectRatio: .7,
    height: 35,
    width: 70,
    resizeMode: 'contain',
    // top: "10%",
  },
  logoTxt: {
    color: '#203541',
    fontSize: 34,
    // position: 'absolute',
    // backgroundColor:"red",
    fontFamily: 'FiraSans-Bold',
  },
  rCont: {
    // backgroundColor:"blue",
    // position:"absolute",
    // width:"30%",
    flex: 0.3,
    flexDirection: 'row-reverse',
  },
  tSvg: {
    // height:20,
    // width:20,
    // top:-40,
    right: 30,
    // position:"absolute",
  },
  pCardCont: {
    // height:"100%",
    flex: 1,
    // backgroundColor:"gray",
    alignSelf: 'stretch',
  },
  pCardTitleTxt: {
    color: '#203541',
    fontSize: 16,
    fontFamily: 'FiraSans-Bold',
    // backgroundColor:"red",
    paddingTop: 10,
    paddingLeft: 10,
  },
  tabsContentCont: {
    // height:500,
    // backgroundColor:"purple",
    alignSelf: 'stretch',
    // marginBottom:50,
  },
  tabsCont: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  tabhdTxt: {
    color: '#203541',
    fontSize: 18,
    fontFamily: 'FiraSans-Bold',
    // backgroundColor:"yellow",
    width: 120,
    textAlign: 'center',
    // height: 80,
    textAlignVertical: 'center',
    opacity: 0.7,
    marginBottom: 20,
  },
  actvTabhdTxt: {
    color: 'black',
    textDecorationLine: 'underline',
  },
  tabList: {
    // backgroundColor:"red",
    flex: 1,
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
    color: '#203541',
    fontSize: 18,
    fontFamily: 'FiraSans-Bold',
    flex: 8,
    // backgroundColor:"gray",
  },
  itemId: {
    fontSize: 20,
  },
  itemImg: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    borderRadius: 100,
    // backgroundColor:"gray",
    overflow: 'hidden',
    flex: 1.5,
    margin: 10,
    marginLeft: 0,
  },
  inputTxtIcon: {
    color: '#FF5A60',
    // top:10,
    // position:'absolute',
    // left:10,
    textAlignVertical: 'center',
    alignItems: 'flex-end',
    flex: 0.5,
  },
  button: {
    // borderWidth:1,
    // borderColor:'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    // width:"90%",
    // flex:1,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 20,
    // marginBottom:20,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  buttonTxt: {
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'FiraSans-Bold',
    flex: 0.8,
  },
});

export default ChampionshipScreen;
