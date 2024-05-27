import {
  Alert,
  StatusBar,
  Button,
  View,
  Text,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {Button, Icon} from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';
import DrawerNavigator from '../../../src/navigation/DrawerNavigator';

const OnboardingScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    done: false,
  });

  const onFinish = () => {
    setData({
      ...data,
      done: true,
    });
  };

  return data.done === true ? (
    <DrawerNavigator />
  ) : (
    <Onboarding
      showDone={false}
      onSkip={() => Alert.alert('Skipped')}
      allowFontScaling={false}
      // containerStyles={{justifyContent:'flex-end'}}
      imageContainerStyles={{position:'absolute',height:'100%',width:'100%'}}
      bottomBarColor="#FF5A60"

      pages={[
        // {
        //   backgroundColor: '#fff',
        //   image: (
        //     <Image
        //       source={{uri: 'https://media.nanodot.us/img/Image%2010@2x.jpg'}}
        //     />
        //   ),
        //   title: 'Onboarding',
        //   subtitle: 'Done with React Native Onboarding Swiper',
        // },
        {
          title: 'nano.',
          titleStyles :{fontFamily: 'FiraSans-ExtraBold',fontSize:100,top:160,},
          subtitle:
            'Welcome to the platform that guides you on your journey of sustainability!!',
          subTitleStyles :{fontFamily: 'FiraSans-Light',fontSize:20,width:250,top:150},
          backgroundColor: 'transparent',
          image: (
            <Image
              // style={styles.mainImage}
              source={{
                uri: 'https://media.nanodot.us/img/Image%2010@2x.jpg',
                width: '100%',
                height: '100%',
              }}
            />
          ),
        },
        {
          title: 'nano.',
          titleStyles :{fontFamily: 'FiraSans-ExtraBold',fontSize:100,bottom:300,},
          subtitle:
            'Choose causes that you’re passionate about, and complete nano tasks to earn donations to those causes.',
          subTitleStyles :{fontFamily: 'FiraSans-Light',fontSize:20,width:250,top:150,},
          backgroundColor: 'transparent',
          image: (
            <Image
              // style={styles.mainImage}
              source={{
                uri: 'https://media.nanodot.us/img/Image%203.jpg',
                width: '100%',
                height: '100%',
              }}
            />
          ),
        },
        {
          title: 'nano.',
          titleStyles :{fontFamily: 'FiraSans-ExtraBold',fontSize:100,bottom:300,},
          subtitle:
            'Track your your carbon impact with our sustainability impact measurement meter (SIMM).',
          subTitleStyles :{fontFamily: 'FiraSans-Light',fontSize:20,width:250,top:150,},
          backgroundColor: 'transparent',
          image: (
            <Image
              // style={styles.mainImage}
              source={{
                uri: 'https://media.nanodot.us/img/turtle_bg.jpg',
                width: '100%',
                height: '100%',
              }}
            />
          ),
        },
        {
          title: 'nano.',
          titleStyles :{fontFamily: 'FiraSans-ExtraBold',fontSize:100,bottom:300,},
          // subtitle:
          //   'Track your your carbon impact with our sustainability impact measurement meter (SIMM).',
          subtitle: (
            <Button
              title={'Lets Go!'}
              color='#FF5A60'
              // containerViewStyle={{marginTop: 20,}}
              // backgroundColor={'white'}
              // borderRadius={50}
              // textStyle={{color: '#ff0000'}}
              onPress={() => {
                Alert.alert('done');
                onFinish();
              }}
            />
          ),
          // subTitleStyles :{fontFamily: 'FiraSans-Light',fontSize:20,width:250,bottom:180,},
          backgroundColor: 'transparent',
          image: (
            <Image
              // style={styles.mainImage}
              source={{
                uri: 'https://media.nanodot.us/img/Onboarding-4.jpg',
                width: '100%',
                height: '100%',
              }}
            />
          ),
        },
        // {
        //   title: 'Nano',
        //   subtitle:
        //     'Welcome to the platform that guides you on your journey of sustainability!!',
        //   backgroundColor: '#5e92f3',
        //   image: <View>{/*<Text>Hi This is test</Text>*/}</View>,
        // },
        // {
        //   title: 'Get Notified',
        //   subtitle:
        //     'We will send you notification as soon as something happened',
        //   backgroundColor: '#1565c0',
        //   image: (
        //     <Ionicons
        //       name="rocket"
        //       type="font-awesome"
        //       size={100}
        //       color="white"
        //     />
        //   ),
        // },
        // {
        //   title: "That's Enough",
        //   subtitle: (
        //     <Button
        //       title={'Get Started'}
        //       containerViewStyle={{marginTop: 20}}
        //       backgroundColor={'white'}
        //       borderRadius={5}
        //       textStyle={{color: '#003c8f'}}
        //       onPress={() => {
        //         Alert.alert('done');
        //         onFinish();
        //       }}
        //     />
        //   ),
        //   backgroundColor: '#003c8f',
        //   image: (
        //     <Ionicons
        //       name="rocket"
        //       type="font-awesome"
        //       size={100}
        //       color="white"
        //     />
        //   ),
        // },
      ]}
    />
  );
};

export default OnboardingScreen;
const styles = {
  mainImage: {
    position: 'absolute',
    // top: -325,
    // width: '100%',
    // height:600
  },
};
