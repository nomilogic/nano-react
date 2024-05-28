// Mohsin Owais

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';

var nprops;
class RewardsAndOffers extends Component {

  constructor(props) {
    super(props);
   console.log(this.props)

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
  _renderItem({item, index,props}) {
  
    return (
      <View style={styles.sliderBox}>
        <TouchableOpacity onPress={() =>
              this.props.navigation.navigate('RewardDetails', {
                nanoTask: item,
              })
            }>
            
          <View style={{flex: 1, flexDirection: 'row', height: 200}}>
          <Image
                style={{height: '100%', width: '100%', resizeMode: 'contain'}}
                source={{
                  uri:
                    'https://media.nanodot.us/nano/local/nanotask/Nano-Global-Incentive/nano-fd07c3a1.png',
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
              sliderWidth={380}
              itemWidth={380}
              renderItem={this._renderItem.bind(this)}
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
                backgroundColor: '#fff',
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
    // marginTop: 10,
    // marginBottom: 20,
  },
  sliderGlobalBox: {
    marginHorizontal: 10,
    padding: 5,
    // backgroundColor:"red",
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
    borderRadius: 50,
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

  infoIcon: {
    color: '#fff',
    // top:10,
    // position:'absolute',
    // left:10,
    // textAlignVertical:"center",
    alignSelf: 'flex-end',
    // flex:.1,
    backgroundColor: '#BBB',
    borderRadius: 20,
  },
});
export default RewardsAndOffers;
