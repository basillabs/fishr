import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BACKGROUND_COLOR } from './Constants';
import SliderCard from './SliderCard';
import { CONVERSATION_LEVELS, CONVERSATION_COLORS, LEVELS, LEVEL_COLORS } from "./Constants";

export default class DetailForm extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
  },
  contentContainer: {
    marginVertical: 50,
  },
});
