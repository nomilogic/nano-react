import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Easing, interpolate} from 'react-native-reanimated';

// create a component
export default class CFAB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animValue: new Animated.Value(0),
      opacity: new Animated.Value(1),
      animValues: {innerBoxHeight: new Animated.Value(0)},
      children: [],
      fabsGroup: [],
      totalHeight: 100,
      open: false,
    };
  }
  styles = {
    rectangle: {
      position: 'absolute',
      right: !this.props.style.right ? 10 : this.props.style.right,

      bottom: !this.props.style.bottom ? 10 : this.props.style.bottom,
      zIndex: 1,
      flex: 1,
      justifyContent: 'space-between',
    },
  };

  componentDidMount() {
    var children =
      this.props.children.length != undefined
        ? this.props.children
        : [this.props.children];
    //console.log(children.length);
    var fabsGroup = [];
    var totalHeight = 100;
    var childrenModified = this.props.children.map((item, index) => {
      var animValues = {
        animValue: new Animated.Value(100),
        opacity: new Animated.Value(0),
        innerBoxHeight: new Animated.Value(0),
        targetValue: !item.props.height ? 100 : item.props.height,
      };
      totalHeight += animValues.targetValue;

      var newItem = {animValues: animValues, item: item};
      const csStyle = {
        borderWidth: 0,
        opacity: animValues.opacity,
        height: animValues.innerBoxHeight,
        width: animValues.innerBoxHeight,
        alignSelf: 'center',

        justifyContent: 'center',
        overflow: 'scroll',

        padding: 0,
      };

      fabsGroup.push(
        <Animated.View style={[csStyle]} key={index}>
          {item}
        </Animated.View>,
      );
      return newItem;
    });
    //console.log(childrenModified);
    //this.setState('children', childrenModified);
    this.setState({fabsGroup: fabsGroup});
    this.setState({children: childrenModified});
    this.setState({totalHeight: totalHeight});
  }
  componentDidUpdate() {
    //console.log(this.state.children, 'children');
  }

  handleSelect = () => {
    this.state.animValue._value < 135
      ? Animated.timing(this.state.animValue, {
          toValue: 135,
          duration: 500,
          useNativeDriver: false,
        }).start()
      : Animated.timing(this.state.animValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start();

    this.state.children.map((item, index) => {
      this.handleChild(item);
    });
  };
  handleChild = (child) => {
    // console.log(
    //   'child',
    //   child,
    //   child.animValues.innerBoxHeight,
    //   child.animValues.innerBoxHeight > 0,
    // );
    if (child.animValues.innerBoxHeight._value > 0) {
      Animated.timing(child.animValues.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Animated.timing(child.animValues.innerBoxHeight, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {});
      this.setState({open: false});
    } else {
      Animated.timing(child.animValues.opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(child.animValues.innerBoxHeight, {
        toValue: child.animValues.targetValue,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {});
      this.setState({open: true});
    }
  };

  renderRectangle = () => {
    const customStyle = {
      // height: this.state.animValue,
    };

    return (
      <Animated.View style={[this.styles.rectangle, customStyle]}>
        <View
          style={[
            {
              flex: 1,
              flexDirection: !this.props.style.flexDirection
                ? 'column-reverse'
                : this.props.style.flexDirection,
            },
          ]}>
          <Animated.View style={{rotation: this.state.animValue}}>
            <TouchableOpacity
              onPress={() => this.handleSelect()}
              style={{zIndex: 10}}>
              {!this.state.open
                ? this.props.fabOpenButton
                : !this.props.fabCloseButton
                ? this.props.fabOpenButton
                : this.props.fabCloseButton}
            </TouchableOpacity>
          </Animated.View>
          {/* <Animated.View
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
          </Animated.View> */}
          <View>{this.state.fabsGroup}</View>
        </View>
      </Animated.View>
    );
  };

  render() {
    return <View style={this.styles.container}>{this.renderRectangle()}</View>;
  }
}

// define your styles
