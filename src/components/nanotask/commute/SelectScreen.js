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
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SvgCssUri} from 'react-native-svg/css';
import {RadioButton} from 'react-native-paper';

const DATA = [
  {
    id: '22',
    title: 'Work From Home',
    co2: '2195.6',
    val: '1',
    imgUrl: 'https://media.nanodot.us/img/Home.svg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Walk',
    co2: '2195.6',
    val: '2',
    imgUrl:
      'https://nanodotapp.s3.amazonaws.com/nano/carbonfootprint/commute/footsteps.svg',
  },
  {
    id: '33',
    title: 'Bicycle',
    co2: '2195.6',
    val: '3',
    imgUrl:
      'https://nanodotapp.s3.amazonaws.com/nano/carbonfootprint/commute/bicyle.svg',
  },
  {
    id: '44',
    title: 'Motorbike',
    co2: '881.8281',
    val: '4',
    imgUrl:
      'https://nanodotapp.s3.amazonaws.com/nano/carbonfootprint/commute/motorbike.svg',
  },
  {
    id: '55',
    title: 'E-bike',
    co2: '1947.761',
    val: '5',
    imgUrl:
      'https://nanodotapp.s3.amazonaws.com/nano/carbonfootprint/commute/motorbike.svg',
  },
  {
    id: '66',
    title: 'Bus',
    co2: '814.5736',
    val: '6',
    imgUrl:
      'https://nanodotapp.s3.amazonaws.com/nano/carbonfootprint/commute/bus.svg',
  },
  {
    id: '77',
    title: 'Train',
    co2: '1668.6042',
    val: '7',
    imgUrl:
      'https://nanodotapp.s3.amazonaws.com/nano/carbonfootprint/commute/train.svg',
  },
];

const SelectScreen = ({navigation}) => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      id={item.id}
      co2={item.co2}
      imgUrl={item.imgUrl}
      itemVal={item.val}
    />
  );

  const [value, setValue] = React.useState('1');

  const Item = ({title, id, co2, imgUrl, itemVal}) => (
    // <TouchableOpacity>
    <RadioButton.Group
      onValueChange={(newValue) => setValue(newValue)}
      value={value}>
      <View style={styles.listItem}>
        <View style={{alignSelf: 'center'}}>
          <RadioButton color="#FF5A60" value={itemVal} />
        </View>
        <View style={{flex: 1, justifyContent: 'center'}} />
        <View
          style={{
            flex: 8,
            textAlignVertical: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemCoTxt}>
            Estimated avoided co2 <Text style={{color: '#FF5A60'}}> {co2}</Text>
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <SvgCssUri
            style={{alignSelf: 'center'}}
            width="30"
            height="30"
            uri={imgUrl}
          />
        </View>
      </View>
    </RadioButton.Group>

    // </TouchableOpacity>
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
            <View style={{flex: 1, padding: 20}}>
              <Text
                style={{
                  color: '#203541',
                  fontFamily: 'FiraSans-Bold',
                  fontSize: 26,
                  marginBottom: 20,
                }}>
                Select Commute
              </Text>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
              <View>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {backgroundColor: '#FF5A60', alignSelf: 'center'},
                  ]}>
                  <Text style={[styles.buttonTxt, {color: '#fff'}]}>Start</Text>
                </TouchableOpacity>
              </View>

              {/* <RadioButton.Group
                onValueChange={(newValue) => setValue(newValue)}
                value={value}>
                <View>
                  <Text>Car</Text>
                  <RadioButton value="first" />
                </View>
                <View>
                  <Text>Bike</Text>
                  <RadioButton value="second" />
                </View>
              </RadioButton.Group> */}
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
});

export default SelectScreen;
