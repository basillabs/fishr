import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LEVELS, LEVEL_COLORS } from "./Constants";
import LevelCircle from "./LevelCircle";

export default class PersonList extends React.Component {
  render() {
    let people = this.props.people.map((person, index) => {
      return (
        <View
          key={"person" + index}
          style={styles.personContainer}
        >
          <View style={styles.personContainerInner}>
            <LevelCircle
              backgroundColor={LEVEL_COLORS[person.level - 1]}
              color="white"
              number={person.level}
            />
            <Text style={styles.name}>{person.name}</Text>
            <MaterialIcons style={styles.chevron} name={'chevron-right'} size={16} color={'#999999'} />
          </View>
        </View>
      );
    });
    let peopleWithBorders = [];
    people.forEach((personView, index) => {
      peopleWithBorders.push(personView);
      peopleWithBorders.push(
        <View key={"border" + index} style={{
          height: 0.4,
          backgroundColor: "#979797",
        }}/>
      );
    });
    return (
      <View style={styles.container}>
        {peopleWithBorders}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  personContainer: {
    padding: 34,
    height: 100,
  },
  personContainerInner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontFamily: "georgia",
    fontSize: 19,
    color: "#353535",
    marginLeft: 18,
  },
  chevron: {
    position: "absolute",
    right: 10,
  },
});
