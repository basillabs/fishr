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
          backgroundColor={this.state.selection === "Y" ? "#000000CC" : "white"}
          color={this.state.selection === "Y" ? "white" : "#000000CC"}
          number="Y"
          size={30}
          fontSize={12}
          onPress={this.onYPress}
        />
        <View style={{width: 10}} />
        <LevelCircle
          backgroundColor={this.state.selection === "N" ? "#000000CC" : "white"}
          color={this.state.selection === "N" ? "white" : "#000000CC"}
          number="N"
          size={30}
          fontSize={12}
          onPress={this.onNPress}
        />
      </View>
    );
  }
}
