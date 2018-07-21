import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { withMappedNavigationProps } from 'react-navigation-props-mapper'
import { CONVERSATION_LEVELS, DEFAULT_BLUE, KEY_QUESTIONS, LEVELS, LEVEL_COLORS } from "./Constants";
import LevelCircle from "./LevelCircle";

@withMappedNavigationProps()
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
        paddingHorizontal: 32,
      }}>
        <Text style={styles.titleText}>{this.props.name}</Text>
        <LevelCircle
          backgroundColor={LEVEL_COLORS[this.props.level - 1]}
          color="white"
          number={this.props.level}
        />
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
          <LevelCircle
            backgroundColor={LEVEL_COLORS[this.props.level - 1]}
            color="white"
            number={this.props.level}
          />
          <View style={{marginLeft: 10, marginRight: 60}}>
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

  renderConversationSpectrum = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.headerText}>CONVERSATION SPECTRUM</Text>
        <View style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}>
          <LevelCircle
            backgroundColor="white"
            color="black"
            borderColor="#07070719"
            number={this.props.conversationLevel}
          />
          <Text style={{
            fontFamily: "georgia",
            fontSize: 14,
            color: "#666666",
            marginLeft: 10,
            width: 120,
          }}>{CONVERSATION_LEVELS[this.props.conversationLevel - 1]}</Text>
          {this.renderConversationMeter()}
        </View>
      </View>
    );
  }

  renderConversationMeter = () => {
    let dots = CONVERSATION_LEVELS.map((level, index) => {
      return (
        <View
          key={"conversationDot" + index}
          style={{
            width: 6,
            height: 6,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: "#00000072",
            backgroundColor: index < this.props.conversationLevel ? "#000000A0" : "#FFFFFFFF",
          }}
        />
      );
    });
    return (
      <View style={{width: 100, position: "absolute", right: 0}}>
        <View style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          {dots}
        </View>
      </View>
    );
  }

  renderKeyQuestions = () => {
    let questionRows = this.props.keyQuestions.map((response, index) => {
      return (
        <View
          key={"keyQuestion" + index}
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={styles.normalText}>{KEY_QUESTIONS[index]}</Text>
          <Text style={
            response === "Yes" ? styles.yesText : styles.nonYesText
          }>
            {response}
          </Text>
        </View>
      );
    });
    return (
      <View style={styles.sectionContainer}>
        <View style={{
          flex: 1,
          flexDirection: "column",
        }}>
          <Text style={styles.headerText}>KEY QUESTIONS</Text>
          {questionRows}
        </View>
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
        {this.renderConversationSpectrum()}
        {this.renderDelimiter()}
        {this.renderKeyQuestions()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  titleText: {
    fontFamily: "georgia",
    fontSize: 36,
    color: "white",
  },
  sectionContainer: {
    padding: 32,
  },
  headerText: {
    fontFamily: "proxima-nova-semibold",
    fontSize: 11,
    color: "#666666",
    marginBottom: 20,
  },
  normalText: {
    fontFamily: "georgia",
    fontSize: 14,
    color: "#666666",
  },
  yesText: {
    fontFamily: "proxima-nova-semibold",
    fontSize: 14,
    textAlign: 'right',
    width: 40,
  },
  nonYesText: {
    fontFamily: "proxima-nova-semibold",
    fontSize: 14,
    color: "#0000004F",
    textAlign: 'right',
    width: 40,
  },
  phoneText: {
    fontFamily: "proxima-nova-regular",
    fontSize: 24,
    color: DEFAULT_BLUE,
  },
  delimiter: {
    marginHorizontal: 32,
    height: 0.4,
    backgroundColor: "#979797",
  }
});
