import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

class CarouselScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    activeIndex: 0,
    carouselItems: [
      {
        image: 'https://picsum.photos/200',
        teamName: 'Deutsche Telekom',
      },
      {
        image: 'https://picsum.photos/200',
        teamName: 'Deutsche Telekom',
      },
      {
        image: 'https://picsum.photos/200',
        teamName: 'Deutsche Telekom',
      },
      {
        image: 'https://picsum.photos/200',
        teamName: 'Deutsche Telekom',
      },
    ],
  };
  _renderItem = (item, index) => {
    // _renderItem({item, index}) {
    // console.log('i',this.props.navigation);
    return (
      <View style={styles.sliderBox}>
        <TouchableOpacity>
          <View style={{marginBottom: 10}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('List')}
              style={[styles.button, {backgroundColor: '#FF5A60'}]}>
              <Image style={[styles.itemImg]} source={{uri: item.image}} />
              {/* <Image style={[styles.itemImg]} source={{uri: 'https://picsum.photos/200'}} /> */}
              <Text style={styles.buttonTxt}>{item.teamName}</Text>
              {/* <Text style={styles.buttonTxt}>Deutsche Telekom</Text> */}
            </TouchableOpacity>
          </View>

          <View>
            <Text style={[styles.lblTxt, {fontFamily: 'FiraSans-Medium'}]}>
              Teams
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={[styles.tbtn, {backgroundColor: '#F5F5F5'}]}>
                {/* <Image style={[styles.tImg]} source={{uri: 'https://picsum.photos/200'}} /> */}
                <Image style={[styles.tImg]} source={{uri: item.image}} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tbtn, {backgroundColor: '#F5F5F5'}]}>
                {/* <Image style={[styles.tImg]} source={{uri: 'https://picsum.photos/200'}} /> */}
                <Image style={[styles.tImg]} source={{uri: item.image}} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: 150, flexDirection: 'row'}}>
            <View style={[styles.tskBox, {borderRightWidth: 1}]}>
              <Text style={styles.lblTxt}>Active</Text>
              <Text style={styles.lblTxt}>Tasks</Text>
              <Text
                style={[
                  styles.lblTxt,
                  {color: '#000', fontSize: 30, fontFamily: 'FiraSans-Medium'},
                ]}>
                9
              </Text>
            </View>
            <View style={[styles.tskBox]}>
              <Text style={styles.lblTxt}>Completed</Text>
              <Text style={styles.lblTxt}>Tasks</Text>
              <Text
                style={[
                  styles.lblTxt,
                  {
                    color: '#000',
                    fontSize: 30,
                    textAlign: 'center',
                    fontFamily: 'FiraSans-Medium',
                  },
                ]}>
                234
              </Text>
            </View>
          </View>
          <View style={{height: 50, flexDirection: 'row'}}>
            <View style={{height: 50, flex: 1, flexDirection: 'row'}}>
              <Image
                style={[styles.memImg, {alignSelf: 'center'}]}
                source={{uri: item.image}}
              />
              <Image
                style={[styles.memImg, {alignSelf: 'center'}]}
                source={{uri: item.image}}
              />

              <Text
                style={[
                  styles.lblTxt,
                  {
                    alignSelf: 'center',
                    fontFamily: 'FiraSans-Regular',
                    fontSize: 12,
                  },
                ]}>
                15 members
              </Text>
            </View>
            <View
              style={{
                height: 50,
                flex: 1,
                alignItems: 'stretch',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    backgroundColor: '#ff5a60',
                    height: 30,
                    width: 90,
                    alignSelf: 'flex-end',
                    right: 10,
                  },
                ]}>
                <Text
                  style={[
                    styles.buttonTxt,
                    {
                      color: '#fff',
                      textAlign: 'center',
                      fontFamily: 'FiraSans-Medium',
                      fontSize: 12,
                    },
                  ]}>
                  Join Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    // connect styles to props.style defined by the theme
    //const styles = this.props.style;
    return (
      <>
        <View style={[styles.sliderGlobal, {flex: 1}]}>
          <View style={styles.sliderGlobalBox}>
            <Carousel
              loop={true}
              autoplay={false}
              autoplayDelay={2000}
              autoplayInterval={2000}
              layout={'default'}
              //ref={ref => this.carousel = ref}
              ref={(c) => {
                this._carousel = c;
              }}
              data={this.state.carouselItems}
              sliderWidth={330}
              itemWidth={330}
              renderItem={this._renderItem}
              onSnapToItem={(index) => this.setState({activeIndex: index})}
            />
            <Pagination
              dotsLength={this.state.carouselItems.length}
              activeDotIndex={this.state.activeIndex}
              containerStyle={{backgroundColor: 'transparent'}}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 2,
                backgroundColor: '#FF5A60',
              }}
              inactiveDotStyle={{
                // Define styles for inactive dots here
                backgroundColor: '#BDBDBD',
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.8}
              //animatedTension={50}
            />
            {/* { this.pagination } */}
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  sliderGlobal: {
    //flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  sliderGlobalBox: {
    margin: 10,
    padding: 5,
  },
  sliderBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
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
    borderRadius: 10,
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
  itemImg: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    borderRadius: 100,
    // backgroundColor:"gray",
    overflow: 'hidden',
    flex: 0.2,
    margin: 10,
    // marginLeft:0,
    // backgroundColor:"red",
  },
  lblTxt: {
    color: '#BBB',
    textTransform: 'uppercase',
    fontFamily: 'FiraSans-Bold',
    marginLeft: 10,
  },
  tbtn: {
    // alignItems:'center',
    // justifyContent:'center',
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  tImg: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    // borderRadius:50,
    // backgroundColor:"gray",
    // overflow:"hidden",
    flex: 1,
    // margin:10,
    // marginLeft:0,
    // backgroundColor:"red",
    alignSelf: 'center',
  },
  tskBox: {
    height: 150,
    flex: 1,
    padding: 30,
    // alignItems:"center",
    // justifyContent:"flex-start",
  },
  memImg: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    borderRadius: 50,
    // backgroundColor:"gray",
    overflow: 'hidden',
    // flex:.2,
    margin: 2,
    // marginLeft:0,
    // backgroundColor:"red",
  },
});
export default CarouselScreen;
