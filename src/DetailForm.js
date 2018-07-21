import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import { BACKGROUND_COLOR } from './Constants';
import SliderCard from './SliderCard';
import { CONVERSATION_LEVELS, CONVERSATION_COLORS, KEY_QUESTIONS, LEVELS, LEVEL_COLORS } from "./Constants";
import LevelCircle from "./LevelCircle";
import YNToggle from "./YNToggle";
import peopleStore from "./Store";

@withMappedNavigationProps()
export default class DetailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spiritualLevel: 0,
      conversationLevel: 0,
      keyQuestions: KEY_QUESTIONS.map(() => { return "N/A" }),
    };
  }

  shouldDisableDone = () => {
    return this.state.spiritualLevel === 0 || this.state.conversationLevel === 0;
  }

  onDone = () => {
    let newPerson = {
      name: this.props.name,
      level: this.state.spiritualLevel,
      conversationLevel: this.state.conversationLevel,
      phoneNumber: this.props.phoneNumber,
      keyQuestions: this.state.keyQuestions,
    };
    peopleStore.push(newPerson);
    this.props.navigation.replace("NewPersonForm");
    this.props.navigation.navigate("PersonList", {
      people: peopleStore,
    });
  }

  onSpiritualLevelChanged = (value) => {
    this.setState({spiritualLevel: value});
  }

  onConversationLevelChanged = (value) => {
    this.setState({conversationLevel: value});
  }

  onYNChanged = (index) => (value) => {
    let keyQuestions = this.state.keyQuestions;
    keyQuestions[index] = value;
    this.setState({keyQuestions: keyQuestions});
  }

  renderTitleBar = () => {
    return (
      <View style={{
        position: "absolute",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#4A90E2",
        height: 160,
        width: "100%",
        zIndex: 10,
      }}>
        <Text style={styles.titleText}>{this.props.name}</Text>
        <Button
          onPress={this.onDone}
          title="Done"
          color="white"
          disabled={this.shouldDisableDone()}
        />
      </View>
    )
  }

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
          <YNToggle onValueChange={this.onYNChanged(index)}/>
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

  render() {
    return (
      <View>
        {this.renderTitleBar()}
        <ScrollView style={styles.container}>
          <View style={{height: 215}} />
          <SliderCard
            levelTexts={LEVELS}
            levelColors={LEVEL_COLORS}
            title="SPIRITUAL INTEREST LEVEL"
            onValueChange={this.onSpiritualLevelChanged}
          />
          <SliderCard
            levelTexts={CONVERSATION_LEVELS}
            levelColors={CONVERSATION_COLORS}
            title="MEASURE CONVERSATION"
            descriptionHeight={40}
            onValueChange={this.onConversationLevelChanged}
          />
          {this.renderKeyQuestions()}
          <View style={{height: 55}} />
        </ScrollView>
      </View>
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
  titleText: {
    fontFamily: "georgia",
    fontSize: 36,
    color: "white",
    paddingLeft: 15,
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
