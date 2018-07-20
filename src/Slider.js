import React from 'react';
import Slider from "react-native-slider";
import { StyleSheet, View } from 'react-native';
import { LEVELS, LEVEL_COLORS } from "./Constants";

export default class SpectrumSlider extends React.Component {
  render() {
    let dots = LEVELS.map((text, index) => {
      return (
        <View
          key={"dot" + index}
          style={{
            width: 8,
            height: 8,
            borderRadius: 16,
            backgroundColor: LEVEL_COLORS[index],
            marginLeft: index > 0 ? 0 : 24,
            marginRight: index < LEVELS.length - 1 ? 0 : 24,
          }}
        />
      )
    });
    return (
      <View style={styles.container}>
        <View
          style={styles.dotsContainer}
        >
          {dots}
        </View>
        <Slider
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={3}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          thumbTouchSize={{width: 60, height: 60}}
          onValueChange={this.props.onValueChange}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },
  dotsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: 100 + "%",
    zIndex: -1,
  },
  track: {
    backgroundColor: '#979797',
    height: 0.4,
    marginHorizontal: 24,
  },
  thumb: {
    backgroundColor: "white",
    borderRadius: 24,
    borderWidth: 1,
    height: 48,
    width: 48,
  },
});
