import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import { DEFAULT_BLUE } from './Constants';

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
    this.props.navigation.navigate("DetailForm", {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel labelStyle={styles.label}>NAME</FormLabel>
        <FormInput
          textContentType="name"
          containerStyle={styles.input}
          inputStyle={styles.inputText}
          underlineColorAndroid={DEFAULT_BLUE}
          onChangeText={this.onNameChanged}
        />
        <FormLabel labelStyle={styles.label}>PHONE NUMBER</FormLabel>
        <FormInput
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
          containerStyle={styles.input}
          inputStyle={styles.inputText}
          underlineColorAndroid={DEFAULT_BLUE}
          onChangeText={this.onPhoneNumberChanged}
        />
        <FormLabel labelStyle={styles.label}>EMAIL</FormLabel>
        <FormInput
          textContentType="emailAddress"
          keyboardType="email-address"
          containerStyle={styles.input}
          inputStyle={styles.inputText}
          underlineColorAndroid={DEFAULT_BLUE}
          onChangeText={this.onEmailChanged}
        />

        <Button
          onPress={this.onButtonPressed}
          title="NEXT"
          color={DEFAULT_BLUE}
          disabled={this.shouldDisableNext()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 26,
  },
  label: {
    fontFamily: "proxima-nova-semibold",
    fontSize: 11,
    color: "#666666B2",
  },
  input: {
    marginBottom: 25,
  },
  inputText: {
    fontFamily: "georgia",
    fontSize: 24,
    color: "#666666",
  },
});
