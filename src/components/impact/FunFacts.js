import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const FunFacts = (props) =>{
    const funfacts = props.impact;
    const [activeIndex, setActiveIndex] = React.useState(0);
    const _renderItem = ({item,index}) =>{
        return (
            <View style={[styles.sliderBox,{flexDirection:"row"}]}>
                <View style={{flex:0.3,right:0}}>
                    <Image
                        source={{uri: item.imageUrl}}
                        style={{width:80,height:80,borderRadius:10,left:0}}
                    />
                </View>
                <View style={{flex:0.8,right:0}}>
                    <Text style={{fontSize:16,fontFamily:"FiraSans-Regular",color:"#A2A2A2"}}>{item.text}</Text>
                </View>
            </View>
        );
    }
    const sliderWidth = Dimensions.get('window').width -30;
    const itemWidth = sliderWidth - 0 * 2;
    return (
        <>
            <View style={[styles.sliderGlobal,{flex:1}]}>
                <View style={styles.sliderGlobalBox}>
                    <Carousel
                        loop={false}
                        autoplay={false}
                        layout={"default"}
                        data={funfacts}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        renderItem={_renderItem}
                        onSnapToItem = { index => setActiveIndex(index) }
                    />
                    <Pagination
                        dotsLength={funfacts.length}
                        activeDotIndex={activeIndex}
                        containerStyle={{ backgroundColor: 'transparent' }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 2 ,
                            backgroundColor: '#FF5A60',
                            marginTop:-9,
                        }}
                        inactiveDotStyle={{
                            // Define styles for inactive dots here
                            backgroundColor: '#BDBDBD'
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.8}
                    />
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    sliderGlobal:{
        //flexDirection: 'row',
        marginTop:10,
        marginBottom:20,
    },
    sliderGlobalBox:{
        margin:10,
        padding:5,
    },
    sliderBox:{
        backgroundColor:"#fff",
        borderRadius:20,
        margin:5,
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,
        elevation: 5,
    },
});
export default FunFacts;
