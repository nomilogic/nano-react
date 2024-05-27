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
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
// import {ProgressBar} from 'react-native-paper';
// import LinearGradient from 'react-native-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {SvgCssUri} from 'react-native-svg/css';
// import {RadioButton} from 'react-native-paper';

const DATA = [
  {
    id: '11',
    day: 'Wednesday',
    distance: '36 ft',
    duration: '00:00:10',
    commuteBy: 'Work From Home',
    co2: '376.4 g',
    onDate: '3 Mar',
    imgUrl: 'https://media.nanodot.us/img/Home.svg',
  },
  {
    id: '22',
    day: 'Monday',
    distance: '1.2 mi',
    duration: '00:00:10',
    commuteBy: 'Walk',
    co2: '2.1 g',
    onDate: '18 Aug',
    imgUrl:
      'https://nanodotapp.s3.amazonaws.com/nano/carbonfootprint/commute/footsteps.svg',
  },
  {
    id: '33',
    day: 'Friday',
    distance: '99 ft',
    duration: '00:00:10',
    commuteBy: 'Bicyle',
    co2: '75 g',
    onDate: '2 Feb',
    imgUrl:
      'https://nanodotapp.s3.amazonaws.com/nano/carbonfootprint/commute/bicyle.svg',
  },
  {
    id: '44',
    day: 'Tuesday',
    distance: '53 mi',
    duration: '00:00:10',
    commuteBy: 'Motorbike',
    co2: '62 g',
    onDate: '16 jun',
    imgUrl:
      'https://nanodotapp.s3.amazonaws.com/nano/carbonfootprint/commute/motorbike.svg',
  },
  {
    id: '55',
    day: 'Wednesday',
    distance: '1 ft',
    duration: '00:00:10',
    commuteBy: 'Motorbike',
    co2: '5 g',
    onDate: '21 jul',
    imgUrl:
      'https://nanodotapp.s3.amazonaws.com/nano/carbonfootprint/commute/motorbike.svg',
  },
  {
    id: '66',
    day: 'Tuesday',
    distance: '12 mi',
    duration: '00:00:10',
    commuteBy: 'bus',
    co2: '99 g',
    onDate: '10 Oct',
    imgUrl:
      'https://nanodotapp.s3.amazonaws.com/nano/carbonfootprint/commute/bus.svg',
  },
  {
    id: '77',
    day: 'Friday',
    distance: '48 ft',
    duration: '00:00:10',
    commuteBy: 'train',
    co2: '58 g',
    onDate: '25 Dec',
    imgUrl:
      'https://nanodotapp.s3.amazonaws.com/nano/carbonfootprint/commute/train.svg',
  },
  {
    id: '88',
    day: 'Monday',
    distance: '68 mi',
    duration: '00:00:10',
    commuteBy: 'bus',
    co2: '44 g',
    onDate: '15 Sep',
    imgUrl:
      'https://nanodotapp.s3.amazonaws.com/nano/carbonfootprint/commute/bus.svg',
  },
  {
    id: '99',
    day: 'Tuesday',
    distance: '42 ft',
    duration: '00:00:10',
    commuteBy: 'Walk',
    co2: '2 g',
    onDate: '30 Jan',
    imgUrl:
      'https://nanodotapp.s3.amazonaws.com/nano/carbonfootprint/commute/footsteps.svg',
  },
];

const LogScreen = ({navigation}) => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  const renderItem = ({item}) => (
    <Item
      id={item.id}
      day={item.day}
      distance={item.distance}
      commuteBy={item.commuteBy}
      co2={item.co2}
      onDate={item.onDate}
      imgUrl={item.imgUrl}
    />
  );

  const [value, setValue] = React.useState('1');

  const Item = ({id, distance, co2, commuteBy, imgUrl, onDate, day}) => (
    <TouchableOpacity>
      {/* <RadioButton.Group */}
      {/* onValueChange={(newValue) => setValue(newValue)} */}
      {/* value={value}> */}
      <View style={{marginVertical: 10}}>
        <Text style={styles.itemTitle}>{day}</Text>
      </View>

      <View style={styles.listItem}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <SvgCssUri
            style={{alignSelf: 'center'}}
            width="30"
            height="30"
            uri={imgUrl}
          />
        </View>
        {/* <View style={{alignSelf: 'center'}}>
          <RadioButton color="#FF5A60" value={itemVal} />
        </View> */}
        <View
          style={{
            flex: 5,
            textAlignVertical: 'center',
            justifyContent: 'center',
            marginLeft: 10,
            // backgroundColor:'tan'
          }}>
          <Text style={{color: '#BBBBBB', fontSize: 10}}>Distance</Text>
          <Text style={styles.itemTitle}>{distance}</Text>
          <Text style={styles.itemCoTxt}>
            in 00:00:10 by <Text style={{color: '#FF5A60'}}>{commuteBy}</Text>
          </Text>
        </View>
        <View style={{flex: 3, justifyContent: 'center', marginRight: 10}}>
          <Text style={{color: '#BBBBBB', fontSize: 10, textAlign: 'right'}}>
            Avoided CO2
          </Text>
          <Text
            style={{
              color: '#FF5A60',
              fontSize: 18,
              fontFamily: 'FiraSans-Medium',
              textAlign: 'right',
            }}>
            {co2}
          </Text>
          <Text style={{color: '#BBBBBB', fontSize: 10, textAlign: 'right'}}>
            {onDate}
          </Text>
        </View>
      </View>
      {/* </RadioButton.Group> */}
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FF5A60" />

      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}>
          <SafeAreaView
            style={[styles.container]}
            backgroundColor="transparent">
            <View style={{flex: 1, padding: 20, marginBottom: 30}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    resizeMode: 'contain',
                    marginLeft: 4,
                    alignSelf: 'center',
                    // top:3,
                  }}
                  source={{uri: 'https://media.nanodot.us/img/trvlLog.png'}}
                />
                <Text
                  style={{
                    color: '#203541',
                    fontFamily: 'FiraSans-Bold',
                    fontSize: 26,
                    // marginBottom: 20,
                    marginLeft: 10,
                    alignSelf: 'center',
                  }}>
                  Activities
                </Text>
              </View>
              <View>
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
              </View>
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
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
    backgroundColor: '#F5F5F5',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width:"100%",
    flex: 1,
  },
  button: {
    // borderWidth:1,
    // borderColor:'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    // marginBottom: 20,
    // marginHorizontal: 10,
    // flex:1
    bottom: '50%',
  },
  buttonTxt: {
    color: '#DB55BC',
    textTransform: 'uppercase',
    fontFamily: 'FiraSans-Bold',
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    // marginHorizontal: 16,
    // alignItems:"center",
    // justifyContent:"space-between",
    flexDirection: 'row',
    alignSelf: 'auto',
    // width:"90%",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    // borderColor:'red',
    // borderWidth:2,
  },
  itemTitle: {
    textAlignVertical: 'center',
    color: '#000',
    fontSize: 18,
    fontFamily: 'FiraSans-Medium',
    // flex:8,
    // backgroundColor:"gray",
  },
  itemCoTxt: {
    textAlignVertical: 'center',
    color: '#000',
    fontSize: 10,
    fontFamily: 'FiraSans-Regular',
  },
});

export default LogScreen;
