import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SliderCard from './SliderCard';
import LevelCircle from "./LevelCircle";

export default class YNToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: "none",
    };
  }

  onYPress = () => {
    if (this.state.selection === "Y") {
      this.setState({selection: "none"});
    } else {
      this.setState({selection: "Y"});
    }
  }

  onNPress = () => {
    if (this.state.selection === "N") {
      this.setState({selection: "none"});
    } else {
      this.setState({selection: "N"});
    }
  }

  render() {
    return (
      <View style={{
        position: "absolute",
        right: 0,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}>
        <LevelCircle
          backgroundColor={this.state.selection === "Y" ? "black" : "white"}
          color={this.state.selection === "Y" ? "white" : "black"}
          number="Y"
          size={30}
          sizeFont={12}
          onPress={this.onYPress}
        />
        <LevelCircle
          backgroundColor={this.state.selection === "N" ? "black" : "white"}
          color={this.state.selection === "N" ? "white" : "black"}
          number="N"
          size={30}
          sizeFont={12}
          onPress={this.onNPress}
        />
      </View>
    );
  }
}
