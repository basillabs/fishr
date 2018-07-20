import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LEVELS, LEVEL_COLORS } from "./Constants";

export default class PersonDetails extends React.Component {
  renderTitleBar = () => {
    return (
      <View style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: LEVEL_COLORS[this.props.level - 1],
        height: 200,
      }}>
        <Text style={styles.titleText}>{this.props.name}</Text>
        <View style={styles.titleLevelCircle}>
          <Text style={styles.titleLevel}>{this.props.level}</Text>
        </View>
      </View>
    )
  }

  renderContactInfo = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.headerText}>MOBILE</Text>
        <Text style={styles.phoneText}>{this.props.phoneNumber}</Text>
      </View>
    );
  }

  renderDelimiter = () => {
    return (
      <View style={styles.delimiter} />
    )
  }

  renderSpiritualInterest = () => {
    return (
      <View style={styles.sectionContainer}>
        <View style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
          <Text style={styles.headerText}>SPIRTUAL INTEREST LEVEL</Text>
          {this.renderSpiritualMeter()}
        </View>
        <View style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <View style={{
            height: 60,
            width: 70,
          }}>
            <View style={{
              position: "absolute",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: LEVEL_COLORS[this.props.level - 1],
              height: 60,
              width: 60,
              borderRadius: 30,
              borderColor: "#FFFFFF80",
              borderWidth: 2,
            }}>
              <Text style={styles.titleLevel}>{this.props.level}</Text>
            </View>
          </View>
          <View style={{marginRight: 70}}> // why...
            <Text style={styles.normalText}>{LEVELS[this.props.level - 1]}</Text>
          </View>
        </View>
      </View>
    );
  }

  renderSpiritualMeter = () => {
    let rects = LEVEL_COLORS.map((color, index) => {
      return (
        <View
          key={"meter" + index}
          style={{
            backgroundColor: color,
            width: 18,
            height: index == this.props.level - 1 ? 10 : 4,
            marginHorizontal: 1,
          }}
        />
      );
    });
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: 'flex-end',
        height: 10,
      }}>
        {rects}
      </View>
    )
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="dark-content" />
        {this.renderTitleBar()}
        {this.renderContactInfo()}
        {this.renderDelimiter()}
        {this.renderSpiritualInterest()}
        {this.renderDelimiter()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    justifyContent: "center",
  },
  titleText: {
    fontFamily: "georgia",
    fontSize: 36,
    color: "white",
    paddingLeft: 15,
  },
  titleLevelCircle: {
    position: "absolute",
    right: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: "#FFFFFF80",
    borderWidth: 2,
  },
  titleLevel: {
    fontFamily: "proxima-nova-semibold",
    fontSize: 25,
    color: "white",
    textAlign: 'center',
  },
  sectionContainer: {
    padding: 32,
  },
  headerText: {
    fontFamily: "proxima-nova-semibold",
    fontSize: 11,
    color: "#666666",
    marginBottom: 10,
  },
  normalText: {
    fontFamily: "georgia",
    fontSize: 14,
    color: "#666666",
  },
  phoneText: {
    fontFamily: "proxima-nova-regular",
    fontSize: 24,
    color: "#4A90E2",
  },
  delimiter: {
    marginHorizontal: 32,
    height: 0.4,
    backgroundColor: "#979797",
  }
});
