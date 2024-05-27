// Mohsin Owais

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

class MapViewCarousel extends Component {
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
  _renderItem({item, index}) {
    return (
      <View style={styles.sliderBox}>
        <TouchableOpacity>
          <View style={styles.box}>
            <View style={{flex: 0.6}}>
              <Image
                style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                source={{
                  uri:
                    'https://s3.amazonaws.com/nanodotapp/nano/local/keyword/ClimateChange-eaa7daf5.jpg',
                }}
              />
            </View>
            <View style={{flex: 0.4, paddingHorizontal: 10}}>
              <Text
                style={{
                  marginVertical: 4,
                  fontSize: 20,
                  fontFamily: 'FiraSans-Medium',
                }}>
                Save Planets
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  name="time-outline"
                  size={14}
                  style={styles.infoIcon}
                />
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: 'FiraSans-Regular',
                    color: '#BBB',
                  }}>
                  2021 03-09 08:05:00
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'FiraSans-Regular',
                  color: '#BBB',
                  marginBottom: 4,
                }}>
                3 mile(s) away
              </Text>
              <View
                style={{
                  borderTopWidth: 1,
                  borderTopColor: 'rgba(0,0,0,0.1)',
                  flex: 1,
                }}>
                <Ionicons
                  name="arrow-redo"
                  size={14}
                  style={[styles.infoIcon, {alignSelf: 'flex-end', margin: 4}]}
                />
              </View>
            </View>
            <LinearGradient
              useAngle={true}
              angle={45}
              angleCenter={{x: 0.5, y: 0.5}}
              colors={['#cfd955', '#f53d3d']}
              style={{
                width: '100%',
                height: 10,
                position: 'absolute',
                bottom: 0,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    // connect styles to props.style defined by the theme
    //const styles = this.props.style;
    return (
      <>
        <View style={[styles.sliderGlobal, {flex: 1}]}>
          <View style={styles.sliderGlobalBox}>
            <Carousel
              // loop={true}
              autoplay={false}
              autoplayDelay={2000}
              autoplayInterval={2000}
              layout={'default'}
              //ref={ref => this.carousel = ref}
              ref={(c) => {
                this._carousel = c;
              }}
              data={this.state.carouselItems}
              sliderWidth={400}
              itemWidth={200}
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
    // marginBottom: 10,
  },
  sliderGlobalBox: {
    marginTop: 10,
    // paddingTop: 5,
    // backgroundColor:"red",
  },
  sliderBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    // padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    // height:'80%',
    // backgroundColor:'tan',
    flex: 1,
  },
  infoIcon: {
    color: '#BBB',
    // top:10,
    // position:'absolute',
    // left:10,
    // textAlignVertical:"center",
    alignSelf: 'center',
    // flex:.1,
    // backgroundColor: '#BBB',
    borderRadius: 20,
  },
  box: {
    // backgroundColor:'tan',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
export default MapViewCarousel;
