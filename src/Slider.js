import React from 'react';
import Slider from "react-native-slider";
import { StyleSheet, View } from 'react-native';

export default class SpectrumSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    }
  }

  onValueChange = (value) => {
    this.setState({value: value});
    this.props.onValueChange(Math.round(value));
  }

  onSlidingComplete = (value) => {
    this.setState({value: Math.round(value)});
    this.props.onValueChange(Math.round(value));
  };

  render() {
    let dots = this.props.levelColors.map((color, index) => {
      return (
        <View
          key={"dot" + index}
          style={{
            width: 8,
            height: 8,
            borderRadius: 16,
            backgroundColor: color,
            marginLeft: index > 0 ? 0 : 24,
            marginRight: index < this.props.levelColors.length - 1 ? 0 : 24,
          }}
        />
      )
    });
    return (
      <View style={styles.container}>
        <View style={styles.fakeTrackLeft} />
        <View style={styles.fakeTrackRight} />
        <View
          style={styles.dotsContainer}
        >
          {dots}
        </View>
        <Slider
          minimumValue={1}
          maximumValue={this.props.levelColors.length}
          value={this.state.value}
          minimumTrackTintColor={this.props.minimumTrackColor || "transparent"}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          thumbImage={require('../assets/images/slider.png')}
          thumbTouchSize={{width: 60, height: 60}}
          onValueChange={this.onValueChange}
          onSlidingComplete={this.onSlidingComplete}
          animateTransitions
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
  },
  dotsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: "100%",
    zIndex: -1,
  },
  track: {
    backgroundColor: 'transparent',
    height: 0.4,
    marginHorizontal: 24,
  },
  // Kinda faked this. There might be a bug in react when width is 100%.
  fakeTrackLeft: {
    position: 'absolute',
    left: 24,
    backgroundColor: '#979797',
    width: "50%",
    height: 0.4,
    zIndex: -2,
  },
  fakeTrackRight: {
    position: 'absolute',
    right: 24,
    backgroundColor: '#979797',
    width: "50%",
    height: 0.4,
    zIndex: -2,
  },
  thumb: {
    backgroundColor: "white",
    borderRadius: 24,
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
