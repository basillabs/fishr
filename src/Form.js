import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';

@withMappedNavigationProps()
export default class NewPersonForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
    }
  }

  shouldDisableNext = () => {
    return (
      this.state.name === "" || (
        this.state.phoneNumber === "" && this.state.email === ""
      )
    )
  }

  onNameChanged = (name) => {
    this.setState({name: name});
  }

  onPhoneNumberChanged = (phoneNumber) => {
    this.setState({phoneNumber: phoneNumber});
  }

  onEmailChanged = (email) => {
    this.setState({email: email});
  }

  onButtonPressed = () => {
    this.props.navigation.navigate("SliderCard");
  }

  render() {
    return (
      <View>
        <FormLabel>NAME</FormLabel>
        <FormInput
          textContentType="name"
          onChangeText={this.onNameChanged}
        />
        <FormLabel>PHONE NUMBER</FormLabel>
        <FormInput
          textContentType="telephoneNumber"
          onChangeText={this.onPhoneNumberChanged}
        />
        <FormLabel>EMAIL</FormLabel>
        <FormInput
          textContentType="emailAddress"
          onChangeText={this.onEmailChanged}
        />

        <Button
          onPress={this.onButtonPressed}
          title="NEXT"
          color="#4A90E2"
          disabled={this.shouldDisableNext()}
        />
      </View>
    );
  }
}
