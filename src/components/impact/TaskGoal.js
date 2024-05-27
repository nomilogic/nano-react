import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const TaskGoal = (props) => {
    const impact = props.impact;
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [dailyapprove, setDailyapprove] = React.useState(0);
    const [dailyTask, setDailyTask] = React.useState(0);
    
    const carouselItems = [
        {
            name:"Tasks Goal",
            localized:"Daily",
            Total_Completed: impact.completedNanotask+" Total Completed",
            dailyapprove:8,
            dailyTask:8,
        },
        {
            name:"Tasks Goal",
            localized:"Weekly",
            Total_Completed: "0 Total Completed",
            dailyapprove:50,
            dailyTask:"Coming Soon",
        },
        {
            name:"Tasks Goal",
            localized:"Monthly",
            Total_Completed: "0 Total Completed",
            dailyapprove:50,
            dailyTask:"Coming Soon",
        }
    ];
    const _renderItem = ({item,index}) => {
        return (
            <View style={[styles.sliderBox,{flexDirection:"row"}]}>
                <View style={{flex:0.8,left:0,alignItems:"center"}}>
                    <Text style={{fontFamily:"FiraSans-Bold",fontSize:18}}>{item.name}</Text>
                    <Text style={{fontFamily:"FiraSans-Regular",fontSize:18}}>{item.localized}</Text>
                    <Text style={{fontFamily:"FiraSans-Medium",fontSize:12,color:"#BBBBBB"}}>{item.Total_Completed}</Text>
                </View>
                <View style={{flex:0.3,right:0}}>
                    <AnimatedCircularProgress
                        size={80}
                        width={7}
                        fill={item.dailyapprove == 0 ? 1: item.dailyapprove}
                        tintColor="#FF5A60"
                        rotation={0}
                        backgroundColor="#FF949820">
                        {
                            (fill) => (
                                <Text style={{fontFamily:"FiraSans-Regular",fontSize:16,textAlign:"center",color:"#BBBBBB"}}>
                                    { item.dailyTask == "Coming Soon" ? item.dailyTask : item.dailyapprove+"/"+item.dailyTask}
                                </Text>
                            )
                        }
                    </AnimatedCircularProgress>
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
                        autoplayDelay={2000}
                        autoplayInterval={2000}
                        layout={"default"}
                        data={carouselItems}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        renderItem={_renderItem}
                        onSnapToItem = { index => setActiveIndex(index) }
                    />
                    <Pagination
                        dotsLength={carouselItems.length}
                        activeDotIndex={activeIndex}
                        containerStyle={{ backgroundColor: 'transparent' }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 2,
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
export default TaskGoal;