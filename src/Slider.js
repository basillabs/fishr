import React from 'react';
import Slider from "react-native-slider";
import { StyleSheet, View } from 'react-native';

const LEVELS = [
  "ONE",
  "TWO",
  "THREE",
  "FOUR",
  "FIVE",
]

const LEVEL_COLORS = [
  '#ED5555',
  '#F1B34E',
  '#EFDA5E',
  '#80E06C',
  '#30BE91',
]

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
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 0.1,
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
