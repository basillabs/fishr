import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { LEVEL_COLORS } from "./Constants";

export default class LevelCircle extends React.Component {
  render() {
    const size = this.props.size || 60;
    const fontSize = this.props.fontSize || 25;
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={{
          height: size,
          width: size,
        }}>
          <View style={{
            position: "absolute",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: this.props.backgroundColor,
            height: size,
            width: size,
            borderRadius: size / 2,
            borderColor: this.props.borderColor || "#FFFFFF80",
            borderWidth: 2,
          }}>
            <Text style={{
              fontFamily: "proxima-nova-semibold",
              fontSize: fontSize,
              color: this.props.color,
              textAlign: "center",
            }}>{this.props.number}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
