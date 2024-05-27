import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {Icon} from '../Icons/icons';
import {Colors} from '../Colors/colors';
import {CarbonData} from './carbonData';
import {RadioButton} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

class CarbonCalculator extends Component {
  propParams;
  constructor(props) {
    super(props);

    this.state = {
      page: 'CarbonCalcIntroPage',
      detailList: CarbonData.detailList,
    };
  }
  async loadUserData() {
    var UserData = await AsyncStorage.getItem('userData');
    this.setState({UserData: JSON.parse(UserData)});
  }
  componentDidMount() {
    var props = this.props;
    this.propParams = props.route.params;
    if (this.propParams) {
      console.log(props.route.params);

      var page =
        this.propParams && this.propParams.page
          ? this.propParams.page
          : 'CarbonCalcIntroPage';
      this.setState({page: page});
      if (this.propParams.pageData) {
        this.props.navigation.setOptions({title: ' '});
        this.setState({pageData: this.propParams.pageData});
      }
      this.loadUserData();
      return;
    }
    this.setState({page: 'CarbonCalcIntroPage'});
  }
  CarbonCalcIntroPage = () => {
    var pageView = (
      <View style={[{padding: 60}]}>
        <Text
          style={[
            {
              marginTop: 10,
              fontSize: 40,
              color: Colors.blueblack,
              fontFamily: 'FiraSans-Medium',
            },
          ]}>
          Reduce your carbon footprint
        </Text>
        <Text
          style={[
            {
              marginTop: 10,
              fontSize: 19,
              color: Colors.grey,
              fontFamily: 'FiraSans-Regular',
            },
          ]}>
          Did you know the average person's carbon footprint is 20 tons per year
        </Text>
        <Text
          style={[
            {
              marginTop: 10,
              fontSize: 19,
              color: Colors.grey,
              fontFamily: 'FiraSans-Regular',
            },
          ]}>
          Nano was created to help everyone reduce carbon at the source and live
          a carbon neutral lifestyle - one small deed at a time. Use Nano to
          calculate your current carbon footprint and then monitor your
          progression in our carbon reducing activities and Championships
        </Text>
        <Text
          style={[
            {
              marginTop: 10,
              fontSize: 19,
              color: Colors.grey,
              fontFamily: 'FiraSans-Regular',
            },
          ]}>
          Get started now by answering a few simple questions and Have Fun
        </Text>
        <TouchableOpacity
          onPress={() => {
            // this.setState({page: 2});

            this.props.navigation.push('CarbonCalculator', {
              page: 'CarbonCalcMainPage',
            });
            console.log('pressed');
          }}
          activeOpacity={0.8}
          style={{}}>
          <View
            style={[
              {
                backgroundColor: Colors.primary,
                alignContent: 'center',
                justifyContent: 'center',
                color: Colors.primary,
                alignItems: 'center',
                padding: 10,
                borderRadius: 8,
              },
            ]}>
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
              START
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
    return pageView;
  };
  CarbonCalcMainPage = () => {
    var detailList = this.state.detailList;
    var boxItems = ({item, index}) => {
      var boxItem = (
        <View style={[styles.box]}>
          <TouchableOpacity
            style={[{flex: 1}]}
            onPress={() => {
              // this.setState({page: 2});

              this.props.navigation.push('CarbonCalculator', {
                page: item.title,
                pageData: item,
              });

              console.log('pressed');
            }}>
            <Text style={{fontFamily: 'FiraSans-Bold', marginTop: 5}}>
              {item.title.toUpperCase()}
            </Text>
            {!item.allcheck && (
              <Text style={{fontFamily: 'FiraSans-Regular'}}>
                {item.activities.length} Questions
              </Text>
            )}
            {item.allcheck && (
              <Text
                style={{fontFamily: 'FiraSans-Regular', color: Colors.grey}}>
                All {item.activities.length} Questions answered
              </Text>
            )}
            <View style={[{position: 'absolute', right: 5, top: 5}]}>
              {item.allcheck && (
                <Icon
                  url={'https://media.nanodot.us/img/Group-2347.svg'}
                  width={20}
                  height={20}
                  dontShowMask={true}
                />
              )}
            </View>
            <View style={[{position: 'absolute', right: 5, bottom: 5}]}>
              {
                <Icon
                  url={item.imgUrl}
                  width={50}
                  height={50}
                  color={Colors.midGrey}
                />
              }
            </View>
          </TouchableOpacity>
        </View>
      );
      //console.log(boxItem);
      return boxItem;
    };
    var CreateGrid = ({renderItem, numColumns, data}) => {
      var grid = [];
      var gridRow = [];
      var noOfItems = numColumns;
      for (let index = 0; index < data.length; index++) {
        const element = data[index];

        gridRow.push(
          <View style={[{flex: 1, flexDirection: 'column'}]} key={index}>
            {renderItem({item: element, index: index})}
          </View>,
        );
        if (index % noOfItems == noOfItems - 1) {
          grid.push(
            <View style={[{flex: 1, flexDirection: 'row'}]} key={index}>
              {gridRow}
            </View>,
          );
          gridRow = [];
        }
        if (index == detailList.length - 1 && gridRow.length != 0) {
          grid.push(
            <View style={[{flex: 1, flexDirection: 'row'}]} key={index}>
              {gridRow}
            </View>,
          );
        }
      }
      return grid;
    };
    var pageView = (
      <View style={[{padding: 10, backgroundColor: Colors.primary, flex: 1}]}>
        <View style={{flexDirection: 'row'}}>
          {this.state.UserData && (
            <Image
              style={{
                height: 100,
                width: 100,
                borderRadius: 100,
                borderColor: '#fff',
                borderWidth: 2,
                marginBottom: 10,
              }}
              source={{
                uri:
                  this.state.UserData.profilepic == '' ||
                  this.state.UserData.profilepic ==
                    'http://localhost/_app_file_/storage/emulated/0/Android/data/io.ionic.starter/cache/1606223047739.jpg'
                    ? 'https://s3.amazonaws.com/nanodotapp/nano/stage/default/User.png'
                    : this.state.UserData.profilepic,
              }}
            />
          )}
          <View style={{justifyContent: 'center'}}>
            <Text
              style={[
                styles.font16,
                {color: Colors.white, marginLeft: 10, fontSize: 20},
              ]}>
              My Carbon Footprint
            </Text>
          </View>
        </View>
        <View style={[{flex: 0.5}]}>
          {/* <FlatList
            style={{backgroundColor: Colors.yellow}}
            data={this.state.detailList}
            renderItem={boxItems}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          /> */}

          <CreateGrid
            data={this.state.detailList}
            renderItem={boxItems}
            numColumns={2}
          />
        </View>
      </View>
    );
    return pageView;
  };
  CarbonCalcPage1 = () => {
    console.log('p1');

    var data = this.state.pageData;
    console.log(data.activites);
    var RenderQuestion = (item, index) => {
      if (!item.showUnits) {
        item.showUnits = false;
      }

      var question = (
        <View style={{padding: 10}} key={index}>
          <View style={[styles.boxRow, {}]}>
            <Text
              style={[
                {
                  color: Colors.white,
                  borderRadius: 100,
                  backgroundColor: Colors.primary,
                  width: 30,
                  height: 30,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                },
                styles.font16,
              ]}>
              {index + 1}
            </Text>
          </View>
          <View style={[styles.boxRow, {}]}>
            <Text style={[{color: Colors.black}, styles.font16]}>
              {item.question}{' '}
            </Text>
          </View>
          {/* {ngIf="item.units.length == 1"} */}
          <View style={[styles.boxRow, {flexDirection: 'row'}]}>
            <View style={{flex: 1}}>
              <TextInput
                type="text"
                placeholder={String(item.units[0].factor)}
                value={String(item.ans)}
                style={[
                  {
                    borderWidth: 2,
                    borderColor: Colors.midGrey,
                    paddingHorizontal: 10,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  },

                  styles.font16,
                ]}
                onChangeText={(val) => {
                  if (val * 0 != 0) {
                    return;
                  }
                  var _textObject = {...item};
                  console.log(_textObject);

                  item.ans = val;
                  this.setState({pageData: data});
                  console.log(val);
                }}
              />
            </View>
            <TouchableOpacity
              style={{
                borderColor: Colors.primary,
                backgroundColor: Colors.primary,
                borderWidth: 2,
                justifyContent: 'center',
                alignContent: 'center',
                paddingHorizontal: 5,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}
              onPress={() => {
                item.showUnits = item.showUnits != true ? true : false;
                this.setState({pageData: data});
              }}
              onLayout={(event) => {
                console.log(event.target.height);
                console.log(event.nativeEvent.layout);
              }}>
              <Text style={[{color: Colors.white}, styles.font16]}>
                {item.ansUnit.unit && item.ansUnit.unit != ''
                  ? item.ansUnit.unit
                  : item.units[0]}
                {item.units.length > 1 && (
                  <Ionicons
                    name="caret-down-outline"
                    size={16}
                    style={{color: Colors.white}}
                  />
                )}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[{position: 'relative'}]}>
            {item.units.length > 1 && item.showUnits == true && (
              <View
                style={{
                  position: 'relative',
                  padding: 4,
                  //backgroundColor: Colors.yellow,
                  right: 0,
                  zIndex: 10,

                  //display: item.showPopOver,
                }}>
                {console.log(item.showUnits)}
                {/* {*ngFor="let unit of item.units"} */}
                {item.units.map((unit, ind) => {
                  return (
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        backgroundColor: Colors.white,
                        flex: 1,
                        minWidth: 120,
                        borderWidth: 1,
                        borderColor: Colors.lightGrey,
                      }}
                      onPress={() => {
                        item.ansUnit.unit = unit.unit;
                        item.showUnits = 'none';
                        this.setState({pageData: data});
                      }}>
                      <View style={{paddingLeft: 5, paddingTop: 5, flex: 1}}>
                        <Text> {unit.unit} </Text>
                      </View>
                      <View
                        style={{
                          width: 35,
                          justifyContent: 'center',
                          alignContent: 'center',
                        }}>
                        <RadioButton
                          value={unit.unit}
                          status={
                            item.ansUnit.unit === unit.unit
                              ? 'checked'
                              : 'unchecked'
                          }
                          color={Colors.primary}
                          unCheckedColor={Colors.black}
                          onPress={() => {
                            item.ansUnit.unit = unit.unit;
                            item.showUnits = 'none';
                            this.setState({pageData: data});
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        </View>
      );

      return question;
    };
    var questionsView = (
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            alignContent: 'center',
            flex: 1,
          }}>
          <View style={[{height: 30, width: 30, marginRight: 10}]}>
            {
              <Icon
                url={data.imgUrl}
                width={30}
                height={30}
                color={Colors.midGrey}
              />
            }
          </View>
          <Text style={[styles.font16, {fontSize: 24}]} numberOfLines={1}>
            {data.title}
          </Text>
        </View>
        {data.activities.map(RenderQuestion)}
        <TouchableOpacity
          onPress={() => {
            // this.setState({page: 2});

            this.props.navigation.goBack();
            console.log('pressed');
          }}
          activeOpacity={0.8}
          style={{}}>
          <View
            style={[
              {
                backgroundColor: Colors.primary,
                alignContent: 'center',
                justifyContent: 'center',
                color: Colors.primary,
                alignItems: 'center',
                padding: 10,
                borderRadius: 8,
                margin: 10,
              },
            ]}>
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
              SUBMIT
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );

    return questionsView;
  };
  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.page == 'CarbonCalcIntroPage' && this.CarbonCalcIntroPage()}
        {this.state.page == 'CarbonCalcMainPage' && this.CarbonCalcMainPage()}
        {this.state.page != 'CarbonCalcMainPage' &&
          this.state.page != 'CarbonCalcIntroPage' &&
          this.CarbonCalcPage1()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
  },
  box: {
    backgroundColor: Colors.lightGrey,
    flex: 1,
    margin: 5,
    borderRadius: 12,
    paddingLeft: 10,
    elevation: 4,
  },
  boxRow: {margin: 2},
  font16: {fontSize: 16, fontFamily: 'FiraSans-Medium'},
});

export default CarbonCalculator;
