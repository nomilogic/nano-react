import React, {Component} from 'react';
import {View, Image, Linking, Button} from 'react-native';
// import {
//   Container,
//   Header,
//   Content,
//   Card,
//   CardItem,
//   Text,
//   Body,
//   Button,
// } from 'native-base';

export default class DetailsScreen extends Component {
  render() {
    // const { navigation } = this.props;
    return (
      <View>
        {/*<Header />*/}

        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  headerTextStyle: {
    fontSize: 18,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};
// export default DetailsScreen;
