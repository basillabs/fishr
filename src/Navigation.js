import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import { ACTIVE_TINT_COLOR, BACKGROUND_COLOR, INACTIVE_TINT_COLOR } from './Constants';
import SliderCard from './SliderCard';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.stack}>
        <Text>Home!</Text>
      </View>
    );
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

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.stack}>
        <Text>Settings!</Text>
      </View>
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

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Intake: IntakeScreen,
    Settings: SettingsScreen,
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
        if (routeName === 'Home') {
          return <Entypo name={'bar-graph'} size={25} color={tintColor} />;
        }
        if (routeName === 'Settings') {
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
