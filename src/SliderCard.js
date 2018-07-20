import React from 'react';
import SpectrumSlider from './Slider';
import { StyleSheet, Text, View } from 'react-native';
import { LEVELS, LEVEL_COLORS } from "./Constants";

export default class SliderCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      level: 3,
    }
  }

  onValueChange = (value) => {
    this.setState({level: value});
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>INTEREST LEVEL {this.state.level}</Text>
          <View style={{
            width: 50,
            height: 2,
            marginVertical: 20,
            backgroundColor: LEVEL_COLORS[this.state.level - 1],
          }}/>
          <Text style={styles.description}>{"Level " + this.state.level + ": " + LEVELS[this.state.level - 1]}</Text>
        </View>
        <SpectrumSlider
          onValueChange={this.onValueChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: "proxima-nova-semibold",
    fontSize: 15,
    color: '#666666',
    textAlign: 'center',
  },
  description: {
    fontFamily: "georgia",
    fontSize: 13,
    color: '#666666',
    marginHorizontal: 32,
    height: 70,
    width: 270,
  },
});
