import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SliderCard from './SliderCard';
import LevelCircle from "./LevelCircle";

export default class YNToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: "N/A",
    };
  }

  onYPress = () => {
    let newState = this.state.selection === "Yes" ? "N/A" : "Yes";
    this.setState({selection: newState});
    this.props.onValueChange(newState);
  }

  onNPress = () => {
    let newState = this.state.selection === "No" ? "N/A" : "No";
    this.setState({selection: newState});
    this.props.onValueChange(newState);
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
          backgroundColor={this.state.selection === "Yes" ? "#000000CC" : "white"}
          color={this.state.selection === "Yes" ? "white" : "#000000CC"}
          number="Y"
          size={30}
          fontSize={12}
          onPress={this.onYPress}
        />
        <View style={{width: 10}} />
        <LevelCircle
          backgroundColor={this.state.selection === "No" ? "#000000CC" : "white"}
          color={this.state.selection === "No" ? "white" : "#000000CC"}
          number="N"
          size={30}
          fontSize={12}
          onPress={this.onNPress}
        />
      </View>
    );
  }
}
