import React from 'react';
import { Font } from 'expo';
import Navigation from './src/Navigation';

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'georgia': require('./assets/fonts/Georgia.ttf'),
      'proxima-nova-semibold': require('./assets/fonts/Proxima-Nova-Semibold.ttf'),
    })
  }

  render() {
    return (
      <Navigation />
    );
  }
}
