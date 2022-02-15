import React from 'react';
import { Text, View } from 'react-native';
import InputFieldComponent from '../../reusableComponents/InputField';

export default function SignIn(props:any) {
  return (
  <View>
      <Text>Sign In</Text>
      <InputFieldComponent placeholder="enter your last name" />
  </View>
  )
}
