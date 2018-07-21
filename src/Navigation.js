import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator, TabBarBottom } from 'react-navigation';
import { ACTIVE_TINT_COLOR, BACKGROUND_COLOR, INACTIVE_TINT_COLOR } from './Constants';
import NewPersonForm from './Form';
import PersonDetails from './PersonDetails';
import PersonList from './PersonList';
import SliderCard from './SliderCard';

class StatisticsScreen extends React.Component {
  render() {
    return (
      <NewPersonForm />
    );
    // return (
    //   <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    //     <Entypo name={'bar-graph'} size={75} color={ACTIVE_TINT_COLOR} />
    //   </View>
    // );
  }
}

class IntakeScreen extends React.Component {
  render() {
    return (
      <View style={styles.stack}>
        <SliderCard />
      </View>
    );
  }
}

class PeopleScreen extends React.Component {
  render() {
    return (
      <PersonDetails
        name="Maria Perez"
        level={3}
        conversationLevel={4}
        phoneNumber="+56 2 52908910"
        keyQuestions={[
          {question: "Are they open to prayer?", response: "Yes"},
          {question: "Are they open to reading the Bible?", response: "No"},
          {question: "Are they open to coming to church?", response: "N/A"},
          {question: "Did they accept Christ?", response: "N/A"},
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  stack: {
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const IntakeStack = createStackNavigator(
  {
    NewPersonForm: NewPersonForm,
    SliderCard: SliderCard,
  }
);

const PeopleStack = createStackNavigator(
  {
    PersonList: PersonList,
    PersonDetails: PersonDetails,
  },
  {
    initialRouteName: "PersonList",
    initialRouteParams: {
      people: [

        {
          name: "Maria Perez",
          level: 4,
          conversationLevel: 5,
          phoneNumber: "+56 2 52908910",
          keyQuestions: [
            {question: "Are they open to prayer?", response: "Yes"},
            {question: "Are they open to reading the Bible?", response: "Yes"},
            {question: "Are they open to coming to church?", response: "Yes"},
            {question: "Did they accept Christ?", response: "No"},
          ],
        },

        {
          name: "Kevin Kim",
          level: 3,
          conversationLevel: 4,
          phoneNumber: "+56 2 52908910",
          keyQuestions: [
            {question: "Are they open to prayer?", response: "Yes"},
            {question: "Are they open to reading the Bible?", response: "Yes"},
            {question: "Are they open to coming to church?", response: "No"},
            {question: "Did they accept Christ?", response: "N/A"},
          ],
        },

      ],
    },
  }
)

export default createBottomTabNavigator(
  {
    Statistics: StatisticsScreen,
    Intake: IntakeStack,
    People: PeopleStack,
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Intake') {
          return (
            <View style={{
                height: 80,
                width: 80,
                borderRadius: 100,
                backgroundColor: '#2E3130',
                paddingTop: 15,
                position: 'absolute',
                alignItems: 'center',
            }}>
              <Ionicons name={'ios-add'} size={45} color={INACTIVE_TINT_COLOR} />
            </View>
          )
        }
        if (routeName === 'Statistics') {
          return <Entypo name={'bar-graph'} size={25} color={tintColor} />;
        }
        if (routeName === 'People') {
          return <MaterialIcons name={'people'} size={25} color={tintColor} />;
        }

      },
    }),
    tabBarOptions: {
      activeTintColor: ACTIVE_TINT_COLOR,
      inactiveTintColor: INACTIVE_TINT_COLOR,
      showLabel: false,
      style: styles.container,
    },
    initialRouteName: 'Intake',
  }
);
