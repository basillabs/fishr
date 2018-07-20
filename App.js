import React from 'react';
import { Font } from 'expo';
import { Text, View } from 'react-native';
import Navigation from './src/Navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }
  componentDidMount() {
    let promise = Font.loadAsync({
      'georgia': require('./assets/fonts/Georgia.ttf'),
      'proxima-nova-semibold': require('./assets/fonts/Proxima-Nova-Semibold.ttf'),
    });
    promise.then((success) => {
      this.setState({isLoaded: true});
    });
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <Navigation />
      );
    } else {
      return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
      )
    }
  }
}
