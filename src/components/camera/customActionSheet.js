import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { createRef } from "react/cjs/react.production.min";
import { Colors } from "../Colors/colors";
import ActionSheet from "react-native-actions-sheet";

export default class CustomActionSheet {
  actionSheetRef = createRef();
  actionSheetData = [];
  constructor(data) {
    this.actionSheetData = data;
  }

  ActionSheetNode = () => {
    let buttonsData = this.actionSheetData.buttonsData;
    let mainTitle = this.actionSheetData.mainTitle;
    let showCancel = this.actionSheetData.showCancel
      ? this.actionSheetData.showCancel
      : false;
      console.log(showCancel,"cancel")
    var TitleNode = () => {
      return (
        <View>
          <Text
            style={[
              this.styles.actionSheetBtn,
              { color: Colors.midGrey, fontWeight: "bold" },
            ]}
          >
            {mainTitle}
          </Text>
        </View>
      );
    };
    var InnerButtons = () => {
      return buttonsData.map((element, index) => {
        return (
          <TouchableOpacity
            key={index}
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
    };
    var Cancel = () => {
      if (showCancel) {
        return (
          <TouchableOpacity
            onPress={() => {
              this.actionSheetRef.current?.setModalVisible(false);
            }}
          >
            <Text style={[this.styles.actionSheetBtn]}>Cancel</Text>
          </TouchableOpacity>
        );
      }
     return null;
    };

    return (
      <ActionSheet ref={this.actionSheetRef}>
        {/* {[titleNode, innerButtons, Cancel]} */}
        {/* <titleNode></titleNode> */}
        <TitleNode />
        <InnerButtons />
        <Cancel />
      </ActionSheet>
    );
  };
  show = () => {
    this.actionSheetRef.current?.setModalVisible(true);
  };
  styles = {
    actionSheetBtn: {
      backgroundColor: Colors.white,
      alignContent: "center",
      justifyContent: "center",
      width: "100%",
      color: Colors.grey,
      borderColor: "transparent",
      borderBottomColor: Colors.lightGrey,
      fontSize: 16,
      borderRadius: 5,
      borderWidth: 2,
      alignItems: "center",

      padding: 10,
    },
  };
}
