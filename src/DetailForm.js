import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BACKGROUND_COLOR } from './Constants';
import SliderCard from './SliderCard';
import { CONVERSATION_LEVELS, CONVERSATION_COLORS, KEY_QUESTIONS, LEVELS, LEVEL_COLORS } from "./Constants";
import LevelCircle from "./LevelCircle";

export default class DetailForm extends React.Component {

  renderKeyQuestions = () => {
    let questionRows = KEY_QUESTIONS.map((question, index) => {
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
          <Text style={styles.normalText}>{question}</Text>
          {this.renderYN()}
        </View>
      );
    });
    return (
      <View style={styles.keyQuestionsContainer}>
        <View style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
        }}>
          <Text style={styles.title}>KEY QUESTIONS</Text>
          <View style={{
            width: 50,
            height: 2,
            marginVertical: 20,
            backgroundColor: "#00000019",
          }}/>
        </View>
        {questionRows}
      </View>
    );
  }

  renderYN = () => {
    return (
      <View style={{
        position: "absolute",
        right: 0,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}>
        <LevelCircle
          backgroundColor="white"
          color="black"
          number="Y"
          size={30}
          sizeFont={12}
        />
        <LevelCircle
          backgroundColor="white"
          color="black"
          number="N"
          size={30}
          sizeFont={12}
        />
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <SliderCard
          levelTexts={LEVELS}
          levelColors={LEVEL_COLORS}
          title="SPIRITUAL INTEREST LEVEL"
        />
        <SliderCard
          levelTexts={CONVERSATION_LEVELS}
          levelColors={CONVERSATION_COLORS}
          title="MEASURE CONVERSATION"
          descriptionHeight={40}
        />
        {this.renderKeyQuestions()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
  },
  keyQuestionsContainer: {
    paddingHorizontal: 32,
  },
  title: {
    fontFamily: "proxima-nova-semibold",
    fontSize: 15,
    color: '#666666',
    textAlign: 'center',
  },
  normalText: {
    fontFamily: "georgia",
    fontSize: 14,
    color: "#666666",
  },
});
