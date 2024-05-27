import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Policies from '../modals/Policies';
import {DrawerItem} from '@react-navigation/drawer';

class Settings extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: 'jolly@yahoo.com',
    appVersion: 'App Version:2.0.5',
  };
  componentDidMount() {
    //console.log(this.props);
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#FF5A60" />
        <ScrollView style={[styles.container]}>
          <View style={[styles.BG]}>
            <View style={{flex: 1, flexDirection: 'row', marginTop: 40}}>
              <View
                style={{
                  width: '45%',
                  backgroundColor: '#FF5A60',
                  marginLeft: 10,
                  paddingBottom: 20,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Account');
                  }}
                  style={{backgroungColor: 'transparent'}}>
                  <Ionicons
                    name="person"
                    size={20}
                    color="#ffffff"
                    style={{marginLeft: 20, marginTop: 20}}
                  />
                  <Text
                    style={{
                      marginLeft: 20,
                      marginTop: 5,
                      color: '#fff',
                      fontFamily: 'FiraSans-Regular',
                    }}>
                    Account
                  </Text>
                  <Text
                    style={{
                      marginLeft: 20,
                      marginTop: 5,
                      color: '#fff',
                      fontFamily: 'FiraSans-Regular',
                    }}>
                    {this.state.email}
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '45%',
                  backgroundColor: '#FF5A60',
                  marginLeft: 10,
                  paddingBottom: 20,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Blocked');
                  }}
                  style={{backgroungColor: 'transparent'}}>
                  <Ionicons
                    name="lock-closed"
                    size={20}
                    color="#ffffff"
                    style={{marginLeft: 20, marginTop: 20}}
                  />
                  <Text
                    style={{
                      marginLeft: 20,
                      marginTop: 5,
                      color: '#fff',
                      fontFamily: 'FiraSans-Regular',
                    }}>
                    Blocked
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 100,
              }}>
              <Policies
                showProps={this.props}
                buttonStyle={{
                  backgroundColor: '#F85B61',
                  color: '#fff',
                  padding: 10,
                  fontFamily: 'FiraSans-Regular',
                }}
              />
              <Text style={{fontFamily: 'FiraSans-Regular'}}>
                {this.state.appVersion}
              </Text>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  BG: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F85B61',
    padding: 10,
  },
});
export default Settings;
