import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LEVEL_COLORS } from "./Constants";

export default class LevelCircle extends React.Component {
  render() {
    return (
      <View style={{
        height: 60,
        width: 60,
      }}>
        <View style={{
          position: "absolute",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: this.props.backgroundColor,
          height: 60,
          width: 60,
          borderRadius: 30,
          borderColor: this.props.borderColor || "#FFFFFF80",
          borderWidth: 2,
        }}>
          <Text style={{
            fontFamily: "proxima-nova-semibold",
            fontSize: 25,
            color: this.props.color,
            textAlign: "center",
          }}>{this.props.number}</Text>
        </View>
      </View>
    );
  }
}
