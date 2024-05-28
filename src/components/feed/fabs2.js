import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {interpolate} from 'react-native-reanimated';

// create a component
export default class CFAB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animValue: new Animated.Value(100),
      opacity: new Animated.Value(1),
      animValues: {innerBoxHeight: new Animated.Value(0)},
      children: [],
    };
  }
  componentDidMount() {
    var children =
      this.props.children.length != undefined
        ? this.props.children
        : [this.props.children];
    console.log(children.length);

    var childrenModified = this.props.children.map((item, index) => {
      var animValues = {
        animValue: new Animated.Value(100),
        opacity: new Animated.Value(1),
        innerBoxHeight: new Animated.Value(0),
      };
      var newItem = {animValues: animValues, item: item};

      return newItem;
    });
    console.log(childrenModified);
    //this.setState('children', childrenModified);
    this.setState({children: childrenModified});
  }
  componentDidUpdate() {
    console.log(this.state.children, 'children');
  }

  handleSelect = () => {
    this.state.animValue._value > 100
      ? Animated.timing(this.state.animValue, {
          toValue: 100,
          duration: 500,
        }).start()
      : Animated.timing(this.state.animValue, {
          toValue: 400,
          duration: 500,
        }).start();

    this.state.animValue._value > 100
      ? Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 500,
        }).start()
      : Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 500,
        }).start();

    this.state.animValue._value > 100
      ? Animated.timing(this.state.animValues.innerBoxHeight, {
          toValue: 0,
          duration: 500,
        }).start()
      : Animated.timing(this.state.animValues.innerBoxHeight, {
          toValue: 100,
          duration: 500,
        }).start();
  };

  renderRectangle = () => {
    const customStyle = {
      height: this.state.animValue,
    };

    return (
      <Animated.View style={[styles.rectangle, customStyle]}>
        <Animated.View
          style={[
            customStyle,
            {
              flex: 1,
              flexDirection: 'column-reverse',
              backgroundColor: 'purple',
            },
          ]}>
          <TouchableOpacity
            onPress={() => this.handleSelect()}
            style={{
              flex: 1,
              backgroundColor: 'green',
              height: 100,
              maxHeight: 100,
            }}>
            <View
              style={{
                backgroundColor: 'green',
              }}
            />
          </TouchableOpacity>
          <Animated.View
            style={{
              backgroundColor: 'red',
              opacity: this.state.opacity,
              height: this.state.animValues.innerBoxHeight,
            }}
          />
          <Animated.View
            style={{
              backgroundColor: 'orange',
              opacity: this.state.opacity,
              height: this.state.animValues.innerBoxHeight,
            }}
          />
          <Animated.View
            style={{
              backgroundColor: 'blue',
              opacity: this.state.opacity,
              height: this.state.animValues.innerBoxHeight,
            }}>
            {this.props.children}
          </Animated.View>
        </Animated.View>
      </Animated.View>
    );
  };

  render() {
    return <View style={styles.container}>{this.renderRectangle()}</View>;
  }
}

// define your styles
const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: 'yellow',
    width: 100,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
