import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import {Icon} from '../Icons/icons';
import {Colors} from '../Colors/colors';
import {CarbonData} from './carbonData';
import {RadioButton} from 'react-native-paper';

var CarbonCalc = ({item, index}) => {
  <View>
    <View style={[styles.boxRow, {}]}>
      <Text class="questionBox">{index + 1}</Text>
    </View>
    <View style={[styles.boxRow, {}]}>
      <Text>{item.question} </Text>
    </View>
    {/* {ngIf="item.units.length == 1"} */}
    <View>
      <View>
        <View>
          <TextInput
            type="text"
            placeholder={item.units[0].factor}
            value={item.ans}
          />
          <Text clear item-right>
            {item.units[0].unit}
          </Text>
        </View>
      </View>
    </View>
    {/* {//item.units.length > 1} */}
    <View>
      <View style={[styles.energyField, {}]}>
        <View style={[styles.boxRow, {}]}>
          <TextInput placeholder={'0.00'} value={item.ans} />
          <Text clear item-right>
            <View interface="popover">
              {/* {*ngFor="let unit of item.units"} */}
              {item.units.map(({unit, index}) => {
                <View>
                  <RadioButton
                    value={unit.unit}
                    status={
                      item.ansUnit.unit === unit.unit ? 'checked' : 'unchecked'
                    }
                    onPress={() => {
                      item.ansUnit.unit = unit.unit;
                    }}>
                    {unit.unit}
                  </RadioButton>
                </View>;
              })}
            </View>
          </Text>
        </View>
      </View>
    </View>
  </View>;
};

export default carbonCalc;
