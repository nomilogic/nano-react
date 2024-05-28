import { Text, TouchableOpacity, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { createRef } from 'react/cjs/react.production.min';
import { Colors } from '../Colors/colors';
import ActionSheet from 'react-native-actions-sheet';
import React from 'react';

class Camera {
  loadCamera = (type, from, callback, options = null) => {
    switch (type) {
      case 'video':
        switch (from) {
          case 'camera':
            launchCamera(
              !options ? { mediaType: 'video', durationLimit: 15 } : options,
              (response) => {
                console.log(response);
                callback(response);
              },
            );
            break;
          case 'library':
            launchImageLibrary(
              !options
                ? {
                    mediaType: 'video',
                    includeBase64: true,
                  }
                : options,
              (response) => {
                console.log(response);
                callback(response);
              },
            );
            break;
        }
        break;
      case 'photo':
        switch (from) {
          case 'camera':
            launchCamera(
              !options
                ? {
                    saveToPhotos: false,
                    mediaType: 'photo',
                    includeBase64: true,
                    maxHeight: 720,
                    maxWidth: 1280,
                  }
                : options,
              (response) => {
                //console.log(response);
                callback(response);
              },
            );
            break;
          case 'library':
            launchImageLibrary(
              !options
                ? {
                    mediaType: 'photo',
                    includeBase64: true,
                  }
                : options,
              (response) => {
                //console.log(response);
                callback(response);
              },
            );
            break;
        }
        break;
    }
  };
}

export class CustomActionSheet {
  actionSheetRef = createRef();

  constructor(data) {}
  ActionSheetNode = (_data) => {
    var titleNode = (
      <View>
        <Text
          style={[
            this.styles.actionSheetBtn,
            { color: Colors.midGrey, fontWeight: 'bold' },
          ]}
        >
          Select Image Source
        </Text>
      </View>
    );
    var innerButtons = _data.map((element) => {
      return (
        <TouchableOpacity
          onPress={() => {
            this.actionSheetRef.current?.setModalVisible(false);
            {
              element.action();
            }
          }}
        >
          <Text style={[this.styles.actionSheetBtn]}>{element.title}</Text>
        </TouchableOpacity>
      );
    });
    var Cancel = (
      <TouchableOpacity
        onPress={() => {
          this.actionSheetRef.current?.setModalVisible(false);
        }}
      >
        <Text style={[this.styles.actionSheetBtn]}>Cancel</Text>
      </TouchableOpacity>
    );

    return <ActionSheet ref={this.actionSheetRef}>{innerButtons}</ActionSheet>;
  }
  show=()=>{
    this.actionSheetRef.current?.setModalVisible(true);

  }
  styles = {
    actionSheetBtn: {
      backgroundColor: Colors.white,
      alignContent: 'center',
      justifyContent: 'center',
      width: '100%',
      color: Colors.grey,
      borderColor: 'transparent',
      borderBottomColor: Colors.lightGrey,
      fontSize: 16,
      borderRadius: 5,
      borderWidth: 2,
      alignItems: 'center',

      padding: 10,
    },
  };
}

export default new Camera();
