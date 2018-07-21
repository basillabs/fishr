import React from 'react';
import Slider from "react-native-slider";
import { StyleSheet, View } from 'react-native';

export default class SpectrumSlider extends React.Component {
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
        <View
          style={styles.dotsContainer}
        >
          {dots}
        </View>
        <Slider
          minimumValue={1}
          maximumValue={this.props.levelColors.length}
          step={1}
          value={1}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          thumbImage={require('../assets/images/slider.png')}
          thumbTouchSize={{width: 60, height: 60}}
          onValueChange={this.props.onValueChange}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
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
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
