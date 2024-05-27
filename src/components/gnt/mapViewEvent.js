import React, {useState} from 'react';
import {
  Alert,
  StatusBar,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleCarousel from '../../../src/components/gnt/mapViewCarousel';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FF5A60" />
      <View
        style={{
          backgroundColor: 'gray',
          flex: 1,
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}>
        <Text style={{textAlign: 'center', fontSize: 30, top: '40%'}}>
          Google Map
        </Text>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <SimpleCarousel />

              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderColor: 'lightgray',
                  borderRadius: 50,
                  padding: 10,
                  position: 'absolute',
                  top: -25,
                }}>
                <Ionicons
                  name="chevron-down"
                  size={20}
                  style={styles.popIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: 'lightgray',
            borderRadius: 50,
            padding: 10,
            position: 'absolute',
            bottom: 20,
          }}>
          <Ionicons name="chevron-up" size={20} style={styles.popIcon} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    // backgroundColor:'tan'
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    // borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#FF5A60',
  },
  crtBtn: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: '#FF5A60',
    marginBottom: 20,
  },
  buttonOpen: {
    backgroundColor: 'darkgray',
  },
  buttonClose: {
    // backgroundColor: "#2196F3",
    position: 'absolute',
    top: -50,
    right: 5,
  },
  textStyle: {
    color: 'white',
    // fontWeight: "bold",
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'FiraSans-Regular',
    paddingHorizontal: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'FiraSans-Medium',
  },
  clsIcon: {
    color: 'rgba(0, 0, 0, .8)',
    // top: 10,
    // position: 'absolute',
    // left: 10,
  },
  popIcon: {
    color: '#FF5A60',
  },
});

export default App;
