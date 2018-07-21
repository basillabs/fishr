import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import { MaterialIcons } from '@expo/vector-icons';
import { LEVELS, LEVEL_COLORS } from "./Constants";
import LevelCircle from "./LevelCircle";

@withMappedNavigationProps()
export default class PersonList extends React.Component {

  onPress = (index) => () => {
    this.props.navigation.navigate("PersonDetails", this.props.people[index]);
  }

  render() {
    let people = this.props.people.map((person, index) => {
      return (
        <TouchableHighlight
          key={"person" + index}
          onPress={this.onPress(index)}
          underlayColor="#666666"
        >
          <View
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
        </TouchableHighlight>
      );
    });
    let peopleWithBorders = [];
    people.forEach((personView, index) => {
      peopleWithBorders.push(personView);
      peopleWithBorders.push(
        <View key={"border" + index} style={{
          height: 1,
          backgroundColor: "#97979780",
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
