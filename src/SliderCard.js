import React from 'react';
import SpectrumSlider from './Slider';
import { StyleSheet, Text, View } from 'react-native';

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
          <Text style={styles.title}>{this.props.title}</Text>
          <View style={{
            width: 50,
            height: 2,
            marginVertical: 20,
            backgroundColor: this.props.levelColors[this.state.level - 1],
          }}/>
          <Text style={{
            fontFamily: "georgia",
            fontSize: 13,
            color: '#666666',
            marginHorizontal: 32,
            height: this.props.descriptionHeight || 70,
            width: 270,
          }}>
            {"Level " + this.state.level + ": " + this.props.levelTexts[this.state.level - 1]}
          </Text>
        </View>
        <SpectrumSlider
          levelColors={this.props.levelColors}
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
    marginBottom: 50,
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
});
