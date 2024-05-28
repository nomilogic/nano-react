import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

//mport Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AuthContext} from '../context';

import LinearGradient from 'react-native-linear-gradient';

import {Icon} from '../Icons/icons';

export function DrawerContent(props) {
  const paperTheme = useTheme();
  const [data, setData] = React.useState({
    username: 'John Doe',
    userImage: 'https://media.nanodot.us/img/Vs_.png',
  });
  //console.log(props);
  // const {signOut, toggleTheme} = React.useContext(AuthContext);
  // setData({
  //   ...data,
  //   username: 'John Doe',
  //   userImage:'https://api.adorable.io/avatars/50/abott@adorable.png',
  // });
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        useAngle={true}
        angle={45}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={['#DB55BC', '#FF5A60']}
        style={styles.linearGradient}>
        <SafeAreaView style={[styles.container]} backgroundColor="transparent">
          <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
              <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'column', marginTop: 10}}>
                  <Avatar.Image
                    source={{
                      uri: data.userImage,
                    }}
                    size={80}
                    style={{marginLeft: 5}}
                  />
                  <View style={{flexDirection: 'column'}}>
                    <Title style={styles.title}>{data.username}</Title>
                    {/* <Caption style={styles.caption}>@j_doe</Caption> */}
                  </View>
                </View>

                {/*<View style={styles.row}>*/}
                {/*  <View style={styles.section}>*/}
                {/*    <Paragraph style={[styles.paragraph, styles.caption]}>*/}
                {/*      80*/}
                {/*    </Paragraph>*/}
                {/*    <Caption style={styles.caption}>Following</Caption>*/}
                {/*  </View>*/}
                {/*  <View style={styles.section}>*/}
                {/*    <Paragraph style={[styles.paragraph, styles.caption]}>*/}
                {/*      100*/}
                {/*    </Paragraph>*/}
                {/*    <Caption style={styles.caption}>Followers</Caption>*/}
                {/*  </View>*/}
                {/*</View>*/}
              </View>

              <Drawer.Section style={[styles.drawerSection]}>
                <DrawerItem
                  {...props}
                  style={{
                    textAlign: 'center',
                    marginLeft: '20%',
                    marginRight: '5%',
                  }}
                  labelStyle={{
                    fontFamily: 'FiraSans-Book',
                    color: '#E1E1E1',
                    fontSize: 12,
                  }}
                  icon={({color, size}) => (
                    // <Icon name="home-outline" color={color} size={size} />
                    <Icon
                      url="https://media.nanodot.us/img/Rewards.png"
                      height={20}
                      width={20}
                      color="#fff"
                    />
                  )}
                  label="Rewards"
                  onPress={() => {
                    props.navigation.navigate('Reward');
                  }}
                />
                <DrawerItem
                  {...props}
                  style={{
                    textAlign: 'center',
                    marginLeft: '20%',
                    marginRight: '5%',
                  }}
                  labelStyle={{
                    fontFamily: 'FiraSans-Book',
                    color: '#E1E1E1',
                    fontSize: 12,
                  }}
                  icon={({color, size}) => (
                    <Icon
                      url="https://media.nanodot.us/img/menuIcon3.png"
                      height={20}
                      width={20}
                      color="#fff"
                    />
                  )}
                  label="Group Nano Tast"
                  onPress={() => {
                    props.navigation.navigate('Home');
                  }}
                />
                <DrawerItem
                  {...props}
                  style={{
                    textAlign: 'center',
                    marginLeft: '20%',
                    marginRight: '5%',
                  }}
                  labelStyle={{
                    fontFamily: 'FiraSans-Book',
                    color: '#E1E1E1',
                    fontSize: 12,
                  }}
                  icon={({color, size}) => (
                    <Icon
                      url="https://media.nanodot.us/imgs/Community_micon.png"
                      height={20}
                      width={20}
                      color="#fff"
                    />
                  )}
                  label="Community"
                  onPress={() => {
                    props.navigation.navigate('Community');
                  }}
                />
                <DrawerItem
                  {...props}
                  style={{
                    textAlign: 'center',
                    marginLeft: '20%',
                    marginRight: '5%',
                  }}
                  labelStyle={{
                    fontFamily: 'FiraSans-Book',
                    color: '#E1E1E1',
                    fontSize: 12,
                  }}
                  icon={({color, size}) => (
                    <Icon
                      url="https://media.nanodot.us/img/menuIcon8.png"
                      height={20}
                      width={20}
                      color="#fff"
                    />
                  )}
                  label="Settings"
                  onPress={() => {
                    props.navigation.navigate('Setting');
                  }}
                />
                <DrawerItem
                  {...props}
                  style={{
                    textAlign: 'center',
                    marginLeft: '20%',
                    marginRight: '5%',
                  }}
                  labelStyle={{
                    fontFamily: 'FiraSans-Book',
                    color: '#E1E1E1',
                    fontSize: 12,
                  }}
                  icon={({color, size}) => (
                    <Icon
                      url="https://media.nanodot.us/img/menuIcon15.png"
                      height={20}
                      width={20}
                      color="#fff"
                    />
                  )}
                  label="Feedback"
                  onPress={() => {
                    props.navigation.navigate('Feed');
                  }}
                />
                <DrawerItem
                  {...props}
                  style={{
                    textAlign: 'center',
                    marginLeft: '20%',
                    marginRight: '5%',
                  }}
                  labelStyle={{
                    fontFamily: 'FiraSans-Book',
                    color: '#E1E1E1',
                    fontSize: 12,
                  }}
                  icon={({color, size}) => (
                    <Icon
                      url="https://media.nanodot.us/img/menuIcon3.png"
                      height={20}
                      width={20}
                      color="#fff"
                    />
                  )}
                  label="Profile"
                  onPress={() => {
                    props.navigation.navigate('Profile  ');
                  }}
                />
                <DrawerItem
                  {...props}
                  style={{
                    textAlign: 'center',
                    marginLeft: '20%',
                    marginRight: '5%',
                  }}
                  labelStyle={{
                    fontFamily: 'FiraSans-Book',
                    color: '#E1E1E1',
                    fontSize: 12,
                  }}
                  icon={({color, size}) => (
                    <Icon
                      url="https://media.nanodot.us/img/menuIcon.png"
                      height={20}
                      width={20}
                      color="#fff"
                    />
                  )}
                  label="Logout"
                  onPress={() => {
                    props.navigation.navigate('Home');
                  }}
                />

                {/*<DrawerItem*/}
                {/*  icon={({color, size}) => (*/}
                {/*    <Icon name="settings-outline" color={color} size={size} />*/}
                {/*  )}*/}
                {/*  label="Settings"*/}
                {/*  onPress={() => {*/}
                {/*    props.navigation.navigate('SettingsScreen');*/}
                {/*  }}*/}
                {/*/>*/}
              </Drawer.Section>
            </View>
          </DrawerContentScrollView>
          <View style={{alignItems: 'center', bottom: 40}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{}}
                // onPress={() =>
                //     this.onPress(this.props.showProps,item.itemPage)
                // }
              >
                <Text style={[styles.btnTxt]}>Privacy Policy,</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginLeft: 10}}
                // onPress={() =>
                //     this.onPress(this.props.showProps,item.itemPage)
                // }
              >
                <Text style={[styles.btnTxt]}>Terms</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  linearGradient: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
    // alignItems:"center",
    // justifyContent: 'center',
    // justifyContent: 'space-between',
    marginTop: 10,
  },
  userInfoSection: {
    //paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'FiraSans-Medium',
    fontSize: 22,
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  caption: {
    fontFamily: 'FiraSans-Medium',
    fontSize: 14,
    lineHeight: 14,
    textAlign: 'center',
    color: '#fff',
  },
  // row: {
  //   marginTop: 20,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  // paragraph: {
  //   fontWeight: 'bold',
  //   marginRight: 3,
  // },
  drawerSection: {
    // marginTop: 15,
    marginTop: 40,
  },
  // bottomDrawerSection: {
  //   marginBottom: 15,
  //   borderTopColor: '#f4f4f4',
  //   borderTopWidth: 1,
  // },
  // preference: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   paddingVertical: 12,
  //   paddingHorizontal: 16,
  // },
  btnTxt: {
    fontFamily: 'FiraSans-Regular',
    fontSize: 12,
    color: '#FFC1C3',
  },
});
