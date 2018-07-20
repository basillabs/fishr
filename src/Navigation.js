import React from 'react';
import { Text, View } from 'react-native';
import { Entypo, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import SliderCard from './SliderCard';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class IntakeScreen extends React.Component {
  render() {
    return (
      <SliderCard />
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

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
          iconName = `ios-add${focused ? '' : '-outline'}`;
          return (
            <View style={{
                height: 80,
                width: 80,
                borderRadius: 100,
                backgroundColor: '#FE6D64',
                paddingTop: 15,
                position: 'absolute',
                alignItems: 'center',
            }}>
              <Ionicons name={iconName} size={45} color={tintColor} />
            </View>
          )
        }
        if (routeName === 'Home') {
          // FIXME: these are different icons
          if (focused) {
            return <Entypo name={'bar-graph'} size={25} color={tintColor} />;
          } else {
            return <Feather name={'bar-chart'} size={25} color={tintColor} />;
          }
        }
        if (routeName === 'Settings') {
          iconName = `people${focused ? '' : '-outline'}`;
          return <MaterialIcons name={iconName} size={25} color={tintColor} />;
        }

      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false,
    },
    initialRouteName: 'Intake',
  }
);
